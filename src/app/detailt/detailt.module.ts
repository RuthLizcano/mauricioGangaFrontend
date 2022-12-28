import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailtPageRoutingModule } from './detailt-routing.module';

import { DetailtPage } from './detailt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailtPageRoutingModule
  ],
  declarations: [DetailtPage]
})
export class DetailtPageModule {}
