import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seenonme',
  templateUrl: './seenonme.component.html',
  styleUrls: ['./seenonme.component.scss']
})
export class SeenonmeComponent implements OnInit {
  uploaded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  submit(): void {
    this.uploaded = true;
  }
}
