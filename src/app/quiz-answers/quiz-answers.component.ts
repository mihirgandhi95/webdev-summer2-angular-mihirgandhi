import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizServiceClient} from "../services/quiz.service.client";
import {QuestionServiceClient} from "../services/question.service.client";
import {UserServiceClient} from "../services/user.service.client";
import {User} from "../models/user.model.client";

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private service: QuizServiceClient,
              private questionService: QuestionServiceClient,
              private aRoute: ActivatedRoute) { }






  quizId = '';
  submissionTime = '';
  submissionId = '';
  submissions = [];
  username = '';
  student = new User();
  usernames = [];
  userId = '';
  answers = [];
  answersNew = [];
  questionId = '';
  question = {};
  questionType = '';
  trueFalseAnswer = '';
  essayAnswer = '';
  multipleChoiceAnswer = '';
  fillBlanksAnswers = {};
   submission = {};
  variable1 = '';
  combinedObject = {usernamesNew: this.usernames, answersNew:  this.answers };
  combinedObjectNew = {};
  arrayOfObjects = [];
  copyOfArrayOfObjects = [];
  // question = '';
  // names = [];
  keyWord = '';

  loadSubmission(quizId, submissionId) {
    console.log('loadSubmission is:' + quizId);
    console.log('loadSubmission is:' + submissionId);

    this.service.loadSingleSubmission(quizId, submissionId).then((submission) => {
        this.submission = submission[0];
        console.log(this.submission);
        console.log('inside singleload');
        //
        // for (const answer of submission.answers) {
        //
        //   console.log('submission is **********************************' + JSON.stringify(submission));
        //
        //   this.answersNew.push(answer);
        //
        // }
      }

    );
  }


  // loadSubmissions(quizId) {
  //   this.quizId = quizId[0];
  //   this.service.loadSubmission(this.quizId).then((submissions) => {
  //     this.submissions = submissions ;
  //     console.log('submissions are ********************' + JSON.stringify(this.submissions));
  //     for (const submission of submissions) {
  //       console.log('submission is **********************************' + JSON.stringify(submission));
  //       this.answers.push(submission.answers);
  //       console.log('answers are:' + JSON.stringify(this.answers));
  //       this.userService.findUserById(submission.student).then( (response) => {
  //         this.username = response.username;
  //         this.usernames.push(response.username);
  //         console.log(this.username);
  //         this.arrayOfObjects.push({usernameM: this.username, answerM: submission.answers, timeM: submission.submissionTime});
  //         console.log('arrayofObjectsis :' + JSON.stringify(this.arrayOfObjects));
  //       });
  //     }
  //   });
  //   this.copyOfArrayOfObjects  =  this.arrayOfObjects;
  // }

  setParams(params) {
    this.quizId = params['quizId'];
    this.submissionId = params['submissionId'];
    console.log(this.quizId);
    console.log(this.submissionId);
    this.loadSubmission(this.quizId, this.submissionId);
  }

  ngOnInit() {

    this.aRoute.params.subscribe(params => this.setParams(params));
    // this.aRoute.params.subscribe(params => this.loadSubmission([params['submissionId']]));
  }

}
