import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientDashboardService {

  constructor(private http:HttpClient) { }
  getClientData(id){
    return this.http.get("http://localhost/HouseHelp/api/ClientDashboard/"+id);
  }
}
