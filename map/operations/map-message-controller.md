<!-- Generated file — do not edit; regenerated with the SDK. -->

# MapMessageController — operations

Accessor: `client.mapMessageController` · Source: `src/resources/map-message-controller.ts` · 4 operations · Request and error types: namespace `MapMessageController`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteMapMessage

- **Server**: `impServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteMapMessage(request: MapMessageController.DeleteMapMessageRequest, options?: RequestOptions): ApiPromise<undefined, MapMessageController.DeleteMapMessageError>`
- **Wire**: `DELETE /api/v2/mapdata/regionid/{regionId}/i10nid/{i10nid}`
- **Auth**: all of `thingspaceOauth`, `sessionToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MapMessageController.DeleteMapMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"mdmErrorResponse"` [400] `MdmErrorResponse` · `"mdmErrorResponse2"` [401] `MdmErrorResponse` · `"mdmErrorResponse3"` [403] `MdmErrorResponse` · `"mdmErrorResponse4"` [404] `MdmErrorResponse` · `"mdmErrorResponse5"` [429] `MdmErrorResponse` · `"mdmErrorResponse6"` [503] `MdmErrorResponse` · `"mdmErrorResponse7"` [400–599] `MdmErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MapMessageController.DeleteMapMessageRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `regionId` | `path` | — | `string` | yes |
| `i10Nid` | `path` | `i10nid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MdmErrorResponse` | `mdmErrorResponseSchema` | `src/models/mdm-error-response.ts` |

### downloadMapMessages

- **Server**: `impServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `downloadMapMessages(request: MapMessageController.DownloadMapMessagesRequest, options?: RequestOptions): ApiPromise<string, MapMessageController.DownloadMapMessagesError>`
- **Wire**: `GET /api/v2/mapdata`
- **Auth**: all of `thingspaceOauth`, `sessionToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `MapMessageController.DownloadMapMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"mdmErrorResponse"` [400] `MdmErrorResponse` · `"mdmErrorResponse2"` [401] `MdmErrorResponse` · `"mdmErrorResponse3"` [403] `MdmErrorResponse` · `"mdmErrorResponse4"` [404] `MdmErrorResponse` · `"mdmErrorResponse5"` [429] `MdmErrorResponse` · `"mdmErrorResponse6"` [503] `MdmErrorResponse` · `"mdmErrorResponse7"` [400–599] `MdmErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MapMessageController.DownloadMapMessagesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `geofence` | `query` | `Geofence` | `GeofencePolygon` | yes |
| `vendorId` | `header` | `VendorID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GeofencePolygon` | `geofencePolygonSchema` | `src/models/geofence-polygon.ts` |
| `MdmErrorResponse` | `mdmErrorResponseSchema` | `src/models/mdm-error-response.ts` |

### ingestMapMessages

- **Server**: `impServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `ingestMapMessages(request: MapMessageController.IngestMapMessagesRequest, options?: RequestOptions): ApiPromise<string, MapMessageController.IngestMapMessagesError>`
- **Wire**: `POST /api/v2/mapdata`
- **Auth**: all of `thingspaceOauth`, `sessionToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `MapMessageController.IngestMapMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"mdmErrorResponse"` [400] `MdmErrorResponse` · `"mdmErrorResponse2"` [401] `MdmErrorResponse` · `"mdmErrorResponse3"` [403] `MdmErrorResponse` · `"mdmErrorResponse4"` [405] `MdmErrorResponse` · `"mdmErrorResponse5"` [429] `MdmErrorResponse` · `"mdmErrorResponse6"` [503] `MdmErrorResponse` · `"mdmErrorResponse7"` [400–599] `MdmErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MapMessageController.IngestMapMessagesRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `vendorId` | `header` | `VendorID` | `string` | yes | — |
| `mapDataMessageStandard` | `header` | `MessageStandard` | `EtxMessageStandardEnum` | no | `EtxMessageStandardEnum.Sae` |
| `body` | `body` | — | `EtxMapDataIngestRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `EtxMessageStandardEnum` | `etxMessageStandardEnumSchema` | `src/models/etx-message-standard-enum.ts` |
| `EtxMapDataIngestRequest` | `etxMapDataIngestRequestSchema` | `src/models/etx-map-data-ingest-request.ts` |
| `MdmErrorResponse` | `mdmErrorResponseSchema` | `src/models/mdm-error-response.ts` |

### queryMapMessages

- **Server**: `impServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `queryMapMessages(request: MapMessageController.QueryMapMessagesRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>[], MapMessageController.QueryMapMessagesError>`
- **Wire**: `POST /api/v2/mapdata/query`
- **Auth**: all of `thingspaceOauth`, `sessionToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Record<string, unknown>[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MapMessageController.QueryMapMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"mdmErrorResponse"` [400] `MdmErrorResponse` · `"mdmErrorResponse2"` [401] `MdmErrorResponse` · `"mdmErrorResponse3"` [403] `MdmErrorResponse` · `"mdmErrorResponse4"` [405] `MdmErrorResponse` · `"mdmErrorResponse5"` [429] `MdmErrorResponse` · `"mdmErrorResponse6"` [503] `MdmErrorResponse` · `"mdmErrorResponse7"` [400–599] `MdmErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MapMessageController.QueryMapMessagesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vendorId` | `header` | `VendorID` | `string` | yes |
| `body` | `body` | — | `MapDataQueryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MapDataQueryRequest` | `mapDataQueryRequestSchema` | `src/models/unions/map-data-query-request.ts` |
| `MdmErrorResponse` | `mdmErrorResponseSchema` | `src/models/mdm-error-response.ts` |

