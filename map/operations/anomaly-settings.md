<!-- Generated file — do not edit; regenerated with the SDK. -->

# AnomalySettings — operations

Accessor: `client.anomalySettings` · Source: `src/resources/anomaly-settings.ts` · 3 operations · Request and error types: namespace `AnomalySettings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### activateAnomalyDetection

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `activateAnomalyDetection(request: AnomalySettings.ActivateAnomalyDetectionRequest, options?: RequestOptions): ApiPromise<IntelligenceSuccessResult, AnomalySettings.ActivateAnomalyDetectionError>`
- **Wire**: `POST /m2m/v1/intelligence/anomaly/settings`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IntelligenceSuccessResult`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `AnomalySettings.ActivateAnomalyDetectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"intelligenceResult"` [default — any status no arm above covers] `IntelligenceResult` · `"undeclared"` [a `default`-matched body that did not fit `IntelligenceResult`] `rawBody: ArrayBuffer`

**Fields** — `AnomalySettings.ActivateAnomalyDetectionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AnomalyDetectionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnomalyDetectionRequest` | `anomalyDetectionRequestSchema` | `src/models/anomaly-detection-request.ts` |
| `IntelligenceSuccessResult` | `intelligenceSuccessResultSchema` | `src/models/intelligence-success-result.ts` |
| `IntelligenceResult` | `intelligenceResultSchema` | `src/models/intelligence-result.ts` |

### listAnomalyDetectionSettings

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listAnomalyDetectionSettings(request: AnomalySettings.ListAnomalyDetectionSettingsRequest, options?: RequestOptions): ApiPromise<AnomalyDetectionSettings, AnomalySettings.ListAnomalyDetectionSettingsError>`
- **Wire**: `GET /m2m/v1/intelligence/{accountName}/anomaly/settings`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnomalyDetectionSettings`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `AnomalySettings.ListAnomalyDetectionSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"intelligenceResult"` [default — any status no arm above covers] `IntelligenceResult` · `"undeclared"` [a `default`-matched body that did not fit `IntelligenceResult`] `rawBody: ArrayBuffer`

**Fields** — `AnomalySettings.ListAnomalyDetectionSettingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnomalyDetectionSettings` | `anomalyDetectionSettingsSchema` | `src/models/anomaly-detection-settings.ts` |
| `IntelligenceResult` | `intelligenceResultSchema` | `src/models/intelligence-result.ts` |

### resetAnomalyDetectionParameters

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `resetAnomalyDetectionParameters(request: AnomalySettings.ResetAnomalyDetectionParametersRequest, options?: RequestOptions): ApiPromise<IntelligenceSuccessResult, AnomalySettings.ResetAnomalyDetectionParametersError>`
- **Wire**: `PUT /m2m/v1/intelligence/{accountName}/anomaly/settings/reset`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IntelligenceSuccessResult`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `AnomalySettings.ResetAnomalyDetectionParametersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"intelligenceResult"` [default — any status no arm above covers] `IntelligenceResult` · `"undeclared"` [a `default`-matched body that did not fit `IntelligenceResult`] `rawBody: ArrayBuffer`

**Fields** — `AnomalySettings.ResetAnomalyDetectionParametersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IntelligenceSuccessResult` | `intelligenceSuccessResultSchema` | `src/models/intelligence-success-result.ts` |
| `IntelligenceResult` | `intelligenceResultSchema` | `src/models/intelligence-result.ts` |

