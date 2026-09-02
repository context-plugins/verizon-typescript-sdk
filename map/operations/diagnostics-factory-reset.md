<!-- Generated file — do not edit; regenerated with the SDK. -->

# DiagnosticsFactoryReset — operations

Accessor: `client.diagnosticsFactoryReset` · Source: `src/resources/diagnostics-factory-reset.ts` · 1 operation · Request and error types: namespace `DiagnosticsFactoryReset`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### decivesRestart

- **Server**: `deviceDiagnostics` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `decivesRestart(request: DiagnosticsFactoryReset.DecivesRestartRequest, options?: RequestOptions): ApiPromise<DiagnosticsObservationResult, DiagnosticsFactoryReset.DecivesRestartError>`
- **Wire**: `POST /devices/actions/restart`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DiagnosticsObservationResult`
- **Error**: `DiagnosticsFactoryReset.DecivesRestartError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceDiagnosticsResult"` [400–599] `DeviceDiagnosticsResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DiagnosticsFactoryReset.DecivesRestartRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeviceResetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceResetRequest` | `deviceResetRequestSchema` | `src/models/device-reset-request.ts` |
| `DiagnosticsObservationResult` | `diagnosticsObservationResultSchema` | `src/models/diagnostics-observation-result.ts` |
| `DeviceDiagnosticsResult` | `deviceDiagnosticsResultSchema` | `src/models/device-diagnostics-result.ts` |

