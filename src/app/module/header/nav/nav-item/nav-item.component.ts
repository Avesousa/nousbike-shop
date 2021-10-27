import { MenuService } from './../../../../services/menu-service.service';
import { Component, OnInit } from '@angular/core';
import Menu  from 'src/app/entities/Menu';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  //TODO pasar a NAVCOMPONENT
  public menues: Menu[] = [
    {
      id: 1,
      name: 'Inicio'
    }
  ];
  public isError: boolean = false;

  constructor(private service: MenuService) { }

   ngOnInit(): void {
    this.service.get().subscribe(
      (res: Menu[])=>{
        this.menues = res;
      },
      (err: any) =>{
        this.isError = true;
      }
    );
  }


  // ngOnInit(): void {
  //   this.service.get().subscribe(this.respuesta,this.error);
  // }

  // respuesta(res: Menu[]){

  // }

  // error(err: any){

  // }

}
