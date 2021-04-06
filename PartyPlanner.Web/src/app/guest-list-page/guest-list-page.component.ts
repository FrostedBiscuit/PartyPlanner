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

  addNewVisible: boolean = false;

  host: boolean = false;
  meat: boolean = false;
  paid: boolean = false;

  constructor(private router: Router,private _ppRest: ppRestService) { 
    this._ppRest.getGuestList(this.partyId).subscribe((result:GuestBody)=>{
      console.log(result);
      this.guestList=result.guests;
    });
  }

  ngOnInit(): void {
  }

  postGuest(name:String){
    let guest= new Guest;
    //guest.guestId=0;
    guest.name=name;
    //guest.surname="Kovic";
    //guest.email="blazCar@gmail.com";
    guest.nonDrinker=this.host;
    //guest.phone="030444555";
    guest.vegan=this.paid;
    guest.vegetarian=this.meat;
    console.log(guest);
    this._ppRest.postGuest(this.partyId,guest).subscribe(
      (data: Guest) => {
        //this.reloadCurrentRoute()
        this.guestList.push(data)
      },
      error => {
        console.log('error');
    }); 
  };
  

  party(){
    this.router.navigate(['/party']) 
  }

  addGuest(){
    this.addNewVisible = !this.addNewVisible;
  }

  toggleHost(){
    this.host = !this.host;
  }

  toggleMeat(){
    this.meat =!this.meat;
  }

  togglePaid(){
    this.paid = !this.paid;
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }

}
