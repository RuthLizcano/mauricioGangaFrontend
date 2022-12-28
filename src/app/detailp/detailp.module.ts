import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailpPageRoutingModule } from './detailp-routing.module';

import { DetailpPage } from './detailp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailpPageRoutingModule
  ],
  declarations: [DetailpPage]
})
export class DetailpPageModule {}
