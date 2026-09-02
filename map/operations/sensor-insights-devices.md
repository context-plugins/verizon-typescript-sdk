<!-- Generated file — do not edit; regenerated with the SDK. -->

# SensorInsightsDevices — operations

Accessor: `client.sensorInsightsDevices` · Source: `src/resources/sensor-insights-devices.ts` · 6 operations · Request and error types: namespace `SensorInsightsDevices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### sensorInsightsDeviceActionSetRequest

- **Signature**: `sensorInsightsDeviceActionSetRequest(request: SensorInsightsDevices.SensorInsightsDeviceActionSetRequestRequest, options?: RequestOptions): ApiPromise<DtoDeviceActionSetResponse, SensorInsightsDevices.SensorInsightsDeviceActionSetRequestError>`
- **Wire**: `POST /dm/v1/devices/actions/set`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DtoDeviceActionSetResponse`
- **Error**: `SensorInsightsDevices.SensorInsightsDeviceActionSetRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsDevices.SensorInsightsDeviceActionSetRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DmV1DevicesActionsSetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DmV1DevicesActionsSetRequest` | `dmV1DevicesActionsSetRequestSchema` | `src/models/unions/dm-v1-devices-actions-set-request.ts` |
| `DtoDeviceActionSetResponse` | `dtoDeviceActionSetResponseSchema` | `src/models/dto-device-action-set-response.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |

### sensorInsightsLastReportedTimeRequest

- **Signature**: `sensorInsightsLastReportedTimeRequest(request: SensorInsightsDevices.SensorInsightsLastReportedTimeRequestRequest, options?: RequestOptions): ApiPromise<DtoLastReportedTimeResponse, SensorInsightsDevices.SensorInsightsLastReportedTimeRequestError>`
- **Wire**: `POST /dm/v1/devices/lastreported`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DtoLastReportedTimeResponse`
- **Error**: `SensorInsightsDevices.SensorInsightsLastReportedTimeRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsDevices.SensorInsightsLastReportedTimeRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoLastReportedTimeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoLastReportedTimeRequest` | `dtoLastReportedTimeRequestSchema` | `src/models/dto-last-reported-time-request.ts` |
| `DtoLastReportedTimeResponse` | `dtoLastReportedTimeResponseSchema` | `src/models/dto-last-reported-time-response.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |

### sensorInsightsListDeviceExperienceHistoryRequest

- **Signature**: `sensorInsightsListDeviceExperienceHistoryRequest(request: SensorInsightsDevices.SensorInsightsListDeviceExperienceHistoryRequestRequest, options?: RequestOptions): ApiPromise<UserDeviceExperienceHistory[], SensorInsightsDevices.SensorInsightsListDeviceExperienceHistoryRequestError>`
- **Wire**: `POST /dm/v1/devices/experience/actions/query`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UserDeviceExperienceHistory[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SensorInsightsDevices.SensorInsightsListDeviceExperienceHistoryRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [400–599] `ManagementError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsDevices.SensorInsightsListDeviceExperienceHistoryRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoListDeviceExperienceHistoryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoListDeviceExperienceHistoryRequest` | `dtoListDeviceExperienceHistoryRequestSchema` | `src/models/dto-list-device-experience-history-request.ts` |
| `UserDeviceExperienceHistory` | `userDeviceExperienceHistorySchema` | `src/models/user-device-experience-history.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

### sensorInsightsListDevicesRequest

- **Signature**: `sensorInsightsListDevicesRequest(request: SensorInsightsDevices.SensorInsightsListDevicesRequestRequest, options?: RequestOptions): ApiPromise<DtoExpandedDeviceResponse[], SensorInsightsDevices.SensorInsightsListDevicesRequestError>`
- **Wire**: `POST /dm/v1/devices/actions/query`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DtoExpandedDeviceResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SensorInsightsDevices.SensorInsightsListDevicesRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError"` [400] `ManagementError` · `"managementError2"` [401] `ManagementError` · `"managementError3"` [403] `ManagementError` · `"managementError4"` [404] `ManagementError` · `"managementError5"` [406] `ManagementError` · `"managementError6"` [415] `ManagementError` · `"managementError7"` [429] `ManagementError` · `"managementError8"` [500] `ManagementError` · `"managementError9"` [400–599] `ManagementError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsDevices.SensorInsightsListDevicesRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoListDevicesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoListDevicesRequest` | `dtoListDevicesRequestSchema` | `src/models/dto-list-devices-request.ts` |
| `DtoExpandedDeviceResponse` | `dtoExpandedDeviceResponseSchema` | `src/models/dto-expanded-device-response.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |

### sensorInsightsListNetworkExperienceHistoryRequest

- **Signature**: `sensorInsightsListNetworkExperienceHistoryRequest(request: SensorInsightsDevices.SensorInsightsListNetworkExperienceHistoryRequestRequest, options?: RequestOptions): ApiPromise<UserNetworkExperienceHistory[], SensorInsightsDevices.SensorInsightsListNetworkExperienceHistoryRequestError>`
- **Wire**: `POST /dm/v1/devices/networkexperience/actions/query`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UserNetworkExperienceHistory[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SensorInsightsDevices.SensorInsightsListNetworkExperienceHistoryRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [400–599] `ManagementError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsDevices.SensorInsightsListNetworkExperienceHistoryRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoListNetworkExperienceHistoryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoListNetworkExperienceHistoryRequest` | `dtoListNetworkExperienceHistoryRequestSchema` | `src/models/dto-list-network-experience-history-request.ts` |
| `UserNetworkExperienceHistory` | `userNetworkExperienceHistorySchema` | `src/models/user-network-experience-history.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

### sensorInsightsPatchDeviceRequest

- **Signature**: `sensorInsightsPatchDeviceRequest(request: SensorInsightsDevices.SensorInsightsPatchDeviceRequestRequest, options?: RequestOptions): ApiPromise<ResourceDevice, SensorInsightsDevices.SensorInsightsPatchDeviceRequestError>`
- **Wire**: `PATCH /dm/v1/devices`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ResourceDevice`
- **Error**: `SensorInsightsDevices.SensorInsightsPatchDeviceRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [400–599] `ManagementError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsDevices.SensorInsightsPatchDeviceRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoPatchDeviceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoPatchDeviceRequest` | `dtoPatchDeviceRequestSchema` | `src/models/dto-patch-device-request.ts` |
| `ResourceDevice` | `resourceDeviceSchema` | `src/models/resource-device.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

