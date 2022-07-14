import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeContentComponent } from './change-content/change-content.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentSearchComponent } from './content-search/content-search.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full",
  },
  {
    path: "list",
    component: ContentListComponent,
  },
  {
    path: "detail/:id",
    component: ContentDetailComponent
  },
  {
    path: "search",
    component: ContentSearchComponent,
  },
  {
    path: "addContent",
    component: ChangeContentComponent,
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  declarations: [],
  // this hooks up our routes so they work
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
