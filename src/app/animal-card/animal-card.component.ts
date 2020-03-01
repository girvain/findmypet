import { Component, OnInit, Input} from '@angular/core';
import { Animal } from '../Animal';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent implements OnInit {
    @Input() animal: Animal;

    constructor(public petService: PetsService) { }

  ngOnInit(): void {
      this.petService.getFile(this.animal.pictureKey).subscribe(result => {
          console.log(result);
          this.animal.petPictureURL = result;
      });
  }

}
