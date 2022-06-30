import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { DefaultTypePipe } from './pipes/default-type.pipe';
import { ContentTaggedPipe } from './pipes/content-tagged.pipe';
import { HighlighterDirective } from './directives/highlighter.directive';
import { DirectivePlaygroundComponent } from './directive-playground/directive-playground.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { InvalidLinkComponent } from './invalid-link/invalid-link.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    TemplateSyntaxComponent,
    DataBindingComponent,
    PipesExampleComponent,
    DefaultTypePipe,
    ContentTaggedPipe,
    HighlighterDirective,
    DirectivePlaygroundComponent,
    ContentListComponent,
    ContentDetailComponent,
    InvalidLinkComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
