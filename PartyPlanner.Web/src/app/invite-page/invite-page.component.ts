import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';

import { ppRestService} from '../services/ppRest.services';
import { Party,Guest } from '../party'

@Component({
  selector: 'app-invite-page',
  templateUrl: './invite-page.component.html',
  styleUrls: ['./invite-page.component.scss']
})
export class InvitePageComponent implements OnInit {
  
  partyId: string;
  party: Party;
  going: boolean;

  date: String;
  time: String;

  host: boolean = false;
  vegetarian: boolean = false;
  vegan:boolean = false;
  nonDrinker:boolean = false;
  paid: boolean = false;

  constructor(private router:Router,private activeRouter: ActivatedRoute,private _ppRest: ppRestService) {
    
    this.activeRouter.params.subscribe(
      (params: Params) => this.partyId = params['id']
    );

    this.checkParty(this.partyId);

    
  }

  ngOnInit(): void {
  }

  enterParty(name:string,email:string){
    // TODO CHECKING
    if(name === ""){
      alert("name is empty");
      return;
    }
    // TODO CHECKING
    if(email === ""){
      alert("email is empty");
      return;
    }

    let guest= new Guest;
    
    guest.name=name;
    guest.email=email;
    guest.nonDrinker=this.nonDrinker;
    guest.vegan=this.vegan;
    guest.vegetarian=this.vegetarian;
    guest.paid = this.paid;

    console.log(guest);
  
    this._ppRest.postGuest(this.partyId,guest).subscribe(
      (data: Guest) => {
        this.router.navigate(['/party']); 
      },
      error => {
        console.log('error');
    }); 
   
  }

  checkParty(partyId:string){
    this._ppRest.getPartyById(partyId).subscribe((result: Party)=>{
      localStorage.setItem('partyId', result.id);
      this.party = result;
      console.log(result);
      const conDate = new Date(this.party.info.dateFrom)
      this.date = conDate.getDate()+"."+conDate.getMonth()+"."+conDate.getFullYear()
      this.time = conDate.getHours()+":"+conDate.getMinutes()
    },
    error => {
      alert('Please try again');
    }); 
  }

  changeGoing(going: boolean){
    console.log(going);
    this.going = going;
  }

  toggleHost(){
    this.host = !this.host;
  }

  toggleVegetarian(){
    this.vegetarian =!this.vegetarian;
  }
  
  togglePaid(){
    this.paid = !this.paid;
  }

  toggleVegan(){
    this.vegan = !this.vegan;
  }

  toggleDrinker(){
    this.nonDrinker = !this.nonDrinker;
  }

}
