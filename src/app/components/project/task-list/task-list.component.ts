import { Component, OnInit } from '@angular/core';
import { Task } from "../../../models/task.model";
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  taskList: Task[];
  activeTasks: ActiveTask[];

  showTaskDetails: boolean;

  constructor(
    private ps: ProjectService
  ) { }

  ngOnInit() {
    this.activeTasks = [];
    console.log("Dumaan kay task list");
    let x = this.ps.getTask();
    x.snapshotChanges().subscribe(task => {
      this.taskList = []; //  this is an 
      task.forEach(e => {
        var el = e.payload.toJSON();
        el["$key"] = e.key;
        this.taskList.push(el as Task);
        this.pushToArrayIfNotExist(e.key);
        // console.log(el);
      });
      console.log(this.activeTasks);
    });
  	this.showTaskDetails = false;
  }
  pushToArrayIfNotExist(key){
    if(!this.activeTasks.find(t=>t.$key===key)){
      this.activeTasks.push({$key:key,opened:false});
    }
    else{
      console.log("nasa array na "+key);
    }

  }

  showComment(e){
    console.log(e);
  	// console.log("ShowComments");
  	// this.showTaskDetails = !this.showTaskDetails;
  }

}
export class ActiveTask {
  $key: string;
  opened: boolean;
}
