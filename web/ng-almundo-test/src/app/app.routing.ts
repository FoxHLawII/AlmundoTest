import { Routes } from '@angular/router';

import { HotelsComponent } from './components/hotels/hotels.component';
import { HomeComponent } from './components/home/home.component';

export const ROUTES: Routes  = [
  { path: 'home', component: HomeComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];
