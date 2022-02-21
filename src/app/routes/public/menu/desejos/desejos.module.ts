import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesejosPageRoutingModule } from './desejos-routing.module';

import { DesejosPage } from './desejos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesejosPageRoutingModule
  ],
  declarations: [DesejosPage]
})
export class DesejosPageModule {}
