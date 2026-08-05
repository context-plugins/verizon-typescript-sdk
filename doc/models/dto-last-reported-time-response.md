
# Dto Last Reported Time Response

## Structure

`DtoLastReportedTimeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `event` | [`ResourceEvent \| undefined`](../../doc/models/resource-event.md) | Optional | - |
| `timestamp` | `string \| undefined` | Optional | - |

## Example

```ts
import { DtoLastReportedTimeResponse } from 'verizonlib';

const dtoLastReportedTimeResponse: DtoLastReportedTimeResponse = {
  event: {
    createdon: '2016-03-13T12:52:32.123Z',
    fieldid: 'fieldid6',
    foreignid: 'foreignid8',
    lastupdated: '2016-03-13T12:52:32.123Z',
    state: 'state4',
    versionid: 'versionid2',
    accountclientid: 'accountclientid4',
    callbackurl: 'callbackurl0',
    description: 'description0',
    deviceid: 'deviceid0',
    errmsg: 'errmsg2',
  },
  timestamp: 'timestamp4',
};
```

