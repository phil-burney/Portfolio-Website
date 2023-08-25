import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ParallaxComponent } from './parallax/parallax/parallax.component';
import { ElectricScooterComponent } from './electric-scooter/electric-scooter.component';
import { BroncoComponent } from './bronco/bronco.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    PortfolioComponent,
    ResumeComponent,
    AboutmeComponent,
    ParallaxComponent,
    ElectricScooterComponent,
    BroncoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
