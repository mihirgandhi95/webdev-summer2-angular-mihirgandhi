import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  password2;
  userList = [];
  flag = false;

  register(username, password, password2) {



    if (password === password2) {
      this.service.findUsers().then(response => {
        for (const user of response) {
          this.userList.push(user.username);
        }

        for (const name of this.userList) {
          if (name === username) {
            this.flag = true;
          }
        }
        if (this.flag === true) {
          alert('username cannot be taken, choose another username');
          window.location.reload();
        }
        else {
          this.service
            .createUser(username, password)
            .then(() =>
              this.router.navigate(['profile']));
        }

      });
    }
    else{
      alert('passwords are not the same, please enter same passwords');
      window.location.reload();
    }

  }





  ngOnInit() {
  }

}





