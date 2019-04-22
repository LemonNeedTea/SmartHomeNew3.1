import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from "@angular/http";
import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { WebSocketService } from 'angular2-websocket-service'


//原生native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QRScanner } from '@ionic-native/qr-scanner';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Network } from '@ionic-native/network';

//自定义工厂
import { WebSocketProvider } from "../providers/ws";
import { ConfigProvider } from '../providers/config/config';
import { StorageProvider } from '../providers/storage/storage';
import { ToolsProvider } from '../providers/tools/tools';
import { HttpServicesProvider } from "../providers/http-services/http-services";
import { LoginRequestsProvider, DeviceRequestsProvider } from "../providers/tools/requests";
import { chartToolsProvider } from "../providers/tools/chart";
import { SocketHelpProvider } from '../providers/tools/socketHelper';
import { ServerSocket } from '../providers/server-socket.service';
import { SpeechHelperProvider } from '../providers/tools/speechHelper';



//新增页面
import { LoginPage } from '../pages/login/login';
import { MessagePage } from '../pages/message/message';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RoomPage } from '../pages/room/room';
import { DevicePage } from '../pages/device/device';
import { EnergyPage } from '../pages/energy/energy';
import { WellpumpPage } from '../pages/wellpump/wellpump';
import { WellpumpqueryPage } from '../pages/wellpumpquery/wellpumpquery';
import { LinechartPage } from '../pages/linechart/linechart';
import { PopoverPage } from '../pages/popover/popover';
import { EnergyQueryPage } from '../pages/energy-query/energy-query';
import { BarchartPage } from '../pages/barchart/barchart';
import { MessageHistoryPage } from '../pages/message-history/message-history';
import { TimerPumpPage } from '../pages/timer/timer-pump/timer-pump';
import { CurtainSettingPage } from '../pages/device-setting/curtain-setting/curtain-setting';
import { DoorSettingPage } from '../pages/device-setting/door-setting/door-setting';
import { LiftSettingPage } from '../pages/device-setting/lift-setting/lift-setting';
import { PumpEastnorthpoolSettingPage } from '../pages/device-setting/pump-eastnorthpool-setting/pump-eastnorthpool-setting';
import { PumpNorthcourtSettingPage } from '../pages/device-setting/pump-northcourt-setting/pump-northcourt-setting';
import { ValveEastcourtSettingPage } from '../pages/device-setting/valve-eastcourt-setting/valve-eastcourt-setting';
import { ValveEastnorthpoolSettingPage } from '../pages/device-setting/valve-eastnorthpool-setting/valve-eastnorthpool-setting';
import { PumpEastnorthpoolTimerPage } from '../pages/timer/pump-eastnorthpool-timer/pump-eastnorthpool-timer';
import { PumpNorthcourtTimerPage } from '../pages/timer/pump-northcourt-timer/pump-northcourt-timer';
import { ValveEastcourtTimerPage } from '../pages/timer/valve-eastcourt-timer/valve-eastcourt-timer';
import { ValveEastnorthpoolTimerPage } from '../pages/timer/valve-eastnorthpool-timer/valve-eastnorthpool-timer';
import { ModePublicSettingPage } from '../pages/mode-public-setting/mode-public-setting';
import { ModeSettingPage } from '../pages/mode-setting/mode-setting';
import { ModeAirseasonsonTimerPage } from '../pages/timer/mode-airseasonson-timer/mode-airseasonson-timer';
import { ModeCurtainTimerPage } from '../pages/timer/mode-curtain-timer/mode-curtain-timer';
import { ModeLightJwTimerPage } from '../pages/timer/mode-light-jw-timer/mode-light-jw-timer';
import { ModeLightTimerPage } from '../pages/timer/mode-light-timer/mode-light-timer';
import { ModeDeviceSelectedSettingPage } from '../pages/mode-device-selected-setting/mode-device-selected-setting';
import { PasswordPage } from '../pages/password/password';


//组件
import { ComponentsModule } from '../components/components.module'




@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MessagePage,
    HomePage,
    TabsPage,
    RoomPage,
    DevicePage,
    EnergyPage,
    WellpumpPage,
    WellpumpqueryPage,
    LinechartPage,
    PopoverPage,
    EnergyQueryPage,
    BarchartPage,
    MessageHistoryPage,
    TimerPumpPage,
    CurtainSettingPage,
    DoorSettingPage,
    LiftSettingPage,
    PumpEastnorthpoolSettingPage,
    PumpNorthcourtSettingPage,
    ValveEastcourtSettingPage,
    ValveEastnorthpoolSettingPage,
    PumpEastnorthpoolTimerPage,
    PumpNorthcourtTimerPage,
    ValveEastcourtTimerPage,
    ValveEastnorthpoolTimerPage,
    ModePublicSettingPage,
    ModeSettingPage,
    ModeLightTimerPage,
    ModeLightJwTimerPage,
    ModeCurtainTimerPage,
    ModeAirseasonsonTimerPage,
    ModeDeviceSelectedSettingPage,
    PasswordPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp, { backButtonText: '', tabsHideOnSubPages: 'true' }),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MessagePage,
    HomePage,
    TabsPage,
    RoomPage,
    DevicePage,
    EnergyPage,
    WellpumpPage,
    WellpumpqueryPage,
    LinechartPage,
    PopoverPage,
    EnergyQueryPage,
    BarchartPage,
    MessageHistoryPage,
    TimerPumpPage,
    CurtainSettingPage,
    DoorSettingPage,
    LiftSettingPage,
    PumpEastnorthpoolSettingPage,
    PumpNorthcourtSettingPage,
    ValveEastcourtSettingPage,
    ValveEastnorthpoolSettingPage,
    PumpEastnorthpoolTimerPage,
    PumpNorthcourtTimerPage,
    ValveEastcourtTimerPage,
    ValveEastnorthpoolTimerPage,
    ModePublicSettingPage,
    ModeSettingPage,
    ModeLightTimerPage,
    ModeLightJwTimerPage,
    ModeCurtainTimerPage,
    ModeAirseasonsonTimerPage,
    ModeDeviceSelectedSettingPage,
    PasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    ScreenOrientation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpServicesProvider,
    DatePipe,
    WebSocketProvider,
    ConfigProvider,
    StorageProvider,
    ToolsProvider,
    LoginRequestsProvider,
    DeviceRequestsProvider,
    Network,
    chartToolsProvider,
    SocketHelpProvider,
    WebSocketService,
    ServerSocket,
    SpeechHelperProvider
  ]
})
export class AppModule { }
