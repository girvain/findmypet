import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetMapDisplayAreaComponent } from './pet-map-display-area/pet-map-display-area.component';
import { SearchPetDisplayAreaComponent } from './search-pet-display-area/search-pet-display-area.component';
import { UploadPetDisplayAreaComponent } from './upload-pet-display-area/upload-pet-display-area.component';

const routes: Routes = [
    { path: '', redirectTo: '/pet-map', pathMatch: 'full' },
    { path: 'pet-map', component: PetMapDisplayAreaComponent },
    { path: 'pet-search', component: SearchPetDisplayAreaComponent },
    { path: 'pet-upload', component: UploadPetDisplayAreaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
