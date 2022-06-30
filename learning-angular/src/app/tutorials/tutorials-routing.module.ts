import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsComponent } from './tutorials.component';
import { BasicCardsListComponent } from '../basic-cards-list/basic-cards-list.component';
import { TemplateSyntaxComponent } from '../template-syntax/template-syntax.component';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { PipesExampleComponent } from '../pipes-example/pipes-example.component';
import { DirectivePlaygroundComponent } from '../directive-playground/directive-playground.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialsComponent
  },
  {
    path: "basiccards",
    component: BasicCardsListComponent,
  },
  {
    path: "templatesyntax",
    component: TemplateSyntaxComponent,
  },
  {
    path: "databinding",
    component: DataBindingComponent,
  },
  {
    path: "pipes",
    component: PipesExampleComponent,
  },
  {
    path: "directives",
    component: DirectivePlaygroundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialsRoutingModule { }
