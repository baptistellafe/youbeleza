import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yb-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {

  @Input() links: any;

  constructor() { }

  ngOnInit() {}

}
