"use strict";
const Fritz2Mqtt_1 = require('./Fritz2Mqtt');
const Callmonitor_1 = require('./Callmonitor');
const MqttAdapter_1 = require('./MqttAdapter');
var config = new Fritz2Mqtt_1.Config();
config.callmonitor = new Callmonitor_1.Config('192.168.178.1');
config.callmonitor.countryCode = '+49';
config.callmonitor.areaCode = '6181';
config.callmonitor.devices = [
    { ext: 10, name: 'K 24', type: 'DECT', outgoing: '990133', incoming: ['990133'] },
    { ext: 11, name: 'OG 24', type: 'DECT', outgoing: '990133', incoming: ['990133'] },
    { ext: 12, name: 'EG 24', type: 'DECT', outgoing: '990133', incoming: ['990133'] },
    { ext: 13, name: 'EG 22', type: 'DECT', outgoing: '990134', incoming: ['990134'] },
    { ext: 14, name: 'OG 22', type: 'DECT', outgoing: '990134', incoming: ['990134'] },
    { ext: 15, name: 'K 22 DECT', type: 'DECT', outgoing: '990134', incoming: ['990134'] },
    { ext: 20, name: 'Alex iPhone', type: 'IP', outgoing: '990134', incoming: ['990134'] },
    { ext: 21, name: 'Ann-Ka iPhone', type: 'IP', outgoing: '990134', incoming: ['990134'] },
    { ext: 22, name: 'softfone', type: 'IP', outgoing: '990134', incoming: ['990134'] },
    { ext: 23, name: 'K 22 IP', type: 'IP', outgoing: '990134', incoming: ['990134'] },
    { ext: 24, name: 'Ann-Ka iPhone', type: 'IP', outgoing: '990134', incoming: ['990134'] },
    { ext: 25, name: 'extern', type: 'IP', outgoing: '990134', incoming: ['990134'] },
    { ext: 26, name: 'DG 24', type: 'IP', outgoing: '990133', incoming: ['990133'] },
];
config.mqttAdapter = new MqttAdapter_1.Config('tcp://192.168.178.96:1883', 'callmonitor');
var app = new Fritz2Mqtt_1.Fritz2Mqtt(config);
app.main();
