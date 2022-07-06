import { Component, Input, OnInit } from '@angular/core';
import { Client2 } from 'src/app/Models/Client2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  name!: string
  age!: number
  clients: Client2[] = []

  constructor() { }

  ngOnInit(): void {
  }

  save():void{
    this.clients.push(
      {name: this.name, age: this.age}
    )
    this.name = ''
    this.age = 0
  }

  deleteClient(i: number): void {
    this.clients.splice(i,1)
  }

  updateClient(c: Client2, i: number):void {
    this.clients[i] = c
  }

}
