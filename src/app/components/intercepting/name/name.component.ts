import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  private _name: string = " "
  
  @Input() 
  set name(name: string){ this._name = `Your name: ${name.trim() || ''}` }
  get name(): string{
    return this._name
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
