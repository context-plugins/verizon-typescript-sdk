<!-- Generated file — do not edit; regenerated with the SDK. -->

# AnomalyTriggersV2 — operations

Accessor: `client.anomalyTriggersV2` · Source: `src/resources/anomaly-triggers-v2.ts` · 3 operations · Request and error types: namespace `AnomalyTriggersV2`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAnomalyDetectionTriggerV2

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `createAnomalyDetectionTriggerV2(request: AnomalyTriggersV2.CreateAnomalyDetectionTriggerV2Request, options?: RequestOptions): ApiPromise<AnomalyDetectionTrigger, AnomalyTriggersV2.CreateAnomalyDetectionTriggerV2Error>`
- **Wire**: `POST /m2m/v2/triggers`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnomalyDetectionTrigger`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `AnomalyTriggersV2.CreateAnomalyDetectionTriggerV2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"intelligenceResult"` [default — any status no arm above covers] `IntelligenceResult` · `"undeclared"` [a `default`-matched body that did not fit `IntelligenceResult`] `rawBody: ArrayBuffer`

**Fields** — `AnomalyTriggersV2.CreateAnomalyDetectionTriggerV2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateTriggerRequestOptions[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTriggerRequestOptions` | `createTriggerRequestOptionsSchema` | `src/models/unions/create-trigger-request-options.ts` |
| `AnomalyDetectionTrigger` | `anomalyDetectionTriggerSchema` | `src/models/anomaly-detection-trigger.ts` |
| `IntelligenceResult` | `intelligenceResultSchema` | `src/models/intelligence-result.ts` |

### listAnomalyDetectionTriggerSettingsV2

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listAnomalyDetectionTriggerSettingsV2(request: AnomalyTriggersV2.ListAnomalyDetectionTriggerSettingsV2Request, options?: RequestOptions): ApiPromise<AnomalyTriggerResult, AnomalyTriggersV2.ListAnomalyDetectionTriggerSettingsV2Error>`
- **Wire**: `GET /m2m/v2/triggers/{triggerId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnomalyTriggerResult`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `AnomalyTriggersV2.ListAnomalyDetectionTriggerSettingsV2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"intelligenceResult"` [default — any status no arm above covers] `IntelligenceResult` · `"undeclared"` [a `default`-matched body that did not fit `IntelligenceResult`] `rawBody: ArrayBuffer`

**Fields** — `AnomalyTriggersV2.ListAnomalyDetectionTriggerSettingsV2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `triggerId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnomalyTriggerResult` | `anomalyTriggerResultSchema` | `src/models/anomaly-trigger-result.ts` |
| `IntelligenceResult` | `intelligenceResultSchema` | `src/models/intelligence-result.ts` |

### updateAnomalyDetectionTriggerV2

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `updateAnomalyDetectionTriggerV2(request: AnomalyTriggersV2.UpdateAnomalyDetectionTriggerV2Request, options?: RequestOptions): ApiPromise<IntelligenceSuccessResult, AnomalyTriggersV2.UpdateAnomalyDetectionTriggerV2Error>`
- **Wire**: `PUT /m2m/v2/triggers`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IntelligenceSuccessResult`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `AnomalyTriggersV2.UpdateAnomalyDetectionTriggerV2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"intelligenceResult"` [default — any status no arm above covers] `IntelligenceResult` · `"undeclared"` [a `default`-matched body that did not fit `IntelligenceResult`] `rawBody: ArrayBuffer`

**Fields** — `AnomalyTriggersV2.UpdateAnomalyDetectionTriggerV2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateTriggerRequestOptions[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateTriggerRequestOptions` | `updateTriggerRequestOptionsSchema` | `src/models/unions/update-trigger-request-options.ts` |
| `IntelligenceSuccessResult` | `intelligenceSuccessResultSchema` | `src/models/intelligence-success-result.ts` |
| `IntelligenceResult` | `intelligenceResultSchema` | `src/models/intelligence-result.ts` |

