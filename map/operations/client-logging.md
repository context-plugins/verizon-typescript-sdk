<!-- Generated file — do not edit; regenerated with the SDK. -->

# ClientLogging — operations

Accessor: `client.clientLogging` · Source: `src/resources/client-logging.ts` · 6 operations · Request and error types: namespace `ClientLogging`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### disableDeviceLogging

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `disableDeviceLogging(request: ClientLogging.DisableDeviceLoggingRequest, options?: RequestOptions): ApiPromise<undefined, ClientLogging.DisableDeviceLoggingError>`
- **Wire**: `DELETE /logging/{account}/devices/{deviceId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ClientLogging.DisableDeviceLoggingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientLogging.DisableDeviceLoggingRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `deviceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### disableLoggingForDevices

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `disableLoggingForDevices(request: ClientLogging.DisableLoggingForDevicesRequest, options?: RequestOptions): ApiPromise<undefined, ClientLogging.DisableLoggingForDevicesError>`
- **Wire**: `DELETE /logging/{account}/devices`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ClientLogging.DisableLoggingForDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientLogging.DisableLoggingForDevicesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `deviceIds` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### enableDeviceLogging

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `enableDeviceLogging(request: ClientLogging.EnableDeviceLoggingRequest, options?: RequestOptions): ApiPromise<DeviceLoggingStatus, ClientLogging.EnableDeviceLoggingError>`
- **Wire**: `PUT /logging/{account}/devices/{deviceId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceLoggingStatus`
- **Error**: `ClientLogging.EnableDeviceLoggingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientLogging.EnableDeviceLoggingRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `deviceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceLoggingStatus` | `deviceLoggingStatusSchema` | `src/models/device-logging-status.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### enableLoggingForDevices

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `enableLoggingForDevices(request: ClientLogging.EnableLoggingForDevicesRequest, options?: RequestOptions): ApiPromise<DeviceLoggingStatus[], ClientLogging.EnableLoggingForDevicesError>`
- **Wire**: `PUT /logging/{account}/devices`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceLoggingStatus[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ClientLogging.EnableLoggingForDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientLogging.EnableLoggingForDevicesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceLoggingStatus` | `deviceLoggingStatusSchema` | `src/models/device-logging-status.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### listDeviceLogs

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listDeviceLogs(request: ClientLogging.ListDeviceLogsRequest, options?: RequestOptions): ApiPromise<DeviceLog[], ClientLogging.ListDeviceLogsError>`
- **Wire**: `GET /logging/{account}/devices/{deviceId}/logs`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceLog[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ClientLogging.ListDeviceLogsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientLogging.ListDeviceLogsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `deviceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceLog` | `deviceLogSchema` | `src/models/device-log.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### listDevicesWithLoggingEnabled

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listDevicesWithLoggingEnabled(request: ClientLogging.ListDevicesWithLoggingEnabledRequest, options?: RequestOptions): ApiPromise<DeviceLoggingStatus[], ClientLogging.ListDevicesWithLoggingEnabledError>`
- **Wire**: `GET /logging/{account}/devices`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceLoggingStatus[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ClientLogging.ListDevicesWithLoggingEnabledError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientLogging.ListDevicesWithLoggingEnabledRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceLoggingStatus` | `deviceLoggingStatusSchema` | `src/models/device-logging-status.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

