<!-- Generated file — do not edit; regenerated with the SDK. -->

# DiagnosticsSettings — operations

Accessor: `client.diagnosticsSettings` · Source: `src/resources/diagnostics-settings.ts` · 1 operation · Request and error types: namespace `DiagnosticsSettings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listDiagnosticsSettings

- **Server**: `deviceDiagnostics` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listDiagnosticsSettings(request: DiagnosticsSettings.ListDiagnosticsSettingsRequest, options?: RequestOptions): ApiPromise<DiagnosticObservationSetting[], DiagnosticsSettings.ListDiagnosticsSettingsError>`
- **Wire**: `GET /devices/settings`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DiagnosticObservationSetting[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DiagnosticsSettings.ListDiagnosticsSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceDiagnosticsResult"` [400–599] `DeviceDiagnosticsResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DiagnosticsSettings.ListDiagnosticsSettingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `query` | `string` | yes |
| `devices` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DiagnosticObservationSetting` | `diagnosticObservationSettingSchema` | `src/models/diagnostic-observation-setting.ts` |
| `DeviceDiagnosticsResult` | `deviceDiagnosticsResultSchema` | `src/models/device-diagnostics-result.ts` |

