import { Component } from '@angular/core';
import { QuoteApiService } from '../api/quote-api.service';
import { Observable } from 'rxjs';
import { HistoryServiceService } from '../storage/history-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  quoteOutput$: Observable<any> = this.apiService.getTheQuote()
  historyArray: Array<string> = []

  constructor(
    private apiService: QuoteApiService,
    private storage: HistoryServiceService
    ) {}

    async ionViewDidEnter () {
      const storedData = await this.storage.get('history');
      if (storedData) {
        this.historyArray = JSON.parse(storedData);
      }
    }
  
    quoteClicked() {
    this.quoteOutput$ = this.apiService.getTheQuote()

    this.quoteOutput$.subscribe(data => {
      console.log(data.content)
      let historyItem = data.content
      this.historyArray.unshift(historyItem)
      this.storage.set('history', JSON.stringify(this.historyArray))
    });      


    };

  }


 
    