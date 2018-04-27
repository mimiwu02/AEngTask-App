import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { List } from '../models/list'


@Component({
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {

  lists: any = [];

  constructor(private listServ: ListService) { }

  ngOnInit() {
    this.loadLists();
  }

public loadLists(){
  this.listServ.getAllLists().subscribe(
    response => this.lists = response,)
  }

// public onAddList(newList) {
//   this.lists = this.lists.concat(newList);
//   }

  chartOptions = {
  responsive: true
  };

  chartData = [
    { data: [182, 33, 71, 59, 53, 68, 75, 38, 189, 27, 72, 74], label: 'Calories' },
  ];

  chartLabels = ['Bananas', 'Cantaloupe', 'Fruit cocktail','Grapes','Oranges', 'Peaches', 'Pineapple', 'Plum','Raisins', 'Strawberries', 'Tangerines','Watermelon'];
}
