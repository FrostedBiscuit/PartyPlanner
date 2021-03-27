import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  visible: boolean = true
  constructor(private router: Router) {
    this.hide()
  }

  ngOnInit(): void {
  }

  hide(){
    setInterval(() => {
      this.visible = false
    },2000)
  }
  party(){
    this.router.navigate(['/party'])
    
  }
  budget(){
    this.router.navigate(['/budget'])
  }

 

  

}
