import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { List } from '../models/list'

@Component({
  templateUrl: './snack-list.component.html',
  styleUrls: ['./snack-list.component.css']
})
export class SnackListComponent implements OnInit {

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
  { data: [262, 123, 140, 114, 174, 271, 235, 82, 102, 119, 196, 369, 252, 80, 169, 168, 152, 183, 299, 161], label: 'Calories' },
];

chartLabels = ['Chocolate candy', 'cookies', 'corn chips','crackers','cupcakes', 'danish',
'donuts', 'Fruit rolls', 'Graham crackers', 'Granola bars', 'Ice cream', 'Muffins', 'Pizza',
'Popsicles', 'Potato chips', 'Pretzels', 'Pudding', 'Sandwich crackers', 'toster pastries', 'tortilla chips'];
}
