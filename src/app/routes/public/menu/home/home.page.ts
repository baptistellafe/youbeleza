import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss', './home-responsive.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('heroSlide') heroSlide: IonSlides;

  prevSlide() {this.heroSlide.slidePrev() }
  nextSlide() {this.heroSlide.slideNext() }

  public headerButtons = [
    { iconOutline: 'people-outline', iconFilled: 'people', route: '/menu/comunidade' },
    { iconOutline: 'heart-outline', iconFilled: 'heart', route: '/menu/desejos' },
    { iconOutline: 'person-circle-outline', iconFilled: 'person-circle', route: '/menu/conta' },
  ]

  public heroSlider = {
    initialSlide: 0,
    speed: 400
  };

  public categorySlider = {
    initialSlide: 0,
    slidesPerView: 3,
    freeMode: true,
    speed: 400,
    centeredSlides: true,
    breakpoints: {
      480: {
        slidesPerView: 5,
        spaceBetween: 0,
        initialSlide: 0,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
    }
  };

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

  public categories = [
    { icon: 'cosmetics', label: 'Maquiagem', route: '/teste' },
    { icon: 'clothes-hanger', label: 'Moda & Acessórios', route: '/teste' },
    { icon: 'fragrance', label: 'Perfumaria', route: '/teste' },
    { icon: 'salon', label: 'Cabelos', route: '/teste' },
    { icon: 'percentage', label: 'Promoções', route: '/teste' }
  ]

  public highlights = [
    { productDiscount: 10, productImage: 'batom-vermelho', productLabel: 'Batom vermelho', productPrice: 320, productStore: 10  },
    { productDiscount: 15, productImage: 'perfume', productLabel: 'Perfume', productPrice: 320, productStore: 10   },
    { productDiscount: 12, productImage: 'pinceis-de-maquiagem', productLabel: 'Pincéis de maquiagem', productPrice: 40, productStore: 10   },
    { productDiscount: 20, productImage: 'shampoo', productLabel: 'Shampoo', productPrice: 50, productStore: 10   }
  ]

  public seasons = [
    { productDiscount: 0, productImage: 'biquinis-diversos', productLabel: 'Biquinis diversos', productPrice: 50, productStore: 10  },
    { productDiscount: 0, productImage: 'oculos-de-sol', productLabel: 'Oculos de sol', productPrice: 70, productStore: 10   },
    { productDiscount: 0, productImage: 'protetor-solar', productLabel: 'Protetor solar', productPrice: 45, productStore: 10   },
    { productDiscount: 0, productImage: 'sandalias', productLabel: 'Shampo', productPrice: 30, productStore: 10   }
  ]
  
  public wishes = [
    { productDiscount: 10, productImage: 'batom-vermelho', productLabel: 'Batom vermelho', productPrice: 320, productStore: 10  },
    { productDiscount: 15, productImage: 'perfume', productLabel: 'Perfume', productPrice: 320, productStore: 10   },
    { productDiscount: 12, productImage: 'pinceis-de-maquiagem', productLabel: 'Pincéis de maquiagem', productPrice: 40, productStore: 10   },
    { productDiscount: 20, productImage: 'shampoo', productLabel: 'Shampoo', productPrice: 50, productStore: 10   }
  ]

  constructor() { }

  ngOnInit() {
  }

}
