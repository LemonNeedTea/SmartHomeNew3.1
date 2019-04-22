import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Variable } from '../../../providers/model/variable';

/**
 * Generated class for the DoorSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-door-setting',
  templateUrl: 'door-setting.html',
})
export class DoorSettingPage {

  name: string;
  id: string;
  state: number;
  auto: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private events: Events, ) {
    this.id = this.navParams.get("id");
    this.name = this.navParams.get("name");
    let fn51Data = Variable.GetFnData('51');
    this.getDeviceState(fn51Data);
    this.events.subscribe("FnData:51", (res) => {
      this.getDeviceState(res);
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
  setDeviceState(state: any) {
    this.state = state;
    Variable.socketObject.setDeviceState(this.id, this.name, state);
  }
  ionViewDidLeave() {
    this.events.unsubscribe("FnData:51",()=>{});
    this.events.unsubscribe("FnData:isAuto",()=>{});
  }

}
