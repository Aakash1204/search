import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(public http: HttpClient) { }

  listing(){
    return this.http.get('http://www.localhost:3000/list')
  }
}
