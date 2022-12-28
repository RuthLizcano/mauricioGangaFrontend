import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarropaPageRoutingModule } from './buscarropa-routing.module';

import { BuscarropaPage } from './buscarropa.page';
import { HeartFavComponent } from '../components/heart-fav/heart-fav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarropaPageRoutingModule
  ],
  declarations: [BuscarropaPage,HeartFavComponent]
})
export class BuscarropaPageModule {}
