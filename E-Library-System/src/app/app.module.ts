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
import { SearchComponent } from './search/search.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list'; 
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeComponent, BottomSheetOverviewExampleSheet } from './home/home.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatTreeModule} from '@angular/material/tree';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { AddbooksComponent } from './admin/addbooks/addbooks.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingNavComponent,
    EnterPageComponent,
    HomeComponent,
    BottomSheetOverviewExampleSheet,
    HomeNavComponent,
    SearchComponent,
    AddbooksComponent
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
    MatTooltipModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path:'landing-page', component: LandingPageComponent},
      { path:'enter-page', component: EnterPageComponent},
      { path:'home', component: HomeComponent},
      { path:'search', component: SearchComponent},
      { path:'admin/addbooks', component: AddbooksComponent},
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ BottomSheetOverviewExampleSheet],
})
export class AppModule { }
