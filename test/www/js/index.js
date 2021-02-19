/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
var map;

function onDeviceReady() {
    LongdoMapCordova('191af1de9989a92c9632de15aa3fc9fd', onMapReady, {
        placeholder: document.getElementById('map')
    });
}

function onMapReady(m) {
    map = m;
    map.Ui.LayerSelector.visible(false);
    map.Layers.setBase(longdo.Layers.NORMAL);
    map.Ui.add(new longdo.MenuBar({
        button: [
            { label: 'สถานที่', value: 'poi' },
            { label: 'ดาวเทียม', value: 'sat' }
        ],
        change: function(toItem, fromItem) {
            if (toItem) {
                if (toItem.value == 'poi') {
                    map.Layers.remove(longdo.Layers.THAICHOTE);
                    map.Layers.add(longdo.Layers.POI);
                }
                else if (toItem.value == 'sat') {
                    map.Layers.remove(longdo.Layers.POI);
                    map.Layers.add(longdo.Layers.THAICHOTE);
                }
            }
        }
    }));
}
