import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ResumeComponent } from './resume/resume.component';
import { ElectricScooterComponent } from './electric-scooter/electric-scooter.component';
import { BroncoComponent } from './bronco/bronco.component';

const routes: Routes = [  { path: '', component: HomepageComponent}, 

//{path: 'portfolio', component: PortfolioComponent}, 
{path: 'aboutme', component: AboutmeComponent}, 
{path: 'resume', component: ResumeComponent},
{path: 'electric-scooter', component: ElectricScooterComponent},
{path: 'bronco', component: BroncoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
