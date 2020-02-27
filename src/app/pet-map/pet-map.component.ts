import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pet-map',
    templateUrl: './pet-map.component.html',
    styleUrls: ['./pet-map.component.css']
})
export class PetMapComponent implements OnInit {
    zoom: number = 10;

    lat: any;
    lng: any;
    markers: any[] = [
        {
            id: 1,
            name: 'Gary',
            species: 'Dog',
            breed: 'Shitsu',
            missingFrom: '13/01/2020',
            email: 'gavinross88@hotmail.co.uk',
            phoneNo: '07587083744',
            lat: 55.777005,
            lng: -4.182441,
            iconUrl: '../assets/pawprint.png'
        },
        {
            id: 2,
            name: 'Frank',
            species: 'Dog',
            breed: 'Shitsu',
            missingFrom: '13/01/2020',
            email: 'gavinross88@hotmail.co.uk',
            phoneNo: '07587083744',
            lat: 55.832760,
            lng: -4.427902,
            iconUrl: '../assets/pawprint.png'
        },
        {
            id: 3,
            name: 'Boaby',
            species: 'Dog',
            breed: 'Shitsu',
            missingFrom: '13/01/2020',
            email: 'gavinross88@hotmail.co.uk',
            phoneNo: '07587083744',
            lat: 55.812972,
            lng: -4.240531,
            iconUrl: '../assets/pawprint.png'
        }
    ]
    constructor() {
        if (navigator) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.lng = +pos.coords.longitude;
                this.lat = +pos.coords.latitude;
            });
        }
        // set up an else to set the map to the whole uk with no
        // current location marker and set the zoom to be out a bit
    }

    ngOnInit(): void {
    }

    clickedMarker(id: number) {
        console.log(id);
    }

}
