<!-- Generated file — do not edit; regenerated with the SDK. -->

# ThingSpaceQualityOfServiceApiActions — operations

Accessor: `client.thingSpaceQualityOfServiceApiActions` · Source: `src/resources/thing-space-quality-of-service-api-actions.ts` · 2 operations · Request and error types: namespace `ThingSpaceQualityOfServiceApiActions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAThingSpaceQualityOfServiceApiSubscription

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `createAThingSpaceQualityOfServiceApiSubscription(request: ThingSpaceQualityOfServiceApiActions.CreateAThingSpaceQualityOfServiceApiSubscriptionRequest, options?: RequestOptions): ApiPromise<Success201, ThingSpaceQualityOfServiceApiActions.CreateAThingSpaceQualityOfServiceApiSubscriptionError>`
- **Wire**: `POST /m2m/v1/devices/actions/enhanceQoS`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Success201`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `ThingSpaceQualityOfServiceApiActions.CreateAThingSpaceQualityOfServiceApiSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultResponse"` [default — any status no arm above covers] `DefaultResponse` · `"undeclared"` [a `default`-matched body that did not fit `DefaultResponse`] `rawBody: ArrayBuffer`

**Fields** — `ThingSpaceQualityOfServiceApiActions.CreateAThingSpaceQualityOfServiceApiSubscriptionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SubscribeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscribeRequest` | `subscribeRequestSchema` | `src/models/subscribe-request.ts` |
| `Success201` | `success201Schema` | `src/models/success201.ts` |
| `DefaultResponse` | `defaultResponseSchema` | `src/models/default-response.ts` |

### stopAThingSpaceQualityOfServiceApiSubscription

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `stopAThingSpaceQualityOfServiceApiSubscription(request: ThingSpaceQualityOfServiceApiActions.StopAThingSpaceQualityOfServiceApiSubscriptionRequest, options?: RequestOptions): ApiPromise<Success201, ThingSpaceQualityOfServiceApiActions.StopAThingSpaceQualityOfServiceApiSubscriptionError>`
- **Wire**: `DELETE /m2m/v1/devices/actions/enhanceQoS`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Success201`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `ThingSpaceQualityOfServiceApiActions.StopAThingSpaceQualityOfServiceApiSubscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultResponse"` [default — any status no arm above covers] `DefaultResponse` · `"undeclared"` [a `default`-matched body that did not fit `DefaultResponse`] `rawBody: ArrayBuffer`

**Fields** — `ThingSpaceQualityOfServiceApiActions.StopAThingSpaceQualityOfServiceApiSubscriptionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `query` | `string` | yes |
| `qosSubscriptionId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Success201` | `success201Schema` | `src/models/success201.ts` |
| `DefaultResponse` | `defaultResponseSchema` | `src/models/default-response.ts` |

