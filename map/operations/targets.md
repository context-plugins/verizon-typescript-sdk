<!-- Generated file — do not edit; regenerated with the SDK. -->

# Targets — operations

Accessor: `client.targets` · Source: `src/resources/targets.ts` · 5 operations · Request types: namespace `Targets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAzureCentralIoTApplication

- **Server**: `cloudConnector` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `createAzureCentralIoTApplication(request: Targets.CreateAzureCentralIoTApplicationRequest, options?: RequestOptions): ApiPromise<CreateIoTApplicationResponse, ApiError>`
- **Wire**: `POST /targets/actions/newaic`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateIoTApplicationResponse`
- **Error**: `VerizonError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Targets.CreateAzureCentralIoTApplicationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `billingaccountId` | `header` | `BillingaccountID` | `string` | yes |
| `body` | `body` | — | `CreateIoTApplicationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateIoTApplicationRequest` | `createIoTApplicationRequestSchema` | `src/models/create-io-tapplication-request.ts` |
| `CreateIoTApplicationResponse` | `createIoTApplicationResponseSchema` | `src/models/create-io-tapplication-response.ts` |

### createTarget

- **Server**: `cloudConnector` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `createTarget(request: Targets.CreateTargetRequestParams, options?: RequestOptions): ApiPromise<Target, ApiError>`
- **Wire**: `POST /targets`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Target`
- **Error**: `VerizonError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Targets.CreateTargetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateTargetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTargetRequest` | `createTargetRequestSchema` | `src/models/create-target-request.ts` |
| `Target` | `targetSchema` | `src/models/target.ts` |

### deleteTarget

- **Server**: `cloudConnector` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteTarget(request: Targets.DeleteTargetRequestParams, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /targets/actions/delete`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VerizonError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Targets.DeleteTargetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteTargetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteTargetRequest` | `deleteTargetRequestSchema` | `src/models/delete-target-request.ts` |

### generateTargetExternalId

- **Server**: `cloudConnector` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `generateTargetExternalId(request: Targets.GenerateTargetExternalIdRequest, options?: RequestOptions): ApiPromise<GenerateExternalIdResult, ApiError>`
- **Wire**: `POST /targets/actions/newextid`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GenerateExternalIdResult`
- **Error**: `VerizonError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Targets.GenerateTargetExternalIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GenerateExternalIdRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GenerateExternalIdRequest` | `generateExternalIdRequestSchema` | `src/models/generate-external-id-request.ts` |
| `GenerateExternalIdResult` | `generateExternalIdResultSchema` | `src/models/generate-external-id-result.ts` |

### queryTarget

- **Server**: `cloudConnector` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `queryTarget(request: Targets.QueryTargetRequestParams, options?: RequestOptions): ApiPromise<Target[], ApiError>`
- **Wire**: `POST /targets/actions/query`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Target[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `VerizonError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Targets.QueryTargetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `QueryTargetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QueryTargetRequest` | `queryTargetRequestSchema` | `src/models/query-target-request.ts` |
| `Target` | `targetSchema` | `src/models/target.ts` |

