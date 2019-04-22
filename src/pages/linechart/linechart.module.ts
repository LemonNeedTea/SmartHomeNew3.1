import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LinechartPage } from './linechart';

@NgModule({
  declarations: [
    LinechartPage,
  ],
  imports: [
    IonicPageModule.forChild(LinechartPage),
  ],
})
export class LinechartPageModule {}
