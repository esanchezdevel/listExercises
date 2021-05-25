import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from './exercises/exercises.component';
import { PanelComponent } from './panel/panel.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';

/*
  Define the routes
*/
const routes: Routes = [
  {path: 'exercises', component:ExercisesComponent},
  {path: 'detail/:id', component:ExerciseDetailComponent},
  {path: 'panel', component:PanelComponent},
  {path: '', redirectTo:'/panel', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
