import { Component } from '@angular/core';
import { QuoteApiService } from '../api/quote-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  quoteOutput$: Observable<any> = this.apiService.getTheQuote()

  constructor(private apiService: QuoteApiService) {}

  quoteClicked() {
    this.quoteOutput$ = this.apiService.getTheQuote()
    };

  }



