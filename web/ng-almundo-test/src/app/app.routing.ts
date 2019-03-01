import { Routes } from '@angular/router';

import { HotelsComponent } from './components/hotels/hotels.component';
import { HomeComponent } from './components/home/home.component';

export const ROUTES: Routes  = [
  { path: '', component: HomeComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''},
  { path: 'hotels', component: HotelsComponent}
];
