import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ppRestService} from '../services/ppRest.services';
import { Category } from '../party';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  partyId: String = localStorage.getItem('partyId');

  @Input() category: Category;

  constructor(private router: Router,private _ppRest: ppRestService) { 
    
  }

  ngOnInit(): void {
  }

  deleteCategory(){
   
    this._ppRest.deleteCategory(this.partyId,this.category.categoryId).subscribe(
      data => {
        this.reloadCurrentRoute();
      },
      error => {
        console.log('error');
      }); 
  }

  goToCategory(){
    console.log("CategoryId: " +this.category.categoryId);
    this.router.navigate(['/items', this.category.categoryId]);
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
}
