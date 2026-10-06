<!-- Generated file — do not edit; regenerated with the SDK. -->

# DevicesLocations — operations

Accessor: `client.devicesLocations` · Source: `src/resources/devices-locations.ts` · 6 operations · Request and error types: namespace `DevicesLocations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelQueuedLocationReportGeneration

- **Server**: `deviceLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `cancelQueuedLocationReportGeneration(request: DevicesLocations.CancelQueuedLocationReportGenerationRequest, options?: RequestOptions): ApiPromise<TransactionId, DevicesLocations.CancelQueuedLocationReportGenerationError>`
- **Wire**: `DELETE /locationreports/{accountName}/report/{txid}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionId`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DevicesLocations.CancelQueuedLocationReportGenerationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [default — any status no arm above covers] `DeviceLocationResult` · `"undeclared"` [a `default`-matched body that did not fit `DeviceLocationResult`] `rawBody: ArrayBuffer`

**Fields** — `DevicesLocations.CancelQueuedLocationReportGenerationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |
| `txid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionId` | `transactionIdSchema` | `src/models/transaction-id.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### createLocationReport

- **Server**: `deviceLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `createLocationReport(options?: RequestOptions): ApiPromise<AsynchronousLocationRequestResult, DevicesLocations.CreateLocationReportError>`
- **Wire**: `POST /locationreports`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AsynchronousLocationRequestResult`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DevicesLocations.CreateLocationReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [default — any status no arm above covers] `DeviceLocationResult` · `"undeclared"` [a `default`-matched body that did not fit `DeviceLocationResult`] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `AsynchronousLocationRequestResult` | `asynchronousLocationRequestResultSchema` | `src/models/asynchronous-location-request-result.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### getLocationReportStatus

- **Server**: `deviceLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getLocationReportStatus(request: DevicesLocations.GetLocationReportStatusRequest, options?: RequestOptions): ApiPromise<LocationReportStatus, DevicesLocations.GetLocationReportStatusError>`
- **Wire**: `GET /locationreports/{accountName}/report/{txid}/status`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LocationReportStatus`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DevicesLocations.GetLocationReportStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [default — any status no arm above covers] `DeviceLocationResult` · `"undeclared"` [a `default`-matched body that did not fit `DeviceLocationResult`] `rawBody: ArrayBuffer`

**Fields** — `DevicesLocations.GetLocationReportStatusRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |
| `txid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LocationReportStatus` | `locationReportStatusSchema` | `src/models/location-report-status.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### listDevicesLocationsAsynchronous

- **Server**: `deviceLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listDevicesLocationsAsynchronous(options?: RequestOptions): ApiPromise<SynchronousLocationRequestResult, DevicesLocations.ListDevicesLocationsAsynchronousError>`
- **Wire**: `POST /devicelocations`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SynchronousLocationRequestResult`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DevicesLocations.ListDevicesLocationsAsynchronousError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [default — any status no arm above covers] `DeviceLocationResult` · `"undeclared"` [a `default`-matched body that did not fit `DeviceLocationResult`] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SynchronousLocationRequestResult` | `synchronousLocationRequestResultSchema` | `src/models/synchronous-location-request-result.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### listDevicesLocationsSynchronous

- **Server**: `deviceLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listDevicesLocationsSynchronous(request: DevicesLocations.ListDevicesLocationsSynchronousRequest, options?: RequestOptions): ApiPromise<Location[], DevicesLocations.ListDevicesLocationsSynchronousError>`
- **Wire**: `POST /locations`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Location[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DevicesLocations.ListDevicesLocationsSynchronousError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [default — any status no arm above covers] `DeviceLocationResult` · `"undeclared"` [a `default`-matched body that did not fit `DeviceLocationResult`] `rawBody: ArrayBuffer`

**Fields** — `DevicesLocations.ListDevicesLocationsSynchronousRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LocationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LocationRequest` | `locationRequestSchema` | `src/models/location-request.ts` |
| `Location` | `locationSchema` | `src/models/location.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### retrieveLocationReport

- **Server**: `deviceLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `retrieveLocationReport(request: DevicesLocations.RetrieveLocationReportRequest, options?: RequestOptions): ApiPromise<LocationReport, DevicesLocations.RetrieveLocationReportError>`
- **Wire**: `GET /locationreports/{accountName}/report/{txid}/index/{startindex}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LocationReport`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DevicesLocations.RetrieveLocationReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [default — any status no arm above covers] `DeviceLocationResult` · `"undeclared"` [a `default`-matched body that did not fit `DeviceLocationResult`] `rawBody: ArrayBuffer`

**Fields** — `DevicesLocations.RetrieveLocationReportRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |
| `txid` | `path` | `string` | yes |
| `startindex` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LocationReport` | `locationReportSchema` | `src/models/location-report.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

