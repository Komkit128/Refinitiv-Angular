import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question3Component } from './question3.component';

const routes: Routes = [
  { path: '', component: Question3Component, pathMatch: 'full', },
  { path: '', component: Question3Component, children: [ { path: 'answer', component: Question3Component}, ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Question3RoutingModule { }
