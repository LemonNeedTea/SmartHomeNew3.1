import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController } from 'ionic-angular';
import { Variable } from '../../providers/model/variable';
import { chartToolsProvider } from '../../providers/tools/chart';
import { DeviceRequestsProvider } from '../../providers/tools/requests';
import { WellpumpqueryPage } from '../wellpumpquery/wellpumpquery';
import { ToolsProvider } from '../../providers/tools/tools';
import { EnumDateType, EnumChartType } from '../../providers/model/enumdata';
import { TimerPumpPage } from '../timer/timer-pump/timer-pump';



/**
 * Generated class for the WellpumpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wellpump',
  templateUrl: 'wellpump.html',
})

export class WellpumpPage {
  id: string;
  name: string;
  f50Data: any;
  f52Data: any;
  state: boolean;
  auto: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private events: Events,
    private chart: chartToolsProvider,
    private device: DeviceRequestsProvider,
    private tools: ToolsProvider,
    public modalCtrl: ModalController) {
    this.id = this.navParams.get('id');
    this.name = this.navParams.get('name');
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
  getDeviceState(data: any) {
    if (data) {
      this.state = data[this.id];
    }
  }
  setDeviceState(state: string) {
    Variable.socketObject.setDeviceState(this.id, this.name, state);
  }

  ionViewDidLoad() {
    this.getWaterLevelChart();
    this.getWaterlevelMapChart();
  }
  ionViewWillEnter() {

  }
  ionViewDidLeave() {
    this.events.unsubscribe("FnData:50",()=>{});
    this.events.unsubscribe("FnData:51",()=>{});
    this.events.unsubscribe("FnData:50",()=>{});
    this.events.unsubscribe("FnData:isAuto",()=>{});
  }
  changeData(chart, guide: any, data: any) {
    guide.position = [data[0].key, data[0].value];
    guide.content = data[0].value;
    chart.changeData(data);
    chart.repaint();
  }
  getWaterLevelChart() {
    let fnData = Variable.GetFnData('52');
    let value = this.getWaterlevelData(fnData);
    let data = [
      { key: '', value: value, type: '井水液位' }
    ];
    let config = {
      dw: 'm',
      max: 200,
      min: 0,
      tooltip: false
    };
    let chart = this.chart.getBarChart('mountNode', data, config);
    const guide = chart.guide().text({
      position: [0, 0],
      content: 0,
      style: {
        // fill: color,
        textBaseline: 'bottom'
      },
      offsetY: -5
    });
    this.changeData(chart, guide, data);

    this.events.subscribe("FnData:52", (res) => {
      let value = this.getWaterlevelData(res);
      data[0].value = value;
      this.changeData(chart, guide, data);

    });

  }
  getWaterlevelData(data: any) {
    let temp = data['F529'];
    if (temp) {
      return temp * 1;
    }
  }
  getWaterlevelMapChart() {
    let nowDateStr = this.tools.getNowDateStr(EnumDateType.Day);
    let start = this.tools.getFullDateStr(nowDateStr, EnumDateType.Day);
    let stop = this.tools.getAddDate(nowDateStr, EnumDateType.Day);
    this.device.getWaterlevelMapChartData(start, stop, EnumChartType.WellPump).then((res: any) => {
      let config = {
        dw: res.DW
      };
      let data = [
        { key: '10:11:00', value: '2', type: '井水液位' }
      ]
      this.chart.getLineChart('waterlevelChart', res.DataList, config);
    });


  }
  goWellPumpQuery() {
    this.navCtrl.push(WellpumpqueryPage, { name: '井水液位', type: EnumChartType.WellPump })
  }
  presentShowModal() {
    let profileModal = this.modalCtrl.create(TimerPumpPage, { name: this.name });
    profileModal.onDidDismiss(data => {
    });
    profileModal.present();
  }

}
