import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.scss']
})
export class PipesExampleComponent implements OnInit {

  today: Date = new Date();

  someStringValue = "Hello World";
  constructor() { }

  ngOnInit(): void {
  }

}
