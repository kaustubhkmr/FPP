import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCustomBookingPricesService {

  constructor(private http:HttpClient) { }

  getCustomPrices(id,cname){
    return this.http.put("http://localhost/HouseHelp/api/GetCustomBookingPrices/"+id,cname,{headers: new HttpHeaders().set('content-type', 'application/json')});
  }
}
