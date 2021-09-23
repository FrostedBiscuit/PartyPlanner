import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ppRestService} from '../services/ppRest.services';
import { Party,Category,Item } from '../party'
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-calculate-page',
  templateUrl: './calculate-page.component.html',
  styleUrls: ['./calculate-page.component.scss']
})
export class CalculatePageComponent implements OnInit {

  partyId: string = localStorage.getItem('partyId');
  party:Party;
  guestLen:number;
  totalBudget:number = 0;
  perPerson:string = '0';
  categoryBudget = [];
  showError: Boolean = false;


  constructor(private router: Router,private _ppRest:ppRestService) { 


    this._ppRest.getPartyById(this.partyId).subscribe(
      (result: Party)=>{ 
        this.party=result
        this.guestLen = this.party.guests.length;
        this.calculateCategorySum(this.party.categories);
      },(error)=>{
        this.showError = true;
      });
  }


  ngOnInit(): void {
   
  }
  
  calculateCategorySum(categories: Category[]){
    
    categories.forEach((category:Category)=>{
      
      let sum: number = 0;
      
      category.items.forEach((item:Item)=>{
        if(this.isNumber(item.price) && this.isNumber(item.quantity))
        sum += Number(item.price) * Number(item.quantity);
      })

      this.categoryBudget.push({name: category.name, price: sum})
      this.totalBudget += sum;
      
    })
    this.totalBudget += Number(this.party.info.budget);
    this.perPerson = (this.guestLen>0) ? (this.totalBudget / this.guestLen).toFixed(2) : '0'; 
  }


  isNumber(value: string | Number): boolean{
   return ((value != null) &&
           (value !== '') &&
           !isNaN(Number(value.toString())));
  } 

  hideAlert($event){
    this.showError = $event;
  }

  backToParty(){
    this.router.navigate(['/party']) 
  }


}
