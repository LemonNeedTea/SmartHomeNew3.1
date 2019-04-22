import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModeCurtainTimerPage } from './mode-curtain-timer';

@NgModule({
  declarations: [
    ModeCurtainTimerPage,
  ],
  imports: [
    IonicPageModule.forChild(ModeCurtainTimerPage),
  ],
})
export class ModeCurtainTimerPageModule {}
