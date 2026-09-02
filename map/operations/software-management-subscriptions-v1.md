<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoftwareManagementSubscriptionsV1 — operations

Accessor: `client.softwareManagementSubscriptionsV1` · Source: `src/resources/software-management-subscriptions-v1.ts` · 2 operations · Request and error types: namespace `SoftwareManagementSubscriptionsV1`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getAccountLicenseStatus

- **Server**: `softwareManagementV1` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getAccountLicenseStatus(request: SoftwareManagementSubscriptionsV1.GetAccountLicenseStatusRequest, options?: RequestOptions): ApiPromise<AccountLicenseInfo, SoftwareManagementSubscriptionsV1.GetAccountLicenseStatusError>`
- **Wire**: `GET /licenses/{account}/index/{startIndex}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountLicenseInfo`
- **Error**: `SoftwareManagementSubscriptionsV1.GetAccountLicenseStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV1Result"` [400] `FotaV1Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementSubscriptionsV1.GetAccountLicenseStatusRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `startIndex` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountLicenseInfo` | `accountLicenseInfoSchema` | `src/models/account-license-info.ts` |
| `FotaV1Result` | `fotaV1ResultSchema` | `src/models/fota-v1-result.ts` |

### getAccountSubscriptionStatus

- **Server**: `softwareManagementV1` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getAccountSubscriptionStatus(request: SoftwareManagementSubscriptionsV1.GetAccountSubscriptionStatusRequest, options?: RequestOptions): ApiPromise<V1AccountSubscription, SoftwareManagementSubscriptionsV1.GetAccountSubscriptionStatusError>`
- **Wire**: `GET /subscriptions/{account}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1AccountSubscription`
- **Error**: `SoftwareManagementSubscriptionsV1.GetAccountSubscriptionStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV1Result"` [400] `FotaV1Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementSubscriptionsV1.GetAccountSubscriptionStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1AccountSubscription` | `v1AccountSubscriptionSchema` | `src/models/v1-account-subscription.ts` |
| `FotaV1Result` | `fotaV1ResultSchema` | `src/models/fota-v1-result.ts` |

