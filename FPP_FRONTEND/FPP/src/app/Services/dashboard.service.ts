import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getSupplierData(id){
    return this.http.get("http://localhost/HouseHelp/api/Dashboard/"+id);
  }

  addServiceData(data:object){
    return this.http.post("http://localhost/HouseHelp/api/AddService",data);
  }

  getServiceData(id){
    return this.http.get("http://localhost/HouseHelp/api/AddService/"+id);
  }

  getBookingData(id){
    return this.http.get("http://localhost/HouseHelp/api/GetSupplierBooking/"+id);
  }

  updateBookingConfirmation(id,data){
    return this.http.put("http://localhost/HouseHelp/api/AcceptBooking/"+id,data);
  }

  updateBookingCompletion(id,data){
    return this.http.put("http://localhost/HouseHelp/api/CompleteBooking/"+id,data);
  }

}
