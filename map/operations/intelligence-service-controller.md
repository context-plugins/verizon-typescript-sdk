<!-- Generated file — do not edit; regenerated with the SDK. -->

# IntelligenceServiceController — operations

Accessor: `client.intelligenceServiceController` · Source: `src/resources/intelligence-service-controller.ts` · 2 operations · Request and error types: namespace `IntelligenceServiceController`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### setConnectionPlanner

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `setConnectionPlanner(request: IntelligenceServiceController.SetConnectionPlannerRequest, options?: RequestOptions): ApiPromise<AsynchronousRequestResultforplanner, IntelligenceServiceController.SetConnectionPlannerError>`
- **Wire**: `POST /v1/intelligence/device/connection-planner`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AsynchronousRequestResultforplanner`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `IntelligenceServiceController.SetConnectionPlannerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restErrorResponseforplanner"` [400] `RestErrorResponseforplanner` · `"authRestErrorResponseforplanner"` [401] `AuthRestErrorResponseforplanner` · `"restErrorResponseforplanner2"` [403] `RestErrorResponseforplanner` · `"restErrorResponseforplanner3"` [404] `RestErrorResponseforplanner` · `"restErrorResponseforplanner4"` [406] `RestErrorResponseforplanner` · `"restErrorResponseforplanner5"` [429] `RestErrorResponseforplanner` · `"restErrorResponseforplanner6"` [default — any status no arm above covers] `RestErrorResponseforplanner` · `"undeclared"` [a `default`-matched body that did not fit `RestErrorResponseforplanner`] `rawBody: ArrayBuffer`

**Fields** — `IntelligenceServiceController.SetConnectionPlannerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetDevicesWindowsRequestforplanner` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDevicesWindowsRequestforplanner` | `getDevicesWindowsRequestforplannerSchema` | `src/models/get-devices-windows-requestforplanner.ts` |
| `AsynchronousRequestResultforplanner` | `asynchronousRequestResultforplannerSchema` | `src/models/asynchronous-request-resultforplanner.ts` |
| `RestErrorResponseforplanner` | `restErrorResponseforplannerSchema` | `src/models/rest-error-responseforplanner.ts` |
| `AuthRestErrorResponseforplanner` | `authRestErrorResponseforplannerSchema` | `src/models/auth-rest-error-responseforplanner.ts` |

### statusConnectionPlanner

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `statusConnectionPlanner(request: IntelligenceServiceController.StatusConnectionPlannerRequest, options?: RequestOptions): ApiPromise<GetDeviceStatusesResponseforplanner, IntelligenceServiceController.StatusConnectionPlannerError>`
- **Wire**: `POST /v1/intelligence/device/connection-planner/status`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetDeviceStatusesResponseforplanner`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `IntelligenceServiceController.StatusConnectionPlannerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restErrorResponseforplanner"` [400] `RestErrorResponseforplanner` · `"authRestErrorResponseforplanner"` [401] `AuthRestErrorResponseforplanner` · `"restErrorResponseforplanner2"` [403] `RestErrorResponseforplanner` · `"restErrorResponseforplanner3"` [404] `RestErrorResponseforplanner` · `"restErrorResponseforplanner4"` [406] `RestErrorResponseforplanner` · `"restErrorResponseforplanner5"` [429] `RestErrorResponseforplanner` · `"restErrorResponseforplanner6"` [default — any status no arm above covers] `RestErrorResponseforplanner` · `"undeclared"` [a `default`-matched body that did not fit `RestErrorResponseforplanner`] `rawBody: ArrayBuffer`

**Fields** — `IntelligenceServiceController.StatusConnectionPlannerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetDeviceStatusesRequestforplanner` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDeviceStatusesRequestforplanner` | `getDeviceStatusesRequestforplannerSchema` | `src/models/get-device-statuses-requestforplanner.ts` |
| `GetDeviceStatusesResponseforplanner` | `getDeviceStatusesResponseforplannerSchema` | `src/models/get-device-statuses-responseforplanner.ts` |
| `RestErrorResponseforplanner` | `restErrorResponseforplannerSchema` | `src/models/rest-error-responseforplanner.ts` |
| `AuthRestErrorResponseforplanner` | `authRestErrorResponseforplannerSchema` | `src/models/auth-rest-error-responseforplanner.ts` |

