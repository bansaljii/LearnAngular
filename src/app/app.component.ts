import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nameTxt="Myproject"
  disabled=false
  // title = 'secondProject';
  // id = "Abhishek  Bansal"
  // arrayData=[9,19,29,39,49];
  // obj={
  //   name : "Abhishek Bansal",
  //   age :32
  // }
  getTextBoxValue(item){
    alert(item.value)
  }
  testFun(str){
    alert("hello, " + str)
  }
}
