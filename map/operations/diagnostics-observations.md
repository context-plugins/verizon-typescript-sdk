<!-- Generated file — do not edit; regenerated with the SDK. -->

# DiagnosticsObservations — operations

Accessor: `client.diagnosticsObservations` · Source: `src/resources/diagnostics-observations.ts` · 2 operations · Request and error types: namespace `DiagnosticsObservations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### startDiagnosticsObservation

- **Server**: `deviceDiagnostics` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `startDiagnosticsObservation(options?: RequestOptions): ApiPromise<DiagnosticsObservationResult, DiagnosticsObservations.StartDiagnosticsObservationError>`
- **Wire**: `POST /devices/attributes/actions/observe`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DiagnosticsObservationResult`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DiagnosticsObservations.StartDiagnosticsObservationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceDiagnosticsResult"` [default — any status no arm above covers] `DeviceDiagnosticsResult` · `"undeclared"` [a `default`-matched body that did not fit `DeviceDiagnosticsResult`] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DiagnosticsObservationResult` | `diagnosticsObservationResultSchema` | `src/models/diagnostics-observation-result.ts` |
| `DeviceDiagnosticsResult` | `deviceDiagnosticsResultSchema` | `src/models/device-diagnostics-result.ts` |

### stopDiagnosticsObservation

- **Server**: `deviceDiagnostics` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `stopDiagnosticsObservation(request: DiagnosticsObservations.StopDiagnosticsObservationRequest, options?: RequestOptions): ApiPromise<DiagnosticsObservationResult, DiagnosticsObservations.StopDiagnosticsObservationError>`
- **Wire**: `DELETE /devices/attributes/actions/observe`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DiagnosticsObservationResult`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DiagnosticsObservations.StopDiagnosticsObservationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceDiagnosticsResult"` [default — any status no arm above covers] `DeviceDiagnosticsResult` · `"undeclared"` [a `default`-matched body that did not fit `DeviceDiagnosticsResult`] `rawBody: ArrayBuffer`

**Fields** — `DiagnosticsObservations.StopDiagnosticsObservationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transactionId` | `query` | `string` | yes |
| `accountName` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DiagnosticsObservationResult` | `diagnosticsObservationResultSchema` | `src/models/diagnostics-observation-result.ts` |
| `DeviceDiagnosticsResult` | `deviceDiagnosticsResultSchema` | `src/models/device-diagnostics-result.ts` |

