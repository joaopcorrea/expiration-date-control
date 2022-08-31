import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.expirationcontrol.app',
  appName: 'Expiration Date Control',
  webDir: 'dist/expiration-date-control',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.0.218:4200',
    cleartext: true
  }
};

export default config;
