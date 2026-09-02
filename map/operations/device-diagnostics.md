<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeviceDiagnostics — operations

Accessor: `client.deviceDiagnostics` · Source: `src/resources/device-diagnostics.ts` · 2 operations · Request and error types: namespace `DeviceDiagnostics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deviceReachabilityStatusUsingPost

- **Signature**: `deviceReachabilityStatusUsingPost(request: DeviceDiagnostics.DeviceReachabilityStatusUsingPostRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceDiagnostics.DeviceReachabilityStatusUsingPostError>`
- **Wire**: `POST /m2m/v1/diagnostics/basic/devicereachability/status`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceDiagnostics.DeviceReachabilityStatusUsingPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceDiagnostics.DeviceReachabilityStatusUsingPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `NotificationReportStatusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationReportStatusRequest` | `notificationReportStatusRequestSchema` | `src/models/notification-report-status-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### retrieveActiveMonitorsUsingPost

- **Signature**: `retrieveActiveMonitorsUsingPost(request: DeviceDiagnostics.RetrieveActiveMonitorsUsingPostRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceDiagnostics.RetrieveActiveMonitorsUsingPostError>`
- **Wire**: `POST /m2m/v1/diagnostics/basic/devicereachability/monitors`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceDiagnostics.RetrieveActiveMonitorsUsingPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceDiagnostics.RetrieveActiveMonitorsUsingPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RetrieveMonitorsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveMonitorsRequest` | `retrieveMonitorsRequestSchema` | `src/models/retrieve-monitors-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

