import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Router} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {HeroesModule} from "./heroes/heroes.module";
import {LoginRoutingModule} from "./components/login/login-routing.module";

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ComposeMessageComponent} from './components/compose-message/compose-message.component';
import {DialogService} from "./services/dialog.service";
import {LoginComponent} from './components/login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,
    LoginRoutingModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  providers: [
    DialogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
