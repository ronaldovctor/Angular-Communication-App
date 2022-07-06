import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/Models/Client';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.scss']
})
export class InputBindingComponent implements OnInit {
  @Input() firstName!: string
  @Input('otherName') lastName!: string
  @Input() age!: number

  clients!: Client[]

  constructor() {
    this.clients = [
      {id: 1, name: 'Bob', age: 30},
      {id: 2, name: 'Ana', age: 20},
      {id: 3, name: 'John', age: 40},
      {id: 4, name: 'Maria', age: 35},
    ]
   }

  ngOnInit(): void {
  }

}
