import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yb-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {

  @Input() productDiscount: number;
  @Input() productImage: string;
  @Input() productLabel: string;
  @Input() productPrice: number;
  @Input() productStore: number;

  constructor() { }

  ngOnInit() {}

}
