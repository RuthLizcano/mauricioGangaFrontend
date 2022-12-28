import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscaraccPageRoutingModule } from './buscaracc-routing.module';

import { BuscaraccPage } from './buscaracc.page';
import { HeartFavComponent } from '../components/heart-fav/heart-fav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscaraccPageRoutingModule
  ],
  declarations: [BuscaraccPage, HeartFavComponent]
})
export class BuscaraccPageModule {}
