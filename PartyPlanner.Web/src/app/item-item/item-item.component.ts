import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Item } from '../party'
@Component({
  selector: 'app-item-item',
  templateUrl: './item-item.component.html',
  styleUrls: ['./item-item.component.scss']
})
export class ItemItemComponent implements OnInit {
  @Input () item: Item;
  @Output("deleteItem") deleteItem: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  quantityUp(){
    this.item.quantity = this.item.quantity.valueOf() + 1;
  }
  quantityDown(){
    if(this.item.quantity > 0) {
      this.item.quantity = this.item.quantity.valueOf() - 1;
    }
  }
  deleteBaje(){
    this.deleteItem.emit();
  }

  inputChange(what,event){
    if(what==='price') this.item.price = parseFloat(event.target.value)
    if(what==='description') this.item.description = event.target.value
    if(what==='name') this.item.name = event.target.value
  }
}
