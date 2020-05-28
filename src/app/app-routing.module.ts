import { MeetingComponent } from './pages/meeting/meeting.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
// import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SingleEventComponent } from './pages/single-event/single-event.component';
import { AddressBookComponent } from './pages/address-book/address-book.component';
import { InRoomAppComponent } from './pages/in-room-app/in-room-app.component';
import { OnDoorAppComponent } from './pages/on-door-app/on-door-app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'todos',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'calendar',
    component: CalendarPageComponent
  },
  {
    path: "event/:id",
    component: SingleEventComponent
  },
  {
    path: "address",
    component: AddressBookComponent
  },
  {
    path: "in-room-app",
    component: InRoomAppComponent
  },
  {
    path: "on-door-app/:id",
    component: OnDoorAppComponent
  },
  {
    path: 'meeting/:title',
    component: MeetingComponent
  },
  {
    path: '404', component: NotFoundComponent
  },
  {
    path: '**', redirectTo: '/404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
