import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ppRestService } from '../services/ppRest.services';
import { Party } from '../party'

@Component({
  selector: 'app-archive-page',
  templateUrl: './archive-page.component.html',
  styleUrls: ['./archive-page.component.scss']
})
export class ArchivePageComponent implements OnInit {

  partyList: Party[] = []
  showError: Boolean = false;

  constructor(private router: Router, private _ppRest: ppRestService) {
    this.getParties()
   }

  ngOnInit(): void {
  }

  getDate(date: any): string{
    const _date = new Date(date);
    return `${_date.getFullYear()}-${_date.getMonth()}-${_date.getDate()}`;      
  };

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

  party(){
    localStorage.removeItem('partyId');
    this.router.navigate(['/party'])
  }

  hideAlert($event){
    this.showError = $event;
  }

}
