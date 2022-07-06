import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client2 } from 'src/app/Models/Client2';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent implements OnInit {
  @Input() client: Client2 = {name:"Empty", age:0}
  @Output() updateClient = new EventEmitter<Client2>()
  @Output() removeClient = new EventEmitter<any>()
  name!:string
  age!:number
  onEdit:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  save():void{
    this.onEdit = false
    this.client = { name: this.name, age: this.age }
    this.updateClient.emit(this.client)
  }

  edit():void{
    this.onEdit = true
    this.name = this.client.name
    this.age = this.client.age
  }

  remove():void{
    this.removeClient.emit()
  }

}
