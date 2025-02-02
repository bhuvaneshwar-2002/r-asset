import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemManagementComponent } from './item-management/item-management.component';
import { SettingsComponent } from './settings/settings.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { ReportsComponent } from './reports/reports.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AssetsViewComponent } from './assets-view/assets-view.component';

const routes: Routes = [
      {path:'',                        component:LoginComponent},
      {path:'assetsview',              component:AssetsViewComponent},
      { path: 'item-management',       component:ItemManagementComponent },
      { path: 'workflow',              component:WorkflowComponent       },
      { path: 'settings',              component:SettingsComponent       },
      { path: 'reports',               component:ReportsComponent        },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // AuthService,
    // AuthGuard
  ]
})
export class AppRoutingModule { }
