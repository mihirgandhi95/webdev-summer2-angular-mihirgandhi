import {Injectable} from '@angular/core';

@Injectable()
export class QuestionServiceClient {

  findQuestionById = questionId =>
    fetch('https://backendassignment5.herokuapp.com/api/question/' + questionId)
      .then(response => response.json())


}
