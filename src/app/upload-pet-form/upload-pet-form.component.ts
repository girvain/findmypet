import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-upload-pet-form',
    templateUrl: './upload-pet-form.component.html',
    styleUrls: ['./upload-pet-form.component.css']
})
export class UploadPetFormComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    uploadPetForm = new FormGroup({
        name: new FormControl('',
            [Validators.required,]
        ),
        species: new FormControl('',
            [Validators.required,]),
        breed: new FormControl('',
            [Validators.required,]),
        color1: new FormControl('',
            [Validators.required,]),
        color2: new FormControl(''),
        address1: new FormControl(''),
        address2: new FormControl(''),
        town: new FormControl('',
            [Validators.required]
        ),
        city: new FormControl('',
            [Validators.required,]
        ),
        postcode: new FormControl(''),
        email: new FormControl('',
            [Validators.email],
        ),
        phoneNo: new FormControl('', [
            Validators.required,
        ]),
        file: new FormControl('', [
            Validators.required,
        ]),
    });

    onSubmit(): void {
        console.log(this.uploadPetForm.value);
    }

}
