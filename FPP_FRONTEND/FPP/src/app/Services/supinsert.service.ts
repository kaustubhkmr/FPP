import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupinsertService {

  constructor(private http:HttpClient) { }

  insSup(data){
  return  this.http.post("http://localhost/HouseHelp/api/SupplierRegister/",data);
      }
}
