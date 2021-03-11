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
  addNewVisible: boolean = false;

  categoryList: Category[];
  
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
    let category= new Category;
    category.name=categoryName;
    this._ppRest.putCategory(this.partyId,category).subscribe(
      data => {
        this.categoryList.push(category);//ni glih dobr zato ker nima ID-ja in ce hocs brisat al karkol je pizdarja
      },
      error => {
        console.log('error');
      }); 
  }

  addCategory(){
    this.addNewVisible = !this.addNewVisible;
  }


  goToParty(){
    this.router.navigate(['/party']);
  }

}