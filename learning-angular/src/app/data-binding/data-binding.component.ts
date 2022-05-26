import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  inputValue: string = "Value set from the ts file";
  type: string = "Chess";
  twoWayBindingInputValue: string = "this is the default value";
  constructor() { }

  ngOnInit(): void {
  }
  clickEvent(): void {
    console.log("Type value is: ", this.type);
  }
}
