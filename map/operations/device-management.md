<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeviceManagement — operations

Accessor: `client.deviceManagement` · Source: `src/resources/device-management.ts` · 29 operations · Request and error types: namespace `DeviceManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### activateServiceForDevices

- **Signature**: `activateServiceForDevices(request: DeviceManagement.ActivateServiceForDevicesRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.ActivateServiceForDevicesError>`
- **Wire**: `POST /m2m/v1/devices/actions/activate`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.ActivateServiceForDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.ActivateServiceForDevicesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CarrierActivateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CarrierActivateRequest` | `carrierActivateRequestSchema` | `src/models/carrier-activate-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### addDevices

- **Signature**: `addDevices(request: DeviceManagement.AddDevicesRequestParams, options?: RequestOptions): ApiPromise<AddDevicesResult[], DeviceManagement.AddDevicesError>`
- **Wire**: `POST /m2m/v1/devices/actions/add`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AddDevicesResult[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DeviceManagement.AddDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.AddDevicesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AddDevicesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AddDevicesRequest` | `addDevicesRequestSchema` | `src/models/add-devices-request.ts` |
| `AddDevicesResult` | `addDevicesResultSchema` | `src/models/add-devices-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### billedUsageInfo

- **Signature**: `billedUsageInfo(request: DeviceManagement.BilledUsageInfoRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.BilledUsageInfoError>`
- **Wire**: `POST /m2m/v1/devices/usage/actions/billedusage/list`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.BilledUsageInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.BilledUsageInfoRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BilledusageListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BilledusageListRequest` | `billedusageListRequestSchema` | `src/models/billedusage-list-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### changeDevicesServicePlan

- **Signature**: `changeDevicesServicePlan(request: DeviceManagement.ChangeDevicesServicePlanRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.ChangeDevicesServicePlanError>`
- **Wire**: `PUT /m2m/v1/devices/actions/plan`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.ChangeDevicesServicePlanError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.ChangeDevicesServicePlanRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ServicePlanUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServicePlanUpdateRequest` | `servicePlanUpdateRequestSchema` | `src/models/service-plan-update-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### checkDevicesAvailabilityForActivation

- **Signature**: `checkDevicesAvailabilityForActivation(request: DeviceManagement.CheckDevicesAvailabilityForActivationRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.CheckDevicesAvailabilityForActivationError>`
- **Wire**: `POST /m2m/v1/devices/availability/actions/list`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.CheckDevicesAvailabilityForActivationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.CheckDevicesAvailabilityForActivationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeviceActivationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceActivationRequest` | `deviceActivationRequestSchema` | `src/models/device-activation-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### deactivateServiceForDevices

- **Signature**: `deactivateServiceForDevices(request: DeviceManagement.DeactivateServiceForDevicesRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.DeactivateServiceForDevicesError>`
- **Wire**: `POST /m2m/v1/devices/actions/deactivate`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.DeactivateServiceForDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.DeactivateServiceForDevicesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CarrierDeactivateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CarrierDeactivateRequest` | `carrierDeactivateRequestSchema` | `src/models/carrier-deactivate-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### deleteDeactivatedDevices

- **Signature**: `deleteDeactivatedDevices(request: DeviceManagement.DeleteDeactivatedDevicesRequest, options?: RequestOptions): ApiPromise<DeleteDevicesResult[], DeviceManagement.DeleteDeactivatedDevicesError>`
- **Wire**: `POST /m2m/v1/devices/actions/delete`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeleteDevicesResult[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DeviceManagement.DeleteDeactivatedDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.DeleteDeactivatedDevicesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteDevicesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteDevicesRequest` | `deleteDevicesRequestSchema` | `src/models/delete-devices-request.ts` |
| `DeleteDevicesResult` | `deleteDevicesResultSchema` | `src/models/delete-devices-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### deviceUpload

- **Signature**: `deviceUpload(request: DeviceManagement.DeviceUploadRequestParams, options?: RequestOptions): ApiPromise<RequestResponse, DeviceManagement.DeviceUploadError>`
- **Wire**: `POST /m2m/v1/devices/actions/upload`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RequestResponse`
- **Error**: `DeviceManagement.DeviceUploadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restErrorResponse"` [400] `RestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.DeviceUploadRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeviceUploadRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceUploadRequest` | `deviceUploadRequestSchema` | `src/models/device-upload-request.ts` |
| `RequestResponse` | `requestResponseSchema` | `src/models/request-response.ts` |
| `RestErrorResponse` | `restErrorResponseSchema` | `src/models/rest-error-response.ts` |

### deviceUploadStatus

- **Signature**: `deviceUploadStatus(request: DeviceManagement.DeviceUploadStatusRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.DeviceUploadStatusError>`
- **Wire**: `POST /m2m/v1/devices/requests/status`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.DeviceUploadStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.DeviceUploadStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CheckOrderStatusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckOrderStatusRequest` | `checkOrderStatusRequestSchema` | `src/models/check-order-status-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### getDeviceExtendedDiagnosticInformation

- **Signature**: `getDeviceExtendedDiagnosticInformation(request: DeviceManagement.GetDeviceExtendedDiagnosticInformationRequest, options?: RequestOptions): ApiPromise<DeviceExtendedDiagnosticsResult, DeviceManagement.GetDeviceExtendedDiagnosticInformationError>`
- **Wire**: `POST /m2m/v1/devices/extendeddiagnostics/actions/list`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceExtendedDiagnosticsResult`
- **Error**: `DeviceManagement.GetDeviceExtendedDiagnosticInformationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.GetDeviceExtendedDiagnosticInformationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeviceExtendedDiagnosticsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceExtendedDiagnosticsRequest` | `deviceExtendedDiagnosticsRequestSchema` | `src/models/device-extended-diagnostics-request.ts` |
| `DeviceExtendedDiagnosticsResult` | `deviceExtendedDiagnosticsResultSchema` | `src/models/device-extended-diagnostics-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### getDeviceServiceSuspensionStatus

- **Signature**: `getDeviceServiceSuspensionStatus(request: DeviceManagement.GetDeviceServiceSuspensionStatusRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.GetDeviceServiceSuspensionStatusError>`
- **Wire**: `POST /m2m/v1/devices/suspension/status`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.GetDeviceServiceSuspensionStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.GetDeviceServiceSuspensionStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeviceSuspensionStatusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceSuspensionStatusRequest` | `deviceSuspensionStatusRequestSchema` | `src/models/device-suspension-status-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### listCurrentDevicesPrlVersion

- **Signature**: `listCurrentDevicesPrlVersion(request: DeviceManagement.ListCurrentDevicesPrlVersionRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.ListCurrentDevicesPrlVersionError>`
- **Wire**: `POST /m2m/v1/devices/prl/actions/list`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.ListCurrentDevicesPrlVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.ListCurrentDevicesPrlVersionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DevicePrlListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DevicePrlListRequest` | `devicePrlListRequestSchema` | `src/models/device-prl-list-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### listDevicesInformation

- **Signature**: `listDevicesInformation(request: DeviceManagement.ListDevicesInformationRequest, options?: RequestOptions): ApiPromise<AccountDeviceListResult, DeviceManagement.ListDevicesInformationError>`
- **Wire**: `POST /m2m/v1/devices/actions/list`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AccountDeviceListResult`
- **Error**: `DeviceManagement.ListDevicesInformationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.ListDevicesInformationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AccountDeviceListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountDeviceListRequest` | `accountDeviceListRequestSchema` | `src/models/account-device-list-request.ts` |
| `AccountDeviceListResult` | `accountDeviceListResultSchema` | `src/models/account-device-list-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### listDevicesProvisioningHistory

- **Signature**: `listDevicesProvisioningHistory(request: DeviceManagement.ListDevicesProvisioningHistoryRequest, options?: RequestOptions): ApiPromise<DeviceProvisioningHistoryListResult[], DeviceManagement.ListDevicesProvisioningHistoryError>`
- **Wire**: `POST /m2m/v1/devices/history/actions/list`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceProvisioningHistoryListResult[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DeviceManagement.ListDevicesProvisioningHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.ListDevicesProvisioningHistoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeviceProvisioningHistoryListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceProvisioningHistoryListRequest` | `deviceProvisioningHistoryListRequestSchema` | `src/models/device-provisioning-history-list-request.ts` |
| `DeviceProvisioningHistoryListResult` | `deviceProvisioningHistoryListResultSchema` | `src/models/device-provisioning-history-list-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### listDevicesUsageHistory

- **Signature**: `listDevicesUsageHistory(request: DeviceManagement.ListDevicesUsageHistoryRequest, options?: RequestOptions): ApiPromise<DeviceUsageListResult, DeviceManagement.ListDevicesUsageHistoryError>`
- **Wire**: `POST /m2m/v1/devices/usage/actions/list`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceUsageListResult`
- **Error**: `DeviceManagement.ListDevicesUsageHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.ListDevicesUsageHistoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeviceUsageListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceUsageListRequest` | `deviceUsageListRequestSchema` | `src/models/device-usage-list-request.ts` |
| `DeviceUsageListResult` | `deviceUsageListResultSchema` | `src/models/device-usage-list-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### listDevicesWithImeiIccidMismatch

- **Signature**: `listDevicesWithImeiIccidMismatch(request: DeviceManagement.ListDevicesWithImeiIccidMismatchRequest, options?: RequestOptions): ApiPromise<DeviceMismatchListResult, DeviceManagement.ListDevicesWithImeiIccidMismatchError>`
- **Wire**: `POST /m2m/v1/devices/actions/list/imeiiccidmismatch`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceMismatchListResult`
- **Error**: `DeviceManagement.ListDevicesWithImeiIccidMismatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.ListDevicesWithImeiIccidMismatchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeviceMismatchListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceMismatchListRequest` | `deviceMismatchListRequestSchema` | `src/models/device-mismatch-list-request.ts` |
| `DeviceMismatchListResult` | `deviceMismatchListResultSchema` | `src/models/device-mismatch-list-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### moveDevicesWithinAccountsOfProfile

- **Signature**: `moveDevicesWithinAccountsOfProfile(request: DeviceManagement.MoveDevicesWithinAccountsOfProfileRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.MoveDevicesWithinAccountsOfProfileError>`
- **Wire**: `PUT /m2m/v1/devices/actions/move`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.MoveDevicesWithinAccountsOfProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.MoveDevicesWithinAccountsOfProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MoveDeviceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MoveDeviceRequest` | `moveDeviceRequestSchema` | `src/models/move-device-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### restoreServiceForSuspendedDevices

- **Signature**: `restoreServiceForSuspendedDevices(request: DeviceManagement.RestoreServiceForSuspendedDevicesRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.RestoreServiceForSuspendedDevicesError>`
- **Wire**: `POST /m2m/v1/devices/actions/restore`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.RestoreServiceForSuspendedDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.RestoreServiceForSuspendedDevicesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CarrierActionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CarrierActionsRequest` | `carrierActionsRequestSchema` | `src/models/carrier-actions-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### retrieveAggregateDeviceUsageHistory

- **Signature**: `retrieveAggregateDeviceUsageHistory(request: DeviceManagement.RetrieveAggregateDeviceUsageHistoryRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.RetrieveAggregateDeviceUsageHistoryError>`
- **Wire**: `POST /m2m/v1/devices/usage/actions/list/aggregate`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.RetrieveAggregateDeviceUsageHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.RetrieveAggregateDeviceUsageHistoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeviceAggregateUsageListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceAggregateUsageListRequest` | `deviceAggregateUsageListRequestSchema` | `src/models/device-aggregate-usage-list-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### retrieveDeviceConnectionHistory

- **Signature**: `retrieveDeviceConnectionHistory(request: DeviceManagement.RetrieveDeviceConnectionHistoryRequest, options?: RequestOptions): ApiPromise<ConnectionHistoryResult, DeviceManagement.RetrieveDeviceConnectionHistoryError>`
- **Wire**: `POST /m2m/v1/devices/connections/actions/listHistory`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ConnectionHistoryResult`
- **Error**: `DeviceManagement.RetrieveDeviceConnectionHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.RetrieveDeviceConnectionHistoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeviceConnectionListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceConnectionListRequest` | `deviceConnectionListRequestSchema` | `src/models/device-connection-list-request.ts` |
| `ConnectionHistoryResult` | `connectionHistoryResultSchema` | `src/models/connection-history-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### suspendServiceForDevices

- **Signature**: `suspendServiceForDevices(request: DeviceManagement.SuspendServiceForDevicesRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.SuspendServiceForDevicesError>`
- **Wire**: `POST /m2m/v1/devices/actions/suspend`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.SuspendServiceForDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.SuspendServiceForDevicesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CarrierActionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CarrierActionsRequest` | `carrierActionsRequestSchema` | `src/models/carrier-actions-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### updateDeviceId

- **Signature**: `updateDeviceId(request: DeviceManagement.UpdateDeviceIdRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.UpdateDeviceIdError>`
- **Wire**: `PUT /m2m/v1/devices/{serviceType}/actions/deviceId`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.UpdateDeviceIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.UpdateDeviceIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceType` | `path` | `string` | yes |
| `body` | `body` | `ChangeDeviceIdRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChangeDeviceIdRequest` | `changeDeviceIdRequestSchema` | `src/models/change-device-id-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### updateDevicesContactInformation

- **Signature**: `updateDevicesContactInformation(request: DeviceManagement.UpdateDevicesContactInformationRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.UpdateDevicesContactInformationError>`
- **Wire**: `PUT /m2m/v1/devices/actions/contactInfo`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.UpdateDevicesContactInformationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.UpdateDevicesContactInformationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContactInfoUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactInfoUpdateRequest` | `contactInfoUpdateRequestSchema` | `src/models/contact-info-update-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### updateDevicesCostCenterCode

- **Signature**: `updateDevicesCostCenterCode(request: DeviceManagement.UpdateDevicesCostCenterCodeRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.UpdateDevicesCostCenterCodeError>`
- **Wire**: `PUT /m2m/v1/devices/costCenter`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.UpdateDevicesCostCenterCodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.UpdateDevicesCostCenterCodeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeviceCostCenterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceCostCenterRequest` | `deviceCostCenterRequestSchema` | `src/models/device-cost-center-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### updateDevicesCustomFields

- **Signature**: `updateDevicesCustomFields(request: DeviceManagement.UpdateDevicesCustomFieldsRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.UpdateDevicesCustomFieldsError>`
- **Wire**: `PUT /m2m/v1/devices/actions/customFields`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.UpdateDevicesCustomFieldsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.UpdateDevicesCustomFieldsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CustomFieldsUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomFieldsUpdateRequest` | `customFieldsUpdateRequestSchema` | `src/models/custom-fields-update-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### updateDevicesState

- **Signature**: `updateDevicesState(request: DeviceManagement.UpdateDevicesStateRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.UpdateDevicesStateError>`
- **Wire**: `PUT /m2m/v1/devices/actions/gotostate`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.UpdateDevicesStateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.UpdateDevicesStateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GoToStateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoToStateRequest` | `goToStateRequestSchema` | `src/models/go-to-state-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### uploadActivateDevice

- **Signature**: `uploadActivateDevice(request: DeviceManagement.UploadActivateDeviceRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.UploadActivateDeviceError>`
- **Wire**: `POST /m2m/v1/devices/actions/uploadactivate`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.UploadActivateDeviceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.UploadActivateDeviceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UploadsActivatesDeviceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadsActivatesDeviceRequest` | `uploadsActivatesDeviceRequestSchema` | `src/models/uploads-activates-device-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### usageSegmentationLabelAssociation

- **Signature**: `usageSegmentationLabelAssociation(request: DeviceManagement.UsageSegmentationLabelAssociationRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.UsageSegmentationLabelAssociationError>`
- **Wire**: `POST /m2m/v1/devices/actions/usagesegmentationlabels`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.UsageSegmentationLabelAssociationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.UsageSegmentationLabelAssociationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AssociateLabelRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssociateLabelRequest` | `associateLabelRequestSchema` | `src/models/associate-label-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### usageSegmentationLabelDeletion

- **Signature**: `usageSegmentationLabelDeletion(request: DeviceManagement.UsageSegmentationLabelDeletionRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, DeviceManagement.UsageSegmentationLabelDeletionError>`
- **Wire**: `DELETE /m2m/v1/devices/actions/usagesegmentationlabels`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceManagementResult`
- **Error**: `DeviceManagement.UsageSegmentationLabelDeletionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceManagement.UsageSegmentationLabelDeletionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountName` | `query` | — | `string` | yes |
| `labelList` | `query` | `LabelList` | `LabelsList` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LabelsList` | `labelsListSchema` | `src/models/labels-list.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

