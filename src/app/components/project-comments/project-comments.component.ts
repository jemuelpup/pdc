import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-comments',
  templateUrl: './project-comments.component.html',
  styleUrls: ['./project-comments.component.scss']
})
export class ProjectCommentsComponent implements OnInit {

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
