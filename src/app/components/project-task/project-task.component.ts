import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',
  styleUrls: ['./project-task.component.scss']
})
export class ProjectTaskComponent implements OnInit {

	showCommentList: boolean;

  constructor() { }

  ngOnInit() {
  	this.showCommentList = false;
  }

  showComment(){
  	console.log("ShowComments");
  	this.showCommentList = !this.showCommentList;
  }

}
