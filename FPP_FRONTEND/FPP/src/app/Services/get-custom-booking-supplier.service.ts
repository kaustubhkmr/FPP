import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCustomBookingSupplierService {

  constructor(private http:HttpClient) { }

  getCustomBookingSupplier(id){
    return this.http.get("http://localhost/HouseHelp/api/GetCustomBookingSuppliers/"+id)
  }
}
