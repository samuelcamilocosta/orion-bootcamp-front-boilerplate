import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MeteorologyPageComponent } from './pages/meteorology-page/meteorology-page.component';
import { PasswordRecoveryPageComponent } from './pages/password-recovery-page/password-recovery-page.component';
import { ErrorDialogComponent } from './shared/components/error-dialog/error-dialog.component';
import { HomeCardComponent } from './shared/components/home-card/home-card.component';
import { LogoutComponent } from './shared/components/logout-icon/logout.component';
import { PasswordRecoveryDialogComponent } from './shared/components/password-recovery-dialog/password-recovery-dialog.component';
import { MaterialModule } from './shared/modules/material.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PasswordRecoveryPageComponent,
    PasswordRecoveryDialogComponent,
    ErrorDialogComponent,
    HomeCardComponent,
    HomePageComponent,
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgIf,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
