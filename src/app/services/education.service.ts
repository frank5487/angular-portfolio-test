import { Injectable } from '@angular/core';
import { EducationModel } from '../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  EducationData: Array<EducationModel> = [
    {
        school: "University of Pennsylvania",
        degree: "Master",
        fieldOfStudy: "Computer Science",
        startDate: new Date('2021-08-31'),
        endDate: new Date('2023-05-15'),
        descriptions: [
          "Graduated with a Master's degree in Computer Science.",
          "Specialized in Artificial Intelligence and Machine Learning.",
          "Completed a thesis on 'Deep Learning Techniques for Natural Language Processing'."
        ]  
    },
    {
        school: "National Central University",
        degree: "Master",
        fieldOfStudy: "Chemical Engineering",
        startDate: new Date('2016-09-01'),
        endDate: new Date('2020-06-15'),
        descriptions: [
          "Graduated with a Master's degree in Computer Science.",
          "Specialized in Artificial Intelligence and Machine Learning.",
          "Completed a thesis on 'Deep Learning Techniques for Natural Language Processing'."
        ]  
    }
  ]

  constructor() { }

  getEducations() {
    return this.EducationData;
  }
}
