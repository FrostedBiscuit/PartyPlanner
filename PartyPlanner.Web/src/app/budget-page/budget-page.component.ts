import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-page',
  templateUrl: './budget-page.component.html',
  styleUrls: ['./budget-page.component.scss']
})
export class BudgetPageComponent implements OnInit {

  showError: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  test(){
    this.showError = true
  }

  hideAlert($event){
    this.showError = $event;
  }

}
