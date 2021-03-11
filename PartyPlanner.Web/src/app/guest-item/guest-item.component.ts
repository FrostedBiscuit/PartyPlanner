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
  
  partyId: String = localStorage.getItem('partyId');

  @Input() guest: Guest; 
  @Input() host: boolean = false;
  @Input() name: string;
  @Input() meat: boolean = false;
  @Input() paid: boolean = false;
  
  
  constructor(private router: Router,private _ppRest: ppRestService) { 
    
  }

  ngOnInit(): void {
    
  }

  toggleHost(){
    console.log(this.guest);
    this.host = !this.host;
  }

  toggleMeat(){
    this.meat =!this.meat;
  }

  togglePaid(){
    this.paid = !this.paid;
  }

  deleteGuest(){
    console.log(this.guest.guestId);
    this._ppRest.deleteGuest(this.partyId,this.guest.guestId).subscribe(
      data => {
        this.reloadCurrentRoute()
      },
      error => {
        console.log('error');
      });  
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }
  
}
