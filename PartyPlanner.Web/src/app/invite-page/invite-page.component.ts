import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';

import { ppRestService} from '../services/ppRest.services';
import { Party,Category } from '../party'

@Component({
  selector: 'app-invite-page',
  templateUrl: './invite-page.component.html',
  styleUrls: ['./invite-page.component.scss']
})
export class InvitePageComponent implements OnInit {
  
  partyId: string;
  party: Party;
  going: boolean;

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

    console.log(this.partyId)
  }

  ngOnInit(): void {
  }

  checkParty(partyId:string){
    this._ppRest.getPartyById(partyId).subscribe((result: Party)=>{
      localStorage.setItem('partyId', result.id);
      this.party = result;
      console.log(result);
    },
    error => {
      console.log('error');
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
