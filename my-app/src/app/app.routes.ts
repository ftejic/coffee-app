import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
];
