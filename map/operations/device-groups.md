<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeviceGroups — operations

Accessor: `client.deviceGroups` · Source: `src/resources/device-groups.ts` · 5 operations · Request and error types: namespace `DeviceGroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createDeviceGroup

- **Signature**: `createDeviceGroup(request: DeviceGroups.CreateDeviceGroupRequestParams, options?: RequestOptions): ApiPromise<ConnectivityManagementSuccessResult, DeviceGroups.CreateDeviceGroupError>`
- **Wire**: `POST /m2m/v1/groups`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ConnectivityManagementSuccessResult`
- **Error**: `DeviceGroups.CreateDeviceGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceGroups.CreateDeviceGroupRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateDeviceGroupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateDeviceGroupRequest` | `createDeviceGroupRequestSchema` | `src/models/create-device-group-request.ts` |
| `ConnectivityManagementSuccessResult` | `connectivityManagementSuccessResultSchema` | `src/models/connectivity-management-success-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### deleteDeviceGroup

- **Signature**: `deleteDeviceGroup(request: DeviceGroups.DeleteDeviceGroupRequest, options?: RequestOptions): ApiPromise<ConnectivityManagementSuccessResult, DeviceGroups.DeleteDeviceGroupError>`
- **Wire**: `DELETE /m2m/v1/groups/{aname}/name/{gname}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectivityManagementSuccessResult`
- **Error**: `DeviceGroups.DeleteDeviceGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceGroups.DeleteDeviceGroupRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `aname` | `path` | `string` | yes |
| `gname` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectivityManagementSuccessResult` | `connectivityManagementSuccessResultSchema` | `src/models/connectivity-management-success-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### getDeviceGroupInformation

- **Signature**: `getDeviceGroupInformation(request: DeviceGroups.GetDeviceGroupInformationRequest, options?: RequestOptions): ApiPromise<DeviceGroupDevicesData, DeviceGroups.GetDeviceGroupInformationError>`
- **Wire**: `GET /m2m/v1/groups/{aname}/name/{gname}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceGroupDevicesData`
- **Error**: `DeviceGroups.GetDeviceGroupInformationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceGroups.GetDeviceGroupInformationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `aname` | `path` | `string` | yes |
| `gname` | `path` | `string` | yes |
| `next` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceGroupDevicesData` | `deviceGroupDevicesDataSchema` | `src/models/device-group-devices-data.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### listDeviceGroups

- **Signature**: `listDeviceGroups(request: DeviceGroups.ListDeviceGroupsRequest, options?: RequestOptions): ApiPromise<DeviceGroup[], DeviceGroups.ListDeviceGroupsError>`
- **Wire**: `GET /m2m/v1/groups/{aname}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceGroup[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DeviceGroups.ListDeviceGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceGroups.ListDeviceGroupsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `aname` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceGroup` | `deviceGroupSchema` | `src/models/device-group.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### updateDeviceGroup

- **Signature**: `updateDeviceGroup(request: DeviceGroups.UpdateDeviceGroupRequest, options?: RequestOptions): ApiPromise<ConnectivityManagementSuccessResult, DeviceGroups.UpdateDeviceGroupError>`
- **Wire**: `PUT /m2m/v1/groups/{aname}/name/{gname}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ConnectivityManagementSuccessResult`
- **Error**: `DeviceGroups.UpdateDeviceGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceGroups.UpdateDeviceGroupRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `aname` | `path` | `string` | yes |
| `gname` | `path` | `string` | yes |
| `body` | `body` | `DeviceGroupUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceGroupUpdateRequest` | `deviceGroupUpdateRequestSchema` | `src/models/device-group-update-request.ts` |
| `ConnectivityManagementSuccessResult` | `connectivityManagementSuccessResultSchema` | `src/models/connectivity-management-success-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

