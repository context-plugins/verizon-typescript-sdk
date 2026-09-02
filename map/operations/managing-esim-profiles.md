<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManagingESimProfiles — operations

Accessor: `client.managingESimProfiles` · Source: `src/resources/managing-esim-profiles.ts` · 10 operations · Request and error types: namespace `ManagingESimProfiles`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### activateADeviceProfile

- **Signature**: `activateADeviceProfile(request: ManagingESimProfiles.ActivateADeviceProfileRequest, options?: RequestOptions): ApiPromise<GioRequestResponse, ManagingESimProfiles.ActivateADeviceProfileError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/activate`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GioRequestResponse`
- **Error**: `ManagingESimProfiles.ActivateADeviceProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [400–599] `GioRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManagingESimProfiles.ActivateADeviceProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GioProfileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GioProfileRequest` | `gioProfileRequestSchema` | `src/models/gio-profile-request.ts` |
| `GioRequestResponse` | `gioRequestResponseSchema` | `src/models/gio-request-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

### deactivateADeviceProfile

- **Signature**: `deactivateADeviceProfile(request: ManagingESimProfiles.DeactivateADeviceProfileRequest, options?: RequestOptions): ApiPromise<GioRequestResponse, ManagingESimProfiles.DeactivateADeviceProfileError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/deactivate`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GioRequestResponse`
- **Error**: `ManagingESimProfiles.DeactivateADeviceProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [400–599] `GioRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManagingESimProfiles.DeactivateADeviceProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GioDeactivateDeviceProfileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GioDeactivateDeviceProfileRequest` | `gioDeactivateDeviceProfileRequestSchema` | `src/models/gio-deactivate-device-profile-request.ts` |
| `GioRequestResponse` | `gioRequestResponseSchema` | `src/models/gio-request-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

### deleteADeviceProfile

- **Signature**: `deleteADeviceProfile(request: ManagingESimProfiles.DeleteADeviceProfileRequest, options?: RequestOptions): ApiPromise<GioRequestResponse, ManagingESimProfiles.DeleteADeviceProfileError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/delete`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GioRequestResponse`
- **Error**: `ManagingESimProfiles.DeleteADeviceProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [400–599] `GioRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManagingESimProfiles.DeleteADeviceProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeviceProfileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceProfileRequest` | `deviceProfileRequestSchema` | `src/models/device-profile-request.ts` |
| `GioRequestResponse` | `gioRequestResponseSchema` | `src/models/gio-request-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

### deviceSuspend

- **Signature**: `deviceSuspend(request: ManagingESimProfiles.DeviceSuspendRequest, options?: RequestOptions): ApiPromise<GioRequestResponse, ManagingESimProfiles.DeviceSuspendError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/device_suspend`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GioRequestResponse`
- **Error**: `ManagingESimProfiles.DeviceSuspendError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [400–599] `GioRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManagingESimProfiles.DeviceSuspendRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GioProfileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GioProfileRequest` | `gioProfileRequestSchema` | `src/models/gio-profile-request.ts` |
| `GioRequestResponse` | `gioRequestResponseSchema` | `src/models/gio-request-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

### downloadADeviceProfile

- **Signature**: `downloadADeviceProfile(request: ManagingESimProfiles.DownloadADeviceProfileRequest, options?: RequestOptions): ApiPromise<GioRequestResponse, ManagingESimProfiles.DownloadADeviceProfileError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/download`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GioRequestResponse`
- **Error**: `ManagingESimProfiles.DownloadADeviceProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [400–599] `GioRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManagingESimProfiles.DownloadADeviceProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeviceProfileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceProfileRequest` | `deviceProfileRequestSchema` | `src/models/device-profile-request.ts` |
| `GioRequestResponse` | `gioRequestResponseSchema` | `src/models/gio-request-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

### enableADeviceProfile

- **Signature**: `enableADeviceProfile(request: ManagingESimProfiles.EnableADeviceProfileRequest, options?: RequestOptions): ApiPromise<GioRequestResponse, ManagingESimProfiles.EnableADeviceProfileError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/enable`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GioRequestResponse`
- **Error**: `ManagingESimProfiles.EnableADeviceProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [400–599] `GioRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManagingESimProfiles.EnableADeviceProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeviceProfileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceProfileRequest` | `deviceProfileRequestSchema` | `src/models/device-profile-request.ts` |
| `GioRequestResponse` | `gioRequestResponseSchema` | `src/models/gio-request-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

### enableADeviceProfileForDownload

- **Signature**: `enableADeviceProfileForDownload(request: ManagingESimProfiles.EnableADeviceProfileForDownloadRequest, options?: RequestOptions): ApiPromise<GioRequestResponse, ManagingESimProfiles.EnableADeviceProfileForDownloadError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/download_enable`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GioRequestResponse`
- **Error**: `ManagingESimProfiles.EnableADeviceProfileForDownloadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [400–599] `GioRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManagingESimProfiles.EnableADeviceProfileForDownloadRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeviceProfileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceProfileRequest` | `deviceProfileRequestSchema` | `src/models/device-profile-request.ts` |
| `GioRequestResponse` | `gioRequestResponseSchema` | `src/models/gio-request-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

### profileSuspend

- **Signature**: `profileSuspend(request: ManagingESimProfiles.ProfileSuspendRequest, options?: RequestOptions): ApiPromise<GioRequestResponse, ManagingESimProfiles.ProfileSuspendError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/profile_suspend`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GioRequestResponse`
- **Error**: `ManagingESimProfiles.ProfileSuspendError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [400–599] `GioRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManagingESimProfiles.ProfileSuspendRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GioProfileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GioProfileRequest` | `gioProfileRequestSchema` | `src/models/gio-profile-request.ts` |
| `GioRequestResponse` | `gioRequestResponseSchema` | `src/models/gio-request-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

### resumeProfile

- **Signature**: `resumeProfile(request: ManagingESimProfiles.ResumeProfileRequest, options?: RequestOptions): ApiPromise<GioRequestResponse, ManagingESimProfiles.ResumeProfileError>`
- **Wire**: `POST /m2m/v1/devices/profile/actions/profile_resume`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GioRequestResponse`
- **Error**: `ManagingESimProfiles.ResumeProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [400–599] `GioRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManagingESimProfiles.ResumeProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GioProfileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GioProfileRequest` | `gioProfileRequestSchema` | `src/models/gio-profile-request.ts` |
| `GioRequestResponse` | `gioRequestResponseSchema` | `src/models/gio-request-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

### setFallback

- **Signature**: `setFallback(request: ManagingESimProfiles.SetFallbackRequest, options?: RequestOptions): ApiPromise<GioRequestResponse, ManagingESimProfiles.SetFallbackError>`
- **Wire**: `POST /v1/devices/profile/actions/setfallbackattribute`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GioRequestResponse`
- **Error**: `ManagingESimProfiles.SetFallbackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [400–599] `GioRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManagingESimProfiles.SetFallbackRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FallBack` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FallBack` | `fallBackSchema` | `src/models/fall-back.ts` |
| `GioRequestResponse` | `gioRequestResponseSchema` | `src/models/gio-request-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

