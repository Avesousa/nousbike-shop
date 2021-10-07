import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from './model/item';

@Component({
  selector: 'Nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input()
  public item:Item = {label: "", link: ""};

  private number:number = 0;

  public classDefined:string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.definedClass();
  }

  definedClass(){
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
    switch(this.item.label){
      case "inicio":
        this.classDefined = "inicio";
        break;
      case "productos":
        this.classDefined = "productos";
        break;
      default:
        this.classDefined = "default";
        break;
    }

  }

  toGo(){
    console.log("Haciendo click");
    this.router.navigateByUrl(this.item.link);
  }

}
