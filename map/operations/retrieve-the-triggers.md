<!-- Generated file — do not edit; regenerated with the SDK. -->

# RetrieveTheTriggers — operations

Accessor: `client.retrieveTheTriggers` · Source: `src/resources/retrieve-the-triggers.ts` · 4 operations · Request and error types: namespace `RetrieveTheTriggers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAllAvailableTriggers

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllAvailableTriggers(options?: RequestOptions): ApiPromise<TriggerValueResponse, RetrieveTheTriggers.GetAllAvailableTriggersError>`
- **Wire**: `GET /m2m/v2/triggers`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TriggerValueResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `RetrieveTheTriggers.GetAllAvailableTriggersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"readySimRestErrorResponse"` [default — any status no arm above covers] `ReadySimRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ReadySimRestErrorResponse`] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `TriggerValueResponse` | `triggerValueResponseSchema` | `src/models/trigger-value-response.ts` |
| `ReadySimRestErrorResponse` | `readySimRestErrorResponseSchema` | `src/models/ready-sim-rest-error-response.ts` |

### getAllTriggersByAccountName

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllTriggersByAccountName(request: RetrieveTheTriggers.GetAllTriggersByAccountNameRequest, options?: RequestOptions): ApiPromise<TriggerValueResponse, RetrieveTheTriggers.GetAllTriggersByAccountNameError>`
- **Wire**: `GET /m2m/v2/triggers/accounts/{accountName}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TriggerValueResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `RetrieveTheTriggers.GetAllTriggersByAccountNameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"readySimRestErrorResponse"` [default — any status no arm above covers] `ReadySimRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ReadySimRestErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `RetrieveTheTriggers.GetAllTriggersByAccountNameRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TriggerValueResponse` | `triggerValueResponseSchema` | `src/models/trigger-value-response.ts` |
| `ReadySimRestErrorResponse` | `readySimRestErrorResponseSchema` | `src/models/ready-sim-rest-error-response.ts` |

### getAllTriggersByTriggerCategory

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllTriggersByTriggerCategory(options?: RequestOptions): ApiPromise<TriggerValueResponse2, RetrieveTheTriggers.GetAllTriggersByTriggerCategoryError>`
- **Wire**: `GET /m2m/v2/triggers/categories/PromoAlerts`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TriggerValueResponse2`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `RetrieveTheTriggers.GetAllTriggersByTriggerCategoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"readySimRestErrorResponse"` [default — any status no arm above covers] `ReadySimRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ReadySimRestErrorResponse`] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `TriggerValueResponse2` | `triggerValueResponse2Schema` | `src/models/trigger-value-response2.ts` |
| `ReadySimRestErrorResponse` | `readySimRestErrorResponseSchema` | `src/models/ready-sim-rest-error-response.ts` |

### getTriggersById

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getTriggersById(request: RetrieveTheTriggers.GetTriggersByIdRequest, options?: RequestOptions): ApiPromise<TriggerValueResponse2, RetrieveTheTriggers.GetTriggersByIdError>`
- **Wire**: `GET /m2m/v2/triggers/{triggerId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TriggerValueResponse2`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `RetrieveTheTriggers.GetTriggersByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"readySimRestErrorResponse"` [default — any status no arm above covers] `ReadySimRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ReadySimRestErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `RetrieveTheTriggers.GetTriggersByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `triggerId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TriggerValueResponse2` | `triggerValueResponse2Schema` | `src/models/trigger-value-response2.ts` |
| `ReadySimRestErrorResponse` | `readySimRestErrorResponseSchema` | `src/models/ready-sim-rest-error-response.ts` |

