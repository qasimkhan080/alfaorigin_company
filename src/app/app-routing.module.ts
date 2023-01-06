import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuickInquiryComponent } from './quick-inquiry/quick-inquiry.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'quickinquiry', component: QuickInquiryComponent },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
