import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private userService: UserServiceClient,
              private sectionService: SectionServiceClient) { }




  // course = new Course();
  courses: Course [] = [];
  studentSections = [];
  user = new User();
  isAdmin = false;
  isLoggedIn = false;
  isRegistered = false;
  studentEnrolledCourses: Course[] = [];
  studentCourses = [];




  ngOnInit() {

      this.service.findAllCourses()
        .then(courses => this.courses = courses);

      this.userService.profile().then(response => {
        this.user = response;
        // check if the user object in response is null
        if (response != null) {
          this.isLoggedIn =  true;
        }
        if (response != null && response.username !== 'admin') {
          this.sectionService.findSectionsForStudent().then((result) => {
            this.studentSections = result;
            // find sections of the course and push the courseId in the studentCourses array
            for (const sections of this.studentSections) {
              if (sections.section != null) {
                this.studentCourses.push(sections.section.courseId);
              }
            }


            for (const course of this.studentCourses) {
              console.log("Course in studentCourses is: "+ course);
              this.service.findCourseById(course).then(result1 => {
                console.log(result1);
                console.log("Result1 is:" + result1);
                this.studentEnrolledCourses.push(result1);
              });
            }


          });
        }
        if (response.username === 'admin') {
          this.isAdmin = true;
        }
      });






  }

}
