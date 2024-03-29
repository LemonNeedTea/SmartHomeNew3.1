import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpServicesProvider } from "../../providers/http-services/http-services";
import { DeviceRequestsProvider } from '../../providers/tools/requests';
import { PopoverController } from 'ionic-angular';
// import { WellpumpqueryPage } from '../wellpumpquery/wellpumpquery';
// import { PopoverPage } from '../popover/popover';
import { EnumChartType } from '../../providers/model/enumdata';


@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {
  messagelists: any;
  typeDataList: any = [];
  constructor(public navCtrl: NavController, private http: HttpServicesProvider,
    private device: DeviceRequestsProvider,
    private popoverCtrl: PopoverController) {

  }

  loadDataList() {
    this.device.getAlarmDataList().then(res => {
      this.messagelists = res;
    });
  }
  ionViewDidEnter() {
    this.loadDataList();
    this.getAlarmTypeDataList();
  }
  setState(id: string) {
    this.device.setAlarmState(id);
    this.loadDataList();
  }
  getAlarmTypeDataList() {
    this.device.getAlarmTypeDataList().then(res => {
      this.typeDataList = res; console.log(res);
    });
  }
  showPopover(myEvent) {
    let popoverList = [];
    this.typeDataList.forEach(element => {
      popoverList.push({
        name: element.F_Name,
        page: 'WellpumpqueryPage',
        type: EnumChartType.Message,
        data: element
      });
    });

    //   { name: '用电量查询', page: EnergyQueryPage, type: EnumChartType.Ele },
    //   { name: '电负荷查询', page: WellpumpqueryPage, type: EnumChartType.FH },
    //   { name: '空调负荷查询', page: WellpumpqueryPage, type: EnumChartType.Air },
    // ];

    let popover = this.popoverCtrl.create('PopoverPage', { list: popoverList });
    popover.present({
      ev: myEvent
    });
  }

}
