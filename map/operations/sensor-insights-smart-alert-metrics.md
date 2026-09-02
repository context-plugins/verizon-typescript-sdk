<!-- Generated file — do not edit; regenerated with the SDK. -->

# SensorInsightsSmartAlertMetrics — operations

Accessor: `client.sensorInsightsSmartAlertMetrics` · Source: `src/resources/sensor-insights-smart-alert-metrics.ts` · 1 operation · Request and error types: namespace `SensorInsightsSmartAlertMetrics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### sensorinsightsmetricsquery

- **Signature**: `sensorinsightsmetricsquery(request: SensorInsightsSmartAlertMetrics.SensorinsightsmetricsqueryRequest, options?: RequestOptions): ApiPromise<DtoQueryMetricsResponse, SensorInsightsSmartAlertMetrics.SensorinsightsmetricsqueryError>`
- **Wire**: `POST /dm/v1/smartAlerts/actions/metrics`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DtoQueryMetricsResponse`
- **Error**: `SensorInsightsSmartAlertMetrics.SensorinsightsmetricsqueryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError500"` [500] `ManagementError500` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsSmartAlertMetrics.SensorinsightsmetricsqueryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoQueryMetrics` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoQueryMetrics` | `dtoQueryMetricsSchema` | `src/models/dto-query-metrics.ts` |
| `DtoQueryMetricsResponse` | `dtoQueryMetricsResponseSchema` | `src/models/dto-query-metrics-response.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

