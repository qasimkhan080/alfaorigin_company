import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  card: number = 1;
  constructor(private router: Router ) { }
  ngOnInit(): void {
  }
  
  priceCard(card:number){
this.card=card
  }

}
