import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ppRestService} from '../services/ppRest.services';
import { Party } from '../party'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  visible: boolean = true
  partyList: Party[] = []

  constructor(private router: Router, private _ppRest: ppRestService) {
    this.hide()
    this.getParties()
  }

  ngOnInit(): void {
  }

  getParties(){
    this._ppRest.getParty().subscribe((result: Party[])=>{
      console.log(result);
      this.partyList = result;
    },
    error => {
      console.log('error');
    }); 
  }

  load(id:string){
    localStorage.setItem('partyId',id);
    this.router.navigate(['/party'])
  }

  hide(){
    setInterval(() => {
      this.visible = false
    },2000)
  }

  party(){
    localStorage.removeItem('partyId');
    this.router.navigate(['/party'])
  }

  archive(){
    this.router.navigate(['/archive'])
  }

}
