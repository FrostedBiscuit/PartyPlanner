import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { ppRestService} from '../services/ppRest.services';
import { Item,Category,CategoryBody} from '../party';


@Component({
  selector: 'app-items-list-page',
  templateUrl: './items-list-page.component.html',
  styleUrls: ['./items-list-page.component.scss']
})
export class ItemsListPageComponent implements OnInit {

  partyId: String = localStorage.getItem('partyId');
  categoryId: Number;
  category: Category;
  itemList: Item[] = [];
  
  addNewQuantity: number = 0;

  constructor(private router:Router,private activRouter: ActivatedRoute,private _ppRest: ppRestService) { 
    
    this.activRouter.params.subscribe(
      (params: Params) => 
        this.categoryId = params['id']);
        
    this._ppRest.getCategoryById(this.partyId,this.categoryId).subscribe((result:Category)=>{
      this.category=result;
    });
  }

  ngOnInit(): void {
  }
 
  createItem(name:String,description:String,price:number){
    
    let item = new Item;   
    //item.itemId = this.itemList.length;
    item.name=name;
    item.description=description;
    item.price=price;
    item.quantity=this.addNewQuantity;
    this.itemList.push(item);

    this.category.items=this.itemList;
    
    this._ppRest.postCategory(this.partyId,this.category).subscribe(
      data => {
        //this.reloadCurrentRoute()
        console.log("dela baje");
      },
      error => {
        console.log('error');
    });

    
    
  }

  quantityUp(){
    this.addNewQuantity++;
  }
  quantityDown(){
    if(this.addNewQuantity > 0) this.addNewQuantity--;
  }

  on(){
    document.getElementById('overlay').style.display="block"
  }
  off(){
    document.getElementById('overlay').style.display="none"
  }

  shopping(){
    this.router.navigate(['/shoppingList']) 
  }
  party(){
    this.router.navigate(['/categoryList']);
  }

}
