import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { CountryFlagComponent } from './country-flag/country-flag.component';
import { CountryComponent } from './country/country.component';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const appRoutes:Routes=[
  {path:'people',component:PeopleComponent},
  {path:'country',component:CountryComponent},
  {path:'countryFlag',component:CountryFlagComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    CountryFlagComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
