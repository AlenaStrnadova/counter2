import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class QuoteApiService {

  constructor(private http: HttpClient) { }

  getTheQuote(): Observable<any> {
    let url = ''
    return this.http.get(url)
  }

}
