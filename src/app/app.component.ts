import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 fruits=['apple','banana','pine-apple','guava','pomgrenete']
 info=[
   {
     name:'abhishek bansal',
     email:'bansalabhi143368@gmail.com'
   },
   {
    name:'kartik bhargav',
    email:'bhragavkartik2000@gmail.com'
  },{
    name:'Himanshu saini',
    email:'saini077@gmail.com'
  },{
    name:'Nishant bhargav',
    email:'bhargavnishant@gmail.com'
  }
 ]
}
