import { Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/LandingPage',
      pathMatch: 'full',
  },
  {
      path: 'LandingPage',
      component: LandingPageComponent,
  },
];
