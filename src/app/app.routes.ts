import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TipsComponent } from './pages/tips/tips.component';
import { PlacesComponent } from './pages/places/places.component';
import { RemindersComponent } from './pages/reminders/reminders.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tips', component: TipsComponent},
  { path: 'lugares', component: PlacesComponent},
  { path: 'recordatorios', component: RemindersComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'conocenos', component: ConocenosComponent}
];
