import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from 'src/app/community/community.component';
import { DivingCenterComponent } from 'src/app/diving-center/diving-center.component';
import { OrganizationsComponent } from 'src/app/organizations/organizations.component';
import { HomeComponent } from '../home/home.component';
import { VecationPlanComponent } from '../vecation-plan/vecation-plan.component';
import { ArticalComponent } from '../artical/artical.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

const routes: Routes = [
    {path: 'community', component: CommunityComponent},
    {path: 'home', component: HomeComponent},
    {path: 'vecation-plan', component: VecationPlanComponent},
    {path: 'diving-center', component: DivingCenterComponent},
    {path: 'organizations', component: OrganizationsComponent},
    {path: 'artical', component: ArticalComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  /* static forRoot(arg0: {}[]): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  } */
}
