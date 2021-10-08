import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { link } from 'fs';
import { Item } from './model/item';

@Component({
  selector: 'Nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
  @Input()
  public item: Item = { label: '', link: '' };

  private number: number = 0;

  public classDefined: string = '';
  public link: string = '';
  public label: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.definedClass();
  }

  definedClass() {
    //Formato uno
    // this.classDefined = this.item.label == "inicio" ? "inicio" :
    //     (this.item.label == "productos" ? "productos" : "default");

    //Forma dos
    // if(this.item.label == "inicio"){
    //   this.classDefined = "inicio";
    // }else if(this.item.label == "productos"){
    //   this.classDefined = "productos";
    // }else{
    //   this.classDefined = "default";
    // }

    //forma tres
    let classFlag = '';
    switch (this.item.label) {
      case 'inicio':
        classFlag = 'inicio';
        break;
      case 'productos':
        classFlag = 'productos';
        break;
      default:
        classFlag = 'default';
        break;
    }
    this.definirDatos(classFlag, this.item.link, this.item.label);
  }

  definirDatos(classDefined: string, url: string, label: string) {
    this.classDefined = classDefined;
    this.link = url;
    this.label = label;
  }

  toGo() {
    console.log('Haciendo click');
    this.router.navigateByUrl(this.item.link);
  }
}
