import { Component, ViewChild, ElementRef } from '@angular/core';
import { QuoteApiService } from '../api/quote-api.service';
import { Observable, of } from 'rxjs';
import { HistoryServiceService } from '../storage/history-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  tempOutput$: Observable<any> = of();
  historyArray: Array<string> = [];
  @ViewChild('contentContainer', { static: true }) contentContainer!: ElementRef;

  constructor(
    private apiService: QuoteApiService,
    private storage: HistoryServiceService
  ) {}

  async ionViewDidEnter() {
    const storedData = await this.storage.get('history');
    if (storedData) {
      this.historyArray = JSON.parse(storedData);
    }
  }

  quoteClicked() {
    this.tempOutput$ = this.apiService.getTheQuote();

    this.tempOutput$.subscribe(data => {
      console.log(data.value);
      let historyItem = data.value;
      const newContent = data.value;
      this.contentContainer.nativeElement.innerHTML = newContent;

      this.historyArray.unshift(historyItem);
      this.storage.set('history', JSON.stringify(this.historyArray));
    });
  }
}
