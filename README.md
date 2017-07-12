# Moblet

## Install module
    $ npm install moblet --save

## Require module
    var device = require('moblet');

## Functions

  * detectDevice
  * isMobile
  * isIOS
  * isAndroid
  * isChrome

## Usage

  * device.detectDevice(userAgent) //return mobile, tablet, desktop
  * device.isMobile(userAgent) // return boolean
  * device.isIOS(userAgent) // return boolean
  * device.isAndroid(userAgent) // return boolean
  * device.isChrome(userAgent) // return boolean
