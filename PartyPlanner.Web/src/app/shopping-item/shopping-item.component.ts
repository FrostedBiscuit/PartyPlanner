import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {
  @Input () name: string ="";
  @Input () price: number = 0.00;
  @Input () quantity: number =1;

  constructor() { }

  ngOnInit(): void {
  }

}
