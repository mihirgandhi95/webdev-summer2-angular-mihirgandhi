import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import {ActivatedRoute} from "@angular/router";
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.css']
})
export class EnrollmentsComponent implements OnInit {


  students: User[] = [];
  sectionId;
  student = new User();
  firstName;
  lastName;

  constructor(private sectionService: SectionServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));

    // const self = this;

   /* this.sectionService.findStudentsForSection(this.sectionId).then((students) => {
        self.firstName = students[3].firstName;
      }
    );*/
  }

  setParams(params) {
    this.sectionId = params['sectionId'];
  }


  ngOnInit() {
    this.sectionService.findStudentsForSection(this.sectionId).then((students) => {
      for (const student of students) {
        if (student.student.firstName != null) {
          console.log(" first name is not null... ");
          this.students.push(student.student);
        }
          console.log(student.student.firstName);

          /*this.firstName = student.firstName;
          this.student = student;
          this.lastName = student.lastName;*/
        }
    });
  }

  /*then(userNew => {
            this.lastName = userNew.lastName;
            this.firstName = userNew.firstName;
            this.email = userNew.email;
            this.password = userNew.password;
            this.username = userNew.username;
            this.userNew = userNew;
          }
        );*/


}
