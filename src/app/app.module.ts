import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AgmCoreModule } from '@agm/core';

import { AnimalCardComponent } from './animal-card/animal-card.component';
import { AnimalCardDisplayAreaComponent } from './animal-card-display-area/animal-card-display-area.component';
import { PetMapDisplayAreaComponent } from './pet-map-display-area/pet-map-display-area.component';
import { PetMapComponent } from './pet-map/pet-map.component';
import { AnimalCardMapComponent } from './animal-card-map/animal-card-map.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalCardComponent,
    AnimalCardDisplayAreaComponent,
    PetMapDisplayAreaComponent,
    PetMapComponent,
    AnimalCardMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      BrowserAnimationsModule,
      FlexLayoutModule,
      MatButtonModule,
      MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDEUIqODp2kzGD8uElWsLMA3ZfREPAVu98"
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
