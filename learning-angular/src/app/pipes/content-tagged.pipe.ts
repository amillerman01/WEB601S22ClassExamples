import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../content';

@Pipe({
  name: 'contentTagged'
})
export class ContentTaggedPipe implements PipeTransform {

  transform(chessPlayers: Content[]): Content[] {
    return chessPlayers.filter(individualChessPlayer => {
      if (individualChessPlayer.tags?.length) {
        return true;
      }
      return false;
    });
  }

}
