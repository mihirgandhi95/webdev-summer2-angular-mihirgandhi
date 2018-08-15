// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-quiz-list',
//   templateUrl: './quiz-list.component.html',
//   styleUrls: ['./quiz-list.component.css']
// })
// export class QuizListComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
//




import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes = []
  isAdmin = false;
  userId;

  constructor(private service: QuizServiceClient,
              private userService: UserServiceClient) { }

  ngOnInit() {
    this.service.findAllQuizzes()
      .then(quizzes => this.quizzes = quizzes);




    this.userService.profile().then(response => {
      this.userId = response._id;
      if (response.username === 'admin') {
        this.isAdmin = true;
      }
    });

  }

}
