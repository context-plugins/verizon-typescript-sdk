<!-- Generated file — do not edit; regenerated with the SDK. -->

# CreatePricePlanTriggers — operations

Accessor: `client.createPricePlanTriggers` · Source: `src/resources/create-price-plan-triggers.ts` · 1 operation · Request and error types: namespace `CreatePricePlanTriggers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createTriggerRules

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `createTriggerRules(request: CreatePricePlanTriggers.CreateTriggerRulesRequest, options?: RequestOptions): ApiPromise<TriggerResponse, CreatePricePlanTriggers.CreateTriggerRulesError>`
- **Wire**: `POST /v2/triggers`
- **Auth**: any of `thingspaceOauth1`, `vzM2MToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TriggerResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `CreatePricePlanTriggers.CreateTriggerRulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"ruleRestErrorResponse"` [default — any status no arm above covers] `RuleRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `RuleRestErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `CreatePricePlanTriggers.CreateTriggerRulesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V2TriggersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2TriggersRequest` | `v2TriggersRequestSchema` | `src/models/unions/v2-triggers-request.ts` |
| `TriggerResponse` | `triggerResponseSchema` | `src/models/trigger-response.ts` |
| `RuleRestErrorResponse` | `ruleRestErrorResponseSchema` | `src/models/rule-rest-error-response.ts` |

