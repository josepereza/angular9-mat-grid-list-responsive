import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component implements OnInit {
  breakpoint: number;
  constructor(breakpointObserver: BreakpointObserver) {
    this.breakpoint=6;
    breakpointObserver.observe([
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.matches) {
        this.breakpoint=4;
      }else {
        this.breakpoint=1;
      }
    });
  }

  ngOnInit(): void {
  }

}
