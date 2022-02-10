import { Question1Module } from './question1/question1.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: 'Home', pathMatch: 'full',},
  { path: 'question1', loadChildren: () => import('./question1/question1.module').then(m => m.Question1Module) },
  { path: 'question2', loadChildren: () => import('./question2/question2.module').then(m => m.Question2Module) },
  { path: 'question3', loadChildren: () => import('./question3/question3.module').then(m => m.Question3Module), },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
