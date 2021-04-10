import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ppRestService} from '../services/ppRest.services';
import { Guest,GuestBody,GuestList } from '../party'
@Component({
  selector: 'app-guest-list-page',
  templateUrl: './guest-list-page.component.html',
  styleUrls: ['./guest-list-page.component.scss']
})
export class GuestListPageComponent implements OnInit {
  
  partyId: String = localStorage.getItem('partyId');
  guestList: Guest[];

  contetVisible: boolean = false;

  host: boolean = false;
  vegetarian: boolean = false;
  vegan:boolean = false;
  nonDrinker:boolean = false;
  paid: boolean = false;


  constructor(private router: Router,private _ppRest: ppRestService) { 
    this._ppRest.getGuestList(this.partyId).subscribe((result:GuestBody)=>{

      this.guestList=result.guests;

      this.contetVisible=this.guestList.length>0;

    });
  }

  ngOnInit(): void {
  }

  postGuest(name:String,email:String){
    if(name==""){
      alert("name is empty");
      return;
    }

    let guest= new Guest;
    
    guest.name=name;
    //guest.surname="Kovic";
    guest.email=email;
    guest.nonDrinker=this.nonDrinker;
    //guest.phone="030444555";
    guest.vegan=this.vegan;
    guest.vegetarian=this.vegetarian;
    console.log(guest);
    this._ppRest.postGuest(this.partyId,guest).subscribe(
      (data: Guest) => {
        

        this.guestList.push(data);

        //reset datafields
        this.host = false;
        this.vegetarian = false;
        this.paid = false;      
        this.vegan = false;
        this.nonDrinker= false;
        
        this.contetVisible=this.guestList.length>0;
      },
      error => {
        console.log('error');
    }); 
  };
  

  party(){
    this.router.navigate(['/party']) 
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

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }

}
