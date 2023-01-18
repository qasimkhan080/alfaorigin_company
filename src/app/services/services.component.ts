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
  constructor( private route:Router) { this.isclicked=this.route.getCurrentNavigation()?.extras?.state?.id?this.route.getCurrentNavigation()?.extras?.state?.id:this.isclicked }

  ngOnInit(): void {
  }
  isClicked(val:number){
    this.isclicked=val
  }
  isClickedTool(val:number){
this.isclickedtool=val
  }
}
