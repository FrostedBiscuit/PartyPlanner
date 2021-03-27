import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ppRestService} from '../services/ppRest.services';
import { Info } from '../party'

@Component({
  selector: 'app-place-page',
  templateUrl: './place-page.component.html',
  styleUrls: ['./place-page.component.scss']
})
export class PlacePageComponent implements OnInit {
  partyId: String = localStorage.getItem('partyId');
  partyInfo: Info = new Info;
  partyDateStr: String;
  constructor(private router: Router,private _ppRest:ppRestService) {
   
    this._ppRest.getPartyDetails(this.partyId).subscribe((result: Info)=>{
      this.partyInfo=result;
      this.partyDateStr = new Date(result.partyDate).toISOString().slice(0,16);
    });
   }

  ngOnInit(): void {
    
  }
  
  createPartyInfo(name:String,location:String, pDate:Date, budget:Number) {
    
    this.partyInfo.name=name;
    this.partyInfo.description=location;
    this.partyInfo.partyDate=pDate;
    this.partyInfo.budget=Number(budget);
    console.log(this.partyInfo);

    this._ppRest.postPartyDetails(this.partyId,this.partyInfo).subscribe((result: String)=>{
      
    })
 
  }

  party(){
    this.router.navigate(['/party'])
  }

}
