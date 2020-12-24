 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
//UC1
//component is initialized
  ngOnInit(): void{
    this.title = "Hello from Bridgelabz!"
  }
}
