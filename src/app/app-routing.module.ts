import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { NouveauxComponent } from './nouveaux/nouveaux.component';
import { ProfilComponent } from './profil/profil.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'nouveaux', component: NouveauxComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'services', component: ServicesComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
