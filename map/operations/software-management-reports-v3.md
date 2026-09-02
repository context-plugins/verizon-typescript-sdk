<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoftwareManagementReportsV3 — operations

Accessor: `client.softwareManagementReportsV3` · Source: `src/resources/software-management-reports-v3.ts` · 3 operations · Request and error types: namespace `SoftwareManagementReportsV3`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getCampaignDeviceStatus2

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getCampaignDeviceStatus2(request: SoftwareManagementReportsV3.GetCampaignDeviceStatus2Request, options?: RequestOptions): ApiPromise<V3CampaignDevice, SoftwareManagementReportsV3.GetCampaignDeviceStatus2Error>`
- **Wire**: `GET /reports/{acc}/campaigns/{campaignId}/devices`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3CampaignDevice`
- **Error**: `SoftwareManagementReportsV3.GetCampaignDeviceStatus2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementReportsV3.GetCampaignDeviceStatus2Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |
| `campaignId` | `path` | `string` | yes |
| `lastSeenDeviceId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3CampaignDevice` | `v3CampaignDeviceSchema` | `src/models/v3-campaign-device.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

### getCampaignHistoryByStatus2

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getCampaignHistoryByStatus2(request: SoftwareManagementReportsV3.GetCampaignHistoryByStatus2Request, options?: RequestOptions): ApiPromise<V3CampaignHistory, SoftwareManagementReportsV3.GetCampaignHistoryByStatus2Error>`
- **Wire**: `GET /reports/{acc}/firmware/campaigns`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3CampaignHistory`
- **Error**: `SoftwareManagementReportsV3.GetCampaignHistoryByStatus2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementReportsV3.GetCampaignHistoryByStatus2Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |
| `campaignStatus` | `query` | `CampaignStatus` | yes |
| `lastSeenCampaignId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CampaignStatus` | `campaignStatusSchema` | `src/models/campaign-status.ts` |
| `V3CampaignHistory` | `v3CampaignHistorySchema` | `src/models/v3-campaign-history.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

### getDeviceFirmwareUpgradeHistory3

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getDeviceFirmwareUpgradeHistory3(request: SoftwareManagementReportsV3.GetDeviceFirmwareUpgradeHistory3Request, options?: RequestOptions): ApiPromise<DeviceFirmwareUpgrade[], SoftwareManagementReportsV3.GetDeviceFirmwareUpgradeHistory3Error>`
- **Wire**: `GET /reports/{acc}/devices/{deviceId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceFirmwareUpgrade[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoftwareManagementReportsV3.GetDeviceFirmwareUpgradeHistory3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementReportsV3.GetDeviceFirmwareUpgradeHistory3Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |
| `deviceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceFirmwareUpgrade` | `deviceFirmwareUpgradeSchema` | `src/models/device-firmware-upgrade.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

