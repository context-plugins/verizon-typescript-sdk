<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoftwareManagementCallbacksV1 — operations

Accessor: `client.softwareManagementCallbacksV1` · Source: `src/resources/software-management-callbacks-v1.ts` · 3 operations · Request and error types: namespace `SoftwareManagementCallbacksV1`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deregisterCallback3

- **Server**: `softwareManagementV1` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `deregisterCallback3(request: SoftwareManagementCallbacksV1.DeregisterCallback3Request, options?: RequestOptions): ApiPromise<undefined, SoftwareManagementCallbacksV1.DeregisterCallback3Error>`
- **Wire**: `DELETE /callbacks/{account}/name/{service}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SoftwareManagementCallbacksV1.DeregisterCallback3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementCallbacksV1.DeregisterCallback3Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `service` | `path` | `CallbackService` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CallbackService` | `callbackServiceSchema` | `src/models/callback-service.ts` |

### listRegisteredCallbacks3

- **Server**: `softwareManagementV1` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listRegisteredCallbacks3(request: SoftwareManagementCallbacksV1.ListRegisteredCallbacks3Request, options?: RequestOptions): ApiPromise<RegisteredCallbacks[], SoftwareManagementCallbacksV1.ListRegisteredCallbacks3Error>`
- **Wire**: `GET /callbacks/{account}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RegisteredCallbacks[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoftwareManagementCallbacksV1.ListRegisteredCallbacks3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV1Result"` [400] `FotaV1Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementCallbacksV1.ListRegisteredCallbacks3Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RegisteredCallbacks` | `registeredCallbacksSchema` | `src/models/registered-callbacks.ts` |
| `FotaV1Result` | `fotaV1ResultSchema` | `src/models/fota-v1-result.ts` |

### registerCallback3

- **Server**: `softwareManagementV1` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `registerCallback3(request: SoftwareManagementCallbacksV1.RegisterCallback3Request, options?: RequestOptions): ApiPromise<FotaV1CallbackRegistrationResult, SoftwareManagementCallbacksV1.RegisterCallback3Error>`
- **Wire**: `POST /callbacks/{account}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `FotaV1CallbackRegistrationResult`
- **Error**: `SoftwareManagementCallbacksV1.RegisterCallback3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV1Result"` [400] `FotaV1Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementCallbacksV1.RegisterCallback3Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `body` | `body` | `FotaV1CallbackRegistrationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FotaV1CallbackRegistrationRequest` | `fotaV1CallbackRegistrationRequestSchema` | `src/models/fota-v1-callback-registration-request.ts` |
| `FotaV1CallbackRegistrationResult` | `fotaV1CallbackRegistrationResultSchema` | `src/models/fota-v1-callback-registration-result.ts` |
| `FotaV1Result` | `fotaV1ResultSchema` | `src/models/fota-v1-result.ts` |

