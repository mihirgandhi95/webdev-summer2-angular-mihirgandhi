export class TopicServiceClient {

  findTopicsForLesson(lessonId) {
    return fetch('https://cs5610-summer2-2018-mihirg.herokuapp.com/api/lesson/' + lessonId + '/topic')
      .then(response => response.json());


  }
}
