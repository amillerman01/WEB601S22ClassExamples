import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { InvalidLinkComponent } from './invalid-link/invalid-link.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/content",
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
    path: 'tutorials',
    loadChildren: () => import('./tutorials/tutorials.module').then(m => m.TutorialsModule)
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
