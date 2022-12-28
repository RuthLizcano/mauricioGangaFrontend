import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarelectPageRoutingModule } from './buscarelect-routing.module';

import { BuscarelectPage } from './buscarelect.page';
import { HeartFavComponent } from '../components/heart-fav/heart-fav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarelectPageRoutingModule
  ],
  declarations: [BuscarelectPage, HeartFavComponent]
})
export class BuscarelectPageModule {}
