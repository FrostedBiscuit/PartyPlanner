import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ppRestService} from '../services/ppRest.services';
import { Info } from '../party'
import { float } from '@zxing/library/esm/customTypings';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-place-page',
  templateUrl: './place-page.component.html',
  styleUrls: ['./place-page.component.scss']
})
export class PlacePageComponent implements OnInit {
  partyId: String = localStorage.getItem('partyId');
  partyInfo: Info = new Info;
  dateFromStr: String;
  daysStr: String;

  constructor(private router: Router,private _ppRest:ppRestService) {
   
    this._ppRest.getPartyDetails(this.partyId).subscribe((result: Info)=>{
     
      this.partyInfo=result;

      //Če je dateFrom null se nastavi na današnji dan
      if(result.dateFrom==null){
        this.dateFromStr = new Date().toISOString().slice(0,16);
      }else{       
        this.dateFromStr = new Date(result.dateFrom).toISOString().slice(0,16);
      }

      const diff = Math.abs(new Date(result.dateTo).getTime() - new Date(result.dateFrom).getTime());
      this.daysStr = String(Math.ceil(diff / (1000 * 3600 * 24))); 

    });
   }

  ngOnInit(): void {
    
  }
  
  createPartyInfo(name:String, description:String, address:String, exactDirections:String, dateFrom:Date, days: number, budget:Number) {
    
    let dateTo: Date = new Date(dateFrom);
    dateTo.setDate(dateTo.getDate()+Number(days));

    this.partyInfo.name=name;
    this.partyInfo.description=description;
    this.partyInfo.address=address;
    this.partyInfo.exactDirections=exactDirections;
    this.partyInfo.dateFrom=dateFrom;
    this.partyInfo.dateTo=dateTo;
    this.partyInfo.budget=Number(budget);

    this._ppRest.postPartyDetails(this.partyId,this.partyInfo).subscribe(
      (result: String)=>{
        this.router.navigate(['/party'])     
      },
      error => {
        alert("Saving failed!");
    })
 
  }
}
