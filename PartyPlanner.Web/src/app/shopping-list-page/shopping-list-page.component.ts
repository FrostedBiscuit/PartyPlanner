import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.scss']
})
export class ShoppingListPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['items'])
  }

}
