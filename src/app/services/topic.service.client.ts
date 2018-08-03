export class TopicServiceClient {

  findTopicsForLesson(lessonId) {
    return fetch('http://localhost:8080/api/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }
}
