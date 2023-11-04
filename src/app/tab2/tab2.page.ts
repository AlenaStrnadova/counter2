import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  taskName: any = ""; // Entered Text
  taskList: any[] = [] ; // Array to store tasks

  constructor() { }

  //names: string[] = [];


  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = "";
    }
  }



  deleteTask(index: any) {
    this.taskList.splice(index, 1);
  }
}

