import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../content';

@Pipe({
  name: 'contentTagged'
})
export class ContentTaggedPipe implements PipeTransform {

  transform(chessPlayers: Content[]): Content[] {
    return chessPlayers.filter(individualChessPlayer => {
      return !!individualChessPlayer.tags?.length;
    });
  }

}
