import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Exercise } from './exercise';
import { EXERCISES } from './collection-exercises';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor() { }

  getExercises():Observable<Exercise[]> {
    return of(EXERCISES);
  }

  getExercise(id:number): Observable<Exercise> {
    return of(EXERCISES.find(exercise=>exercise.id===id) || {id:NaN, name:""});
  }
}
