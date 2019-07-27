import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeeSupService {

  constructor(private http:HttpClient) { }

  seeSup(id){
    return this.http.get("http://localhost/HouseHelp/api/GetSupplierNames/"+id)
  }
}
