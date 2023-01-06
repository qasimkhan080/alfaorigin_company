import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-inquiry',
  templateUrl: './quick-inquiry.component.html',
  styleUrls: ['./quick-inquiry.component.scss']
})
export class QuickInquiryComponent implements OnInit {
contact:boolean=true
requestquote:boolean=false
feedback:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  contactUs(){
    this.contact=true;
    this.requestquote=false
    this.feedback=false


  }
  request(){
    this.requestquote=true
    this.contact=false
    this.feedback=false

  }
  feedBack(){
    this.feedback=true
    this.requestquote=false
    this.contact=false;


  }
}
