import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CsChatBotComponent } from './cs-chat-bot/cs-chat-bot.component';
import { LandingComponent } from './landing/landing.component';
import { ReservationWidgetComponent } from './reservation-widget/reservation-widget.component';

import { VehiclesComponent } from './reservation/vehicles/vehicles.component';
import { ReviewAndBookComponent } from './reservation/review-and-book/review-and-book.component';
import { OptionsComponent } from './reservation/options/options.component';
import { MainComponent } from './reservation/main/main.component';

const routes: Routes = [
  { path: '', component: ReservationWidgetComponent },
  { path: 'reservation' , component: MainComponent ,
      children: [
        { path: 'vehicles', component:  VehiclesComponent },
        { path: 'options', component: OptionsComponent },
        { path: 'review-and-book', component: ReviewAndBookComponent }
      ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
