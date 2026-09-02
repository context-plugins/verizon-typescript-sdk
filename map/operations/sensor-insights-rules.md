<!-- Generated file — do not edit; regenerated with the SDK. -->

# SensorInsightsRules — operations

Accessor: `client.sensorInsightsRules` · Source: `src/resources/sensor-insights-rules.ts` · 2 operations · Request and error types: namespace `SensorInsightsRules`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### sensorInsightsListRulesRequest

- **Signature**: `sensorInsightsListRulesRequest(request: SensorInsightsRules.SensorInsightsListRulesRequestRequest, options?: RequestOptions): ApiPromise<ResourceRule[], SensorInsightsRules.SensorInsightsListRulesRequestError>`
- **Wire**: `POST /dm/v1/rules/actions/query`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ResourceRule[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SensorInsightsRules.SensorInsightsListRulesRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [400–599] `ManagementError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsRules.SensorInsightsListRulesRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoListRulesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoListRulesRequest` | `dtoListRulesRequestSchema` | `src/models/dto-list-rules-request.ts` |
| `ResourceRule` | `resourceRuleSchema` | `src/models/resource-rule.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

### sensorInsightsOverwriteRuleRequest

- **Signature**: `sensorInsightsOverwriteRuleRequest(request: SensorInsightsRules.SensorInsightsOverwriteRuleRequestRequest, options?: RequestOptions): ApiPromise<ResourceRule, SensorInsightsRules.SensorInsightsOverwriteRuleRequestError>`
- **Wire**: `POST /dm/v1/rules`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ResourceRule`
- **Error**: `SensorInsightsRules.SensorInsightsOverwriteRuleRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [400–599] `ManagementError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsRules.SensorInsightsOverwriteRuleRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoOverwriteRuleRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoOverwriteRuleRequest` | `dtoOverwriteRuleRequestSchema` | `src/models/dto-overwrite-rule-request.ts` |
| `ResourceRule` | `resourceRuleSchema` | `src/models/resource-rule.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

