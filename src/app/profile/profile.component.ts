import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {Section} from '../models/section.model.client';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  // user = {};
  username;
  firstName;
  lastName;
  email;
  password;
  user = new User();
  // section = new Section();
  sections: Section[] = [];
  isAdmin = false;
  courseId;
  userId;
  userNew = new User();

  update(userNew) {
    console.log(userNew);
    this.service.updateUser(userNew);
    // window.location.reload();
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }


  unenrollUser(section, userNew) {
    console.log(userNew._id);
    console.log(section._id);
    this.sectionService.unenrollStudentinSection(section, userNew).then(() => window.location.reload());
  }

  ngOnInit() {
    this.service
      .profile()
      .then(userNew => {
        this.lastName = userNew.lastName;
        this.firstName = userNew.firstName;
        this.email = userNew.email;
        this.password = userNew.password;
        this.username = userNew.username;
        this.userNew = userNew;
        // this.userId = userNew._id;

        if (userNew.username === 'admin') {
          this.isAdmin = true;
        } else {
          console.log('Not the admin profile');
        }
        }
        );

    // this.username = user.username;
    this.sectionService
      .findSectionsForStudent()
      .then(sections => {
        for (const section of sections) {
          console.log("Section is:" + section);
          console.log("section.section is:" + section.section);
          if (section.section == null) {
            console.log('one empty console message for the section with null value');
            //alert('no section enrollment for this element');
          } else {
            this.sections.push(section.section);
          }

    }
        // this.sections = sections);

  });
    // for (const student of students) {
    //   if (student.student.firstName != null) {
    //     console.log(" first name is not null... ");
    //   }
    //   console.log(student.student.firstName);
    //   this.students.push(student.student);
    //
    //



  }

}
