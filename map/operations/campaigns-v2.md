<!-- Generated file — do not edit; regenerated with the SDK. -->

# CampaignsV2 — operations

Accessor: `client.campaignsV2` · Source: `src/resources/campaigns-v2.ts` · 7 operations · Request and error types: namespace `CampaignsV2`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### cancelCampaign

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `cancelCampaign(request: CampaignsV2.CancelCampaignRequest, options?: RequestOptions): ApiPromise<FotaV2SuccessResult, CampaignsV2.CancelCampaignError>`
- **Wire**: `DELETE /campaigns/{account}/{campaignId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FotaV2SuccessResult`
- **Error**: `CampaignsV2.CancelCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsV2.CancelCampaignRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `campaignId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FotaV2SuccessResult` | `fotaV2SuccessResultSchema` | `src/models/fota-v2-success-result.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### getCampaignInformation

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getCampaignInformation(request: CampaignsV2.GetCampaignInformationRequest, options?: RequestOptions): ApiPromise<CampaignSoftware, CampaignsV2.GetCampaignInformationError>`
- **Wire**: `GET /campaigns/{account}/{campaignId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CampaignSoftware`
- **Error**: `CampaignsV2.GetCampaignInformationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsV2.GetCampaignInformationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `campaignId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CampaignSoftware` | `campaignSoftwareSchema` | `src/models/campaign-software.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### scheduleCampaignFirmwareUpgrade

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `scheduleCampaignFirmwareUpgrade(request: CampaignsV2.ScheduleCampaignFirmwareUpgradeRequest, options?: RequestOptions): ApiPromise<CampaignSoftware, CampaignsV2.ScheduleCampaignFirmwareUpgradeError>`
- **Wire**: `POST /campaigns/{account}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CampaignSoftware`
- **Error**: `CampaignsV2.ScheduleCampaignFirmwareUpgradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsV2.ScheduleCampaignFirmwareUpgradeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CampaignSoftware` | `campaignSoftwareSchema` | `src/models/campaign-software.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### scheduleFileUpgrade

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `scheduleFileUpgrade(request: CampaignsV2.ScheduleFileUpgradeRequest, options?: RequestOptions): ApiPromise<UploadAndScheduleFileResponse, CampaignsV2.ScheduleFileUpgradeError>`
- **Wire**: `POST /campaigns/files/{acc}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UploadAndScheduleFileResponse`
- **Error**: `CampaignsV2.ScheduleFileUpgradeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsV2.ScheduleFileUpgradeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |
| `body` | `body` | `UploadAndScheduleFileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadAndScheduleFileRequest` | `uploadAndScheduleFileRequestSchema` | `src/models/upload-and-schedule-file-request.ts` |
| `UploadAndScheduleFileResponse` | `uploadAndScheduleFileResponseSchema` | `src/models/upload-and-schedule-file-response.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### scheduleSwUpgradeHttpDevices

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `scheduleSwUpgradeHttpDevices(request: CampaignsV2.ScheduleSwUpgradeHttpDevicesRequest, options?: RequestOptions): ApiPromise<UploadAndScheduleFileResponse, CampaignsV2.ScheduleSwUpgradeHttpDevicesError>`
- **Wire**: `POST /campaigns/software/{acc}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UploadAndScheduleFileResponse`
- **Error**: `CampaignsV2.ScheduleSwUpgradeHttpDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsV2.ScheduleSwUpgradeHttpDevicesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |
| `body` | `body` | `SchedulesSoftwareUpgradeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SchedulesSoftwareUpgradeRequest` | `schedulesSoftwareUpgradeRequestSchema` | `src/models/schedules-software-upgrade-request.ts` |
| `UploadAndScheduleFileResponse` | `uploadAndScheduleFileResponseSchema` | `src/models/upload-and-schedule-file-response.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### updateCampaignDates

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `updateCampaignDates(request: CampaignsV2.UpdateCampaignDatesRequest, options?: RequestOptions): ApiPromise<CampaignSoftware, CampaignsV2.UpdateCampaignDatesError>`
- **Wire**: `PUT /campaigns/{account}/{campaignId}/dates`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CampaignSoftware`
- **Error**: `CampaignsV2.UpdateCampaignDatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsV2.UpdateCampaignDatesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `campaignId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CampaignSoftware` | `campaignSoftwareSchema` | `src/models/campaign-software.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### updateCampaignFirmwareDevices

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `updateCampaignFirmwareDevices(request: CampaignsV2.UpdateCampaignFirmwareDevicesRequest, options?: RequestOptions): ApiPromise<V2AddOrRemoveDeviceResult, CampaignsV2.UpdateCampaignFirmwareDevicesError>`
- **Wire**: `PUT /campaigns/{account}/{campaignId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2AddOrRemoveDeviceResult`
- **Error**: `CampaignsV2.UpdateCampaignFirmwareDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsV2.UpdateCampaignFirmwareDevicesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `campaignId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2AddOrRemoveDeviceResult` | `v2AddOrRemoveDeviceResultSchema` | `src/models/v2-add-or-remove-device-result.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

