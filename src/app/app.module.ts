import { ChatBoxComponent } from './pages/meeting/chat-box/chat-box.component';
import { PanComponent } from './pages/meeting/pan/pan.component';
import { TopicComponent } from './pages/meeting/topic/topic.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DataTablesModule } from 'angular-datatables';
import { GaugeChartModule } from 'angular-gauge-chart';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ChartsModule } from 'ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BarRatingModule } from 'ngx-bar-rating';
import { FilePondModule } from 'ngx-filepond';
import { MomentModule } from 'ngx-moment';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './blocks/reusable-components/chat/chat.module';
import { AddressBookComponent } from './pages/address-book/address-book.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InRoomAppComponent } from './pages/in-room-app/in-room-app.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { MeetingComponent } from './pages/meeting/meeting.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OnDoorAppComponent } from './pages/on-door-app/on-door-app.component';
import { SingleEventComponent } from './pages/single-event/single-event.component';
import { MyHelperService } from './services/my-helper.service';
import { CountdownModule } from 'ngx-countdown';
import { SecretaryDashboardComponent } from './pages/secretary-dashboard/secretary-dashboard.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

// import filepond module
// firebase imports, omit what you don't need for your app

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CalendarPageComponent,
    SingleEventComponent,
    AddressBookComponent,
    OnDoorAppComponent,
    InRoomAppComponent,
    NotFoundComponent,
    LoadingComponent,
    MeetingComponent,
    TopicComponent,
    PanComponent,
    ChatBoxComponent,
    SecretaryDashboardComponent,
    NgxDocViewerModule
  ],
  imports: [
    ChatModule,
    BarRatingModule,
    CountdownModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    MDBBootstrapModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    StorageServiceModule,
    DataTablesModule,
    NgbModule,
    FormsModule,
    Ng2SmartTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    CommonModule,
    FilePondModule,
    ReactiveFormsModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    HttpClientModule,
    MomentModule,
    GaugeChartModule,
    ChartsModule,
    FlexLayoutModule,
  ],
  providers: [MyHelperService, AngularFirestore, { provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
