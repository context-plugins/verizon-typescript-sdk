
# ETXMAP Message Intersection Coordinates

Query MAP records using specific region and intersection identifier pairs

## Structure

`ETXMAPMessageIntersectionCoordinates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageStandard` | [`ETXMessageStandardEnum \| undefined`](../../doc/models/etx-message-standard-enum.md) | Optional | V2X messaging standard selection. Accepted values are 'sae' (SAE J2735) and 'etsi' (ETSI TS 103 301).<br><br>**Default**: `ETXMessageStandardEnum.Sae`<br><br>**Constraints**: *Maximum Length*: `4`, *Pattern*: `^(etsi\|sae)$` |
| `regionIntersectionPairs` | [`RegionIntersectionPair[]`](../../doc/models/region-intersection-pair.md) | Required | List of region and intersection ID pairs to retrieve MAP messages for.<br><br>**Constraints**: *Maximum Items*: `200` |
| `expectedType` | [`ETXExpectedTypeEnum \| undefined`](../../doc/models/etx-expected-type-enum.md) | Optional | The format of the payload in the response body.<br><br>**Default**: `ETXExpectedTypeEnum.BASE64`<br><br>**Constraints**: *Maximum Length*: `6`, *Pattern*: `^(BASE64\|JSON)$` |
| `pageToken` | `string \| undefined` | Optional | Base64 encoded token used to retrieve the next page of results<br><br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^[A-Za-z0-9+/]+=*$` |
| `pageSize` | `number \| undefined` | Optional | Maximum number of records to return in a single page<br><br>**Default**: `200`<br><br>**Constraints**: `>= 1`, `<= 500` |

## Example

```ts
import {
  ETXExpectedTypeEnum,
  ETXMAPMessageIntersectionCoordinates,
  ETXMessageStandardEnum,
} from 'verizonlib';

const eTXMAPMessageIntersectionCoordinates: ETXMAPMessageIntersectionCoordinates = {
  regionIntersectionPairs: [
    {
      intersectionId: 5233,
      regionId: 100,
    }
  ],
  messageStandard: ETXMessageStandardEnum.Sae,
  expectedType: ETXExpectedTypeEnum.BASE64,
  pageToken: 'Y3Vyc29yX3Rva2VuX2V4YW1wbGU=',
  pageSize: 50,
};
```

