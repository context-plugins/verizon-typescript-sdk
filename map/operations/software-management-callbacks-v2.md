<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoftwareManagementCallbacksV2 — operations

Accessor: `client.softwareManagementCallbacksV2` · Source: `src/resources/software-management-callbacks-v2.ts` · 4 operations · Request and error types: namespace `SoftwareManagementCallbacksV2`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deregisterCallback4

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `deregisterCallback4(request: SoftwareManagementCallbacksV2.DeregisterCallback4Request, options?: RequestOptions): ApiPromise<FotaV2SuccessResult, SoftwareManagementCallbacksV2.DeregisterCallback4Error>`
- **Wire**: `DELETE /callbacks/{account}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FotaV2SuccessResult`
- **Error**: `SoftwareManagementCallbacksV2.DeregisterCallback4Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementCallbacksV2.DeregisterCallback4Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FotaV2SuccessResult` | `fotaV2SuccessResultSchema` | `src/models/fota-v2-success-result.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### listRegisteredCallbacks4

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listRegisteredCallbacks4(request: SoftwareManagementCallbacksV2.ListRegisteredCallbacks4Request, options?: RequestOptions): ApiPromise<CallbackSummary, SoftwareManagementCallbacksV2.ListRegisteredCallbacks4Error>`
- **Wire**: `GET /callbacks/{account}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CallbackSummary`
- **Error**: `SoftwareManagementCallbacksV2.ListRegisteredCallbacks4Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementCallbacksV2.ListRegisteredCallbacks4Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CallbackSummary` | `callbackSummarySchema` | `src/models/callback-summary.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### registerCallback4

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `registerCallback4(request: SoftwareManagementCallbacksV2.RegisterCallback4Request, options?: RequestOptions): ApiPromise<FotaV2CallbackRegistrationResult, SoftwareManagementCallbacksV2.RegisterCallback4Error>`
- **Wire**: `POST /callbacks/{account}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FotaV2CallbackRegistrationResult`
- **Error**: `SoftwareManagementCallbacksV2.RegisterCallback4Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementCallbacksV2.RegisterCallback4Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FotaV2CallbackRegistrationResult` | `fotaV2CallbackRegistrationResultSchema` | `src/models/fota-v2-callback-registration-result.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### updateCallback

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `updateCallback(request: SoftwareManagementCallbacksV2.UpdateCallbackRequest, options?: RequestOptions): ApiPromise<FotaV2CallbackRegistrationResult, SoftwareManagementCallbacksV2.UpdateCallbackError>`
- **Wire**: `PUT /callbacks/{account}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FotaV2CallbackRegistrationResult`
- **Error**: `SoftwareManagementCallbacksV2.UpdateCallbackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementCallbacksV2.UpdateCallbackRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FotaV2CallbackRegistrationResult` | `fotaV2CallbackRegistrationResultSchema` | `src/models/fota-v2-callback-registration-result.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

