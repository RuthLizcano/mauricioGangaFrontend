import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabPlatoPageRoutingModule } from './tab-plato-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TabPlatoPage } from './tab-plato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    IonicModule,
    TabPlatoPageRoutingModule
  ],
  declarations: [TabPlatoPage]
})
export class TabPlatoPageModule {}
