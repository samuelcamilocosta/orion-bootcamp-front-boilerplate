import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MeteorologyPageComponent } from './pages/meteorology-page/meteorology-page.component';
import { PasswordRecoveryPageComponent } from './pages/password-recovery-page/password-recovery-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'recovery', component: PasswordRecoveryPageComponent },

  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'home/meteorology',
    component: MeteorologyPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
