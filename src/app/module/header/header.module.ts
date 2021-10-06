import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavItemComponent } from './nav/nav-item/nav-item.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    NavItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
