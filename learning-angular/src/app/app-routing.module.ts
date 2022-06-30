import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { InvalidLinkComponent } from './invalid-link/invalid-link.component';
import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';
import { DirectivePlaygroundComponent } from './directive-playground/directive-playground.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { BasicCardsListComponent } from './basic-cards-list/basic-cards-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/tutorials",
    pathMatch: "full"
  },
  {
    path: "content",
    component: ContentListComponent,
  },
  {
    path: "content/:id",
    component: ContentDetailComponent
  },
  {
    path: "tutorials",
    component: TutorialsListComponent,
  },
  {
    path: "tutorials/basiccards",
    component: BasicCardsListComponent,
  },
  {
    path: "tutorials/templatesyntax",
    component: TemplateSyntaxComponent,
  },
  {
    path: "tutorials/databinding",
    component: DataBindingComponent,
  },
  {
    path: "tutorials/pipes",
    component: PipesExampleComponent,
  },
  {
    path: "tutorials/directives",
    component: DirectivePlaygroundComponent,
  },
  {
    path: "**",
    component: InvalidLinkComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
