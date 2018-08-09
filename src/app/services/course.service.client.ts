import {Course} from '../models/course.model.client';

export class CourseServiceClient {

  // COURSE_URL = 'http://localhost:8080/api/course';

  COURSE_URL = 'https://cs5610-summer2-2018-mihirg.herokuapp.com/api/course';
  SECTION_URL = 'https://cs5610-summer2-2018-mihirg.herokuapp.com/api/section/course';






  // SECTION_URL = 'http://localhost:8080/api/section/course';
  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json() );
  }

  findCourseById(courseId) {
    return fetch(this.SECTION_URL + '/' + courseId)
      .then(response => response.json() );
  }





}
