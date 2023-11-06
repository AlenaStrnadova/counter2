import { Component } from '@angular/core';
import { HistoryServiceService } from '../storage/history-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page {

  storedData: Array<any> = []

  constructor(private storage: HistoryServiceService) { }

  async ionViewWillEnter() {
    const storedData = await this.storage.get('history');
    if (storedData) {
      this.storedData = JSON.parse(storedData);
      console.log(this.storedData)
    }
  }

}

