import { Component, OnInit } from '@angular/core';
import { ProjectCard } from "../project-card/project-card";
import { ProjectModel } from '../models/project.model';
import { Tag } from '../models/tag.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  imports: [ProjectCard],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project implements OnInit {
  projects: ProjectModel[] = [];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void{
    this.projects = this.projectService.getProjects();
  }
}
