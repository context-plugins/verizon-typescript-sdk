
# Location Report

Location information for up to 1,000 devices.

## Structure

`LocationReport`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `devLocationList` | [`Location[] \| undefined`](../../doc/models/location.md) | Optional | Device location information. |
| `hasMoreData` | `boolean \| undefined` | Optional | True if there are more device locations to retrieve. |
| `startIndex` | `string \| undefined` | Optional | The zero-based number of the first record to return. Set startIndex=0 for the first request. If there are more than 1,000 devices to be returned (hasMoreData=true), set startIndex=1000 for the second request, 2000 for the third request, etc. |
| `totalCount` | `number \| undefined` | Optional | The total number of devices in the original request and in the report. |
| `txid` | `string \| undefined` | Optional | The transaction ID of the report. |

## Example

```ts
import { LocationReport } from 'verizonlib';

const locationReport: LocationReport = {
  devLocationList: [
    {
      msid: '7892345678',
      pd: {
        time: '20170520004421',
        utcoffset: 'utcoffset2',
        x: '33.45324',
        y: '-84.59621',
        radius: '5571',
        qos: false,
      },
      error: {
        time: 'time4',
        utcoffset: 'utcoffset4',
        type: 'type6',
        info: 'info4',
      },
    },
    {
      msid: '8583239709',
      pd: {
        time: '20170525214342',
        utcoffset: 'utcoffset2',
        x: '38.8408694',
        y: '-105.0422583',
        radius: '3866',
        qos: false,
      },
      error: {
        time: 'time4',
        utcoffset: 'utcoffset4',
        type: 'type6',
        info: 'info4',
      },
    },
    {
      msid: '7897654321',
      pd: {
        time: 'time2',
        utcoffset: 'utcoffset2',
        x: 'x8',
        y: 'y6',
        radius: 'radius0',
      },
      error: {
        time: '20170525214342',
        utcoffset: 'utcoffset4',
        type: 'POSITION METHOD FAILURE',
        info: 'Exception code=ABSENT SUBSCRIBER',
      },
    }
  ],
  hasMoreData: false,
  startIndex: '0',
  totalCount: 3,
  txid: '2017-12-11Te8b47da2-eeee-ffff-gggg-61815e1e97e9',
};
```

