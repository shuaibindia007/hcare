import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './shared/calendar/calendar.component';
import { NotificationsComponent } from './shared/notifications/notifications.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { CancelledVisitsComponent } from './shared/cancelled-visits/cancelled-visits.component';
import { AppointmentsManagerComponent } from './appointments-manager/appointments-manager.component';
import { AppointmentComponent } from './appointments-manager/appointment/appointment.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalendarComponent,
    NotificationsComponent,
    CancelledVisitsComponent,
    AppointmentsManagerComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
