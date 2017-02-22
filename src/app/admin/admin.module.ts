import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from "./admin-routing/admin-routing.module";

import {AdminComponent} from "./admin.component";
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {ManageCrisesComponent} from './manage-crises/manage-crises.component';
import {ManageHeroesComponent} from './manage-heroes/manage-heroes.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageCrisesComponent,
    ManageHeroesComponent,
  ]
})
export class AdminModule {
}
