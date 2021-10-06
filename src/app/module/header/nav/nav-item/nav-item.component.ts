import { Component, Input, OnInit } from '@angular/core';
import { Item } from './model/item';

@Component({
  selector: 'Nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input()
  public item:Item = {label: "", isLogo: false};

  private number:number = 0;

  constructor() { }

  ngOnInit(): void {
    let hola = "verdura";
    this.saludar(hola);
  }

  saludar(hola: string){
    console.log(`Estoy saludando con el numero ${this.number} - ${hola}`);
  }

}
