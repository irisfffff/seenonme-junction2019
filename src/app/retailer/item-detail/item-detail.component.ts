import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Item} from '../../models/item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Item;

  @Output() backEvent = new EventEmitter();

  seenOnMe: boolean = false;

  selectedColor = 'unselected';
  selectedSize = -1;

  constructor() { }

  ngOnInit() {

  }

  turnBack() {
    this.backEvent.emit('turnnig back');
  }

  displaySeenOnMe() {
    this.seenOnMe = true;
  }

  closeSeenOnMe(msg): void {
    this.seenOnMe = false;
  }
}
