import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { PremiumGuard } from './guards/premium.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MeteorologyPageComponent } from './pages/meteorology-page/meteorology-page.component';
import { PasswordRecoveryPageComponent } from './pages/password-recovery-page/password-recovery-page.component';
import { PremiumPageComponent } from './pages/premium-page/premium-page.component';
import { ResearcherPlanPageComponent } from './pages/researcher-plan-page/researcher-plan-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { AgreementModalComponent } from './shared/components/agreement-modal/agreement-modal.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { ConfirmationModalComponent } from './shared/components/confirmation-modal/confirmation-modal.component';
import { ErrorDialogComponent } from './shared/components/error-dialog/error-dialog.component';
import { HomeCardComponent } from './shared/components/home-card/home-card.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { LogoutComponent } from './shared/components/logout-icon/logout.component';
import { MarsMapComponent } from './shared/components/mars-map/mars-map.component';
import { MaxTempIndicatorComponent } from './shared/components/max-temp-indicator/max-temp-indicator.component';
import { MeteorologyCarouselCardComponent } from './shared/components/meteorology-carousel-card/meteorology-carousel-card.component';
import { MeteorologyHeroCardComponent } from './shared/components/meteorology-hero-card/meteorology-hero-card.component';
import { MinTempIndicatorComponent } from './shared/components/min-temp-indicator/min-temp-indicator.component';
import { PremiumModalComponent } from './shared/components/premium-modal/premium-modal.component';
import { PrivacyPolicyModalComponent } from './shared/components/privacy-policy-modal/privacy-policy-modal.component';
import { SubscriptionCardComponent } from './shared/components/subscription-card/subscription-card.component';
import { TransitionModalComponent } from './shared/components/transition-modal/transition-modal.component';
import { MaterialModule } from './shared/modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PasswordRecoveryPageComponent,
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
    CarouselComponent,
    ResearcherPlanPageComponent,
    SubscriptionCardComponent,
    SignUpPageComponent,
    ConfirmationModalComponent,
    AgreementModalComponent,
    PrivacyPolicyModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgIf,
    HttpClientModule,
    CommonModule,
  ],
  providers: [AuthGuard, PremiumGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
