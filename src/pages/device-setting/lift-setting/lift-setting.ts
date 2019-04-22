import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Variable } from '../../../providers/model/variable';

/**
 * Generated class for the LiftSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lift-setting',
  templateUrl: 'lift-setting.html',
})
export class LiftSettingPage {
  name: string;
  id: string;
  state: boolean;
  f50Data: any;
  auto: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private events: Events,
  ) {
    this.id = this.navParams.get("id");
    this.name = this.navParams.get("name");
    let fn51Data = Variable.GetFnData('51');
    this.getDeviceState(fn51Data);
    this.events.subscribe("FnData:51", (res) => {
      this.getDeviceState(res);
    });
    this.f50Data = Variable.GetFnData('50');
    this.events.subscribe("FnData:50", (res) => {
      this.f50Data = res;
    });

    this.auto = Variable.isAuto;
    this.events.subscribe("FnData:isAuto", (data) => {
      this.auto = data;
    });
  }

  ionViewDidLoad() {
  }
  getDeviceState(data: any) {
    if (data) {
      this.state = data[this.id];
    }
  }
  setDeviceState(state: string) {
    Variable.socketObject.setDeviceState(this.id, this.name, state);
  }
  ionViewDidLeave() {
    this.events.unsubscribe("FnData:50");
    this.events.unsubscribe("FnData:51");
    this.events.unsubscribe("FnData:isAuto");
  }

}
