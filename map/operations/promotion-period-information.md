<!-- Generated file — do not edit; regenerated with the SDK. -->

# PromotionPeriodInformation — operations

Accessor: `client.promotionPeriodInformation` · Source: `src/resources/promotion-period-information.ts` · 2 operations · Request and error types: namespace `PromotionPeriodInformation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getPromoDeviceAggregateUsageHistory

- **Signature**: `getPromoDeviceAggregateUsageHistory(request: PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryRequest, options?: RequestOptions): ApiPromise<UsageRequestResponse, PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryError>`
- **Wire**: `POST /m2m/v1/devices/usage/actions/promoaggregateusage`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UsageRequestResponse`
- **Error**: `PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"readySimRestErrorResponse"` [400–599] `ReadySimRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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

- **Signature**: `getPromoDeviceUsageHistory(request: PromotionPeriodInformation.GetPromoDeviceUsageHistoryRequest, options?: RequestOptions): ApiPromise<ResponseToUsageQuery, PromotionPeriodInformation.GetPromoDeviceUsageHistoryError>`
- **Wire**: `POST /m2m/v1/devices/usage/actions/promodeviceusage`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ResponseToUsageQuery`
- **Error**: `PromotionPeriodInformation.GetPromoDeviceUsageHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"readySimRestErrorResponse"` [400–599] `ReadySimRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PromotionPeriodInformation.GetPromoDeviceUsageHistoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ARequestBodyForUsage` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ARequestBodyForUsage` | `aRequestBodyForUsageSchema` | `src/models/arequest-body-for-usage.ts` |
| `ResponseToUsageQuery` | `responseToUsageQuerySchema` | `src/models/response-to-usage-query.ts` |
| `ReadySimRestErrorResponse` | `readySimRestErrorResponseSchema` | `src/models/ready-sim-rest-error-response.ts` |

