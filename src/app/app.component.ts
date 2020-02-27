import { Component } from '@angular/core';
import { Animal } from './Animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'findmypet';

    animal: Object = {
        id: 23,
        name: 'Gary',
        species: 'dog',
        breed: 'Shiba Inu',
        colour: 'gray',
        town: 'east kilbride',
        city: 'glasgow'
    }


}
