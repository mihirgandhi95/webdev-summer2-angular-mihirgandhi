export class SectionServiceClient {

  // SECTION_URL = 'https://backendassignment5.herokuapp.com/api/course/COURSEID/section';
  SECTION_URL = 'http://localhost:4000/api/course/COURSEID/section';


  findSectionsForStudent() {
    // const url = 'https://backendassignment5.herokuapp.com/api/student/section';
    const url = 'http://localhost:4000/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = 'http://localhost:4000/api/section/' + sectionId + '/enrollment';
    // const url = 'https://backendassignment5.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }


  unenrollStudentinSection(enrollment, user) {
    // const url = 'https://backendassignment5.herokuapp.com/api/student/' + enrollment._id + '/section/' + user._id + '/unenroll/' + enrollment._id;

    const url = 'http://localhost:4000/api/student/' + enrollment._id + '/section/' + user._id + '/unenroll/' + enrollment._id;
    return fetch(url, {
      method: 'delete'
    });
  }


  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }


  deleteSection(sectionId) {
    // const url = 'https://backendassignment5.herokuapp.com/api/section/' + sectionId;
    const url = 'http://localhost:4000/api/section/' + sectionId;
    return fetch(url,
      {
        method: 'delete'
      });
  }


  findStudentsForSection(sectionId) {
    // const url = 'https://backendassignment5.herokuapp.com/api/student/section/' + sectionId;
    const url = 'http://localhost:4000/api/student/section/' + sectionId;
    return fetch(url, {
      credentials: 'include'
    }).then(response => response.json());
  }


  section(sectionId) {
    // const url = 'https://backendassignment5.herokuapp.com/api/sectionData/' + sectionId;
    const url = 'https://backendassignment5.herokuapp.com/api/sectionData/' + sectionId;
    return fetch(url, {
      credentials: 'include',

    }).then(response => response.json());
  }


  updateSection(section) {
    // const url = 'https://backendassignment5.herokuapp.com/api/updateSection/';
    const url = 'http://localhost:4000/api/updateSection/';
    return fetch(url, {
      body: JSON.stringify(section),
      credentials: 'include',
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    });
  }




}
