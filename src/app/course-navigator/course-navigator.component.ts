import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from "../services/course-navigator.service.client";

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private service: CourseNavigatorServiceClient) { }

    courses = [];
    modules = [];
    lessons = [];
    topics = [];
    widgets = [];
    selectedCourseId = 0;
    selectedModuleId = 0;
    selectedLessonId = 0;
    selectedTopicId = 0;
    selectedWidgetId = 0;
    ngOnInit() {
      this.service.findAllCourses()
        .then(courses => {
          this.courses = courses;
        });


    }

  selectCourse(courseId) {
    this.selectedCourseId = courseId;
    this.service.findModulesForCourse(courseId)
      .then(modules =>
        this.modules = modules);
    }

  selectModule(moduleId) {

    this.selectedModuleId = moduleId;
    this.service.findLessonsForModule(moduleId)
      .then(lessons => {
        this.lessons = lessons;
      });
  }

  selectLesson(lessonId) {
    this.selectedLessonId = lessonId;
    this.service.findTopicsForLesson(lessonId)
      .then(topics => {
        this.topics = topics;
      });
  }


  selectTopic(topicId) {
    this.selectedTopicId = topicId;
    this.service.findWidgetsForTopic(topicId)
      .then(widgets => {
        this.widgets = widgets;
      });
  }


  selectWidget(widgetId) {
    this.selectedWidgetId = widgetId;
  }




}
