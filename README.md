# Longdo Map Cordova

## Install
```
cordova plugin add github:MetamediaTechnology/longdo-map-cordova
```

## Implementation
- Add Longdo Map Online API to HTML before cordova.js
```
<script src="https://api.longdo.com/map/?key=[YOUR_KEY_API]"></script>
```
- For Javascript: Init function `LongdoMapCordova(apikey, callback, mapOptions)` in onDeviceReady listener callback
```
function onDeviceReady() {
    LongdoMapCordova('191af1de9989a92c9632de15aa3fc9fd', onMapReady, {
        placeholder: document.getElementById('map')
    });
}
```
- Start to use Longdo Map in `callback(map)` function
```
var map;
function onMapReady(m) {
    map = m;
    map.Ui.LayerSelector.visible(false);
    map.Layers.setBase(longdo.Layers.NORMAL);
}
```