import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondProject';
  id = "Abhishek  Bansal"
  arrayData=[9,19,29,39,49];
  obj={
    name : "Abhishek Bansal",
    age :32
  }
}
