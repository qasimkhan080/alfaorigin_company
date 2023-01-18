import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  constructor(private activatedRoute:ActivatedRoute){}
  ngOnInit():void{
    this.activatedRoute.fragment.subscribe(res=>{
      this.jumpTo(res)
    })
    

  }
  onActivate(event:any) {
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
 }
 jumpTo(section:any){
  setTimeout(() =>{
  document.getElementById(section)?.scrollIntoView({behavior:"smooth"});},1000);
   }
}
