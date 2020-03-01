import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PetsService } from '../pets.service';
import { Animal } from '../Animal';

@Component({
    selector: 'app-search-pet-form',
    templateUrl: './search-pet-form.component.html',
    styleUrls: ['./search-pet-form.component.css']
})
export class SearchPetFormComponent implements OnInit {

    @Input() animals: any[];
    @Output() animalsChange: EventEmitter<any>;

    searchPetForm = new FormGroup({
        name: new FormControl(''),
        species: new FormControl(''),
        breed: new FormControl(''),
        color1: new FormControl(''),
        color2: new FormControl(''),
        town: new FormControl(''),
        city: new FormControl(''),
    });

    constructor(private petsService: PetsService) {
        this.animalsChange = new EventEmitter()
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        //console.log(this.searchPetForm.value);
        // this.petsService.getPets(this.searchPetForm.value)
        //     .subscribe(result => {
        //         console.log(result);
        //         this.animals = result;
        //     });
        this.animalsChange.emit(this.searchPetForm.value);
    }

}
