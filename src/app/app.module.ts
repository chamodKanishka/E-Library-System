import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingNavComponent } from './landing-nav/landing-nav.component';
import { EnterPageComponent } from './enter-page/enter-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list'; 
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent, BottomSheetOverviewExampleSheet } from './home/home.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatTreeModule} from '@angular/material/tree';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingNavComponent,
    EnterPageComponent,
    HomeComponent,
    BottomSheetOverviewExampleSheet
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatTabsModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatBottomSheetModule,
    MatNativeDateModule,
    MatMenuModule,
    MatTreeModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path:'LandingPage', component: LandingPageComponent},
      { path:'EnterPage', component: EnterPageComponent},
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ BottomSheetOverviewExampleSheet],
})
export class AppModule { }
