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
  showError: Boolean = false;

  constructor(private router: Router, private _ppRest: ppRestService) {
    this.hide()
    this.getParties()
  }

  ngOnInit(): void {
  }

  getParties(){
    this._ppRest.getParty().subscribe((result: Party[])=>{
      this.partyList = result;
    },
    error => {
      this.showError = true;
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

  hideAlert($event){
    this.showError = $event;
  }

}
