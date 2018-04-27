import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { List } from '../models/list'

@Component({
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.css']
})
export class VegetableListComponent implements OnInit {

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
  { data: [12, 22, 10, 23, 90], label: 'Calories' },
];

chartLabels = ['Broccoli florets', 'Baby carrots', 'Celery','Red Peppers','Sweet Potatoes'];

}
