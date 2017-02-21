import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {HeroesModule} from "./heroes/heroes.module";
import {CrisisCenterModule} from "./crisis-center/crisis-center/crisis-center.module";
import { ComposeMessageComponent } from './components/compose-message/compose-message.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,

    PageNotFoundComponent,

    ComposeMessageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
