<p align="center">
  <img width="200" src="src/assets/icon.png"8 />
  <h1 align="center">Nxy - Dream It. Build It. Profit!</h2>
</p>

<p align="center">
  <h5 align="center">
    Nxy is an emerging <strong>Social Finance (SocialFi)</strong> decentralized
    application (dApp) delivering a modern-day web platform for everyday users.
  </h5>
</p>

<p align="center">
  <h2 align="center">
    <a href="https://nxy.social">https://nxy.social</a>
  </h2>
</p>

[<img src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png"
     alt="Get it on F-Droid"
     height="80">](https://f-droid.org/packages/social.nxy)
[<img src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png"
     alt="Get it on Google Play"
     height="80">]()
[<img src="https://www.etesync.com/static/img/app-store-badge.c31e7b1c6a83.png"
     alt="Download on the App Store"
     height="80">]()

![GitHub tag](https://img.shields.io/github/tag/avasdao/nxy.svg)
[![Chat with us](https://img.shields.io/badge/chat-IRC%20|%20Matrix%20|%20Web-blue.svg)]()

# Table of contents

- [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
  - [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [Building the workspace](#building-the-workspace)


## Introduction

_TBD_

### Prerequisites

- A dedicated computer system (eg. desktop pc, laptop pc, vps).
_This computer system should be running 24x7x365._

- Basic knowledge of Window or MacOS.
_We will be using the File Manager and Terminals for your respective platform._

- You should have some knowledge of how to use a Terminal shell.
_We will need to issue specific commands that cannot be done from the GUI._

### Requirements

- NodeJS >= 22.x.x must be installed.
- npm >= 9.x.x must be installed.
- Hardhat >= 2.10.1 must be installed.

## Run the iOS App (OS X only)

Make sure XCode and developer tools are installed.

- Install cocoapods `brew install cocoapods`
- Enter the root directory of the project and then the iOS directory `cd ios`
- Run `pod install` and wait for it to complete
- exit the iOS directory `cd ..`
- Run `yarn start` in one shell
- And run `yarn ios` in another shell (this will start the simulator)

## Run the Android App

- Install all tools for your environment https://reactnative.dev/docs/environment-setup
- Start your virtual device by opening Android studio and in the bottom right corner click "Configure" and select "AVD Manager"
- If no device for the required build environment is available, create a new one
- Run `yarn start` in one shell
- And run `yarn android` in another shell (this will connect the emulator) - the first build may take some time
- If you run into this issue `Task :app:validateSigningDebug FAILED` download the [debug.keystore](https://raw.githubusercontent.com/facebook/react-native/master/template/android/app/debug.keystore) and copy it into your `android/app` folder
