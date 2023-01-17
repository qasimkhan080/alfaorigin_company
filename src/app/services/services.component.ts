import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  isclicked:number=1
  isclickedtool:number=1
  constructor() { }

  ngOnInit(): void {
  }
  isClicked(val:number){
    this.isclicked=val
  }
  isClickedTool(val:number){
this.isclickedtool=val
  }
}
