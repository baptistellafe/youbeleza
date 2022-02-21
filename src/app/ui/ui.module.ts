import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from './section-title/section-title.component';
import { SectionBannerComponent } from './section-banner/section-banner.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryButtonComponent } from './category-button/category-button.component';
import { IconSvgComponent } from './icon-svg/icon-svg.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ComparisonCardComponent } from './comparison-card/comparison-card.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
@NgModule({
  declarations: [
    SectionTitleComponent,
    FooterComponent,
    SectionBannerComponent,
    CategoryButtonComponent,
    IconSvgComponent,
    ProductCardComponent,
    ComparisonCardComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SectionTitleComponent,
    FooterComponent,
    SectionBannerComponent,
    CategoryButtonComponent,
    IconSvgComponent,
    ProductCardComponent,
    ComparisonCardComponent,
    BreadcrumbComponent
  ]
})
export class UiModule { }
