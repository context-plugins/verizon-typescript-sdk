<!-- Generated file — do not edit; regenerated with the SDK. -->

# PromotionPeriodInformation — operations

Accessor: `client.promotionPeriodInformation` · Source: `src/resources/promotion-period-information.ts` · 2 operations · Request and error types: namespace `PromotionPeriodInformation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPromoDeviceAggregateUsageHistory

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getPromoDeviceAggregateUsageHistory(request: PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryRequest, options?: RequestOptions): ApiPromise<UsageRequestResponse, PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryError>`
- **Wire**: `POST /m2m/v1/devices/usage/actions/promoaggregateusage`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsageRequestResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"readySimRestErrorResponse"` [default — any status no arm above covers] `ReadySimRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ReadySimRestErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RequestBodyForUsage` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RequestBodyForUsage` | `requestBodyForUsageSchema` | `src/models/request-body-for-usage.ts` |
| `UsageRequestResponse` | `usageRequestResponseSchema` | `src/models/usage-request-response.ts` |
| `ReadySimRestErrorResponse` | `readySimRestErrorResponseSchema` | `src/models/ready-sim-rest-error-response.ts` |

### getPromoDeviceUsageHistory

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getPromoDeviceUsageHistory(request: PromotionPeriodInformation.GetPromoDeviceUsageHistoryRequest, options?: RequestOptions): ApiPromise<ResponseToUsageQuery, PromotionPeriodInformation.GetPromoDeviceUsageHistoryError>`
- **Wire**: `POST /m2m/v1/devices/usage/actions/promodeviceusage`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ResponseToUsageQuery`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `PromotionPeriodInformation.GetPromoDeviceUsageHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"readySimRestErrorResponse"` [default — any status no arm above covers] `ReadySimRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ReadySimRestErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `PromotionPeriodInformation.GetPromoDeviceUsageHistoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ARequestBodyForUsage` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ARequestBodyForUsage` | `aRequestBodyForUsageSchema` | `src/models/arequest-body-for-usage.ts` |
| `ResponseToUsageQuery` | `responseToUsageQuerySchema` | `src/models/response-to-usage-query.ts` |
| `ReadySimRestErrorResponse` | `readySimRestErrorResponseSchema` | `src/models/ready-sim-rest-error-response.ts` |

