import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yb-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.scss', './category-button-responsive.component.scss'],
})
export class CategoryButtonComponent implements OnInit {

  @Input() icon: any;
  @Input() label: any;
  @Input() route: any;

  constructor() { }

  ngOnInit() {}

}
