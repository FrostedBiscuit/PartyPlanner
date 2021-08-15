import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Slide } from '../_interfaces/slideshow.interface';
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
  dateFromStr: String;
  daysStr: String;
  url: String;

  slides: Slide[] = [
    {
      headline: "For Your Current Mood",
      src:
        "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      headline: "Miouw",
      src:
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
    },
    {
      headline: "In The Wilderness",
      src:
        "https://images.unsplash.com/photo-1557800634-7bf3c7305596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80"
    }
  ];

  constructor(private router: Router,private _ppRest:ppRestService, private http: HttpClient) {
   
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

  onFileSelected(event){
    
    if(event.target.files.length>3){
      alert("Max is 3 images!");
      return;
    }

    //Clear the array
    this.slides.length = 0

    for (let i= 0; i < event.target.files.length; i++) {
      const element = event.target.files[i];
      const reader = new FileReader();
      reader.readAsDataURL(element);
      reader.onload = (e: any) => {
        const slide: Slide = {
          src: e.target.result,
        }
        this.slides.push(slide);
        this.url = e.target.result;
      }
      
    }
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
