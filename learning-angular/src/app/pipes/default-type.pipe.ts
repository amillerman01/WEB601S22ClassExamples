import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../content';

@Pipe({
  name: 'defaultType'
})
export class DefaultTypePipe implements PipeTransform {

  transform(contentItem: Content): string {
    if (contentItem.type)
      return contentItem.type;
    return "IM";
  }

}
