 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl;
//UC1
//component is initialized
  ngOnInit(): void{
    this.title = "Hello from Bridgelabz!"
//UC2
//adding image url 
//, imgurl is the attribute/component of addcomponentclass
    this.imgUrl = "../assets/logo.png";
  }
}
