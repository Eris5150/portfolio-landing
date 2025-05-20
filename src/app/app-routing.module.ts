import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { EducationComponent } from './pages/education/education.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home | Erick Rodríguez' },
  { path: 'experiences', component: ExperiencesComponent, title: 'Experiences | Erick Rodríguez' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects | Erick Rodríguez' },
  { path: 'skills', component: SkillsComponent, title: 'Skills | Erick Rodríguez' },
  { path: 'education', component: EducationComponent, title: 'Education | Erick Rodríguez' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
