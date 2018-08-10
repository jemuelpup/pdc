import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input('coords') public coordinate;
  constructor(
  	public ps: ProjectService
  ) { }

  ngOnInit() {
  	
  	this.resetForm();
  }

  onSubmit(taskForm: NgForm){
    taskForm.value.coords = this.coordinate;
  	this.ps.insertTask(taskForm.value); // task insert in firebase.
  	this.resetForm(taskForm);
  }
  resetForm(taskForm?: NgForm){
  	if(taskForm != null)
  		taskForm.reset();// abstract directive... reset form
  	this.ps.selectedTask = {
  		$key: '',
  		task: '',
  		taskName: '',
  		taskDescription: '',
  		assignedBy: '',
  		assignedTo: '',
      coords: {}
  	}
  }

}
