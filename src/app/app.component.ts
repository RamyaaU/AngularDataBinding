 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl;
  url;
//UC1
//component is initialized
  ngOnInit(): void{
    this.title = "Hello from Bridgelabz!"
//UC2
//adding image url 
//, imgurl is the attribute/component of addcomponentclass
    this.imgUrl = "../assets/logo.png";
    this.url = "https://www.bridgelabz.com";
  }

//UC3
//Using Event Binding Technique to bind Click
//Event to Launch BridgeLabz URL in a new Tab
onClick($event) {
  console.log("Save button is clicked!", $event);
  window.open(this.url, "_blank");
}
}
