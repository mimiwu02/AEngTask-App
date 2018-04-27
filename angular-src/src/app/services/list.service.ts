import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { List } from '../models/list'

import 'rxjs/add/operator/map';

@Injectable()
export class ListService {

  constructor(private http: Http) { }

  private serverApi= 'http://localhost:3000';

  public getAllLists():Observable<List[]>{

    let URI = `${this.serverApi}/snacklist/`;
    return this.http.get(URI)
      .map(res => res.json())
      .map(res => <List[]>res.lists);
  }

  public addList(list: List) {
    let URI = `${this.serverApi}/snacklist/`;
    let headers = new Headers;
    let body = JSON.stringify({snack: list.snack, vegetable: list.vegetable, fruit: list.fruit,
      snackPortion: list.snackPortion, snackPrice: list.snackPrice, snackCalories: list.snackCalories,
      vegetablePortion: list.vegetablePortion, vegetablePrice: list.vegetablePrice, vegetableCalories: list.vegetableCalories,
      fruitPortion: list.fruitPortion, fruitPrice: list.fruitPrice, fruitCalories: list.fruitCalories});
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body ,{headers: headers})
    .map(res => res.json());
  }
}
