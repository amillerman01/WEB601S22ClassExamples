import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../content';
import { ChessPlayerTitle } from '../content-card/content-card.component';

@Pipe({
  name: 'defaultType'
})
export class DefaultTypePipe implements PipeTransform {

  transform(contentItem: Content, defaultValue?: string): string {
    return contentItem.type || defaultValue || ChessPlayerTitle.IM;

    // A way to visualize what's happening above is written below

    // if (contentItem.type) {
    //   return contentItem.type;
    // }
    // else if (defaultValue) {
    //   return defaultValue;
    // }
    // else {
    //   return "IM";
    // }
  }

}
