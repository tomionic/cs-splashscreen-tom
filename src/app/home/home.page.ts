import { Component } from '@angular/core';
import { SplashScreen, SplashScreenPlugin } from '@capacitor/splash-screen';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    //private splashScreenPlugin: SplashScreenPlugin,
    //private splashScreen: SplashScreen
  ) {
    SplashScreen.show();
  }

  ngOnInit() {
    //SplashScreen.show();
    //this.splashScreenPlugin.show();
  }

  splash(){
    SplashScreen.show();
  }

}
