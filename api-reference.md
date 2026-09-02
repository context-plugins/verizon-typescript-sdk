# Reference

> Source: [VerizonClient](src/client.ts)

## AccountServiceController

> Source: [AccountServiceController](src/resources/account-service-controller.ts)

<details>
<summary><code>getAccountInformationUsingGet(request: AccountServiceController.GetAccountInformationUsingGetRequest, options?: RequestOptions): ApiPromise&lt;GetAccountInformationResponseforplanner, AccountServiceController.GetAccountInformationUsingGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns aaccount information associated with a specified account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountServiceController.getAccountInformationUsingGet({ accountName });
  // TODO: Handle 'response' of type GetAccountInformationResponseforplanner
} catch (err) {
  if (
    err instanceof AccountServiceController.GetAccountInformationUsingGetError &&
      err.payload.kind === "restErrorResponseforplanner"
  ) {
    // TODO: Handle 'err.payload.body' of type RestErrorResponseforplanner
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | The account's numeric name, including leading zeroes. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetAccountInformationResponseforplanner](src/models/get-account-information-responseforplanner.ts)</code>

**OnError**: <code>[AccountServiceController.GetAccountInformationUsingGetError](src/resources/account-service-controller.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## IntelligenceServiceController

> Source: [IntelligenceServiceController](src/resources/intelligence-service-controller.ts)

<details>
<summary><code>setConnectionPlanner(request: IntelligenceServiceController.SetConnectionPlannerRequest, options?: RequestOptions): ApiPromise&lt;AsynchronousRequestResultforplanner, IntelligenceServiceController.SetConnectionPlannerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves available device windows for Connection Planner.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.intelligenceServiceController.setConnectionPlanner();
  // TODO: Handle 'response' of type AsynchronousRequestResultforplanner
} catch (err) {
  if (
    err instanceof IntelligenceServiceController.SetConnectionPlannerError &&
      err.payload.kind === "restErrorResponseforplanner"
  ) {
    // TODO: Handle 'err.payload.body' of type RestErrorResponseforplanner
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GetDevicesWindowsRequestforplanner](src/models/get-devices-windows-requestforplanner.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AsynchronousRequestResultforplanner](src/models/asynchronous-request-resultforplanner.ts)</code>

**OnError**: <code>[IntelligenceServiceController.SetConnectionPlannerError](src/resources/intelligence-service-controller.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>statusConnectionPlanner(request: IntelligenceServiceController.StatusConnectionPlannerRequest, options?: RequestOptions): ApiPromise&lt;GetDeviceStatusesResponseforplanner, IntelligenceServiceController.StatusConnectionPlannerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the device status for the Connection Planner service.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.intelligenceServiceController.statusConnectionPlanner();
  // TODO: Handle 'response' of type GetDeviceStatusesResponseforplanner
} catch (err) {
  if (
    err instanceof IntelligenceServiceController.StatusConnectionPlannerError &&
      err.payload.kind === "restErrorResponseforplanner"
  ) {
    // TODO: Handle 'err.payload.body' of type RestErrorResponseforplanner
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[GetDeviceStatusesRequestforplanner](src/models/get-device-statuses-requestforplanner.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetDeviceStatusesResponseforplanner](src/models/get-device-statuses-responseforplanner.ts)</code>

**OnError**: <code>[IntelligenceServiceController.StatusConnectionPlannerError](src/resources/intelligence-service-controller.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DeviceManagement

> Source: [DeviceManagement](src/resources/device-management.ts)

<details>
<summary><code>activateServiceForDevices(request: DeviceManagement.ActivateServiceForDevicesRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.ActivateServiceForDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

If the devices do not already exist in the account, this API resource adds them before activation.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.activateServiceForDevices({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.ActivateServiceForDevicesError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CarrierActivateRequest](src/models/carrier-activate-request.ts)</code> | Request for activating a service on devices. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.ActivateServiceForDevicesError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addDevices(request: DeviceManagement.AddDevicesRequestParams, options?: RequestOptions): ApiPromise&lt;AddDevicesResult[], DeviceManagement.AddDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API if you want to manage some device settings before you are ready to activate service for the devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.addDevices({ body });
  // TODO: Handle 'response' of type AddDevicesResult[]
} catch (err) {
  if (
    err instanceof DeviceManagement.AddDevicesError && err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AddDevicesRequest](src/models/add-devices-request.ts)</code> | Devices to add. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AddDevicesResult](src/models/add-devices-result.ts)[]</code>

**OnError**: <code>[DeviceManagement.AddDevicesError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>billedUsageInfo(request: DeviceManagement.BilledUsageInfoRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.BilledUsageInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets billed usage for for either multiple devices or an entire billing account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.billedUsageInfo({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.BilledUsageInfoError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BilledusageListRequest](src/models/billedusage-list-request.ts)</code> | Request to list devices with mismatched IMEIs and ICCIDs. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.BilledUsageInfoError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>changeDevicesServicePlan(request: DeviceManagement.ChangeDevicesServicePlanRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.ChangeDevicesServicePlanError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the service plan for one or more devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.changeDevicesServicePlan({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.ChangeDevicesServicePlanError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ServicePlanUpdateRequest](src/models/service-plan-update-request.ts)</code> | Request to change device service plan. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.ChangeDevicesServicePlanError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>checkDevicesAvailabilityForActivation(request: DeviceManagement.CheckDevicesAvailabilityForActivationRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.CheckDevicesAvailabilityForActivationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks whether specified devices are registered by the manufacturer with the Verizon network and are available to be activated.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.checkDevicesAvailabilityForActivation({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.CheckDevicesAvailabilityForActivationError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeviceActivationRequest](src/models/device-activation-request.ts)</code> | Request to check if devices can be activated or not. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.CheckDevicesAvailabilityForActivationError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deactivateServiceForDevices(request: DeviceManagement.DeactivateServiceForDevicesRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.DeactivateServiceForDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deactivating service for a device may result in an early termination fee (ETF) being charged to the account, depending on the terms of the contract with Verizon. If your contract allows ETF waivers and if you want to use one for a particular deactivation, set the etfWaiver value to True.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.deactivateServiceForDevices({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.DeactivateServiceForDevicesError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CarrierDeactivateRequest](src/models/carrier-deactivate-request.ts)</code> | Request to deactivate service for one or more devices. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.DeactivateServiceForDevicesError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDeactivatedDevices(request: DeviceManagement.DeleteDeactivatedDevicesRequest, options?: RequestOptions): ApiPromise&lt;DeleteDevicesResult[], DeviceManagement.DeleteDeactivatedDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to remove unneeded devices from an account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.deleteDeactivatedDevices({ body });
  // TODO: Handle 'response' of type DeleteDevicesResult[]
} catch (err) {
  if (
    err instanceof DeviceManagement.DeleteDeactivatedDevicesError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeleteDevicesRequest](src/models/delete-devices-request.ts)</code> | Devices to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteDevicesResult](src/models/delete-devices-result.ts)[]</code>

**OnError**: <code>[DeviceManagement.DeleteDeactivatedDevicesError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deviceUpload(request: DeviceManagement.DeviceUploadRequestParams, options?: RequestOptions): ApiPromise&lt;RequestResponse, DeviceManagement.DeviceUploadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a device record

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.deviceUpload({ body });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  if (err instanceof DeviceManagement.DeviceUploadError && err.payload.kind === "restErrorResponse") {
    // TODO: Handle 'err.payload.body' of type RestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeviceUploadRequest](src/models/device-upload-request.ts)</code> | Device Upload Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>

**OnError**: <code>[DeviceManagement.DeviceUploadError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deviceUploadStatus(request: DeviceManagement.DeviceUploadStatusRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.DeviceUploadStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks the status of an activation order and lists where the order is in the provisioning process.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.deviceUploadStatus({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.DeviceUploadStatusError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CheckOrderStatusRequest](src/models/check-order-status-request.ts)</code> | The request body identifies the device and reporting period that you want included in the report. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.DeviceUploadStatusError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDeviceExtendedDiagnosticInformation(request: DeviceManagement.GetDeviceExtendedDiagnosticInformationRequest, options?: RequestOptions): ApiPromise&lt;DeviceExtendedDiagnosticsResult, DeviceManagement.GetDeviceExtendedDiagnosticInformationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns extended diagnostic information about a specified device, including connectivity, provisioning, billing and location status.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.getDeviceExtendedDiagnosticInformation({ body });
  // TODO: Handle 'response' of type DeviceExtendedDiagnosticsResult
} catch (err) {
  if (
    err instanceof DeviceManagement.GetDeviceExtendedDiagnosticInformationError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeviceExtendedDiagnosticsRequest](src/models/device-extended-diagnostics-request.ts)</code> | Request to query extended diagnostics information for a device. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceExtendedDiagnosticsResult](src/models/device-extended-diagnostics-result.ts)</code>

**OnError**: <code>[DeviceManagement.GetDeviceExtendedDiagnosticInformationError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDeviceServiceSuspensionStatus(request: DeviceManagement.GetDeviceServiceSuspensionStatusRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.GetDeviceServiceSuspensionStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns DeviceSuspensionStatus callback messages containing the current device state and information on how many days a device has been suspended and can continue to be suspended.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.getDeviceServiceSuspensionStatus({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.GetDeviceServiceSuspensionStatusError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeviceSuspensionStatusRequest](src/models/device-suspension-status-request.ts)</code> | Request to obtain service suspenstion status for a device. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.GetDeviceServiceSuspensionStatusError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCurrentDevicesPrlVersion(request: DeviceManagement.ListCurrentDevicesPrlVersionRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.ListCurrentDevicesPrlVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

4G and GSM devices do not have a PRL.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.listCurrentDevicesPrlVersion({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.ListCurrentDevicesPrlVersionError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DevicePrlListRequest](src/models/device-prl-list-request.ts)</code> | Request to query device PRL. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.ListCurrentDevicesPrlVersionError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDevicesInformation(request: DeviceManagement.ListDevicesInformationRequest, options?: RequestOptions): ApiPromise&lt;AccountDeviceListResult, DeviceManagement.ListDevicesInformationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a single device or information about all devices that match the given parameters. Returned information includes device provisioning state, service plan, MDN, MIN, and IP address.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.listDevicesInformation({ body });
  // TODO: Handle 'response' of type AccountDeviceListResult
} catch (err) {
  if (
    err instanceof DeviceManagement.ListDevicesInformationError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AccountDeviceListRequest](src/models/account-device-list-request.ts)</code> | Device information query. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountDeviceListResult](src/models/account-device-list-result.ts)</code>

**OnError**: <code>[DeviceManagement.ListDevicesInformationError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDevicesProvisioningHistory(request: DeviceManagement.ListDevicesProvisioningHistoryRequest, options?: RequestOptions): ApiPromise&lt;DeviceProvisioningHistoryListResult[], DeviceManagement.ListDevicesProvisioningHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the provisioning history of a specified device during a specified time period.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.listDevicesProvisioningHistory({ body });
  // TODO: Handle 'response' of type DeviceProvisioningHistoryListResult[]
} catch (err) {
  if (
    err instanceof DeviceManagement.ListDevicesProvisioningHistoryError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeviceProvisioningHistoryListRequest](src/models/device-provisioning-history-list-request.ts)</code> | Query to obtain device provisioning history. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceProvisioningHistoryListResult](src/models/device-provisioning-history-list-result.ts)[]</code>

**OnError**: <code>[DeviceManagement.ListDevicesProvisioningHistoryError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDevicesUsageHistory(request: DeviceManagement.ListDevicesUsageHistoryRequest, options?: RequestOptions): ApiPromise&lt;DeviceUsageListResult, DeviceManagement.ListDevicesUsageHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the network data usage history of a device during a specified time period.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.listDevicesUsageHistory({ body });
  // TODO: Handle 'response' of type DeviceUsageListResult
} catch (err) {
  if (
    err instanceof DeviceManagement.ListDevicesUsageHistoryError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeviceUsageListRequest](src/models/device-usage-list-request.ts)</code> | Request to obtain usage history for a specific device. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceUsageListResult](src/models/device-usage-list-result.ts)</code>

**OnError**: <code>[DeviceManagement.ListDevicesUsageHistoryError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDevicesWithImeiIccidMismatch(request: DeviceManagement.ListDevicesWithImeiIccidMismatchRequest, options?: RequestOptions): ApiPromise&lt;DeviceMismatchListResult, DeviceManagement.ListDevicesWithImeiIccidMismatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all 4G devices with an ICCID (SIM) that was not activated with the expected IMEI (hardware) during a specified time frame.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.listDevicesWithImeiIccidMismatch({ body });
  // TODO: Handle 'response' of type DeviceMismatchListResult
} catch (err) {
  if (
    err instanceof DeviceManagement.ListDevicesWithImeiIccidMismatchError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeviceMismatchListRequest](src/models/device-mismatch-list-request.ts)</code> | Request to list devices with mismatched IMEIs and ICCIDs. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceMismatchListResult](src/models/device-mismatch-list-result.ts)</code>

**OnError**: <code>[DeviceManagement.ListDevicesWithImeiIccidMismatchError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>moveDevicesWithinAccountsOfProfile(request: DeviceManagement.MoveDevicesWithinAccountsOfProfileRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.MoveDevicesWithinAccountsOfProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move active devices from one billing account to another within a customer profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.moveDevicesWithinAccountsOfProfile({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.MoveDevicesWithinAccountsOfProfileError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MoveDeviceRequest](src/models/move-device-request.ts)</code> | Request to move devices between accounts. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.MoveDevicesWithinAccountsOfProfileError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreServiceForSuspendedDevices(request: DeviceManagement.RestoreServiceForSuspendedDevicesRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.RestoreServiceForSuspendedDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restores service to one or more suspended devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.restoreServiceForSuspendedDevices({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.RestoreServiceForSuspendedDevicesError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CarrierActionsRequest](src/models/carrier-actions-request.ts)</code> | Request to restore services of one or more suspended devices. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.RestoreServiceForSuspendedDevicesError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveAggregateDeviceUsageHistory(request: DeviceManagement.RetrieveAggregateDeviceUsageHistoryRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.RetrieveAggregateDeviceUsageHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The information is returned in a callback response, so you must register a URL for DeviceUsage callback messages using the POST /callbacks API.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.retrieveAggregateDeviceUsageHistory({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.RetrieveAggregateDeviceUsageHistoryError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeviceAggregateUsageListRequest](src/models/device-aggregate-usage-list-request.ts)</code> | A request to retrieve aggregated device usage history information. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.RetrieveAggregateDeviceUsageHistoryError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveDeviceConnectionHistory(request: DeviceManagement.RetrieveDeviceConnectionHistoryRequest, options?: RequestOptions): ApiPromise&lt;ConnectionHistoryResult, DeviceManagement.RetrieveDeviceConnectionHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Each response includes a maximum of 500 records. To obtain more records, you can call the API multiple times, adjusting the earliest value each time to start where the previous request finished.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.retrieveDeviceConnectionHistory({ body });
  // TODO: Handle 'response' of type ConnectionHistoryResult
} catch (err) {
  if (
    err instanceof DeviceManagement.RetrieveDeviceConnectionHistoryError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeviceConnectionListRequest](src/models/device-connection-list-request.ts)</code> | Query to retrieve device connection history. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionHistoryResult](src/models/connection-history-result.ts)</code>

**OnError**: <code>[DeviceManagement.RetrieveDeviceConnectionHistoryError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>suspendServiceForDevices(request: DeviceManagement.SuspendServiceForDevicesRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.SuspendServiceForDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Suspends service for one or more devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.suspendServiceForDevices({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.SuspendServiceForDevicesError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CarrierActionsRequest](src/models/carrier-actions-request.ts)</code> | Request to suspend service for one or more devices. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.SuspendServiceForDevicesError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDeviceId(request: DeviceManagement.UpdateDeviceIdRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.UpdateDeviceIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the identifier of a 3G or 4G device to match hardware changes made for a line of service. Use this request to transfer the line of service and the MDN to new hardware, or to change the MDN.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.updateDeviceId({ serviceType, body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.UpdateDeviceIdError && err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>serviceType</code> | <code>string</code> | Identifier type. |
| <code>body</code> | <code>[ChangeDeviceIdRequest](src/models/change-device-id-request.ts)</code> | Request to update device id. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.UpdateDeviceIdError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDevicesContactInformation(request: DeviceManagement.UpdateDevicesContactInformationRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.UpdateDevicesContactInformationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a CarrierService callback message for each device in the request when the contact information has been changed, or if there was a problem and the change could not be completed.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.updateDevicesContactInformation({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.UpdateDevicesContactInformationError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ContactInfoUpdateRequest](src/models/contact-info-update-request.ts)</code> | Request to update contact information for devices. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.UpdateDevicesContactInformationError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDevicesCostCenterCode(request: DeviceManagement.UpdateDevicesCostCenterCodeRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.UpdateDevicesCostCenterCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes or removes the CostCenterCode value or customer name and address (Primary Place of Use) for one or more devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.updateDevicesCostCenterCode({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.UpdateDevicesCostCenterCodeError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeviceCostCenterRequest](src/models/device-cost-center-request.ts)</code> | Request to update cost center code value for one or more devices. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.UpdateDevicesCostCenterCodeError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDevicesCustomFields(request: DeviceManagement.UpdateDevicesCustomFieldsRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.UpdateDevicesCustomFieldsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a CarrierService callback message for each device in the request when the custom fields have been changed, or if there was a problem and the change could not be completed.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.updateDevicesCustomFields({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.UpdateDevicesCustomFieldsError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CustomFieldsUpdateRequest](src/models/custom-fields-update-request.ts)</code> | Request to update custom field of devices. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.UpdateDevicesCustomFieldsError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDevicesState(request: DeviceManagement.UpdateDevicesStateRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.UpdateDevicesStateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the provisioning state of one or more devices to a specified customer-defined service and state.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.updateDevicesState({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.UpdateDevicesStateError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GoToStateRequest](src/models/go-to-state-request.ts)</code> | Request to change device state to one defined by the user. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.UpdateDevicesStateError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadActivateDevice(request: DeviceManagement.UploadActivateDeviceRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.UploadActivateDeviceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads and activates device identifiers and SKUs for new devices from OEMs to Verizon.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.uploadActivateDevice({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.UploadActivateDeviceError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UploadsActivatesDeviceRequest](src/models/uploads-activates-device-request.ts)</code> | Request to Upload and Activate device. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.UploadActivateDeviceError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usageSegmentationLabelAssociation(request: DeviceManagement.UsageSegmentationLabelAssociationRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.UsageSegmentationLabelAssociationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Allows you to associate your own usage segmentation label with a device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.usageSegmentationLabelAssociation({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.UsageSegmentationLabelAssociationError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AssociateLabelRequest](src/models/associate-label-request.ts)</code> | Request to associate a label to a device. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.UsageSegmentationLabelAssociationError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usageSegmentationLabelDeletion(request: DeviceManagement.UsageSegmentationLabelDeletionRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceManagement.UsageSegmentationLabelDeletionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Allow customers to remove the associated label from a device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.usageSegmentationLabelDeletion({ accountName, labelList });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceManagement.UsageSegmentationLabelDeletionError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | The numeric name of the account. |
| <code>labelList</code> | <code>[LabelsList](src/models/labels-list.ts)</code> | A list of the Label IDs to remove from the exclusion list. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceManagement.UsageSegmentationLabelDeletionError](src/resources/device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Accounts

> Source: [Accounts](src/resources/accounts.ts)

<details>
<summary><code>getAccountInformation(request: Accounts.GetAccountInformationRequest, options?: RequestOptions): ApiPromise&lt;Account, Accounts.GetAccountInformationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a specified account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.getAccountInformation({ aname });
  // TODO: Handle 'response' of type Account
} catch (err) {
  if (
    err instanceof Accounts.GetAccountInformationError && err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>aname</code> | <code>string</code> | Account name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Account](src/models/account.ts)</code>

**OnError**: <code>[Accounts.GetAccountInformationError](src/resources/accounts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAccountLeads(request: Accounts.ListAccountLeadsRequest, options?: RequestOptions): ApiPromise&lt;AccountLeadsResult, Accounts.ListAccountLeadsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

When HTTP status is 202, a URL will be returned in the Location header of the form /leads/{aname}?next={token}. This URL can be used to request the next set of leads.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.listAccountLeads({ aname });
  // TODO: Handle 'response' of type AccountLeadsResult
} catch (err) {
  if (err instanceof Accounts.ListAccountLeadsError && err.payload.kind === "connectivityManagementResult") {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>aname</code> | <code>string</code> | Account name. |
| <code>next?</code> | <code>number</code> | Continue the previous query from the pageUrl in Location Header. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountLeadsResult](src/models/account-leads-result.ts)</code>

**OnError**: <code>[Accounts.ListAccountLeadsError](src/resources/accounts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAccountStatesAndServices(request: Accounts.ListAccountStatesAndServicesRequest, options?: RequestOptions): ApiPromise&lt;AccountStatesAndServices, Accounts.ListAccountStatesAndServicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list and details of all custom services and states defined for a specified account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.listAccountStatesAndServices({ aname });
  // TODO: Handle 'response' of type AccountStatesAndServices
} catch (err) {
  if (
    err instanceof Accounts.ListAccountStatesAndServicesError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>aname</code> | <code>string</code> | Account name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountStatesAndServices](src/models/account-states-and-services.ts)</code>

**OnError**: <code>[Accounts.ListAccountStatesAndServicesError](src/resources/accounts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DeviceGroups

> Source: [DeviceGroups](src/resources/device-groups.ts)

<details>
<summary><code>createDeviceGroup(request: DeviceGroups.CreateDeviceGroupRequestParams, options?: RequestOptions): ApiPromise&lt;ConnectivityManagementSuccessResult, DeviceGroups.CreateDeviceGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new device group and optionally add devices to the group. Device groups can make it easier to manage similar devices and to get reports on their usage.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceGroups.createDeviceGroup({ body });
  // TODO: Handle 'response' of type ConnectivityManagementSuccessResult
} catch (err) {
  if (
    err instanceof DeviceGroups.CreateDeviceGroupError && err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateDeviceGroupRequest](src/models/create-device-group-request.ts)</code> | A request to create a new device group. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectivityManagementSuccessResult](src/models/connectivity-management-success-result.ts)</code>

**OnError**: <code>[DeviceGroups.CreateDeviceGroupError](src/resources/device-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDeviceGroup(request: DeviceGroups.DeleteDeviceGroupRequest, options?: RequestOptions): ApiPromise&lt;ConnectivityManagementSuccessResult, DeviceGroups.DeleteDeviceGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a device group from the account. Devices in the group are moved to the default device group and are not deleted from the account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceGroups.deleteDeviceGroup({ aname, gname });
  // TODO: Handle 'response' of type ConnectivityManagementSuccessResult
} catch (err) {
  if (
    err instanceof DeviceGroups.DeleteDeviceGroupError && err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>aname</code> | <code>string</code> | Account name. |
| <code>gname</code> | <code>string</code> | Group name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectivityManagementSuccessResult](src/models/connectivity-management-success-result.ts)</code>

**OnError**: <code>[DeviceGroups.DeleteDeviceGroupError](src/resources/device-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDeviceGroupInformation(request: DeviceGroups.GetDeviceGroupInformationRequest, options?: RequestOptions): ApiPromise&lt;DeviceGroupDevicesData, DeviceGroups.GetDeviceGroupInformationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

When HTTP status is 202, a URL will be returned in the Location header of the form /groups/{aname}/name/{gname}/?next={token}. This URL can be used to request the next set of groups.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceGroups.getDeviceGroupInformation({ aname, gname });
  // TODO: Handle 'response' of type DeviceGroupDevicesData
} catch (err) {
  if (
    err instanceof DeviceGroups.GetDeviceGroupInformationError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>aname</code> | <code>string</code> | Account name. |
| <code>gname</code> | <code>string</code> | Group name. |
| <code>next?</code> | <code>number</code> | Continue the previous query from the pageUrl pagetoken. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceGroupDevicesData](src/models/device-group-devices-data.ts)</code>

**OnError**: <code>[DeviceGroups.GetDeviceGroupInformationError](src/resources/device-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDeviceGroups(request: DeviceGroups.ListDeviceGroupsRequest, options?: RequestOptions): ApiPromise&lt;DeviceGroup[], DeviceGroups.ListDeviceGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all device groups in a specified account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceGroups.listDeviceGroups({ aname });
  // TODO: Handle 'response' of type DeviceGroup[]
} catch (err) {
  if (
    err instanceof DeviceGroups.ListDeviceGroupsError && err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>aname</code> | <code>string</code> | Account name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceGroup](src/models/device-group.ts)[]</code>

**OnError**: <code>[DeviceGroups.ListDeviceGroupsError](src/resources/device-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDeviceGroup(request: DeviceGroups.UpdateDeviceGroupRequest, options?: RequestOptions): ApiPromise&lt;ConnectivityManagementSuccessResult, DeviceGroups.UpdateDeviceGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Make changes to a device group, including changing the name and description, and adding or removing devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceGroups.updateDeviceGroup({ aname, gname, body });
  // TODO: Handle 'response' of type ConnectivityManagementSuccessResult
} catch (err) {
  if (
    err instanceof DeviceGroups.UpdateDeviceGroupError && err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>aname</code> | <code>string</code> | Account name. |
| <code>gname</code> | <code>string</code> | Group name. |
| <code>body</code> | <code>[DeviceGroupUpdateRequest](src/models/device-group-update-request.ts)</code> | Request to update device group. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectivityManagementSuccessResult](src/models/connectivity-management-success-result.ts)</code>

**OnError**: <code>[DeviceGroups.UpdateDeviceGroupError](src/resources/device-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sms

> Source: [Sms](src/resources/sms.ts)

<details>
<summary><code>listDevicesSmsMessages(request: Sms.ListDevicesSmsMessagesRequest, options?: RequestOptions): ApiPromise&lt;SmsMessagesQueryResult, Sms.ListDevicesSmsMessagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

When HTTP status is 202, a URL will be returned in the Location header of the form /sms/{aname}/history?next={token}. This URL can be used to request the next set of messages.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sms.listDevicesSmsMessages({ aname });
  // TODO: Handle 'response' of type SmsMessagesQueryResult
} catch (err) {
  if (err instanceof Sms.ListDevicesSmsMessagesError && err.payload.kind === "connectivityManagementResult") {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>aname</code> | <code>string</code> | Account name. |
| <code>next?</code> | <code>number</code> | Continue the previous query from the URL in Location Header. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SmsMessagesQueryResult](src/models/sms-messages-query-result.ts)</code>

**OnError**: <code>[Sms.ListDevicesSmsMessagesError](src/resources/sms.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendSmsToDevice(request: Sms.SendSmsToDeviceRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, Sms.SendSmsToDeviceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The messages are queued on the ThingSpace Platform and sent as soon as possible, but they may be delayed due to traffic and routing considerations.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sms.sendSmsToDevice({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (err instanceof Sms.SendSmsToDeviceError && err.payload.kind === "connectivityManagementResult") {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SmsSendRequest](src/models/sms-send-request.ts)</code> | Request to send SMS. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[Sms.SendSmsToDeviceError](src/resources/sms.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startQueuedSmsDelivery(request: Sms.StartQueuedSmsDeliveryRequest, options?: RequestOptions): ApiPromise&lt;ConnectivityManagementSuccessResult, Sms.StartQueuedSmsDeliveryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Tells the ThingSpace Platform to start sending mobile-originated SMS messages through the EnhancedConnectivityService callback service. SMS messages from devices are queued until they are retrieved by your application, either by callback or synchronously with GET /sms/{accountName}/history.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sms.startQueuedSmsDelivery({ aname });
  // TODO: Handle 'response' of type ConnectivityManagementSuccessResult
} catch (err) {
  if (err instanceof Sms.StartQueuedSmsDeliveryError && err.payload.kind === "connectivityManagementResult") {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>aname</code> | <code>string</code> | Account name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectivityManagementSuccessResult](src/models/connectivity-management-success-result.ts)</code>

**OnError**: <code>[Sms.StartQueuedSmsDeliveryError](src/resources/sms.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SessionManagement

> Source: [SessionManagement](src/resources/session-management.ts)

<details>
<summary><code>endConnectivityManagementSession(options?: RequestOptions): ApiPromise&lt;LogOutRequest, SessionManagement.EndConnectivityManagementSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ends a Connectivity Management session.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionManagement.endConnectivityManagementSession();
  // TODO: Handle 'response' of type LogOutRequest
} catch (err) {
  if (
    err instanceof SessionManagement.EndConnectivityManagementSessionError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LogOutRequest](src/models/log-out-request.ts)</code>

**OnError**: <code>[SessionManagement.EndConnectivityManagementSessionError](src/resources/session-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resetConnectivityManagementPassword(request: SessionManagement.ResetConnectivityManagementPasswordRequest, options?: RequestOptions): ApiPromise&lt;SessionResetPasswordResult, SessionManagement.ResetConnectivityManagementPasswordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The new password is effective immediately. Passwords do not expire, but Verizon recommends changing your password every 90 days.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionManagement.resetConnectivityManagementPassword({ body });
  // TODO: Handle 'response' of type SessionResetPasswordResult
} catch (err) {
  if (
    err instanceof SessionManagement.ResetConnectivityManagementPasswordError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SessionResetPasswordRequest](src/models/session-reset-password-request.ts)</code> | Request with current password that needs to be reset. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionResetPasswordResult](src/models/session-reset-password-result.ts)</code>

**OnError**: <code>[SessionManagement.ResetConnectivityManagementPasswordError](src/resources/session-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startConnectivityManagementSession(request: SessionManagement.StartConnectivityManagementSessionRequest, options?: RequestOptions): ApiPromise&lt;LogInResult, SessionManagement.StartConnectivityManagementSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a Connectivity Management session and returns a VZ-M2M session token that is required in subsequent API requests.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionManagement.startConnectivityManagementSession();
  // TODO: Handle 'response' of type LogInResult
} catch (err) {
  if (
    err instanceof SessionManagement.StartConnectivityManagementSessionError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[LogInRequest](src/models/log-in-request.ts)</code> | Request to initiate a session. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LogInResult](src/models/log-in-result.ts)</code>

**OnError**: <code>[SessionManagement.StartConnectivityManagementSessionError](src/resources/session-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ConnectivityCallbacks

> Source: [ConnectivityCallbacks](src/resources/connectivity-callbacks.ts)

<details>
<summary><code>deregisterCallback(request: ConnectivityCallbacks.DeregisterCallbackRequest, options?: RequestOptions): ApiPromise&lt;CallbackActionResult, ConnectivityCallbacks.DeregisterCallbackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops ThingSpace from sending callback messages for the specified account and service.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectivityCallbacks.deregisterCallback({ aname, sname });
  // TODO: Handle 'response' of type CallbackActionResult
} catch (err) {
  if (
    err instanceof ConnectivityCallbacks.DeregisterCallbackError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>aname</code> | <code>string</code> | Account name. |
| <code>sname</code> | <code>string</code> | Service name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CallbackActionResult](src/models/callback-action-result.ts)</code>

**OnError**: <code>[ConnectivityCallbacks.DeregisterCallbackError](src/resources/connectivity-callbacks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRegisteredCallbacks(request: ConnectivityCallbacks.ListRegisteredCallbacksRequest, options?: RequestOptions): ApiPromise&lt;ConnectivityManagementCallback[], ConnectivityCallbacks.ListRegisteredCallbacksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the name and endpoint URL of the callback listening services registered for a given account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectivityCallbacks.listRegisteredCallbacks({ aname });
  // TODO: Handle 'response' of type ConnectivityManagementCallback[]
} catch (err) {
  if (
    err instanceof ConnectivityCallbacks.ListRegisteredCallbacksError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>aname</code> | <code>string</code> | Account name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectivityManagementCallback](src/models/connectivity-management-callback.ts)[]</code>

**OnError**: <code>[ConnectivityCallbacks.ListRegisteredCallbacksError](src/resources/connectivity-callbacks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>registerCallback(request: ConnectivityCallbacks.RegisterCallbackRequestParams, options?: RequestOptions): ApiPromise&lt;CallbackActionResult, ConnectivityCallbacks.RegisterCallbackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You are responsible for creating and running a listening process on your server at that URL.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectivityCallbacks.registerCallback({ aname, body });
  // TODO: Handle 'response' of type CallbackActionResult
} catch (err) {
  if (
    err instanceof ConnectivityCallbacks.RegisterCallbackError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>aname</code> | <code>string</code> | Account name. |
| <code>body</code> | <code>[RegisterCallbackRequest](src/models/register-callback-request.ts)</code> | Request to register a callback. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CallbackActionResult](src/models/callback-action-result.ts)</code>

**OnError**: <code>[ConnectivityCallbacks.RegisterCallbackError](src/resources/connectivity-callbacks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AccountRequests

> Source: [AccountRequests](src/resources/account-requests.ts)

<details>
<summary><code>getCurrentAsynchronousRequestStatus(request: AccountRequests.GetCurrentAsynchronousRequestStatusRequest, options?: RequestOptions): ApiPromise&lt;AsynchronousRequestResult, AccountRequests.GetCurrentAsynchronousRequestStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current status of an asynchronous request that was made for a single device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountRequests.getCurrentAsynchronousRequestStatus({ aname, requestId });
  // TODO: Handle 'response' of type AsynchronousRequestResult
} catch (err) {
  if (
    err instanceof AccountRequests.GetCurrentAsynchronousRequestStatusError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>aname</code> | <code>string</code> | Account name. |
| <code>requestId</code> | <code>string</code> | UUID from synchronous response. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AsynchronousRequestResult](src/models/asynchronous-request-result.ts)</code>

**OnError**: <code>[AccountRequests.GetCurrentAsynchronousRequestStatusError](src/resources/account-requests.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ServicePlans

> Source: [ServicePlans](src/resources/service-plans.ts)

<details>
<summary><code>listAccountServicePlans(request: ServicePlans.ListAccountServicePlansRequest, options?: RequestOptions): ApiPromise&lt;ServicePlan[], ServicePlans.ListAccountServicePlansError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all data service plans that are associated with a specified billing account. When you send a request to /devices/actions/activate to activate a line of service you must specify the code for one of the service plans associated with your account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.servicePlans.listAccountServicePlans({ aname });
  // TODO: Handle 'response' of type ServicePlan[]
} catch (err) {
  if (
    err instanceof ServicePlans.ListAccountServicePlansError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>aname</code> | <code>string</code> | Account name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ServicePlan](src/models/service-plan.ts)[]</code>

**OnError**: <code>[ServicePlans.ListAccountServicePlansError](src/resources/service-plans.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DeviceDiagnostics

> Source: [DeviceDiagnostics](src/resources/device-diagnostics.ts)

<details>
<summary><code>deviceReachabilityStatusUsingPost(request: DeviceDiagnostics.DeviceReachabilityStatusUsingPostRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceDiagnostics.DeviceReachabilityStatusUsingPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

If the devices do not already exist in the account, this API resource adds them before activation.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceDiagnostics.deviceReachabilityStatusUsingPost({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceDiagnostics.DeviceReachabilityStatusUsingPostError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[NotificationReportStatusRequest](src/models/notification-report-status-request.ts)</code> | Retrieve Reachability Report Status for a device. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceDiagnostics.DeviceReachabilityStatusUsingPostError](src/resources/device-diagnostics.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveActiveMonitorsUsingPost(request: DeviceDiagnostics.RetrieveActiveMonitorsUsingPostRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, DeviceDiagnostics.RetrieveActiveMonitorsUsingPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all the active monitors.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceDiagnostics.retrieveActiveMonitorsUsingPost({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof DeviceDiagnostics.RetrieveActiveMonitorsUsingPostError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RetrieveMonitorsRequest](src/models/retrieve-monitors-request.ts)</code> | Retrieve Monitor Request. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[DeviceDiagnostics.RetrieveActiveMonitorsUsingPostError](src/resources/device-diagnostics.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DeviceMonitoring

> Source: [DeviceMonitoring](src/resources/device-monitoring.ts)

<details>
<summary><code>deviceReachability(request: DeviceMonitoring.DeviceReachabilityRequest, options?: RequestOptions): ApiPromise&lt;RequestResponse, DeviceMonitoring.DeviceReachabilityError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceMonitoring.deviceReachability({ body });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  if (err instanceof DeviceMonitoring.DeviceReachabilityError && err.payload.kind === "restErrorResponse") {
    // TODO: Handle 'err.payload.body' of type RestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[NotificationReportRequest](src/models/notification-report-request.ts)</code> | Create Reachability Report Request |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>

**OnError**: <code>[DeviceMonitoring.DeviceReachabilityError](src/resources/device-monitoring.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopDeviceReachability(request: DeviceMonitoring.StopDeviceReachabilityRequest, options?: RequestOptions): ApiPromise&lt;RequestResponse, DeviceMonitoring.StopDeviceReachabilityError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceMonitoring.stopDeviceReachability({ stopreachabilitypayload });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  if (
    err instanceof DeviceMonitoring.StopDeviceReachabilityError && err.payload.kind === "restErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type RestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>stopreachabilitypayload</code> | <code>[StopMonitorRequest](src/models/stop-monitor-request.ts)</code> | Payload for the Stop Device Reachability monitors request. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>

**OnError**: <code>[DeviceMonitoring.StopDeviceReachabilityError](src/resources/device-monitoring.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DeviceProfileManagement

> Source: [DeviceProfileManagement](src/resources/device-profile-management.ts)

<details>
<summary><code>activateDeviceThroughProfile(request: DeviceProfileManagement.ActivateDeviceThroughProfileRequest, options?: RequestOptions): ApiPromise&lt;RequestResponse, DeviceProfileManagement.ActivateDeviceThroughProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uses the profile to bring the device under management.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceProfileManagement.activateDeviceThroughProfile({ body });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  if (
    err instanceof DeviceProfileManagement.ActivateDeviceThroughProfileError &&
      err.payload.kind === "restErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type RestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ActivateDeviceProfileRequest](src/models/activate-device-profile-request.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>

**OnError**: <code>[DeviceProfileManagement.ActivateDeviceThroughProfileError](src/resources/device-profile-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>profileToActivateDevice(request: DeviceProfileManagement.ProfileToActivateDeviceRequest, options?: RequestOptions): ApiPromise&lt;RequestResponse, DeviceProfileManagement.ProfileToActivateDeviceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uses the profile to activate the device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceProfileManagement.profileToActivateDevice({ body });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  if (
    err instanceof DeviceProfileManagement.ProfileToActivateDeviceError &&
      err.payload.kind === "restErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type RestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProfileRequest](src/models/profile-request.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>

**OnError**: <code>[DeviceProfileManagement.ProfileToActivateDeviceError](src/resources/device-profile-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>profileToDeactivateDevice(request: DeviceProfileManagement.ProfileToDeactivateDeviceRequest, options?: RequestOptions): ApiPromise&lt;RequestResponse, DeviceProfileManagement.ProfileToDeactivateDeviceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uses the profile to deactivate the device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceProfileManagement.profileToDeactivateDevice({ body });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  if (
    err instanceof DeviceProfileManagement.ProfileToDeactivateDeviceError &&
      err.payload.kind === "restErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type RestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeactivateDeviceProfileRequest](src/models/deactivate-device-profile-request.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>

**OnError**: <code>[DeviceProfileManagement.ProfileToDeactivateDeviceError](src/resources/device-profile-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>profileToSetFallbackAttribute(request: DeviceProfileManagement.ProfileToSetFallbackAttributeRequest, options?: RequestOptions): ApiPromise&lt;RequestResponse, DeviceProfileManagement.ProfileToSetFallbackAttributeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Allows the profile to set the fallback attribute to the device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceProfileManagement.profileToSetFallbackAttribute({ body });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  if (
    err instanceof DeviceProfileManagement.ProfileToSetFallbackAttributeError &&
      err.payload.kind === "restErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type RestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SetFallbackAttributeRequest](src/models/set-fallback-attribute-request.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>

**OnError**: <code>[DeviceProfileManagement.ProfileToSetFallbackAttributeError](src/resources/device-profile-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EUiccDeviceProfileManagement

> Source: [EUiccDeviceProfileManagement](src/resources/euicc-device-profile-management.ts)

<details>
<summary><code>deleteLocalProfile(request: EUiccDeviceProfileManagement.DeleteLocalProfileRequest, options?: RequestOptions): ApiPromise&lt;RequestResponse, EUiccDeviceProfileManagement.DeleteLocalProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a local profile from eUICC devices. If the local profile is enabled, it will first be disabled and the boot or default profile will be enabled.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.eUiccDeviceProfileManagement.deleteLocalProfile({ body });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  if (
    err instanceof EUiccDeviceProfileManagement.DeleteLocalProfileError &&
      err.payload.kind === "restErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type RestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProfileChangeStateRequest](src/models/profile-change-state-request.ts)</code> | Update state |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>

**OnError**: <code>[EUiccDeviceProfileManagement.DeleteLocalProfileError](src/resources/euicc-device-profile-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disableLocalProfile(request: EUiccDeviceProfileManagement.DisableLocalProfileRequest, options?: RequestOptions): ApiPromise&lt;RequestResponse, EUiccDeviceProfileManagement.DisableLocalProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disable a local profile on eUICC devices. The default or boot profile will become the enabled profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.eUiccDeviceProfileManagement.disableLocalProfile({ body });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  if (
    err instanceof EUiccDeviceProfileManagement.DisableLocalProfileError &&
      err.payload.kind === "restErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type RestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProfileChangeStateRequest](src/models/profile-change-state-request.ts)</code> | Update state |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>

**OnError**: <code>[EUiccDeviceProfileManagement.DisableLocalProfileError](src/resources/euicc-device-profile-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadLocalProfileToDisable(request: EUiccDeviceProfileManagement.DownloadLocalProfileToDisableRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, EUiccDeviceProfileManagement.DownloadLocalProfileToDisableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads an eUICC local profile to devices and leaves the profile disabled.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.eUiccDeviceProfileManagement.downloadLocalProfileToDisable({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof EUiccDeviceProfileManagement.DownloadLocalProfileToDisableError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProfileChangeStateRequest](src/models/profile-change-state-request.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[EUiccDeviceProfileManagement.DownloadLocalProfileToDisableError](src/resources/euicc-device-profile-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadLocalProfileToEnable(request: EUiccDeviceProfileManagement.DownloadLocalProfileToEnableRequest, options?: RequestOptions): ApiPromise&lt;DeviceManagementResult, EUiccDeviceProfileManagement.DownloadLocalProfileToEnableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Downloads an eUICC local profile to devices and enables the profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.eUiccDeviceProfileManagement.downloadLocalProfileToEnable({ body });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  if (
    err instanceof EUiccDeviceProfileManagement.DownloadLocalProfileToEnableError &&
      err.payload.kind === "connectivityManagementResult"
  ) {
    // TODO: Handle 'err.payload.body' of type ConnectivityManagementResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProfileChangeStateRequest](src/models/profile-change-state-request.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>

**OnError**: <code>[EUiccDeviceProfileManagement.DownloadLocalProfileToEnableError](src/resources/euicc-device-profile-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableLocalProfile(request: EUiccDeviceProfileManagement.EnableLocalProfileRequest, options?: RequestOptions): ApiPromise&lt;RequestResponse, EUiccDeviceProfileManagement.EnableLocalProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable a local profile that has been downloaded to eUICC devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.eUiccDeviceProfileManagement.enableLocalProfile({ body });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  if (
    err instanceof EUiccDeviceProfileManagement.EnableLocalProfileError &&
      err.payload.kind === "restErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type RestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProfileChangeStateRequest](src/models/profile-change-state-request.ts)</code> | Update state |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>

**OnError**: <code>[EUiccDeviceProfileManagement.EnableLocalProfileError](src/resources/euicc-device-profile-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DevicesLocations

> Source: [DevicesLocations](src/resources/devices-locations.ts)

<details>
<summary><code>cancelQueuedLocationReportGeneration(request: DevicesLocations.CancelQueuedLocationReportGenerationRequest, options?: RequestOptions): ApiPromise&lt;TransactionId, DevicesLocations.CancelQueuedLocationReportGenerationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a queued device location report.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.devicesLocations.cancelQueuedLocationReportGeneration({ accountName, txid });
  // TODO: Handle 'response' of type TransactionId
} catch (err) {
  if (
    err instanceof DevicesLocations.CancelQueuedLocationReportGenerationError &&
      err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account identifier in "##########-#####". |
| <code>txid</code> | <code>string</code> | Transaction ID of the report to cancel. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionId](src/models/transaction-id.ts)</code>

**OnError**: <code>[DevicesLocations.CancelQueuedLocationReportGenerationError](src/resources/devices-locations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLocationReport(options?: RequestOptions): ApiPromise&lt;AsynchronousLocationRequestResult, DevicesLocations.CreateLocationReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request an asynchronous device location report.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.devicesLocations.createLocationReport();
  // TODO: Handle 'response' of type AsynchronousLocationRequestResult
} catch (err) {
  if (
    err instanceof DevicesLocations.CreateLocationReportError && err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AsynchronousLocationRequestResult](src/models/asynchronous-location-request-result.ts)</code>

**OnError**: <code>[DevicesLocations.CreateLocationReportError](src/resources/devices-locations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLocationReportStatus(request: DevicesLocations.GetLocationReportStatusRequest, options?: RequestOptions): ApiPromise&lt;LocationReportStatus, DevicesLocations.GetLocationReportStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current status of a requested device location report.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.devicesLocations.getLocationReportStatus({ accountName, txid });
  // TODO: Handle 'response' of type LocationReportStatus
} catch (err) {
  if (
    err instanceof DevicesLocations.GetLocationReportStatusError &&
      err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account identifier in "##########-#####". |
| <code>txid</code> | <code>string</code> | Transaction ID of the report. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LocationReportStatus](src/models/location-report-status.ts)</code>

**OnError**: <code>[DevicesLocations.GetLocationReportStatusError](src/resources/devices-locations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDevicesLocationsAsynchronous(options?: RequestOptions): ApiPromise&lt;SynchronousLocationRequestResult, DevicesLocations.ListDevicesLocationsAsynchronousError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requests the current or cached location of up to 10,000 IoT or consumer devices (phones, tablets. etc.). This request returns a synchronous transaction ID, and the location information for each device is returned asynchronously as a DeviceLocation callback message.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.devicesLocations.listDevicesLocationsAsynchronous();
  // TODO: Handle 'response' of type SynchronousLocationRequestResult
} catch (err) {
  if (
    err instanceof DevicesLocations.ListDevicesLocationsAsynchronousError &&
      err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SynchronousLocationRequestResult](src/models/synchronous-location-request-result.ts)</code>

**OnError**: <code>[DevicesLocations.ListDevicesLocationsAsynchronousError](src/resources/devices-locations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDevicesLocationsSynchronous(request: DevicesLocations.ListDevicesLocationsSynchronousRequest, options?: RequestOptions): ApiPromise&lt;Location[], DevicesLocations.ListDevicesLocationsSynchronousError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This locations endpoint retrieves the locations for a list of devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.devicesLocations.listDevicesLocationsSynchronous({ body });
  // TODO: Handle 'response' of type Location[]
} catch (err) {
  if (
    err instanceof DevicesLocations.ListDevicesLocationsSynchronousError &&
      err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LocationRequest](src/models/location-request.ts)</code> | Request to obtain location of devices. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Location](src/models/location.ts)[]</code>

**OnError**: <code>[DevicesLocations.ListDevicesLocationsSynchronousError](src/resources/devices-locations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveLocationReport(request: DevicesLocations.RetrieveLocationReportRequest, options?: RequestOptions): ApiPromise&lt;LocationReport, DevicesLocations.RetrieveLocationReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download a completed asynchronous device location report.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.devicesLocations.retrieveLocationReport({ accountName, txid, startindex });
  // TODO: Handle 'response' of type LocationReport
} catch (err) {
  if (
    err instanceof DevicesLocations.RetrieveLocationReportError && err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account identifier in "##########-#####". |
| <code>txid</code> | <code>string</code> | Transaction ID from POST /locationreports response. |
| <code>startindex</code> | <code>number</code> | Zero-based number of the first record to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LocationReport](src/models/location-report.ts)</code>

**OnError**: <code>[DevicesLocations.RetrieveLocationReportError](src/resources/devices-locations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Exclusions

> Source: [Exclusions](src/resources/exclusions.ts)

<details>
<summary><code>devicesLocationGetConsentAsync(request: Exclusions.DevicesLocationGetConsentAsyncRequest, options?: RequestOptions): ApiPromise&lt;GetAccountDeviceConsent, Exclusions.DevicesLocationGetConsentAsyncError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the consent settings for the entire account or device list in an account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.exclusions.devicesLocationGetConsentAsync({ accountName });
  // TODO: Handle 'response' of type GetAccountDeviceConsent
} catch (err) {
  if (
    err instanceof Exclusions.DevicesLocationGetConsentAsyncError &&
      err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | The numeric name of the account. |
| <code>deviceId?</code> | <code>string</code> | The IMEI of the device being queried |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetAccountDeviceConsent](src/models/get-account-device-consent.ts)</code>

**OnError**: <code>[Exclusions.DevicesLocationGetConsentAsyncError](src/resources/exclusions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>devicesLocationGiveConsentAsync(request: Exclusions.DevicesLocationGiveConsentAsyncRequest, options?: RequestOptions): ApiPromise&lt;ConsentTransactionId, Exclusions.DevicesLocationGiveConsentAsyncError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a consent record to use location services as an asynchronous request.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.exclusions.devicesLocationGiveConsentAsync();
  // TODO: Handle 'response' of type ConsentTransactionId
} catch (err) {
  if (
    err instanceof Exclusions.DevicesLocationGiveConsentAsyncError &&
      err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[AccountConsentCreate](src/models/account-consent-create.ts)</code> | Account details to create a consent record. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConsentTransactionId](src/models/consent-transaction-id.ts)</code>

**OnError**: <code>[Exclusions.DevicesLocationGiveConsentAsyncError](src/resources/exclusions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>devicesLocationUpdateConsent(request: Exclusions.DevicesLocationUpdateConsentRequest, options?: RequestOptions): ApiPromise&lt;ConsentTransactionId, Exclusions.DevicesLocationUpdateConsentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the location services consent record for an entire account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.exclusions.devicesLocationUpdateConsent();
  // TODO: Handle 'response' of type ConsentTransactionId
} catch (err) {
  if (
    err instanceof Exclusions.DevicesLocationUpdateConsentError && err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[AccountConsentUpdate](src/models/account-consent-update.ts)</code> | Account details to update a consent record. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConsentTransactionId](src/models/consent-transaction-id.ts)</code>

**OnError**: <code>[Exclusions.DevicesLocationUpdateConsentError](src/resources/exclusions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>excludeDevices(options?: RequestOptions): ApiPromise&lt;DeviceLocationSuccessResult, Exclusions.ExcludeDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This consents endpoint sets a new exclusion list.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.exclusions.excludeDevices();
  // TODO: Handle 'response' of type DeviceLocationSuccessResult
} catch (err) {
  if (err instanceof Exclusions.ExcludeDevicesError && err.payload.kind === "deviceLocationResult") {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceLocationSuccessResult](src/models/device-location-success-result.ts)</code>

**OnError**: <code>[Exclusions.ExcludeDevicesError](src/resources/exclusions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listExcludedDevices(request: Exclusions.ListExcludedDevicesRequest, options?: RequestOptions): ApiPromise&lt;DevicesConsentResult, Exclusions.ListExcludedDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This consents endpoint retrieves a list of excluded devices in an account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.exclusions.listExcludedDevices({ accountName, startIndex });
  // TODO: Handle 'response' of type DevicesConsentResult
} catch (err) {
  if (err instanceof Exclusions.ListExcludedDevicesError && err.payload.kind === "deviceLocationResult") {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account identifier in "##########-#####". |
| <code>startIndex</code> | <code>string</code> | Zero-based number of the first record to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DevicesConsentResult](src/models/devices-consent-result.ts)</code>

**OnError**: <code>[Exclusions.ListExcludedDevicesError](src/resources/exclusions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeDevicesFromExclusionList(request: Exclusions.RemoveDevicesFromExclusionListRequest, options?: RequestOptions): ApiPromise&lt;DeviceLocationSuccessResult, Exclusions.RemoveDevicesFromExclusionListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes devices from the exclusion list so that they can be located with Device Location Services requests.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.exclusions.removeDevicesFromExclusionList({ accountName, deviceList });
  // TODO: Handle 'response' of type DeviceLocationSuccessResult
} catch (err) {
  if (
    err instanceof Exclusions.RemoveDevicesFromExclusionListError &&
      err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | The numeric name of the account. |
| <code>deviceList</code> | <code>string</code> | A list of the device IDs to remove from the exclusion list. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceLocationSuccessResult](src/models/device-location-success-result.ts)</code>

**OnError**: <code>[Exclusions.RemoveDevicesFromExclusionListError](src/resources/exclusions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DevicesLocationSubscriptions

> Source: [DevicesLocationSubscriptions](src/resources/devices-location-subscriptions.ts)

<details>
<summary><code>getLocationServiceSubscriptionStatus(request: DevicesLocationSubscriptions.GetLocationServiceSubscriptionStatusRequest, options?: RequestOptions): ApiPromise&lt;DeviceLocationSubscription, DevicesLocationSubscriptions.GetLocationServiceSubscriptionStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This subscriptions endpoint retrieves an account's current location subscription status.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.devicesLocationSubscriptions.getLocationServiceSubscriptionStatus({
    accountName,
  });
  // TODO: Handle 'response' of type DeviceLocationSubscription
} catch (err) {
  if (
    err instanceof DevicesLocationSubscriptions.GetLocationServiceSubscriptionStatusError &&
      err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account identifier in "##########-#####". |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceLocationSubscription](src/models/device-location-subscription.ts)</code>

**OnError**: <code>[DevicesLocationSubscriptions.GetLocationServiceSubscriptionStatusError](src/resources/devices-location-subscriptions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLocationServiceUsage(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, DevicesLocationSubscriptions.GetLocationServiceUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to search for billable usage for accounts based on the provided date range.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.devicesLocationSubscriptions.getLocationServiceUsage();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  if (
    err instanceof DevicesLocationSubscriptions.GetLocationServiceUsageError &&
      err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[DevicesLocationSubscriptions.GetLocationServiceUsageError](src/resources/devices-location-subscriptions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DeviceLocationCallbacks

> Source: [DeviceLocationCallbacks](src/resources/device-location-callbacks.ts)

<details>
<summary><code>cancelAsyncReport(request: DeviceLocationCallbacks.CancelAsyncReportRequest, options?: RequestOptions): ApiPromise&lt;TransactionId, DeviceLocationCallbacks.CancelAsyncReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an asynchronous report request.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceLocationCallbacks.cancelAsyncReport({ txid, accountName });
  // TODO: Handle 'response' of type TransactionId
} catch (err) {
  if (
    err instanceof DeviceLocationCallbacks.CancelAsyncReportError &&
      err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>txid</code> | <code>string</code> | The `transactionId` value. |
| <code>accountName</code> | <code>string</code> | Account identifier in "##########-#####". |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionId](src/models/transaction-id.ts)</code>

**OnError**: <code>[DeviceLocationCallbacks.CancelAsyncReportError](src/resources/device-location-callbacks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deregisterCallback2(request: DeviceLocationCallbacks.DeregisterCallback2Request, options?: RequestOptions): ApiPromise&lt;DeviceLocationSuccessResult, DeviceLocationCallbacks.DeregisterCallback2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deregister a URL to stop receiving callback messages.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceLocationCallbacks.deregisterCallback2({ accountName, service });
  // TODO: Handle 'response' of type DeviceLocationSuccessResult
} catch (err) {
  if (
    err instanceof DeviceLocationCallbacks.DeregisterCallback2Error &&
      err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account number. |
| <code>service</code> | <code>[CallbackServiceName](src/models/callback-service-name.ts)</code> | Callback service name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceLocationSuccessResult](src/models/device-location-success-result.ts)</code>

**OnError**: <code>[DeviceLocationCallbacks.DeregisterCallback2Error](src/resources/device-location-callbacks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRegisteredCallbacks2(request: DeviceLocationCallbacks.ListRegisteredCallbacks2Request, options?: RequestOptions): ApiPromise&lt;DeviceLocationCallback[], DeviceLocationCallbacks.ListRegisteredCallbacks2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all registered callback URLs for the account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceLocationCallbacks.listRegisteredCallbacks2({ accountName });
  // TODO: Handle 'response' of type DeviceLocationCallback[]
} catch (err) {
  if (
    err instanceof DeviceLocationCallbacks.ListRegisteredCallbacks2Error &&
      err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account number. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceLocationCallback](src/models/device-location-callback.ts)[]</code>

**OnError**: <code>[DeviceLocationCallbacks.ListRegisteredCallbacks2Error](src/resources/device-location-callbacks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>registerCallback2(request: DeviceLocationCallbacks.RegisterCallback2Request, options?: RequestOptions): ApiPromise&lt;CallbackRegistrationResult, DeviceLocationCallbacks.RegisterCallback2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provide a URL to receive messages from a ThingSpace callback service.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceLocationCallbacks.registerCallback2({ accountName });
  // TODO: Handle 'response' of type CallbackRegistrationResult
} catch (err) {
  if (
    err instanceof DeviceLocationCallbacks.RegisterCallback2Error &&
      err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account number. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CallbackRegistrationResult](src/models/callback-registration-result.ts)</code>

**OnError**: <code>[DeviceLocationCallbacks.RegisterCallback2Error](src/resources/device-location-callbacks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UsageTriggerManagement

> Source: [UsageTriggerManagement](src/resources/usage-trigger-management.ts)

<details>
<summary><code>createNewTrigger(request: UsageTriggerManagement.CreateNewTriggerRequest, options?: RequestOptions): ApiPromise&lt;UsageTriggerResponse, UsageTriggerManagement.CreateNewTriggerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new usage trigger, which will send an alert when the number of device location service transactions reaches a specified percentage of the monthly subscription amount.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usageTriggerManagement.createNewTrigger();
  // TODO: Handle 'response' of type UsageTriggerResponse
} catch (err) {
  if (
    err instanceof UsageTriggerManagement.CreateNewTriggerError && err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[UsageTriggerAddRequest](src/models/usage-trigger-add-request.ts)</code> | License assignment. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsageTriggerResponse](src/models/usage-trigger-response.ts)</code>

**OnError**: <code>[UsageTriggerManagement.CreateNewTriggerError](src/resources/usage-trigger-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTrigger(request: UsageTriggerManagement.DeleteTriggerRequest, options?: RequestOptions): ApiPromise&lt;DeviceLocationSuccessResult, UsageTriggerManagement.DeleteTriggerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

eletes the specified usage trigger from the given account

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usageTriggerManagement.deleteTrigger({ accountName, triggerId });
  // TODO: Handle 'response' of type DeviceLocationSuccessResult
} catch (err) {
  if (
    err instanceof UsageTriggerManagement.DeleteTriggerError && err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account name |
| <code>triggerId</code> | <code>string</code> | Usage trigger ID |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceLocationSuccessResult](src/models/device-location-success-result.ts)</code>

**OnError**: <code>[UsageTriggerManagement.DeleteTriggerError](src/resources/usage-trigger-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTrigger(request: UsageTriggerManagement.UpdateTriggerRequestParams, options?: RequestOptions): ApiPromise&lt;UsageTriggerResponse, UsageTriggerManagement.UpdateTriggerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing usage trigger


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usageTriggerManagement.updateTrigger({ triggerId });
  // TODO: Handle 'response' of type UsageTriggerResponse
} catch (err) {
  if (
    err instanceof UsageTriggerManagement.UpdateTriggerError && err.payload.kind === "deviceLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>triggerId</code> | <code>string</code> | Usage trigger ID |
| <code>body?</code> | <code>[UsageTriggerUpdateRequest](src/models/usage-trigger-update-request.ts)</code> | New trigger values |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsageTriggerResponse](src/models/usage-trigger-response.ts)</code>

**OnError**: <code>[UsageTriggerManagement.UpdateTriggerError](src/resources/usage-trigger-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Billing

> Source: [Billing](src/resources/billing.ts)

<details>
<summary><code>addAccount(request: Billing.AddAccountRequest, options?: RequestOptions): ApiPromise&lt;ManagedAccountsAddResponse, Billing.AddAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to add managed accounts to a primary account.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.addAccount({ body });
  // TODO: Handle 'response' of type ManagedAccountsAddResponse
} catch (err) {
  if (err instanceof Billing.AddAccountError && err.payload.kind === "deviceLocationResult") {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ManagedAccountsAddRequest](src/models/managed-accounts-add-request.ts)</code> | Service name and list of accounts to add |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManagedAccountsAddResponse](src/models/managed-accounts-add-response.ts)</code>

**OnError**: <code>[Billing.AddAccountError](src/resources/billing.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelManagedAccountAction(request: Billing.CancelManagedAccountActionRequest, options?: RequestOptions): ApiPromise&lt;ManagedAccountCancelResponse, Billing.CancelManagedAccountActionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deactivates a managed billing service relationship between a managed account and the primary account. 

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.cancelManagedAccountAction({ body });
  // TODO: Handle 'response' of type ManagedAccountCancelResponse
} catch (err) {
  if (err instanceof Billing.CancelManagedAccountActionError && err.payload.kind === "deviceLocationResult") {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ManagedAccountCancelRequest](src/models/managed-account-cancel-request.ts)</code> | Service name and list of accounts to add |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManagedAccountCancelResponse](src/models/managed-account-cancel-response.ts)</code>

**OnError**: <code>[Billing.CancelManagedAccountActionError](src/resources/billing.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listManagedAccount(request: Billing.ListManagedAccountRequest, options?: RequestOptions): ApiPromise&lt;ManagedAccountsGetAllResponse, Billing.ListManagedAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to retrieve the list of all accounts managed by a primary account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.listManagedAccount({ accountName, serviceName });
  // TODO: Handle 'response' of type ManagedAccountsGetAllResponse
} catch (err) {
  if (err instanceof Billing.ListManagedAccountError && err.payload.kind === "deviceLocationResult") {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Primary account identifier |
| <code>serviceName</code> | <code>string</code> | Service name |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManagedAccountsGetAllResponse](src/models/managed-accounts-get-all-response.ts)</code>

**OnError**: <code>[Billing.ListManagedAccountError](src/resources/billing.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>managedAccountAction(request: Billing.ManagedAccountActionRequest, options?: RequestOptions): ApiPromise&lt;ManagedAccountsProvisionResponse, Billing.ManagedAccountActionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activates a managed billing service relationship between a managed account and the primary account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.managedAccountAction({ body });
  // TODO: Handle 'response' of type ManagedAccountsProvisionResponse
} catch (err) {
  if (err instanceof Billing.ManagedAccountActionError && err.payload.kind === "deviceLocationResult") {
    // TODO: Handle 'err.payload.body' of type DeviceLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ManagedAccountsProvisionRequest](src/models/managed-accounts-provision-request.ts)</code> | Service name and list of accounts to add |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ManagedAccountsProvisionResponse](src/models/managed-accounts-provision-response.ts)</code>

**OnError**: <code>[Billing.ManagedAccountActionError](src/resources/billing.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SoftwareManagementSubscriptionsV1

> Source: [SoftwareManagementSubscriptionsV1](src/resources/software-management-subscriptions-v1.ts)

<details>
<summary><code>getAccountLicenseStatus(request: SoftwareManagementSubscriptionsV1.GetAccountLicenseStatusRequest, options?: RequestOptions): ApiPromise&lt;AccountLicenseInfo, SoftwareManagementSubscriptionsV1.GetAccountLicenseStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about an account's Software Management Services licenses and a list of licensed devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementSubscriptionsV1.getAccountLicenseStatus({
    account,
    startIndex,
  });
  // TODO: Handle 'response' of type AccountLicenseInfo
} catch (err) {
  if (
    err instanceof SoftwareManagementSubscriptionsV1.GetAccountLicenseStatusError &&
      err.payload.kind === "fotaV1Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV1Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier in "##########-#####". |
| <code>startIndex</code> | <code>string</code> | The zero-based number of the first record to return. Set startIndex=0 for the first request. If there are more than 1,000 devices in the response, set startIndex=1000 for the second request, 2000 for the third request, etc. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountLicenseInfo](src/models/account-license-info.ts)</code>

**OnError**: <code>[SoftwareManagementSubscriptionsV1.GetAccountLicenseStatusError](src/resources/software-management-subscriptions-v1.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAccountSubscriptionStatus(request: SoftwareManagementSubscriptionsV1.GetAccountSubscriptionStatusRequest, options?: RequestOptions): ApiPromise&lt;V1AccountSubscription, SoftwareManagementSubscriptionsV1.GetAccountSubscriptionStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This subscriptions endpoint retrieves an account's current Software Management Service subscription status.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementSubscriptionsV1.getAccountSubscriptionStatus({ account });
  // TODO: Handle 'response' of type V1AccountSubscription
} catch (err) {
  if (
    err instanceof SoftwareManagementSubscriptionsV1.GetAccountSubscriptionStatusError &&
      err.payload.kind === "fotaV1Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV1Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier in "##########-#####". |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AccountSubscription](src/models/v1-account-subscription.ts)</code>

**OnError**: <code>[SoftwareManagementSubscriptionsV1.GetAccountSubscriptionStatusError](src/resources/software-management-subscriptions-v1.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SoftwareManagementLicensesV1

> Source: [SoftwareManagementLicensesV1](src/resources/software-management-licenses-v1.ts)

<details>
<summary><code>assignLicensesToDevices(request: SoftwareManagementLicensesV1.AssignLicensesToDevicesRequest, options?: RequestOptions): ApiPromise&lt;V1LicensesAssignedRemovedResult, SoftwareManagementLicensesV1.AssignLicensesToDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns licenses to a specified list of devices so that firmware upgrades can be scheduled for those devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV1.assignLicensesToDevices({ account, body });
  // TODO: Handle 'response' of type V1LicensesAssignedRemovedResult
} catch (err) {
  if (
    err instanceof SoftwareManagementLicensesV1.AssignLicensesToDevicesError &&
      err.payload.kind === "fotaV1Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV1Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier in "##########-#####". |
| <code>body</code> | <code>[V1LicensesAssignedRemovedRequest](src/models/v1-licenses-assigned-removed-request.ts)</code> | IMEIs of the devices to assign licenses to. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LicensesAssignedRemovedResult](src/models/v1-licenses-assigned-removed-result.ts)</code>

**OnError**: <code>[SoftwareManagementLicensesV1.AssignLicensesToDevicesError](src/resources/software-management-licenses-v1.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createListOfLicensesToRemove(request: SoftwareManagementLicensesV1.CreateListOfLicensesToRemoveRequest, options?: RequestOptions): ApiPromise&lt;V1ListOfLicensesToRemoveResult, SoftwareManagementLicensesV1.CreateListOfLicensesToRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a list of devices from which licenses will be removed if the number of MRC licenses becomes less than the number of assigned licenses.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV1.createListOfLicensesToRemove({ account, body });
  // TODO: Handle 'response' of type V1ListOfLicensesToRemoveResult
} catch (err) {
  if (
    err instanceof SoftwareManagementLicensesV1.CreateListOfLicensesToRemoveError &&
      err.payload.kind === "fotaV1Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV1Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier in "##########-#####". |
| <code>body</code> | <code>[V1ListOfLicensesToRemoveRequest](src/models/v1-list-of-licenses-to-remove-request.ts)</code> | Cancellation candidate device list. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ListOfLicensesToRemoveResult](src/models/v1-list-of-licenses-to-remove-result.ts)</code>

**OnError**: <code>[SoftwareManagementLicensesV1.CreateListOfLicensesToRemoveError](src/resources/software-management-licenses-v1.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteListOfLicensesToRemove(request: SoftwareManagementLicensesV1.DeleteListOfLicensesToRemoveRequest, options?: RequestOptions): ApiPromise&lt;undefined, SoftwareManagementLicensesV1.DeleteListOfLicensesToRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the entire list of cancellation candidate devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.softwareManagementLicensesV1.deleteListOfLicensesToRemove({ account });
} catch (err) {
  if (
    err instanceof SoftwareManagementLicensesV1.DeleteListOfLicensesToRemoveError &&
      err.payload.kind === "error400"
  ) {
    // TODO: Handle 'err.payload' — the "error400" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier in "##########-#####". |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[SoftwareManagementLicensesV1.DeleteListOfLicensesToRemoveError](src/resources/software-management-licenses-v1.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLicensesToRemove(request: SoftwareManagementLicensesV1.ListLicensesToRemoveRequest, options?: RequestOptions): ApiPromise&lt;V1ListOfLicensesToRemove, SoftwareManagementLicensesV1.ListLicensesToRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of devices from which licenses will be removed if the number of MRC licenses becomes less than the number of assigned licenses.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV1.listLicensesToRemove({ account, startIndex });
  // TODO: Handle 'response' of type V1ListOfLicensesToRemove
} catch (err) {
  if (
    err instanceof SoftwareManagementLicensesV1.ListLicensesToRemoveError &&
      err.payload.kind === "fotaV1Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV1Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier in "##########-#####". |
| <code>startIndex</code> | <code>string</code> | The zero-based number of the first record to return. Set startIndex=0 for the first request. If there are more than 1,000 devices in the response, set startIndex=1000 for the second request, 2000 for the third request, etc. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ListOfLicensesToRemove](src/models/v1-list-of-licenses-to-remove.ts)</code>

**OnError**: <code>[SoftwareManagementLicensesV1.ListLicensesToRemoveError](src/resources/software-management-licenses-v1.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeLicensesFromDevices(request: SoftwareManagementLicensesV1.RemoveLicensesFromDevicesRequest, options?: RequestOptions): ApiPromise&lt;V1LicensesAssignedRemovedResult, SoftwareManagementLicensesV1.RemoveLicensesFromDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove unused licenses from device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV1.removeLicensesFromDevices({ account, body });
  // TODO: Handle 'response' of type V1LicensesAssignedRemovedResult
} catch (err) {
  if (
    err instanceof SoftwareManagementLicensesV1.RemoveLicensesFromDevicesError &&
      err.payload.kind === "fotaV1Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV1Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier in "##########-#####". |
| <code>body</code> | <code>[V1LicensesAssignedRemovedRequest](src/models/v1-licenses-assigned-removed-request.ts)</code> | IMEIs of the devices to remove licenses from. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LicensesAssignedRemovedResult](src/models/v1-licenses-assigned-removed-result.ts)</code>

**OnError**: <code>[SoftwareManagementLicensesV1.RemoveLicensesFromDevicesError](src/resources/software-management-licenses-v1.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FirmwareV1

> Source: [FirmwareV1](src/resources/firmware-v1.ts)

<details>
<summary><code>cancelScheduledFirmwareUpgrade(request: FirmwareV1.CancelScheduledFirmwareUpgradeRequest, options?: RequestOptions): ApiPromise&lt;FotaV1SuccessResult, FirmwareV1.CancelScheduledFirmwareUpgradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a scheduled firmware upgrade.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.firmwareV1.cancelScheduledFirmwareUpgrade({ accountName, upgradeId });
  // TODO: Handle 'response' of type FotaV1SuccessResult
} catch (err) {
  if (err instanceof FirmwareV1.CancelScheduledFirmwareUpgradeError && err.payload.kind === "fotaV1Result") {
    // TODO: Handle 'err.payload.body' of type FotaV1Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account identifier in "##########-#####". |
| <code>upgradeId</code> | <code>string</code> | The UUID of the scheduled upgrade that you want to cancel. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FotaV1SuccessResult](src/models/fota-v1-success-result.ts)</code>

**OnError**: <code>[FirmwareV1.CancelScheduledFirmwareUpgradeError](src/resources/firmware-v1.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAvailableFirmware(request: FirmwareV1.ListAvailableFirmwareRequest, options?: RequestOptions): ApiPromise&lt;Firmware[], FirmwareV1.ListAvailableFirmwareError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all device firmware images available for an account, based on the devices registered to that account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.firmwareV1.listAvailableFirmware({ account });
  // TODO: Handle 'response' of type Firmware[]
} catch (err) {
  if (err instanceof FirmwareV1.ListAvailableFirmwareError && err.payload.kind === "fotaV1Result") {
    // TODO: Handle 'err.payload.body' of type FotaV1Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier in "##########-#####". |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Firmware](src/models/firmware.ts)[]</code>

**OnError**: <code>[FirmwareV1.ListAvailableFirmwareError](src/resources/firmware-v1.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFirmwareUpgradeDetails(request: FirmwareV1.ListFirmwareUpgradeDetailsRequest, options?: RequestOptions): ApiPromise&lt;FirmwareUpgrade, FirmwareV1.ListFirmwareUpgradeDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a specified upgrade, include the target date of the upgrade, the list of devices in the upgrade, and the status of the upgrade for each device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.firmwareV1.listFirmwareUpgradeDetails({ accountName, upgradeId });
  // TODO: Handle 'response' of type FirmwareUpgrade
} catch (err) {
  if (err instanceof FirmwareV1.ListFirmwareUpgradeDetailsError && err.payload.kind === "fotaV1Result") {
    // TODO: Handle 'err.payload.body' of type FotaV1Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account identifier in "##########-#####". |
| <code>upgradeId</code> | <code>string</code> | The UUID of the upgrade, returned by POST /upgrades when the upgrade was scheduled. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FirmwareUpgrade](src/models/firmware-upgrade.ts)</code>

**OnError**: <code>[FirmwareV1.ListFirmwareUpgradeDetailsError](src/resources/firmware-v1.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>scheduleFirmwareUpgrade(request: FirmwareV1.ScheduleFirmwareUpgradeRequest, options?: RequestOptions): ApiPromise&lt;FirmwareUpgrade, FirmwareV1.ScheduleFirmwareUpgradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a firmware upgrade for devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.firmwareV1.scheduleFirmwareUpgrade({ body });
  // TODO: Handle 'response' of type FirmwareUpgrade
} catch (err) {
  if (err instanceof FirmwareV1.ScheduleFirmwareUpgradeError && err.payload.kind === "fotaV1Result") {
    // TODO: Handle 'err.payload.body' of type FotaV1Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FirmwareUpgradeRequest](src/models/firmware-upgrade-request.ts)</code> | Details of the firmware upgrade request. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FirmwareUpgrade](src/models/firmware-upgrade.ts)</code>

**OnError**: <code>[FirmwareV1.ScheduleFirmwareUpgradeError](src/resources/firmware-v1.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateFirmwareUpgradeDevices(request: FirmwareV1.UpdateFirmwareUpgradeDevicesRequest, options?: RequestOptions): ApiPromise&lt;FirmwareUpgradeChangeResult, FirmwareV1.UpdateFirmwareUpgradeDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add or remove devices from a scheduled upgrade.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.firmwareV1.updateFirmwareUpgradeDevices({ accountName, upgradeId });
  // TODO: Handle 'response' of type FirmwareUpgradeChangeResult
} catch (err) {
  if (err instanceof FirmwareV1.UpdateFirmwareUpgradeDevicesError && err.payload.kind === "fotaV1Result") {
    // TODO: Handle 'err.payload.body' of type FotaV1Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account identifier in "##########-#####". |
| <code>upgradeId</code> | <code>string</code> | The UUID of the upgrade, returned by POST /upgrades when the upgrade was scheduled. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FirmwareUpgradeChangeResult](src/models/firmware-upgrade-change-result.ts)</code>

**OnError**: <code>[FirmwareV1.UpdateFirmwareUpgradeDevicesError](src/resources/firmware-v1.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SoftwareManagementCallbacksV1

> Source: [SoftwareManagementCallbacksV1](src/resources/software-management-callbacks-v1.ts)

<details>
<summary><code>deregisterCallback3(request: SoftwareManagementCallbacksV1.DeregisterCallback3Request, options?: RequestOptions): ApiPromise&lt;undefined, SoftwareManagementCallbacksV1.DeregisterCallback3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deregisters the callback endpoint and stops ThingSpace from sending FOTA callback messages for the specified account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.softwareManagementCallbacksV1.deregisterCallback3({ account, service });
} catch (err) {
  if (
    err instanceof SoftwareManagementCallbacksV1.DeregisterCallback3Error && err.payload.kind === "error400"
  ) {
    // TODO: Handle 'err.payload' — the "error400" arm declares no body
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier in "##########-#####". |
| <code>service</code> | <code>[CallbackService](src/models/callback-service.ts)</code> | Callback type. Must be 'Fota' for Software Management Services API. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[SoftwareManagementCallbacksV1.DeregisterCallback3Error](src/resources/software-management-callbacks-v1.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRegisteredCallbacks3(request: SoftwareManagementCallbacksV1.ListRegisteredCallbacks3Request, options?: RequestOptions): ApiPromise&lt;RegisteredCallbacks[], SoftwareManagementCallbacksV1.ListRegisteredCallbacks3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the name and endpoint URL of the callback listening services registered for a given account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV1.listRegisteredCallbacks3({ account });
  // TODO: Handle 'response' of type RegisteredCallbacks[]
} catch (err) {
  if (
    err instanceof SoftwareManagementCallbacksV1.ListRegisteredCallbacks3Error &&
      err.payload.kind === "fotaV1Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV1Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier in "##########-#####". |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RegisteredCallbacks](src/models/registered-callbacks.ts)[]</code>

**OnError**: <code>[SoftwareManagementCallbacksV1.ListRegisteredCallbacks3Error](src/resources/software-management-callbacks-v1.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>registerCallback3(request: SoftwareManagementCallbacksV1.RegisterCallback3Request, options?: RequestOptions): ApiPromise&lt;FotaV1CallbackRegistrationResult, SoftwareManagementCallbacksV1.RegisterCallback3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers a URL to receive RESTful messages from a callback service when new firmware versions are available and when upgrades start and finish.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV1.registerCallback3({ account, body });
  // TODO: Handle 'response' of type FotaV1CallbackRegistrationResult
} catch (err) {
  if (
    err instanceof SoftwareManagementCallbacksV1.RegisterCallback3Error && err.payload.kind === "fotaV1Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV1Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier in "##########-#####". |
| <code>body</code> | <code>[FotaV1CallbackRegistrationRequest](src/models/fota-v1-callback-registration-request.ts)</code> | Callback details. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FotaV1CallbackRegistrationResult](src/models/fota-v1-callback-registration-result.ts)</code>

**OnError**: <code>[SoftwareManagementCallbacksV1.RegisterCallback3Error](src/resources/software-management-callbacks-v1.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SoftwareManagementReportsV1

> Source: [SoftwareManagementReportsV1](src/resources/software-management-reports-v1.ts)

<details>
<summary><code>getDeviceFirmwareUpgradeHistory(request: SoftwareManagementReportsV1.GetDeviceFirmwareUpgradeHistoryRequest, options?: RequestOptions): ApiPromise&lt;DeviceUpgradeHistory[], SoftwareManagementReportsV1.GetDeviceFirmwareUpgradeHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the upgrade history of the specified device from the previous six months.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV1.getDeviceFirmwareUpgradeHistory({
    account,
    deviceId,
  });
  // TODO: Handle 'response' of type DeviceUpgradeHistory[]
} catch (err) {
  if (
    err instanceof SoftwareManagementReportsV1.GetDeviceFirmwareUpgradeHistoryError &&
      err.payload.kind === "fotaV1Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV1Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier in "##########-#####". |
| <code>deviceId</code> | <code>string</code> | The IMEI of the device. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceUpgradeHistory](src/models/device-upgrade-history.ts)[]</code>

**OnError**: <code>[SoftwareManagementReportsV1.GetDeviceFirmwareUpgradeHistoryError](src/resources/software-management-reports-v1.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAccountDevices(request: SoftwareManagementReportsV1.ListAccountDevicesRequest, options?: RequestOptions): ApiPromise&lt;DeviceListQueryResult, SoftwareManagementReportsV1.ListAccountDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of all devices in the specified account. Each device object includes information needed for managing firmware, including the device make and model, MDN and IMEI, and current firmware version.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV1.listAccountDevices({ account, startIndex });
  // TODO: Handle 'response' of type DeviceListQueryResult
} catch (err) {
  if (
    err instanceof SoftwareManagementReportsV1.ListAccountDevicesError && err.payload.kind === "fotaV1Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV1Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier in "##########-#####". |
| <code>startIndex</code> | <code>string</code> | Only return devices with IMEIs larger than this value. Use 0 for the first request. If `hasMoreData`=true in the response, use the `lastSeenDeviceId` value from the response as the startIndex in the next request. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceListQueryResult](src/models/device-list-query-result.ts)</code>

**OnError**: <code>[SoftwareManagementReportsV1.ListAccountDevicesError](src/resources/software-management-reports-v1.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUpgradesForSpecifiedStatus(request: SoftwareManagementReportsV1.ListUpgradesForSpecifiedStatusRequest, options?: RequestOptions): ApiPromise&lt;UpgradeListQueryResult, SoftwareManagementReportsV1.ListUpgradesForSpecifiedStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all upgrades with a specified status.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV1.listUpgradesForSpecifiedStatus({
    account,
    upgradeStatus,
    startIndex,
  });
  // TODO: Handle 'response' of type UpgradeListQueryResult
} catch (err) {
  if (
    err instanceof SoftwareManagementReportsV1.ListUpgradesForSpecifiedStatusError &&
      err.payload.kind === "fotaV1Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV1Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier in "##########-#####". |
| <code>upgradeStatus</code> | <code>[UpgradeStatus](src/models/upgrade-status.ts)</code> | The status of the upgrades that you want to retrieve. |
| <code>startIndex</code> | <code>string</code> | The zero-based number of the first record to return. Set startIndex=0 for the first request. If `hasMoreFlag`=true in the response, use the `lastSeenUpgradeId` value from the response as the startIndex in the next request. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpgradeListQueryResult](src/models/upgrade-list-query-result.ts)</code>

**OnError**: <code>[SoftwareManagementReportsV1.ListUpgradesForSpecifiedStatusError](src/resources/software-management-reports-v1.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SoftwareManagementSubscriptionsV2

> Source: [SoftwareManagementSubscriptionsV2](src/resources/software-management-subscriptions-v2.ts)

<details>
<summary><code>getAccountSubscriptionStatus2(request: SoftwareManagementSubscriptionsV2.GetAccountSubscriptionStatus2Request, options?: RequestOptions): ApiPromise&lt;FotaV2Subscription, SoftwareManagementSubscriptionsV2.GetAccountSubscriptionStatus2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint retrieves a FOTA subscription by account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementSubscriptionsV2.getAccountSubscriptionStatus2({ account });
  // TODO: Handle 'response' of type FotaV2Subscription
} catch (err) {
  if (
    err instanceof SoftwareManagementSubscriptionsV2.GetAccountSubscriptionStatus2Error &&
      err.payload.kind === "fotaV2Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FotaV2Subscription](src/models/fota-v2-subscription.ts)</code>

**OnError**: <code>[SoftwareManagementSubscriptionsV2.GetAccountSubscriptionStatus2Error](src/resources/software-management-subscriptions-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SoftwareManagementLicensesV2

> Source: [SoftwareManagementLicensesV2](src/resources/software-management-licenses-v2.ts)

<details>
<summary><code>assignLicensesToDevices2(request: SoftwareManagementLicensesV2.AssignLicensesToDevices2Request, options?: RequestOptions): ApiPromise&lt;V2LicensesAssignedRemovedResult, SoftwareManagementLicensesV2.AssignLicensesToDevices2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to assign licenses to a list of devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV2.assignLicensesToDevices2({ account });
  // TODO: Handle 'response' of type V2LicensesAssignedRemovedResult
} catch (err) {
  if (
    err instanceof SoftwareManagementLicensesV2.AssignLicensesToDevices2Error &&
      err.payload.kind === "fotaV2Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2LicensesAssignedRemovedResult](src/models/v2-licenses-assigned-removed-result.ts)</code>

**OnError**: <code>[SoftwareManagementLicensesV2.AssignLicensesToDevices2Error](src/resources/software-management-licenses-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createListOfLicensesToRemove2(request: SoftwareManagementLicensesV2.CreateListOfLicensesToRemove2Request, options?: RequestOptions): ApiPromise&lt;V2ListOfLicensesToRemoveResult, SoftwareManagementLicensesV2.CreateListOfLicensesToRemove2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The license cancel endpoint allows user to create a list of license cancellation candidate devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV2.createListOfLicensesToRemove2({ account });
  // TODO: Handle 'response' of type V2ListOfLicensesToRemoveResult
} catch (err) {
  if (
    err instanceof SoftwareManagementLicensesV2.CreateListOfLicensesToRemove2Error &&
      err.payload.kind === "fotaV2Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2ListOfLicensesToRemoveResult](src/models/v2-list-of-licenses-to-remove-result.ts)</code>

**OnError**: <code>[SoftwareManagementLicensesV2.CreateListOfLicensesToRemove2Error](src/resources/software-management-licenses-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteListOfLicensesToRemove2(request: SoftwareManagementLicensesV2.DeleteListOfLicensesToRemove2Request, options?: RequestOptions): ApiPromise&lt;FotaV2SuccessResult, SoftwareManagementLicensesV2.DeleteListOfLicensesToRemove2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to delete a created cancel candidate device list.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV2.deleteListOfLicensesToRemove2({ account });
  // TODO: Handle 'response' of type FotaV2SuccessResult
} catch (err) {
  if (
    err instanceof SoftwareManagementLicensesV2.DeleteListOfLicensesToRemove2Error &&
      err.payload.kind === "fotaV2Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FotaV2SuccessResult](src/models/fota-v2-success-result.ts)</code>

**OnError**: <code>[SoftwareManagementLicensesV2.DeleteListOfLicensesToRemove2Error](src/resources/software-management-licenses-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAccountLicenseStatus2(request: SoftwareManagementLicensesV2.GetAccountLicenseStatus2Request, options?: RequestOptions): ApiPromise&lt;V2LicenseSummary, SoftwareManagementLicensesV2.GetAccountLicenseStatus2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The endpoint allows user to list license usage.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV2.getAccountLicenseStatus2({ account });
  // TODO: Handle 'response' of type V2LicenseSummary
} catch (err) {
  if (
    err instanceof SoftwareManagementLicensesV2.GetAccountLicenseStatus2Error &&
      err.payload.kind === "fotaV2Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |
| <code>lastSeenDeviceId?</code> | <code>string</code> | Last seen device identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2LicenseSummary](src/models/v2-license-summary.ts)</code>

**OnError**: <code>[SoftwareManagementLicensesV2.GetAccountLicenseStatus2Error](src/resources/software-management-licenses-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLicensesToRemove2(request: SoftwareManagementLicensesV2.ListLicensesToRemove2Request, options?: RequestOptions): ApiPromise&lt;V2ListOfLicensesToRemove, SoftwareManagementLicensesV2.ListLicensesToRemove2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The license cancel endpoint allows user to list registered license cancellation candidate devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV2.listLicensesToRemove2({ account });
  // TODO: Handle 'response' of type V2ListOfLicensesToRemove
} catch (err) {
  if (
    err instanceof SoftwareManagementLicensesV2.ListLicensesToRemove2Error &&
      err.payload.kind === "fotaV2Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |
| <code>startIndex?</code> | <code>string</code> | Start index to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2ListOfLicensesToRemove](src/models/v2-list-of-licenses-to-remove.ts)</code>

**OnError**: <code>[SoftwareManagementLicensesV2.ListLicensesToRemove2Error](src/resources/software-management-licenses-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeLicensesFromDevices2(request: SoftwareManagementLicensesV2.RemoveLicensesFromDevices2Request, options?: RequestOptions): ApiPromise&lt;V2LicensesAssignedRemovedResult, SoftwareManagementLicensesV2.RemoveLicensesFromDevices2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to remove licenses from a list of devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV2.removeLicensesFromDevices2({ account });
  // TODO: Handle 'response' of type V2LicensesAssignedRemovedResult
} catch (err) {
  if (
    err instanceof SoftwareManagementLicensesV2.RemoveLicensesFromDevices2Error &&
      err.payload.kind === "fotaV2Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2LicensesAssignedRemovedResult](src/models/v2-licenses-assigned-removed-result.ts)</code>

**OnError**: <code>[SoftwareManagementLicensesV2.RemoveLicensesFromDevices2Error](src/resources/software-management-licenses-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CampaignsV2

> Source: [CampaignsV2](src/resources/campaigns-v2.ts)

<details>
<summary><code>cancelCampaign(request: CampaignsV2.CancelCampaignRequest, options?: RequestOptions): ApiPromise&lt;FotaV2SuccessResult, CampaignsV2.CancelCampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to cancel software upgrade. A software upgrade already started can not be cancelled.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV2.cancelCampaign({ account, campaignId });
  // TODO: Handle 'response' of type FotaV2SuccessResult
} catch (err) {
  if (err instanceof CampaignsV2.CancelCampaignError && err.payload.kind === "fotaV2Result") {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |
| <code>campaignId</code> | <code>string</code> | Unique identifier of campaign. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FotaV2SuccessResult](src/models/fota-v2-success-result.ts)</code>

**OnError**: <code>[CampaignsV2.CancelCampaignError](src/resources/campaigns-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCampaignInformation(request: CampaignsV2.GetCampaignInformationRequest, options?: RequestOptions): ApiPromise&lt;CampaignSoftware, CampaignsV2.GetCampaignInformationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to get information of a software upgrade.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV2.getCampaignInformation({ account, campaignId });
  // TODO: Handle 'response' of type CampaignSoftware
} catch (err) {
  if (err instanceof CampaignsV2.GetCampaignInformationError && err.payload.kind === "fotaV2Result") {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |
| <code>campaignId</code> | <code>string</code> | Software upgrade identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignSoftware](src/models/campaign-software.ts)</code>

**OnError**: <code>[CampaignsV2.GetCampaignInformationError](src/resources/campaigns-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>scheduleCampaignFirmwareUpgrade(request: CampaignsV2.ScheduleCampaignFirmwareUpgradeRequest, options?: RequestOptions): ApiPromise&lt;CampaignSoftware, CampaignsV2.ScheduleCampaignFirmwareUpgradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to schedule a software upgrade.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV2.scheduleCampaignFirmwareUpgrade({ account });
  // TODO: Handle 'response' of type CampaignSoftware
} catch (err) {
  if (
    err instanceof CampaignsV2.ScheduleCampaignFirmwareUpgradeError && err.payload.kind === "fotaV2Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignSoftware](src/models/campaign-software.ts)</code>

**OnError**: <code>[CampaignsV2.ScheduleCampaignFirmwareUpgradeError](src/resources/campaigns-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>scheduleFileUpgrade(request: CampaignsV2.ScheduleFileUpgradeRequest, options?: RequestOptions): ApiPromise&lt;UploadAndScheduleFileResponse, CampaignsV2.ScheduleFileUpgradeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You can upload configuration files and schedule them in a campaign to devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV2.scheduleFileUpgrade({ acc, body });
  // TODO: Handle 'response' of type UploadAndScheduleFileResponse
} catch (err) {
  if (err instanceof CampaignsV2.ScheduleFileUpgradeError && err.payload.kind === "fotaV2Result") {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |
| <code>body</code> | <code>[UploadAndScheduleFileRequest](src/models/upload-and-schedule-file-request.ts)</code> | Device logging information. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UploadAndScheduleFileResponse](src/models/upload-and-schedule-file-response.ts)</code>

**OnError**: <code>[CampaignsV2.ScheduleFileUpgradeError](src/resources/campaigns-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>scheduleSwUpgradeHttpDevices(request: CampaignsV2.ScheduleSwUpgradeHttpDevicesRequest, options?: RequestOptions): ApiPromise&lt;UploadAndScheduleFileResponse, CampaignsV2.ScheduleSwUpgradeHttpDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Campaign time windows for downloading and installing software are available as long as the device OEM supports this.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV2.scheduleSwUpgradeHttpDevices({ acc, body });
  // TODO: Handle 'response' of type UploadAndScheduleFileResponse
} catch (err) {
  if (err instanceof CampaignsV2.ScheduleSwUpgradeHttpDevicesError && err.payload.kind === "fotaV2Result") {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |
| <code>body</code> | <code>[SchedulesSoftwareUpgradeRequest](src/models/schedules-software-upgrade-request.ts)</code> | Device logging information. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UploadAndScheduleFileResponse](src/models/upload-and-schedule-file-response.ts)</code>

**OnError**: <code>[CampaignsV2.ScheduleSwUpgradeHttpDevicesError](src/resources/campaigns-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCampaignDates(request: CampaignsV2.UpdateCampaignDatesRequest, options?: RequestOptions): ApiPromise&lt;CampaignSoftware, CampaignsV2.UpdateCampaignDatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to change campaign dates and time windows. Fields which need to remain unchanged should be also provided.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV2.updateCampaignDates({ account, campaignId });
  // TODO: Handle 'response' of type CampaignSoftware
} catch (err) {
  if (err instanceof CampaignsV2.UpdateCampaignDatesError && err.payload.kind === "fotaV2Result") {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |
| <code>campaignId</code> | <code>string</code> | Software upgrade information. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignSoftware](src/models/campaign-software.ts)</code>

**OnError**: <code>[CampaignsV2.UpdateCampaignDatesError](src/resources/campaigns-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCampaignFirmwareDevices(request: CampaignsV2.UpdateCampaignFirmwareDevicesRequest, options?: RequestOptions): ApiPromise&lt;V2AddOrRemoveDeviceResult, CampaignsV2.UpdateCampaignFirmwareDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to Add or Remove devices to an existing software upgrade.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV2.updateCampaignFirmwareDevices({ account, campaignId });
  // TODO: Handle 'response' of type V2AddOrRemoveDeviceResult
} catch (err) {
  if (err instanceof CampaignsV2.UpdateCampaignFirmwareDevicesError && err.payload.kind === "fotaV2Result") {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |
| <code>campaignId</code> | <code>string</code> | Software upgrade information. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2AddOrRemoveDeviceResult](src/models/v2-add-or-remove-device-result.ts)</code>

**OnError**: <code>[CampaignsV2.UpdateCampaignFirmwareDevicesError](src/resources/campaigns-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SoftwareManagementCallbacksV2

> Source: [SoftwareManagementCallbacksV2](src/resources/software-management-callbacks-v2.ts)

<details>
<summary><code>deregisterCallback4(request: SoftwareManagementCallbacksV2.DeregisterCallback4Request, options?: RequestOptions): ApiPromise&lt;FotaV2SuccessResult, SoftwareManagementCallbacksV2.DeregisterCallback4Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to delete a previously registered callback URL.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV2.deregisterCallback4({ account });
  // TODO: Handle 'response' of type FotaV2SuccessResult
} catch (err) {
  if (
    err instanceof SoftwareManagementCallbacksV2.DeregisterCallback4Error &&
      err.payload.kind === "fotaV2Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FotaV2SuccessResult](src/models/fota-v2-success-result.ts)</code>

**OnError**: <code>[SoftwareManagementCallbacksV2.DeregisterCallback4Error](src/resources/software-management-callbacks-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRegisteredCallbacks4(request: SoftwareManagementCallbacksV2.ListRegisteredCallbacks4Request, options?: RequestOptions): ApiPromise&lt;CallbackSummary, SoftwareManagementCallbacksV2.ListRegisteredCallbacks4Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to get the registered callback information.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV2.listRegisteredCallbacks4({ account });
  // TODO: Handle 'response' of type CallbackSummary
} catch (err) {
  if (
    err instanceof SoftwareManagementCallbacksV2.ListRegisteredCallbacks4Error &&
      err.payload.kind === "fotaV2Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CallbackSummary](src/models/callback-summary.ts)</code>

**OnError**: <code>[SoftwareManagementCallbacksV2.ListRegisteredCallbacks4Error](src/resources/software-management-callbacks-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>registerCallback4(request: SoftwareManagementCallbacksV2.RegisterCallback4Request, options?: RequestOptions): ApiPromise&lt;FotaV2CallbackRegistrationResult, SoftwareManagementCallbacksV2.RegisterCallback4Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to create the HTTPS callback address.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV2.registerCallback4({ account });
  // TODO: Handle 'response' of type FotaV2CallbackRegistrationResult
} catch (err) {
  if (
    err instanceof SoftwareManagementCallbacksV2.RegisterCallback4Error && err.payload.kind === "fotaV2Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FotaV2CallbackRegistrationResult](src/models/fota-v2-callback-registration-result.ts)</code>

**OnError**: <code>[SoftwareManagementCallbacksV2.RegisterCallback4Error](src/resources/software-management-callbacks-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCallback(request: SoftwareManagementCallbacksV2.UpdateCallbackRequest, options?: RequestOptions): ApiPromise&lt;FotaV2CallbackRegistrationResult, SoftwareManagementCallbacksV2.UpdateCallbackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to update the HTTPS callback address.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV2.updateCallback({ account });
  // TODO: Handle 'response' of type FotaV2CallbackRegistrationResult
} catch (err) {
  if (
    err instanceof SoftwareManagementCallbacksV2.UpdateCallbackError && err.payload.kind === "fotaV2Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FotaV2CallbackRegistrationResult](src/models/fota-v2-callback-registration-result.ts)</code>

**OnError**: <code>[SoftwareManagementCallbacksV2.UpdateCallbackError](src/resources/software-management-callbacks-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SoftwareManagementReportsV2

> Source: [SoftwareManagementReportsV2](src/resources/software-management-reports-v2.ts)

<details>
<summary><code>getCampaignDeviceStatus(request: SoftwareManagementReportsV2.GetCampaignDeviceStatusRequest, options?: RequestOptions): ApiPromise&lt;V2CampaignDevice, SoftwareManagementReportsV2.GetCampaignDeviceStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The report endpoint allows user to get the full list of device of a campaign.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV2.getCampaignDeviceStatus({ account, campaignId });
  // TODO: Handle 'response' of type V2CampaignDevice
} catch (err) {
  if (
    err instanceof SoftwareManagementReportsV2.GetCampaignDeviceStatusError &&
      err.payload.kind === "fotaV2Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |
| <code>campaignId</code> | <code>string</code> | Campaign identifier. |
| <code>lastSeenDeviceId?</code> | <code>string</code> | Last seen device identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2CampaignDevice](src/models/v2-campaign-device.ts)</code>

**OnError**: <code>[SoftwareManagementReportsV2.GetCampaignDeviceStatusError](src/resources/software-management-reports-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCampaignHistoryByStatus(request: SoftwareManagementReportsV2.GetCampaignHistoryByStatusRequest, options?: RequestOptions): ApiPromise&lt;V2CampaignHistory, SoftwareManagementReportsV2.GetCampaignHistoryByStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The report endpoint allows user to get campaign history of an account for specified status.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV2.getCampaignHistoryByStatus({
    account,
    campaignStatus,
  });
  // TODO: Handle 'response' of type V2CampaignHistory
} catch (err) {
  if (
    err instanceof SoftwareManagementReportsV2.GetCampaignHistoryByStatusError &&
      err.payload.kind === "fotaV2Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |
| <code>campaignStatus</code> | <code>string</code> | Status of the campaign. |
| <code>lastSeenCampaignId?</code> | <code>string</code> | Last seen campaign Id. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2CampaignHistory](src/models/v2-campaign-history.ts)</code>

**OnError**: <code>[SoftwareManagementReportsV2.GetCampaignHistoryByStatusError](src/resources/software-management-reports-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDeviceFirmwareUpgradeHistory2(request: SoftwareManagementReportsV2.GetDeviceFirmwareUpgradeHistory2Request, options?: RequestOptions): ApiPromise&lt;DeviceSoftwareUpgrade[], SoftwareManagementReportsV2.GetDeviceFirmwareUpgradeHistory2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The endpoint allows user to get software upgrade history of a device based on device IMEI.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV2.getDeviceFirmwareUpgradeHistory2({
    account,
    deviceId,
  });
  // TODO: Handle 'response' of type DeviceSoftwareUpgrade[]
} catch (err) {
  if (
    err instanceof SoftwareManagementReportsV2.GetDeviceFirmwareUpgradeHistory2Error &&
      err.payload.kind === "fotaV2Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |
| <code>deviceId</code> | <code>string</code> | Device IMEI identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceSoftwareUpgrade](src/models/device-software-upgrade.ts)[]</code>

**OnError**: <code>[SoftwareManagementReportsV2.GetDeviceFirmwareUpgradeHistory2Error](src/resources/software-management-reports-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAccountDevices2(request: SoftwareManagementReportsV2.ListAccountDevices2Request, options?: RequestOptions): ApiPromise&lt;V2AccountDeviceList, SoftwareManagementReportsV2.ListAccountDevices2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The device endpoint gets devices information of an account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV2.listAccountDevices2({ account });
  // TODO: Handle 'response' of type V2AccountDeviceList
} catch (err) {
  if (
    err instanceof SoftwareManagementReportsV2.ListAccountDevices2Error && err.payload.kind === "fotaV2Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |
| <code>lastSeenDeviceId?</code> | <code>string</code> | Last seen device identifier. |
| <code>distributionType?</code> | <code>string</code> | Filter distributionType to get specific type of devices. Values is LWM2M, OMD-DM or HTTP. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2AccountDeviceList](src/models/v2-account-device-list.ts)</code>

**OnError**: <code>[SoftwareManagementReportsV2.ListAccountDevices2Error](src/resources/software-management-reports-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAvailableSoftware(request: SoftwareManagementReportsV2.ListAvailableSoftwareRequest, options?: RequestOptions): ApiPromise&lt;SoftwarePackage[], SoftwareManagementReportsV2.ListAvailableSoftwareError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to list a certain type of software of an account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV2.listAvailableSoftware({ account });
  // TODO: Handle 'response' of type SoftwarePackage[]
} catch (err) {
  if (
    err instanceof SoftwareManagementReportsV2.ListAvailableSoftwareError &&
      err.payload.kind === "fotaV2Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |
| <code>distributionType?</code> | <code>string</code> | Filter distributionType to get specific type of software. Value is LWM2M, OMD-DM or HTTP. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SoftwarePackage](src/models/software-package.ts)[]</code>

**OnError**: <code>[SoftwareManagementReportsV2.ListAvailableSoftwareError](src/resources/software-management-reports-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ClientLogging

> Source: [ClientLogging](src/resources/client-logging.ts)

<details>
<summary><code>disableDeviceLogging(request: ClientLogging.DisableDeviceLoggingRequest, options?: RequestOptions): ApiPromise&lt;undefined, ClientLogging.DisableDeviceLoggingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables logging for a specific device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.clientLogging.disableDeviceLogging({ account, deviceId });
} catch (err) {
  if (err instanceof ClientLogging.DisableDeviceLoggingError && err.payload.kind === "fotaV2Result") {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |
| <code>deviceId</code> | <code>string</code> | Device IMEI identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ClientLogging.DisableDeviceLoggingError](src/resources/client-logging.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disableLoggingForDevices(request: ClientLogging.DisableLoggingForDevicesRequest, options?: RequestOptions): ApiPromise&lt;undefined, ClientLogging.DisableLoggingForDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Turn logging off for a list of devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.clientLogging.disableLoggingForDevices({ account, deviceIds });
} catch (err) {
  if (err instanceof ClientLogging.DisableLoggingForDevicesError && err.payload.kind === "fotaV2Result") {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |
| <code>deviceIds</code> | <code>string</code> | The list of device IDs. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ClientLogging.DisableLoggingForDevicesError](src/resources/client-logging.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableDeviceLogging(request: ClientLogging.EnableDeviceLoggingRequest, options?: RequestOptions): ApiPromise&lt;DeviceLoggingStatus, ClientLogging.EnableDeviceLoggingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables logging for a specific device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientLogging.enableDeviceLogging({ account, deviceId });
  // TODO: Handle 'response' of type DeviceLoggingStatus
} catch (err) {
  if (err instanceof ClientLogging.EnableDeviceLoggingError && err.payload.kind === "fotaV2Result") {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |
| <code>deviceId</code> | <code>string</code> | Device IMEI identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceLoggingStatus](src/models/device-logging-status.ts)</code>

**OnError**: <code>[ClientLogging.EnableDeviceLoggingError](src/resources/client-logging.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableLoggingForDevices(request: ClientLogging.EnableLoggingForDevicesRequest, options?: RequestOptions): ApiPromise&lt;DeviceLoggingStatus[], ClientLogging.EnableLoggingForDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Each customer may have a maximum of 20 devices enabled for logging.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientLogging.enableLoggingForDevices({ account });
  // TODO: Handle 'response' of type DeviceLoggingStatus[]
} catch (err) {
  if (err instanceof ClientLogging.EnableLoggingForDevicesError && err.payload.kind === "fotaV2Result") {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceLoggingStatus](src/models/device-logging-status.ts)[]</code>

**OnError**: <code>[ClientLogging.EnableLoggingForDevicesError](src/resources/client-logging.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDeviceLogs(request: ClientLogging.ListDeviceLogsRequest, options?: RequestOptions): ApiPromise&lt;DeviceLog[], ClientLogging.ListDeviceLogsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets logs for a specific device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientLogging.listDeviceLogs({ account, deviceId });
  // TODO: Handle 'response' of type DeviceLog[]
} catch (err) {
  if (err instanceof ClientLogging.ListDeviceLogsError && err.payload.kind === "fotaV2Result") {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |
| <code>deviceId</code> | <code>string</code> | Device IMEI identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceLog](src/models/device-log.ts)[]</code>

**OnError**: <code>[ClientLogging.ListDeviceLogsError](src/resources/client-logging.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDevicesWithLoggingEnabled(request: ClientLogging.ListDevicesWithLoggingEnabledRequest, options?: RequestOptions): ApiPromise&lt;DeviceLoggingStatus[], ClientLogging.ListDevicesWithLoggingEnabledError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of all devices in the specified account for which logging is enabled.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientLogging.listDevicesWithLoggingEnabled({ account });
  // TODO: Handle 'response' of type DeviceLoggingStatus[]
} catch (err) {
  if (
    err instanceof ClientLogging.ListDevicesWithLoggingEnabledError && err.payload.kind === "fotaV2Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceLoggingStatus](src/models/device-logging-status.ts)[]</code>

**OnError**: <code>[ClientLogging.ListDevicesWithLoggingEnabledError](src/resources/client-logging.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ServerLogging

> Source: [ServerLogging](src/resources/server-logging.ts)

<details>
<summary><code>getDeviceCheckInHistory(request: ServerLogging.GetDeviceCheckInHistoryRequest, options?: RequestOptions): ApiPromise&lt;CheckInHistoryItem[], ServerLogging.GetDeviceCheckInHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check-in history can be retrieved for any device belonging to the account, not necessarily with logging enabled.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.serverLogging.getDeviceCheckInHistory({ account, deviceId });
  // TODO: Handle 'response' of type CheckInHistoryItem[]
} catch (err) {
  if (err instanceof ServerLogging.GetDeviceCheckInHistoryError && err.payload.kind === "fotaV2Result") {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account</code> | <code>string</code> | Account identifier. |
| <code>deviceId</code> | <code>string</code> | Device IMEI identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckInHistoryItem](src/models/check-in-history-item.ts)[]</code>

**OnError**: <code>[ServerLogging.GetDeviceCheckInHistoryError](src/resources/server-logging.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ConfigurationFiles

> Source: [ConfigurationFiles](src/resources/configuration-files.ts)

<details>
<summary><code>getListOfFiles(request: ConfigurationFiles.GetListOfFilesRequest, options?: RequestOptions): ApiPromise&lt;RetrievesAvailableFilesResponseList, ConfigurationFiles.GetListOfFilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

You can retrieve a list of configuration or supplementary of files for an account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.configurationFiles.getListOfFiles({ acc, distributionType });
  // TODO: Handle 'response' of type RetrievesAvailableFilesResponseList
} catch (err) {
  if (err instanceof ConfigurationFiles.GetListOfFilesError && err.payload.kind === "fotaV2Result") {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |
| <code>distributionType</code> | <code>string</code> | Filter the distributionType to only retrieve files for a specific distribution type. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RetrievesAvailableFilesResponseList](src/models/retrieves-available-files-response-list.ts)</code>

**OnError**: <code>[ConfigurationFiles.GetListOfFilesError](src/resources/configuration-files.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadConfigFile(request: ConfigurationFiles.UploadConfigFileRequest, options?: RequestOptions): ApiPromise&lt;UploadConfigurationFilesResponse, ConfigurationFiles.UploadConfigFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a configuration/supplementary file for an account. ThingSpace generates a fileName after the upload and is returned in the response.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.configurationFiles.uploadConfigFile({ acc });
  // TODO: Handle 'response' of type UploadConfigurationFilesResponse
} catch (err) {
  if (err instanceof ConfigurationFiles.UploadConfigFileError && err.payload.kind === "fotaV2Result") {
    // TODO: Handle 'err.payload.body' of type FotaV2Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UploadConfigurationFilesResponse](src/models/upload-configuration-files-response.ts)</code>

**OnError**: <code>[ConfigurationFiles.UploadConfigFileError](src/resources/configuration-files.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SoftwareManagementSubscriptionsV3

> Source: [SoftwareManagementSubscriptionsV3](src/resources/software-management-subscriptions-v3.ts)

<details>
<summary><code>getAccountSubscriptionStatus3(request: SoftwareManagementSubscriptionsV3.GetAccountSubscriptionStatus3Request, options?: RequestOptions): ApiPromise&lt;FotaV3Subscription, SoftwareManagementSubscriptionsV3.GetAccountSubscriptionStatus3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint retrieves a FOTA subscription by account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementSubscriptionsV3.getAccountSubscriptionStatus3({ acc });
  // TODO: Handle 'response' of type FotaV3Subscription
} catch (err) {
  if (
    err instanceof SoftwareManagementSubscriptionsV3.GetAccountSubscriptionStatus3Error &&
      err.payload.kind === "fotaV3Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FotaV3Subscription](src/models/fota-v3-subscription.ts)</code>

**OnError**: <code>[SoftwareManagementSubscriptionsV3.GetAccountSubscriptionStatus3Error](src/resources/software-management-subscriptions-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SoftwareManagementLicensesV3

> Source: [SoftwareManagementLicensesV3](src/resources/software-management-licenses-v3.ts)

<details>
<summary><code>assignLicensesToDevices3(request: SoftwareManagementLicensesV3.AssignLicensesToDevices3Request, options?: RequestOptions): ApiPromise&lt;V3LicenseAssignedRemovedResult, SoftwareManagementLicensesV3.AssignLicensesToDevices3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to assign licenses to a list of devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV3.assignLicensesToDevices3({ acc, body });
  // TODO: Handle 'response' of type V3LicenseAssignedRemovedResult
} catch (err) {
  if (
    err instanceof SoftwareManagementLicensesV3.AssignLicensesToDevices3Error &&
      err.payload.kind === "fotaV3Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |
| <code>body</code> | <code>[V3LicenseImei](src/models/v3-license-imei.ts)</code> | License assignment. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3LicenseAssignedRemovedResult](src/models/v3-license-assigned-removed-result.ts)</code>

**OnError**: <code>[SoftwareManagementLicensesV3.AssignLicensesToDevices3Error](src/resources/software-management-licenses-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAccountLicensesStatus(request: SoftwareManagementLicensesV3.GetAccountLicensesStatusRequest, options?: RequestOptions): ApiPromise&lt;V3LicenseSummary, SoftwareManagementLicensesV3.GetAccountLicensesStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The endpoint allows user to list license usage.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV3.getAccountLicensesStatus({ acc });
  // TODO: Handle 'response' of type V3LicenseSummary
} catch (err) {
  if (
    err instanceof SoftwareManagementLicensesV3.GetAccountLicensesStatusError &&
      err.payload.kind === "fotaV3Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |
| <code>lastSeenDeviceId?</code> | <code>string</code> | Last seen device identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3LicenseSummary](src/models/v3-license-summary.ts)</code>

**OnError**: <code>[SoftwareManagementLicensesV3.GetAccountLicensesStatusError](src/resources/software-management-licenses-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeLicensesFromDevices3(request: SoftwareManagementLicensesV3.RemoveLicensesFromDevices3Request, options?: RequestOptions): ApiPromise&lt;V3LicenseAssignedRemovedResult, SoftwareManagementLicensesV3.RemoveLicensesFromDevices3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to remove licenses from a list of devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV3.removeLicensesFromDevices3({ acc, body });
  // TODO: Handle 'response' of type V3LicenseAssignedRemovedResult
} catch (err) {
  if (
    err instanceof SoftwareManagementLicensesV3.RemoveLicensesFromDevices3Error &&
      err.payload.kind === "fotaV3Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |
| <code>body</code> | <code>[V3LicenseImei](src/models/v3-license-imei.ts)</code> | License removal. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3LicenseAssignedRemovedResult](src/models/v3-license-assigned-removed-result.ts)</code>

**OnError**: <code>[SoftwareManagementLicensesV3.RemoveLicensesFromDevices3Error](src/resources/software-management-licenses-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CampaignsV3

> Source: [CampaignsV3](src/resources/campaigns-v3.ts)

<details>
<summary><code>cancelCampaign2(request: CampaignsV3.CancelCampaign2Request, options?: RequestOptions): ApiPromise&lt;FotaV3SuccessResult, CampaignsV3.CancelCampaign2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to cancel a firmware campaign. A firmware campaign already started can not be cancelled.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV3.cancelCampaign2({ accountName, campaignId });
  // TODO: Handle 'response' of type FotaV3SuccessResult
} catch (err) {
  if (err instanceof CampaignsV3.CancelCampaign2Error && err.payload.kind === "fotaV3Result") {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account identifier. |
| <code>campaignId</code> | <code>string</code> | Firmware upgrade information. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FotaV3SuccessResult](src/models/fota-v3-success-result.ts)</code>

**OnError**: <code>[CampaignsV3.CancelCampaign2Error](src/resources/campaigns-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCampaignInformation2(request: CampaignsV3.GetCampaignInformation2Request, options?: RequestOptions): ApiPromise&lt;Campaign, CampaignsV3.GetCampaignInformation2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows the user to retrieve campaign level information for a specified campaign.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV3.getCampaignInformation2({ accountName, campaignId });
  // TODO: Handle 'response' of type Campaign
} catch (err) {
  if (err instanceof CampaignsV3.GetCampaignInformation2Error && err.payload.kind === "fotaV3Result") {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account identifier. |
| <code>campaignId</code> | <code>string</code> | Firmware upgrade identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Campaign](src/models/campaign.ts)</code>

**OnError**: <code>[CampaignsV3.GetCampaignInformation2Error](src/resources/campaigns-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>scheduleCampaignFirmwareUpgrade2(request: CampaignsV3.ScheduleCampaignFirmwareUpgrade2Request, options?: RequestOptions): ApiPromise&lt;FirmwareCampaign, CampaignsV3.ScheduleCampaignFirmwareUpgrade2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows a user to schedule a firmware upgrade for a list of devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV3.scheduleCampaignFirmwareUpgrade2({ accountName, body });
  // TODO: Handle 'response' of type FirmwareCampaign
} catch (err) {
  if (
    err instanceof CampaignsV3.ScheduleCampaignFirmwareUpgrade2Error && err.payload.kind === "fotaV3Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account identifier. |
| <code>body</code> | <code>[CampaignFirmwareUpgrade](src/models/campaign-firmware-upgrade.ts)</code> | Firmware upgrade information. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FirmwareCampaign](src/models/firmware-campaign.ts)</code>

**OnError**: <code>[CampaignsV3.ScheduleCampaignFirmwareUpgrade2Error](src/resources/campaigns-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCampaignDates2(request: CampaignsV3.UpdateCampaignDates2Request, options?: RequestOptions): ApiPromise&lt;FirmwareCampaign, CampaignsV3.UpdateCampaignDates2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to change campaign dates and time windows. Fields which need to remain unchanged should be also provided.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV3.updateCampaignDates2({ acc, campaignId, body });
  // TODO: Handle 'response' of type FirmwareCampaign
} catch (err) {
  if (err instanceof CampaignsV3.UpdateCampaignDates2Error && err.payload.kind === "fotaV3Result") {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |
| <code>campaignId</code> | <code>string</code> | Firmware upgrade information. |
| <code>body</code> | <code>[V3ChangeCampaignDatesRequest](src/models/v3-change-campaign-dates-request.ts)</code> | New dates and time windows. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FirmwareCampaign](src/models/firmware-campaign.ts)</code>

**OnError**: <code>[CampaignsV3.UpdateCampaignDates2Error](src/resources/campaigns-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCampaignFirmwareDevices2(request: CampaignsV3.UpdateCampaignFirmwareDevices2Request, options?: RequestOptions): ApiPromise&lt;V3AddOrRemoveDeviceResult, CampaignsV3.UpdateCampaignFirmwareDevices2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to Add or Remove devices to an existing campaign.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV3.updateCampaignFirmwareDevices2({ acc, campaignId, body });
  // TODO: Handle 'response' of type V3AddOrRemoveDeviceResult
} catch (err) {
  if (err instanceof CampaignsV3.UpdateCampaignFirmwareDevices2Error && err.payload.kind === "fotaV3Result") {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |
| <code>campaignId</code> | <code>string</code> | Unique identifier of a campaign. |
| <code>body</code> | <code>[V3AddOrRemoveDeviceRequest](src/models/v3-add-or-remove-device-request.ts)</code> | Add or remove device to existing upgrade information. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3AddOrRemoveDeviceResult](src/models/v3-add-or-remove-device-result.ts)</code>

**OnError**: <code>[CampaignsV3.UpdateCampaignFirmwareDevices2Error](src/resources/campaigns-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SoftwareManagementReportsV3

> Source: [SoftwareManagementReportsV3](src/resources/software-management-reports-v3.ts)

<details>
<summary><code>getCampaignDeviceStatus2(request: SoftwareManagementReportsV3.GetCampaignDeviceStatus2Request, options?: RequestOptions): ApiPromise&lt;V3CampaignDevice, SoftwareManagementReportsV3.GetCampaignDeviceStatus2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all devices in a campaign and the status of each device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV3.getCampaignDeviceStatus2({ acc, campaignId });
  // TODO: Handle 'response' of type V3CampaignDevice
} catch (err) {
  if (
    err instanceof SoftwareManagementReportsV3.GetCampaignDeviceStatus2Error &&
      err.payload.kind === "fotaV3Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |
| <code>campaignId</code> | <code>string</code> | Campaign identifier. |
| <code>lastSeenDeviceId?</code> | <code>string</code> | Last seen device identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3CampaignDevice](src/models/v3-campaign-device.ts)</code>

**OnError**: <code>[SoftwareManagementReportsV3.GetCampaignDeviceStatus2Error](src/resources/software-management-reports-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCampaignHistoryByStatus2(request: SoftwareManagementReportsV3.GetCampaignHistoryByStatus2Request, options?: RequestOptions): ApiPromise&lt;V3CampaignHistory, SoftwareManagementReportsV3.GetCampaignHistoryByStatus2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of campaigns for an account that have a specified campaign status.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV3.getCampaignHistoryByStatus2({
    acc,
    campaignStatus,
  });
  // TODO: Handle 'response' of type V3CampaignHistory
} catch (err) {
  if (
    err instanceof SoftwareManagementReportsV3.GetCampaignHistoryByStatus2Error &&
      err.payload.kind === "fotaV3Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |
| <code>campaignStatus</code> | <code>[CampaignStatus](src/models/campaign-status.ts)</code> | Campaign status. |
| <code>lastSeenCampaignId?</code> | <code>string</code> | Last seen campaign Id. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3CampaignHistory](src/models/v3-campaign-history.ts)</code>

**OnError**: <code>[SoftwareManagementReportsV3.GetCampaignHistoryByStatus2Error](src/resources/software-management-reports-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDeviceFirmwareUpgradeHistory3(request: SoftwareManagementReportsV3.GetDeviceFirmwareUpgradeHistory3Request, options?: RequestOptions): ApiPromise&lt;DeviceFirmwareUpgrade[], SoftwareManagementReportsV3.GetDeviceFirmwareUpgradeHistory3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve campaign history for a specific device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV3.getDeviceFirmwareUpgradeHistory3({
    acc,
    deviceId,
  });
  // TODO: Handle 'response' of type DeviceFirmwareUpgrade[]
} catch (err) {
  if (
    err instanceof SoftwareManagementReportsV3.GetDeviceFirmwareUpgradeHistory3Error &&
      err.payload.kind === "fotaV3Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |
| <code>deviceId</code> | <code>string</code> | Device IMEI identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceFirmwareUpgrade](src/models/device-firmware-upgrade.ts)[]</code>

**OnError**: <code>[SoftwareManagementReportsV3.GetDeviceFirmwareUpgradeHistory3Error](src/resources/software-management-reports-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FirmwareV3

> Source: [FirmwareV3](src/resources/firmware-v3.ts)

<details>
<summary><code>listAvailableFirmware2(request: FirmwareV3.ListAvailableFirmware2Request, options?: RequestOptions): ApiPromise&lt;FirmwarePackage[], FirmwareV3.ListAvailableFirmware2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to list the firmware of an account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.firmwareV3.listAvailableFirmware2({ acc });
  // TODO: Handle 'response' of type FirmwarePackage[]
} catch (err) {
  if (err instanceof FirmwareV3.ListAvailableFirmware2Error && err.payload.kind === "fotaV3Result") {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |
| <code>protocol?</code> | <code>[FirmwareProtocol](src/models/firmware-protocol.ts)</code> | Filter to retrieve a specific protocol type used. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FirmwarePackage](src/models/firmware-package.ts)[]</code>

**OnError**: <code>[FirmwareV3.ListAvailableFirmware2Error](src/resources/firmware-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reportDeviceFirmware(request: FirmwareV3.ReportDeviceFirmwareRequest, options?: RequestOptions): ApiPromise&lt;DeviceFirmwareVersionUpdateResult, FirmwareV3.ReportDeviceFirmwareError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ask a device to report its firmware version asynchronously.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.firmwareV3.reportDeviceFirmware({ acc, deviceId });
  // TODO: Handle 'response' of type DeviceFirmwareVersionUpdateResult
} catch (err) {
  if (err instanceof FirmwareV3.ReportDeviceFirmwareError && err.payload.kind === "fotaV3Result") {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |
| <code>deviceId</code> | <code>string</code> | Device identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceFirmwareVersionUpdateResult](src/models/device-firmware-version-update-result.ts)</code>

**OnError**: <code>[FirmwareV3.ReportDeviceFirmwareError](src/resources/firmware-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>synchronizeDeviceFirmware(request: FirmwareV3.SynchronizeDeviceFirmwareRequest, options?: RequestOptions): ApiPromise&lt;DeviceFirmwareList, FirmwareV3.SynchronizeDeviceFirmwareError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Synchronize ThingSpace with the FOTA server for up to 100 devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.firmwareV3.synchronizeDeviceFirmware({ acc, body });
  // TODO: Handle 'response' of type DeviceFirmwareList
} catch (err) {
  if (err instanceof FirmwareV3.SynchronizeDeviceFirmwareError && err.payload.kind === "fotaV3Result") {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |
| <code>body</code> | <code>[FirmwareImei](src/models/firmware-imei.ts)</code> | DeviceIds to get firmware info synchronously. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceFirmwareList](src/models/device-firmware-list.ts)</code>

**OnError**: <code>[FirmwareV3.SynchronizeDeviceFirmwareError](src/resources/firmware-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AccountDevices

> Source: [AccountDevices](src/resources/account-devices.ts)

<details>
<summary><code>getAccountDeviceInformation(request: AccountDevices.GetAccountDeviceInformationRequest, options?: RequestOptions): ApiPromise&lt;V3AccountDeviceList, AccountDevices.GetAccountDeviceInformationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve account device information such as reported firmware on the devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountDevices.getAccountDeviceInformation({ acc });
  // TODO: Handle 'response' of type V3AccountDeviceList
} catch (err) {
  if (err instanceof AccountDevices.GetAccountDeviceInformationError && err.payload.kind === "fotaV3Result") {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |
| <code>lastSeenDeviceId?</code> | <code>string</code> | Last seen device identifier. |
| <code>protocol?</code> | <code>[DevicesProtocol](src/models/devices-protocol.ts)</code> | Filter to retrieve a specific protocol type used. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3AccountDeviceList](src/models/v3-account-device-list.ts)</code>

**OnError**: <code>[AccountDevices.GetAccountDeviceInformationError](src/resources/account-devices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAccountDevicesInformation(request: AccountDevices.ListAccountDevicesInformationRequest, options?: RequestOptions): ApiPromise&lt;DeviceListResult, AccountDevices.ListAccountDevicesInformationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve device information for a list of devices on an account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountDevices.listAccountDevicesInformation({ acc, body });
  // TODO: Handle 'response' of type DeviceListResult
} catch (err) {
  if (
    err instanceof AccountDevices.ListAccountDevicesInformationError && err.payload.kind === "fotaV3Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |
| <code>body</code> | <code>[DeviceImei](src/models/device-imei.ts)</code> | Request device list information. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceListResult](src/models/device-list-result.ts)</code>

**OnError**: <code>[AccountDevices.ListAccountDevicesInformationError](src/resources/account-devices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SoftwareManagementCallbacksV3

> Source: [SoftwareManagementCallbacksV3](src/resources/software-management-callbacks-v3.ts)

<details>
<summary><code>deregisterCallback5(request: SoftwareManagementCallbacksV3.DeregisterCallback5Request, options?: RequestOptions): ApiPromise&lt;FotaV3SuccessResult, SoftwareManagementCallbacksV3.DeregisterCallback5Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to delete a previously registered callback URL.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV3.deregisterCallback5({ acc });
  // TODO: Handle 'response' of type FotaV3SuccessResult
} catch (err) {
  if (
    err instanceof SoftwareManagementCallbacksV3.DeregisterCallback5Error &&
      err.payload.kind === "fotaV3Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FotaV3SuccessResult](src/models/fota-v3-success-result.ts)</code>

**OnError**: <code>[SoftwareManagementCallbacksV3.DeregisterCallback5Error](src/resources/software-management-callbacks-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRegisteredCallbacks5(request: SoftwareManagementCallbacksV3.ListRegisteredCallbacks5Request, options?: RequestOptions): ApiPromise&lt;FotaV3CallbackSummary, SoftwareManagementCallbacksV3.ListRegisteredCallbacks5Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to get the registered callback information.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV3.listRegisteredCallbacks5({ acc });
  // TODO: Handle 'response' of type FotaV3CallbackSummary
} catch (err) {
  if (
    err instanceof SoftwareManagementCallbacksV3.ListRegisteredCallbacks5Error &&
      err.payload.kind === "fotaV3Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FotaV3CallbackSummary](src/models/fota-v3-callback-summary.ts)</code>

**OnError**: <code>[SoftwareManagementCallbacksV3.ListRegisteredCallbacks5Error](src/resources/software-management-callbacks-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>registerCallback5(request: SoftwareManagementCallbacksV3.RegisterCallback5Request, options?: RequestOptions): ApiPromise&lt;FotaV3CallbackRegistrationResult, SoftwareManagementCallbacksV3.RegisterCallback5Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows the user to create the HTTPS callback address.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV3.registerCallback5({ acc, body });
  // TODO: Handle 'response' of type FotaV3CallbackRegistrationResult
} catch (err) {
  if (
    err instanceof SoftwareManagementCallbacksV3.RegisterCallback5Error && err.payload.kind === "fotaV3Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |
| <code>body</code> | <code>[FotaV3CallbackRegistrationRequest](src/models/fota-v3-callback-registration-request.ts)</code> | Callback URL registration. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FotaV3CallbackRegistrationResult](src/models/fota-v3-callback-registration-result.ts)</code>

**OnError**: <code>[SoftwareManagementCallbacksV3.RegisterCallback5Error](src/resources/software-management-callbacks-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCallback2(request: SoftwareManagementCallbacksV3.UpdateCallback2Request, options?: RequestOptions): ApiPromise&lt;FotaV3CallbackRegistrationResult, SoftwareManagementCallbacksV3.UpdateCallback2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows the user to update the HTTPS callback address.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV3.updateCallback2({ acc, body });
  // TODO: Handle 'response' of type FotaV3CallbackRegistrationResult
} catch (err) {
  if (
    err instanceof SoftwareManagementCallbacksV3.UpdateCallback2Error && err.payload.kind === "fotaV3Result"
  ) {
    // TODO: Handle 'err.payload.body' of type FotaV3Result
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acc</code> | <code>string</code> | Account identifier. |
| <code>body</code> | <code>[FotaV3CallbackRegistrationRequest](src/models/fota-v3-callback-registration-request.ts)</code> | Callback URL registration. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FotaV3CallbackRegistrationResult](src/models/fota-v3-callback-registration-result.ts)</code>

**OnError**: <code>[SoftwareManagementCallbacksV3.UpdateCallback2Error](src/resources/software-management-callbacks-v3.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SimSecureForIoTLicenses

> Source: [SimSecureForIoTLicenses](src/resources/sim-secure-for-io-tlicenses.ts)

<details>
<summary><code>assignLicenseToDevices(request: SimSecureForIoTLicenses.AssignLicenseToDevicesRequest, options?: RequestOptions): ApiPromise&lt;SecuritySuccessResult, SimSecureForIoTLicenses.AssignLicenseToDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns SIM-Secure for IoT licenses to SIMs.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simSecureForIoTLicenses.assignLicenseToDevices({ body });
  // TODO: Handle 'response' of type SecuritySuccessResult
} catch (err) {
  if (
    err instanceof SimSecureForIoTLicenses.AssignLicenseToDevicesError &&
      err.payload.kind === "securityResult"
  ) {
    // TODO: Handle 'err.payload.body' of type SecurityResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xRequestId?</code> | <code>string</code> | Transaction Id. |
| <code>body</code> | <code>[AssignLicenseRequest](src/models/assign-license-request.ts)</code> | Request to assign license to devices. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SecuritySuccessResult](src/models/security-success-result.ts)</code>

**OnError**: <code>[SimSecureForIoTLicenses.AssignLicenseToDevicesError](src/resources/sim-secure-for-io-tlicenses.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unassignLicenseToDevices(request: SimSecureForIoTLicenses.UnassignLicenseToDevicesRequest, options?: RequestOptions): ApiPromise&lt;SecuritySuccessResult, SimSecureForIoTLicenses.UnassignLicenseToDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unassigns SIM-Secure for IoT Flexible and Flexible Bundle license from SIMs.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simSecureForIoTLicenses.unassignLicenseToDevices({ xRequestId });
  // TODO: Handle 'response' of type SecuritySuccessResult
} catch (err) {
  if (
    err instanceof SimSecureForIoTLicenses.UnassignLicenseToDevicesError &&
      err.payload.kind === "securityResult"
  ) {
    // TODO: Handle 'err.payload.body' of type SecurityResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xRequestId</code> | <code>string</code> | Transaction Id. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SecuritySuccessResult](src/models/security-success-result.ts)</code>

**OnError**: <code>[SimSecureForIoTLicenses.UnassignLicenseToDevicesError](src/resources/sim-secure-for-io-tlicenses.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AccountSubscriptions

> Source: [AccountSubscriptions](src/resources/account-subscriptions.ts)

<details>
<summary><code>listAccountSubscriptions(request: AccountSubscriptions.ListAccountSubscriptionsRequest, options?: RequestOptions): ApiPromise&lt;SecuritySubscriptionResult, AccountSubscriptions.ListAccountSubscriptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the total number of SIM-Secure for IoT subscription licenses purchased for your account by license type, and lists the number of licenses assigned and available for each license type.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountSubscriptions.listAccountSubscriptions({ body });
  // TODO: Handle 'response' of type SecuritySubscriptionResult
} catch (err) {
  if (
    err instanceof AccountSubscriptions.ListAccountSubscriptionsError && err.payload.kind === "securityResult"
  ) {
    // TODO: Handle 'err.payload.body' of type SecurityResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xRequestId?</code> | <code>string</code> | Transaction Id. |
| <code>body</code> | <code>[SecuritySubscriptionRequest](src/models/security-subscription-request.ts)</code> | Request for account subscription. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SecuritySubscriptionResult](src/models/security-subscription-result.ts)</code>

**OnError**: <code>[AccountSubscriptions.ListAccountSubscriptionsError](src/resources/account-subscriptions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DiagnosticsSubscriptions

> Source: [DiagnosticsSubscriptions](src/resources/diagnostics-subscriptions.ts)

<details>
<summary><code>getDiagnosticsSubscription(request: DiagnosticsSubscriptions.GetDiagnosticsSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;DiagnosticsSubscription, DiagnosticsSubscriptions.GetDiagnosticsSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint retrieves a diagnostics subscription by account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticsSubscriptions.getDiagnosticsSubscription({ accountName });
  // TODO: Handle 'response' of type DiagnosticsSubscription
} catch (err) {
  if (
    err instanceof DiagnosticsSubscriptions.GetDiagnosticsSubscriptionError &&
      err.payload.kind === "deviceDiagnosticsResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceDiagnosticsResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DiagnosticsSubscription](src/models/diagnostics-subscription.ts)</code>

**OnError**: <code>[DiagnosticsSubscriptions.GetDiagnosticsSubscriptionError](src/resources/diagnostics-subscriptions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DiagnosticsObservations

> Source: [DiagnosticsObservations](src/resources/diagnostics-observations.ts)

<details>
<summary><code>startDiagnosticsObservation(options?: RequestOptions): ApiPromise&lt;DiagnosticsObservationResult, DiagnosticsObservations.StartDiagnosticsObservationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows the user to start or change observe diagnostics.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticsObservations.startDiagnosticsObservation();
  // TODO: Handle 'response' of type DiagnosticsObservationResult
} catch (err) {
  if (
    err instanceof DiagnosticsObservations.StartDiagnosticsObservationError &&
      err.payload.kind === "deviceDiagnosticsResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceDiagnosticsResult
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DiagnosticsObservationResult](src/models/diagnostics-observation-result.ts)</code>

**OnError**: <code>[DiagnosticsObservations.StartDiagnosticsObservationError](src/resources/diagnostics-observations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopDiagnosticsObservation(request: DiagnosticsObservations.StopDiagnosticsObservationRequest, options?: RequestOptions): ApiPromise&lt;DiagnosticsObservationResult, DiagnosticsObservations.StopDiagnosticsObservationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows the user to stop or reset observe diagnostics.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticsObservations.stopDiagnosticsObservation({
    transactionId,
    accountName,
  });
  // TODO: Handle 'response' of type DiagnosticsObservationResult
} catch (err) {
  if (
    err instanceof DiagnosticsObservations.StopDiagnosticsObservationError &&
      err.payload.kind === "deviceDiagnosticsResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceDiagnosticsResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transactionId</code> | <code>string</code> | The ID value associated with the transaction. |
| <code>accountName</code> | <code>string</code> | The numeric account name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DiagnosticsObservationResult](src/models/diagnostics-observation-result.ts)</code>

**OnError**: <code>[DiagnosticsObservations.StopDiagnosticsObservationError](src/resources/diagnostics-observations.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DiagnosticsHistory

> Source: [DiagnosticsHistory](src/resources/diagnostics-history.ts)

<details>
<summary><code>getDiagnosticsHistory(options?: RequestOptions): ApiPromise&lt;History[], DiagnosticsHistory.GetDiagnosticsHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows the user to get the history data.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticsHistory.getDiagnosticsHistory();
  // TODO: Handle 'response' of type History[]
} catch (err) {
  if (
    err instanceof DiagnosticsHistory.GetDiagnosticsHistoryError &&
      err.payload.kind === "deviceDiagnosticsResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceDiagnosticsResult
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[History](src/models/history.ts)[]</code>

**OnError**: <code>[DiagnosticsHistory.GetDiagnosticsHistoryError](src/resources/diagnostics-history.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DiagnosticsSettings

> Source: [DiagnosticsSettings](src/resources/diagnostics-settings.ts)

<details>
<summary><code>listDiagnosticsSettings(request: DiagnosticsSettings.ListDiagnosticsSettingsRequest, options?: RequestOptions): ApiPromise&lt;DiagnosticObservationSetting[], DiagnosticsSettings.ListDiagnosticsSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint retrieves diagnostics settings synchronously.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticsSettings.listDiagnosticsSettings({ accountName, devices });
  // TODO: Handle 'response' of type DiagnosticObservationSetting[]
} catch (err) {
  if (
    err instanceof DiagnosticsSettings.ListDiagnosticsSettingsError &&
      err.payload.kind === "deviceDiagnosticsResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceDiagnosticsResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account identifier. |
| <code>devices</code> | <code>string</code> | Devices list formatted as "id, kind" |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DiagnosticObservationSetting](src/models/diagnostic-observation-setting.ts)[]</code>

**OnError**: <code>[DiagnosticsSettings.ListDiagnosticsSettingsError](src/resources/diagnostics-settings.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DiagnosticsCallbacks

> Source: [DiagnosticsCallbacks](src/resources/diagnostics-callbacks.ts)

<details>
<summary><code>getDiagnosticsSubscriptionCallbackInfo(request: DiagnosticsCallbacks.GetDiagnosticsSubscriptionCallbackInfoRequest, options?: RequestOptions): ApiPromise&lt;DeviceDiagnosticsCallback[], DiagnosticsCallbacks.GetDiagnosticsSubscriptionCallbackInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to get the registered callback information of an existing diagnostics subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticsCallbacks.getDiagnosticsSubscriptionCallbackInfo({ accountName });
  // TODO: Handle 'response' of type DeviceDiagnosticsCallback[]
} catch (err) {
  if (
    err instanceof DiagnosticsCallbacks.GetDiagnosticsSubscriptionCallbackInfoError &&
      err.payload.kind === "deviceDiagnosticsResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceDiagnosticsResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account identifier. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceDiagnosticsCallback](src/models/device-diagnostics-callback.ts)[]</code>

**OnError**: <code>[DiagnosticsCallbacks.GetDiagnosticsSubscriptionCallbackInfoError](src/resources/diagnostics-callbacks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>registerDiagnosticsCallbackUrl(options?: RequestOptions): ApiPromise&lt;DeviceDiagnosticsCallback, DiagnosticsCallbacks.RegisterDiagnosticsCallbackUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user update the callback HTTPS address of an existing diagnostics subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticsCallbacks.registerDiagnosticsCallbackUrl();
  // TODO: Handle 'response' of type DeviceDiagnosticsCallback
} catch (err) {
  if (
    err instanceof DiagnosticsCallbacks.RegisterDiagnosticsCallbackUrlError &&
      err.payload.kind === "deviceDiagnosticsResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceDiagnosticsResult
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceDiagnosticsCallback](src/models/device-diagnostics-callback.ts)</code>

**OnError**: <code>[DiagnosticsCallbacks.RegisterDiagnosticsCallbackUrlError](src/resources/diagnostics-callbacks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unregisterDiagnosticsCallback(request: DiagnosticsCallbacks.UnregisterDiagnosticsCallbackRequest, options?: RequestOptions): ApiPromise&lt;DeviceDiagnosticsCallback, DiagnosticsCallbacks.UnregisterDiagnosticsCallbackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows user to delete a registered callback URL and credential.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticsCallbacks.unregisterDiagnosticsCallback({
    accountName,
    serviceName,
  });
  // TODO: Handle 'response' of type DeviceDiagnosticsCallback
} catch (err) {
  if (
    err instanceof DiagnosticsCallbacks.UnregisterDiagnosticsCallbackError &&
      err.payload.kind === "deviceDiagnosticsResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceDiagnosticsResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Account identifier. |
| <code>serviceName</code> | <code>string</code> | Service name for callback notification. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceDiagnosticsCallback](src/models/device-diagnostics-callback.ts)</code>

**OnError**: <code>[DiagnosticsCallbacks.UnregisterDiagnosticsCallbackError](src/resources/diagnostics-callbacks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DiagnosticsFactoryReset

> Source: [DiagnosticsFactoryReset](src/resources/diagnostics-factory-reset.ts)

<details>
<summary><code>decivesRestart(request: DiagnosticsFactoryReset.DecivesRestartRequest, options?: RequestOptions): ApiPromise&lt;DiagnosticsObservationResult, DiagnosticsFactoryReset.DecivesRestartError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Performs a device reboot or a factory reset on the modem portion of the device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticsFactoryReset.decivesRestart({ body });
  // TODO: Handle 'response' of type DiagnosticsObservationResult
} catch (err) {
  if (
    err instanceof DiagnosticsFactoryReset.DecivesRestartError &&
      err.payload.kind === "deviceDiagnosticsResult"
  ) {
    // TODO: Handle 'err.payload.body' of type DeviceDiagnosticsResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeviceResetRequest](src/models/device-reset-request.ts)</code> | A request to perform a device reboot. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DiagnosticsObservationResult](src/models/diagnostics-observation-result.ts)</code>

**OnError**: <code>[DiagnosticsFactoryReset.DecivesRestartError](src/resources/diagnostics-factory-reset.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Targets

> Source: [Targets](src/resources/targets.ts)

<details>
<summary><code>createAzureCentralIoTApplication(request: Targets.CreateAzureCentralIoTApplicationRequest, options?: RequestOptions): ApiPromise&lt;CreateIoTApplicationResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deploy a new Azure IoT Central application based on the Verizon ARM template within the specified Azure Active Directory account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.targets.createAzureCentralIoTApplication({ billingaccountId, body });
  // TODO: Handle 'response' of type CreateIoTApplicationResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>billingaccountId</code> | <code>string</code> | TThe ThingSpace ID of the authenticating billing account. |
| <code>body</code> | <code>[CreateIoTApplicationRequest](src/models/create-io-tapplication-request.ts)</code> | The request body must include the UUID of the subscription that you want to update plus any properties that you want to change. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateIoTApplicationResponse](src/models/create-io-tapplication-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTarget(request: Targets.CreateTargetRequestParams, options?: RequestOptions): ApiPromise&lt;Target, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Define a target to receive data streams, alerts, or callbacks. After creating the target resource, use its ID in a subscription to set up a data stream.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.targets.createTarget({ body });
  // TODO: Handle 'response' of type Target
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateTargetRequest](src/models/create-target-request.ts)</code> | The request body provides the details of the target that you want to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Target](src/models/target.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTarget(request: Targets.DeleteTargetRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a target from a ThingSpace account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.targets.deleteTarget({ body });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeleteTargetRequest](src/models/delete-target-request.ts)</code> | The request body identifies the target to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generateTargetExternalId(request: Targets.GenerateTargetExternalIdRequest, options?: RequestOptions): ApiPromise&lt;GenerateExternalIdResult, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a unique string that ThingSpace will pass to AWS for increased security.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.targets.generateTargetExternalId({ body });
  // TODO: Handle 'response' of type GenerateExternalIdResult
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GenerateExternalIdRequest](src/models/generate-external-id-request.ts)</code> | The request body only contains the authenticating account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenerateExternalIdResult](src/models/generate-external-id-result.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryTarget(request: Targets.QueryTargetRequestParams, options?: RequestOptions): ApiPromise&lt;Target[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for targets by property values. Returns an array of all matching target resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.targets.queryTarget({ body });
  // TODO: Handle 'response' of type Target[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QueryTargetRequest](src/models/query-target-request.ts)</code> | Search for targets by property values. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Target](src/models/target.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CloudConnectorSubscriptions

> Source: [CloudConnectorSubscriptions](src/resources/cloud-connector-subscriptions.ts)

<details>
<summary><code>createSubscription(request: CloudConnectorSubscriptions.CreateSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;Subscription, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a subscription to define a streaming channel that sends data from devices in the account to an endpoint defined in a target resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudConnectorSubscriptions.createSubscription({ body });
  // TODO: Handle 'response' of type Subscription
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateSubscriptionRequest](src/models/create-subscription-request.ts)</code> | The request body provides the details of the subscription that you want to create. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Subscription](src/models/subscription.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSubscription(request: CloudConnectorSubscriptions.DeleteSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a subscription from a ThingSpace account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.cloudConnectorSubscriptions.deleteSubscription({ body });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeleteSubscriptionRequest](src/models/delete-subscription-request.ts)</code> | The request body identifies the subscription to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>querySubscription(request: CloudConnectorSubscriptions.QuerySubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;Subscription[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for subscriptions by property values. Returns an array of all matching subscription resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudConnectorSubscriptions.querySubscription({ body });
  // TODO: Handle 'response' of type Subscription[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QuerySubscriptionRequest](src/models/query-subscription-request.ts)</code> | The request body specifies fields and values to match. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Subscription](src/models/subscription.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CloudConnectorDevices

> Source: [CloudConnectorDevices](src/resources/cloud-connector-devices.ts)

<details>
<summary><code>deleteDeviceFromAccount(request: CloudConnectorDevices.DeleteDeviceFromAccountRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a device from a ThingSpace account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.cloudConnectorDevices.deleteDeviceFromAccount({ body });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RemoveDeviceRequest](src/models/remove-device-request.ts)</code> | The request body identifies the device to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>findDeviceByPropertyValues(request: CloudConnectorDevices.FindDeviceByPropertyValuesRequest, options?: RequestOptions): ApiPromise&lt;FindDeviceByPropertyResponseList, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find devices by property values. Returns an array of all matching device resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudConnectorDevices.findDeviceByPropertyValues({ body });
  // TODO: Handle 'response' of type FindDeviceByPropertyResponseList
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QuerySubscriptionRequest](src/models/query-subscription-request.ts)</code> | The request body specifies fields and values to match. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindDeviceByPropertyResponseList](src/models/find-device-by-property-response-list.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchDeviceEventHistory(request: CloudConnectorDevices.SearchDeviceEventHistoryRequestParams, options?: RequestOptions): ApiPromise&lt;SearchDeviceEventHistoryResponseList, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search device event history to find events that match criteria.Sensor readings, configuration changes, and other device data are all stored as events.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudConnectorDevices.searchDeviceEventHistory({ body });
  // TODO: Handle 'response' of type SearchDeviceEventHistoryResponseList
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchDeviceEventHistoryRequest](src/models/search-device-event-history-request.ts)</code> | The device identifier and fields to match in the search. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchDeviceEventHistoryResponseList](src/models/search-device-event-history-response-list.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchDevicesResourcesByPropertyValues(request: CloudConnectorDevices.SearchDevicesResourcesByPropertyValuesRequest, options?: RequestOptions): ApiPromise&lt;SearchDeviceByPropertyResponseList, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for devices by property values. Returns an array of all matching device resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudConnectorDevices.searchDevicesResourcesByPropertyValues({ body });
  // TODO: Handle 'response' of type SearchDeviceByPropertyResponseList
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QuerySubscriptionRequest](src/models/query-subscription-request.ts)</code> | The request body specifies fields and values to match. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchDeviceByPropertyResponseList](src/models/search-device-by-property-response-list.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchSensorReadings(request: CloudConnectorDevices.SearchSensorReadingsRequest, options?: RequestOptions): ApiPromise&lt;SearchSensorHistoryResponseList, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the readings of a specified sensor, with the most recent reading first. Sensor readings are stored as events; this request an array of events.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudConnectorDevices.searchSensorReadings({ fieldname, body });
  // TODO: Handle 'response' of type SearchSensorHistoryResponseList
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fieldname</code> | <code>string</code> | The name of the sensor. |
| <code>body</code> | <code>[SearchSensorHistoryRequest](src/models/search-sensor-history-request.ts)</code> | The device identifier and fields to match in the search. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSensorHistoryResponseList](src/models/search-sensor-history-response-list.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDevicesConfigurationValue(request: CloudConnectorDevices.UpdateDevicesConfigurationValueRequest, options?: RequestOptions): ApiPromise&lt;ChangeConfigurationResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change configuration values on a device, such as setting how often a device records and reports sensor readings.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudConnectorDevices.updateDevicesConfigurationValue({ body });
  // TODO: Handle 'response' of type ChangeConfigurationResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ChangeConfigurationRequest](src/models/change-configuration-request.ts)</code> | The request body changes configuration values on a device. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChangeConfigurationResponse](src/models/change-configuration-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## HplDeviceManagement

> Source: [HplDeviceManagement](src/resources/hpl-device-management.ts)

<details>
<summary><code>addDevicesHyperPrecise(request: HplDeviceManagement.AddDevicesHyperPreciseRequest, options?: RequestOptions): ApiPromise&lt;HplAddDevicesRequest[], HplDeviceManagement.AddDevicesHyperPreciseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API if you want to manage some device settings before you are ready to activate service for the devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.hplDeviceManagement.addDevicesHyperPrecise({ body });
  // TODO: Handle 'response' of type HplAddDevicesRequest[]
} catch (err) {
  if (
    err instanceof HplDeviceManagement.AddDevicesHyperPreciseError &&
      err.payload.kind === "hyperPreciseLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type HyperPreciseLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[HplAddDevicesRequest](src/models/hpl-add-devices-request.ts)</code> | Devices to add to the account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[HplAddDevicesRequest](src/models/hpl-add-devices-request.ts)[]</code>

**OnError**: <code>[HplDeviceManagement.AddDevicesHyperPreciseError](src/resources/hpl-device-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DeviceServiceManagement

> Source: [DeviceServiceManagement](src/resources/device-service-management.ts)

<details>
<summary><code>getDeviceHyperPreciseStatus(request: DeviceServiceManagement.GetDeviceHyperPreciseStatusRequest, options?: RequestOptions): ApiPromise&lt;BullseyeServiceResult, DeviceServiceManagement.GetDeviceHyperPreciseStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the list of a status for hyper-precise location devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceServiceManagement.getDeviceHyperPreciseStatus({ imei, accountNumber });
  // TODO: Handle 'response' of type BullseyeServiceResult
} catch (err) {
  if (
    err instanceof DeviceServiceManagement.GetDeviceHyperPreciseStatusError &&
      err.payload.kind === "hyperPreciseLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type HyperPreciseLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>imei</code> | <code>string</code> | The International Mobile Equipment Identifier of the device. |
| <code>accountNumber</code> | <code>string</code> | The numeric name of the account and must include leading zeroes. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BullseyeServiceResult](src/models/bullseye-service-result.ts)</code>

**OnError**: <code>[DeviceServiceManagement.GetDeviceHyperPreciseStatusError](src/resources/device-service-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDeviceHyperPreciseStatus(request: DeviceServiceManagement.UpdateDeviceHyperPreciseStatusRequest, options?: RequestOptions): ApiPromise&lt;BullseyeServiceResult, DeviceServiceManagement.UpdateDeviceHyperPreciseStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable/disable hyper-precise service for a device.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceServiceManagement.updateDeviceHyperPreciseStatus({ body });
  // TODO: Handle 'response' of type BullseyeServiceResult
} catch (err) {
  if (
    err instanceof DeviceServiceManagement.UpdateDeviceHyperPreciseStatusError &&
      err.payload.kind === "hyperPreciseLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type HyperPreciseLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BullseyeServiceRequest](src/models/bullseye-service-request.ts)</code> | List of devices and hyper-precise required statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BullseyeServiceResult](src/models/bullseye-service-result.ts)</code>

**OnError**: <code>[DeviceServiceManagement.UpdateDeviceHyperPreciseStatusError](src/resources/device-service-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DeviceReports

> Source: [DeviceReports](src/resources/device-reports.ts)

<details>
<summary><code>calculateAggregatedReportAsynchronous(request: DeviceReports.CalculateAggregatedReportAsynchronousRequest, options?: RequestOptions): ApiPromise&lt;AggregatedReportCallbackResult, DeviceReports.CalculateAggregatedReportAsynchronousError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate aggregated report per day with number of sessions and usage information. User will receive an asynchronous callback for the specified list of devices (Max 10000) and date range (Max 180 days).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceReports.calculateAggregatedReportAsynchronous({ body });
  // TODO: Handle 'response' of type AggregatedReportCallbackResult
} catch (err) {
  if (
    err instanceof DeviceReports.CalculateAggregatedReportAsynchronousError &&
      err.payload.kind === "hyperPreciseLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type HyperPreciseLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AggregateSessionReportRequest](src/models/aggregate-session-report-request.ts)</code> | Aggregated session report request. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AggregatedReportCallbackResult](src/models/aggregated-report-callback-result.ts)</code>

**OnError**: <code>[DeviceReports.CalculateAggregatedReportAsynchronousError](src/resources/device-reports.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>calculateAggregatedReportSynchronous(request: DeviceReports.CalculateAggregatedReportSynchronousRequest, options?: RequestOptions): ApiPromise&lt;AggregateSessionReport, DeviceReports.CalculateAggregatedReportSynchronousError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate aggregated report per day with number of sessions and usage information. User will receive synchronous response for specified list of devices (Max 10) and date range (Max 180 days).

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceReports.calculateAggregatedReportSynchronous({ body });
  // TODO: Handle 'response' of type AggregateSessionReport
} catch (err) {
  if (
    err instanceof DeviceReports.CalculateAggregatedReportSynchronousError &&
      err.payload.kind === "hyperPreciseLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type HyperPreciseLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AggregateSessionReportRequest](src/models/aggregate-session-report-request.ts)</code> | Aggregated report request. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AggregateSessionReport](src/models/aggregate-session-report.ts)</code>

**OnError**: <code>[DeviceReports.CalculateAggregatedReportSynchronousError](src/resources/device-reports.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSessionsReport(request: DeviceReports.GetSessionsReportRequest, options?: RequestOptions): ApiPromise&lt;SessionReport, DeviceReports.GetSessionsReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detailed report of session duration and number of bytes transferred per day.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceReports.getSessionsReport({ body });
  // TODO: Handle 'response' of type SessionReport
} catch (err) {
  if (
    err instanceof DeviceReports.GetSessionsReportError && err.payload.kind === "hyperPreciseLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type HyperPreciseLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SessionReportRequest](src/models/session-report-request.ts)</code> | Request for sessions report. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionReport](src/models/session-report.ts)</code>

**OnError**: <code>[DeviceReports.GetSessionsReportError](src/resources/device-reports.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## HyperPreciseLocationCallbacks

> Source: [HyperPreciseLocationCallbacks](src/resources/hyper-precise-location-callbacks.ts)

<details>
<summary><code>deregisterCallback6(request: HyperPreciseLocationCallbacks.DeregisterCallback6Request, options?: RequestOptions): ApiPromise&lt;undefined, HyperPreciseLocationCallbacks.DeregisterCallback6Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops ThingSpace from sending callback messages for the specified account and listener name.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.hyperPreciseLocationCallbacks.deregisterCallback6({ accountNumber, service });
} catch (err) {
  if (
    err instanceof HyperPreciseLocationCallbacks.DeregisterCallback6Error &&
      err.payload.kind === "hyperPreciseLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type HyperPreciseLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountNumber</code> | <code>string</code> | The numeric ID of the account and must include leading zeroes. This value is indentical to `accountName`. |
| <code>service</code> | <code>string</code> | The name of the callback service that will be deleted. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[HyperPreciseLocationCallbacks.DeregisterCallback6Error](src/resources/hyper-precise-location-callbacks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRegisteredCallbacks6(request: HyperPreciseLocationCallbacks.ListRegisteredCallbacks6Request, options?: RequestOptions): ApiPromise&lt;CallbackCreated[], HyperPreciseLocationCallbacks.ListRegisteredCallbacks6Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find registered callback listener for account by account number.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.hyperPreciseLocationCallbacks.listRegisteredCallbacks6({ accountNumber });
  // TODO: Handle 'response' of type CallbackCreated[]
} catch (err) {
  if (
    err instanceof HyperPreciseLocationCallbacks.ListRegisteredCallbacks6Error &&
      err.payload.kind === "hyperPreciseLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type HyperPreciseLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountNumber</code> | <code>string</code> | The numeric ID of the account and must include leading zeroes. This value is indentical to `accountName`. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CallbackCreated](src/models/callback-created.ts)[]</code>

**OnError**: <code>[HyperPreciseLocationCallbacks.ListRegisteredCallbacks6Error](src/resources/hyper-precise-location-callbacks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>registerCallback6(request: HyperPreciseLocationCallbacks.RegisterCallback6Request, options?: RequestOptions): ApiPromise&lt;CallbackRegistered, HyperPreciseLocationCallbacks.RegisterCallback6Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers a URL at which an account receives asynchronous responses and other messages from a ThingSpace Platform callback service. The messages are REST messages. You are responsible for creating and running a listening process on your server at that URL to receive and parse the messages.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.hyperPreciseLocationCallbacks.registerCallback6({ accountNumber, body });
  // TODO: Handle 'response' of type CallbackRegistered
} catch (err) {
  if (
    err instanceof HyperPreciseLocationCallbacks.RegisterCallback6Error &&
      err.payload.kind === "hyperPreciseLocationResult"
  ) {
    // TODO: Handle 'err.payload.body' of type HyperPreciseLocationResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountNumber</code> | <code>string</code> | A unique identifier for an account. |
| <code>body</code> | <code>[HyperPreciseLocationCallback](src/models/hyper-precise-location-callback.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CallbackRegistered](src/models/callback-registered.ts)</code>

**OnError**: <code>[HyperPreciseLocationCallbacks.RegisterCallback6Error](src/resources/hyper-precise-location-callbacks.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DeviceCredentialManagement

> Source: [DeviceCredentialManagement](src/resources/device-credential-management.ts)

<details>
<summary><code>dropCredentials(request: DeviceCredentialManagement.DropCredentialsRequest, options?: RequestOptions): ApiPromise&lt;DropResponse, DeviceCredentialManagement.DropCredentialsError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceCredentialManagement.dropCredentials({ body });
  // TODO: Handle 'response' of type DropResponse
} catch (err) {
  if (
    err instanceof DeviceCredentialManagement.DropCredentialsError && err.payload.kind === "errorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CredentialsRequest](src/models/credentials-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DropResponse](src/models/drop-response.ts)</code>

**OnError**: <code>[DeviceCredentialManagement.DropCredentialsError](src/resources/device-credential-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generateCredentials(request: DeviceCredentialManagement.GenerateCredentialsRequest, options?: RequestOptions): ApiPromise&lt;GenerateResponse, DeviceCredentialManagement.GenerateCredentialsError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceCredentialManagement.generateCredentials({ body });
  // TODO: Handle 'response' of type GenerateResponse
} catch (err) {
  if (
    err instanceof DeviceCredentialManagement.GenerateCredentialsError && err.payload.kind === "errorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CredentialsRequest](src/models/credentials-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenerateResponse](src/models/generate-response.ts)</code>

**OnError**: <code>[DeviceCredentialManagement.GenerateCredentialsError](src/resources/device-credential-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resetCredentials(request: DeviceCredentialManagement.ResetCredentialsRequest, options?: RequestOptions): ApiPromise&lt;GenerateResponse, DeviceCredentialManagement.ResetCredentialsError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceCredentialManagement.resetCredentials({ body });
  // TODO: Handle 'response' of type GenerateResponse
} catch (err) {
  if (
    err instanceof DeviceCredentialManagement.ResetCredentialsError && err.payload.kind === "errorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CredentialsRequest](src/models/credentials-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenerateResponse](src/models/generate-response.ts)</code>

**OnError**: <code>[DeviceCredentialManagement.ResetCredentialsError](src/resources/device-credential-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveCredentials(request: DeviceCredentialManagement.RetrieveCredentialsRequest, options?: RequestOptions): ApiPromise&lt;RetrieveResponse, DeviceCredentialManagement.RetrieveCredentialsError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceCredentialManagement.retrieveCredentials({ body });
  // TODO: Handle 'response' of type RetrieveResponse
} catch (err) {
  if (
    err instanceof DeviceCredentialManagement.RetrieveCredentialsError && err.payload.kind === "errorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type ErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CredentialsRequest](src/models/credentials-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RetrieveResponse](src/models/retrieve-response.ts)</code>

**OnError**: <code>[DeviceCredentialManagement.RetrieveCredentialsError](src/resources/device-credential-management.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AnomalySettings

> Source: [AnomalySettings](src/resources/anomaly-settings.ts)

<details>
<summary><code>activateAnomalyDetection(request: AnomalySettings.ActivateAnomalyDetectionRequest, options?: RequestOptions): ApiPromise&lt;IntelligenceSuccessResult, AnomalySettings.ActivateAnomalyDetectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uses the subscribed account ID to activate anomaly detection and set threshold values.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalySettings.activateAnomalyDetection({ body });
  // TODO: Handle 'response' of type IntelligenceSuccessResult
} catch (err) {
  if (
    err instanceof AnomalySettings.ActivateAnomalyDetectionError && err.payload.kind === "intelligenceResult"
  ) {
    // TODO: Handle 'err.payload.body' of type IntelligenceResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AnomalyDetectionRequest](src/models/anomaly-detection-request.ts)</code> | Request to activate anomaly detection. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IntelligenceSuccessResult](src/models/intelligence-success-result.ts)</code>

**OnError**: <code>[AnomalySettings.ActivateAnomalyDetectionError](src/resources/anomaly-settings.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAnomalyDetectionSettings(request: AnomalySettings.ListAnomalyDetectionSettingsRequest, options?: RequestOptions): ApiPromise&lt;AnomalyDetectionSettings, AnomalySettings.ListAnomalyDetectionSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the current anomaly detection settings for an account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalySettings.listAnomalyDetectionSettings({ accountName });
  // TODO: Handle 'response' of type AnomalyDetectionSettings
} catch (err) {
  if (
    err instanceof AnomalySettings.ListAnomalyDetectionSettingsError &&
      err.payload.kind === "intelligenceResult"
  ) {
    // TODO: Handle 'err.payload.body' of type IntelligenceResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | The name of the subscribed account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnomalyDetectionSettings](src/models/anomaly-detection-settings.ts)</code>

**OnError**: <code>[AnomalySettings.ListAnomalyDetectionSettingsError](src/resources/anomaly-settings.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resetAnomalyDetectionParameters(request: AnomalySettings.ResetAnomalyDetectionParametersRequest, options?: RequestOptions): ApiPromise&lt;IntelligenceSuccessResult, AnomalySettings.ResetAnomalyDetectionParametersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resets the thresholds to zero.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalySettings.resetAnomalyDetectionParameters({ accountName });
  // TODO: Handle 'response' of type IntelligenceSuccessResult
} catch (err) {
  if (
    err instanceof AnomalySettings.ResetAnomalyDetectionParametersError &&
      err.payload.kind === "intelligenceResult"
  ) {
    // TODO: Handle 'err.payload.body' of type IntelligenceResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | The name of the subscribed account. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IntelligenceSuccessResult](src/models/intelligence-success-result.ts)</code>

**OnError**: <code>[AnomalySettings.ResetAnomalyDetectionParametersError](src/resources/anomaly-settings.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AnomalyTriggers

> Source: [AnomalyTriggers](src/resources/anomaly-triggers.ts)

<details>
<summary><code>createAnomalyDetectionTrigger(request: AnomalyTriggers.CreateAnomalyDetectionTriggerRequest, options?: RequestOptions): ApiPromise&lt;AnomalyDetectionTrigger, AnomalyTriggers.CreateAnomalyDetectionTriggerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This corresponds to the M2M-MC SOAP interface, ```CreateTrigger```.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalyTriggers.createAnomalyDetectionTrigger({ body });
  // TODO: Handle 'response' of type AnomalyDetectionTrigger
} catch (err) {
  if (
    err instanceof AnomalyTriggers.CreateAnomalyDetectionTriggerError &&
      err.payload.kind === "intelligenceResult"
  ) {
    // TODO: Handle 'err.payload.body' of type IntelligenceResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateTriggerRequest](src/models/create-trigger-request.ts)</code> | Create Trigger Request |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnomalyDetectionTrigger](src/models/anomaly-detection-trigger.ts)</code>

**OnError**: <code>[AnomalyTriggers.CreateAnomalyDetectionTriggerError](src/resources/anomaly-triggers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAnomalyDetectionTrigger(request: AnomalyTriggers.DeleteAnomalyDetectionTriggerRequest, options?: RequestOptions): ApiPromise&lt;AnomalyDetectionTrigger, AnomalyTriggers.DeleteAnomalyDetectionTriggerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific trigger ID

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalyTriggers.deleteAnomalyDetectionTrigger({ triggerId });
  // TODO: Handle 'response' of type AnomalyDetectionTrigger
} catch (err) {
  if (
    err instanceof AnomalyTriggers.DeleteAnomalyDetectionTriggerError &&
      err.payload.kind === "intelligenceResult"
  ) {
    // TODO: Handle 'err.payload.body' of type IntelligenceResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>triggerId</code> | <code>string</code> | The trigger ID to be deleted |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnomalyDetectionTrigger](src/models/anomaly-detection-trigger.ts)</code>

**OnError**: <code>[AnomalyTriggers.DeleteAnomalyDetectionTriggerError](src/resources/anomaly-triggers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAnomalyDetectionTriggerSettings(request: AnomalyTriggers.ListAnomalyDetectionTriggerSettingsRequest, options?: RequestOptions): ApiPromise&lt;GetTriggerResponseList[], AnomalyTriggers.ListAnomalyDetectionTriggerSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This corresponds to the M2M-MC SOAP interface, ```GetTriggers```.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalyTriggers.listAnomalyDetectionTriggerSettings({ triggerId });
  // TODO: Handle 'response' of type GetTriggerResponseList[]
} catch (err) {
  if (
    err instanceof AnomalyTriggers.ListAnomalyDetectionTriggerSettingsError &&
      err.payload.kind === "intelligenceResult"
  ) {
    // TODO: Handle 'err.payload.body' of type IntelligenceResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>triggerId</code> | <code>string</code> | trigger ID |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTriggerResponseList](src/models/get-trigger-response-list.ts)[]</code>

**OnError**: <code>[AnomalyTriggers.ListAnomalyDetectionTriggerSettingsError](src/resources/anomaly-triggers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAnomalyDetectionTriggers(options?: RequestOptions): ApiPromise&lt;GetTriggerResponseList[], AnomalyTriggers.ListAnomalyDetectionTriggersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This corresponds to the M2M-MC SOAP interface, ```GetTriggers```.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalyTriggers.listAnomalyDetectionTriggers();
  // TODO: Handle 'response' of type GetTriggerResponseList[]
} catch (err) {
  if (
    err instanceof AnomalyTriggers.ListAnomalyDetectionTriggersError &&
      err.payload.kind === "intelligenceResult"
  ) {
    // TODO: Handle 'err.payload.body' of type IntelligenceResult
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTriggerResponseList](src/models/get-trigger-response-list.ts)[]</code>

**OnError**: <code>[AnomalyTriggers.ListAnomalyDetectionTriggersError](src/resources/anomaly-triggers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAnomalyDetectionTrigger(request: AnomalyTriggers.UpdateAnomalyDetectionTriggerRequest, options?: RequestOptions): ApiPromise&lt;AnomalyDetectionTrigger, AnomalyTriggers.UpdateAnomalyDetectionTriggerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This corresponds to the M2M-MC SOAP interface, ```UpdateTriggerRequest```.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalyTriggers.updateAnomalyDetectionTrigger({ body });
  // TODO: Handle 'response' of type AnomalyDetectionTrigger
} catch (err) {
  if (
    err instanceof AnomalyTriggers.UpdateAnomalyDetectionTriggerError &&
      err.payload.kind === "intelligenceResult"
  ) {
    // TODO: Handle 'err.payload.body' of type IntelligenceResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpdateTriggerRequest](src/models/update-trigger-request.ts)</code> | Update Trigger Request |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnomalyDetectionTrigger](src/models/anomaly-detection-trigger.ts)</code>

**OnError**: <code>[AnomalyTriggers.UpdateAnomalyDetectionTriggerError](src/resources/anomaly-triggers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AnomalyTriggersV2

> Source: [AnomalyTriggersV2](src/resources/anomaly-triggers-v2.ts)

<details>
<summary><code>createAnomalyDetectionTriggerV2(request: AnomalyTriggersV2.CreateAnomalyDetectionTriggerV2Request, options?: RequestOptions): ApiPromise&lt;AnomalyDetectionTrigger, AnomalyTriggersV2.CreateAnomalyDetectionTriggerV2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates the trigger to identify an anomaly.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalyTriggersV2.createAnomalyDetectionTriggerV2({ body });
  // TODO: Handle 'response' of type AnomalyDetectionTrigger
} catch (err) {
  if (
    err instanceof AnomalyTriggersV2.CreateAnomalyDetectionTriggerV2Error &&
      err.payload.kind === "intelligenceResult"
  ) {
    // TODO: Handle 'err.payload.body' of type IntelligenceResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateTriggerRequestOptions](src/models/unions/create-trigger-request-options.ts)[]</code> | Request to create an anomaly trigger. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnomalyDetectionTrigger](src/models/anomaly-detection-trigger.ts)</code>

**OnError**: <code>[AnomalyTriggersV2.CreateAnomalyDetectionTriggerV2Error](src/resources/anomaly-triggers-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAnomalyDetectionTriggerSettingsV2(request: AnomalyTriggersV2.ListAnomalyDetectionTriggerSettingsV2Request, options?: RequestOptions): ApiPromise&lt;AnomalyTriggerResult, AnomalyTriggersV2.ListAnomalyDetectionTriggerSettingsV2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the values for a specific trigger ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalyTriggersV2.listAnomalyDetectionTriggerSettingsV2({ triggerId });
  // TODO: Handle 'response' of type AnomalyTriggerResult
} catch (err) {
  if (
    err instanceof AnomalyTriggersV2.ListAnomalyDetectionTriggerSettingsV2Error &&
      err.payload.kind === "intelligenceResult"
  ) {
    // TODO: Handle 'err.payload.body' of type IntelligenceResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>triggerId</code> | <code>string</code> | The trigger ID of a specific trigger. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnomalyTriggerResult](src/models/anomaly-trigger-result.ts)</code>

**OnError**: <code>[AnomalyTriggersV2.ListAnomalyDetectionTriggerSettingsV2Error](src/resources/anomaly-triggers-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAnomalyDetectionTriggerV2(request: AnomalyTriggersV2.UpdateAnomalyDetectionTriggerV2Request, options?: RequestOptions): ApiPromise&lt;IntelligenceSuccessResult, AnomalyTriggersV2.UpdateAnomalyDetectionTriggerV2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing trigger using the account name.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalyTriggersV2.updateAnomalyDetectionTriggerV2({ body });
  // TODO: Handle 'response' of type IntelligenceSuccessResult
} catch (err) {
  if (
    err instanceof AnomalyTriggersV2.UpdateAnomalyDetectionTriggerV2Error &&
      err.payload.kind === "intelligenceResult"
  ) {
    // TODO: Handle 'err.payload.body' of type IntelligenceResult
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpdateTriggerRequestOptions](src/models/unions/update-trigger-request-options.ts)[]</code> | Request to update existing trigger. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IntelligenceSuccessResult](src/models/intelligence-success-result.ts)</code>

**OnError**: <code>[AnomalyTriggersV2.UpdateAnomalyDetectionTriggerV2Error](src/resources/anomaly-triggers-v2.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WirelessNetworkPerformance

> Source: [WirelessNetworkPerformance](src/resources/wireless-network-performance.ts)

<details>
<summary><code>deviceExperience30DaysHistory(request: WirelessNetworkPerformance.DeviceExperience30DaysHistoryRequest, options?: RequestOptions): ApiPromise&lt;WnpRequestResponse, WirelessNetworkPerformance.DeviceExperience30DaysHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A report of a specific device's service scores over a 30 day period.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wirelessNetworkPerformance.deviceExperience30DaysHistory({ body });
  // TODO: Handle 'response' of type WnpRequestResponse
} catch (err) {
  if (
    err instanceof WirelessNetworkPerformance.DeviceExperience30DaysHistoryError &&
      err.payload.kind === "wnpRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type WnpRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetDeviceExperienceScoreHistoryRequest](src/models/get-device-experience-score-history-request.ts)</code> | Request for a device's 30 day experience. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WnpRequestResponse](src/models/wnp-request-response.ts)</code>

**OnError**: <code>[WirelessNetworkPerformance.DeviceExperience30DaysHistoryError](src/resources/wireless-network-performance.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deviceExperienceBulkLatest(request: WirelessNetworkPerformance.DeviceExperienceBulkLatestRequest, options?: RequestOptions): ApiPromise&lt;WnpRequestResponse, WirelessNetworkPerformance.DeviceExperienceBulkLatestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run a report to view the latest device experience score for specific devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wirelessNetworkPerformance.deviceExperienceBulkLatest({ body });
  // TODO: Handle 'response' of type WnpRequestResponse
} catch (err) {
  if (
    err instanceof WirelessNetworkPerformance.DeviceExperienceBulkLatestError &&
      err.payload.kind === "wnpRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type WnpRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetDeviceExperienceScoreBulkRequest](src/models/get-device-experience-score-bulk-request.ts)</code> | Request for bulk latest history details. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WnpRequestResponse](src/models/wnp-request-response.ts)</code>

**OnError**: <code>[WirelessNetworkPerformance.DeviceExperienceBulkLatestError](src/resources/wireless-network-performance.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>domestic4GAnd5GNationwideNetworkCoverage(request: WirelessNetworkPerformance.Domestic4GAnd5GNationwideNetworkCoverageRequest, options?: RequestOptions): ApiPromise&lt;WnpRequestResponse, WirelessNetworkPerformance.Domestic4GAnd5GNationwideNetworkCoverageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run a report for FWA Address qualification or to determine network types available and available coverage. Network types covered include: CAT-M, NB-IOT, LTE, LTE-AWS, 5GNW, MMWAVE and C-BAND.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wirelessNetworkPerformance.domestic4GAnd5GNationwideNetworkCoverage({ body });
  // TODO: Handle 'response' of type WnpRequestResponse
} catch (err) {
  if (
    err instanceof WirelessNetworkPerformance.Domestic4GAnd5GNationwideNetworkCoverageError &&
      err.payload.kind === "wnpRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type WnpRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[M2MV1IntelligenceWirelessCoverageRequest](src/models/unions/m2-mv1-intelligence-wireless-coverage-request.ts)</code> | Request for network coverage details. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WnpRequestResponse](src/models/wnp-request-response.ts)</code>

**OnError**: <code>[WirelessNetworkPerformance.Domestic4GAnd5GNationwideNetworkCoverageError](src/resources/wireless-network-performance.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>nearRealTimeNetworkConditions(request: WirelessNetworkPerformance.NearRealTimeNetworkConditionsRequest, options?: RequestOptions): ApiPromise&lt;WnpRequestResponse, WirelessNetworkPerformance.NearRealTimeNetworkConditionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

WNP Query for current network condition.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wirelessNetworkPerformance.nearRealTimeNetworkConditions({ body });
  // TODO: Handle 'response' of type WnpRequestResponse
} catch (err) {
  if (
    err instanceof WirelessNetworkPerformance.NearRealTimeNetworkConditionsError &&
      err.payload.kind === "wnpRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type WnpRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetNetworkConditionsRequest](src/models/get-network-conditions-request.ts)</code> | Request for current network health. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WnpRequestResponse](src/models/wnp-request-response.ts)</code>

**OnError**: <code>[WirelessNetworkPerformance.NearRealTimeNetworkConditionsError](src/resources/wireless-network-performance.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>siteProximity(request: WirelessNetworkPerformance.SiteProximityRequest, options?: RequestOptions): ApiPromise&lt;WnpRequestResponse, WirelessNetworkPerformance.SiteProximityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Identify the direction and general distance of nearby cell sites and the technology supported by the equipment.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.wirelessNetworkPerformance.siteProximity({ body });
  // TODO: Handle 'response' of type WnpRequestResponse
} catch (err) {
  if (
    err instanceof WirelessNetworkPerformance.SiteProximityError &&
      err.payload.kind === "wnpRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type WnpRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetNetworkConditionsRequest](src/models/get-network-conditions-request.ts)</code> | Request for cell site proximity. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WnpRequestResponse](src/models/wnp-request-response.ts)</code>

**OnError**: <code>[WirelessNetworkPerformance.SiteProximityError](src/resources/wireless-network-performance.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ManagingESimProfiles

> Source: [ManagingESimProfiles](src/resources/managing-esim-profiles.ts)

<details>
<summary><code>activateADeviceProfile(request: ManagingESimProfiles.ActivateADeviceProfileRequest, options?: RequestOptions): ApiPromise&lt;GioRequestResponse, ManagingESimProfiles.ActivateADeviceProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activate a device with either a lead or local profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.activateADeviceProfile({ body });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  if (
    err instanceof ManagingESimProfiles.ActivateADeviceProfileError &&
      err.payload.kind === "gioRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GioProfileRequest](src/models/gio-profile-request.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>

**OnError**: <code>[ManagingESimProfiles.ActivateADeviceProfileError](src/resources/managing-esim-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deactivateADeviceProfile(request: ManagingESimProfiles.DeactivateADeviceProfileRequest, options?: RequestOptions): ApiPromise&lt;GioRequestResponse, ManagingESimProfiles.DeactivateADeviceProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deactivate the lead or local profile. **Note:** to reactivate the profile, use the **Activate** endpoint above.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.deactivateADeviceProfile({ body });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  if (
    err instanceof ManagingESimProfiles.DeactivateADeviceProfileError &&
      err.payload.kind === "gioRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GioDeactivateDeviceProfileRequest](src/models/gio-deactivate-device-profile-request.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>

**OnError**: <code>[ManagingESimProfiles.DeactivateADeviceProfileError](src/resources/managing-esim-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteADeviceProfile(request: ManagingESimProfiles.DeleteADeviceProfileRequest, options?: RequestOptions): ApiPromise&lt;GioRequestResponse, ManagingESimProfiles.DeleteADeviceProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a device profile for Global IoT Orchestration. **Note:** the profile must be deactivated first!

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.deleteADeviceProfile({ body });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  if (
    err instanceof ManagingESimProfiles.DeleteADeviceProfileError &&
      err.payload.kind === "gioRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeviceProfileRequest](src/models/device-profile-request.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>

**OnError**: <code>[ManagingESimProfiles.DeleteADeviceProfileError](src/resources/managing-esim-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deviceSuspend(request: ManagingESimProfiles.DeviceSuspendRequest, options?: RequestOptions): ApiPromise&lt;GioRequestResponse, ManagingESimProfiles.DeviceSuspendError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Suspend all service to an eUICC device, including the lead and local profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.deviceSuspend({ body });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  if (err instanceof ManagingESimProfiles.DeviceSuspendError && err.payload.kind === "gioRestErrorResponse") {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GioProfileRequest](src/models/gio-profile-request.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>

**OnError**: <code>[ManagingESimProfiles.DeviceSuspendError](src/resources/managing-esim-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadADeviceProfile(request: ManagingESimProfiles.DownloadADeviceProfileRequest, options?: RequestOptions): ApiPromise&lt;GioRequestResponse, ManagingESimProfiles.DownloadADeviceProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download a Global IoT Orchestration device profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.downloadADeviceProfile({ body });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  if (
    err instanceof ManagingESimProfiles.DownloadADeviceProfileError &&
      err.payload.kind === "gioRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeviceProfileRequest](src/models/device-profile-request.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>

**OnError**: <code>[ManagingESimProfiles.DownloadADeviceProfileError](src/resources/managing-esim-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableADeviceProfile(request: ManagingESimProfiles.EnableADeviceProfileRequest, options?: RequestOptions): ApiPromise&lt;GioRequestResponse, ManagingESimProfiles.EnableADeviceProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable a device lead or local profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.enableADeviceProfile({ body });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  if (
    err instanceof ManagingESimProfiles.EnableADeviceProfileError &&
      err.payload.kind === "gioRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeviceProfileRequest](src/models/device-profile-request.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>

**OnError**: <code>[ManagingESimProfiles.EnableADeviceProfileError](src/resources/managing-esim-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableADeviceProfileForDownload(request: ManagingESimProfiles.EnableADeviceProfileForDownloadRequest, options?: RequestOptions): ApiPromise&lt;GioRequestResponse, ManagingESimProfiles.EnableADeviceProfileForDownloadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable the Global IoT Orchestration device profile for download.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.enableADeviceProfileForDownload({ body });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  if (
    err instanceof ManagingESimProfiles.EnableADeviceProfileForDownloadError &&
      err.payload.kind === "gioRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeviceProfileRequest](src/models/device-profile-request.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>

**OnError**: <code>[ManagingESimProfiles.EnableADeviceProfileForDownloadError](src/resources/managing-esim-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>profileSuspend(request: ManagingESimProfiles.ProfileSuspendRequest, options?: RequestOptions): ApiPromise&lt;GioRequestResponse, ManagingESimProfiles.ProfileSuspendError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Suspend a device's Global profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.profileSuspend({ body });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  if (
    err instanceof ManagingESimProfiles.ProfileSuspendError && err.payload.kind === "gioRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GioProfileRequest](src/models/gio-profile-request.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>

**OnError**: <code>[ManagingESimProfiles.ProfileSuspendError](src/resources/managing-esim-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resumeProfile(request: ManagingESimProfiles.ResumeProfileRequest, options?: RequestOptions): ApiPromise&lt;GioRequestResponse, ManagingESimProfiles.ResumeProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resume service to a device with either a lead or local profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.resumeProfile({ body });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  if (err instanceof ManagingESimProfiles.ResumeProfileError && err.payload.kind === "gioRestErrorResponse") {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GioProfileRequest](src/models/gio-profile-request.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>

**OnError**: <code>[ManagingESimProfiles.ResumeProfileError](src/resources/managing-esim-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setFallback(request: ManagingESimProfiles.SetFallbackRequest, options?: RequestOptions): ApiPromise&lt;GioRequestResponse, ManagingESimProfiles.SetFallbackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable a fallback profile to be set.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.setFallback({ body });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  if (err instanceof ManagingESimProfiles.SetFallbackError && err.payload.kind === "gioRestErrorResponse") {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FallBack](src/models/fall-back.ts)</code> | Set the fallback attributes to allow a fallback profile to be activated. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>

**OnError**: <code>[ManagingESimProfiles.SetFallbackError](src/resources/managing-esim-profiles.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DeviceSmsMessaging

> Source: [DeviceSmsMessaging](src/resources/device-sms-messaging.ts)

<details>
<summary><code>getSmsMessages(request: DeviceSmsMessaging.GetSmsMessagesRequest, options?: RequestOptions): ApiPromise&lt;SmsMessagesResponse, DeviceSmsMessaging.GetSmsMessagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves queued SMS messages sent by all M2M MC devices associated with an account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceSmsMessaging.getSmsMessages({ accountName });
  // TODO: Handle 'response' of type SmsMessagesResponse
} catch (err) {
  if (err instanceof DeviceSmsMessaging.GetSmsMessagesError && err.payload.kind === "gioRestErrorResponse") {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Numeric account name |
| <code>next?</code> | <code>string</code> | Continue the previous query from the pageUrl in Location Header |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SmsMessagesResponse](src/models/sms-messages-response.ts)</code>

**OnError**: <code>[DeviceSmsMessaging.GetSmsMessagesError](src/resources/device-sms-messaging.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSmsMessageHistory(request: DeviceSmsMessaging.ListSmsMessageHistoryRequest, options?: RequestOptions): ApiPromise&lt;GioRequestResponse, DeviceSmsMessaging.ListSmsMessageHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of sms history for a given device during a specified time frame.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceSmsMessaging.listSmsMessageHistory({ body });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  if (
    err instanceof DeviceSmsMessaging.ListSmsMessageHistoryError &&
      err.payload.kind === "gioRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SmsEventHistoryRequest](src/models/sms-event-history-request.ts)</code> | Device Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>

**OnError**: <code>[DeviceSmsMessaging.ListSmsMessageHistoryError](src/resources/device-sms-messaging.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendAnSmsMessage(request: DeviceSmsMessaging.SendAnSmsMessageRequest, options?: RequestOptions): ApiPromise&lt;GioRequestResponse, DeviceSmsMessaging.SendAnSmsMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends an SMS message to one device. Messages are queued on the M2M MC Platform and sent as soon as possible, but they may be delayed due to traffic and routing considerations.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceSmsMessaging.sendAnSmsMessage({ body });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  if (
    err instanceof DeviceSmsMessaging.SendAnSmsMessageError && err.payload.kind === "gioRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GiosmsSendRequest](src/models/giosms-send-request.ts)</code> | SMS message to an indiividual device. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>

**OnError**: <code>[DeviceSmsMessaging.SendAnSmsMessageError](src/resources/device-sms-messaging.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startSmsMessageDelivery(request: DeviceSmsMessaging.StartSmsMessageDeliveryRequest, options?: RequestOptions): ApiPromise&lt;SuccessResponse, DeviceSmsMessaging.StartSmsMessageDeliveryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts delivery of SMS messages for the specified account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceSmsMessaging.startSmsMessageDelivery({ accountName });
  // TODO: Handle 'response' of type SuccessResponse
} catch (err) {
  if (
    err instanceof DeviceSmsMessaging.StartSmsMessageDeliveryError &&
      err.payload.kind === "gioRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | Numeric account name |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponse](src/models/success-response.ts)</code>

**OnError**: <code>[DeviceSmsMessaging.StartSmsMessageDeliveryError](src/resources/device-sms-messaging.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DeviceActions

> Source: [DeviceActions](src/resources/device-actions.ts)

<details>
<summary><code>accountInformation(request: DeviceActions.AccountInformationRequest, options?: RequestOptions): ApiPromise&lt;AccountDetails, DeviceActions.AccountInformationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all of the service plans, features and carriers associated with the account specified.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceActions.accountInformation({ accountName });
  // TODO: Handle 'response' of type AccountDetails
} catch (err) {
  if (err instanceof DeviceActions.AccountInformationError && err.payload.kind === "gioRestErrorResponse") {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountDetails](src/models/account-details.ts)</code>

**OnError**: <code>[DeviceActions.AccountInformationError](src/resources/device-actions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>aggregateUsage(request: DeviceActions.AggregateUsageRequest, options?: RequestOptions): ApiPromise&lt;GioRequestResponse, DeviceActions.AggregateUsageApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the aggregate usage for a device or a number of devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceActions.aggregateUsage({ body });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  if (err instanceof DeviceActions.AggregateUsageApiError && err.payload.kind === "gioRestErrorResponse") {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AggregateUsage](src/models/aggregate-usage.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>

**OnError**: <code>[DeviceActions.AggregateUsageApiError](src/resources/device-actions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dailyUsage(request: DeviceActions.DailyUsageRequest, options?: RequestOptions): ApiPromise&lt;DailyUsageResponse, DeviceActions.DailyUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the daily usage for a device, for a specified period of time, segmented by day

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceActions.dailyUsage({ body });
  // TODO: Handle 'response' of type DailyUsageResponse
} catch (err) {
  if (err instanceof DeviceActions.DailyUsageError && err.payload.kind === "gioRestErrorResponse") {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DailyUsage](src/models/daily-usage.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DailyUsageResponse](src/models/daily-usage-response.ts)</code>

**OnError**: <code>[DeviceActions.DailyUsageError](src/resources/device-actions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAsynchronousRequestStatus(request: DeviceActions.GetAsynchronousRequestStatusRequest, options?: RequestOptions): ApiPromise&lt;StatusResponse, DeviceActions.GetAsynchronousRequestStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status of an asynchronous request made with the Device Actions.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceActions.getAsynchronousRequestStatus({ accountName, requestId });
  // TODO: Handle 'response' of type StatusResponse
} catch (err) {
  if (
    err instanceof DeviceActions.GetAsynchronousRequestStatusError &&
      err.payload.kind === "gioRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | - |
| <code>requestId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusResponse](src/models/status-response.ts)</code>

**OnError**: <code>[DeviceActions.GetAsynchronousRequestStatusError](src/resources/device-actions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveDeviceProvisioningHistory(request: DeviceActions.RetrieveDeviceProvisioningHistoryRequest, options?: RequestOptions): ApiPromise&lt;GioRequestResponse, DeviceActions.RetrieveDeviceProvisioningHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the provisioning history of a specific device or devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceActions.retrieveDeviceProvisioningHistory({ body });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  if (
    err instanceof DeviceActions.RetrieveDeviceProvisioningHistoryError &&
      err.payload.kind === "gioRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProvhistoryRequest](src/models/provhistory-request.ts)</code> | Device Provisioning History |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>

**OnError**: <code>[DeviceActions.RetrieveDeviceProvisioningHistoryError](src/resources/device-actions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveTheGlobalDeviceList(request: DeviceActions.RetrieveTheGlobalDeviceListRequest, options?: RequestOptions): ApiPromise&lt;GioRequestResponse, DeviceActions.RetrieveTheGlobalDeviceListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Allows the profile to fetch the complete device list. This works with Verizon US and Global profiles.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceActions.retrieveTheGlobalDeviceList({ body });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  if (
    err instanceof DeviceActions.RetrieveTheGlobalDeviceListError &&
      err.payload.kind === "gioRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetDeviceListWithProfilesRequest](src/models/get-device-list-with-profiles-request.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>

**OnError**: <code>[DeviceActions.RetrieveTheGlobalDeviceListError](src/resources/device-actions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>servicePlanList(request: DeviceActions.ServicePlanListRequest, options?: RequestOptions): ApiPromise&lt;AccountDetails, DeviceActions.ServicePlanListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all of the service plans, features and carriers associated with the account specified.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceActions.servicePlanList({ accountName });
  // TODO: Handle 'response' of type AccountDetails
} catch (err) {
  if (err instanceof DeviceActions.ServicePlanListError && err.payload.kind === "gioRestErrorResponse") {
    // TODO: Handle 'err.payload.body' of type GioRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountDetails](src/models/account-details.ts)</code>

**OnError**: <code>[DeviceActions.ServicePlanListError](src/resources/device-actions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ThingSpaceQualityOfServiceApiActions

> Source: [ThingSpaceQualityOfServiceApiActions](src/resources/thing-space-quality-of-service-api-actions.ts)

<details>
<summary><code>createAThingSpaceQualityOfServiceApiSubscription(request: ThingSpaceQualityOfServiceApiActions.CreateAThingSpaceQualityOfServiceApiSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;Success201, ThingSpaceQualityOfServiceApiActions.CreateAThingSpaceQualityOfServiceApiSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a QoS elevation subscription ID and activates the subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.thingSpaceQualityOfServiceApiActions.createAThingSpaceQualityOfServiceApiSubscription({
      body,
    });
  // TODO: Handle 'response' of type Success201
} catch (err) {
  if (
    err instanceof
      ThingSpaceQualityOfServiceApiActions.CreateAThingSpaceQualityOfServiceApiSubscriptionError &&
      err.payload.kind === "defaultResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SubscribeRequest](src/models/subscribe-request.ts)</code> | The request details to create a ThingSpace Quality of Service API subscription. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Success201](src/models/success201.ts)</code>

**OnError**: <code>[ThingSpaceQualityOfServiceApiActions.CreateAThingSpaceQualityOfServiceApiSubscriptionError](src/resources/thing-space-quality-of-service-api-actions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopAThingSpaceQualityOfServiceApiSubscription(request: ThingSpaceQualityOfServiceApiActions.StopAThingSpaceQualityOfServiceApiSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;Success201, ThingSpaceQualityOfServiceApiActions.StopAThingSpaceQualityOfServiceApiSubscriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops an active ThingSpace Quality of Service API subscription using the account name and the subscription ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.thingSpaceQualityOfServiceApiActions.stopAThingSpaceQualityOfServiceApiSubscription({
      accountName,
      qosSubscriptionId,
    });
  // TODO: Handle 'response' of type Success201
} catch (err) {
  if (
    err instanceof ThingSpaceQualityOfServiceApiActions.StopAThingSpaceQualityOfServiceApiSubscriptionError &&
      err.payload.kind === "defaultResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type DefaultResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | - |
| <code>qosSubscriptionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Success201](src/models/success201.ts)</code>

**OnError**: <code>[ThingSpaceQualityOfServiceApiActions.StopAThingSpaceQualityOfServiceApiSubscriptionError](src/resources/thing-space-quality-of-service-api-actions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Pwn

> Source: [Pwn](src/resources/pwn.ts)

<details>
<summary><code>changePwnDeviceIPaddress(request: Pwn.ChangePwnDeviceIPaddressRequestParams, options?: RequestOptions): ApiPromise&lt;ChangePwnDeviceIpAddressResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.pwn.changePwnDeviceIPaddress({ body });
  // TODO: Handle 'response' of type ChangePwnDeviceIpAddressResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ChangePwnDeviceIPaddressRequest](src/models/change-pwn-device-ipaddress-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChangePwnDeviceIpAddressResponse](src/models/change-pwn-device-ip-address-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>changePwnDeviceProfile(request: Pwn.ChangePwnDeviceProfileRequestParams, options?: RequestOptions): ApiPromise&lt;ChangePwnDeviceProfileResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.pwn.changePwnDeviceProfile({ body });
  // TODO: Handle 'response' of type ChangePwnDeviceProfileResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ChangePwnDeviceProfileRequest](src/models/change-pwn-device-profile-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChangePwnDeviceProfileResponse](src/models/change-pwn-device-profile-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>changePwnDeviceStateActivate(request: Pwn.ChangePwnDeviceStateActivateRequestParams, options?: RequestOptions): ApiPromise&lt;ChangePwnDeviceStateResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.pwn.changePwnDeviceStateActivate({ body });
  // TODO: Handle 'response' of type ChangePwnDeviceStateResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ChangePwnDeviceStateActivateRequest](src/models/change-pwn-device-state-activate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChangePwnDeviceStateResponse](src/models/change-pwn-device-state-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>changePwnDeviceStateDeactivate(request: Pwn.ChangePwnDeviceStateDeactivateRequestParams, options?: RequestOptions): ApiPromise&lt;ChangePwnDeviceStateResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.pwn.changePwnDeviceStateDeactivate({ body });
  // TODO: Handle 'response' of type ChangePwnDeviceStateResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ChangePwnDeviceStateDeactivateRequest](src/models/change-pwn-device-state-deactivate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChangePwnDeviceStateResponse](src/models/change-pwn-device-state-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPwnPerformanceConsent(request: Pwn.GetPwnPerformanceConsentRequest, options?: RequestOptions): ApiPromise&lt;GetPwnPerformanceConsentResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.pwn.getPwnPerformanceConsent({ aname });
  // TODO: Handle 'response' of type GetPwnPerformanceConsentResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>aname</code> | <code>string</code> | Account name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetPwnPerformanceConsentResponse](src/models/get-pwn-performance-consent-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProfileList(request: Pwn.GetProfileListRequest, options?: RequestOptions): ApiPromise&lt;PwnProfileList, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.pwn.getProfileList({ aname });
  // TODO: Handle 'response' of type PwnProfileList
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>aname</code> | <code>string</code> | Account name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PwnProfileList](src/models/pwn-profile-list.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>kpiList(request: Pwn.KpiListRequest, options?: RequestOptions): ApiPromise&lt;KpiInfoList, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.pwn.kpiList({ aname });
  // TODO: Handle 'response' of type KpiInfoList
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>aname</code> | <code>string</code> | Account name. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[KpiInfoList](src/models/kpi-info-list.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PromotionPeriodInformation

> Source: [PromotionPeriodInformation](src/resources/promotion-period-information.ts)

<details>
<summary><code>getPromoDeviceAggregateUsageHistory(request: PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryRequest, options?: RequestOptions): ApiPromise&lt;UsageRequestResponse, PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the aggregate usage for an account using pseudo-MDN during the promotional period using a callback.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.promotionPeriodInformation.getPromoDeviceAggregateUsageHistory({ body });
  // TODO: Handle 'response' of type UsageRequestResponse
} catch (err) {
  if (
    err instanceof PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryError &&
      err.payload.kind === "readySimRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type ReadySimRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RequestBodyForUsage](src/models/request-body-for-usage.ts)</code> | Retrieve Aggregate Usage |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsageRequestResponse](src/models/usage-request-response.ts)</code>

**OnError**: <code>[PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryError](src/resources/promotion-period-information.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPromoDeviceUsageHistory(request: PromotionPeriodInformation.GetPromoDeviceUsageHistoryRequest, options?: RequestOptions): ApiPromise&lt;ResponseToUsageQuery, PromotionPeriodInformation.GetPromoDeviceUsageHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the usage history of a device during the promotion period.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.promotionPeriodInformation.getPromoDeviceUsageHistory({ body });
  // TODO: Handle 'response' of type ResponseToUsageQuery
} catch (err) {
  if (
    err instanceof PromotionPeriodInformation.GetPromoDeviceUsageHistoryError &&
      err.payload.kind === "readySimRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type ReadySimRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ARequestBodyForUsage](src/models/arequest-body-for-usage.ts)</code> | Retrieve Aggregate Usage |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResponseToUsageQuery](src/models/response-to-usage-query.ts)</code>

**OnError**: <code>[PromotionPeriodInformation.GetPromoDeviceUsageHistoryError](src/resources/promotion-period-information.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RetrieveTheTriggers

> Source: [RetrieveTheTriggers](src/resources/retrieve-the-triggers.ts)

<details>
<summary><code>getAllAvailableTriggers(options?: RequestOptions): ApiPromise&lt;TriggerValueResponse, RetrieveTheTriggers.GetAllAvailableTriggersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all of the available triggers for pseudo-MDN.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.retrieveTheTriggers.getAllAvailableTriggers();
  // TODO: Handle 'response' of type TriggerValueResponse
} catch (err) {
  if (
    err instanceof RetrieveTheTriggers.GetAllAvailableTriggersError &&
      err.payload.kind === "readySimRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type ReadySimRestErrorResponse
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TriggerValueResponse](src/models/trigger-value-response.ts)</code>

**OnError**: <code>[RetrieveTheTriggers.GetAllAvailableTriggersError](src/resources/retrieve-the-triggers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllTriggersByAccountName(request: RetrieveTheTriggers.GetAllTriggersByAccountNameRequest, options?: RequestOptions): ApiPromise&lt;TriggerValueResponse, RetrieveTheTriggers.GetAllTriggersByAccountNameError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the triggers associated with an account name.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.retrieveTheTriggers.getAllTriggersByAccountName({ accountName });
  // TODO: Handle 'response' of type TriggerValueResponse
} catch (err) {
  if (
    err instanceof RetrieveTheTriggers.GetAllTriggersByAccountNameError &&
      err.payload.kind === "readySimRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type ReadySimRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | The account name |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TriggerValueResponse](src/models/trigger-value-response.ts)</code>

**OnError**: <code>[RetrieveTheTriggers.GetAllTriggersByAccountNameError](src/resources/retrieve-the-triggers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllTriggersByTriggerCategory(options?: RequestOptions): ApiPromise&lt;TriggerValueResponse2, RetrieveTheTriggers.GetAllTriggersByTriggerCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all of the triggers for the specified account associated with the PromoAlert category

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.retrieveTheTriggers.getAllTriggersByTriggerCategory();
  // TODO: Handle 'response' of type TriggerValueResponse2
} catch (err) {
  if (
    err instanceof RetrieveTheTriggers.GetAllTriggersByTriggerCategoryError &&
      err.payload.kind === "readySimRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type ReadySimRestErrorResponse
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TriggerValueResponse2](src/models/trigger-value-response2.ts)</code>

**OnError**: <code>[RetrieveTheTriggers.GetAllTriggersByTriggerCategoryError](src/resources/retrieve-the-triggers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTriggersById(request: RetrieveTheTriggers.GetTriggersByIdRequest, options?: RequestOptions): ApiPromise&lt;TriggerValueResponse2, RetrieveTheTriggers.GetTriggersByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrives a specific trigger by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.retrieveTheTriggers.getTriggersById({ triggerId });
  // TODO: Handle 'response' of type TriggerValueResponse2
} catch (err) {
  if (
    err instanceof RetrieveTheTriggers.GetTriggersByIdError &&
      err.payload.kind === "readySimRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type ReadySimRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>triggerId</code> | <code>string</code> | The ID of a specific trigger |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TriggerValueResponse2](src/models/trigger-value-response2.ts)</code>

**OnError**: <code>[RetrieveTheTriggers.GetTriggersByIdError](src/resources/retrieve-the-triggers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UpdateTriggers

> Source: [UpdateTriggers](src/resources/update-triggers.ts)

<details>
<summary><code>updateAllAvailableTriggers(request: UpdateTriggers.UpdateAllAvailableTriggersRequest, options?: RequestOptions): ApiPromise&lt;Success, UpdateTriggers.UpdateAllAvailableTriggersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the promotional triggers for pseudo-MDN.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateTriggers.updateAllAvailableTriggers();
  // TODO: Handle 'response' of type Success
} catch (err) {
  if (
    err instanceof UpdateTriggers.UpdateAllAvailableTriggersError &&
      err.payload.kind === "readySimRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type ReadySimRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[RequestTrigger](src/models/request-trigger.ts)</code> | Update the triggers |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Success](src/models/success.ts)</code>

**OnError**: <code>[UpdateTriggers.UpdateAllAvailableTriggersError](src/resources/update-triggers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SimActions

> Source: [SimActions](src/resources/sim-actions.ts)

<details>
<summary><code>newactivatecode(request: SimActions.NewactivatecodeRequest, options?: RequestOptions): ApiPromise&lt;ESimRequestResponse, SimActions.NewactivatecodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

System assign a new activation code to reactivate a deactivated device. **Note:** the previously assigned ICCID must be used to request a new activation code.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simActions.newactivatecode({ body });
  // TODO: Handle 'response' of type ESimRequestResponse
} catch (err) {
  if (err instanceof SimActions.NewactivatecodeError && err.payload.kind === "eSimRestErrorResponse") {
    // TODO: Handle 'err.payload.body' of type ESimRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ESimProfileRequest2](src/models/esim-profile-request2.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ESimRequestResponse](src/models/esim-request-response.ts)</code>

**OnError**: <code>[SimActions.NewactivatecodeError](src/resources/sim-actions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setactivateUsingPost(request: SimActions.SetactivateUsingPostRequest, options?: RequestOptions): ApiPromise&lt;ESimRequestResponse, SimActions.SetactivateUsingPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uses the profile to activate the SIM.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simActions.setactivateUsingPost({ body });
  // TODO: Handle 'response' of type ESimRequestResponse
} catch (err) {
  if (err instanceof SimActions.SetactivateUsingPostError && err.payload.kind === "eSimRestErrorResponse") {
    // TODO: Handle 'err.payload.body' of type ESimRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ESimProfileRequest](src/models/esim-profile-request.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ESimRequestResponse](src/models/esim-request-response.ts)</code>

**OnError**: <code>[SimActions.SetactivateUsingPostError](src/resources/sim-actions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setdeactivateUsingPost(request: SimActions.SetdeactivateUsingPostRequest, options?: RequestOptions): ApiPromise&lt;ESimRequestResponse, SimActions.SetdeactivateUsingPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uses the profile to deactivate the SIM.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.simActions.setdeactivateUsingPost({ body });
  // TODO: Handle 'response' of type ESimRequestResponse
} catch (err) {
  if (err instanceof SimActions.SetdeactivateUsingPostError && err.payload.kind === "eSimRestErrorResponse") {
    // TODO: Handle 'err.payload.body' of type ESimRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProfileRequest2](src/models/profile-request2.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ESimRequestResponse](src/models/esim-request-response.ts)</code>

**OnError**: <code>[SimActions.SetdeactivateUsingPostError](src/resources/sim-actions.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GlobalReporting

> Source: [GlobalReporting](src/resources/global-reporting.ts)

<details>
<summary><code>retrieveGlobalList(request: GlobalReporting.RetrieveGlobalListRequest, options?: RequestOptions): ApiPromise&lt;ESimRequestResponse, GlobalReporting.RetrieveGlobalListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of all devices associated with an account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.globalReporting.retrieveGlobalList({ body });
  // TODO: Handle 'response' of type ESimRequestResponse
} catch (err) {
  if (
    err instanceof GlobalReporting.RetrieveGlobalListError && err.payload.kind === "eSimRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type ESimRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ESimGlobalDeviceList](src/models/esim-global-device-list.ts)</code> | Device List |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ESimRequestResponse](src/models/esim-request-response.ts)</code>

**OnError**: <code>[GlobalReporting.RetrieveGlobalListError](src/resources/global-reporting.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deviceprovhistoryUsingPost(request: GlobalReporting.DeviceprovhistoryUsingPostRequest, options?: RequestOptions): ApiPromise&lt;ESimRequestResponse, GlobalReporting.DeviceprovhistoryUsingPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the provisioning history of a specific device or devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.globalReporting.deviceprovhistoryUsingPost({ body });
  // TODO: Handle 'response' of type ESimRequestResponse
} catch (err) {
  if (
    err instanceof GlobalReporting.DeviceprovhistoryUsingPostError &&
      err.payload.kind === "eSimRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type ESimRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ESimProvhistoryRequest](src/models/esim-provhistory-request.ts)</code> | Device Provisioning History |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ESimRequestResponse](src/models/esim-request-response.ts)</code>

**OnError**: <code>[GlobalReporting.DeviceprovhistoryUsingPostError](src/resources/global-reporting.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DeviceRoleController

> Source: [DeviceRoleController](src/resources/device-role-controller.ts)

<details>
<summary><code>getAclRulesByVendorId(request: DeviceRoleController.GetAclRulesByVendorIdRequest, options?: RequestOptions): ApiPromise&lt;DeviceRole[], DeviceRoleController.GetAclRulesByVendorIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows the user to get the access control rules defined for them.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceRoleController.getAclRulesByVendorId({ vendorId });
  // TODO: Handle 'response' of type DeviceRole[]
} catch (err) {
  if (err instanceof DeviceRoleController.GetAclRulesByVendorIdError && err.payload.kind === "error401") {
    // TODO: Handle 'err.payload.body' of type string
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | The user's Vendor ID |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceRole](src/models/device-role.ts)[]</code>

**OnError**: <code>[DeviceRoleController.GetAclRulesByVendorIdError](src/resources/device-role-controller.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EtxAppConfiguration

> Source: [EtxAppConfiguration](src/resources/etx-app-configuration.ts)

<details>
<summary><code>createConfiguration(request: EtxAppConfiguration.CreateConfigurationRequest, options?: RequestOptions): ApiPromise&lt;GeoFenceConfigurationResponse, EtxAppConfiguration.CreateConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint creates a new configuration in the system. The data for the new configuration should be provided as JSON in the body of the POST request. The system will return with a unique ID for the configuration, which is needed for any further manipulation (update or delete) of the configuration.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.etxAppConfiguration.createConfiguration({ vendorId, body });
  // TODO: Handle 'response' of type GeoFenceConfigurationResponse
} catch (err) {
  if (
    err instanceof EtxAppConfiguration.CreateConfigurationError && err.payload.kind === "responseErrorModel"
  ) {
    // TODO: Handle 'err.payload.body' of type ResponseErrorModel
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | The vendor's identifier |
| <code>body</code> | <code>[GeoFenceConfigurationRequest](src/models/geo-fence-configuration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeoFenceConfigurationResponse](src/models/geo-fence-configuration-response.ts)</code>

**OnError**: <code>[EtxAppConfiguration.CreateConfigurationError](src/resources/etx-app-configuration.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteConfiguration(request: EtxAppConfiguration.DeleteConfigurationRequest, options?: RequestOptions): ApiPromise&lt;undefined, EtxAppConfiguration.DeleteConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint deletes a specific configuration from the system. It requires the configuration ID parameter, which was provided by the POST (create) operation.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.etxAppConfiguration.deleteConfiguration({ id, vendorId });
} catch (err) {
  if (
    err instanceof EtxAppConfiguration.DeleteConfigurationError && err.payload.kind === "responseErrorModel"
  ) {
    // TODO: Handle 'err.payload.body' of type ResponseErrorModel
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The configuration identifier |
| <code>vendorId</code> | <code>string</code> | The vendor's identifier |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[EtxAppConfiguration.DeleteConfigurationError](src/resources/etx-app-configuration.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getConfiguration(request: EtxAppConfiguration.GetConfigurationRequest, options?: RequestOptions): ApiPromise&lt;GeoFenceConfigurationResponse, EtxAppConfiguration.GetConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint fetches and returns a specific configuration's details. The configuration ID parameter, which was provided when the configuration was created through the POST request, is need to retrieve the configuration details.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.etxAppConfiguration.getConfiguration({ id, vendorId });
  // TODO: Handle 'response' of type GeoFenceConfigurationResponse
} catch (err) {
  if (err instanceof EtxAppConfiguration.GetConfigurationError && err.payload.kind === "responseErrorModel") {
    // TODO: Handle 'err.payload.body' of type ResponseErrorModel
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The configuration identifier |
| <code>vendorId</code> | <code>string</code> | The vendor's identifier |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeoFenceConfigurationResponse](src/models/geo-fence-configuration-response.ts)</code>

**OnError**: <code>[EtxAppConfiguration.GetConfigurationError](src/resources/etx-app-configuration.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getConfigurationList(request: EtxAppConfiguration.GetConfigurationListRequest, options?: RequestOptions): ApiPromise&lt;ConfigurationListItem[], EtxAppConfiguration.GetConfigurationListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint fetches and returns the list of configurations defined by the Vendor. The list contains the configurations' identifier, name, description, and active flag. The vendor ID is provided when the configuration is created through the POST request.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.etxAppConfiguration.getConfigurationList({ vendorId });
  // TODO: Handle 'response' of type ConfigurationListItem[]
} catch (err) {
  if (
    err instanceof EtxAppConfiguration.GetConfigurationListError && err.payload.kind === "responseErrorModel"
  ) {
    // TODO: Handle 'err.payload.body' of type ResponseErrorModel
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | The vendor's identifier |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConfigurationListItem](src/models/configuration-list-item.ts)[]</code>

**OnError**: <code>[EtxAppConfiguration.GetConfigurationListError](src/resources/etx-app-configuration.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateConfiguration(request: EtxAppConfiguration.UpdateConfigurationRequest, options?: RequestOptions): ApiPromise&lt;undefined, EtxAppConfiguration.UpdateConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint updates an existing configuration. Similar to POST, the updated data for the configuration should be provided as JSON in the body of the PUT request. The configuration ID parameter, which was provided by the POST (create) operation, is required to do any updates on the configuration.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.etxAppConfiguration.updateConfiguration({ id, vendorId, body });
} catch (err) {
  if (
    err instanceof EtxAppConfiguration.UpdateConfigurationError && err.payload.kind === "responseErrorModel"
  ) {
    // TODO: Handle 'err.payload.body' of type ResponseErrorModel
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The configuration identifier |
| <code>vendorId</code> | <code>string</code> | The vendor's identifier |
| <code>body</code> | <code>[GeoFenceConfigurationUpdateRequest](src/models/geo-fence-configuration-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[EtxAppConfiguration.UpdateConfigurationError](src/resources/etx-app-configuration.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EtxRegistration

> Source: [EtxRegistration](src/resources/etx-registration.ts)

<details>
<summary><code>getEtxClientCertificate(request: EtxRegistration.GetEtxClientCertificateRequest, options?: RequestOptions): ApiPromise&lt;ClientPersistenceResponse, EtxRegistration.GetEtxClientCertificateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With this API call the user can check the certificate of the device. At least one of the DeviceID, IMEI, ICCID or IMSI is required to make the call.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.etxRegistration.getEtxClientCertificate({ id, vendorId });
  // TODO: Handle 'response' of type ClientPersistenceResponse
} catch (err) {
  if (
    err instanceof EtxRegistration.GetEtxClientCertificateError && err.payload.kind === "etxRespondingError"
  ) {
    // TODO: Handle 'err.payload.body' of type EtxRespondingError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>[EtxClientIdLookup](src/models/etx-client-id-lookup.ts)</code> | One of the following IDs is required- DeviceID, IMEI, ICCID, IMSI. If more than one ID is provided, the API will return the certificate for the first ID found. The IDs are evaluated in the following order: DeviceID, IMEI, ICCID, IMSI. If the first provided ID is not found, the API will return an error. |
| <code>vendorId</code> | <code>string</code> | The VendorID set during the Vendor registration call. |
| <code>xTransactionId?</code> | <code>string</code> | Optional transaction identifier for tracing requests. If not provided, the application will generate one. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClientPersistenceResponse](src/models/client-persistence-response.ts)</code>

**OnError**: <code>[EtxRegistration.GetEtxClientCertificateError](src/resources/etx-registration.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEtxConnectionUrl(request: EtxRegistration.GetEtxConnectionUrlRequest, options?: RequestOptions): ApiPromise&lt;ConnectionResponse, EtxRegistration.GetEtxConnectionUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With this API call the device or software service requests the MQTT URL for the location that it needs to connect. To determine the proper URL the device or software service needs to provide its ID (the one that was provided in the registration request), location (GPS coordinates), and whether it is on the Verizon cellular network or not.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.etxRegistration.getEtxConnectionUrl({ vendorId, body });
  // TODO: Handle 'response' of type ConnectionResponse
} catch (err) {
  if (err instanceof EtxRegistration.GetEtxConnectionUrlError && err.payload.kind === "etxRespondingError") {
    // TODO: Handle 'err.payload.body' of type EtxRespondingError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | The VendorID set during the Vendor registration call. |
| <code>xTransactionId?</code> | <code>string</code> | Optional transaction identifier for tracing requests. If not provided, the application will generate one. |
| <code>body</code> | <code>[ConnectionRequest](src/models/connection-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionResponse](src/models/connection-response.ts)</code>

**OnError**: <code>[EtxRegistration.GetEtxConnectionUrlError](src/resources/etx-registration.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEtxConnectionUrlMultiMec(request: EtxRegistration.GetEtxConnectionUrlMultiMecRequest, options?: RequestOptions): ApiPromise&lt;ConnectionResponseV3, EtxRegistration.GetEtxConnectionUrlMultiMecError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With this API call the device or software service requests the MQTT URL for the location that it needs to connect. To determine the proper URL the device or software service needs to provide its ID (the one that was provided in the registration request), location (GPS coordinates), and whether it is on the Verizon cellular network or not.

If there are multiple MECs that serve the location of the client all options are provided in the response, and the client is free to choose which MEC they want to connect.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.etxRegistration.getEtxConnectionUrlMultiMec({ vendorId, body });
  // TODO: Handle 'response' of type ConnectionResponseV3
} catch (err) {
  if (
    err instanceof EtxRegistration.GetEtxConnectionUrlMultiMecError &&
      err.payload.kind === "etxRespondingError"
  ) {
    // TODO: Handle 'err.payload.body' of type EtxRespondingError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | The VendorID set during the Vendor registration call. |
| <code>xTransactionId?</code> | <code>string</code> | Optional transaction identifier for tracing requests. If not provided, the application will generate one. |
| <code>body</code> | <code>[ConnectionRequest](src/models/connection-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionResponseV3](src/models/connection-response-v3.ts)</code>

**OnError**: <code>[EtxRegistration.GetEtxConnectionUrlMultiMecError](src/resources/etx-registration.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryEtxDevices(request: EtxRegistration.QueryEtxDevicesRequest, options?: RequestOptions): ApiPromise&lt;DevicesResponse[], EtxRegistration.QueryEtxDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows retrieving devices by vendor ID and optional filters. The request should include the VendorID and any filters to apply.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.etxRegistration.queryEtxDevices({ body });
  // TODO: Handle 'response' of type DevicesResponse[]
} catch (err) {
  if (err instanceof EtxRegistration.QueryEtxDevicesError && err.payload.kind === "etxRespondingError") {
    // TODO: Handle 'err.payload.body' of type EtxRespondingError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xTransactionId?</code> | <code>string</code> | Optional transaction identifier for tracing requests. If not provided, the application will generate one. |
| <code>body</code> | <code>[DevicesRequest](src/models/devices-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DevicesResponse](src/models/devices-response.ts)[]</code>

**OnError**: <code>[EtxRegistration.QueryEtxDevicesError](src/resources/etx-registration.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>registerEtxClient(request: EtxRegistration.RegisterEtxClientRequest, options?: RequestOptions): ApiPromise&lt;ClientRegistrationResponse, EtxRegistration.RegisterEtxClientError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With this API call the user (client) registers its device or software service to the ETX system. Therefore, when a connection is initiated from the device or software service to the ETX system along with the credential provided by this registration call, then the connection will be authorized.

- The user can register multiple devices or software services, which can all be used at the same time.
- There rules set in the system that limit the type and subtype of the clients that are allowed to be registered under the VendorID. The rules are created based ont he agreement between the Vendor and Verizon.
- The user will only be able to register a limited number of devices or software services under the same VendorID. This registration limit is specified by the agreement between the Vendor and Verizon.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.etxRegistration.registerEtxClient({ body });
  // TODO: Handle 'response' of type ClientRegistrationResponse
} catch (err) {
  if (err instanceof EtxRegistration.RegisterEtxClientError && err.payload.kind === "etxRespondingError") {
    // TODO: Handle 'err.payload.body' of type EtxRespondingError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xTransactionId?</code> | <code>string</code> | Optional transaction identifier for tracing requests. If not provided, the application will generate one. |
| <code>body</code> | <code>[ClientRegistrationRequestV2](src/models/client-registration-request-v2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClientRegistrationResponse](src/models/client-registration-response.ts)</code>

**OnError**: <code>[EtxRegistration.RegisterEtxClientError](src/resources/etx-registration.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>renewEtxClientCertificate(request: EtxRegistration.RenewEtxClientCertificateRequest, options?: RequestOptions): ApiPromise&lt;ClientRegistrationResponse, EtxRegistration.RenewEtxClientCertificateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With this API call the user (client) can:
- renew the certificate of a device or software service in the ETX system if the original certificate has expired. If the client's certificate expired or going to expire within 30 days and new certificate will be issued. If the certificate expires more than 30 days, the current certificate will be returned to the client.
- complete its device or software service registration to the ETX system if the original registration request was not successful because of a pending certificate generation. Whenever the user receives a "client registration is pending" response (HTTP 202) from POST /clients/registration call. The client should initiate this PUT API call to finish the registration process and get the required certificate.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.etxRegistration.renewEtxClientCertificate({ deviceId, vendorId });
  // TODO: Handle 'response' of type ClientRegistrationResponse
} catch (err) {
  if (
    err instanceof EtxRegistration.RenewEtxClientCertificateError && err.payload.kind === "etxRespondingError"
  ) {
    // TODO: Handle 'err.payload.body' of type EtxRespondingError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deviceId</code> | <code>string</code> | - |
| <code>vendorId</code> | <code>string</code> | The VendorID set during the Vendor registration call. |
| <code>xTransactionId?</code> | <code>string</code> | Optional transaction identifier for tracing requests. If not provided, the application will generate one. |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClientRegistrationResponse](src/models/client-registration-response.ts)</code>

**OnError**: <code>[EtxRegistration.RenewEtxClientCertificateError](src/resources/etx-registration.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unregisterEtxClients(request: EtxRegistration.UnregisterEtxClientsRequest, options?: RequestOptions): ApiPromise&lt;undefined, EtxRegistration.UnregisterEtxClientsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With this API call the user (client) can unregister its devices and software services from the ETX system. The unregistered devices and services will no longer be able to use the ETX Message Exchange.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.etxRegistration.unregisterEtxClients({ deviceIDs, vendorId });
} catch (err) {
  if (err instanceof EtxRegistration.UnregisterEtxClientsError && err.payload.kind === "etxRespondingError") {
    // TODO: Handle 'err.payload.body' of type EtxRespondingError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deviceIDs</code> | <code>string[]</code> | The list of device IDs and software service IDs to be unregistered |
| <code>vendorId</code> | <code>string</code> | The VendorID set during the Vendor registration call. |
| <code>xTransactionId?</code> | <code>string</code> | Optional transaction identifier for tracing requests. If not provided, the application will generate one. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[EtxRegistration.UnregisterEtxClientsError](src/resources/etx-registration.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MapMessageController

> Source: [MapMessageController](src/resources/map-message-controller.ts)

<details>
<summary><code>deleteMapMessage(request: MapMessageController.DeleteMapMessageRequest, options?: RequestOptions): ApiPromise&lt;undefined, MapMessageController.DeleteMapMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a map message for the specified region and intersection ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.mapMessageController.deleteMapMessage({ regionId, i10Nid });
} catch (err) {
  if (err instanceof MapMessageController.DeleteMapMessageError && err.payload.kind === "mdmErrorResponse") {
    // TODO: Handle 'err.payload.body' of type MdmErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>regionId</code> | <code>string</code> | Region ID to filter the map messages. |
| <code>i10Nid</code> | <code>string</code> | Intersection ID to filter the map messages. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[MapMessageController.DeleteMapMessageError](src/resources/map-message-controller.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadMapMessages(request: MapMessageController.DownloadMapMessagesRequest, options?: RequestOptions): ApiPromise&lt;string, MapMessageController.DownloadMapMessagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint is deprecated. (Use /api/v2/mapdata/query for new integrations).

This endpoint allows user to download SAE J2735 or ETSI MAP messages in ASN.1 UPER base64 encoded format. The area for the MAP messages is needed to be defined in the query.


**Required request header:** `Accept` — specifies the response format. Omitting this header will result in a `400 Bad Request`. Supported values:
- `text/plain` — ASN.1 UPER base64-encoded MAP messages (one per line)
- `application/json` — JSON-encoded MAP messages

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.mapMessageController.downloadMapMessages({ geofence, vendorId });
  // TODO: Handle 'response' of type string
} catch (err) {
  if (
    err instanceof MapMessageController.DownloadMapMessagesError && err.payload.kind === "mdmErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type MdmErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>geofence</code> | <code>[GeofencePolygon](src/models/geofence-polygon.ts)</code> | GeoJSON Polygon defining the area to retrieve MAP messages for. |
| <code>vendorId</code> | <code>string</code> | The VendorID set during the Vendor registration call. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[MapMessageController.DownloadMapMessagesError](src/resources/map-message-controller.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>ingestMapMessages(request: MapMessageController.IngestMapMessagesRequest, options?: RequestOptions): ApiPromise&lt;string, MapMessageController.IngestMapMessagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows the user to upload map messages in ASN.1 UPER base64 encoded format or JER (JSON) formats. The MAP data message can have more than one intersections in it.
Both SAE and ETSI defined MAP messages are supported. The SAE type MAP messages have to be wrapped in a MessageFrame, as defined in the SAE J2735 standard.
The ETSI type MAP messages are expected as MAPEM structures that include the ETSI header, as defined in the ETSI TS 103 301 standard.
Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.


**Required request header:** `Content-Type` — specifies the format of the request body. Omitting or sending an unsupported value will result in a `415 Unsupported Media Type`. Supported values:
- `text/plain` — ASN.1 UPER base64-encoded MAP message
- `application/json` — JSON representation of the MAP message

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.mapMessageController.ingestMapMessages({ vendorId, body });
  // TODO: Handle 'response' of type string
} catch (err) {
  if (err instanceof MapMessageController.IngestMapMessagesError && err.payload.kind === "mdmErrorResponse") {
    // TODO: Handle 'err.payload.body' of type MdmErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | The VendorID set during the Vendor registration call. |
| <code>mapDataMessageStandard?</code> | <code>[EtxMessageStandardEnum](src/models/etx-message-standard-enum.ts)</code> | Select which V2X messaging standard will be used for the message generation. The following options are supported:<br>- "etsi": The message will be generated using the ETSI (European) standard (e.g. MAPEM).<br>- "sae": The message will be generated using the SAE J2735 (North American) standard (e.g. MAP).<br>- if not sent while POST, defaults to "sae" |
| <code>body</code> | <code>[EtxMapDataIngestRequest](src/models/etx-map-data-ingest-request.ts)</code> | UPER/ASN.1 J2735/ETSI base64 encoded MapData message or JSON representation of the MapData message. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[MapMessageController.IngestMapMessagesError](src/resources/map-message-controller.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryMapMessages(request: MapMessageController.QueryMapMessagesRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;[], MapMessageController.QueryMapMessagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows users to download SAE J2735 or ETSI MAP messages as a JSON list. 
Depending on the expectedType parameter, the response contains either ASN.1 UPER base64-encoded messages with their respective region and intersection IDs, or fully decoded JSON messages. 
The area for MAP message retrieval must be defined in the request body using one of two methods: 
An array of region and intersection ID pairs, or a GeoJSON geofence specification.


</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.mapMessageController.queryMapMessages({ vendorId, body });
  // TODO: Handle 'response' of type Record<string, unknown>[]
} catch (err) {
  if (err instanceof MapMessageController.QueryMapMessagesError && err.payload.kind === "mdmErrorResponse") {
    // TODO: Handle 'err.payload.body' of type MdmErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | The VendorID set during the Vendor registration call. |
| <code>body</code> | <code>[MapDataQueryRequest](src/models/unions/map-data-query-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;[]</code>

**OnError**: <code>[MapMessageController.QueryMapMessagesError](src/resources/map-message-controller.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RetrieveRatePlanList

> Source: [RetrieveRatePlanList](src/resources/retrieve-rate-plan-list.ts)

<details>
<summary><code>getRatePlanList(request: RetrieveRatePlanList.GetRatePlanListRequest, options?: RequestOptions): ApiPromise&lt;Rateplan, RetrieveRatePlanList.GetRatePlanListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the rate plans and rate plan details for a profile ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.retrieveRatePlanList.getRatePlanList({ ecpdId });
  // TODO: Handle 'response' of type Rateplan
} catch (err) {
  if (
    err instanceof RetrieveRatePlanList.GetRatePlanListError && err.payload.kind === "ruleRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type RuleRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ecpdId</code> | <code>string</code> | The Enterprise Customer Profile Database ID. This is the same as the accountName value |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Rateplan](src/models/rateplan.ts)</code>

**OnError**: <code>[RetrieveRatePlanList.GetRatePlanListError](src/resources/retrieve-rate-plan-list.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CreatePricePlanTriggers

> Source: [CreatePricePlanTriggers](src/resources/create-price-plan-triggers.ts)

<details>
<summary><code>createTriggerRules(request: CreatePricePlanTriggers.CreateTriggerRulesRequest, options?: RequestOptions): ApiPromise&lt;TriggerResponse, CreatePricePlanTriggers.CreateTriggerRulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a usage trigger at the account level, device level or a price plan trigger for all devices on the account

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.createPricePlanTriggers.createTriggerRules({ body });
  // TODO: Handle 'response' of type TriggerResponse
} catch (err) {
  if (
    err instanceof CreatePricePlanTriggers.CreateTriggerRulesError &&
      err.payload.kind === "ruleRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type RuleRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V2TriggersRequest](src/models/unions/v2-triggers-request.ts)</code> | Create a trigger |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TriggerResponse](src/models/trigger-response.ts)</code>

**OnError**: <code>[CreatePricePlanTriggers.CreateTriggerRulesError](src/resources/create-price-plan-triggers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UpdatePricePlanTriggers

> Source: [UpdatePricePlanTriggers](src/resources/update-price-plan-triggers.ts)

<details>
<summary><code>updateTriggerRules(request: UpdatePricePlanTriggers.UpdateTriggerRulesRequest, options?: RequestOptions): ApiPromise&lt;TriggerResponse, UpdatePricePlanTriggers.UpdateTriggerRulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a usage trigger at the account level, device level or a price plan trigger for all devices on the account

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.updatePricePlanTriggers.updateTriggerRules({ body });
  // TODO: Handle 'response' of type TriggerResponse
} catch (err) {
  if (
    err instanceof UpdatePricePlanTriggers.UpdateTriggerRulesError &&
      err.payload.kind === "ruleRestErrorResponse"
  ) {
    // TODO: Handle 'err.payload.body' of type RuleRestErrorResponse
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V2TriggersRequest1](src/models/unions/v2-triggers-request1.ts)</code> | Update a trigger |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TriggerResponse](src/models/trigger-response.ts)</code>

**OnError**: <code>[UpdatePricePlanTriggers.UpdateTriggerRulesError](src/resources/update-price-plan-triggers.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GbiDeviceActions5

> Source: [GbiDeviceActions5](src/resources/gbi-device-actions5.ts)

<details>
<summary><code>businessInternetServiceplanchange(request: GbiDeviceActions5.BusinessInternetServiceplanchangeRequest, options?: RequestOptions): ApiPromise&lt;GbiRequestResponse5, GbiDeviceActions5.BusinessInternetServiceplanchangeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change a device's service plan to use 5G BI.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.gbiDeviceActions5.businessInternetServiceplanchange({ body });
  // TODO: Handle 'response' of type GbiRequestResponse5
} catch (err) {
  if (
    err instanceof GbiDeviceActions5.BusinessInternetServiceplanchangeError &&
      err.payload.kind === "gbiRestErrorResponse5"
  ) {
    // TODO: Handle 'err.payload.body' of type GbiRestErrorResponse5
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GbichangeRequest5](src/models/gbichange-request5.ts)</code> | This endpoint is for use when changing a device's service plan to a 5G BI service plan. The service plan can change for an active device up to four times per month but will require address validation for each change. The service plan cannot be changed for a device while its service is suspended. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GbiRequestResponse5](src/models/gbi-request-response5.ts)</code>

**OnError**: <code>[GbiDeviceActions5.BusinessInternetServiceplanchangeError](src/resources/gbi-device-actions5.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>businessInternetactivateUsingPost(request: GbiDeviceActions5.BusinessInternetactivateUsingPostRequest, options?: RequestOptions): ApiPromise&lt;GbiRequestResponse5, GbiDeviceActions5.BusinessInternetactivateUsingPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uses the device's ICCID and IMEI to activate service.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.gbiDeviceActions5.businessInternetactivateUsingPost({ body });
  // TODO: Handle 'response' of type GbiRequestResponse5
} catch (err) {
  if (
    err instanceof GbiDeviceActions5.BusinessInternetactivateUsingPostError &&
      err.payload.kind === "gbiRestErrorResponse5"
  ) {
    // TODO: Handle 'err.payload.body' of type GbiRestErrorResponse5
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GbiactivateRequest5](src/models/gbiactivate-request5.ts)</code> | Activate 5G BI service. Defining <code>publicIpRestriction</code> as "Unrestricted" or "Restricted" is required for activating as Public Static. Leave  <code>publicIpRestriction</code> undefined to activate as Public Dynamic. Removing <code>publicIpRestriction</code> from the request will activate as Mobile Private Network (MPN). |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GbiRequestResponse5](src/models/gbi-request-response5.ts)</code>

**OnError**: <code>[GbiDeviceActions5.BusinessInternetactivateUsingPostError](src/resources/gbi-device-actions5.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>businessInternetlistDeviceInformation(request: GbiDeviceActions5.BusinessInternetlistDeviceInformationRequest, options?: RequestOptions): ApiPromise&lt;GbideviceDetailsresponse5, GbiDeviceActions5.BusinessInternetlistDeviceInformationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uses the decive's Integrated Circuit Card Identification Number (ICCID) to retrive and display the device's properties.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.gbiDeviceActions5.businessInternetlistDeviceInformation({ body });
  // TODO: Handle 'response' of type GbideviceDetailsresponse5
} catch (err) {
  if (
    err instanceof GbiDeviceActions5.BusinessInternetlistDeviceInformationError &&
      err.payload.kind === "gbiRestErrorResponse5"
  ) {
    // TODO: Handle 'err.payload.body' of type GbiRestErrorResponse5
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GbideviceId5](src/models/gbidevice-id5.ts)</code> | Device Profile Query |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GbideviceDetailsresponse5](src/models/gbidevice-detailsresponse5.ts)</code>

**OnError**: <code>[GbiDeviceActions5.BusinessInternetlistDeviceInformationError](src/resources/gbi-device-actions5.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SensorInsightsSensors

> Source: [SensorInsightsSensors](src/resources/sensor-insights-sensors.ts)

<details>
<summary><code>sensorInsightsListSensorDevicesRequest(request: SensorInsightsSensors.SensorInsightsListSensorDevicesRequestRequest, options?: RequestOptions): ApiPromise&lt;ResourceDevice[], SensorInsightsSensors.SensorInsightsListSensorDevicesRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsSensors.sensorInsightsListSensorDevicesRequest({ body });
  // TODO: Handle 'response' of type ResourceDevice[]
} catch (err) {
  if (
    err instanceof SensorInsightsSensors.SensorInsightsListSensorDevicesRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoListSensorDevicesRequest](src/models/dto-list-sensor-devices-request.ts)</code> | List details of the sensors |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResourceDevice](src/models/resource-device.ts)[]</code>

**OnError**: <code>[SensorInsightsSensors.SensorInsightsListSensorDevicesRequestError](src/resources/sensor-insights-sensors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsOffBoardSensorRequest(request: SensorInsightsSensors.SensorInsightsOffBoardSensorRequestRequest, options?: RequestOptions): ApiPromise&lt;undefined, SensorInsightsSensors.SensorInsightsOffBoardSensorRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  await client.sensorInsightsSensors.sensorInsightsOffBoardSensorRequest({ body });
} catch (err) {
  if (
    err instanceof SensorInsightsSensors.SensorInsightsOffBoardSensorRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoOffBoardSensorRequest](src/models/dto-off-board-sensor-request.ts)</code> | Offboard a sensor |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[SensorInsightsSensors.SensorInsightsOffBoardSensorRequestError](src/resources/sensor-insights-sensors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsOnBoardSensorRequest(request: SensorInsightsSensors.SensorInsightsOnBoardSensorRequestRequest, options?: RequestOptions): ApiPromise&lt;undefined, SensorInsightsSensors.SensorInsightsOnBoardSensorRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  await client.sensorInsightsSensors.sensorInsightsOnBoardSensorRequest({ body });
} catch (err) {
  if (
    err instanceof SensorInsightsSensors.SensorInsightsOnBoardSensorRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoOnBoardSensorRequest](src/models/dto-on-board-sensor-request.ts)</code> | Onboarding a sensor |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[SensorInsightsSensors.SensorInsightsOnBoardSensorRequestError](src/resources/sensor-insights-sensors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsSensorOffBoardingStatusRequest(request: SensorInsightsSensors.SensorInsightsSensorOffBoardingStatusRequestRequest, options?: RequestOptions): ApiPromise&lt;DtoSensorOffBoardingStatusResponse, SensorInsightsSensors.SensorInsightsSensorOffBoardingStatusRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsSensors.sensorInsightsSensorOffBoardingStatusRequest({ body });
  // TODO: Handle 'response' of type DtoSensorOffBoardingStatusResponse
} catch (err) {
  if (
    err instanceof SensorInsightsSensors.SensorInsightsSensorOffBoardingStatusRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoSensorOffBoardStatusRequest](src/models/dto-sensor-off-board-status-request.ts)</code> | Get a sensor's offboarding status |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DtoSensorOffBoardingStatusResponse](src/models/dto-sensor-off-boarding-status-response.ts)</code>

**OnError**: <code>[SensorInsightsSensors.SensorInsightsSensorOffBoardingStatusRequestError](src/resources/sensor-insights-sensors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsSensorOnBoardStatusRequest(request: SensorInsightsSensors.SensorInsightsSensorOnBoardStatusRequestRequest, options?: RequestOptions): ApiPromise&lt;DtoSensorOnBoardingStatusResponse, SensorInsightsSensors.SensorInsightsSensorOnBoardStatusRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsSensors.sensorInsightsSensorOnBoardStatusRequest({ body });
  // TODO: Handle 'response' of type DtoSensorOnBoardingStatusResponse
} catch (err) {
  if (
    err instanceof SensorInsightsSensors.SensorInsightsSensorOnBoardStatusRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoSensorOnBoardStatusRequest](src/models/dto-sensor-on-board-status-request.ts)</code> | Get the sensor's onboarding status |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DtoSensorOnBoardingStatusResponse](src/models/dto-sensor-on-boarding-status-response.ts)</code>

**OnError**: <code>[SensorInsightsSensors.SensorInsightsSensorOnBoardStatusRequestError](src/resources/sensor-insights-sensors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SensorInsightsDevices

> Source: [SensorInsightsDevices](src/resources/sensor-insights-devices.ts)

<details>
<summary><code>sensorInsightsDeviceActionSetRequest(request: SensorInsightsDevices.SensorInsightsDeviceActionSetRequestRequest, options?: RequestOptions): ApiPromise&lt;DtoDeviceActionSetResponse, SensorInsightsDevices.SensorInsightsDeviceActionSetRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDevices.sensorInsightsDeviceActionSetRequest({ body });
  // TODO: Handle 'response' of type DtoDeviceActionSetResponse
} catch (err) {
  if (
    err instanceof SensorInsightsDevices.SensorInsightsDeviceActionSetRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DmV1DevicesActionsSetRequest](src/models/unions/dm-v1-devices-actions-set-request.ts)</code> | Set device configuration |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DtoDeviceActionSetResponse](src/models/dto-device-action-set-response.ts)</code>

**OnError**: <code>[SensorInsightsDevices.SensorInsightsDeviceActionSetRequestError](src/resources/sensor-insights-devices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsLastReportedTimeRequest(request: SensorInsightsDevices.SensorInsightsLastReportedTimeRequestRequest, options?: RequestOptions): ApiPromise&lt;DtoLastReportedTimeResponse, SensorInsightsDevices.SensorInsightsLastReportedTimeRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDevices.sensorInsightsLastReportedTimeRequest({ body });
  // TODO: Handle 'response' of type DtoLastReportedTimeResponse
} catch (err) {
  if (
    err instanceof SensorInsightsDevices.SensorInsightsLastReportedTimeRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoLastReportedTimeRequest](src/models/dto-last-reported-time-request.ts)</code> | Get the last reported information for a device |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DtoLastReportedTimeResponse](src/models/dto-last-reported-time-response.ts)</code>

**OnError**: <code>[SensorInsightsDevices.SensorInsightsLastReportedTimeRequestError](src/resources/sensor-insights-devices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsListDeviceExperienceHistoryRequest(request: SensorInsightsDevices.SensorInsightsListDeviceExperienceHistoryRequestRequest, options?: RequestOptions): ApiPromise&lt;UserDeviceExperienceHistory[], SensorInsightsDevices.SensorInsightsListDeviceExperienceHistoryRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDevices.sensorInsightsListDeviceExperienceHistoryRequest({
    body,
  });
  // TODO: Handle 'response' of type UserDeviceExperienceHistory[]
} catch (err) {
  if (
    err instanceof SensorInsightsDevices.SensorInsightsListDeviceExperienceHistoryRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoListDeviceExperienceHistoryRequest](src/models/dto-list-device-experience-history-request.ts)</code> | List the device experience |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserDeviceExperienceHistory](src/models/user-device-experience-history.ts)[]</code>

**OnError**: <code>[SensorInsightsDevices.SensorInsightsListDeviceExperienceHistoryRequestError](src/resources/sensor-insights-devices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsListDevicesRequest(request: SensorInsightsDevices.SensorInsightsListDevicesRequestRequest, options?: RequestOptions): ApiPromise&lt;DtoExpandedDeviceResponse[], SensorInsightsDevices.SensorInsightsListDevicesRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDevices.sensorInsightsListDevicesRequest({ body });
  // TODO: Handle 'response' of type DtoExpandedDeviceResponse[]
} catch (err) {
  if (
    err instanceof SensorInsightsDevices.SensorInsightsListDevicesRequestError &&
      err.payload.kind === "managementError"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoListDevicesRequest](src/models/dto-list-devices-request.ts)</code> | List all device details on an account |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DtoExpandedDeviceResponse](src/models/dto-expanded-device-response.ts)[]</code>

**OnError**: <code>[SensorInsightsDevices.SensorInsightsListDevicesRequestError](src/resources/sensor-insights-devices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsListNetworkExperienceHistoryRequest(request: SensorInsightsDevices.SensorInsightsListNetworkExperienceHistoryRequestRequest, options?: RequestOptions): ApiPromise&lt;UserNetworkExperienceHistory[], SensorInsightsDevices.SensorInsightsListNetworkExperienceHistoryRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDevices.sensorInsightsListNetworkExperienceHistoryRequest({
    body,
  });
  // TODO: Handle 'response' of type UserNetworkExperienceHistory[]
} catch (err) {
  if (
    err instanceof SensorInsightsDevices.SensorInsightsListNetworkExperienceHistoryRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoListNetworkExperienceHistoryRequest](src/models/dto-list-network-experience-history-request.ts)</code> | List the network experience |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserNetworkExperienceHistory](src/models/user-network-experience-history.ts)[]</code>

**OnError**: <code>[SensorInsightsDevices.SensorInsightsListNetworkExperienceHistoryRequestError](src/resources/sensor-insights-devices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsPatchDeviceRequest(request: SensorInsightsDevices.SensorInsightsPatchDeviceRequestRequest, options?: RequestOptions): ApiPromise&lt;ResourceDevice, SensorInsightsDevices.SensorInsightsPatchDeviceRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDevices.sensorInsightsPatchDeviceRequest({ body });
  // TODO: Handle 'response' of type ResourceDevice
} catch (err) {
  if (
    err instanceof SensorInsightsDevices.SensorInsightsPatchDeviceRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoPatchDeviceRequest](src/models/dto-patch-device-request.ts)</code> | Partially update a device's details |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResourceDevice](src/models/resource-device.ts)</code>

**OnError**: <code>[SensorInsightsDevices.SensorInsightsPatchDeviceRequestError](src/resources/sensor-insights-devices.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SensorInsightsGateways

> Source: [SensorInsightsGateways](src/resources/sensor-insights-gateways.ts)

<details>
<summary><code>sensorInsightsListGatewayDevicesRequest(request: SensorInsightsGateways.SensorInsightsListGatewayDevicesRequestRequest, options?: RequestOptions): ApiPromise&lt;ResourceDevice[], SensorInsightsGateways.SensorInsightsListGatewayDevicesRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsGateways.sensorInsightsListGatewayDevicesRequest({ body });
  // TODO: Handle 'response' of type ResourceDevice[]
} catch (err) {
  if (
    err instanceof SensorInsightsGateways.SensorInsightsListGatewayDevicesRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoListDevicesRequest](src/models/dto-list-devices-request.ts)</code> | Get gateway information |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResourceDevice](src/models/resource-device.ts)[]</code>

**OnError**: <code>[SensorInsightsGateways.SensorInsightsListGatewayDevicesRequestError](src/resources/sensor-insights-gateways.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SensorInsightsSmartAlerts

> Source: [SensorInsightsSmartAlerts](src/resources/sensor-insights-smart-alerts.ts)

<details>
<summary><code>sensorInsightsBulkUpdate(request: SensorInsightsSmartAlerts.SensorInsightsBulkUpdateRequest, options?: RequestOptions): ApiPromise&lt;UserSmartAlert, SensorInsightsSmartAlerts.SensorInsightsBulkUpdateError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsSmartAlerts.sensorInsightsBulkUpdate({ body });
  // TODO: Handle 'response' of type UserSmartAlert
} catch (err) {
  if (
    err instanceof SensorInsightsSmartAlerts.SensorInsightsBulkUpdateError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoBulkUpdate](src/models/dto-bulk-update.ts)</code> | Bulk update smart alerts |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserSmartAlert](src/models/user-smart-alert.ts)</code>

**OnError**: <code>[SensorInsightsSmartAlerts.SensorInsightsBulkUpdateError](src/resources/sensor-insights-smart-alerts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsListSmartAlertsRequest(request: SensorInsightsSmartAlerts.SensorInsightsListSmartAlertsRequestRequest, options?: RequestOptions): ApiPromise&lt;UserSmartAlert[], SensorInsightsSmartAlerts.SensorInsightsListSmartAlertsRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsSmartAlerts.sensorInsightsListSmartAlertsRequest({ body });
  // TODO: Handle 'response' of type UserSmartAlert[]
} catch (err) {
  if (
    err instanceof SensorInsightsSmartAlerts.SensorInsightsListSmartAlertsRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoListSmartAlertsRequest](src/models/dto-list-smart-alerts-request.ts)</code> | Retrieve a smart alert |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserSmartAlert](src/models/user-smart-alert.ts)[]</code>

**OnError**: <code>[SensorInsightsSmartAlerts.SensorInsightsListSmartAlertsRequestError](src/resources/sensor-insights-smart-alerts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsPatchSmartAlertRequest(request: SensorInsightsSmartAlerts.SensorInsightsPatchSmartAlertRequestRequest, options?: RequestOptions): ApiPromise&lt;UserSmartAlert, SensorInsightsSmartAlerts.SensorInsightsPatchSmartAlertRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsSmartAlerts.sensorInsightsPatchSmartAlertRequest({ body });
  // TODO: Handle 'response' of type UserSmartAlert
} catch (err) {
  if (
    err instanceof SensorInsightsSmartAlerts.SensorInsightsPatchSmartAlertRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoPatchSmartAlertRequest](src/models/dto-patch-smart-alert-request.ts)</code> | Partially update a smart alert |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserSmartAlert](src/models/user-smart-alert.ts)</code>

**OnError**: <code>[SensorInsightsSmartAlerts.SensorInsightsPatchSmartAlertRequestError](src/resources/sensor-insights-smart-alerts.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SensorInsightsRules

> Source: [SensorInsightsRules](src/resources/sensor-insights-rules.ts)

<details>
<summary><code>sensorInsightsListRulesRequest(request: SensorInsightsRules.SensorInsightsListRulesRequestRequest, options?: RequestOptions): ApiPromise&lt;ResourceRule[], SensorInsightsRules.SensorInsightsListRulesRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsRules.sensorInsightsListRulesRequest({ body });
  // TODO: Handle 'response' of type ResourceRule[]
} catch (err) {
  if (
    err instanceof SensorInsightsRules.SensorInsightsListRulesRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoListRulesRequest](src/models/dto-list-rules-request.ts)</code> | Retrieve a rule |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResourceRule](src/models/resource-rule.ts)[]</code>

**OnError**: <code>[SensorInsightsRules.SensorInsightsListRulesRequestError](src/resources/sensor-insights-rules.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsOverwriteRuleRequest(request: SensorInsightsRules.SensorInsightsOverwriteRuleRequestRequest, options?: RequestOptions): ApiPromise&lt;ResourceRule, SensorInsightsRules.SensorInsightsOverwriteRuleRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsRules.sensorInsightsOverwriteRuleRequest({ body });
  // TODO: Handle 'response' of type ResourceRule
} catch (err) {
  if (
    err instanceof SensorInsightsRules.SensorInsightsOverwriteRuleRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoOverwriteRuleRequest](src/models/dto-overwrite-rule-request.ts)</code> | Overwrite a rule |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResourceRule](src/models/resource-rule.ts)</code>

**OnError**: <code>[SensorInsightsRules.SensorInsightsOverwriteRuleRequestError](src/resources/sensor-insights-rules.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SensorInsightsHealthScore

> Source: [SensorInsightsHealthScore](src/resources/sensor-insights-health-score.ts)

<details>
<summary><code>sensorInsightsGetNetworkHealthScoreResponse(options?: RequestOptions): ApiPromise&lt;DtoGetNetworkHealthScoreResponse, SensorInsightsHealthScore.SensorInsightsGetNetworkHealthScoreResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsHealthScore.sensorInsightsGetNetworkHealthScoreResponse();
  // TODO: Handle 'response' of type DtoGetNetworkHealthScoreResponse
} catch (err) {
  if (
    err instanceof SensorInsightsHealthScore.SensorInsightsGetNetworkHealthScoreResponseError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DtoGetNetworkHealthScoreResponse](src/models/dto-get-network-health-score-response.ts)</code>

**OnError**: <code>[SensorInsightsHealthScore.SensorInsightsGetNetworkHealthScoreResponseError](src/resources/sensor-insights-health-score.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsHealthScoreSummary(options?: RequestOptions): ApiPromise&lt;DtoHealthScoreSummary, SensorInsightsHealthScore.SensorInsightsHealthScoreSummaryError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsHealthScore.sensorInsightsHealthScoreSummary();
  // TODO: Handle 'response' of type DtoHealthScoreSummary
} catch (err) {
  if (
    err instanceof SensorInsightsHealthScore.SensorInsightsHealthScoreSummaryError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DtoHealthScoreSummary](src/models/dto-health-score-summary.ts)</code>

**OnError**: <code>[SensorInsightsHealthScore.SensorInsightsHealthScoreSummaryError](src/resources/sensor-insights-health-score.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SensorInsightsNotificationGroups

> Source: [SensorInsightsNotificationGroups](src/resources/sensor-insights-notification-groups.ts)

<details>
<summary><code>sensorInsightsAddUsersToNotificationGroupRequest(request: SensorInsightsNotificationGroups.SensorInsightsAddUsersToNotificationGroupRequestRequest, options?: RequestOptions): ApiPromise&lt;undefined, SensorInsightsNotificationGroups.SensorInsightsAddUsersToNotificationGroupRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  await client.sensorInsightsNotificationGroups.sensorInsightsAddUsersToNotificationGroupRequest({ body });
} catch (err) {
  if (
    err instanceof SensorInsightsNotificationGroups.SensorInsightsAddUsersToNotificationGroupRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoAddUsersToNotificationGroupRequest](src/models/dto-add-users-to-notification-group-request.ts)</code> | Add users to a notification group |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[SensorInsightsNotificationGroups.SensorInsightsAddUsersToNotificationGroupRequestError](src/resources/sensor-insights-notification-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsCreateNotificationGroupRequest(request: SensorInsightsNotificationGroups.SensorInsightsCreateNotificationGroupRequestRequest, options?: RequestOptions): ApiPromise&lt;DtoNotificationGroupResponseEntity, SensorInsightsNotificationGroups.SensorInsightsCreateNotificationGroupRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsNotificationGroups.sensorInsightsCreateNotificationGroupRequest(
    { body },
  );
  // TODO: Handle 'response' of type DtoNotificationGroupResponseEntity
} catch (err) {
  if (
    err instanceof SensorInsightsNotificationGroups.SensorInsightsCreateNotificationGroupRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoCreateNotificationGroupRequest](src/models/dto-create-notification-group-request.ts)</code> | Create a notification group |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DtoNotificationGroupResponseEntity](src/models/dto-notification-group-response-entity.ts)</code>

**OnError**: <code>[SensorInsightsNotificationGroups.SensorInsightsCreateNotificationGroupRequestError](src/resources/sensor-insights-notification-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsDeleteNotificationGroup(request: SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  await client.sensorInsightsNotificationGroups.sensorInsightsDeleteNotificationGroup({ payload });
} catch (err) {
  if (
    err instanceof SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>payload</code> | <code>[DtoDeleteNotificationGroupRequest](src/models/dto-delete-notification-group-request.ts)</code> | Payload for the delete request. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupError](src/resources/sensor-insights-notification-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsListNotificationGroupRequest(request: SensorInsightsNotificationGroups.SensorInsightsListNotificationGroupRequestRequest, options?: RequestOptions): ApiPromise&lt;DtoNotificationGroupResponseEntity[], SensorInsightsNotificationGroups.SensorInsightsListNotificationGroupRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsNotificationGroups.sensorInsightsListNotificationGroupRequest({
    body,
  });
  // TODO: Handle 'response' of type DtoNotificationGroupResponseEntity[]
} catch (err) {
  if (
    err instanceof SensorInsightsNotificationGroups.SensorInsightsListNotificationGroupRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoListNotificationGroupRequest](src/models/dto-list-notification-group-request.ts)</code> | Retrieve a notification group |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DtoNotificationGroupResponseEntity](src/models/dto-notification-group-response-entity.ts)[]</code>

**OnError**: <code>[SensorInsightsNotificationGroups.SensorInsightsListNotificationGroupRequestError](src/resources/sensor-insights-notification-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsRemoveUsersFromNotificationGroupRequest(request: SensorInsightsNotificationGroups.SensorInsightsRemoveUsersFromNotificationGroupRequestRequest, options?: RequestOptions): ApiPromise&lt;undefined, SensorInsightsNotificationGroups.SensorInsightsRemoveUsersFromNotificationGroupRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  await client.sensorInsightsNotificationGroups.sensorInsightsRemoveUsersFromNotificationGroupRequest({
    body,
  });
} catch (err) {
  if (
    err instanceof
      SensorInsightsNotificationGroups.SensorInsightsRemoveUsersFromNotificationGroupRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoRemoveUsersFromNotificationGroupRequest](src/models/dto-remove-users-from-notification-group-request.ts)</code> | Remove users from a notification group |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[SensorInsightsNotificationGroups.SensorInsightsRemoveUsersFromNotificationGroupRequestError](src/resources/sensor-insights-notification-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsUpdateNotificationGroupRequest(request: SensorInsightsNotificationGroups.SensorInsightsUpdateNotificationGroupRequestRequest, options?: RequestOptions): ApiPromise&lt;DtoNotificationGroupResponseEntity, SensorInsightsNotificationGroups.SensorInsightsUpdateNotificationGroupRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsNotificationGroups.sensorInsightsUpdateNotificationGroupRequest(
    { body },
  );
  // TODO: Handle 'response' of type DtoNotificationGroupResponseEntity
} catch (err) {
  if (
    err instanceof SensorInsightsNotificationGroups.SensorInsightsUpdateNotificationGroupRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoUpdateNotificationGroupRequest](src/models/dto-update-notification-group-request.ts)</code> | Partially update a notification group |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DtoNotificationGroupResponseEntity](src/models/dto-notification-group-response-entity.ts)</code>

**OnError**: <code>[SensorInsightsNotificationGroups.SensorInsightsUpdateNotificationGroupRequestError](src/resources/sensor-insights-notification-groups.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SensorInsightsUsers

> Source: [SensorInsightsUsers](src/resources/sensor-insights-users.ts)

<details>
<summary><code>sensorInsightsCreateUserRequest(request: SensorInsightsUsers.SensorInsightsCreateUserRequestRequest, options?: RequestOptions): ApiPromise&lt;ResourceUser, SensorInsightsUsers.SensorInsightsCreateUserRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsUsers.sensorInsightsCreateUserRequest({ body });
  // TODO: Handle 'response' of type ResourceUser
} catch (err) {
  if (
    err instanceof SensorInsightsUsers.SensorInsightsCreateUserRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoCreateUserRequest](src/models/dto-create-user-request.ts)</code> | Create a user profile |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResourceUser](src/models/resource-user.ts)</code>

**OnError**: <code>[SensorInsightsUsers.SensorInsightsCreateUserRequestError](src/resources/sensor-insights-users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsDeleteUser(request: SensorInsightsUsers.SensorInsightsDeleteUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, SensorInsightsUsers.SensorInsightsDeleteUserError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  await client.sensorInsightsUsers.sensorInsightsDeleteUser({ deleterequestpayload });
} catch (err) {
  if (
    err instanceof SensorInsightsUsers.SensorInsightsDeleteUserError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deleterequestpayload</code> | <code>[DtoDeleteUserRequest](src/models/dto-delete-user-request.ts)</code> | Payload for the delete user request. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[SensorInsightsUsers.SensorInsightsDeleteUserError](src/resources/sensor-insights-users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsListUserRequest(request: SensorInsightsUsers.SensorInsightsListUserRequestRequest, options?: RequestOptions): ApiPromise&lt;ResourceUser[], SensorInsightsUsers.SensorInsightsListUserRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsUsers.sensorInsightsListUserRequest({ body });
  // TODO: Handle 'response' of type ResourceUser[]
} catch (err) {
  if (
    err instanceof SensorInsightsUsers.SensorInsightsListUserRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoListUserRequest](src/models/dto-list-user-request.ts)</code> | A summary of user profile records on an account |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResourceUser](src/models/resource-user.ts)[]</code>

**OnError**: <code>[SensorInsightsUsers.SensorInsightsListUserRequestError](src/resources/sensor-insights-users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsUpdateUserRequest(request: SensorInsightsUsers.SensorInsightsUpdateUserRequestRequest, options?: RequestOptions): ApiPromise&lt;ResourceUser, SensorInsightsUsers.SensorInsightsUpdateUserRequestError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsUsers.sensorInsightsUpdateUserRequest({ body });
  // TODO: Handle 'response' of type ResourceUser
} catch (err) {
  if (
    err instanceof SensorInsightsUsers.SensorInsightsUpdateUserRequestError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoUpdateUserRequest](src/models/dto-update-user-request.ts)</code> | Partially update a user profile |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResourceUser](src/models/resource-user.ts)</code>

**OnError**: <code>[SensorInsightsUsers.SensorInsightsUpdateUserRequestError](src/resources/sensor-insights-users.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SensorInsightsDeviceProfile

> Source: [SensorInsightsDeviceProfile](src/resources/sensor-insights-device-profile.ts)

<details>
<summary><code>createAProfile(request: SensorInsightsDeviceProfile.CreateAProfileRequest, options?: RequestOptions): ApiPromise&lt;DtoProfileResponse[], SensorInsightsDeviceProfile.CreateAProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a device profile

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDeviceProfile.createAProfile({ body });
  // TODO: Handle 'response' of type DtoProfileResponse[]
} catch (err) {
  if (
    err instanceof SensorInsightsDeviceProfile.CreateAProfileError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoConfigurationProfile](src/models/dto-configuration-profile.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DtoProfileResponse](src/models/dto-profile-response.ts)[]</code>

**OnError**: <code>[SensorInsightsDeviceProfile.CreateAProfileError](src/resources/sensor-insights-device-profile.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAProfile(request: SensorInsightsDeviceProfile.DeleteAProfileRequest, options?: RequestOptions): ApiPromise&lt;DtoProfileResponse[], SensorInsightsDeviceProfile.DeleteAProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a device profile

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDeviceProfile.deleteAProfile({ deleterequest });
  // TODO: Handle 'response' of type DtoProfileResponse[]
} catch (err) {
  if (
    err instanceof SensorInsightsDeviceProfile.DeleteAProfileError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deleterequest</code> | <code>[DtoConfigurationProfileDelete](src/models/dto-configuration-profile-delete.ts)</code> | payload for the delete request |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DtoProfileResponse](src/models/dto-profile-response.ts)[]</code>

**OnError**: <code>[SensorInsightsDeviceProfile.DeleteAProfileError](src/resources/sensor-insights-device-profile.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryAProfile(request: SensorInsightsDeviceProfile.QueryAProfileRequest, options?: RequestOptions): ApiPromise&lt;DtoProfileResponse[], SensorInsightsDeviceProfile.QueryAProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query a device profile for an individual device

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDeviceProfile.queryAProfile({ body });
  // TODO: Handle 'response' of type DtoProfileResponse[]
} catch (err) {
  if (
    err instanceof SensorInsightsDeviceProfile.QueryAProfileError && err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ResourceResourceQuery](src/models/resource-resource-query.ts)</code> | body |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DtoProfileResponse](src/models/dto-profile-response.ts)[]</code>

**OnError**: <code>[SensorInsightsDeviceProfile.QueryAProfileError](src/resources/sensor-insights-device-profile.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAProfile(request: SensorInsightsDeviceProfile.UpdateAProfileRequest, options?: RequestOptions): ApiPromise&lt;DtoProfileResponse[], SensorInsightsDeviceProfile.UpdateAProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially update a device profile

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDeviceProfile.updateAProfile({ body });
  // TODO: Handle 'response' of type DtoProfileResponse[]
} catch (err) {
  if (
    err instanceof SensorInsightsDeviceProfile.UpdateAProfileError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoConfigurationProfilePath](src/models/dto-configuration-profile-path.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DtoProfileResponse](src/models/dto-profile-response.ts)[]</code>

**OnError**: <code>[SensorInsightsDeviceProfile.UpdateAProfileError](src/resources/sensor-insights-device-profile.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SensorInsightsSmartAlertMetrics

> Source: [SensorInsightsSmartAlertMetrics](src/resources/sensor-insights-smart-alert-metrics.ts)

<details>
<summary><code>sensorinsightsmetricsquery(request: SensorInsightsSmartAlertMetrics.SensorinsightsmetricsqueryRequest, options?: RequestOptions): ApiPromise&lt;DtoQueryMetricsResponse, SensorInsightsSmartAlertMetrics.SensorinsightsmetricsqueryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Device Alerts for the most recent daily period, up to 30 days.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsSmartAlertMetrics.sensorinsightsmetricsquery({ body });
  // TODO: Handle 'response' of type DtoQueryMetricsResponse
} catch (err) {
  if (
    err instanceof SensorInsightsSmartAlertMetrics.SensorinsightsmetricsqueryError &&
      err.payload.kind === "managementError400"
  ) {
    // TODO: Handle 'err.payload.body' of type ManagementError400
  }
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DtoQueryMetrics](src/models/dto-query-metrics.ts)</code> | Daily period requested, up to 30 days. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DtoQueryMetricsResponse](src/models/dto-query-metrics-response.ts)</code>

**OnError**: <code>[SensorInsightsSmartAlertMetrics.SensorinsightsmetricsqueryError](src/resources/sensor-insights-smart-alert-metrics.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

