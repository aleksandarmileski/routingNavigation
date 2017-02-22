import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {CrisisCenterModule} from "./crisis-center/crisis-center.module";
import {HeroesModule} from "./heroes/heroes.module";

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ComposeMessageComponent} from './components/compose-message/compose-message.component';
import {DialogService} from "./services/dialog.service";

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
  providers: [
    DialogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
