import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculesComponent } from './components/vehicules/vehicules.component';
import { VoituresComponent } from './components/voitures/voitures.component';
import { CamionsComponent } from './components/camions/camions.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [

  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'user/management',
    component : UserComponent
  },
  {
    path : 'vehicule',
    component : VehiculesComponent
  },
  {
    path : 'voiture',
    component : VoituresComponent
  },
  {
    path : 'camion',
    component : CamionsComponent
  },
  {
    path:"cart",
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
