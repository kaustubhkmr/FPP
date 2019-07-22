import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetBookingSupplierService {

  constructor(private http:HttpClient) { }

  getBookingSupplier(id){

    return this.http.get("http://localhost/HouseHelp/api/GetBookingSuppliers/"+id);
  }
}
