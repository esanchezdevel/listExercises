import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  exercises:Exercise[];

  constructor(private exerciseService:ExerciseService) {
    console.log("Panel Constructor");
    this.exercises = [];
  }

  ngOnInit(): void {
    console.log("Initialize Panel Component");
    this.getExercises();
  }

  getExercises():void {
    this.exerciseService.getExercises().subscribe(exercises=>this.exercises=exercises.slice(1, 5));
    console.log('TEST-' + JSON.stringify(this.exercises));
  }
}
