<!-- Generated file — do not edit; regenerated with the SDK. -->

# FirmwareV1 — operations

Accessor: `client.firmwareV1` · Source: `src/resources/firmware-v1.ts` · 5 operations · Request and error types: namespace `FirmwareV1`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### cancelScheduledFirmwareUpgrade

- **Server**: `softwareManagementV1` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `cancelScheduledFirmwareUpgrade(request: FirmwareV1.CancelScheduledFirmwareUpgradeRequest, options?: RequestOptions): ApiPromise<FotaV1SuccessResult, FirmwareV1.CancelScheduledFirmwareUpgradeError>`
- **Wire**: `DELETE /upgrades/{accountName}/upgrade/{upgradeId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FotaV1SuccessResult`
- **Error**: `FirmwareV1.CancelScheduledFirmwareUpgradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV1Result"` [400] `FotaV1Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FirmwareV1.CancelScheduledFirmwareUpgradeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |
| `upgradeId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FotaV1SuccessResult` | `fotaV1SuccessResultSchema` | `src/models/fota-v1-success-result.ts` |
| `FotaV1Result` | `fotaV1ResultSchema` | `src/models/fota-v1-result.ts` |

### listAvailableFirmware

- **Server**: `softwareManagementV1` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listAvailableFirmware(request: FirmwareV1.ListAvailableFirmwareRequest, options?: RequestOptions): ApiPromise<Firmware[], FirmwareV1.ListAvailableFirmwareError>`
- **Wire**: `GET /firmware/{account}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Firmware[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `FirmwareV1.ListAvailableFirmwareError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV1Result"` [400] `FotaV1Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FirmwareV1.ListAvailableFirmwareRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Firmware` | `firmwareSchema` | `src/models/firmware.ts` |
| `FotaV1Result` | `fotaV1ResultSchema` | `src/models/fota-v1-result.ts` |

### listFirmwareUpgradeDetails

- **Server**: `softwareManagementV1` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listFirmwareUpgradeDetails(request: FirmwareV1.ListFirmwareUpgradeDetailsRequest, options?: RequestOptions): ApiPromise<FirmwareUpgrade, FirmwareV1.ListFirmwareUpgradeDetailsError>`
- **Wire**: `GET /upgrades/{accountName}/upgrade/{upgradeId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FirmwareUpgrade`
- **Error**: `FirmwareV1.ListFirmwareUpgradeDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV1Result"` [400] `FotaV1Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FirmwareV1.ListFirmwareUpgradeDetailsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |
| `upgradeId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FirmwareUpgrade` | `firmwareUpgradeSchema` | `src/models/firmware-upgrade.ts` |
| `FotaV1Result` | `fotaV1ResultSchema` | `src/models/fota-v1-result.ts` |

### scheduleFirmwareUpgrade

- **Server**: `softwareManagementV1` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `scheduleFirmwareUpgrade(request: FirmwareV1.ScheduleFirmwareUpgradeRequest, options?: RequestOptions): ApiPromise<FirmwareUpgrade, FirmwareV1.ScheduleFirmwareUpgradeError>`
- **Wire**: `POST /upgrades`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `FirmwareUpgrade`
- **Error**: `FirmwareV1.ScheduleFirmwareUpgradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV1Result"` [400] `FotaV1Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FirmwareV1.ScheduleFirmwareUpgradeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FirmwareUpgradeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FirmwareUpgradeRequest` | `firmwareUpgradeRequestSchema` | `src/models/firmware-upgrade-request.ts` |
| `FirmwareUpgrade` | `firmwareUpgradeSchema` | `src/models/firmware-upgrade.ts` |
| `FotaV1Result` | `fotaV1ResultSchema` | `src/models/fota-v1-result.ts` |

### updateFirmwareUpgradeDevices

- **Server**: `softwareManagementV1` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `updateFirmwareUpgradeDevices(request: FirmwareV1.UpdateFirmwareUpgradeDevicesRequest, options?: RequestOptions): ApiPromise<FirmwareUpgradeChangeResult, FirmwareV1.UpdateFirmwareUpgradeDevicesError>`
- **Wire**: `PUT /upgrades/{accountName}/upgrade/{upgradeId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FirmwareUpgradeChangeResult`
- **Error**: `FirmwareV1.UpdateFirmwareUpgradeDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV1Result"` [400] `FotaV1Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FirmwareV1.UpdateFirmwareUpgradeDevicesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |
| `upgradeId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FirmwareUpgradeChangeResult` | `firmwareUpgradeChangeResultSchema` | `src/models/firmware-upgrade-change-result.ts` |
| `FotaV1Result` | `fotaV1ResultSchema` | `src/models/fota-v1-result.ts` |

