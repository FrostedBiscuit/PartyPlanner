import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ppRestService} from '../services/ppRest.services';
import { Category,CategoryBody } from '../party'

@Component({
  selector: 'app-category-list-page',
  templateUrl: './category-list-page.component.html',
  styleUrls: ['./category-list-page.component.scss']
})
export class CategoryListPageComponent implements OnInit {

  partyId: String = localStorage.getItem('partyId');

  categoryList: Category[];
  showError: Boolean = false;
  
  constructor(private router: Router,private _ppRest: ppRestService) { }

  ngOnInit(): void {
    this._ppRest.getCategoryList(this.partyId).subscribe((result:CategoryBody)=>{
      this.categoryList=result.categories;
      this.categoryList.forEach(element=>{
        console.log(element);
      })
    });
  }

  createCategory(categoryName: String){
    if(categoryName === ''){
      return;
    }
    let category= new Category;
    category.name=categoryName;
    category.items=[];
    this._ppRest.putCategory(this.partyId,category).subscribe(
      (data:Category) => {
       if(data != null || data != undefined){
         this.categoryList.push(data);
       }
     },
     error => {
      this.showError = true;
     });
  }

  goToParty(){
    this.router.navigate(['/party']);
  }

  hideAlert($event){
    this.showError = $event;
  }

}
