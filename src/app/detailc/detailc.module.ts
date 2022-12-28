import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailcPageRoutingModule } from './detailc-routing.module';

import { DetailcPage } from './detailc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailcPageRoutingModule
  ],
  declarations: [DetailcPage]
})
export class DetailcPageModule {}
