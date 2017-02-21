import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {CrisisCenterComponent} from "../crisis-center/crisis-center.component";
import {CrisisListComponent} from "../crisis-list/crisis-list.component";
import {CrisisDetailComponent} from "../crisis-detail/crisis-detail.component";
import {CrisisDetailResolver} from "../crisis-detail-resolver.service";
import {CrisisCenterHomeComponent} from "../crisis-center-home/crisis-center-home.component";
import {CanDeactivateGuard} from "../../can-deactivate-guard.service";

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: 'id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              crisis: CrisisDetailResolver
            }
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(crisisCenterRoutes)],
  exports: [RouterModule],
  declarations: [],
  providers: [CrisisDetailResolver]
})
export class CrisisCenterRoutingModule {
}
