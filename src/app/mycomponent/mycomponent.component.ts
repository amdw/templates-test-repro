import { Component, OnInit, Input } from '@angular/core';

export interface MyInterface {
  myfield: string;
}

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  @Input() myinput?: MyInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
