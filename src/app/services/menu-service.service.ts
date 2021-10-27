import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Menu from '../entities/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  get(): Observable<Menu[]>{
    return this.http.get<any>('verdura');
  }

}
