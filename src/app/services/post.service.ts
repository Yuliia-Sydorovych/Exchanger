import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})

export class PostService {
  private url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    return this.httpClient.get(this.url);
  } 
}