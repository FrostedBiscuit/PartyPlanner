import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-item',
  templateUrl: './item-item.component.html',
  styleUrls: ['./item-item.component.scss']
})
export class ItemItemComponent implements OnInit {
  
  @Input () price: number = 0.00;
  @Input () quantity: number =1;
  @Input () name: string ="";
  @Input () text: string ="";

  constructor() { }

  ngOnInit(): void {
  }


  
  quantityUp(){
    this.quantity++;
  }
  quantityDown(){
    if(this.quantity > 0) this.quantity--;
  }

}
