<!-- Generated file — do not edit; regenerated with the SDK. -->

# FirmwareV3 — operations

Accessor: `client.firmwareV3` · Source: `src/resources/firmware-v3.ts` · 3 operations · Request and error types: namespace `FirmwareV3`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listAvailableFirmware2

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listAvailableFirmware2(request: FirmwareV3.ListAvailableFirmware2Request, options?: RequestOptions): ApiPromise<FirmwarePackage[], FirmwareV3.ListAvailableFirmware2Error>`
- **Wire**: `GET /firmware/{acc}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FirmwarePackage[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `FirmwareV3.ListAvailableFirmware2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FirmwareV3.ListAvailableFirmware2Request` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `acc` | `path` | `string` | yes | — |
| `protocol` | `query` | `FirmwareProtocol` | no | `FirmwareProtocol.Lwm2M` |

| Type | Schema value | Source |
| --- | --- | --- |
| `FirmwareProtocol` | `firmwareProtocolSchema` | `src/models/firmware-protocol.ts` |
| `FirmwarePackage` | `firmwarePackageSchema` | `src/models/firmware-package.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

### reportDeviceFirmware

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `reportDeviceFirmware(request: FirmwareV3.ReportDeviceFirmwareRequest, options?: RequestOptions): ApiPromise<DeviceFirmwareVersionUpdateResult, FirmwareV3.ReportDeviceFirmwareError>`
- **Wire**: `PUT /firmware/{acc}/async/{deviceId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceFirmwareVersionUpdateResult`
- **Error**: `FirmwareV3.ReportDeviceFirmwareError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FirmwareV3.ReportDeviceFirmwareRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |
| `deviceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceFirmwareVersionUpdateResult` | `deviceFirmwareVersionUpdateResultSchema` | `src/models/device-firmware-version-update-result.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

### synchronizeDeviceFirmware

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `synchronizeDeviceFirmware(request: FirmwareV3.SynchronizeDeviceFirmwareRequest, options?: RequestOptions): ApiPromise<DeviceFirmwareList, FirmwareV3.SynchronizeDeviceFirmwareError>`
- **Wire**: `PUT /firmware/{acc}/devices`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceFirmwareList`
- **Error**: `FirmwareV3.SynchronizeDeviceFirmwareError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FirmwareV3.SynchronizeDeviceFirmwareRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |
| `body` | `body` | `FirmwareImei` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FirmwareImei` | `firmwareImeiSchema` | `src/models/firmware-imei.ts` |
| `DeviceFirmwareList` | `deviceFirmwareListSchema` | `src/models/device-firmware-list.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

