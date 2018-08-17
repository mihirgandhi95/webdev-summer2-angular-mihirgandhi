import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {


   loadSingleSubmission(quizId, submissionId) {
     return fetch('https://backendassignment5.herokuapp.com/api/quiz/' + quizId + '/submission/' + submissionId ,
       {
         method: 'get',
         credentials: 'include',
         headers: {
           'content-type': 'application/json',
         }}).then(
       response => response.json()
     );
   }

  loadSubmission(quizId) {
    return fetch('https://backendassignment5.herokuapp.com/api/quiz/' + quizId + '/submissions',
      {
        method: 'get',
        credentials: 'include',
        headers: {
          'content-type': 'application/json',
        }}).then(
      response => response.json()
    );
  }

/*  loadSubmissionforUser(quizId) {
    return fetch('http://localhost:4000/api/quiz/' + quizId + '/submissions/user',
      {
        method: 'get',
        credentials: 'include',
        headers: {
          'content-type': 'application/json',
        }}).then(
      response => response.json()
    );
  }*/


  submitQuiz(quiz) {
     return fetch('https://backendassignment5.herokuapp.com/api/quiz/' + quiz._id + '/submission', {
      method: 'post',
      body: JSON.stringify(quiz),
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    }).then(
    response => response.json()
);
}

  createQuiz(quiz) {}
  findAllQuizzes = () =>
    fetch('https://backendassignment5.herokuapp.com/api/quiz')
      .then(response => response.json())
  findQuizById = quizId =>
    fetch('http://localhost:4000/api/quiz/' + quizId)
      .then(response => response.json())
  updateQuiz(quizId, quiz) {}
  deleteQuiz(quizId) {}
}
