import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yb-section-banner',
  templateUrl: './section-banner.component.html',
  styleUrls: ['./section-banner.component.scss', './section-banner-responsive.component.scss'],
})
export class SectionBannerComponent implements OnInit {

  @Input() title: any;
  @Input() message: any;
  @Input() buttonText: any;
  @Input() route: any;
  @Input() image: any;

  constructor() { }

  ngOnInit() {}

}
