import { Component, OnInit } from '@angular/core';
import { Animal } from '../Animal';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-search-pet-display-area',
  templateUrl: './search-pet-display-area.component.html',
  styleUrls: ['./search-pet-display-area.component.css']
})
export class SearchPetDisplayAreaComponent implements OnInit {

    animals: any[] = new Array();

    constructor(private petsService: PetsService) {
      // for (let i = 0; i < 6; i++) {
      //     let animal = new Animal();
      //     animal.id = 3;
      //     animal.name = 'Gary';
      //     animal.species = 'Dog';
      //     animal.breed = 'Shitsu';
      //     animal.missingFrom = '13/01/2020';
      //     animal.email = 'gavinross88@hotmail.co.uk';
      //     animal.phoneNo =  '07587083744';
      //     animal.lat = 55.777005;
      //     animal.lng = -4.182441;
      //     animal.iconUrl = '../assets/pawprint.png';
      //     animal.petPictureURL= 'https://gavinfiledump.s3.amazonaws.com/1c7ef240-5b59-11ea-a75a-377e8ab76c6d';

      //     this.animals.push(animal);
      // }


    }

  ngOnInit(): void {
      console.log(this.animals);
      //this.getPetsFromComponent({name: ''});
  }

    getPetsFromComponent(event: any): void {
        // filter out al the object props with '' values
        let filteredData = Object.entries(event).reduce((a,[k,v]) => (v ? {...a, [k]:v} : a), {})
        this.petsService.getPetsFind(filteredData)
            .subscribe(result => {
                console.log(result);
                this.animals = result;
            });
    }

}
