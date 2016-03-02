# Moblet

## how to use it:

## Install module
    $ npm install git+https://git@github.com/J-Gallo/moblet.git --save

## Require module
    var device = require('get-user-agent');

## Functions

  * detectDevice
  * isMobile
  * isIOS
  * isAndroid

## Usage

  device.detectDevice(userAgent) //return mobile, tablet, desktop
  device.isMobile(userAgent) // return boolean
  device.isIOS(userAgent) // return boolean
  device.isAndroid(userAgent) // return boolean
