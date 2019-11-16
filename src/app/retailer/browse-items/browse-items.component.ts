import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../../models/mock-items';
import { Item } from '../../models/item';

@Component({
  selector: 'app-browse-items',
  templateUrl: './browse-items.component.html',
  styleUrls: ['./browse-items.component.scss']
})
export class BrowseItemsComponent implements OnInit {
  items: Item[] = ITEMS;

  selectedItem: Item = null;

  constructor() { }

  ngOnInit() {
    
  }

  selectItem(item: Item): void {
    this.selectedItem = item;
  }

  deselectItem(msg): void {
    this.selectedItem = null;
  }

}
