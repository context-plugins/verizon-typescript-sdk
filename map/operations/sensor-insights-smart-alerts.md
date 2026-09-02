<!-- Generated file — do not edit; regenerated with the SDK. -->

# SensorInsightsSmartAlerts — operations

Accessor: `client.sensorInsightsSmartAlerts` · Source: `src/resources/sensor-insights-smart-alerts.ts` · 3 operations · Request and error types: namespace `SensorInsightsSmartAlerts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### sensorInsightsBulkUpdate

- **Signature**: `sensorInsightsBulkUpdate(request: SensorInsightsSmartAlerts.SensorInsightsBulkUpdateRequest, options?: RequestOptions): ApiPromise<UserSmartAlert, SensorInsightsSmartAlerts.SensorInsightsBulkUpdateError>`
- **Wire**: `POST /dm/v1/smartAlerts/actions/bulkupdate`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UserSmartAlert`
- **Error**: `SensorInsightsSmartAlerts.SensorInsightsBulkUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [400–599] `ManagementError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsSmartAlerts.SensorInsightsBulkUpdateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoBulkUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoBulkUpdate` | `dtoBulkUpdateSchema` | `src/models/dto-bulk-update.ts` |
| `UserSmartAlert` | `userSmartAlertSchema` | `src/models/user-smart-alert.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

### sensorInsightsListSmartAlertsRequest

- **Signature**: `sensorInsightsListSmartAlertsRequest(request: SensorInsightsSmartAlerts.SensorInsightsListSmartAlertsRequestRequest, options?: RequestOptions): ApiPromise<UserSmartAlert[], SensorInsightsSmartAlerts.SensorInsightsListSmartAlertsRequestError>`
- **Wire**: `POST /dm/v1/smartAlerts/actions/query`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UserSmartAlert[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SensorInsightsSmartAlerts.SensorInsightsListSmartAlertsRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [400–599] `ManagementError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsSmartAlerts.SensorInsightsListSmartAlertsRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoListSmartAlertsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoListSmartAlertsRequest` | `dtoListSmartAlertsRequestSchema` | `src/models/dto-list-smart-alerts-request.ts` |
| `UserSmartAlert` | `userSmartAlertSchema` | `src/models/user-smart-alert.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

### sensorInsightsPatchSmartAlertRequest

- **Signature**: `sensorInsightsPatchSmartAlertRequest(request: SensorInsightsSmartAlerts.SensorInsightsPatchSmartAlertRequestRequest, options?: RequestOptions): ApiPromise<UserSmartAlert, SensorInsightsSmartAlerts.SensorInsightsPatchSmartAlertRequestError>`
- **Wire**: `PATCH /dm/v1/smartAlerts`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UserSmartAlert`
- **Error**: `SensorInsightsSmartAlerts.SensorInsightsPatchSmartAlertRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [400–599] `ManagementError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsSmartAlerts.SensorInsightsPatchSmartAlertRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoPatchSmartAlertRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoPatchSmartAlertRequest` | `dtoPatchSmartAlertRequestSchema` | `src/models/dto-patch-smart-alert-request.ts` |
| `UserSmartAlert` | `userSmartAlertSchema` | `src/models/user-smart-alert.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

