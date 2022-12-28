import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3PageRoutingModule } from './tab3-routing.module';

import { Tab3Page } from './tab3.page';
import { HeartFavComponent } from '../components/heart-fav/heart-fav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3PageRoutingModule
  ],
  declarations: [Tab3Page, HeartFavComponent]
})
export class Tab3PageModule {}
