import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {



  constructor(private service: UserServiceClient,
              private router: Router) { }

  isLoggedIn = false;
  isAdmin = false;



  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }


  ngOnInit() {
      this.service.profile().then(response => {
        if (response != null) {
          this.isLoggedIn = true;
        }
        if (response.username === 'admin') {
          this.isAdmin = true;
        }

      });

  }

}
