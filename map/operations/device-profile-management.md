<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeviceProfileManagement — operations

Accessor: `client.deviceProfileManagement` · Source: `src/resources/device-profile-management.ts` · 4 operations · Request and error types: namespace `DeviceProfileManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### activateDeviceThroughProfile

- **Signature**: `activateDeviceThroughProfile(request: DeviceProfileManagement.ActivateDeviceThroughProfileRequest, options?: RequestOptions): ApiPromise<RequestResponse, DeviceProfileManagement.ActivateDeviceThroughProfileError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/activate_enable`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RequestResponse`
- **Error**: `DeviceProfileManagement.ActivateDeviceThroughProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restErrorResponse"` [400] `RestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceProfileManagement.ActivateDeviceThroughProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ActivateDeviceProfileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActivateDeviceProfileRequest` | `activateDeviceProfileRequestSchema` | `src/models/activate-device-profile-request.ts` |
| `RequestResponse` | `requestResponseSchema` | `src/models/request-response.ts` |
| `RestErrorResponse` | `restErrorResponseSchema` | `src/models/rest-error-response.ts` |

### profileToActivateDevice

- **Signature**: `profileToActivateDevice(request: DeviceProfileManagement.ProfileToActivateDeviceRequest, options?: RequestOptions): ApiPromise<RequestResponse, DeviceProfileManagement.ProfileToActivateDeviceError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/activate`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RequestResponse`
- **Error**: `DeviceProfileManagement.ProfileToActivateDeviceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restErrorResponse"` [400] `RestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceProfileManagement.ProfileToActivateDeviceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProfileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileRequest` | `profileRequestSchema` | `src/models/profile-request.ts` |
| `RequestResponse` | `requestResponseSchema` | `src/models/request-response.ts` |
| `RestErrorResponse` | `restErrorResponseSchema` | `src/models/rest-error-response.ts` |

### profileToDeactivateDevice

- **Signature**: `profileToDeactivateDevice(request: DeviceProfileManagement.ProfileToDeactivateDeviceRequest, options?: RequestOptions): ApiPromise<RequestResponse, DeviceProfileManagement.ProfileToDeactivateDeviceError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/deactivate`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RequestResponse`
- **Error**: `DeviceProfileManagement.ProfileToDeactivateDeviceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restErrorResponse"` [400] `RestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceProfileManagement.ProfileToDeactivateDeviceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeactivateDeviceProfileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeactivateDeviceProfileRequest` | `deactivateDeviceProfileRequestSchema` | `src/models/deactivate-device-profile-request.ts` |
| `RequestResponse` | `requestResponseSchema` | `src/models/request-response.ts` |
| `RestErrorResponse` | `restErrorResponseSchema` | `src/models/rest-error-response.ts` |

### profileToSetFallbackAttribute

- **Signature**: `profileToSetFallbackAttribute(request: DeviceProfileManagement.ProfileToSetFallbackAttributeRequest, options?: RequestOptions): ApiPromise<RequestResponse, DeviceProfileManagement.ProfileToSetFallbackAttributeError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/setfallbackattribute`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RequestResponse`
- **Error**: `DeviceProfileManagement.ProfileToSetFallbackAttributeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restErrorResponse"` [400] `RestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceProfileManagement.ProfileToSetFallbackAttributeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SetFallbackAttributeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetFallbackAttributeRequest` | `setFallbackAttributeRequestSchema` | `src/models/set-fallback-attribute-request.ts` |
| `RequestResponse` | `requestResponseSchema` | `src/models/request-response.ts` |
| `RestErrorResponse` | `restErrorResponseSchema` | `src/models/rest-error-response.ts` |

