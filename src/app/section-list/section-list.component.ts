import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private userService: UserServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']))
  }



  sectionName = '';
  seats = '';
  courseId = '';
  sections = [];
  userId;
  sectionIdList = [];
  courseSectionIdList = [];
  isAdmin = false;
  isEnrolled = false;




  loadSections(courseId) {
    this.courseId = courseId;
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  createSection(sectionName, seats) {
    this
      .service
      .createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  enroll(section) {
    // alert(section._id);
    this.service
      .enrollStudentInSection(section._id)
      .then(() => {
        this.router.navigate(['profile']);
      });
  }


  deleteSection(sectionId) {
    this.service.deleteSection(sectionId);
    window.location.reload();
  }




  ngOnInit() {

    this.loadSections(this.courseId);

    this.service.findSectionsForCourse(this.courseId).then((response) => {
      for (const section of response) {
        this.courseSectionIdList.push(section._id);
      }
    });



    this.userService.profile().then(response => {
      this.userId = response._id;
      if (response.username === 'admin') {
        this.isAdmin = true;
      }
    });

    this.userService.profile().then(response => {
      if (response.username === 'admin') {
        this.service.findSectionsForStudent().then((response1) => {

          for (const sct of response1) {
            try {
              if (sct.section._id !== null) {
                this.sectionIdList.push(sct.section._id);
              }
            } catch (e) {
              if (e instanceof TypeError) {
                console.log(e, true);
              } else {
                console.log(e, false);
              }
            }
          }
        });
      }
    });


  }

}
