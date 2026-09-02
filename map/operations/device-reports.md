<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeviceReports — operations

Accessor: `client.deviceReports` · Source: `src/resources/device-reports.ts` · 3 operations · Request and error types: namespace `DeviceReports`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### calculateAggregatedReportAsynchronous

- **Server**: `hyperPreciseLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `calculateAggregatedReportAsynchronous(request: DeviceReports.CalculateAggregatedReportAsynchronousRequest, options?: RequestOptions): ApiPromise<AggregatedReportCallbackResult, DeviceReports.CalculateAggregatedReportAsynchronousError>`
- **Wire**: `POST /report/async/aggregate`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AggregatedReportCallbackResult`
- **Error**: `DeviceReports.CalculateAggregatedReportAsynchronousError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"hyperPreciseLocationResult"` [400] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult2"` [401] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult3"` [403] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult4"` [404] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult5"` [409] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult6"` [500] `HyperPreciseLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceReports.CalculateAggregatedReportAsynchronousRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AggregateSessionReportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AggregateSessionReportRequest` | `aggregateSessionReportRequestSchema` | `src/models/aggregate-session-report-request.ts` |
| `AggregatedReportCallbackResult` | `aggregatedReportCallbackResultSchema` | `src/models/aggregated-report-callback-result.ts` |
| `HyperPreciseLocationResult` | `hyperPreciseLocationResultSchema` | `src/models/hyper-precise-location-result.ts` |

### calculateAggregatedReportSynchronous

- **Server**: `hyperPreciseLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `calculateAggregatedReportSynchronous(request: DeviceReports.CalculateAggregatedReportSynchronousRequest, options?: RequestOptions): ApiPromise<AggregateSessionReport, DeviceReports.CalculateAggregatedReportSynchronousError>`
- **Wire**: `POST /report/aggregate`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AggregateSessionReport`
- **Error**: `DeviceReports.CalculateAggregatedReportSynchronousError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"hyperPreciseLocationResult"` [400] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult2"` [401] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult3"` [403] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult4"` [404] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult5"` [409] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult6"` [500] `HyperPreciseLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceReports.CalculateAggregatedReportSynchronousRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AggregateSessionReportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AggregateSessionReportRequest` | `aggregateSessionReportRequestSchema` | `src/models/aggregate-session-report-request.ts` |
| `AggregateSessionReport` | `aggregateSessionReportSchema` | `src/models/aggregate-session-report.ts` |
| `HyperPreciseLocationResult` | `hyperPreciseLocationResultSchema` | `src/models/hyper-precise-location-result.ts` |

### getSessionsReport

- **Server**: `hyperPreciseLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getSessionsReport(request: DeviceReports.GetSessionsReportRequest, options?: RequestOptions): ApiPromise<SessionReport, DeviceReports.GetSessionsReportError>`
- **Wire**: `POST /report/sessions`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SessionReport`
- **Error**: `DeviceReports.GetSessionsReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"hyperPreciseLocationResult"` [400] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult2"` [401] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult3"` [403] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult4"` [404] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult5"` [409] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult6"` [500] `HyperPreciseLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceReports.GetSessionsReportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SessionReportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionReportRequest` | `sessionReportRequestSchema` | `src/models/session-report-request.ts` |
| `SessionReport` | `sessionReportSchema` | `src/models/session-report.ts` |
| `HyperPreciseLocationResult` | `hyperPreciseLocationResultSchema` | `src/models/hyper-precise-location-result.ts` |

