<!-- Generated file — do not edit; regenerated with the SDK. -->

# CampaignsV3 — operations

Accessor: `client.campaignsV3` · Source: `src/resources/campaigns-v3.ts` · 5 operations · Request and error types: namespace `CampaignsV3`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### cancelCampaign2

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `cancelCampaign2(request: CampaignsV3.CancelCampaign2Request, options?: RequestOptions): ApiPromise<FotaV3SuccessResult, CampaignsV3.CancelCampaign2Error>`
- **Wire**: `DELETE /campaigns/{accountName}/{campaignId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FotaV3SuccessResult`
- **Error**: `CampaignsV3.CancelCampaign2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsV3.CancelCampaign2Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |
| `campaignId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FotaV3SuccessResult` | `fotaV3SuccessResultSchema` | `src/models/fota-v3-success-result.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

### getCampaignInformation2

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getCampaignInformation2(request: CampaignsV3.GetCampaignInformation2Request, options?: RequestOptions): ApiPromise<Campaign, CampaignsV3.GetCampaignInformation2Error>`
- **Wire**: `GET /campaigns/{accountName}/{campaignId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Campaign`
- **Error**: `CampaignsV3.GetCampaignInformation2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsV3.GetCampaignInformation2Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |
| `campaignId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Campaign` | `campaignSchema` | `src/models/campaign.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

### scheduleCampaignFirmwareUpgrade2

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `scheduleCampaignFirmwareUpgrade2(request: CampaignsV3.ScheduleCampaignFirmwareUpgrade2Request, options?: RequestOptions): ApiPromise<FirmwareCampaign, CampaignsV3.ScheduleCampaignFirmwareUpgrade2Error>`
- **Wire**: `POST /campaigns/firmware/{accountName}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `FirmwareCampaign`
- **Error**: `CampaignsV3.ScheduleCampaignFirmwareUpgrade2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsV3.ScheduleCampaignFirmwareUpgrade2Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |
| `body` | `body` | `CampaignFirmwareUpgrade` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CampaignFirmwareUpgrade` | `campaignFirmwareUpgradeSchema` | `src/models/campaign-firmware-upgrade.ts` |
| `FirmwareCampaign` | `firmwareCampaignSchema` | `src/models/firmware-campaign.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

### updateCampaignDates2

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `updateCampaignDates2(request: CampaignsV3.UpdateCampaignDates2Request, options?: RequestOptions): ApiPromise<FirmwareCampaign, CampaignsV3.UpdateCampaignDates2Error>`
- **Wire**: `PUT /campaigns/firmware/{acc}/{campaignId}/dates`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `FirmwareCampaign`
- **Error**: `CampaignsV3.UpdateCampaignDates2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsV3.UpdateCampaignDates2Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |
| `campaignId` | `path` | `string` | yes |
| `body` | `body` | `V3ChangeCampaignDatesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3ChangeCampaignDatesRequest` | `v3ChangeCampaignDatesRequestSchema` | `src/models/v3-change-campaign-dates-request.ts` |
| `FirmwareCampaign` | `firmwareCampaignSchema` | `src/models/firmware-campaign.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

### updateCampaignFirmwareDevices2

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `updateCampaignFirmwareDevices2(request: CampaignsV3.UpdateCampaignFirmwareDevices2Request, options?: RequestOptions): ApiPromise<V3AddOrRemoveDeviceResult, CampaignsV3.UpdateCampaignFirmwareDevices2Error>`
- **Wire**: `PUT /campaigns/firmware/{acc}/{campaignId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `V3AddOrRemoveDeviceResult`
- **Error**: `CampaignsV3.UpdateCampaignFirmwareDevices2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsV3.UpdateCampaignFirmwareDevices2Request` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |
| `campaignId` | `path` | `string` | yes |
| `body` | `body` | `V3AddOrRemoveDeviceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3AddOrRemoveDeviceRequest` | `v3AddOrRemoveDeviceRequestSchema` | `src/models/v3-add-or-remove-device-request.ts` |
| `V3AddOrRemoveDeviceResult` | `v3AddOrRemoveDeviceResultSchema` | `src/models/v3-add-or-remove-device-result.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

