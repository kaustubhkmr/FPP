import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddBookingService {

  constructor(private http:HttpClient) { }

  addBooking(data){
    return this.http.post("http://localhost/HouseHelp/api/AddBooking/",data);
  }
}
