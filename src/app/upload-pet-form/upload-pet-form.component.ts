import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { PetsService } from '../pets.service';
import { FileUploader } from 'ng2-file-upload';
import { Router } from '@angular/router';

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

    public uploader: FileUploader = new FileUploader({ url: '', disableMultipart: true });
    public pictureKey: string;

    constructor(private petsService: PetsService,
                private router: Router) { }

    ngOnInit(): void {
        this.uploader.onAfterAddingFile = item => {
            this.petsService.getSignedUrlForPut().subscribe(result => {
                item.url = result.signedRequest;
                item.method = 'PUT';
                item.headers = [{ name: 'Content-Type', value: item.file.type }];
                item.withCredentials = false;
                item.onSuccess = () => { // add the picture key when the files uploaded
                    this.pictureKey = result.pictureKey;//name of the file just uploaded to S3
                }
                item.upload();
                console.log(item);
                console.log(result.pictureKey);
                // NOTE: the submit button will be disabled until the pictueKey has a value
                // which it gets from the onSuccess call back above
            });
        };
    }

    uploadPetForm = new FormGroup({
        name: new FormControl('',
            [Validators.required,]
        ),
        species: new FormControl('',
            [Validators.required,]
        ),
        breed: new FormControl('',
            [Validators.required,]
        ),
        color1: new FormControl('',
            [Validators.required,]
        ),
        color2: new FormControl(''),
        description: new FormControl(''),
        missingFrom: new FormControl(''),
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
        phoneNo: new FormControl('',
            [Validators.required]
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
        // add the pictureKey to the form object
        this.uploadPetForm.value.pictureKey = this.pictureKey;
        console.log(this.uploadPetForm.value);
        this.petsService.postPet(this.uploadPetForm.value)
            .subscribe(result => {
                console.log(result);
                this.router.navigate(['/pet-map']);
            });

    }

    matcher = new MyErrorStateMatcher();

}
