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
}
