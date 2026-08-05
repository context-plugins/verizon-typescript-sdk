
# Sensor Insights BLE

Property objects for Bluetooth Low-Energy (BLE) devices

## Structure

`SensorInsightsBLE`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dataMode` | `number \| undefined` | Optional | The data mode the sensor is using |
| `manufacturerId` | `number \| undefined` | Optional | The numeric manufacturer ID |
| `maxNumScan` | `number \| undefined` | Optional | How frequently the device can be scanned |
| `minSigStr` | `number \| undefined` | Optional | The minimum signal strength needed for the sensor to transmit (in Decibels or dB) |
| `monitorPeriod` | `number \| undefined` | Optional | The ammount of time to monitor the sensor and varies by device |
| `moreManufId` | `unknown[] \| undefined` | Optional | Values for the manufacturer and these vary by device |
| `opMode` | `number \| undefined` | Optional | The operation mode |
| `reportOffset` | `number \| undefined` | Optional | The ammount of time between sensor readings and reports |
| `reportPeriod` | `number \| undefined` | Optional | The ammount of time between reports |
| `reportType` | `number \| undefined` | Optional | The report type |
| `scanDuration` | `number \| undefined` | Optional | The ammount of time the sensor is queried for data |

## Example

```ts
import { SensorInsightsBLE } from 'verizonlib';

const sensorInsightsBLE: SensorInsightsBLE = {
  dataMode: 1,
  manufacturerId: 13200,
  maxNumScan: 100,
  minSigStr: -115,
  monitorPeriod: 300,
  opMode: 1,
  reportOffset: 0,
  reportPeriod: 300,
  reportType: 2,
  scanDuration: 20,
};
```

