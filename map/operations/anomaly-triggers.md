<!-- Generated file — do not edit; regenerated with the SDK. -->

# AnomalyTriggers — operations

Accessor: `client.anomalyTriggers` · Source: `src/resources/anomaly-triggers.ts` · 5 operations · Request and error types: namespace `AnomalyTriggers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAnomalyDetectionTrigger

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `createAnomalyDetectionTrigger(request: AnomalyTriggers.CreateAnomalyDetectionTriggerRequest, options?: RequestOptions): ApiPromise<AnomalyDetectionTrigger, AnomalyTriggers.CreateAnomalyDetectionTriggerError>`
- **Wire**: `POST /m2m/v1/triggers`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnomalyDetectionTrigger`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `AnomalyTriggers.CreateAnomalyDetectionTriggerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"intelligenceResult"` [400] `IntelligenceResult` · `"intelligenceResult2"` [401] `IntelligenceResult` · `"intelligenceResult3"` [403] `IntelligenceResult` · `"intelligenceResult4"` [404] `IntelligenceResult` · `"intelligenceResult5"` [406] `IntelligenceResult` · `"intelligenceResult6"` [429] `IntelligenceResult` · `"intelligenceResult7"` [default — any status no arm above covers] `IntelligenceResult` · `"undeclared"` [a `default`-matched body that did not fit `IntelligenceResult`] `rawBody: ArrayBuffer`

**Fields** — `AnomalyTriggers.CreateAnomalyDetectionTriggerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateTriggerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTriggerRequest` | `createTriggerRequestSchema` | `src/models/create-trigger-request.ts` |
| `AnomalyDetectionTrigger` | `anomalyDetectionTriggerSchema` | `src/models/anomaly-detection-trigger.ts` |
| `IntelligenceResult` | `intelligenceResultSchema` | `src/models/intelligence-result.ts` |

### deleteAnomalyDetectionTrigger

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteAnomalyDetectionTrigger(request: AnomalyTriggers.DeleteAnomalyDetectionTriggerRequest, options?: RequestOptions): ApiPromise<AnomalyDetectionTrigger, AnomalyTriggers.DeleteAnomalyDetectionTriggerError>`
- **Wire**: `DELETE /m2m/v1/triggers/{triggerId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnomalyDetectionTrigger`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `AnomalyTriggers.DeleteAnomalyDetectionTriggerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"intelligenceResult"` [default — any status no arm above covers] `IntelligenceResult` · `"undeclared"` [a `default`-matched body that did not fit `IntelligenceResult`] `rawBody: ArrayBuffer`

**Fields** — `AnomalyTriggers.DeleteAnomalyDetectionTriggerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `triggerId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnomalyDetectionTrigger` | `anomalyDetectionTriggerSchema` | `src/models/anomaly-detection-trigger.ts` |
| `IntelligenceResult` | `intelligenceResultSchema` | `src/models/intelligence-result.ts` |

### listAnomalyDetectionTriggerSettings

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listAnomalyDetectionTriggerSettings(request: AnomalyTriggers.ListAnomalyDetectionTriggerSettingsRequest, options?: RequestOptions): ApiPromise<GetTriggerResponseList[], AnomalyTriggers.ListAnomalyDetectionTriggerSettingsError>`
- **Wire**: `GET /m2m/v1/triggers/{triggerId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetTriggerResponseList[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `VerizonError` with `kind: "api"`, an instance of `AnomalyTriggers.ListAnomalyDetectionTriggerSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"intelligenceResult"` [400] `IntelligenceResult` · `"intelligenceResult2"` [401] `IntelligenceResult` · `"intelligenceResult3"` [403] `IntelligenceResult` · `"intelligenceResult4"` [404] `IntelligenceResult` · `"intelligenceResult5"` [406] `IntelligenceResult` · `"intelligenceResult6"` [429] `IntelligenceResult` · `"intelligenceResult7"` [default — any status no arm above covers] `IntelligenceResult` · `"undeclared"` [a `default`-matched body that did not fit `IntelligenceResult`] `rawBody: ArrayBuffer`

**Fields** — `AnomalyTriggers.ListAnomalyDetectionTriggerSettingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `triggerId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTriggerResponseList` | `getTriggerResponseListSchema` | `src/models/get-trigger-response-list.ts` |
| `IntelligenceResult` | `intelligenceResultSchema` | `src/models/intelligence-result.ts` |

### listAnomalyDetectionTriggers

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listAnomalyDetectionTriggers(options?: RequestOptions): ApiPromise<GetTriggerResponseList[], AnomalyTriggers.ListAnomalyDetectionTriggersError>`
- **Wire**: `GET /m2m/v1/triggers`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetTriggerResponseList[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `VerizonError` with `kind: "api"`, an instance of `AnomalyTriggers.ListAnomalyDetectionTriggersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"intelligenceResult"` [400] `IntelligenceResult` · `"intelligenceResult2"` [401] `IntelligenceResult` · `"intelligenceResult3"` [403] `IntelligenceResult` · `"intelligenceResult4"` [404] `IntelligenceResult` · `"intelligenceResult5"` [406] `IntelligenceResult` · `"intelligenceResult6"` [429] `IntelligenceResult` · `"intelligenceResult7"` [default — any status no arm above covers] `IntelligenceResult` · `"undeclared"` [a `default`-matched body that did not fit `IntelligenceResult`] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTriggerResponseList` | `getTriggerResponseListSchema` | `src/models/get-trigger-response-list.ts` |
| `IntelligenceResult` | `intelligenceResultSchema` | `src/models/intelligence-result.ts` |

### updateAnomalyDetectionTrigger

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `updateAnomalyDetectionTrigger(request: AnomalyTriggers.UpdateAnomalyDetectionTriggerRequest, options?: RequestOptions): ApiPromise<AnomalyDetectionTrigger, AnomalyTriggers.UpdateAnomalyDetectionTriggerError>`
- **Wire**: `PUT /m2m/v1/triggers`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnomalyDetectionTrigger`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `AnomalyTriggers.UpdateAnomalyDetectionTriggerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"intelligenceResult"` [400] `IntelligenceResult` · `"intelligenceResult2"` [401] `IntelligenceResult` · `"intelligenceResult3"` [403] `IntelligenceResult` · `"intelligenceResult4"` [404] `IntelligenceResult` · `"intelligenceResult5"` [406] `IntelligenceResult` · `"intelligenceResult6"` [429] `IntelligenceResult` · `"intelligenceResult7"` [default — any status no arm above covers] `IntelligenceResult` · `"undeclared"` [a `default`-matched body that did not fit `IntelligenceResult`] `rawBody: ArrayBuffer`

**Fields** — `AnomalyTriggers.UpdateAnomalyDetectionTriggerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateTriggerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateTriggerRequest` | `updateTriggerRequestSchema` | `src/models/update-trigger-request.ts` |
| `AnomalyDetectionTrigger` | `anomalyDetectionTriggerSchema` | `src/models/anomaly-detection-trigger.ts` |
| `IntelligenceResult` | `intelligenceResultSchema` | `src/models/intelligence-result.ts` |

