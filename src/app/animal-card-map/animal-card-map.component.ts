import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../Animal';

@Component({
  selector: 'app-animal-card-map',
  templateUrl: './animal-card-map.component.html',
  styleUrls: ['./animal-card-map.component.css']
})
export class AnimalCardMapComponent implements OnInit {
    @Input() animal: Animal;

  constructor() { }

  ngOnInit(): void {
  }

}
