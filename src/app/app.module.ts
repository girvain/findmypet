import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import { AgmCoreModule } from '@agm/core';
import {FileUploadModule } from 'ng2-file-upload';

import { AnimalCardComponent } from './animal-card/animal-card.component';
import { AnimalCardDisplayAreaComponent } from './animal-card-display-area/animal-card-display-area.component';
import { PetMapDisplayAreaComponent } from './pet-map-display-area/pet-map-display-area.component';
import { PetMapComponent } from './pet-map/pet-map.component';
import { AnimalCardMapComponent } from './animal-card-map/animal-card-map.component';
import { UploadPetDisplayAreaComponent } from './upload-pet-display-area/upload-pet-display-area.component';
import { SearchPetDisplayAreaComponent } from './search-pet-display-area/search-pet-display-area.component';
import { SearchPetFormComponent } from './search-pet-form/search-pet-form.component';
import { UploadPetFormComponent } from './upload-pet-form/upload-pet-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalCardComponent,
    AnimalCardDisplayAreaComponent,
      PetMapDisplayAreaComponent,
    PetMapComponent,
    AnimalCardMapComponent,
    UploadPetDisplayAreaComponent,
    SearchPetDisplayAreaComponent,
    SearchPetFormComponent,
    UploadPetFormComponent,
    NavbarComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      HttpClientModule,
      FlexLayoutModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatToolbarModule,
      MatMenuModule,
      MatIconModule,



    AgmCoreModule.forRoot({

        /******************************* Put Google API Key Here! *************************/

      apiKey: "" // <- Google API string goes here!!
    }),



      FileUploadModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
