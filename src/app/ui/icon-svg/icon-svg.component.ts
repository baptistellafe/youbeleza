import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yb-icon-svg',
  templateUrl: './icon-svg.component.html',
  styleUrls: ['./icon-svg.component.scss'],
})
export class IconSvgComponent implements OnInit {

  @Input() icon: any;

  constructor() { }

  ngOnInit() {}

}
