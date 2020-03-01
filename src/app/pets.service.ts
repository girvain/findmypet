import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
    httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
  };

    baseUrl = 'http://localhost:3000';

    constructor(public http: HttpClient) { }

    getPetsAll(): Observable<any> {
        return this.http.get<any>(this.baseUrl+ '/all');
    }

    getPetsFind(petForm: any): Observable<any> {
        console.log(petForm);
        return this.http.post<any>(this.baseUrl+ '/find', petForm );
    }
    getBatman(): Observable<any> {
        return this.http.get<any>(this.baseUrl+ '/aws/get-batman');
    }

    getFile(fileKey: string): Observable<any> {
        return this.http.get<any>(this.baseUrl+ `/aws/get-file/${fileKey}`);
    }

    getSignedUrlForPut(): Observable<any> {
        return this.http.get<any>(this.baseUrl+ '/aws/sign-s3');
    }

    putFileOnS3(url: string, file: any): Observable<any> {
        return this.http.put<any>(url, file);
    }

}
