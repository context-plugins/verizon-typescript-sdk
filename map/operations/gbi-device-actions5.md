<!-- Generated file — do not edit; regenerated with the SDK. -->

# GbiDeviceActions5 — operations

Accessor: `client.gbiDeviceActions5` · Source: `src/resources/gbi-device-actions5.ts` · 3 operations · Request and error types: namespace `GbiDeviceActions5`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### businessInternetServiceplanchange

- **Signature**: `businessInternetServiceplanchange(request: GbiDeviceActions5.BusinessInternetServiceplanchangeRequest, options?: RequestOptions): ApiPromise<GbiRequestResponse5, GbiDeviceActions5.BusinessInternetServiceplanchangeError>`
- **Wire**: `PUT /actions/plan`
- **Auth**: any of `thingspaceOauth`, `vzM2MToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GbiRequestResponse5`
- **Error**: `GbiDeviceActions5.BusinessInternetServiceplanchangeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gbiRestErrorResponse5"` [400–599] `GbiRestErrorResponse5` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GbiDeviceActions5.BusinessInternetServiceplanchangeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GbichangeRequest5` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GbichangeRequest5` | `gbichangeRequest5Schema` | `src/models/gbichange-request5.ts` |
| `GbiRequestResponse5` | `gbiRequestResponse5Schema` | `src/models/gbi-request-response5.ts` |
| `GbiRestErrorResponse5` | `gbiRestErrorResponse5Schema` | `src/models/gbi-rest-error-response5.ts` |

### businessInternetactivateUsingPost

- **Signature**: `businessInternetactivateUsingPost(request: GbiDeviceActions5.BusinessInternetactivateUsingPostRequest, options?: RequestOptions): ApiPromise<GbiRequestResponse5, GbiDeviceActions5.BusinessInternetactivateUsingPostError>`
- **Wire**: `POST /actions/activate`
- **Auth**: any of `thingspaceOauth`, `vzM2MToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GbiRequestResponse5`
- **Error**: `GbiDeviceActions5.BusinessInternetactivateUsingPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gbiRestErrorResponse5"` [400–599] `GbiRestErrorResponse5` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GbiDeviceActions5.BusinessInternetactivateUsingPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GbiactivateRequest5` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GbiactivateRequest5` | `gbiactivateRequest5Schema` | `src/models/gbiactivate-request5.ts` |
| `GbiRequestResponse5` | `gbiRequestResponse5Schema` | `src/models/gbi-request-response5.ts` |
| `GbiRestErrorResponse5` | `gbiRestErrorResponse5Schema` | `src/models/gbi-rest-error-response5.ts` |

### businessInternetlistDeviceInformation

- **Signature**: `businessInternetlistDeviceInformation(request: GbiDeviceActions5.BusinessInternetlistDeviceInformationRequest, options?: RequestOptions): ApiPromise<GbideviceDetailsresponse5, GbiDeviceActions5.BusinessInternetlistDeviceInformationError>`
- **Wire**: `POST /actions/list`
- **Auth**: any of `thingspaceOauth`, `vzM2MToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GbideviceDetailsresponse5`
- **Error**: `GbiDeviceActions5.BusinessInternetlistDeviceInformationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gbiRestErrorResponse5"` [400–599] `GbiRestErrorResponse5` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GbiDeviceActions5.BusinessInternetlistDeviceInformationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GbideviceId5` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GbideviceId5` | `gbideviceId5Schema` | `src/models/gbidevice-id5.ts` |
| `GbideviceDetailsresponse5` | `gbideviceDetailsresponse5Schema` | `src/models/gbidevice-detailsresponse5.ts` |
| `GbiRestErrorResponse5` | `gbiRestErrorResponse5Schema` | `src/models/gbi-rest-error-response5.ts` |

