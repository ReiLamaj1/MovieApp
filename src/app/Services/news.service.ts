import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  getNewsData(){
    return this.http.get<any[]>("http://localhost:3000/0");
  }
}
