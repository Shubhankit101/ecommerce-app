import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  /*
  myFunction("asd");
  
  let a:number = 5;
  console.log(a);

  let log = function(message:string){
    console.log(message);
    return "asd";
  }
  function myFunction(message:string){
    console.log("invoking my function");
  }
  let x = log("hello");
  console.log(x);
  
  */

