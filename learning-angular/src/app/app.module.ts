import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    TemplateSyntaxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
