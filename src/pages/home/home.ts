import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, LoadingController, ModalController, Events, Header, AlertController } from 'ionic-angular';
import { Variable } from '../../providers/model/variable';
import { DeviceRequestsProvider } from '../../providers/tools/requests'
import { ModePublicSettingPage } from '../mode-public-setting/mode-public-setting';
import { ModeSettingPage } from '../mode-setting/mode-setting';
import { ToolsProvider } from '../../providers/tools/tools';
import { SpeechHelperProvider } from '../../providers/tools/speechHelper'




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Header) header;

  @ViewChild("homeHeaderContent") homeHeaderContent;

  overview: any;
  workorder: any;
  modeID: string;
  modeDataList: any = [];
  weatherinfo: any = {};
  homeType: string = 'mode';
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController, private modalCtrl: ModalController, private events: Events,
    private deviceRequest: DeviceRequestsProvider,
    private alertCtrl: AlertController,
    private tools: ToolsProvider,
    private speech: SpeechHelperProvider,
    public el: ElementRef
  ) {
  }
  scan() {
    this.speech.startSpeech();
  }



  ionViewDidLoad() {
    let headerHeight = this.header._elementRef.nativeElement.clientHeight;
    let height: number = Number(headerHeight) + 150;
    this.el.nativeElement.querySelector('.scroll-content').style.paddingTop = `${height}px`;

    // this.scan();
    this.deviceRequest.getWeatherInfo().then(res => {
      this.weatherinfo = res;
    });
    this.modeID = Variable.GetFnData('51', '-2');
    this.events.subscribe("FnData:51", (data) => {
      this.modeID = data['-2'];
    });

    this.deviceRequest.getDeviceMode().then(res => {
      this.modeDataList = res;
    }, err => { });
  }
  goModePublicSetting() {
    this.navCtrl.push(ModePublicSettingPage);
  }
  goModeSetting(mode: any) {
    this.navCtrl.push(ModeSettingPage, { mode: mode });
  }
  setMode(id: string, name: string) {
    this.presentConfirm(name).then(res => {
      Variable.socketObject.setMode(id, name);
    });
  }
  presentConfirm(name: string) {
    return new Promise(resolve => {
      let alert = this.alertCtrl.create({
        title: '确认',
        message: `设为 ${name}?`,
        buttons: [
          {
            text: '取消',
            role: 'cancel',
            handler: () => {
            }
          },
          {
            text: '确认',
            handler: () => {
              resolve(true);
            }
          }
        ]
      });
      alert.present();
    })

  }
  scrollEvent(e) {
    if (e.scrollTop <= 200) {
      this.header._elementRef.nativeElement.style.backgroundColor = `rgba(82,161,243,0)`;;
      let opacity = e.scrollTop / 200;//设置滚动距离300的时候导航栏消失

      let color = `rgba(82,161,243,${opacity})`;
      this.homeHeaderContent.nativeElement.style.backgroundColor = color;

    } else {
      this.header._elementRef.nativeElement.style.backgroundColor = `rgba(82,161,243,1)`;;

    }

  }

}
