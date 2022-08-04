<img src="./images/pineapple_github.jpg" alt="mvp structure" width="800">

# 🍍 Pineapple ReactNative template

# 🐸 Dependencies

- [Async Storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage) - Key-value storage
- [Axios](https://github.com/axios/axios) - Networking
- [Date-fns](https://date-fns.org) - Date utility
- [Formik](https://formik.org) - Build forms
- [React Native Config](https://www.npmjs.com/package/react-native-config) - Environment configs
- [React Native Gesture Handler 2](https://www.npmjs.com/package/react-native-gesture-handler) - Gestures
- [React Native Keychain](https://www.npmjs.com/package/react-native-keychain) - Secure storage
- [React Native Splash Screen](https://www.npmjs.com/package/react-native-splash-screen) - Splash screen
- [React Native Svg](https://github.com/react-native-svg/react-native-svg) - Create SVG
- [React Navigation](https://reactnavigation.org/docs/getting-started/) - Navigation between screens & bottom tabs
- [React Navigation Devtools](https://reactnavigation.org/docs/devtools/) - Tools to debug navigation
- [Reanimated 2](https://docs.swmansion.com/react-native-reanimated/docs) - Animations
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started) - State manager & RTK queries
- [Yup](https://github.com/jquense/yup) - Form validation

# 👨‍💻 Development dependencies

- [Module Resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) - Path aliases
- [SVG Transformer](https://github.com/kristerkari/react-native-svg-transformer) - Use SVG as components
- [Flipper](react-native-flipper) - Enable Flipper debugger

# 🙈 Setup

## Main branch

> **📝 NOTE:** Main branch is used only for demonstration purposes. If you want to use this template, please use <b>Core</b> branch

1. Install dependencies & pods
<pre>
<code>npm run setup</code>
</pre>
2. Build a project
<pre>
<code>// iOS</code>
<code>npm run ios</code>

<code>// Android </code>
<code>npm run android</code>
</pre>
3. Make some coffee while project is building☕️

## Core branch

1. Create a new project with TypeScript template:
<pre>
<code>npx react-native init AwesomeTSProject --template react-native-template-typescript</code>
</pre>
2. Install dependencies & pods
<pre>
<code>npm run setup</code>
</pre>
3. Move the files from this repository to a project we just created
4. [Configure React Native Config](https://www.npmjs.com/package/react-native-config)
5. [Configure splash screen for iOS & Android](https://www.npmjs.com/package/react-native-splash-screen)
6. [Configure react-navigation](https://reactnavigation.org/docs/getting-started/#installing-dependencies-into-a-bare-react-native-project)
7. [Configure Reanimated 2 for Android](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation#android)
8. Build a project
<pre>
<code>// iOS</code>
<code>npm run ios</code>

<code>// Android </code>
<code>npm run android</code>
</pre>

# 📜 Scripts

### Start a Metro bundler
<pre>
<code>npm run start</code>
</pre>

### Install dependencies and pods
<pre>
<code>npm run setup</code>
</pre>

### Remove all packages and clear cache
<pre>
<code>npm run reset</code>
</pre>

### Run android
> **📝 NOTE:** Build will be created with <b>Debug</b> configuration
<pre>
<code>// Development </code>
<code>npm run android</code>

<code>// Staging </code>
<code>npm run android:staging</code>

<code>// Production </code>
<code>npm run android:production</code>
</pre>

### Create APK
<pre>
<code>// Staging </code>
<code>npm run deploy-android:staging</code>

<code>// Production </code>
<code>npm run deploy-android:production</code>
</pre>

### Run iOS
> **📝 NOTE:** Build will be created with <b>Debug</b> configuration
<pre>
<code>// Development </code>
<code>npm run ios</code>

<code>// Staging </code>
<code>npm run ios:staging</code>

<code>// Production </code>
<code>npm run ios:production</code>
</pre>

# 🐛 Debug

This template is integrated with [Flipper](https://fbflipper.com) to debug an application

### Flipper plugins

- [react-navigation](https://reactnavigation.org/docs/devtools/)
- [redux-flipper](https://www.npmjs.com/package/redux-flipper)

# 📚 Useful resources

- [🌅 Splash screen & AppIcon generator](https://appicon.co)
- [🧬 Convert SVG to React Native component](https://react-svgr.com/playground/?native=true)
- [🔤 Add custom fonts](https://www.bigbinary.com/learn-react-native/adding-custom-fonts)

[![alt text][1.1]][1]
[![alt text][2.1]][2]

If you have any suggestions or questions feel free to make a Pull Request or contact us!

## Run by

[OmiSoft](https://omisoft.net/?utm_source=github&utm_medium=social)

[1]: http://www.twitter.com/omisoftnet
[2]: http://www.facebook.com/omisoftnet
[1.1]: http://i.imgur.com/wWzX9uB.png "twitter icon without padding"
[2.1]: http://i.imgur.com/fep1WsG.png "facebook icon without padding"

## License

ReactNative PineApple Template is released under the MIT license.  
See the [LICENSE](./LICENSE.md) for details.
