import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from 'src/app/community/community.component';
import { DivingCenterComponent } from 'src/app/diving-center/diving-center.component';
import { OrganizationsComponent } from 'src/app/organizations/organizations.component';

const routes: Routes = [
    {path: 'commponent', component: CommunityComponent},
    {path: 'diving-center', component: DivingCenterComponent},
    {path: 'organizations', component: OrganizationsComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static forRoot(arg0: {}[]): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}
