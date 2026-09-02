<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.accounts` · Source: `src/resources/accounts.ts` · 3 operations · Request and error types: namespace `Accounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getAccountInformation

- **Signature**: `getAccountInformation(request: Accounts.GetAccountInformationRequest, options?: RequestOptions): ApiPromise<Account, Accounts.GetAccountInformationError>`
- **Wire**: `GET /m2m/v1/accounts/{aname}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Account`
- **Error**: `Accounts.GetAccountInformationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.GetAccountInformationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `aname` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Account` | `accountSchema` | `src/models/account.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### listAccountLeads

- **Signature**: `listAccountLeads(request: Accounts.ListAccountLeadsRequest, options?: RequestOptions): ApiPromise<AccountLeadsResult, Accounts.ListAccountLeadsError>`
- **Wire**: `GET /m2m/v1/leads/{aname}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountLeadsResult`
- **Error**: `Accounts.ListAccountLeadsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.ListAccountLeadsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `aname` | `path` | `string` | yes |
| `next` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountLeadsResult` | `accountLeadsResultSchema` | `src/models/account-leads-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### listAccountStatesAndServices

- **Signature**: `listAccountStatesAndServices(request: Accounts.ListAccountStatesAndServicesRequest, options?: RequestOptions): ApiPromise<AccountStatesAndServices, Accounts.ListAccountStatesAndServicesError>`
- **Wire**: `GET /m2m/v1/accounts/{aname}/statesandservices`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountStatesAndServices`
- **Error**: `Accounts.ListAccountStatesAndServicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.ListAccountStatesAndServicesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `aname` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountStatesAndServices` | `accountStatesAndServicesSchema` | `src/models/account-states-and-services.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

