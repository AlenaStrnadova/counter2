import { Component } from '@angular/core';
import { TranslationAPIService } from '../api/translation-api.service';
import { Observable } from 'rxjs';
import { HistoryServiceService } from '../storage/history-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  userInput: String = ''
  translationOutput$: Observable<any> = this.apiService.getTranslation("")
  

  constructor( private apiService: TranslationAPIService ) { }

  
 
  translateClicked() {
    console.log(this.userInput)
    this.translationOutput$ = this.apiService.getTranslation(this.userInput)
  }


}

