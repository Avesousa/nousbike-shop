import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input()
  public label:string = "";

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
