<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoftwareManagementSubscriptionsV2 — operations

Accessor: `client.softwareManagementSubscriptionsV2` · Source: `src/resources/software-management-subscriptions-v2.ts` · 1 operation · Request and error types: namespace `SoftwareManagementSubscriptionsV2`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getAccountSubscriptionStatus2

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getAccountSubscriptionStatus2(request: SoftwareManagementSubscriptionsV2.GetAccountSubscriptionStatus2Request, options?: RequestOptions): ApiPromise<FotaV2Subscription, SoftwareManagementSubscriptionsV2.GetAccountSubscriptionStatus2Error>`
- **Wire**: `GET /subscriptions/{account}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FotaV2Subscription`
- **Error**: `SoftwareManagementSubscriptionsV2.GetAccountSubscriptionStatus2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementSubscriptionsV2.GetAccountSubscriptionStatus2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FotaV2Subscription` | `fotaV2SubscriptionSchema` | `src/models/fota-v2-subscription.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

