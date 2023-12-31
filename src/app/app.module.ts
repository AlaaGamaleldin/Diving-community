import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './Rout/app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommunityComponent } from './community/community.component';
import { DivingCenterComponent } from './diving-center/diving-center.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { HomeComponent } from './home/home.component';
import { VecationPlanComponent } from './vecation-plan/vecation-plan.component';
import { ArticalComponent } from './artical/artical.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CommunityComponent,
    DivingCenterComponent,
    OrganizationsComponent,
    HomeComponent,
    VecationPlanComponent,
    ArticalComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
