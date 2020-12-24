 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "../assets/logo.png";
  url =  "https://www.bridgelabz.com";
  userName: string = "";

//UC1
//component is initialized
  ngOnInit(): void{
    this.title = "Hello from Bridgelabz!";
  }

//UC3
//Using Event Binding Technique to bind Click
//Event to Launch BridgeLabz URL in a new Tab
  onClick($event) {
  console.log("Save button is clicked!", $event);
  window.open(this.url, "_blank");
}
}