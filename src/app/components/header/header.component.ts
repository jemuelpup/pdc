import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


	// headerIconLinks: {}[];
  constructor() { }

  ngOnInit() {
  	// this.headerIconLinks = [
  	// 	{icon:"user-friends",toolTip:"Contacts",regular:true},
  	// 	{icon:"comments",toolTip:"Messages",regular:false},
  	// 	{icon:"bell",toolTip:"Messages",regular:true},
  	// 	{icon:"sign-out-alt",toolTip:"Sign out",regular:true}
  	// ];
  }

}



