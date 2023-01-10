import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  card: number = 1;
  constructor() { }
  ngOnInit(): void {
    
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  priceCard(card:number){
this.card=card
  }

}
