<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeviceMonitoring — operations

Accessor: `client.deviceMonitoring` · Source: `src/resources/device-monitoring.ts` · 2 operations · Request and error types: namespace `DeviceMonitoring`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deviceReachability

- **Signature**: `deviceReachability(request: DeviceMonitoring.DeviceReachabilityRequest, options?: RequestOptions): ApiPromise<RequestResponse, DeviceMonitoring.DeviceReachabilityError>`
- **Wire**: `POST /m2m/v1/diagnostics/basic/devicereachability`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RequestResponse`
- **Error**: `DeviceMonitoring.DeviceReachabilityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restErrorResponse"` [400] `RestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceMonitoring.DeviceReachabilityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `NotificationReportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationReportRequest` | `notificationReportRequestSchema` | `src/models/notification-report-request.ts` |
| `RequestResponse` | `requestResponseSchema` | `src/models/request-response.ts` |
| `RestErrorResponse` | `restErrorResponseSchema` | `src/models/rest-error-response.ts` |

### stopDeviceReachability

- **Signature**: `stopDeviceReachability(request: DeviceMonitoring.StopDeviceReachabilityRequest, options?: RequestOptions): ApiPromise<RequestResponse, DeviceMonitoring.StopDeviceReachabilityError>`
- **Wire**: `DELETE /m2m/v1/diagnostics/basic/devicereachability`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RequestResponse`
- **Error**: `DeviceMonitoring.StopDeviceReachabilityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restErrorResponse"` [400] `RestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceMonitoring.StopDeviceReachabilityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `stopreachabilitypayload` | `query` | `StopMonitorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StopMonitorRequest` | `stopMonitorRequestSchema` | `src/models/stop-monitor-request.ts` |
| `RequestResponse` | `requestResponseSchema` | `src/models/request-response.ts` |
| `RestErrorResponse` | `restErrorResponseSchema` | `src/models/rest-error-response.ts` |

