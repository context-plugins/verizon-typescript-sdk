<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoftwareManagementReportsV1 — operations

Accessor: `client.softwareManagementReportsV1` · Source: `src/resources/software-management-reports-v1.ts` · 3 operations · Request and error types: namespace `SoftwareManagementReportsV1`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getDeviceFirmwareUpgradeHistory

- **Server**: `softwareManagementV1` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getDeviceFirmwareUpgradeHistory(request: SoftwareManagementReportsV1.GetDeviceFirmwareUpgradeHistoryRequest, options?: RequestOptions): ApiPromise<DeviceUpgradeHistory[], SoftwareManagementReportsV1.GetDeviceFirmwareUpgradeHistoryError>`
- **Wire**: `GET /reports/{account}/devices/{deviceId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceUpgradeHistory[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoftwareManagementReportsV1.GetDeviceFirmwareUpgradeHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV1Result"` [400] `FotaV1Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementReportsV1.GetDeviceFirmwareUpgradeHistoryRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `deviceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceUpgradeHistory` | `deviceUpgradeHistorySchema` | `src/models/device-upgrade-history.ts` |
| `FotaV1Result` | `fotaV1ResultSchema` | `src/models/fota-v1-result.ts` |

### listAccountDevices

- **Server**: `softwareManagementV1` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listAccountDevices(request: SoftwareManagementReportsV1.ListAccountDevicesRequest, options?: RequestOptions): ApiPromise<DeviceListQueryResult, SoftwareManagementReportsV1.ListAccountDevicesError>`
- **Wire**: `GET /devices/{account}/index/{startIndex}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceListQueryResult`
- **Error**: `SoftwareManagementReportsV1.ListAccountDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV1Result"` [400] `FotaV1Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementReportsV1.ListAccountDevicesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `startIndex` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceListQueryResult` | `deviceListQueryResultSchema` | `src/models/device-list-query-result.ts` |
| `FotaV1Result` | `fotaV1ResultSchema` | `src/models/fota-v1-result.ts` |

### listUpgradesForSpecifiedStatus

- **Server**: `softwareManagementV1` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listUpgradesForSpecifiedStatus(request: SoftwareManagementReportsV1.ListUpgradesForSpecifiedStatusRequest, options?: RequestOptions): ApiPromise<UpgradeListQueryResult, SoftwareManagementReportsV1.ListUpgradesForSpecifiedStatusError>`
- **Wire**: `GET /reports/{account}/status/{upgradeStatus}/index/{startIndex}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UpgradeListQueryResult`
- **Error**: `SoftwareManagementReportsV1.ListUpgradesForSpecifiedStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV1Result"` [400] `FotaV1Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementReportsV1.ListUpgradesForSpecifiedStatusRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `upgradeStatus` | `path` | `UpgradeStatus` | yes |
| `startIndex` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpgradeStatus` | `upgradeStatusSchema` | `src/models/upgrade-status.ts` |
| `UpgradeListQueryResult` | `upgradeListQueryResultSchema` | `src/models/upgrade-list-query-result.ts` |
| `FotaV1Result` | `fotaV1ResultSchema` | `src/models/fota-v1-result.ts` |

