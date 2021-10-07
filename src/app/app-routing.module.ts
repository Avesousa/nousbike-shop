import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderListComponent } from './routes/order-list/order-list.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: "order",
    component: OrderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
