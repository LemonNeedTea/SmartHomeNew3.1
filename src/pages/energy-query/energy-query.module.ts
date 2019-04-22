import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnergyQueryPage } from './energy-query';

@NgModule({
  declarations: [
    EnergyQueryPage,
  ],
  imports: [
    IonicPageModule.forChild(EnergyQueryPage),
  ],
})
export class EnergyQueryPageModule {}
