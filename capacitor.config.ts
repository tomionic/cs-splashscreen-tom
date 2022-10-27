import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'cs-splashscreen',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      layoutName: 'splash',
      androidSplashResourceName: 'splash',
      useDialog: true,
      //launchAutoHide: true,
      launchShowDuration: 5000
    }
  }
};

export default config;
