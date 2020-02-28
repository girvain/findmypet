import { Component, OnInit } from '@angular/core';
import { Animal } from '../Animal';

@Component({
  selector: 'app-animal-card-display-area',
  templateUrl: './animal-card-display-area.component.html',
  styleUrls: ['./animal-card-display-area.component.css']
})
export class AnimalCardDisplayAreaComponent implements OnInit {

    animals: any[] = new Array();

    constructor() {
      for (let i = 0; i < 6; i++) {
          let animal = new Animal();
          animal.id = 3;
          animal.name = 'Gary';
          animal.species = 'Dog';
          animal.breed = 'Shitsu';
          animal.missingFrom = '13/01/2020';
          animal.email = 'gavinross88@hotmail.co.uk';
          animal.phoneNo =  '07587083744';
          animal.lat = 55.777005;
          animal.lng = -4.182441;
          animal.iconUrl = '../assets/pawprint.png';

          this.animals.push(animal);
      }

    }

  ngOnInit(): void {
  }


}
