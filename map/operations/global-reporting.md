<!-- Generated file — do not edit; regenerated with the SDK. -->

# GlobalReporting — operations

Accessor: `client.globalReporting` · Source: `src/resources/global-reporting.ts` · 2 operations · Request and error types: namespace `GlobalReporting`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### retrieveGlobalList

- **Signature**: `retrieveGlobalList(request: GlobalReporting.RetrieveGlobalListRequest, options?: RequestOptions): ApiPromise<ESimRequestResponse, GlobalReporting.RetrieveGlobalListError>`
- **Wire**: `POST /m2m/v2/devices/actions/list`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ESimRequestResponse`
- **Error**: `GlobalReporting.RetrieveGlobalListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"eSimRestErrorResponse"` [400] `ESimRestErrorResponse` · `"eSimRestErrorResponse2"` [401] `ESimRestErrorResponse` · `"eSimRestErrorResponse3"` [403] `ESimRestErrorResponse` · `"eSimRestErrorResponse4"` [404] `ESimRestErrorResponse` · `"eSimRestErrorResponse5"` [406] `ESimRestErrorResponse` · `"eSimRestErrorResponse6"` [429] `ESimRestErrorResponse` · `"eSimRestErrorResponse7"` [400–599] `ESimRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GlobalReporting.RetrieveGlobalListRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ESimGlobalDeviceList` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ESimGlobalDeviceList` | `eSimGlobalDeviceListSchema` | `src/models/esim-global-device-list.ts` |
| `ESimRequestResponse` | `eSimRequestResponseSchema` | `src/models/esim-request-response.ts` |
| `ESimRestErrorResponse` | `eSimRestErrorResponseSchema` | `src/models/esim-rest-error-response.ts` |

### deviceprovhistoryUsingPost

- **Signature**: `deviceprovhistoryUsingPost(request: GlobalReporting.DeviceprovhistoryUsingPostRequest, options?: RequestOptions): ApiPromise<ESimRequestResponse, GlobalReporting.DeviceprovhistoryUsingPostError>`
- **Wire**: `POST /m2m/v2/devices/history/actions/list`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ESimRequestResponse`
- **Error**: `GlobalReporting.DeviceprovhistoryUsingPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"eSimRestErrorResponse"` [400] `ESimRestErrorResponse` · `"eSimRestErrorResponse2"` [401] `ESimRestErrorResponse` · `"eSimRestErrorResponse3"` [403] `ESimRestErrorResponse` · `"eSimRestErrorResponse4"` [404] `ESimRestErrorResponse` · `"eSimRestErrorResponse5"` [406] `ESimRestErrorResponse` · `"eSimRestErrorResponse6"` [429] `ESimRestErrorResponse` · `"eSimRestErrorResponse7"` [400–599] `ESimRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GlobalReporting.DeviceprovhistoryUsingPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ESimProvhistoryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ESimProvhistoryRequest` | `eSimProvhistoryRequestSchema` | `src/models/esim-provhistory-request.ts` |
| `ESimRequestResponse` | `eSimRequestResponseSchema` | `src/models/esim-request-response.ts` |
| `ESimRestErrorResponse` | `eSimRestErrorResponseSchema` | `src/models/esim-rest-error-response.ts` |

