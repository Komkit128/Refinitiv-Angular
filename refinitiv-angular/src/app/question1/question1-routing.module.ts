import { Question1Component } from './question1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Question1Component, pathMatch: 'full', },
  { path: '', component: Question1Component, children: [ { path: 'answer', component: Question1Component}, ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Question1RoutingModule { }
