import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizServiceClient} from "../services/quiz.service.client";
import {UserServiceClient} from "../services/user.service.client";
import {User} from "../models/user.model.client";
import {QuestionServiceClient} from "../services/question.service.client";


@Component({
  selector: 'app-quiz-submissions',
  templateUrl: './quiz-submissions.component.html',
  styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private service: QuizServiceClient,
              private questionService: QuestionServiceClient,
              private aRoute: ActivatedRoute) {

    // this.aRoute.params.subscribe(params => this.loadSubmissionsForUser([params['quizId']]));
  }



  quizId = '';
  submissionTime = '';
  submissions = [];
  username = '';
  student = new User();
  usernames = [];
  userId = '';
  answers = [];
  questionId = '';
  question = {};
  questionType = '';
  trueFalseAnswer = '';
  essayAnswer = '';
  multipleChoiceAnswer = '';
  fillBlanksAnswers = {};
  variable1 = '';
  combinedObject = {usernamesNew: this.usernames, answersNew:  this.answers };
  combinedObjectNew = {};
  arrayOfObjects = [];
  copyOfArrayOfObjects = [];
  // question = '';
  // names = [];
  keyWord = '';


  reset(keyWord) {

  }

  search(keyWord) {
    console.log(this.copyOfArrayOfObjects);
    if (keyWord === '') {
      this.arrayOfObjects = this.copyOfArrayOfObjects;
    } else {
      this.arrayOfObjects = this.copyOfArrayOfObjects;
      this.arrayOfObjects = this.arrayOfObjects.filter(function(objs) {
        return  objs.usernameM.toLowerCase().includes(keyWord.toLowerCase());
      })
    }
  }

   loadSubmissions(quizId) {
    this.quizId = quizId[0];
    this.service.loadSubmission(this.quizId).then((submissions) => {
      // this.names = names;
      this.submissions = submissions ;
      // for (const submission of submissions) {
      //     this.userService.findUserById(submission.student).then(
      //       (student) => {
      //         this.username = student.username;
      //       }
      //     );
      // }
      // console.log(this.username);
        console.log('submissions are ********************' + JSON.stringify(this.submissions));




      for (const submission of submissions) {

        console.log('submission is **********************************' + JSON.stringify(submission));

        this.answers.push(submission.answers);
        console.log('answers are:' + JSON.stringify(this.answers));
       /* for (const answer of this.answers) {
          this.questionService.findQuestionById(answer._id).then(
            (question) => {
              this.question = answer.question;
              console.log('Question is:' + JSON.stringify(this.question));
            }
          );
        }*/
        this.userService.findUserById(submission.student).then( (response) => {
          this.username = response.username;
          this.usernames.push(response.username);
          console.log(this.username);
          this.arrayOfObjects.push({usernameM: this.username, answerM: submission.answers, timeM: submission.submissionTime});
          console.log('arrayofObjectsis :' + JSON.stringify(this.arrayOfObjects));
        });

        /* this.combinedObjectNew = {usernameM: this.username, answerM: this.answers };
        this.arrayOfObjects.push(this.combinedObjectNew);*/
      }
    });
    this.copyOfArrayOfObjects  =  this.arrayOfObjects;
  }

 /* loadSubmissionsForUser(quizId) {
    this.quizId = quizId;
    this.service.loadSubmissionforUser(this.quizId).then((submissions) => {
      // this.names = names;
      this.submissions = submissions ;
      // for (const submission of submissions) {
      //     this.userService.findUserById(submission.student).then(
      //       (student) => {
      //         this.username = student.username;
      //       }
      //     );
      // }
      // console.log(this.username);
      console.log('submissions for user: ' + this.submissions);
    });
  }*/




  ngOnInit() {

    this.aRoute.params.subscribe(params => this.loadSubmissions([params['quizId']]));
  }

}
