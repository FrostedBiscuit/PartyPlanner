import { Component, OnInit, KeyValueDiffers} from '@angular/core';
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
  objDiffer;
  
  addNewQuantity: number = 0;

  constructor(private router:Router,private activRouter: ActivatedRoute,private _ppRest: ppRestService,private differs:  KeyValueDiffers) { 
    
    this.activRouter.params.subscribe(
      (params: Params) => 
        this.categoryId = params['id']);
        
    this._ppRest.getCategoryById(this.partyId,this.categoryId).subscribe((result:Category)=>{
      this.category=result;
      this.itemList=result.items;
    });
  }

  ngOnInit(): void {}
 
  createItem(name:String,description:String,price:string){
    
    let item = new Item;   
    item.name=name;
    item.description=description;
    item.price=Number.parseFloat(price);
    item.quantity=this.addNewQuantity;
    this.addNewQuantity=0;
    this.itemList.push(item);

    this.category.items=this.itemList;
 
    this._ppRest.postCategory(this.partyId,this.category).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
    }); 
  }

  quantityUp(){
    this.addNewQuantity++;
  }
  quantityDown(){
    if(this.addNewQuantity > 0) this.addNewQuantity--;
  }

  // on(){
  //   document.getElementById('overlay').style.display="block"
  // }
  // off(){
  //   document.getElementById('overlay').style.display="none"
  // }

  // shopping(){
  //   this.router.navigate(['/shoppingList']) 
  // }
  
  party(){
    this.category.items=this.itemList;

    this._ppRest.postCategory(this.partyId,this.category).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
    });
    
    this.router.navigate(['/categoryList']);
  }

  deleteItem(item:Item){
    this.itemList=this.delete(this.itemList,item);
    this.category.items=this.itemList;
    this._ppRest.postCategory(this.partyId,this.category).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
    });
  }

  delete(array,item){
    const index = array.indexOf(item, 0);
    if (index > -1) {
      array.splice(index, 1);
    }
    return array;
  }
}
