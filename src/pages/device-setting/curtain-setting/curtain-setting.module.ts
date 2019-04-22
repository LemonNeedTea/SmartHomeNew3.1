import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurtainSettingPage } from './curtain-setting';

@NgModule({
  declarations: [
    CurtainSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(CurtainSettingPage),
  ],
})
export class CurtainSettingPageModule {}
