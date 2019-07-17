import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SuploginService {

  constructor(private http:HttpClient) { }

  login(data){
    return this.http.post("http://localhost/HouseHelp/api/SupLogin/",data);
  }
}
