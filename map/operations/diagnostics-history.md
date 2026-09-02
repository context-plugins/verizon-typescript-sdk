<!-- Generated file — do not edit; regenerated with the SDK. -->

# DiagnosticsHistory — operations

Accessor: `client.diagnosticsHistory` · Source: `src/resources/diagnostics-history.ts` · 1 operation · Request and error types: namespace `DiagnosticsHistory`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getDiagnosticsHistory

- **Server**: `deviceDiagnostics` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getDiagnosticsHistory(options?: RequestOptions): ApiPromise<History[], DiagnosticsHistory.GetDiagnosticsHistoryError>`
- **Wire**: `POST /history/actions/$search`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `History[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DiagnosticsHistory.GetDiagnosticsHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceDiagnosticsResult"` [400–599] `DeviceDiagnosticsResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `History` | `historySchema` | `src/models/history.ts` |
| `DeviceDiagnosticsResult` | `deviceDiagnosticsResultSchema` | `src/models/device-diagnostics-result.ts` |

