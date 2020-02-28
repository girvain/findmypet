import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-search-pet-form',
    templateUrl: './search-pet-form.component.html',
    styleUrls: ['./search-pet-form.component.css']
})
export class SearchPetFormComponent implements OnInit {

    searchPetForm = new FormGroup({
        name: new FormControl(''),
        species: new FormControl(''),
        breed: new FormControl(''),
        color1: new FormControl(''),
        color2: new FormControl(''),
        town: new FormControl(''),
        city: new FormControl(''),
    });

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        console.log(this.searchPetForm.value);
    }

}
