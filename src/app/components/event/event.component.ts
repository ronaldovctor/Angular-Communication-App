import { Component, OnInit, ValueProvider } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  value: number = 0
  title: string = 'My title'

  constructor() { }

  ngOnInit(): void {
  }

  inc(n: number): void {
    this.value += n
  }
}
