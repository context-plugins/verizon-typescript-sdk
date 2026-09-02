<!-- Generated file — do not edit; regenerated with the SDK. -->

# SimSecureForIoTLicenses — operations

Accessor: `client.simSecureForIoTLicenses` · Source: `src/resources/sim-secure-for-io-tlicenses.ts` · 2 operations · Request and error types: namespace `SimSecureForIoTLicenses`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### assignLicenseToDevices

- **Server**: `m2M` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `assignLicenseToDevices(request: SimSecureForIoTLicenses.AssignLicenseToDevicesRequest, options?: RequestOptions): ApiPromise<SecuritySuccessResult, SimSecureForIoTLicenses.AssignLicenseToDevicesError>`
- **Wire**: `POST /v1/devices/license/actions/assign`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SecuritySuccessResult`
- **Error**: `SimSecureForIoTLicenses.AssignLicenseToDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"securityResult"` [400] `SecurityResult` · `"securityResult2"` [401] `SecurityResult` · `"securityResult3"` [403] `SecurityResult` · `"securityResult4"` [404] `SecurityResult` · `"securityResult5"` [406] `SecurityResult` · `"securityResult6"` [429] `SecurityResult` · `"securityResult7"` [400–599] `SecurityResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimSecureForIoTLicenses.AssignLicenseToDevicesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xRequestId` | `header` | `X-Request-ID` | `string` | no |
| `body` | `body` | — | `AssignLicenseRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssignLicenseRequest` | `assignLicenseRequestSchema` | `src/models/assign-license-request.ts` |
| `SecuritySuccessResult` | `securitySuccessResultSchema` | `src/models/security-success-result.ts` |
| `SecurityResult` | `securityResultSchema` | `src/models/security-result.ts` |

### unassignLicenseToDevices

- **Server**: `m2M` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `unassignLicenseToDevices(request: SimSecureForIoTLicenses.UnassignLicenseToDevicesRequest, options?: RequestOptions): ApiPromise<SecuritySuccessResult, SimSecureForIoTLicenses.UnassignLicenseToDevicesError>`
- **Wire**: `DELETE /v1/devices/license/actions/assign`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SecuritySuccessResult`
- **Error**: `SimSecureForIoTLicenses.UnassignLicenseToDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"securityResult"` [400] `SecurityResult` · `"securityResult2"` [401] `SecurityResult` · `"securityResult3"` [403] `SecurityResult` · `"securityResult4"` [404] `SecurityResult` · `"securityResult5"` [406] `SecurityResult` · `"securityResult6"` [429] `SecurityResult` · `"securityResult7"` [400–599] `SecurityResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SimSecureForIoTLicenses.UnassignLicenseToDevicesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xRequestId` | `header` | `X-Request-ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SecuritySuccessResult` | `securitySuccessResultSchema` | `src/models/security-success-result.ts` |
| `SecurityResult` | `securityResultSchema` | `src/models/security-result.ts` |

