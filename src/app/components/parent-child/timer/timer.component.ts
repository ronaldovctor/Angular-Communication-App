import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  miliseconds: number = 0
  private interval: any
  running: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  start():void {
    if(!this.running){
      this.interval = setInterval(()=>{
        this.miliseconds += 50
      }, 50)
      this.running = true
    }
  }

  stop():void {
    if(this.running){
      clearInterval(this.interval)
      this.running = false
    }
  }

  clear(): void {
    this.miliseconds = 0
  }

  round(n: number): number {
    return Math.round(n)
  }
}
