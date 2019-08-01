import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAdminService {

  constructor(private http:HttpClient) { }

  getAdmin()
  {
    return this.http.get("http://localhost/HouseHelp/api/AdminLogin");
  }
}
