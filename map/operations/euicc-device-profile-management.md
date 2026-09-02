<!-- Generated file — do not edit; regenerated with the SDK. -->

# EUiccDeviceProfileManagement — operations

Accessor: `client.eUiccDeviceProfileManagement` · Source: `src/resources/euicc-device-profile-management.ts` · 5 operations · Request and error types: namespace `EUiccDeviceProfileManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteLocalProfile

- **Signature**: `deleteLocalProfile(request: EUiccDeviceProfileManagement.DeleteLocalProfileRequest, options?: RequestOptions): ApiPromise<RequestResponse, EUiccDeviceProfileManagement.DeleteLocalProfileError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/delete`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RequestResponse`
- **Error**: `EUiccDeviceProfileManagement.DeleteLocalProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restErrorResponse"` [400] `RestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EUiccDeviceProfileManagement.DeleteLocalProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProfileChangeStateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileChangeStateRequest` | `profileChangeStateRequestSchema` | `src/models/profile-change-state-request.ts` |
| `RequestResponse` | `requestResponseSchema` | `src/models/request-response.ts` |
| `RestErrorResponse` | `restErrorResponseSchema` | `src/models/rest-error-response.ts` |

### disableLocalProfile

- **Signature**: `disableLocalProfile(request: EUiccDeviceProfileManagement.DisableLocalProfileRequest, options?: RequestOptions): ApiPromise<RequestResponse, EUiccDeviceProfileManagement.DisableLocalProfileError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/disable`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RequestResponse`
- **Error**: `EUiccDeviceProfileManagement.DisableLocalProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restErrorResponse"` [400] `RestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EUiccDeviceProfileManagement.DisableLocalProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProfileChangeStateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileChangeStateRequest` | `profileChangeStateRequestSchema` | `src/models/profile-change-state-request.ts` |
| `RequestResponse` | `requestResponseSchema` | `src/models/request-response.ts` |
| `RestErrorResponse` | `restErrorResponseSchema` | `src/models/rest-error-response.ts` |

### downloadLocalProfileToDisable

- **Signature**: `downloadLocalProfileToDisable(request: EUiccDeviceProfileManagement.DownloadLocalProfileToDisableRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, EUiccDeviceProfileManagement.DownloadLocalProfileToDisableError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/download_disable`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `EUiccDeviceProfileManagement.DownloadLocalProfileToDisableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EUiccDeviceProfileManagement.DownloadLocalProfileToDisableRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProfileChangeStateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileChangeStateRequest` | `profileChangeStateRequestSchema` | `src/models/profile-change-state-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### downloadLocalProfileToEnable

- **Signature**: `downloadLocalProfileToEnable(request: EUiccDeviceProfileManagement.DownloadLocalProfileToEnableRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, EUiccDeviceProfileManagement.DownloadLocalProfileToEnableError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/download_enable`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `EUiccDeviceProfileManagement.DownloadLocalProfileToEnableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EUiccDeviceProfileManagement.DownloadLocalProfileToEnableRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProfileChangeStateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileChangeStateRequest` | `profileChangeStateRequestSchema` | `src/models/profile-change-state-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### enableLocalProfile

- **Signature**: `enableLocalProfile(request: EUiccDeviceProfileManagement.EnableLocalProfileRequest, options?: RequestOptions): ApiPromise<RequestResponse, EUiccDeviceProfileManagement.EnableLocalProfileError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/enable`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RequestResponse`
- **Error**: `EUiccDeviceProfileManagement.EnableLocalProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restErrorResponse"` [400] `RestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EUiccDeviceProfileManagement.EnableLocalProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProfileChangeStateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileChangeStateRequest` | `profileChangeStateRequestSchema` | `src/models/profile-change-state-request.ts` |
| `RequestResponse` | `requestResponseSchema` | `src/models/request-response.ts` |
| `RestErrorResponse` | `restErrorResponseSchema` | `src/models/rest-error-response.ts` |

