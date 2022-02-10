import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question2Component } from './question2.component';

const routes: Routes = [
  { path: '', component: Question2Component, pathMatch: 'full', },
  { path: '', component: Question2Component, children: [ { path: 'answer', component: Question2Component}, ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Question2RoutingModule { }
