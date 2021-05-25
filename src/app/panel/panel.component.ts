import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  exercises!:Exercise[];

  constructor(private exerciseService:ExerciseService) { }

  ngOnInit(): void {
  }

  getExercises():void {
    this.exerciseService.getExercises().subscribe(exercises=>this.exercises=exercises);
  }
}
