import { Component, OnInit } from '@angular/core';
import { ProjectComments } from '../../models/project-comments';
import { ProjectService } from '../../services/project.service';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projectComments: ProjectComments[];
  tasks: [
    {
      x:20,
      y:20,
      taskChoices:{}[]
    }
  ];


  // task assignment // possible in other component
  assigningTask: boolean;
  showTaskForm: boolean;
  taskPositionX: number;
  taskPositionY: number;
  coordinate: {
    x:number,
    y:number
  };



  constructor(
    public ps: ProjectService
  ) { }

  ngOnInit() {
  	this.projectComments = [];
    this.assigningTask = true;// change this to false
    this.taskPositionX = 1;// chage this to 0
    this.taskPositionY = 1;// chage this to 0
    this.showTaskForm = false;
    this.coordinate = {
      x:0,
      y:0
    }
  }
  getCoords(coords){
  	this.taskPositionX = coords.offsetX/coords.target.width*100;
  	this.taskPositionY = coords.offsetY/coords.target.height*100;
    this.coordinate = {
      x:this.taskPositionX,
      y:this.taskPositionY
    }
    this.assigningTask = true;

  	console.log("Position percentage. Save this in database");
  	console.log(this.taskPositionX+"%",this.taskPositionY+"%");
  }
  showComments(){
  	console.log("show the comments");
  }
  // possible not here...
  closeTask(){
    this.assigningTask = false;// change this to false
    this.showTaskForm = false;
  }


}
