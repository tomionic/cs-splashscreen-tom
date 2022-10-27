# Splash Screen

## Android - Creating a custom layout
In Android Studio:
- Create the Splashscreen with:
- File -> New -> Fragment ->  Fullscreen Fragment
- Provide a layout name such as `mysplash`

Before Building open Gradle Scripts -> `build.gradle (Module:android:app)`:
Under `dependencies` add:
`implementation 'com.android.support:design:27.1.1'`

In your Ionic Application open `capacitor.config.ts` and add:
```Typescript
plugins: {
    SplashScreen: {
      layoutName: 'mysplash',
      useDialog: true,
      launchAutoHide: true,
      launchShowDuration: 3000
    }
```

The important change is that the `layoutName` must match what was entered for your Fullscreen Fragment layout name and that the `useDialog` is set to true.
