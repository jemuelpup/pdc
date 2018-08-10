import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Task } from "../models/task.model";

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

	taskList: AngularFireList<any>;
	selectedTask: Task = new Task();

  constructor(
  	private fb: AngularFireDatabase
  ) {
    this.taskList = this.fb.list("tasks");
  }

  getTask(){
  	return this.taskList;
  }

  insertTask(t: Task){
  	this.taskList.push({
      assignedBy: t.assignedBy,
      assignedTo: t.assignedTo,
      coords: t.coords,
  		task: t.task,
      taskDescription: t.taskDescription,
			taskName: t.taskName
  	});
  }
  updateTask(t: Task){
  	this.taskList.update(t.$key,{
  		task: t.task,
			taskName: t.taskName,
			taskDescription: t.taskDescription,
			assignedBy: t.assignedBy,
			assignedTo: t.assignedTo,
      coords: t.coords
  	});
  }
  deleteTask($key: string){
  	this.taskList.remove($key);
  }
}
