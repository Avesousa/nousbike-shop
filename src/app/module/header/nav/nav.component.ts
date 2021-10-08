import { Component, OnInit } from '@angular/core';
import { Item } from './nav-item/model/item';

@Component({
  selector: 'Nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public menuArray: Item[] = [
    {label: "inicio", link: "/"},
    {label: "productos", link: "/product"},
    {label: "logo", link: "/",image:"/assets/brand/logo.jpg", },
    {label: "ordenes", link: "/order"},
    {label: "carrito", link: "/checkout"}];

  constructor() { }

  ngOnInit(): void {
  }

  saludar(): void {
    console.log("Saludar a nicp");
  }

}
