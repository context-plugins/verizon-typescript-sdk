<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoftwareManagementReportsV2 — operations

Accessor: `client.softwareManagementReportsV2` · Source: `src/resources/software-management-reports-v2.ts` · 5 operations · Request and error types: namespace `SoftwareManagementReportsV2`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getCampaignDeviceStatus

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getCampaignDeviceStatus(request: SoftwareManagementReportsV2.GetCampaignDeviceStatusRequest, options?: RequestOptions): ApiPromise<V2CampaignDevice, SoftwareManagementReportsV2.GetCampaignDeviceStatusError>`
- **Wire**: `GET /reports/{account}/campaigns/{campaignId}/devices`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2CampaignDevice`
- **Error**: `SoftwareManagementReportsV2.GetCampaignDeviceStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementReportsV2.GetCampaignDeviceStatusRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `campaignId` | `path` | `string` | yes |
| `lastSeenDeviceId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2CampaignDevice` | `v2CampaignDeviceSchema` | `src/models/v2-campaign-device.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### getCampaignHistoryByStatus

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getCampaignHistoryByStatus(request: SoftwareManagementReportsV2.GetCampaignHistoryByStatusRequest, options?: RequestOptions): ApiPromise<V2CampaignHistory, SoftwareManagementReportsV2.GetCampaignHistoryByStatusError>`
- **Wire**: `GET /reports/{account}/campaigns`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2CampaignHistory`
- **Error**: `SoftwareManagementReportsV2.GetCampaignHistoryByStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementReportsV2.GetCampaignHistoryByStatusRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `campaignStatus` | `query` | `string` | yes |
| `lastSeenCampaignId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2CampaignHistory` | `v2CampaignHistorySchema` | `src/models/v2-campaign-history.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### getDeviceFirmwareUpgradeHistory2

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getDeviceFirmwareUpgradeHistory2(request: SoftwareManagementReportsV2.GetDeviceFirmwareUpgradeHistory2Request, options?: RequestOptions): ApiPromise<DeviceSoftwareUpgrade[], SoftwareManagementReportsV2.GetDeviceFirmwareUpgradeHistory2Error>`
- **Wire**: `GET /reports/{account}/devices/{deviceId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceSoftwareUpgrade[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoftwareManagementReportsV2.GetDeviceFirmwareUpgradeHistory2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementReportsV2.GetDeviceFirmwareUpgradeHistory2Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `deviceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceSoftwareUpgrade` | `deviceSoftwareUpgradeSchema` | `src/models/device-software-upgrade.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### listAccountDevices2

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listAccountDevices2(request: SoftwareManagementReportsV2.ListAccountDevices2Request, options?: RequestOptions): ApiPromise<V2AccountDeviceList, SoftwareManagementReportsV2.ListAccountDevices2Error>`
- **Wire**: `GET /devices/{account}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2AccountDeviceList`
- **Error**: `SoftwareManagementReportsV2.ListAccountDevices2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementReportsV2.ListAccountDevices2Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `lastSeenDeviceId` | `query` | `string` | no |
| `distributionType` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2AccountDeviceList` | `v2AccountDeviceListSchema` | `src/models/v2-account-device-list.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### listAvailableSoftware

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listAvailableSoftware(request: SoftwareManagementReportsV2.ListAvailableSoftwareRequest, options?: RequestOptions): ApiPromise<SoftwarePackage[], SoftwareManagementReportsV2.ListAvailableSoftwareError>`
- **Wire**: `GET /software/{account}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SoftwarePackage[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoftwareManagementReportsV2.ListAvailableSoftwareError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementReportsV2.ListAvailableSoftwareRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `distributionType` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SoftwarePackage` | `softwarePackageSchema` | `src/models/software-package.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

