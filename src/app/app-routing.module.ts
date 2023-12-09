import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PremiumGuard } from './guards/premium.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MeteorologyPageComponent } from './pages/meteorology-page/meteorology-page.component';
import { PasswordRecoveryPageComponent } from './pages/password-recovery-page/password-recovery-page.component';
import { PremiumPageComponent } from './pages/premium-page/premium-page.component';
import { ResearcherPlanPageComponent } from './pages/researcher-plan-page/researcher-plan-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

/**
 * The main routing configuration for the application.
 *
 * This routing module defines the root and child routes for the application.
 */
const routes: Routes = [
  /**
   * The root route of the application.
   *
   * This route displays the login page by default.
   */
  { path: 'plan/:1', component: ResearcherPlanPageComponent },
  { path: '', component: LoginPageComponent },

  /**
   * The route for password recovery.
   *
   * This route displays the password recovery page.
   */
  { path: 'recovery', component: PasswordRecoveryPageComponent },

  /**
   * The signup route of the application.
   *
   * This route displays the signup page.
   */
  { path: 'signup', component: SignUpPageComponent },

  /**
   * The "page" route as placeholder for better semantics with child routes.
   *
   * This route is protected by the AuthGuard, and it contains child routes for "home" and "meteorology" pages.
   */
  {
    path: 'page',
    canActivate: [AuthGuard],
    children: [
      /**
       * The "home" child route.
       *
       * This route displays the home page when accessed.
       */
      {
        path: 'home',
        component: HomePageComponent,
      },

      /**
       * The "meteorology" child route.
       *
       * This route displays the meteorology page when accessed.
       */
      { path: 'meteorology', component: MeteorologyPageComponent },

      /**
       * The premium page.
       *
       * This child route displays the mars-map page when accessed.
       */
      {
        path: 'mars-map',
        component: PremiumPageComponent,
        canActivate: [PremiumGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
