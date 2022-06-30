import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultTypePipe } from './default-type.pipe';
import { ContentTaggedPipe } from './content-tagged.pipe';



@NgModule({
  declarations: [
    DefaultTypePipe,
    ContentTaggedPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefaultTypePipe,
    ContentTaggedPipe
  ]
})
export class PipesModule { }
