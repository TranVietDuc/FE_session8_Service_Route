import { Component, OnInit } from '@angular/core';
import {DateUtilService} from '../date-util.service';

@Component({
  selector: 'app-living-time',
  templateUrl: './living-time.component.html',
  styleUrls: ['./living-time.component.scss']
})
export class LivingTimeComponent implements OnInit {

  output = '';

  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit() {
  }
 onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
 }
}
