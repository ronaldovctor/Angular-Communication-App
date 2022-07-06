import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss']
})
export class ParentChildComponent implements OnInit {
  @ViewChild(TimerComponent)
  private myTimer!: TimerComponent

  @ViewChild('myP')
  private myP!: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  start():void {
    this.myTimer.start()
  }

  stop():void {
    this.myTimer.stop()
  }

  clear():void {
    this.myTimer.clear()
  }

  ngAfterViewInit(){
    console.log(this.myP.nativeElement.innerHTML)
  }

}
