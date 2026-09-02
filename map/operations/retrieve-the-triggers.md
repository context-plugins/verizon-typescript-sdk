<!-- Generated file — do not edit; regenerated with the SDK. -->

# RetrieveTheTriggers — operations

Accessor: `client.retrieveTheTriggers` · Source: `src/resources/retrieve-the-triggers.ts` · 4 operations · Request and error types: namespace `RetrieveTheTriggers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getAllAvailableTriggers

- **Signature**: `getAllAvailableTriggers(options?: RequestOptions): ApiPromise<TriggerValueResponse, RetrieveTheTriggers.GetAllAvailableTriggersError>`
- **Wire**: `GET /m2m/v2/triggers`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TriggerValueResponse`
- **Error**: `RetrieveTheTriggers.GetAllAvailableTriggersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"readySimRestErrorResponse"` [400–599] `ReadySimRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `TriggerValueResponse` | `triggerValueResponseSchema` | `src/models/trigger-value-response.ts` |
| `ReadySimRestErrorResponse` | `readySimRestErrorResponseSchema` | `src/models/ready-sim-rest-error-response.ts` |

### getAllTriggersByAccountName

- **Signature**: `getAllTriggersByAccountName(request: RetrieveTheTriggers.GetAllTriggersByAccountNameRequest, options?: RequestOptions): ApiPromise<TriggerValueResponse, RetrieveTheTriggers.GetAllTriggersByAccountNameError>`
- **Wire**: `GET /m2m/v2/triggers/accounts/{accountName}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TriggerValueResponse`
- **Error**: `RetrieveTheTriggers.GetAllTriggersByAccountNameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"readySimRestErrorResponse"` [400–599] `ReadySimRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RetrieveTheTriggers.GetAllTriggersByAccountNameRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TriggerValueResponse` | `triggerValueResponseSchema` | `src/models/trigger-value-response.ts` |
| `ReadySimRestErrorResponse` | `readySimRestErrorResponseSchema` | `src/models/ready-sim-rest-error-response.ts` |

### getAllTriggersByTriggerCategory

- **Signature**: `getAllTriggersByTriggerCategory(options?: RequestOptions): ApiPromise<TriggerValueResponse2, RetrieveTheTriggers.GetAllTriggersByTriggerCategoryError>`
- **Wire**: `GET /m2m/v2/triggers/categories/PromoAlerts`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TriggerValueResponse2`
- **Error**: `RetrieveTheTriggers.GetAllTriggersByTriggerCategoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"readySimRestErrorResponse"` [400–599] `ReadySimRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `TriggerValueResponse2` | `triggerValueResponse2Schema` | `src/models/trigger-value-response2.ts` |
| `ReadySimRestErrorResponse` | `readySimRestErrorResponseSchema` | `src/models/ready-sim-rest-error-response.ts` |

### getTriggersById

- **Signature**: `getTriggersById(request: RetrieveTheTriggers.GetTriggersByIdRequest, options?: RequestOptions): ApiPromise<TriggerValueResponse2, RetrieveTheTriggers.GetTriggersByIdError>`
- **Wire**: `GET /m2m/v2/triggers/{triggerId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TriggerValueResponse2`
- **Error**: `RetrieveTheTriggers.GetTriggersByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"readySimRestErrorResponse"` [400–599] `ReadySimRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RetrieveTheTriggers.GetTriggersByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `triggerId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TriggerValueResponse2` | `triggerValueResponse2Schema` | `src/models/trigger-value-response2.ts` |
| `ReadySimRestErrorResponse` | `readySimRestErrorResponseSchema` | `src/models/ready-sim-rest-error-response.ts` |

