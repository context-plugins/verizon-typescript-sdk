<!-- Generated file — do not edit; regenerated with the SDK. -->

# CloudConnectorSubscriptions — operations

Accessor: `client.cloudConnectorSubscriptions` · Source: `src/resources/cloud-connector-subscriptions.ts` · 3 operations · Request types: namespace `CloudConnectorSubscriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createSubscription

- **Server**: `cloudConnector` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `createSubscription(request: CloudConnectorSubscriptions.CreateSubscriptionRequestParams, options?: RequestOptions): ApiPromise<Subscription, ResponseError>`
- **Wire**: `POST /subscriptions`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Subscription`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CloudConnectorSubscriptions.CreateSubscriptionRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateSubscriptionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSubscriptionRequest` | `createSubscriptionRequestSchema` | `src/models/create-subscription-request.ts` |
| `Subscription` | `subscriptionSchema` | `src/models/subscription.ts` |

### deleteSubscription

- **Server**: `cloudConnector` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSubscription(request: CloudConnectorSubscriptions.DeleteSubscriptionRequestParams, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `POST /subscriptions/actions/delete`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CloudConnectorSubscriptions.DeleteSubscriptionRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteSubscriptionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteSubscriptionRequest` | `deleteSubscriptionRequestSchema` | `src/models/delete-subscription-request.ts` |

### querySubscription

- **Server**: `cloudConnector` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `querySubscription(request: CloudConnectorSubscriptions.QuerySubscriptionRequestParams, options?: RequestOptions): ApiPromise<Subscription[], ResponseError>`
- **Wire**: `POST /subscriptions/actions/query`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Subscription[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CloudConnectorSubscriptions.QuerySubscriptionRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `QuerySubscriptionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QuerySubscriptionRequest` | `querySubscriptionRequestSchema` | `src/models/query-subscription-request.ts` |
| `Subscription` | `subscriptionSchema` | `src/models/subscription.ts` |

