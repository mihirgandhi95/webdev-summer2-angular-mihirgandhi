import {Injectable} from '@angular/core';

@Injectable()
export class QuestionServiceClient {

  findQuestionById = questionId =>
    fetch('http://localhost:4000/api/question/' + questionId)
      .then(response => response.json())

}
