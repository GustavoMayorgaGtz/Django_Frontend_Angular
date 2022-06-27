import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { desarrollo } from 'src/environments/enviroment.desarrollo';
import { MetodoGet, MetodoPost } from '../Interface';

@Injectable({
  providedIn: 'root'
})
export class DjangoAPIService {

  constructor(private http: HttpClient) { }
 //Aqui se realiza la peticion en formato get
  MetodoGet()
  {
    return this.http.get<MetodoGet>(desarrollo.ServerForContact);
  }

  //Aqui se realiza la peticion en formato post
  MetodoPost(body: Object)
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'});
  let options = { headers: headers };
    return this.http.post<MetodoPost>(desarrollo.ServerForContact,body, options)
  }


}
