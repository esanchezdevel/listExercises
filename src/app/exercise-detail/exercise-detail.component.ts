import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../exercise';
import { ActivatedRoute } from '@angular/router';
import { ExerciseService} from '../exercise.service';

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

  constructor(private route:ActivatedRoute, private exerciseService:ExerciseService) {
    this.exercise = {id:NaN, name:""};
  }

  ngOnInit(): void {
    this.getExercise();
  }

  getExercise(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.exerciseService.getExercise(id).subscribe(exercise=>this.exercise=exercise);
  }

}
