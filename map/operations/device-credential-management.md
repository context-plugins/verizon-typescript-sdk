<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeviceCredentialManagement — operations

Accessor: `client.deviceCredentialManagement` · Source: `src/resources/device-credential-management.ts` · 4 operations · Request and error types: namespace `DeviceCredentialManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### dropCredentials

- **Signature**: `dropCredentials(request: DeviceCredentialManagement.DropCredentialsRequest, options?: RequestOptions): ApiPromise<DropResponse, DeviceCredentialManagement.DropCredentialsError>`
- **Wire**: `POST /credentials/drop`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DropResponse`
- **Error**: `DeviceCredentialManagement.DropCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceCredentialManagement.DropCredentialsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CredentialsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CredentialsRequest` | `credentialsRequestSchema` | `src/models/credentials-request.ts` |
| `DropResponse` | `dropResponseSchema` | `src/models/drop-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### generateCredentials

- **Signature**: `generateCredentials(request: DeviceCredentialManagement.GenerateCredentialsRequest, options?: RequestOptions): ApiPromise<GenerateResponse, DeviceCredentialManagement.GenerateCredentialsError>`
- **Wire**: `POST /credentials/generate`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GenerateResponse`
- **Error**: `DeviceCredentialManagement.GenerateCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceCredentialManagement.GenerateCredentialsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CredentialsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CredentialsRequest` | `credentialsRequestSchema` | `src/models/credentials-request.ts` |
| `GenerateResponse` | `generateResponseSchema` | `src/models/generate-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### resetCredentials

- **Signature**: `resetCredentials(request: DeviceCredentialManagement.ResetCredentialsRequest, options?: RequestOptions): ApiPromise<GenerateResponse, DeviceCredentialManagement.ResetCredentialsError>`
- **Wire**: `POST /credentials/reset`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GenerateResponse`
- **Error**: `DeviceCredentialManagement.ResetCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceCredentialManagement.ResetCredentialsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CredentialsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CredentialsRequest` | `credentialsRequestSchema` | `src/models/credentials-request.ts` |
| `GenerateResponse` | `generateResponseSchema` | `src/models/generate-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### retrieveCredentials

- **Signature**: `retrieveCredentials(request: DeviceCredentialManagement.RetrieveCredentialsRequest, options?: RequestOptions): ApiPromise<RetrieveResponse, DeviceCredentialManagement.RetrieveCredentialsError>`
- **Wire**: `POST /credentials/retrieve`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RetrieveResponse`
- **Error**: `DeviceCredentialManagement.RetrieveCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceCredentialManagement.RetrieveCredentialsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CredentialsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CredentialsRequest` | `credentialsRequestSchema` | `src/models/credentials-request.ts` |
| `RetrieveResponse` | `retrieveResponseSchema` | `src/models/retrieve-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

