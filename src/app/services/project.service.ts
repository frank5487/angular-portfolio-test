import { Injectable } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: ProjectModel[] = [
    {
      id: 1,
      name: 'Angular Project 1',
      summary: 'Summary of Angular Project 1',
      description: 'Description of Angular Project 1',
      projectLink: 'https://example.com/project1',
      pictures: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    },
    {
      id: 2,
      name: 'Angular Project 2',
      summary: 'Summary of Angular Project 2',
      description: 'Description of Angular Project 2',
      projectLink: 'https://example.com/project2',
      pictures: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    }
  ]

  constructor() { }

  getProjects(): ProjectModel[] {
    return this.projects;
  }

  getProjectById(id: number): ProjectModel {
    let project = this.projects.find(project => project.id === id);
    if (project === undefined) {
      throw new Error(`Project with id ${id} not found`);
    }
    return project;
  }
}
