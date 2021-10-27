import { MenuService } from './../../../../services/menu-service.service';
import { Component, OnInit, Input } from '@angular/core';
import Menu  from 'src/app/entities/Menu';
import { Item } from './model/item';

@Component({
  selector: 'Nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input()
  public item:Item = {label: "", isLogo: false};
  // //TODO pasar a NAVCOMPONENT
  // public menues: Menu[] = [
  //   {
  //     id: 1,
  //     name: 'Inicio'
  //   }
  // ];
  // ngOnInit(): void {
  //  this.service.get().subscribe(
  //    (res: Menu[])=>{
  //      this.menues = res;
  //    },
  //    (err: any) =>{
  //      this.isError = true;
  //    }
  //  );
  public isError: boolean = false;

  constructor(private service: MenuService) { }


  private number:number = 0;

  ngOnInit(): void {
    let hola = "verdura";
    this.saludar(hola);
  }

  saludar(hola: string){
    console.log(`Estoy saludando con el numero ${this.number} - ${hola}`);
  }


  // ngOnInit(): void {
  //   this.service.get().subscribe(this.respuesta,this.error);
  // }

  // respuesta(res: Menu[]){

  // }

  // error(err: any){

  // }

}
