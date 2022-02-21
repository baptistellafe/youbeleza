import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss', './produto-responsive.page.scss'],
})
export class ProdutoPage implements OnInit {
  @ViewChild('viewproduct', {static: true}) viewProduct: IonSlides
  public activeIndex: any; // INDEX SLIDE ATUAL
  public totalSlides: any; // TOTAL DE SLIDES

  public showSearchbar = false; // AO CLICAR NA LUPA, É ATIVADA.

  // BOTÕES DO HEADER
  public headerButtons = [
    { iconOutline: 'people-outline', iconFilled: 'people'},
    { iconOutline: 'heart-outline', iconFilled: 'heart' },
    { iconOutline: 'person-circle-outline', iconFilled: 'person-circle' },
  ]

  // CONFIGURAÇÃO DO SLIDER DAS IMAGENS DO PRODUTO
  public viewProductSlider = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  }

  // IMAGENS DO PRODUTO
  public products = [
    { image: 'batom-vermelho' },
    { image: 'batom-vermelho' },
    { image: 'batom-vermelho' }
  ]

  // TAGS
  public tags = [
    { tag: 'Batom' },
    { tag: 'MAC' },
    { tag: 'Maquiagem' }
  ]

  // COMPARAÇÃO
  public cards = [
    { image: 'batom-vermelho', store: 'boometics', price: 50, website: 'https://boometics.com/', conditions: 'ou em até 10x sem juros no cartão' },
    { image: 'batom-vermelho', store: 'boometics', price: 50, website: 'https://boometics.com/', conditions: 'ou em até 10x sem juros no cartão' },
    { image: 'batom-vermelho', store: 'boometics', price: 50, website: 'https://boometics.com/', conditions: 'ou em até 10x sem juros no cartão' },
    { image: 'batom-vermelho', store: 'boometics', price: 50, website: 'https://boometics.com/', conditions: 'ou em até 10x sem juros no cartão' },
    { image: 'batom-vermelho', store: 'boometics', price: 50, website: 'https://boometics.com/', conditions: 'ou em até 10x sem juros no cartão' }
  ]

  // OUTROS PRODUTOS
  public others = [
    { productDiscount: 10, productImage: 'batom-vermelho', productLabel: 'Batom vermelho', productPrice: 320, productStore: 10  },
    { productDiscount: 15, productImage: 'perfume', productLabel: 'Perfume', productPrice: 320, productStore: 10   },
    { productDiscount: 12, productImage: 'pinceis-de-maquiagem', productLabel: 'Pincéis de maquiagem', productPrice: 40, productStore: 10   },
    { productDiscount: 20, productImage: 'shampoo', productLabel: 'Shampoo', productPrice: 50, productStore: 10   }
  ]

  // LINKS DO BREADCRUMB
  public links = [
    { text: 'Home', link: '/menu/home' },
    { text: 'Maquiagem', link: '/menu/home' },
    { text: 'MAC', link: '/menu/home' },
    { text: 'Batom', link: '/menu/home' },
  ]

  constructor() { }

  ngOnInit() {
    this.getIndex();
  }

  // PEGA INDEX E TOTAL DOS SLIDES PARA SER USADO FORA DO *ngFor
  async getIndex() {
    this.activeIndex = await this.viewProduct.getActiveIndex() + 1;
    this.totalSlides = await this.viewProduct.length();
		return Promise.resolve();
  }

  prevSlide() { this.viewProduct.slidePrev() }
  nextSlide() { this.viewProduct.slideNext() }

  // SLIDER DE PRODUTOS
  public productSlider = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 400,
    autoHeight: false,
    breakpoints: {
      320: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 0,
      },
      480: {
        slidesPerView: 2,
        centeredSlides: true,
      },
      680: {
        slidesPerView: 3,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 4,
        centeredSlides: true,
      },
      1162: {
        slidesPerView: 4,
        centeredSlides: false,
      }
    }
  };
}
