import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum-test',
  templateUrl: './sum-test.component.html',
  styleUrls: ['./sum-test.component.scss']
})
export class SumTestComponent implements OnInit {

  first: number;
  second: number;
  sum: number;
  constructor() { this.sum = 0; this.first = 0; this.second = 0; }

  ngOnInit() {
  }

   onchange() {
   this.sum = Number(this.first) + Number(this.second);
   }
}
