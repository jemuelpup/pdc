import { Component, OnInit } from '@angular/core';
import { ProjectComments } from '../../models/project-comments';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

	

  projectComments: ProjectComments[];

  constructor() { }

  ngOnInit() {
  	this.projectComments = [];

		for (var i = 0; i < 1; i++) {
			this.projectComments.push(<ProjectComments>{
			  sender: "",
			  date: "",
			  comment: "text",
			  commentCoords: {
			  	x: i*10,
			  	y: 10
			  }
			});
		}
  }
  getCoords(coords){
  	let commentPositionX = coords.offsetX/coords.target.width*100;
  	let commentPositionY = coords.offsetY/coords.target.height*100;
  	console.log("Position percentage. Save this in database");
  	console.log(commentPositionX+"%",commentPositionY+"%");
  }
  showComments(){
  	console.log("show the comments");
  }

}
