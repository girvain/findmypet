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
          animal.breed = 'Shitsu'
          this.animals.push(animal);
      }

    }

  ngOnInit(): void {
  }


}
