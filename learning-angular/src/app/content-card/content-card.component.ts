import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../content';

export enum ChessPlayerTitle {
  GM = "GM",
  IM = "IM",
  FM = "FM"
}

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  // template: "<h1>html right here isntead</h1>",
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() contentItem?: Content;
  contentItem2?: Content;
  // need this here so we can access the enum values in the html file
  ChessPlayerTItleENUMValues = ChessPlayerTitle;
  nameStyle = {
    'color': 'red',
    'font-size': '20px'
  };

  constructor() {
  }

  ngOnInit(): void {

    if (this.contentItem2) {
      console.log(this.contentItem2.name);
    }
  }

  /*
    methodName(variableName: variableType): methodReturnType{
    return .......;
    }
  */
  processContent(contentVariableName: Content): void {
    if (contentVariableName.body == undefined) {
      console.log("Body is empty, no value");
      return;
    }
    console.log(contentVariableName.body);
  }

}
