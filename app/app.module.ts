import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';

import { Environment } from './json-api/env.service';
import { JsonApiService, ResourceDbService,
         ResourceStoreService, ResModelHydratorProvider } from './json-api/json-api.service';
import { HeroesResModelHydratorProvider } from './json-api/factories.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
    // HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  declarations: [
    AppComponent,
    HeroSearchComponent,
    routedComponents
  ],
  providers: [
    HeroService,
    { provide: Window, useValue: window },
    Environment,
    ResourceStoreService,
    JsonApiService,
    ResourceDbService,
    HeroesResModelHydratorProvider,
    { provide: ResModelHydratorProvider, useExisting: HeroesResModelHydratorProvider }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
