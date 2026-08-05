
# Map Data Query Request

Request structure for querying MAP records. Provide either regionIntersectionPairs (coordinates) or geoJson, not both.

## Class Name

`MapDataQueryRequest`

## Cases

| Type |
|  --- |
| [`ETXMAPMessageIntersectionCoordinates`](../../../doc/models/etxmap-message-intersection-coordinates.md) |
| [`ETXMAPMessageGeoJSONPolygon`](../../../doc/models/etxmap-message-geo-json-polygon.md) |

## ETXMAPMessageIntersectionCoordinates

### Initialization Code

#### Example

```ts
const value: MapDataQueryRequest = {
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

## ETXMAPMessageGeoJSONPolygon

### Initialization Code

#### Example

```ts
const value: MapDataQueryRequest = {
  geoJson: { 'type': 'Polygon', 'coordinates': [[[-77.14, 39.01], [-77.03, 39.01], [-77.03, 38.85], [-77.14, 38.85], [-77.14, 39.01]]] },
  messageStandard: ETXMessageStandardEnum.Sae,
  expectedType: ETXExpectedTypeEnum.BASE64,
  pageToken: 'Y3Vyc29yX3Rva2VuX2V4YW1wbGU=',
  pageSize: 50,
};
```

