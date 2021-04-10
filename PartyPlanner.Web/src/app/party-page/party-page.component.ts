import { stringify } from '@angular/compiler/src/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../GlobalConstants';
import { ppRestService} from '../services/ppRest.services';
import { Party } from '../party'
@Component({
  selector: 'app-party-page',
  templateUrl: './party-page.component.html',
  styleUrls: ['./party-page.component.scss']
})
export class PartyPageComponent implements OnInit {
 
  
  partyId: String = localStorage.getItem('partyId');
  validPartyId: boolean = false;
  


  constructor(private router: Router,private _ppRest:ppRestService) {
    console.log(this.partyId)
    if (this.partyId === null){
      this.validPartyId=false;
    }else{
      this.validPartyId=true;
    }
   }

  ngOnInit(): void {
  }
  createParty(partyName:string) {
    //this._ppRest.getParty().subscribe((result)=>{
    //  console.warn(result)
    //})
    this._ppRest.putParty(partyName).subscribe((result: Party)=>{
      this.partyId=result.id;
      localStorage.setItem('partyId', result.id);
      console.log(result);
      this.validPartyId=true;
      
    })
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
  }
}
