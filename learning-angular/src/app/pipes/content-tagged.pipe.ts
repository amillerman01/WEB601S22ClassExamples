import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../content';

@Pipe({
  name: 'contentTagged'
})
export class ContentTaggedPipe implements PipeTransform {

  transform(chessPlayers: Content[]): Content[] {
    // filter returns an array of individualChessPlayers
    // as long as each chessPlayers return statemenet is truthy
    return chessPlayers.filter(individualChessPlayer => {
      // if (individualChessPlayer.tags?.length)
      // {
      //   return true;
      // }
      // return false;

      return !!individualChessPlayer.tags?.length;

      // if true, keep that player
      // if false, don't keep them
    });
  }

}
