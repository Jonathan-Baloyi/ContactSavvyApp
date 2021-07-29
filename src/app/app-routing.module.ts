import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { ContactService } from './services/contact.service';
import { MenuService } from './services/menu.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent }
  //{ path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [MenuService, ContactService]
})
export class AppRoutingModule { }
