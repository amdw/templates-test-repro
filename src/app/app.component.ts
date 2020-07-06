import { Component } from '@angular/core';
import { MyInterface } from './mycomponent/mycomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testrepro';
  iface: MyInterface = {
    myfield: 'myvalue1',
  };
}
