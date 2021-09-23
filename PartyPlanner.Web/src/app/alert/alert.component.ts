import { animate, keyframes, style } from '@angular/animations';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() type: string;
  @Input() text: string;
  @Output() hideEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  async hideAlert(){
    // animate('1s',keyframes([
    //     style({bottom: '50px', offset: 0}),
    //     style({bottom: '-100px', offset: 1})
    // ]))

    this.hideEvent.emit(false)
  }

}
