<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoftwareManagementSubscriptionsV3 — operations

Accessor: `client.softwareManagementSubscriptionsV3` · Source: `src/resources/software-management-subscriptions-v3.ts` · 1 operation · Request and error types: namespace `SoftwareManagementSubscriptionsV3`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getAccountSubscriptionStatus3

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getAccountSubscriptionStatus3(request: SoftwareManagementSubscriptionsV3.GetAccountSubscriptionStatus3Request, options?: RequestOptions): ApiPromise<FotaV3Subscription, SoftwareManagementSubscriptionsV3.GetAccountSubscriptionStatus3Error>`
- **Wire**: `GET /subscriptions/{acc}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FotaV3Subscription`
- **Error**: `SoftwareManagementSubscriptionsV3.GetAccountSubscriptionStatus3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementSubscriptionsV3.GetAccountSubscriptionStatus3Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FotaV3Subscription` | `fotaV3SubscriptionSchema` | `src/models/fota-v3-subscription.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

