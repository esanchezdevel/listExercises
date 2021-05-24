import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent implements OnInit {

  /*
    Declare the variable exercise that this component will receive
    via Input from exercise component.
  */
  @Input() exercise:Exercise;

  constructor() {
    this.exercise = {id:NaN, name:""};
  }

  ngOnInit(): void {
  }

}
