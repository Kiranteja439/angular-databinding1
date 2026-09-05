import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bindings-1';
  paraStatus = "true";
  inputValue:string|undefined;
  keyupFun():void{
    console.log('event is keyup')
  }

  funSuccess(){
    return true;
  }

  dynamicStyles = {'color':'red','font-size':'60px','background-color':'green'};
  jsonObj = {id:1,city:'hyd'};
}
