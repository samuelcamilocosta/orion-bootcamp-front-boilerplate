import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { PasswordRecoveryDialogComponent } from './components/password-recovery-dialog/password-recovery-dialog.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PasswordRecoveryPageComponent } from './password-recovery-page/password-recovery-page.component';
import { MaterialModule } from './shared/material/material.module';
// import { TestPageComponent } from './test-page/test-page.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PasswordRecoveryPageComponent,
    PasswordRecoveryDialogComponent,
    ErrorDialogComponent,
    // TestPageComponent,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
