import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';
import { Education } from './education/education';
import { Experience } from './experience/experience';
import { Skill } from './skill/skill';
import { Project } from './project/project';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'education', component: Education },
  { path: 'experience', component: Experience },
  { path: 'skill', component: Skill },
  { path: 'resume', component: Resume },
  { path: 'contact', component: Contact },
  { path: 'project', component: Project },
  { path: '**', component: Home, pathMatch: 'full' }
];
