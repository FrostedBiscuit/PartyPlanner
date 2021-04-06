import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Item } from '../party'
@Component({
  selector: 'app-item-item',
  templateUrl: './item-item.component.html',
  styleUrls: ['./item-item.component.scss']
})
export class ItemItemComponent implements OnInit {
  @Input () item: Item;
  @Input () price: number = 0.00;
  @Input () quantity: number =1;
  @Input () name: string ="";
  @Input () text: string ="";

  @Output("deleteItem") deleteItem: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  quantityUp(){
    this.quantity++;
  }
  quantityDown(){
    if(this.quantity > 0) this.quantity--;
  }
  deleteBaje(){
    this.deleteItem.emit();
  }

}
