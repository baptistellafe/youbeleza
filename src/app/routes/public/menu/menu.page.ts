import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yb-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss', './menu-responsive.page.scss'],
})
export class MenuPage implements OnInit {

  public selectedTab = 0;

  public options = [
    { iconOutline: 'home-outline', iconSelected: 'home', label: 'Início', route: 'home', isActive: true },
    { iconOutline: 'people-outline', iconSelected: 'people', label: 'Comunidade', route: 'comunidade', isActive: false },
    { iconOutline: 'pricetags-outline', iconSelected: 'pricetags', label: 'Promoções', route: 'promocoes', isActive: false },
    { iconOutline: 'heart-outline', iconSelected: 'heart', label: 'Desejos', route: 'desejos', isActive: false },
    { iconOutline: 'person-circle-outline', iconSelected: 'person-circle', label: 'Conta', route: 'conta', isActive: false },
  ]

  constructor() { }

  ngOnInit() {
   
  }
}
