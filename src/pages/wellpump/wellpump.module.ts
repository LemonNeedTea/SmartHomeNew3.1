import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WellpumpPage } from './wellpump';

@NgModule({
  declarations: [
    WellpumpPage,
  ],
  imports: [
    IonicPageModule.forChild(WellpumpPage),
  ],
})
export class WellpumpPageModule {}
