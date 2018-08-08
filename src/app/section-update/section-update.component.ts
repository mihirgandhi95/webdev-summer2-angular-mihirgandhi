import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from "../services/section.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {Section} from '../models/section.model.client';



@Component({
  selector: 'app-section-update',
  templateUrl: './section-update.component.html',
  styleUrls: ['./section-update.component.css']
})
export class SectionUpdateComponent implements OnInit {


  sectionId;
  courseId;
  section  =  new Section();
  constructor(private sectionService: SectionServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
        this.route.params.subscribe(params => this.setParams(params));
  }



  setParams(params) {
      this.sectionId = params['sectionId'];
      this.courseId = params['courseId'];
  }



  updateSection(section) {
    this.sectionService.updateSection(section);
    window.location.replace('http://localhost:4200/course/' + this.courseId + '/section');

  }




  ngOnInit() {

    this.sectionService.section(this.sectionId).then(
      (section) => {
        this.section = section;
      }
    );
  }




}
