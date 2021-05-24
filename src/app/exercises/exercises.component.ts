import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise'; //import the exercise.ts
import { EXERCISES } from '../collection-exercises';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  //Property exercise using the object exercise.ts
  exercises=EXERCISES;
  exerciseSelected:Exercise;

  constructor() {
    //Initialize the exerciseSelected variable for avoid error
    this.exerciseSelected = {id: NaN, name: ""};
  }

  ngOnInit(): void {
  }

  onSelectExercise(exercise:Exercise): void {
    console.log("selected exercise: " + exercise.id);
    this.exerciseSelected=exercise;
  }

}
