import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nayararesorts.app',
  appName: 'Nayara Resorts',
  webDir: 'dist/client',
  server: {
    // In production, the app loads from the bundled files
    // For development, uncomment the url below and point to your dev server:
    // url: 'http://YOUR_LOCAL_IP:3000',
    // cleartext: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: '#3a2a1a',
      showSpinner: false,
      androidScaleType: 'CENTER_CROP',
      splashFullScreen: true,
      splashImmersive: true,
    },
    StatusBar: {
      style: 'LIGHT',
      backgroundColor: '#3a2a1a',
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
  ios: {
    contentInset: 'automatic',
    preferredContentMode: 'mobile',
    scheme: 'Nayara Resorts',
  },
  android: {
    backgroundColor: '#3a2a1a',
  },
};

export default config;
