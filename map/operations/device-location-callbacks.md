<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeviceLocationCallbacks — operations

Accessor: `client.deviceLocationCallbacks` · Source: `src/resources/device-location-callbacks.ts` · 4 operations · Request and error types: namespace `DeviceLocationCallbacks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### cancelAsyncReport

- **Server**: `deviceLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `cancelAsyncReport(request: DeviceLocationCallbacks.CancelAsyncReportRequest, options?: RequestOptions): ApiPromise<TransactionId, DeviceLocationCallbacks.CancelAsyncReportError>`
- **Wire**: `DELETE /devicelocations/{txid}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionId`
- **Error**: `DeviceLocationCallbacks.CancelAsyncReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400–599] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceLocationCallbacks.CancelAsyncReportRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `txid` | `path` | `string` | yes |
| `accountName` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionId` | `transactionIdSchema` | `src/models/transaction-id.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### deregisterCallback2

- **Server**: `deviceLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `deregisterCallback2(request: DeviceLocationCallbacks.DeregisterCallback2Request, options?: RequestOptions): ApiPromise<DeviceLocationSuccessResult, DeviceLocationCallbacks.DeregisterCallback2Error>`
- **Wire**: `DELETE /callbacks/{accountName}/name/{service}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceLocationSuccessResult`
- **Error**: `DeviceLocationCallbacks.DeregisterCallback2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceLocationCallbacks.DeregisterCallback2Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |
| `service` | `path` | `CallbackServiceName` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CallbackServiceName` | `callbackServiceNameSchema` | `src/models/callback-service-name.ts` |
| `DeviceLocationSuccessResult` | `deviceLocationSuccessResultSchema` | `src/models/device-location-success-result.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### listRegisteredCallbacks2

- **Server**: `deviceLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listRegisteredCallbacks2(request: DeviceLocationCallbacks.ListRegisteredCallbacks2Request, options?: RequestOptions): ApiPromise<DeviceLocationCallback[], DeviceLocationCallbacks.ListRegisteredCallbacks2Error>`
- **Wire**: `GET /callbacks/{accountName}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceLocationCallback[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DeviceLocationCallbacks.ListRegisteredCallbacks2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceLocationCallbacks.ListRegisteredCallbacks2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceLocationCallback` | `deviceLocationCallbackSchema` | `src/models/device-location-callback.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### registerCallback2

- **Server**: `deviceLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `registerCallback2(request: DeviceLocationCallbacks.RegisterCallback2Request, options?: RequestOptions): ApiPromise<CallbackRegistrationResult, DeviceLocationCallbacks.RegisterCallback2Error>`
- **Wire**: `POST /callbacks/{accountName}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CallbackRegistrationResult`
- **Error**: `DeviceLocationCallbacks.RegisterCallback2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceLocationCallbacks.RegisterCallback2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CallbackRegistrationResult` | `callbackRegistrationResultSchema` | `src/models/callback-registration-result.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

