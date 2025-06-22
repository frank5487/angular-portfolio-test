import { Component, OnInit } from '@angular/core';
import { EducationModel } from '../models/education.model';
import { EducationService } from '../services/education.service';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education implements OnInit {

  educations: Array<EducationModel> = [];

  constructor(private educationService: EducationService) {
  }
  ngOnInit(): void {
    this.educations = this.educationService.getEducations();
  }
}
