<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConnectivityCallbacks — operations

Accessor: `client.connectivityCallbacks` · Source: `src/resources/connectivity-callbacks.ts` · 3 operations · Request and error types: namespace `ConnectivityCallbacks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deregisterCallback

- **Signature**: `deregisterCallback(request: ConnectivityCallbacks.DeregisterCallbackRequest, options?: RequestOptions): ApiPromise<CallbackActionResult, ConnectivityCallbacks.DeregisterCallbackError>`
- **Wire**: `DELETE /m2m/v1/callbacks/{aname}/name/{sname}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CallbackActionResult`
- **Error**: `ConnectivityCallbacks.DeregisterCallbackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectivityCallbacks.DeregisterCallbackRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `aname` | `path` | `string` | yes |
| `sname` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CallbackActionResult` | `callbackActionResultSchema` | `src/models/callback-action-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### listRegisteredCallbacks

- **Signature**: `listRegisteredCallbacks(request: ConnectivityCallbacks.ListRegisteredCallbacksRequest, options?: RequestOptions): ApiPromise<ConnectivityManagementCallback[], ConnectivityCallbacks.ListRegisteredCallbacksError>`
- **Wire**: `GET /m2m/v1/callbacks/{aname}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectivityManagementCallback[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ConnectivityCallbacks.ListRegisteredCallbacksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectivityCallbacks.ListRegisteredCallbacksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `aname` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectivityManagementCallback` | `connectivityManagementCallbackSchema` | `src/models/connectivity-management-callback.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### registerCallback

- **Signature**: `registerCallback(request: ConnectivityCallbacks.RegisterCallbackRequestParams, options?: RequestOptions): ApiPromise<CallbackActionResult, ConnectivityCallbacks.RegisterCallbackError>`
- **Wire**: `POST /m2m/v1/callbacks/{aname}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CallbackActionResult`
- **Error**: `ConnectivityCallbacks.RegisterCallbackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConnectivityCallbacks.RegisterCallbackRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `aname` | `path` | `string` | yes |
| `body` | `body` | `RegisterCallbackRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RegisterCallbackRequest` | `registerCallbackRequestSchema` | `src/models/register-callback-request.ts` |
| `CallbackActionResult` | `callbackActionResultSchema` | `src/models/callback-action-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

