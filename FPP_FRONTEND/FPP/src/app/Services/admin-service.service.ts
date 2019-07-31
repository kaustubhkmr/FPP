import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }

  getAllClient(){
    return this.http.get("http://localhost/HouseHelp/api/AdminGetClient/")
  }

  getAllSupplier(){
    return this.http.get("http://localhost/HouseHelp/api/AdminGetSupplier/")
  }
}
