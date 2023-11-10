import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class QuoteApiService {

  constructor(private http: HttpClient) { }

  getTheQuote(): Observable<any> {
    let url = 'https://api.chucknorris.io/jokes/random'
    return this.http.get(url)
  }

}
