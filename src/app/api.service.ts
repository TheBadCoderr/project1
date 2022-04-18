import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }
  API_KEY = 'YOUR_API_KEY';

  public getUsers(){
    return this.httpClient.get(`https://api.github.com/users?since=XXX&apiKey=${this.API_KEY}`);
  }
}
