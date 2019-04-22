import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoorSettingPage } from './door-setting';

@NgModule({
  declarations: [
    DoorSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(DoorSettingPage),
  ],
})
export class DoorSettingPageModule {}
