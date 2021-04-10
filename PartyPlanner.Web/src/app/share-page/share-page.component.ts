import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.scss']
})
export class SharePageComponent implements OnInit {

  partyId: String = localStorage.getItem('partyId');

  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

  onCopy() {
    var el = document.getElementById('ID')
    el.setAttribute('contenteditable','true')
    el.focus()
    document.execCommand('selectAll')
    document.execCommand('copy');
    el.setAttribute('contenteditable','false')
    el.blur()
  }

  party(){
    this.router.navigate(['/party'])
  }
}
