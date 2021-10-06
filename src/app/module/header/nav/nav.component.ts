import { Component, OnInit } from '@angular/core';
import { Item } from './nav-item/model/item';

@Component({
  selector: 'Nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public menuArray: Item[] = [
    {label: "hola", isLogo:false},
    {label: "como", isLogo:false},
    {label: "logo", image:"src/asssets/verdura.jpg", isLogo:true},
    {label: "estas", isLogo:false},
    {label: "?", isLogo:false}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  saludar(): void {
    console.log("Saludar a nicp");
  }

}
