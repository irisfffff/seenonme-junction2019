import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent implements OnInit {
  @Input() sizes: Array<string>;
  @Input() selectedSize: string;

  @Output() closeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeSeenOnMe() {
    this.closeEvent.emit('close SeenOnMe');
  }
}
