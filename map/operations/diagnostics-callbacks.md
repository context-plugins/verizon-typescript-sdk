<!-- Generated file — do not edit; regenerated with the SDK. -->

# DiagnosticsCallbacks — operations

Accessor: `client.diagnosticsCallbacks` · Source: `src/resources/diagnostics-callbacks.ts` · 3 operations · Request and error types: namespace `DiagnosticsCallbacks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getDiagnosticsSubscriptionCallbackInfo

- **Server**: `deviceDiagnostics` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getDiagnosticsSubscriptionCallbackInfo(request: DiagnosticsCallbacks.GetDiagnosticsSubscriptionCallbackInfoRequest, options?: RequestOptions): ApiPromise<DeviceDiagnosticsCallback[], DiagnosticsCallbacks.GetDiagnosticsSubscriptionCallbackInfoError>`
- **Wire**: `GET /callbacks`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceDiagnosticsCallback[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DiagnosticsCallbacks.GetDiagnosticsSubscriptionCallbackInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceDiagnosticsResult"` [400] `DeviceDiagnosticsResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DiagnosticsCallbacks.GetDiagnosticsSubscriptionCallbackInfoRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceDiagnosticsCallback` | `deviceDiagnosticsCallbackSchema` | `src/models/device-diagnostics-callback.ts` |
| `DeviceDiagnosticsResult` | `deviceDiagnosticsResultSchema` | `src/models/device-diagnostics-result.ts` |

### registerDiagnosticsCallbackUrl

- **Server**: `deviceDiagnostics` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `registerDiagnosticsCallbackUrl(options?: RequestOptions): ApiPromise<DeviceDiagnosticsCallback, DiagnosticsCallbacks.RegisterDiagnosticsCallbackUrlError>`
- **Wire**: `POST /callbacks`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceDiagnosticsCallback`
- **Error**: `DiagnosticsCallbacks.RegisterDiagnosticsCallbackUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceDiagnosticsResult"` [400] `DeviceDiagnosticsResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceDiagnosticsCallback` | `deviceDiagnosticsCallbackSchema` | `src/models/device-diagnostics-callback.ts` |
| `DeviceDiagnosticsResult` | `deviceDiagnosticsResultSchema` | `src/models/device-diagnostics-result.ts` |

### unregisterDiagnosticsCallback

- **Server**: `deviceDiagnostics` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `unregisterDiagnosticsCallback(request: DiagnosticsCallbacks.UnregisterDiagnosticsCallbackRequest, options?: RequestOptions): ApiPromise<DeviceDiagnosticsCallback, DiagnosticsCallbacks.UnregisterDiagnosticsCallbackError>`
- **Wire**: `DELETE /callbacks`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceDiagnosticsCallback`
- **Error**: `DiagnosticsCallbacks.UnregisterDiagnosticsCallbackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceDiagnosticsResult"` [400] `DeviceDiagnosticsResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DiagnosticsCallbacks.UnregisterDiagnosticsCallbackRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `query` | `string` | yes |
| `serviceName` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceDiagnosticsCallback` | `deviceDiagnosticsCallbackSchema` | `src/models/device-diagnostics-callback.ts` |
| `DeviceDiagnosticsResult` | `deviceDiagnosticsResultSchema` | `src/models/device-diagnostics-result.ts` |

