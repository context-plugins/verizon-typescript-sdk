<!-- Generated file — do not edit; regenerated with the SDK. -->

# SimActions — operations

Accessor: `client.simActions` · Source: `src/resources/sim-actions.ts` · 3 operations · Request and error types: namespace `SimActions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### newactivatecode

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `newactivatecode(request: SimActions.NewactivatecodeRequest, options?: RequestOptions): ApiPromise<ESimRequestResponse, SimActions.NewactivatecodeError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/renew_activation_code`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ESimRequestResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `SimActions.NewactivatecodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"eSimRestErrorResponse"` [400] `ESimRestErrorResponse` · `"eSimRestErrorResponse2"` [401] `ESimRestErrorResponse` · `"eSimRestErrorResponse3"` [403] `ESimRestErrorResponse` · `"eSimRestErrorResponse4"` [404] `ESimRestErrorResponse` · `"eSimRestErrorResponse5"` [406] `ESimRestErrorResponse` · `"eSimRestErrorResponse6"` [429] `ESimRestErrorResponse` · `"eSimRestErrorResponse7"` [default — any status no arm above covers] `ESimRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ESimRestErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `SimActions.NewactivatecodeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ESimProfileRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ESimProfileRequest2` | `eSimProfileRequest2Schema` | `src/models/esim-profile-request2.ts` |
| `ESimRequestResponse` | `eSimRequestResponseSchema` | `src/models/esim-request-response.ts` |
| `ESimRestErrorResponse` | `eSimRestErrorResponseSchema` | `src/models/esim-rest-error-response.ts` |

### setactivateUsingPost

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `setactivateUsingPost(request: SimActions.SetactivateUsingPostRequest, options?: RequestOptions): ApiPromise<ESimRequestResponse, SimActions.SetactivateUsingPostError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/activate`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ESimRequestResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `SimActions.SetactivateUsingPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"eSimRestErrorResponse"` [400] `ESimRestErrorResponse` · `"eSimRestErrorResponse2"` [401] `ESimRestErrorResponse` · `"eSimRestErrorResponse3"` [403] `ESimRestErrorResponse` · `"eSimRestErrorResponse4"` [404] `ESimRestErrorResponse` · `"eSimRestErrorResponse5"` [406] `ESimRestErrorResponse` · `"eSimRestErrorResponse6"` [429] `ESimRestErrorResponse` · `"eSimRestErrorResponse7"` [default — any status no arm above covers] `ESimRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ESimRestErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `SimActions.SetactivateUsingPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ESimProfileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ESimProfileRequest` | `eSimProfileRequestSchema` | `src/models/esim-profile-request.ts` |
| `ESimRequestResponse` | `eSimRequestResponseSchema` | `src/models/esim-request-response.ts` |
| `ESimRestErrorResponse` | `eSimRestErrorResponseSchema` | `src/models/esim-rest-error-response.ts` |

### setdeactivateUsingPost

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `setdeactivateUsingPost(request: SimActions.SetdeactivateUsingPostRequest, options?: RequestOptions): ApiPromise<ESimRequestResponse, SimActions.SetdeactivateUsingPostError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/deactivate`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ESimRequestResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `SimActions.SetdeactivateUsingPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"eSimRestErrorResponse"` [400] `ESimRestErrorResponse` · `"eSimRestErrorResponse2"` [401] `ESimRestErrorResponse` · `"eSimRestErrorResponse3"` [403] `ESimRestErrorResponse` · `"eSimRestErrorResponse4"` [404] `ESimRestErrorResponse` · `"eSimRestErrorResponse5"` [406] `ESimRestErrorResponse` · `"eSimRestErrorResponse6"` [429] `ESimRestErrorResponse` · `"eSimRestErrorResponse7"` [default — any status no arm above covers] `ESimRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `ESimRestErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `SimActions.SetdeactivateUsingPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProfileRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileRequest2` | `profileRequest2Schema` | `src/models/profile-request2.ts` |
| `ESimRequestResponse` | `eSimRequestResponseSchema` | `src/models/esim-request-response.ts` |
| `ESimRestErrorResponse` | `eSimRestErrorResponseSchema` | `src/models/esim-rest-error-response.ts` |

