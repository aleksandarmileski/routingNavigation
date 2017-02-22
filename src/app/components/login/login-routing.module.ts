import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";
import {AuthGuard} from "../../guards/auth-guard.service";
import {AuthService} from "../../services/auth.service";

const loginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService,
    AuthGuard,
  ],
  declarations: []
})
export class LoginRoutingModule {
}
