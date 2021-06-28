import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ppRestService} from '../services/ppRest.services';
import { Info } from '../party'
import { float } from '@zxing/library/esm/customTypings';

@Component({
  selector: 'app-place-page',
  templateUrl: './place-page.component.html',
  styleUrls: ['./place-page.component.scss']
})
export class PlacePageComponent implements OnInit {
  partyId: String = localStorage.getItem('partyId');
  partyInfo: Info = new Info;
  dateFromStr: String;
  dateToStr: String;
  isChecked : boolean;
  constructor(private router: Router,private _ppRest:ppRestService) {
   
    this._ppRest.getPartyDetails(this.partyId).subscribe((result: Info)=>{
     
      this.partyInfo=result;

      //Če je dateFrom null se nastavi na današnji dan
      if(result.dateFrom==null){
        this.dateFromStr = new Date().toISOString().slice(0,16);
      }else{       
        this.dateFromStr = new Date(result.dateFrom).toISOString().slice(0,16);
      }

      //Če je dateTo null se nastavi na današnji dan
      if(result.dateTo==null){
        this.dateToStr = new Date().toISOString().slice(0,16);
      }else{       
        this.dateToStr = new Date(result.dateTo).toISOString().slice(0,16);
      }


    });
   }

  ngOnInit(): void {
    
  }
  
  createPartyInfo(name:String,description:String,address:String,exactDirections:String,dateFrom:Date,dateTo:Date, budget:Number) {
    
    this.partyInfo.name=name;
    this.partyInfo.description=description;
    this.partyInfo.address=address;
    this.partyInfo.exactDirections=exactDirections;
    this.partyInfo.dateFrom=dateFrom;
    this.partyInfo.dateTo=dateTo;
    this.partyInfo.budget=Number(budget);
    console.log(budget);
    console.log(this.partyInfo);

    this._ppRest.postPartyDetails(this.partyId,this.partyInfo).subscribe(
      (result: String)=>{
            
      },
      error => {

        console.log("Sending failed!");
      
    })
 
  }

  multiDays(event){
    this.isChecked=event.target.checked;

  }
  party(){
    this.router.navigate(['/party'])
  }

}
