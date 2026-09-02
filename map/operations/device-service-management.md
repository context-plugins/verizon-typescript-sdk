<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeviceServiceManagement — operations

Accessor: `client.deviceServiceManagement` · Source: `src/resources/device-service-management.ts` · 2 operations · Request and error types: namespace `DeviceServiceManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getDeviceHyperPreciseStatus

- **Server**: `hyperPreciseLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getDeviceHyperPreciseStatus(request: DeviceServiceManagement.GetDeviceHyperPreciseStatusRequest, options?: RequestOptions): ApiPromise<BullseyeServiceResult, DeviceServiceManagement.GetDeviceHyperPreciseStatusError>`
- **Wire**: `GET /devices/services`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BullseyeServiceResult`
- **Error**: `DeviceServiceManagement.GetDeviceHyperPreciseStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"hyperPreciseLocationResult"` [400] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult2"` [401] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult3"` [403] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult4"` [404] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult5"` [409] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult6"` [500] `HyperPreciseLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceServiceManagement.GetDeviceHyperPreciseStatusRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `imei` | `query` | `string` | yes |
| `accountNumber` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BullseyeServiceResult` | `bullseyeServiceResultSchema` | `src/models/bullseye-service-result.ts` |
| `HyperPreciseLocationResult` | `hyperPreciseLocationResultSchema` | `src/models/hyper-precise-location-result.ts` |

### updateDeviceHyperPreciseStatus

- **Server**: `hyperPreciseLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `updateDeviceHyperPreciseStatus(request: DeviceServiceManagement.UpdateDeviceHyperPreciseStatusRequest, options?: RequestOptions): ApiPromise<BullseyeServiceResult, DeviceServiceManagement.UpdateDeviceHyperPreciseStatusError>`
- **Wire**: `PUT /devices/services`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `BullseyeServiceResult`
- **Error**: `DeviceServiceManagement.UpdateDeviceHyperPreciseStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"hyperPreciseLocationResult"` [400] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult2"` [401] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult3"` [403] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult4"` [404] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult5"` [409] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult6"` [500] `HyperPreciseLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceServiceManagement.UpdateDeviceHyperPreciseStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BullseyeServiceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BullseyeServiceRequest` | `bullseyeServiceRequestSchema` | `src/models/bullseye-service-request.ts` |
| `BullseyeServiceResult` | `bullseyeServiceResultSchema` | `src/models/bullseye-service-result.ts` |
| `HyperPreciseLocationResult` | `hyperPreciseLocationResultSchema` | `src/models/hyper-precise-location-result.ts` |

