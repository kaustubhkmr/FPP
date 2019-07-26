import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientEditService {

  constructor(private http:HttpClient) { }
  editClient(id,data){
    return this.http.put("http://localhost/HouseHelp/api/EditClient/"+id,data)
  }
}
