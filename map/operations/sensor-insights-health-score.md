<!-- Generated file — do not edit; regenerated with the SDK. -->

# SensorInsightsHealthScore — operations

Accessor: `client.sensorInsightsHealthScore` · Source: `src/resources/sensor-insights-health-score.ts` · 2 operations · Request and error types: namespace `SensorInsightsHealthScore`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### sensorInsightsGetNetworkHealthScoreResponse

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `sensorInsightsGetNetworkHealthScoreResponse(options?: RequestOptions): ApiPromise<DtoGetNetworkHealthScoreResponse, SensorInsightsHealthScore.SensorInsightsGetNetworkHealthScoreResponseError>`
- **Wire**: `POST /dm/v1/healthscore/network`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DtoGetNetworkHealthScoreResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `SensorInsightsHealthScore.SensorInsightsGetNetworkHealthScoreResponseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [default — any status no arm above covers] `ManagementError` · `"undeclared"` [a `default`-matched body that did not fit `ManagementError`] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoGetNetworkHealthScoreResponse` | `dtoGetNetworkHealthScoreResponseSchema` | `src/models/dto-get-network-health-score-response.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

### sensorInsightsHealthScoreSummary

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `sensorInsightsHealthScoreSummary(options?: RequestOptions): ApiPromise<DtoHealthScoreSummary, SensorInsightsHealthScore.SensorInsightsHealthScoreSummaryError>`
- **Wire**: `POST /dm/v1/healthscore/summary`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DtoHealthScoreSummary`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `SensorInsightsHealthScore.SensorInsightsHealthScoreSummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [default — any status no arm above covers] `ManagementError` · `"undeclared"` [a `default`-matched body that did not fit `ManagementError`] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoHealthScoreSummary` | `dtoHealthScoreSummarySchema` | `src/models/dto-health-score-summary.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

