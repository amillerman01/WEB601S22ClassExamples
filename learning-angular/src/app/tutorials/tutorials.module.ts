import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialsRoutingModule } from './tutorials-routing.module';
import { TutorialsComponent } from './tutorials.component';
import { BasicCardsListComponent } from '../basic-cards-list/basic-cards-list.component';
import { TemplateSyntaxComponent } from '../template-syntax/template-syntax.component';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { PipesExampleComponent } from '../pipes-example/pipes-example.component';
import { DirectivePlaygroundComponent } from '../directive-playground/directive-playground.component';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    TutorialsComponent,
    BasicCardsListComponent,
    TemplateSyntaxComponent,
    DataBindingComponent,
    PipesExampleComponent,
    DirectivePlaygroundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TutorialsRoutingModule,
    DirectivesModule,
    PipesModule
  ]
})
export class TutorialsModule { }
