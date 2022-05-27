import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../content';

@Pipe({
  name: 'defaultType'
})
export class DefaultTypePipe implements PipeTransform {

  transform(contentItem: Content, defaultValue?: string): string {
    return contentItem.type || defaultValue || "IM";

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
