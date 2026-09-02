<!-- Generated file — do not edit; regenerated with the SDK. -->

# WirelessNetworkPerformance — operations

Accessor: `client.wirelessNetworkPerformance` · Source: `src/resources/wireless-network-performance.ts` · 5 operations · Request and error types: namespace `WirelessNetworkPerformance`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deviceExperience30DaysHistory

- **Signature**: `deviceExperience30DaysHistory(request: WirelessNetworkPerformance.DeviceExperience30DaysHistoryRequest, options?: RequestOptions): ApiPromise<WnpRequestResponse, WirelessNetworkPerformance.DeviceExperience30DaysHistoryError>`
- **Wire**: `POST /m2m/v1/intelligence/device-experience/history/30-days`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `WnpRequestResponse`
- **Error**: `WirelessNetworkPerformance.DeviceExperience30DaysHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"wnpRestErrorResponse"` [400–599] `WnpRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WirelessNetworkPerformance.DeviceExperience30DaysHistoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetDeviceExperienceScoreHistoryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDeviceExperienceScoreHistoryRequest` | `getDeviceExperienceScoreHistoryRequestSchema` | `src/models/get-device-experience-score-history-request.ts` |
| `WnpRequestResponse` | `wnpRequestResponseSchema` | `src/models/wnp-request-response.ts` |
| `WnpRestErrorResponse` | `wnpRestErrorResponseSchema` | `src/models/wnp-rest-error-response.ts` |

### deviceExperienceBulkLatest

- **Signature**: `deviceExperienceBulkLatest(request: WirelessNetworkPerformance.DeviceExperienceBulkLatestRequest, options?: RequestOptions): ApiPromise<WnpRequestResponse, WirelessNetworkPerformance.DeviceExperienceBulkLatestError>`
- **Wire**: `POST /m2m/v1/intelligence/device-experience/bulk/latest`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `WnpRequestResponse`
- **Error**: `WirelessNetworkPerformance.DeviceExperienceBulkLatestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"wnpRestErrorResponse"` [400–599] `WnpRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WirelessNetworkPerformance.DeviceExperienceBulkLatestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetDeviceExperienceScoreBulkRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDeviceExperienceScoreBulkRequest` | `getDeviceExperienceScoreBulkRequestSchema` | `src/models/get-device-experience-score-bulk-request.ts` |
| `WnpRequestResponse` | `wnpRequestResponseSchema` | `src/models/wnp-request-response.ts` |
| `WnpRestErrorResponse` | `wnpRestErrorResponseSchema` | `src/models/wnp-rest-error-response.ts` |

### domestic4GAnd5GNationwideNetworkCoverage

- **Signature**: `domestic4GAnd5GNationwideNetworkCoverage(request: WirelessNetworkPerformance.Domestic4GAnd5GNationwideNetworkCoverageRequest, options?: RequestOptions): ApiPromise<WnpRequestResponse, WirelessNetworkPerformance.Domestic4GAnd5GNationwideNetworkCoverageError>`
- **Wire**: `POST /m2m/v1/intelligence/wireless-coverage`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `WnpRequestResponse`
- **Error**: `WirelessNetworkPerformance.Domestic4GAnd5GNationwideNetworkCoverageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"wnpRestErrorResponse"` [400–599] `WnpRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WirelessNetworkPerformance.Domestic4GAnd5GNationwideNetworkCoverageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `M2MV1IntelligenceWirelessCoverageRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `M2MV1IntelligenceWirelessCoverageRequest` | `m2Mv1IntelligenceWirelessCoverageRequestSchema` | `src/models/unions/m2-mv1-intelligence-wireless-coverage-request.ts` |
| `WnpRequestResponse` | `wnpRequestResponseSchema` | `src/models/wnp-request-response.ts` |
| `WnpRestErrorResponse` | `wnpRestErrorResponseSchema` | `src/models/wnp-rest-error-response.ts` |

### nearRealTimeNetworkConditions

- **Signature**: `nearRealTimeNetworkConditions(request: WirelessNetworkPerformance.NearRealTimeNetworkConditionsRequest, options?: RequestOptions): ApiPromise<WnpRequestResponse, WirelessNetworkPerformance.NearRealTimeNetworkConditionsError>`
- **Wire**: `POST /m2m/v1/intelligence/network-conditions`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `WnpRequestResponse`
- **Error**: `WirelessNetworkPerformance.NearRealTimeNetworkConditionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"wnpRestErrorResponse"` [400–599] `WnpRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WirelessNetworkPerformance.NearRealTimeNetworkConditionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetNetworkConditionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetNetworkConditionsRequest` | `getNetworkConditionsRequestSchema` | `src/models/get-network-conditions-request.ts` |
| `WnpRequestResponse` | `wnpRequestResponseSchema` | `src/models/wnp-request-response.ts` |
| `WnpRestErrorResponse` | `wnpRestErrorResponseSchema` | `src/models/wnp-rest-error-response.ts` |

### siteProximity

- **Signature**: `siteProximity(request: WirelessNetworkPerformance.SiteProximityRequest, options?: RequestOptions): ApiPromise<WnpRequestResponse, WirelessNetworkPerformance.SiteProximityError>`
- **Wire**: `POST /m2m/v1/intelligence/site-proximity/action/list`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `WnpRequestResponse`
- **Error**: `WirelessNetworkPerformance.SiteProximityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"wnpRestErrorResponse"` [400–599] `WnpRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WirelessNetworkPerformance.SiteProximityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetNetworkConditionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetNetworkConditionsRequest` | `getNetworkConditionsRequestSchema` | `src/models/get-network-conditions-request.ts` |
| `WnpRequestResponse` | `wnpRequestResponseSchema` | `src/models/wnp-request-response.ts` |
| `WnpRestErrorResponse` | `wnpRestErrorResponseSchema` | `src/models/wnp-rest-error-response.ts` |

