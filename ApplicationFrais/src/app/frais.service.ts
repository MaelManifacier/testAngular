import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';  

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from 'protractor';
import { Frais } from './model/Frais';

@Injectable({
  providedIn: 'root'
})
export class FraisService {

  frais: Frais[] = [];
  jsonString: any[];
  //fraisURL : string = 'https://localhost:44328/ServiceWcf.svc/GetFrais';

  constructor(private httpService: HttpClient) { }

  getFrais(): Frais[] {
    this.httpService.get('http://localhost:1234/ServiceWcf.svc/GetFrais'
      // https://localhost:44328/ServiceWcf.svc/GetFrais
      , {responseType: 'text'}) //.pipe(catchError(err => console.log(err)))
      .subscribe(
        data => {
          [this.jsonString = JSON.parse(data)]
          //console.log("Frais retournés par le service, depuis angular : " + data);
          //console.log(this.jsonString[0])
          for(let i = 0; i < this.jsonString.length; i++){
            this.frais[i] = this.jsonString[i]
          }
          //this.frais[0] = this.jsonString[0]
          //console.log(this.frais[0])
        })
    return this.frais;
  }


}
