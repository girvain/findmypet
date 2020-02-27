import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AnimalCardComponent } from './animal-card/animal-card.component';
import { AnimalCardDisplayAreaComponent } from './animal-card-display-area/animal-card-display-area.component';
import { PetMapDisplayAreaComponent } from './pet-map-display-area/pet-map-display-area.component';
import { PetMapComponent } from './pet-map/pet-map.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalCardComponent,
    AnimalCardDisplayAreaComponent,
    PetMapDisplayAreaComponent,
    PetMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      BrowserAnimationsModule,
      FlexLayoutModule,
      MatButtonModule,
      MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
