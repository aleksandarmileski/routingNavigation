import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {HeroListComponent} from "./hero-list/hero-list.component";
import {FormsModule} from "@angular/forms";
import {HeroService} from "./hero.service";
import {HeroesRoutingModule} from "./heroes-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  providers: [HeroService]
})
export class HeroesModule {
}
