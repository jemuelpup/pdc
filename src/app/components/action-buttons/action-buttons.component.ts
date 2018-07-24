import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {

	@Input('actionIcons') public aicon;

  constructor() { }

  ngOnInit() {
  	console.log(this.aicon);
  }

}
