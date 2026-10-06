<!-- Generated file — do not edit; regenerated with the SDK. -->

# DiagnosticsSubscriptions — operations

Accessor: `client.diagnosticsSubscriptions` · Source: `src/resources/diagnostics-subscriptions.ts` · 1 operation · Request and error types: namespace `DiagnosticsSubscriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getDiagnosticsSubscription

- **Server**: `deviceDiagnostics` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getDiagnosticsSubscription(request: DiagnosticsSubscriptions.GetDiagnosticsSubscriptionRequest, options?: RequestOptions): ApiPromise<DiagnosticsSubscription, DiagnosticsSubscriptions.GetDiagnosticsSubscriptionError>`
- **Wire**: `GET /subscriptions`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DiagnosticsSubscription`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DiagnosticsSubscriptions.GetDiagnosticsSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceDiagnosticsResult"` [default — any status no arm above covers] `DeviceDiagnosticsResult` · `"undeclared"` [a `default`-matched body that did not fit `DeviceDiagnosticsResult`] `rawBody: ArrayBuffer`

**Fields** — `DiagnosticsSubscriptions.GetDiagnosticsSubscriptionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DiagnosticsSubscription` | `diagnosticsSubscriptionSchema` | `src/models/diagnostics-subscription.ts` |
| `DeviceDiagnosticsResult` | `deviceDiagnosticsResultSchema` | `src/models/device-diagnostics-result.ts` |

