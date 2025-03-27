import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    {
        path: '',   
        component: HomeComponent
      },
      
      {
        path: 'projects',  
        component: ProjectComponent
      },
      
      {
        path: 'skills',
        component: SkillsComponent,
      },

      {
        path:'contact',
        component: ContactComponent
      }
      
      
    ];



