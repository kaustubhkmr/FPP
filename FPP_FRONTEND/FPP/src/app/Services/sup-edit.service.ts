import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupEditService {

  constructor(private http:HttpClient) { }

  editSup(id,data){
    return this.http.put("http://localhost/HouseHelp/api/EditSup/"+id,data)
  }
}
