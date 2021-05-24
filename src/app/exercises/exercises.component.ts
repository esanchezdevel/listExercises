import { Component, OnInit } from '@angular/core';
import { Exercise} from '../exercise';
import { ExerciseService} from '../exercise.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  //Property exercise using the object exercise.ts
  exercises:Exercise[];
  exerciseSelected:Exercise;

  constructor(private exerciseService:ExerciseService) {


    //Initialize the exerciseSelected variable for avoid error
    this.exerciseSelected = {id: NaN, name: ""};
    this.exercises = [];
  }

  getExercises(): void {
    /*
      subscribe to the service method because returns an Observable object
      using a lambda expression exercises=>this.exercises assign the exercise to
      our local variable 'exercises'
    */
    this.exerciseService.getExercises().subscribe(exercises=>this.exercises=exercises);
    console.log('TEST-' + JSON.stringify(this.exercises));
  }

  ngOnInit(): void {
    this.getExercises();

  }

  onSelectExercise(exercise:Exercise):void {
    console.log("selected exercise: " + exercise.id);
    this.exerciseSelected=exercise;
  }

}
