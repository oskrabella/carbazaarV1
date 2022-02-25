import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AppRoutingModule } from './app-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CsChatBotComponent } from './cs-chat-bot/cs-chat-bot.component';
import { LandingComponent } from './landing/landing.component';
import { ReservationWidgetComponent } from './reservation-widget/reservation-widget.component';
import { VehiclesComponent } from './reservation/vehicles/vehicles.component';
import { ReviewAndBookComponent } from './reservation/review-and-book/review-and-book.component';
import { OptionsComponent } from './reservation/options/options.component';
import { MainComponent } from './reservation/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CsChatBotComponent,
    LandingComponent,
    ReservationWidgetComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GooglePlaceModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    // NgSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
