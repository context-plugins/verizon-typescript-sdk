<!-- Generated file — do not edit; regenerated with the SDK. -->

# RetrieveRatePlanList — operations

Accessor: `client.retrieveRatePlanList` · Source: `src/resources/retrieve-rate-plan-list.ts` · 1 operation · Request and error types: namespace `RetrieveRatePlanList`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getRatePlanList

- **Signature**: `getRatePlanList(request: RetrieveRatePlanList.GetRatePlanListRequest, options?: RequestOptions): ApiPromise<Rateplan, RetrieveRatePlanList.GetRatePlanListError>`
- **Wire**: `GET /v2/triggers/rateplanlist/{ecpdId}`
- **Auth**: any of `thingspaceOauth1`, `vzM2MToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Rateplan`
- **Error**: `RetrieveRatePlanList.GetRatePlanListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"ruleRestErrorResponse"` [400–599] `RuleRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RetrieveRatePlanList.GetRatePlanListRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ecpdId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Rateplan` | `rateplanSchema` | `src/models/rateplan.ts` |
| `RuleRestErrorResponse` | `ruleRestErrorResponseSchema` | `src/models/rule-rest-error-response.ts` |

