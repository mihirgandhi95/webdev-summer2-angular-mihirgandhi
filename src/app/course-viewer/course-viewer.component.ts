import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})




export class CourseViewerComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  courseId;
  course: Course = new Course();

  setParams(params){
    this.courseId = params['courseId'];
   // this.moduleId = params['moduleId'];
    this.loadCourse(this.courseId);
  }
  loadCourse(courseId) {
    this.courseId = courseId;
    this.service.findCourseById(courseId)
      .then(course => this.course = course);
  }
 /*

  constructor(private service: CourseServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadCourse(params['courseId']));
  }


  course: Course = new Course();






  loadCourse(courseId){
    this.service.findCourseById(courseId)
      .then((course) => {
      this.course = course;
      });
    console.log(courseId);
  }

*/

/*  constructor(private route: ActivatedRoute,
              private service: CourseServiceClient
              ) {
    this.route.params.subscribe(params => this.loadCourse(params['courseId']));
  }



  course: Course = new Course();
  loadCourse(courseId) {
    this.service.findCourseById(courseId)
      .then(course => this.course = course);
  }*/




  ngOnInit() {
  }

}
