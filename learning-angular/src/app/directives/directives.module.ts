import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlighterDirective } from './highlighter.directive';



@NgModule({
  declarations: [
    HighlighterDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlighterDirective
  ]

})
export class DirectivesModule { }
