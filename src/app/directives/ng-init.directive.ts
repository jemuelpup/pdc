import { Directive,Input } from '@angular/core';

@Directive({
  selector: '[appNgInit]'
})
export class NgInitDirective {

  @Input() values: any = {};

  @Input() ngInit;
  ngOnInit() {
    if(this.ngInit) { this.ngInit(); }
  }  

}
