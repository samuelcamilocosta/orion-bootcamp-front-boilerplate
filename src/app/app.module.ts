import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule, NgIf } from '@angular/common';
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
import { LoadingComponent } from './shared/components/loading/loading.component';
import { LogoutComponent } from './shared/components/logout-icon/logout.component';
import { MaxTempIndicatorComponent } from './shared/components/max-temp-indicator/max-temp-indicator.component';
import { MeteorologyCarouselCardComponent } from './shared/components/meteorology-carousel-card/meteorology-carousel-card.component';
import { MeteorologyHeroCardComponent } from './shared/components/meteorology-hero-card/meteorology-hero-card.component';
import { MinTempIndicatorComponent } from './shared/components/min-temp-indicator/min-temp-indicator.component';
import { PasswordRecoveryDialogComponent } from './shared/components/password-recovery-dialog/password-recovery-dialog.component';
import { PremiumModalComponent } from './shared/components/premium-modal/premium-modal.component';
import { TransitionModalComponent } from './shared/components/transition-modal/transition-modal.component';
import { ImageSliderModule } from './shared/modules/image-slider.module';
import { MaterialModule } from './shared/modules/material.module';
import { MarsMapComponent } from './shared/components/mars-map/mars-map.component';
import { PremiumPageComponent } from './pages/premium-page/premium-page.component';
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
    MeteorologyPageComponent,
    MeteorologyHeroCardComponent,
    MeteorologyCarouselCardComponent,
    LoadingComponent,
    MaxTempIndicatorComponent,
    MinTempIndicatorComponent,
    TransitionModalComponent,
    PremiumModalComponent,
    MarsMapComponent,
    PremiumPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgIf,
    HttpClientModule,
    ImageSliderModule,
    CommonModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
