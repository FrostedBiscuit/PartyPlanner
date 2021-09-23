import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Guest } from '../party';
import { ppRestService} from '../services/ppRest.services';

@Component({
  selector: 'app-guest-item',
  templateUrl: './guest-item.component.html',
  styleUrls: ['./guest-item.component.scss']
})
export class GuestItemComponent implements OnInit {
  
  @Input() guest: Guest; 
  
  partyId: String = localStorage.getItem('partyId');
  showError: Boolean = false;

  constructor(private router: Router,private _ppRest: ppRestService) { 
    
  }

  ngOnInit(): void {
  }

  toggleHost(){
    this.guest.host = !this.guest.host;
  }

  toggleVegetarian(){
    this.guest.vegetarian =!this.guest.vegetarian;
  }

  togglePaid(){
    this.guest.paid = !this.guest.paid;
  }

  toggleVegan(){
    this.guest.vegan = !this.guest.vegan;
  }

  toggleDrinker(){
    this.guest.nonDrinker = !this.guest.nonDrinker;
  }

  deleteGuest(){
    console.log(this.guest.guestId);
    this._ppRest.deleteGuest(this.partyId,this.guest.guestId).subscribe(
      data => {
        this.reloadCurrentRoute()
      },
      error => {
        this.showError = true;
      });  
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }

  hideAlert($event){
    this.showError = $event;
  }
  
}
