import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class TranslationAPIService {

  constructor(private http: HttpClient) { }

  getTranslation(userInput: String): Observable<any> {
    if(userInput) {
      let url = `https://api.mymemory.translated.net/get?q=${userInput}&langpair=cs|en`
      return this.http.get(url)
    }

    return of(null)

  }
}
