import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
	{ path: 'sobre-mim', component: AboutMeComponent },
    { path: 'experiencias', component: ExperiencesComponent },
    { path: 'competencias', component: SkillsComponent } 
];
