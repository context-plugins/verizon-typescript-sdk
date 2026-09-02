<!-- Generated file — do not edit; regenerated with the SDK. -->

# UpdatePricePlanTriggers — operations

Accessor: `client.updatePricePlanTriggers` · Source: `src/resources/update-price-plan-triggers.ts` · 1 operation · Request and error types: namespace `UpdatePricePlanTriggers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### updateTriggerRules

- **Signature**: `updateTriggerRules(request: UpdatePricePlanTriggers.UpdateTriggerRulesRequest, options?: RequestOptions): ApiPromise<TriggerResponse, UpdatePricePlanTriggers.UpdateTriggerRulesError>`
- **Wire**: `PUT /v2/triggers`
- **Auth**: any of `thingspaceOauth1`, `vzM2MToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TriggerResponse`
- **Error**: `UpdatePricePlanTriggers.UpdateTriggerRulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"ruleRestErrorResponse"` [400–599] `RuleRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UpdatePricePlanTriggers.UpdateTriggerRulesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V2TriggersRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2TriggersRequest1` | `v2TriggersRequest1Schema` | `src/models/unions/v2-triggers-request1.ts` |
| `TriggerResponse` | `triggerResponseSchema` | `src/models/trigger-response.ts` |
| `RuleRestErrorResponse` | `ruleRestErrorResponseSchema` | `src/models/rule-rest-error-response.ts` |

