export class LessonServiceClient {

  findLessonsForModule(moduleId) {
    return fetch(' https://cs5610-summer2-2018-mihirg.herokuapp.com/api/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
