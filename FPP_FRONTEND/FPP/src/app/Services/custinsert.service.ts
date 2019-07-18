import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustinsertService {

  constructor(private http:HttpClient) { }
  insCust(data){

    //change here
    return  this.http.post("http://localhost/HouseHelp/api/CustRegister/",data);

  }
}
