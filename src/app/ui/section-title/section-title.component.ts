import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yb-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss', './section-title-responsive.component.scss'],
})
export class SectionTitleComponent implements OnInit {

  @Input() title: any;
  @Input() subtitle: any;
  @Input() route: any;

  constructor() { }

  ngOnInit() {}

}
