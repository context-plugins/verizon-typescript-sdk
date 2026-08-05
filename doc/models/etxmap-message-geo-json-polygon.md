
# ETXMAP Message Geo JSON Polygon

Query MAP records using a GeoJSON polygon to define the spatial area

## Structure

`ETXMAPMessageGeoJSONPolygon`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageStandard` | [`ETXMessageStandardEnum \| undefined`](../../doc/models/etx-message-standard-enum.md) | Optional | V2X messaging standard selection. Accepted values are 'sae' (SAE J2735) and 'etsi' (ETSI TS 103 301).<br><br>**Default**: `ETXMessageStandardEnum.Sae`<br><br>**Constraints**: *Maximum Length*: `4`, *Pattern*: `^(etsi\|sae)$` |
| `geoJson` | `unknown` | Required | GeoJSON Polygon defining the area to retrieve MAP messages for. |
| `expectedType` | [`ETXExpectedTypeEnum \| undefined`](../../doc/models/etx-expected-type-enum.md) | Optional | The format of the payload in the response body.<br><br>**Default**: `ETXExpectedTypeEnum.BASE64`<br><br>**Constraints**: *Maximum Length*: `6`, *Pattern*: `^(BASE64\|JSON)$` |
| `pageToken` | `string \| undefined` | Optional | Base64 encoded token used to retrieve the next page of results<br><br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^[A-Za-z0-9+/]+=*$` |
| `pageSize` | `number \| undefined` | Optional | Maximum number of records to return in a single page<br><br>**Default**: `200`<br><br>**Constraints**: `>= 1`, `<= 500` |

## Example

```ts
import {
  ETXExpectedTypeEnum,
  ETXMAPMessageGeoJSONPolygon,
  ETXMessageStandardEnum,
} from 'verizonlib';

const eTXMAPMessageGeoJSONPolygon: ETXMAPMessageGeoJSONPolygon = {
  geoJson: { 'type': 'Polygon', 'coordinates': [[[-77.14, 39.01], [-77.03, 39.01], [-77.03, 38.85], [-77.14, 38.85], [-77.14, 39.01]]] },
  messageStandard: ETXMessageStandardEnum.Sae,
  expectedType: ETXExpectedTypeEnum.BASE64,
  pageToken: 'Y3Vyc29yX3Rva2VuX2V4YW1wbGU=',
  pageSize: 50,
};
```

