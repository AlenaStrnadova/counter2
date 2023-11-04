import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  taskDescription: any = ""; // Entered Text
  taskList: any[] = [] ; // Array to store tasks

  constructor() { }
 
  addTask() {
    if (this.taskDescription.length > 0) {
      let task = this.taskDescription;
      this.taskList.push(task);
      this.taskDescription = "";
    }
  }

  deleteTask(index: any) {
    this.taskList.splice(index, 1);
  }
}

