
import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {isNullOrUndefined} from "util";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }


  username;
  password;
  login(username, password) {
    console.log([username, password]);
    if (username === undefined || password === undefined ) {
      alert('No field can be left blank');
      window.location.reload();
    } else {
      this.service
        .login(username, password)
        .then((response) => {

          if (response == null) {
            alert('Credentials cannot be left null');
            this.router.navigate(['login']);
          } else {
            this.router.navigate(['profile']);
          }
        });
    }
  }



  ngOnInit() {
  }

}






