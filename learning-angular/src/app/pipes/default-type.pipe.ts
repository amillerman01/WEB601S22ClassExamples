import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../content';

@Pipe({
  name: 'defaultType'
})
export class DefaultTypePipe implements PipeTransform {

  transform(contentItem: Content, defaultValue?: string): string {
    return contentItem.type || defaultValue || "IM";
  }

}
