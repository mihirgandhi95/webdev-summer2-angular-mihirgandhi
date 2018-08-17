/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private activatedRoute: ActivatedRoute) { }

  quizId = ''
  quiz = {
    submissionTime: new Date(),
    questions: {},
    title: ''
  }
  submissionId = ''
  submissionNew = {}
/*  submitQuiz = quiz => {
    // console.log('inside submit quiz');
    this.service
      .submitQuiz(quiz)
      .then(submission => console.log('Submission is:' + submission));
  }*/


  submitQuiz(quiz) {
    console.log("*********************THIS IS QUIZ********************");
    alert('quiz submitted!')
    this.quiz.submissionTime = new Date();
    console.log(quiz)
    this.service.submitQuiz(quiz).then((submission) => {
      this.submissionId  = submission._id;
      console.log(this.submissionId);
      this.submissionNew = submission;
      console.log(this.submissionNew);
      // window.location.replace('/quiz/' + this.quiz._id + '/submission/' + this.submissionId);
       window.location.replace('/quiz/' + quiz._id + '/submission/' + this.submissionId);

      console.log(submission); });
  }



  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => this.service
        .findQuizById(params['quizId'])
        .then(quiz => this.quiz = quiz));
  }

}
