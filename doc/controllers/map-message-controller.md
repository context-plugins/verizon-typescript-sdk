# Map-Message-Controller

Endpoints for ingesting, querying, and deleting V2X MAP messages.

```ts
const mapMessageController = new MapMessageController(client);
```

## Class Name

`MapMessageController`

## Methods

* [Download MAP Messages](../../doc/controllers/map-message-controller.md#download-map-messages)
* [Ingest MAP Messages](../../doc/controllers/map-message-controller.md#ingest-map-messages)
* [Query Map Messages](../../doc/controllers/map-message-controller.md#query-map-messages)
* [Delete Map Message](../../doc/controllers/map-message-controller.md#delete-map-message)


# Download MAP Messages

**This endpoint is deprecated.**

This endpoint is deprecated. (Use /api/v2/mapdata/query for new integrations).

This endpoint allows user to download SAE J2735 or ETSI MAP messages in ASN.1 UPER base64 encoded format. The area for the MAP messages is needed to be defined in the query.

**Required request header:** `Accept` — specifies the response format. Omitting this header will result in a `400 Bad Request`. Supported values:

- `text/plain` — ASN.1 UPER base64-encoded MAP messages (one per line)
- `application/json` — JSON-encoded MAP messages

```ts
async downloadMAPMessages(
  vendorID: string,
  geofence: GeofencePolygon,
  requestOptions?: RequestOptions
): Promise<ApiResponse<string>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [sessionToken](../../doc/auth/custom-header-signature-1.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vendorID` | `string` | Header, Required | The VendorID set during the Vendor registration call.<br><br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9]+$` |
| `geofence` | [`GeofencePolygon`](../../doc/models/geofence-polygon.md) | Query, Required | GeoJSON Polygon defining the area to retrieve MAP messages for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Line separated ASN.1 UPER J2735/ETSI base64 encoded MapData messages

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `string`.

## Example Usage

```ts
const vendorID = 'VzMapManager';

const geofence: GeofencePolygon = {
  type: ETXMAPMessageGeofenceGeometryEnum.Polygon,
  coordinates: [
    -77.47939538.990773,
    -77.11456638.99944,
    -77.10022838.817204,
    -77.41805938.827754,
    -77.47939538.990773
  ],
};

try {
  const response = await mapMessageController.downloadMAPMessages(
    vendorID,
    geofence
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof MdmErrorResponseError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 401 | Unauthorized | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 403 | Forbidden | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 404 | Not found | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 429 | Too many requests | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 503 | Internal server error | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| Default | unexpected error | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |


# Ingest MAP Messages

This endpoint allows the user to upload map messages in ASN.1 UPER base64 encoded format or JER (JSON) formats. The MAP data message can have more than one intersections in it.
Both SAE and ETSI defined MAP messages are supported. The SAE type MAP messages have to be wrapped in a MessageFrame, as defined in the SAE J2735 standard.
The ETSI type MAP messages are expected as MAPEM structures that include the ETSI header, as defined in the ETSI TS 103 301 standard.
Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.

**Required request header:** `Content-Type` — specifies the format of the request body. Omitting or sending an unsupported value will result in a `415 Unsupported Media Type`. Supported values:

- `text/plain` — ASN.1 UPER base64-encoded MAP message
- `application/json` — JSON representation of the MAP message

```ts
async ingestMAPMessages(
  vendorID: string,
  mapDataMessageStandard: ETXMessageStandardEnum,
  body: ETXMAPDataIngestRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<string>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [sessionToken](../../doc/auth/custom-header-signature-1.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vendorID` | `string` | Header, Required | The VendorID set during the Vendor registration call.<br><br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9]+$` |
| `mapDataMessageStandard` | [`ETXMessageStandardEnum`](../../doc/models/etx-message-standard-enum.md) | Header, Required | Select which V2X messaging standard will be used for the message generation. The following options are supported:<br><br>- "etsi": The message will be generated using the ETSI (European) standard (e.g. MAPEM).<br>- "sae": The message will be generated using the SAE J2735 (North American) standard (e.g. MAP).<br>- if not sent while POST, defaults to "sae"<br><br>**Constraints**: *Maximum Length*: `4`, *Pattern*: `^(etsi\|sae)$` |
| `body` | [`ETXMAPDataIngestRequest`](../../doc/models/etxmap-data-ingest-request.md) | Body, Required | UPER/ASN.1 J2735/ETSI base64 encoded MapData message or JSON representation of the MapData message. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: Map message/s successfully uploaded

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `string`.

## Example Usage

```ts
const vendorID = 'VzMapManager';

const mapDataMessageStandard = ETXMessageStandardEnum.Sae;

const body: ETXMAPDataIngestRequest = {
  messageId: 18,
  value: { 'intersections': [{ 'id': { 'region': 0, 'id': 156 }, 'laneWidth': 366, 'refPoint': { 'lat': 389284111, 'long': -772410713 }, 'revision': 3 }], 'msgIssueRevision': 3 },
};

try {
  const response = await mapMessageController.ingestMAPMessages(
    vendorID,
    mapDataMessageStandard,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof MdmErrorResponseError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 401 | Unauthorized | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 403 | Forbidden | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 405 | Method not allowed | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 429 | Too many requests | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 503 | Internal server error | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| Default | unexpected error | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |


# Query Map Messages

This endpoint allows users to download SAE J2735 or ETSI MAP messages as a JSON list.
Depending on the expectedType parameter, the response contains either ASN.1 UPER base64-encoded messages with their respective region and intersection IDs, or fully decoded JSON messages.
The area for MAP message retrieval must be defined in the request body using one of two methods:
An array of region and intersection ID pairs, or a GeoJSON geofence specification.

```ts
async queryMapMessages(
  vendorID: string,
  body: MapDataQueryRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown[]>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [sessionToken](../../doc/auth/custom-header-signature-1.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vendorID` | `string` | Header, Required | The VendorID set during the Vendor registration call.<br><br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9]+$` |
| `body` | [`MapDataQueryRequest`](../../doc/models/containers/map-data-query-request.md) | Body, Required | Request structure for querying MAP records. Provide either regionIntersectionPairs (coordinates) or geoJson, not both. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successfully retrieved MAP messages. Returns a JSON array where each element contains either a base64 string or parsed message object.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `unknown[]`.

## Example Usage

```ts
const vendorID = 'VzMapManager';

const body: MapDataQueryRequest = {
  regionIntersectionPairs: [
    {
      intersectionId: 5233,
      regionId: 100,
    }
  ],
  messageStandard: ETXMessageStandardEnum.Sae,
  expectedType: ETXExpectedTypeEnum.BASE64,
  pageSize: 50,
};

try {
  const response = await mapMessageController.queryMapMessages(
    vendorID,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof MdmErrorResponseError) {
      console.log(error.result);
    }
  }
}
```

## Example Response

```
[
  {
    "messageStandard": "sae",
    "regionId": 100,
    "intersectionId": 5233,
    "payload": "asdfKDSiORel23=="
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 401 | Unauthorized | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 403 | Forbidden | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 405 | Method not allowed | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 429 | Too many requests | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 503 | Internal server error | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| Default | unexpected error | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |


# Delete Map Message

Removes a map message for the specified region and intersection ID.

```ts
async deleteMapMessage(
  regionId: string,
  i10nid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [sessionToken](../../doc/auth/custom-header-signature-1.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `regionId` | `string` | Template, Required | Region ID to filter the map messages. |
| `i10nid` | `string` | Template, Required | Intersection ID to filter the map messages. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: Deleted successfully (No Content)

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const regionId = '0';

const i10nid = '58399';

try {
  const response = await mapMessageController.deleteMapMessage(
    regionId,
    i10nid
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof MdmErrorResponseError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 401 | Unauthorized | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 403 | Forbidden | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 404 | Not found | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 429 | Too many requests | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| 503 | Internal server error | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |
| Default | unexpected error | [`MdmErrorResponseError`](../../doc/models/mdm-error-response-error.md) |

