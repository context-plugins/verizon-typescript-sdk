<!-- Generated file — do not edit; regenerated with the SDK. -->

# SensorInsightsDeviceProfile — operations

Accessor: `client.sensorInsightsDeviceProfile` · Source: `src/resources/sensor-insights-device-profile.ts` · 4 operations · Request and error types: namespace `SensorInsightsDeviceProfile`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createAProfile

- **Signature**: `createAProfile(request: SensorInsightsDeviceProfile.CreateAProfileRequest, options?: RequestOptions): ApiPromise<DtoProfileResponse[], SensorInsightsDeviceProfile.CreateAProfileError>`
- **Wire**: `POST /dm/v1/deviceConfigurationProfiles`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DtoProfileResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SensorInsightsDeviceProfile.CreateAProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError500"` [500] `ManagementError500` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsDeviceProfile.CreateAProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoConfigurationProfile` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoConfigurationProfile` | `dtoConfigurationProfileSchema` | `src/models/dto-configuration-profile.ts` |
| `DtoProfileResponse` | `dtoProfileResponseSchema` | `src/models/dto-profile-response.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

### deleteAProfile

- **Signature**: `deleteAProfile(request: SensorInsightsDeviceProfile.DeleteAProfileRequest, options?: RequestOptions): ApiPromise<DtoProfileResponse[], SensorInsightsDeviceProfile.DeleteAProfileError>`
- **Wire**: `DELETE /dm/v1/deviceConfigurationProfiles`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DtoProfileResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SensorInsightsDeviceProfile.DeleteAProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError500"` [500] `ManagementError500` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsDeviceProfile.DeleteAProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `deleterequest` | `header` | `DtoConfigurationProfileDelete` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoConfigurationProfileDelete` | `dtoConfigurationProfileDeleteSchema` | `src/models/dto-configuration-profile-delete.ts` |
| `DtoProfileResponse` | `dtoProfileResponseSchema` | `src/models/dto-profile-response.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

### queryAProfile

- **Signature**: `queryAProfile(request: SensorInsightsDeviceProfile.QueryAProfileRequest, options?: RequestOptions): ApiPromise<DtoProfileResponse[], SensorInsightsDeviceProfile.QueryAProfileError>`
- **Wire**: `POST /dm/v1/deviceConfigurationProfiles/actions/query`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DtoProfileResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SensorInsightsDeviceProfile.QueryAProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError500"` [500] `ManagementError500` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsDeviceProfile.QueryAProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ResourceResourceQuery` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceResourceQuery` | `resourceResourceQuerySchema` | `src/models/resource-resource-query.ts` |
| `DtoProfileResponse` | `dtoProfileResponseSchema` | `src/models/dto-profile-response.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

### updateAProfile

- **Signature**: `updateAProfile(request: SensorInsightsDeviceProfile.UpdateAProfileRequest, options?: RequestOptions): ApiPromise<DtoProfileResponse[], SensorInsightsDeviceProfile.UpdateAProfileError>`
- **Wire**: `PATCH /dm/v1/deviceConfigurationProfiles`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DtoProfileResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SensorInsightsDeviceProfile.UpdateAProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError500"` [500] `ManagementError500` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsDeviceProfile.UpdateAProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoConfigurationProfilePath` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoConfigurationProfilePath` | `dtoConfigurationProfilePathSchema` | `src/models/dto-configuration-profile-path.ts` |
| `DtoProfileResponse` | `dtoProfileResponseSchema` | `src/models/dto-profile-response.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

