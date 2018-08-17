export class CourseNavigatorServiceClient {





  findAllCourses() {
    return fetch
    (' https://cs5610-summer2-2018-mihirg.herokuapp.com/api/course')
      .then(response => response.json());
  }



  findModulesForCourse(courseId) {
    return fetch
    (' https://cs5610-summer2-2018-mihirg.herokuapp.com/api/course/'
      + courseId + '/module')
      .then(response => response.json());

  }


  findLessonsForModule(moduleId) {
    return fetch
    (' https://cs5610-summer2-2018-mihirg.herokuapp.com/api/module/'
      + moduleId + '/lesson')
      .then(response => response.json());
  }


  findTopicsForLesson(lessonId) {
    return fetch
    ('https://cs5610-summer2-2018-mihirg.herokuapp.com/api/lesson/'
      + lessonId + '/topic')
      .then(response => response.json());
  }

  findWidgetsForTopic(topicId) {
    return fetch
    (' https://cs5610-summer2-2018-mihirg.herokuapp.com/api/topic/'
      + topicId + '/widget')
      .then(response => response.json());
  }



}
