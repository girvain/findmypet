import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../Animal';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-animal-card-map',
  templateUrl: './animal-card-map.component.html',
  styleUrls: ['./animal-card-map.component.css']
})
export class AnimalCardMapComponent implements OnInit {
    @Input() animal: Animal;

    constructor(private petService: PetsService) { }

  ngOnInit(): void {
      this.petService.getFile(this.animal.pictureKey).subscribe(result => {
          console.log(result);
          this.animal.petPictureURL = result;
      });
  }

}
