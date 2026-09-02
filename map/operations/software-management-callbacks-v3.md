<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoftwareManagementCallbacksV3 — operations

Accessor: `client.softwareManagementCallbacksV3` · Source: `src/resources/software-management-callbacks-v3.ts` · 4 operations · Request and error types: namespace `SoftwareManagementCallbacksV3`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deregisterCallback5

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `deregisterCallback5(request: SoftwareManagementCallbacksV3.DeregisterCallback5Request, options?: RequestOptions): ApiPromise<FotaV3SuccessResult, SoftwareManagementCallbacksV3.DeregisterCallback5Error>`
- **Wire**: `DELETE /callbacks/{acc}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FotaV3SuccessResult`
- **Error**: `SoftwareManagementCallbacksV3.DeregisterCallback5Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementCallbacksV3.DeregisterCallback5Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FotaV3SuccessResult` | `fotaV3SuccessResultSchema` | `src/models/fota-v3-success-result.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

### listRegisteredCallbacks5

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listRegisteredCallbacks5(request: SoftwareManagementCallbacksV3.ListRegisteredCallbacks5Request, options?: RequestOptions): ApiPromise<FotaV3CallbackSummary, SoftwareManagementCallbacksV3.ListRegisteredCallbacks5Error>`
- **Wire**: `GET /callbacks/{acc}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FotaV3CallbackSummary`
- **Error**: `SoftwareManagementCallbacksV3.ListRegisteredCallbacks5Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementCallbacksV3.ListRegisteredCallbacks5Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FotaV3CallbackSummary` | `fotaV3CallbackSummarySchema` | `src/models/fota-v3-callback-summary.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

### registerCallback5

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `registerCallback5(request: SoftwareManagementCallbacksV3.RegisterCallback5Request, options?: RequestOptions): ApiPromise<FotaV3CallbackRegistrationResult, SoftwareManagementCallbacksV3.RegisterCallback5Error>`
- **Wire**: `POST /callbacks/{acc}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `FotaV3CallbackRegistrationResult`
- **Error**: `SoftwareManagementCallbacksV3.RegisterCallback5Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementCallbacksV3.RegisterCallback5Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |
| `body` | `body` | `FotaV3CallbackRegistrationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FotaV3CallbackRegistrationRequest` | `fotaV3CallbackRegistrationRequestSchema` | `src/models/fota-v3-callback-registration-request.ts` |
| `FotaV3CallbackRegistrationResult` | `fotaV3CallbackRegistrationResultSchema` | `src/models/fota-v3-callback-registration-result.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

### updateCallback2

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `updateCallback2(request: SoftwareManagementCallbacksV3.UpdateCallback2Request, options?: RequestOptions): ApiPromise<FotaV3CallbackRegistrationResult, SoftwareManagementCallbacksV3.UpdateCallback2Error>`
- **Wire**: `PUT /callbacks/{acc}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `FotaV3CallbackRegistrationResult`
- **Error**: `SoftwareManagementCallbacksV3.UpdateCallback2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementCallbacksV3.UpdateCallback2Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |
| `body` | `body` | `FotaV3CallbackRegistrationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FotaV3CallbackRegistrationRequest` | `fotaV3CallbackRegistrationRequestSchema` | `src/models/fota-v3-callback-registration-request.ts` |
| `FotaV3CallbackRegistrationResult` | `fotaV3CallbackRegistrationResultSchema` | `src/models/fota-v3-callback-registration-result.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

