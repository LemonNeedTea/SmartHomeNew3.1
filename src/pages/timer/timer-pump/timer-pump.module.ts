import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimerPumpPage } from './timer-pump';

@NgModule({
  declarations: [
    TimerPumpPage,
  ],
  imports: [
    IonicPageModule.forChild(TimerPumpPage),
  ],
})
export class TimerPumpPageModule {}
