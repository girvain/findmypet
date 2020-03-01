import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { PetsService } from '../pets.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-upload-pet-form',
    templateUrl: './upload-pet-form.component.html',
    styleUrls: ['./upload-pet-form.component.css']
})
export class UploadPetFormComponent implements OnInit {

    constructor(private petsService: PetsService) { }

    ngOnInit(): void {
    }

    uploadPetForm = new FormGroup({
        name: new FormControl('',
            // [Validators.required,]
        ),
        species: new FormControl('',
            // [Validators.required,]
        ),
        breed: new FormControl('',
            // [Validators.required,]
        ),
        color1: new FormControl('',
            // [Validators.required,]
        ),
        color2: new FormControl(''),
        address1: new FormControl(''),
        address2: new FormControl(''),
        town: new FormControl('',
            // [Validators.required]
        ),
        city: new FormControl('',
            // [Validators.required,]
        ),
        postcode: new FormControl(''),
        email: new FormControl('',
            // [Validators.email],
        ),
        phoneNo: new FormControl('',
                                 // [Validators.required]
        ),
        file: new FormControl(''),
    });

    get name() {
        return this.uploadPetForm.get('name');
    }
    get species() {
        return this.uploadPetForm.get('species');
    }
    get breed() {
        return this.uploadPetForm.get('breed');
    }
    get color1() {
        return this.uploadPetForm.get('color1');
    }
    get town() {
        return this.uploadPetForm.get('town');
    }
    get city() {
        return this.uploadPetForm.get('city');
    }
    get email() {
        return this.uploadPetForm.get('email');
    }
    get phoneNo() {
        return this.uploadPetForm.get('phoneNo');
    }



    onSubmit(): void {
        console.log(this.uploadPetForm.value.file);
        this.petsService.getSignedUrlForPut().subscribe(result => {
            console.log(result);
            this.petsService.putFileOnS3(result.signedRequest, this.uploadPetForm.value.file)
                .subscribe(result => {
                    console.log(result);
                });
        });
    }

    matcher = new MyErrorStateMatcher();

}
