import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.scss']
})
export class TemplateSyntaxComponent implements OnInit {

  date = new Date();
  constructor() { }

  ngOnInit(): void {
    console.log("The date variable actually contains: ", this.date);
  }

  drawCard(): string {
    return "This is the body content of the card"
  }
  checkInputValue(theValueOfTheInputBox: string) {
    // console.log(theValueOfTheInputBox);
  }
}
