<!-- Generated file — do not edit; regenerated with the SDK. -->

# AnomalySettings — operations

Accessor: `client.anomalySettings` · Source: `src/resources/anomaly-settings.ts` · 3 operations · Request and error types: namespace `AnomalySettings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### activateAnomalyDetection

- **Signature**: `activateAnomalyDetection(request: AnomalySettings.ActivateAnomalyDetectionRequest, options?: RequestOptions): ApiPromise<IntelligenceSuccessResult, AnomalySettings.ActivateAnomalyDetectionError>`
- **Wire**: `POST /m2m/v1/intelligence/anomaly/settings`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `IntelligenceSuccessResult`
- **Error**: `AnomalySettings.ActivateAnomalyDetectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"intelligenceResult"` [400–599] `IntelligenceResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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

- **Signature**: `listAnomalyDetectionSettings(request: AnomalySettings.ListAnomalyDetectionSettingsRequest, options?: RequestOptions): ApiPromise<AnomalyDetectionSettings, AnomalySettings.ListAnomalyDetectionSettingsError>`
- **Wire**: `GET /m2m/v1/intelligence/{accountName}/anomaly/settings`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnomalyDetectionSettings`
- **Error**: `AnomalySettings.ListAnomalyDetectionSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"intelligenceResult"` [400–599] `IntelligenceResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AnomalySettings.ListAnomalyDetectionSettingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnomalyDetectionSettings` | `anomalyDetectionSettingsSchema` | `src/models/anomaly-detection-settings.ts` |
| `IntelligenceResult` | `intelligenceResultSchema` | `src/models/intelligence-result.ts` |

### resetAnomalyDetectionParameters

- **Signature**: `resetAnomalyDetectionParameters(request: AnomalySettings.ResetAnomalyDetectionParametersRequest, options?: RequestOptions): ApiPromise<IntelligenceSuccessResult, AnomalySettings.ResetAnomalyDetectionParametersError>`
- **Wire**: `PUT /m2m/v1/intelligence/{accountName}/anomaly/settings/reset`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IntelligenceSuccessResult`
- **Error**: `AnomalySettings.ResetAnomalyDetectionParametersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"intelligenceResult"` [400–599] `IntelligenceResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AnomalySettings.ResetAnomalyDetectionParametersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IntelligenceSuccessResult` | `intelligenceSuccessResultSchema` | `src/models/intelligence-success-result.ts` |
| `IntelligenceResult` | `intelligenceResultSchema` | `src/models/intelligence-result.ts` |

