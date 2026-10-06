<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeviceActions — operations

Accessor: `client.deviceActions` · Source: `src/resources/device-actions.ts` · 7 operations · Request and error types: namespace `DeviceActions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### accountInformation

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `accountInformation(request: DeviceActions.AccountInformationRequest, options?: RequestOptions): ApiPromise<AccountDetails, DeviceActions.AccountInformationError>`
- **Wire**: `GET /v1/accounts/{accountName}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountDetails`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DeviceActions.AccountInformationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [default — any status no arm above covers] `GioRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `GioRestErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `DeviceActions.AccountInformationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountDetails` | `accountDetailsSchema` | `src/models/account-details.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

### aggregateUsage

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `aggregateUsage(request: DeviceActions.AggregateUsageRequest, options?: RequestOptions): ApiPromise<GioRequestResponse, DeviceActions.AggregateUsageApiError>`
- **Wire**: `POST /v1/devices/usage/actions/list/aggregate`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GioRequestResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DeviceActions.AggregateUsageApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [default — any status no arm above covers] `GioRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `GioRestErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `DeviceActions.AggregateUsageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AggregateUsage` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AggregateUsage` | `aggregateUsageSchema` | `src/models/aggregate-usage.ts` |
| `GioRequestResponse` | `gioRequestResponseSchema` | `src/models/gio-request-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

### dailyUsage

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `dailyUsage(request: DeviceActions.DailyUsageRequest, options?: RequestOptions): ApiPromise<DailyUsageResponse, DeviceActions.DailyUsageError>`
- **Wire**: `POST /v1/devices/usage/actions/list`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DailyUsageResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DeviceActions.DailyUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [default — any status no arm above covers] `GioRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `GioRestErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `DeviceActions.DailyUsageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DailyUsage` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DailyUsage` | `dailyUsageSchema` | `src/models/daily-usage.ts` |
| `DailyUsageResponse` | `dailyUsageResponseSchema` | `src/models/daily-usage-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

### getAsynchronousRequestStatus

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getAsynchronousRequestStatus(request: DeviceActions.GetAsynchronousRequestStatusRequest, options?: RequestOptions): ApiPromise<StatusResponse, DeviceActions.GetAsynchronousRequestStatusError>`
- **Wire**: `GET /m2m/v2/accounts/{accountName}/requests/{requestID}/status`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StatusResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DeviceActions.GetAsynchronousRequestStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [default — any status no arm above covers] `GioRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `GioRestErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `DeviceActions.GetAsynchronousRequestStatusRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountName` | `path` | — | `string` | yes |
| `requestId` | `path` | `requestID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusResponse` | `statusResponseSchema` | `src/models/status-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

### retrieveDeviceProvisioningHistory

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `retrieveDeviceProvisioningHistory(request: DeviceActions.RetrieveDeviceProvisioningHistoryRequest, options?: RequestOptions): ApiPromise<GioRequestResponse, DeviceActions.RetrieveDeviceProvisioningHistoryError>`
- **Wire**: `POST /m2m/v2/devices/history/actions/list`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GioRequestResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DeviceActions.RetrieveDeviceProvisioningHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [default — any status no arm above covers] `GioRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `GioRestErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `DeviceActions.RetrieveDeviceProvisioningHistoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProvhistoryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProvhistoryRequest` | `provhistoryRequestSchema` | `src/models/provhistory-request.ts` |
| `GioRequestResponse` | `gioRequestResponseSchema` | `src/models/gio-request-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

### retrieveTheGlobalDeviceList

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `retrieveTheGlobalDeviceList(request: DeviceActions.RetrieveTheGlobalDeviceListRequest, options?: RequestOptions): ApiPromise<GioRequestResponse, DeviceActions.RetrieveTheGlobalDeviceListError>`
- **Wire**: `POST /m2m/v2/devices/actions/list`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GioRequestResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DeviceActions.RetrieveTheGlobalDeviceListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [default — any status no arm above covers] `GioRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `GioRestErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `DeviceActions.RetrieveTheGlobalDeviceListRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetDeviceListWithProfilesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDeviceListWithProfilesRequest` | `getDeviceListWithProfilesRequestSchema` | `src/models/get-device-list-with-profiles-request.ts` |
| `GioRequestResponse` | `gioRequestResponseSchema` | `src/models/gio-request-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

### servicePlanList

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `servicePlanList(request: DeviceActions.ServicePlanListRequest, options?: RequestOptions): ApiPromise<AccountDetails, DeviceActions.ServicePlanListError>`
- **Wire**: `GET /v1/plans/{accountName}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountDetails`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DeviceActions.ServicePlanListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [default — any status no arm above covers] `GioRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `GioRestErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `DeviceActions.ServicePlanListRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountDetails` | `accountDetailsSchema` | `src/models/account-details.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

