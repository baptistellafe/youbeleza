import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yb-comparison-card',
  templateUrl: './comparison-card.component.html',
  styleUrls: ['./comparison-card.component.scss', './comparison-card-responsive.component.scss'],
})
export class ComparisonCardComponent implements OnInit {

  @Input() image: any;
  @Input() store: any;
  @Input() price: number;
  @Input() website: any;
  @Input() conditions: any;

  constructor() { }

  ngOnInit() {}

}
