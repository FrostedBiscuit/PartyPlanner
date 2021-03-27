import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonConfig: any;
  @Input() function: any
  constructor() { }

  ngOnInit(): void {
  }

  onClickEventReceived(event: string) {
    console.log("klikneno")
  }
 
}
