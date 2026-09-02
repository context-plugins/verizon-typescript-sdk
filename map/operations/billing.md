<!-- Generated file — do not edit; regenerated with the SDK. -->

# Billing — operations

Accessor: `client.billing` · Source: `src/resources/billing.ts` · 4 operations · Request and error types: namespace `Billing`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### addAccount

- **Server**: `subscriptionServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `addAccount(request: Billing.AddAccountRequest, options?: RequestOptions): ApiPromise<ManagedAccountsAddResponse, Billing.AddAccountError>`
- **Wire**: `POST /managedaccounts/actions/add`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ManagedAccountsAddResponse`
- **Error**: `Billing.AddAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Billing.AddAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ManagedAccountsAddRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ManagedAccountsAddRequest` | `managedAccountsAddRequestSchema` | `src/models/managed-accounts-add-request.ts` |
| `ManagedAccountsAddResponse` | `managedAccountsAddResponseSchema` | `src/models/managed-accounts-add-response.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### cancelManagedAccountAction

- **Server**: `subscriptionServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `cancelManagedAccountAction(request: Billing.CancelManagedAccountActionRequest, options?: RequestOptions): ApiPromise<ManagedAccountCancelResponse, Billing.CancelManagedAccountActionError>`
- **Wire**: `POST /managedaccounts/actions/cancel`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ManagedAccountCancelResponse`
- **Error**: `Billing.CancelManagedAccountActionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Billing.CancelManagedAccountActionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ManagedAccountCancelRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ManagedAccountCancelRequest` | `managedAccountCancelRequestSchema` | `src/models/managed-account-cancel-request.ts` |
| `ManagedAccountCancelResponse` | `managedAccountCancelResponseSchema` | `src/models/managed-account-cancel-response.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### listManagedAccount

- **Server**: `subscriptionServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listManagedAccount(request: Billing.ListManagedAccountRequest, options?: RequestOptions): ApiPromise<ManagedAccountsGetAllResponse, Billing.ListManagedAccountError>`
- **Wire**: `GET /managedaccounts/{accountName}/service/{serviceName}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ManagedAccountsGetAllResponse`
- **Error**: `Billing.ListManagedAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Billing.ListManagedAccountRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |
| `serviceName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ManagedAccountsGetAllResponse` | `managedAccountsGetAllResponseSchema` | `src/models/managed-accounts-get-all-response.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### managedAccountAction

- **Server**: `subscriptionServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `managedAccountAction(request: Billing.ManagedAccountActionRequest, options?: RequestOptions): ApiPromise<ManagedAccountsProvisionResponse, Billing.ManagedAccountActionError>`
- **Wire**: `POST /managedaccounts/actions/provision`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ManagedAccountsProvisionResponse`
- **Error**: `Billing.ManagedAccountActionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Billing.ManagedAccountActionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ManagedAccountsProvisionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ManagedAccountsProvisionRequest` | `managedAccountsProvisionRequestSchema` | `src/models/managed-accounts-provision-request.ts` |
| `ManagedAccountsProvisionResponse` | `managedAccountsProvisionResponseSchema` | `src/models/managed-accounts-provision-response.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

