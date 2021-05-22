import { Component, OnInit } from '@angular/core';
import { exercise } from '../exercise'; //import the exercise.ts

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  //Property exercise using the object exercise.ts
  exercise: exercise={
    id:1,
    name:'Push-up'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
