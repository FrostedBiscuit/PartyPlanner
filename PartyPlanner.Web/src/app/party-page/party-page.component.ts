
import { Component, OnInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { ppRestService} from '../services/ppRest.services';
import { Party,Category } from '../party'
@Component({
  selector: 'app-party-page',
  templateUrl: './party-page.component.html',
  styleUrls: ['./party-page.component.scss']
})
export class PartyPageComponent implements OnInit {
 
 
  partyId: string = localStorage.getItem('partyId');
  party: Party;
  validPartyId: boolean = false;
  


  constructor(private activatedRouter: ActivatedRoute,private router: Router,private _ppRest:ppRestService) {
    console.log(this.partyId)
    if(this.activatedRouter.snapshot.queryParamMap.get('id') != null){
      this.partyId = this.activatedRouter.snapshot.queryParamMap.get('id')
      localStorage.setItem('partyId',this.partyId)
    }

    if (this.partyId === null){
      this.validPartyId=false;
    }else{
      this.validPartyId=true;
    }
   }

  ngOnInit(): void {
  
  }


  createParty(partyName:string) {

    this._ppRest.putParty(partyName).subscribe(
      (result: Party)=>{
        this.partyId=result.id;
        this.party=result;
        localStorage.setItem('partyId', result.id);
        this.validPartyId=true; 
        console.log(result);

        //Addin default categories FOOD,DRINKS
        this.partyAddDefaultCategories();

        this.router.navigate(['/place'])

      }),error => {
        alert("Party can't be created");
        console.log(error);
      }
      
  }

  partyAddDefaultCategories(){
    this.createCategory("Food");
    this.createCategory("Drinks");

  }

  createCategory(categoryName: String){
    let category= new Category;
    category.name=categoryName;
    category.items=[];
    this._ppRest.putCategory(this.partyId,category).subscribe(
      (data:Category) => {
      
      },
      error => {
        console.log(error);
      });
  }

  checkParty(partyId:string){
    this._ppRest.getPartyById(partyId).subscribe((result: Party)=>{
      localStorage.setItem('partyId', result.id);
      this.validPartyId=true;
      console.log(result);
    },
    error => {
      console.log('error');
    }); 
  }
  onTextBtnClick(arg: string){
  
    if(arg=='GUEST') this.router.navigate(['/guest'])
    
    if(arg=='ITEMS') this.router.navigate(['/categoryList'])

    if(arg=='PLACE') this.router.navigate(['/place'])

    if(arg=='SHARE') this.router.navigate(['/share'])

    if(arg=='CALCULATE') this.router.navigate(['/calculate'])

  }
  onCodeResult(resultString: string) {
    if (window.confirm('Do you want to check this party?: '+resultString))
      {
        this.checkParty(resultString);
      }
      
    
  }
}
