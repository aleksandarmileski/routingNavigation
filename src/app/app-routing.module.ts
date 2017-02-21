import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CrisisListComponent} from "./components/crisis-list/crisis-list.component";
import {HeroListComponent} from "./components/hero-list/hero-list.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisListComponent
  },
  {
    path: 'heroes',
    component: HeroListComponent
  },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
