<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountSubscriptions — operations

Accessor: `client.accountSubscriptions` · Source: `src/resources/account-subscriptions.ts` · 1 operation · Request and error types: namespace `AccountSubscriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listAccountSubscriptions

- **Server**: `m2M` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listAccountSubscriptions(request: AccountSubscriptions.ListAccountSubscriptionsRequest, options?: RequestOptions): ApiPromise<SecuritySubscriptionResult, AccountSubscriptions.ListAccountSubscriptionsError>`
- **Wire**: `POST /v1/accounts/subscriptions/actions/list`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SecuritySubscriptionResult`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `AccountSubscriptions.ListAccountSubscriptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"securityResult"` [400] `SecurityResult` · `"securityResult2"` [401] `SecurityResult` · `"securityResult3"` [403] `SecurityResult` · `"securityResult4"` [404] `SecurityResult` · `"securityResult5"` [406] `SecurityResult` · `"securityResult6"` [429] `SecurityResult` · `"securityResult7"` [default — any status no arm above covers] `SecurityResult` · `"undeclared"` [a `default`-matched body that did not fit `SecurityResult`] `rawBody: ArrayBuffer`

**Fields** — `AccountSubscriptions.ListAccountSubscriptionsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xRequestId` | `header` | `X-Request-ID` | `string` | no |
| `body` | `body` | — | `SecuritySubscriptionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SecuritySubscriptionRequest` | `securitySubscriptionRequestSchema` | `src/models/security-subscription-request.ts` |
| `SecuritySubscriptionResult` | `securitySubscriptionResultSchema` | `src/models/security-subscription-result.ts` |
| `SecurityResult` | `securityResultSchema` | `src/models/security-result.ts` |

