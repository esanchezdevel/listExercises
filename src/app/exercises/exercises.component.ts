import { Component, OnInit } from '@angular/core';
import { exercise } from '../exercise'; //import the exercise.ts
import { EXERCISES } from '../collection-exercises';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  //Property exercise using the object exercise.ts
  exercises=EXERCISES;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectExercise(exercise:exercise): void {
    console.log("onSelectExercise executed...");
  }

}
