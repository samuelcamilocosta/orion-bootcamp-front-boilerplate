import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { PasswordRecoveryPageComponent } from './password-recovery-page/password-recovery-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'recovery', component: PasswordRecoveryPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
