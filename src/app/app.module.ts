import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
// NEWLY ADDED
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { InputFieldComponent } from './input-field/input-field.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { DateAndTimeComponent } from './date-and-time/date-and-time.component';
import { TreeComponent } from './tree/tree.component';
import { VideoComponent } from './video/video.component';
import { ReadMeComponent } from './read-me/read-me.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { BackEndComponent } from './back-end/back-end.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import * as flexLayout from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import { FrontendCodingComponent } from './frontend-coding/frontend-coding.component';
import { BackendCodingComponent } from './backend-coding/backend-coding.component';
import { FooterComponent } from './footer/footer.component';
import {MatStepperModule} from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputFieldComponent,
    FileUploadComponent,
    TableComponent,
    TabsComponent,
    StepperComponent,
    DateAndTimeComponent,
    TreeComponent,
    VideoComponent,
    ReadMeComponent,
    FrontEndComponent,
    BackEndComponent,
    FrontendCodingComponent,
    BackendCodingComponent,
    FooterComponent,
  ],
  imports: [
   
    BrowserModule, MatTabsModule, MatStepperModule, ReactiveFormsModule, HttpClientModule,
    AppRoutingModule,MatIconModule,MatToolbarModule,FormsModule, MatFormFieldModule, MatInputModule,
    BrowserAnimationsModule,MatSidenavModule, NgIf, MatButtonModule,MatListModule, MatMenuModule,
    NgxMatIntlTelInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
