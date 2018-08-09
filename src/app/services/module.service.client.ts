export class ModuleServiceClient{
  // MODULE_URL = 'http://localhost:8080/api/course/COURSE_ID/module';

  MODULE_URL = ' https://cs5610-summer2-2018-mihirg.herokuapp.com/api/course/COURSE_ID/module';




  findModulesForCourse(courseId){
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }


}
