<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pwn — operations

Accessor: `client.pwn` · Source: `src/resources/pwn.ts` · 7 operations · Request types: namespace `Pwn`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### changePwnDeviceIPaddress

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `changePwnDeviceIPaddress(request: Pwn.ChangePwnDeviceIPaddressRequestParams, options?: RequestOptions): ApiPromise<ChangePwnDeviceIpAddressResponse, ApiError>`
- **Wire**: `PUT /m2m/v1/devices/pwn/actions/ipaddress`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChangePwnDeviceIpAddressResponse`
- **Error**: `VerizonError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pwn.ChangePwnDeviceIPaddressRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ChangePwnDeviceIPaddressRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChangePwnDeviceIPaddressRequest` | `changePwnDeviceIPaddressRequestSchema` | `src/models/change-pwn-device-ipaddress-request.ts` |
| `ChangePwnDeviceIpAddressResponse` | `changePwnDeviceIpAddressResponseSchema` | `src/models/change-pwn-device-ip-address-response.ts` |

### changePwnDeviceProfile

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `changePwnDeviceProfile(request: Pwn.ChangePwnDeviceProfileRequestParams, options?: RequestOptions): ApiPromise<ChangePwnDeviceProfileResponse, ApiError>`
- **Wire**: `POST /m2m/v1/devices/pwn/actions/profile`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChangePwnDeviceProfileResponse`
- **Error**: `VerizonError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pwn.ChangePwnDeviceProfileRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ChangePwnDeviceProfileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChangePwnDeviceProfileRequest` | `changePwnDeviceProfileRequestSchema` | `src/models/change-pwn-device-profile-request.ts` |
| `ChangePwnDeviceProfileResponse` | `changePwnDeviceProfileResponseSchema` | `src/models/change-pwn-device-profile-response.ts` |

### changePwnDeviceStateActivate

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `changePwnDeviceStateActivate(request: Pwn.ChangePwnDeviceStateActivateRequestParams, options?: RequestOptions): ApiPromise<ChangePwnDeviceStateResponse, ApiError>`
- **Wire**: `POST /m2m/v1/devices/pwn/actions/state/activate`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChangePwnDeviceStateResponse`
- **Error**: `VerizonError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pwn.ChangePwnDeviceStateActivateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ChangePwnDeviceStateActivateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChangePwnDeviceStateActivateRequest` | `changePwnDeviceStateActivateRequestSchema` | `src/models/change-pwn-device-state-activate-request.ts` |
| `ChangePwnDeviceStateResponse` | `changePwnDeviceStateResponseSchema` | `src/models/change-pwn-device-state-response.ts` |

### changePwnDeviceStateDeactivate

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `changePwnDeviceStateDeactivate(request: Pwn.ChangePwnDeviceStateDeactivateRequestParams, options?: RequestOptions): ApiPromise<ChangePwnDeviceStateResponse, ApiError>`
- **Wire**: `POST /m2m/v1/devices/pwn/actions/state/deactivate`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChangePwnDeviceStateResponse`
- **Error**: `VerizonError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pwn.ChangePwnDeviceStateDeactivateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ChangePwnDeviceStateDeactivateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChangePwnDeviceStateDeactivateRequest` | `changePwnDeviceStateDeactivateRequestSchema` | `src/models/change-pwn-device-state-deactivate-request.ts` |
| `ChangePwnDeviceStateResponse` | `changePwnDeviceStateResponseSchema` | `src/models/change-pwn-device-state-response.ts` |

### getPwnPerformanceConsent

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getPwnPerformanceConsent(request: Pwn.GetPwnPerformanceConsentRequest, options?: RequestOptions): ApiPromise<GetPwnPerformanceConsentResponse, ApiError>`
- **Wire**: `GET /m2m/v1/devices/pwn/performance/consent/{aname}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetPwnPerformanceConsentResponse`
- **Error**: `VerizonError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pwn.GetPwnPerformanceConsentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `aname` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetPwnPerformanceConsentResponse` | `getPwnPerformanceConsentResponseSchema` | `src/models/get-pwn-performance-consent-response.ts` |

### getProfileList

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getProfileList(request: Pwn.GetProfileListRequest, options?: RequestOptions): ApiPromise<PwnProfileList, ApiError>`
- **Wire**: `GET /m2m/v1/devices/pwn/profiles/list/{aname}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PwnProfileList`
- **Error**: `VerizonError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pwn.GetProfileListRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `aname` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PwnProfileList` | `pwnProfileListSchema` | `src/models/pwn-profile-list.ts` |

### kpiList

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `kpiList(request: Pwn.KpiListRequest, options?: RequestOptions): ApiPromise<KpiInfoList, ApiError>`
- **Wire**: `GET /m2m/v1/devices/pwn/kpi/list/{aname}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `KpiInfoList`
- **Error**: `VerizonError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Pwn.KpiListRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `aname` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `KpiInfoList` | `kpiInfoListSchema` | `src/models/kpi-info-list.ts` |

