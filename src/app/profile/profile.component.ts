import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';





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
  sections = [];
  isAdmin = false;

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
      .then(sections => this.sections = sections );
  }

}
