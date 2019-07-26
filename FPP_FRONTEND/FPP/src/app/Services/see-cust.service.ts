import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeeCustService {

  constructor(private http:HttpClient) { }

  seeCust(id){
    return this.http.get("http://localhost/HouseHelp/api/GetCustomerNames/"+id);
  }
}
