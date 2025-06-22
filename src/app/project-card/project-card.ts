import { Component, Input } from '@angular/core';
import { ProjectModel } from '../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  @Input() project!: ProjectModel;

  showModal = false;
  currentPicIndex = 0;

  openModal() {
    this.showModal = true;
    this.currentPicIndex = 0;
  }

  closeModal() {
    this.showModal = false;
  }

  prevPic() {
    if (this.project.pictures && this.project.pictures.length > 0) {
      this.currentPicIndex =
        (this.currentPicIndex - 1 + this.project.pictures.length) % this.project.pictures.length;
    }
  }

  nextPic() {
    if (this.project.pictures && this.project.pictures.length > 0) {
      this.currentPicIndex =
        (this.currentPicIndex + 1) % this.project.pictures.length;
    }
  }
}
