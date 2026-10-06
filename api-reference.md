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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountServiceController.getAccountInformationUsingGet({
    accountName: "0000123456-00002",
  });
  // TODO: Handle 'response' of type GetAccountInformationResponseforplanner
} catch (err) {
  // TODO: Handle 'err' of type AccountServiceController.GetAccountInformationUsingGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountServiceController.getAccountInformationUsingGet({
  accountName: "0000123456-00002",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetAccountInformationResponseforplanner
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.accountServiceController.getAccountInformationUsingGet(request)`

- **OnSuccess**: <code>[GetAccountInformationResponseforplanner](src/models/get-account-information-responseforplanner.ts)</code>
- **OnError**: throws <code>[AccountServiceController.GetAccountInformationUsingGetError](src/resources/account-service-controller.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountServiceController.getAccountInformationUsingGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetAccountInformationResponseforplanner, AccountServiceController.GetAccountInformationUsingGetError&gt;</code>, with `result.value` of type <code>[GetAccountInformationResponseforplanner](src/models/get-account-information-responseforplanner.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.intelligenceServiceController.setConnectionPlanner({
    body: {
      accountNumber: "0000123456-00001",
      filter: "All or Best or Worst",
      devices: [{ deviceIds: [{ kind: "imei", id: "15-digit IMEI value" }] }],
    },
  });
  // TODO: Handle 'response' of type AsynchronousRequestResultforplanner
} catch (err) {
  // TODO: Handle 'err' of type IntelligenceServiceController.SetConnectionPlannerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.intelligenceServiceController.setConnectionPlanner({
  body: {
    accountNumber: "0000123456-00001",
    filter: "All or Best or Worst",
    devices: [{ deviceIds: [{ kind: "imei", id: "15-digit IMEI value" }] }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AsynchronousRequestResultforplanner
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.intelligenceServiceController.setConnectionPlanner(request)`

- **OnSuccess**: <code>[AsynchronousRequestResultforplanner](src/models/asynchronous-request-resultforplanner.ts)</code>
- **OnError**: throws <code>[IntelligenceServiceController.SetConnectionPlannerError](src/resources/intelligence-service-controller.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.intelligenceServiceController.setConnectionPlanner(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AsynchronousRequestResultforplanner, IntelligenceServiceController.SetConnectionPlannerError&gt;</code>, with `result.value` of type <code>[AsynchronousRequestResultforplanner](src/models/asynchronous-request-resultforplanner.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.intelligenceServiceController.statusConnectionPlanner();
  // TODO: Handle 'response' of type GetDeviceStatusesResponseforplanner
} catch (err) {
  // TODO: Handle 'err' of type IntelligenceServiceController.StatusConnectionPlannerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.intelligenceServiceController.statusConnectionPlanner().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetDeviceStatusesResponseforplanner
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.intelligenceServiceController.statusConnectionPlanner(request)`

- **OnSuccess**: <code>[GetDeviceStatusesResponseforplanner](src/models/get-device-statuses-responseforplanner.ts)</code>
- **OnError**: throws <code>[IntelligenceServiceController.StatusConnectionPlannerError](src/resources/intelligence-service-controller.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.intelligenceServiceController.statusConnectionPlanner(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetDeviceStatusesResponseforplanner, IntelligenceServiceController.StatusConnectionPlannerError&gt;</code>, with `result.value` of type <code>[GetDeviceStatusesResponseforplanner](src/models/get-device-statuses-responseforplanner.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.activateServiceForDevices({
    body: {
      devices: [
        {
          deviceIds: [{ id: "990013907835573", kind: "imei" }, { id: "89141390780800784259", kind: "iccid" }],
          ipAddress: "1.2.3.456",
        },
        {
          deviceIds: [{ id: "990013907884259", kind: "imei" }, { id: "89141390780800735573", kind: "iccid" }],
          ipAddress: "1.2.3.456",
        },
      ],
      servicePlan: "the service plan name",
      mdnZipCode: "98801",
      accountName: "0868924207-00001",
      customFields: [{ key: "CustomField2", value: "SuperVend" }],
      groupName: "4G West",
      primaryPlaceOfUse: {
        address: {
          addressLine1: "1600 Pennsylvania Ave NW",
          city: "Washington",
          state: "DC",
          zip: "20500",
          country: "USA",
        },
        customerName: { title: "President", firstName: "Zaffod", lastName: "Beeblebrox" },
      },
    },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.ActivateServiceForDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.activateServiceForDevices({
  body: {
    devices: [
      {
        deviceIds: [{ id: "990013907835573", kind: "imei" }, { id: "89141390780800784259", kind: "iccid" }],
        ipAddress: "1.2.3.456",
      },
      {
        deviceIds: [{ id: "990013907884259", kind: "imei" }, { id: "89141390780800735573", kind: "iccid" }],
        ipAddress: "1.2.3.456",
      },
    ],
    servicePlan: "the service plan name",
    mdnZipCode: "98801",
    accountName: "0868924207-00001",
    customFields: [{ key: "CustomField2", value: "SuperVend" }],
    groupName: "4G West",
    primaryPlaceOfUse: {
      address: {
        addressLine1: "1600 Pennsylvania Ave NW",
        city: "Washington",
        state: "DC",
        zip: "20500",
        country: "USA",
      },
      customerName: { title: "President", firstName: "Zaffod", lastName: "Beeblebrox" },
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.activateServiceForDevices(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.ActivateServiceForDevicesError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.activateServiceForDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.ActivateServiceForDevicesError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.addDevices({
    body: {
      state: "Pre-active",
      devicesToAdd: [
        { deviceIds: [{ id: "15-digit IMEI", kind: "imei" }, { id: "20-digit ICCID", kind: "iccid" }] },
        { deviceIds: [{ id: "15-digit IMEI", kind: "imei" }, { id: "20-digit ICCID", kind: "iccid" }] },
      ],
      accountName: "0000123456-00001",
      customFields: [{ key: "CustomField2", value: "SuperVend" }],
      groupName: "West Region",
    },
  });
  // TODO: Handle 'response' of type AddDevicesResult[]
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.AddDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.addDevices({
  body: {
    state: "Pre-active",
    devicesToAdd: [
      { deviceIds: [{ id: "15-digit IMEI", kind: "imei" }, { id: "20-digit ICCID", kind: "iccid" }] },
      { deviceIds: [{ id: "15-digit IMEI", kind: "imei" }, { id: "20-digit ICCID", kind: "iccid" }] },
    ],
    accountName: "0000123456-00001",
    customFields: [{ key: "CustomField2", value: "SuperVend" }],
    groupName: "West Region",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AddDevicesResult[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.addDevices(request)`

- **OnSuccess**: <code>[AddDevicesResult](src/models/add-devices-result.ts)[]</code>
- **OnError**: throws <code>[DeviceManagement.AddDevicesError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.addDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AddDevicesResult[], DeviceManagement.AddDevicesError&gt;</code>, with `result.value` of type <code>[AddDevicesResult](src/models/add-devices-result.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.billedUsageInfo({
    body: { accountName: "0342077109-00001" },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.BilledUsageInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.billedUsageInfo({
  body: { accountName: "0342077109-00001" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.billedUsageInfo(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.BilledUsageInfoError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.billedUsageInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.BilledUsageInfoError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.changeDevicesServicePlan({
    body: {
      servicePlan: "Tablet5GB",
      devices: [{ deviceIds: [{ id: "A100003685E561", kind: "meid" }] }],
      carrierIpPoolName: "IPPool",
    },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.ChangeDevicesServicePlanError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.changeDevicesServicePlan({
  body: {
    servicePlan: "Tablet5GB",
    devices: [{ deviceIds: [{ id: "A100003685E561", kind: "meid" }] }],
    carrierIpPoolName: "IPPool",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.changeDevicesServicePlan(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.ChangeDevicesServicePlanError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.changeDevicesServicePlan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.ChangeDevicesServicePlanError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.checkDevicesAvailabilityForActivation({
    body: {
      accountName: "0212345678-00001",
      devices: [{ deviceIds: [{ id: "A100008385E561", kind: "meid" }] }],
    },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.CheckDevicesAvailabilityForActivationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.checkDevicesAvailabilityForActivation({
  body: {
    accountName: "0212345678-00001",
    devices: [{ deviceIds: [{ id: "A100008385E561", kind: "meid" }] }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.checkDevicesAvailabilityForActivation(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.CheckDevicesAvailabilityForActivationError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.checkDevicesAvailabilityForActivation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.CheckDevicesAvailabilityForActivationError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.deactivateServiceForDevices({
    body: {
      accountName: "0000123456-00001",
      devices: [{ deviceIds: [{ id: "20-digit ICCID", kind: "iccid" }] }],
      reasonCode: "FF",
      etfWaiver: true,
      deleteAfterDeactivation: true,
    },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.DeactivateServiceForDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.deactivateServiceForDevices({
  body: {
    accountName: "0000123456-00001",
    devices: [{ deviceIds: [{ id: "20-digit ICCID", kind: "iccid" }] }],
    reasonCode: "FF",
    etfWaiver: true,
    deleteAfterDeactivation: true,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.deactivateServiceForDevices(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.DeactivateServiceForDevicesError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.deactivateServiceForDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.DeactivateServiceForDevicesError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.deleteDeactivatedDevices({
    body: {
      devicesToDelete: [
        { deviceIds: [{ id: "09005470263", kind: "esn" }] },
        { deviceIds: [{ id: "85000022411113460014", kind: "iccid" }] },
        { deviceIds: [{ id: "85000022412313460016", kind: "iccid" }] },
      ],
    },
  });
  // TODO: Handle 'response' of type DeleteDevicesResult[]
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.DeleteDeactivatedDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.deleteDeactivatedDevices({
  body: {
    devicesToDelete: [
      { deviceIds: [{ id: "09005470263", kind: "esn" }] },
      { deviceIds: [{ id: "85000022411113460014", kind: "iccid" }] },
      { deviceIds: [{ id: "85000022412313460016", kind: "iccid" }] },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteDevicesResult[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.deleteDeactivatedDevices(request)`

- **OnSuccess**: <code>[DeleteDevicesResult](src/models/delete-devices-result.ts)[]</code>
- **OnError**: throws <code>[DeviceManagement.DeleteDeactivatedDevicesError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.deleteDeactivatedDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteDevicesResult[], DeviceManagement.DeleteDeactivatedDevicesError&gt;</code>, with `result.value` of type <code>[DeleteDevicesResult](src/models/delete-devices-result.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.deviceUpload({
    body: {
      accountName: "1223334444-00001",
      devices: [
        { deviceIds: [{ id: "15-digit IMEI", kind: "IMEI" }] },
        { deviceIds: [{ id: "15-digit IMEI", kind: "IMEI" }] },
        { deviceIds: [{ id: "15-digit IMEI", kind: "IMEI" }] },
      ],
      emailAddress: "bob@mycompany.com",
      deviceSku: "VZW123456",
      uploadType: "IMEI",
    },
  });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.DeviceUploadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.deviceUpload({
  body: {
    accountName: "1223334444-00001",
    devices: [
      { deviceIds: [{ id: "15-digit IMEI", kind: "IMEI" }] },
      { deviceIds: [{ id: "15-digit IMEI", kind: "IMEI" }] },
      { deviceIds: [{ id: "15-digit IMEI", kind: "IMEI" }] },
    ],
    emailAddress: "bob@mycompany.com",
    deviceSku: "VZW123456",
    uploadType: "IMEI",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.deviceUpload(request)`

- **OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: throws <code>[DeviceManagement.DeviceUploadError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.deviceUpload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RequestResponse, DeviceManagement.DeviceUploadError&gt;</code>, with `result.value` of type <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.deviceUploadStatus({
    body: {
      accountName: "4Gpublicaccount ",
      orderRequestId: " f55fea16-3664-4a32-ae9d-c0cbe3eedf1d ",
      devices: [{ deviceIds: [{ id: "20112019672551234613", kind: "iccid" }] }],
    },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.DeviceUploadStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.deviceUploadStatus({
  body: {
    accountName: "4Gpublicaccount ",
    orderRequestId: " f55fea16-3664-4a32-ae9d-c0cbe3eedf1d ",
    devices: [{ deviceIds: [{ id: "20112019672551234613", kind: "iccid" }] }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.deviceUploadStatus(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.DeviceUploadStatusError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.deviceUploadStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.DeviceUploadStatusError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.getDeviceExtendedDiagnosticInformation({
    body: { accountName: "0000123456-00001", deviceList: [{ id: "10-digit MDN", kind: "mdn" }] },
  });
  // TODO: Handle 'response' of type DeviceExtendedDiagnosticsResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.GetDeviceExtendedDiagnosticInformationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.getDeviceExtendedDiagnosticInformation({
  body: { accountName: "0000123456-00001", deviceList: [{ id: "10-digit MDN", kind: "mdn" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceExtendedDiagnosticsResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.getDeviceExtendedDiagnosticInformation(request)`

- **OnSuccess**: <code>[DeviceExtendedDiagnosticsResult](src/models/device-extended-diagnostics-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.GetDeviceExtendedDiagnosticInformationError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.getDeviceExtendedDiagnosticInformation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceExtendedDiagnosticsResult, DeviceManagement.GetDeviceExtendedDiagnosticInformationError&gt;</code>, with `result.value` of type <code>[DeviceExtendedDiagnosticsResult](src/models/device-extended-diagnostics-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.getDeviceServiceSuspensionStatus({
    body: { deviceIds: [{ id: "A10085E5003861", kind: "meid" }, { id: "A10085E5003186", kind: "meid" }] },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.GetDeviceServiceSuspensionStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.getDeviceServiceSuspensionStatus({
  body: { deviceIds: [{ id: "A10085E5003861", kind: "meid" }, { id: "A10085E5003186", kind: "meid" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.getDeviceServiceSuspensionStatus(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.GetDeviceServiceSuspensionStatusError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.getDeviceServiceSuspensionStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.GetDeviceServiceSuspensionStatusError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.listCurrentDevicesPrlVersion({
    body: { deviceIds: [{ id: "A10085E5003861", kind: "meid" }, { id: "A10085E5003186", kind: "meid" }] },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.ListCurrentDevicesPrlVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.listCurrentDevicesPrlVersion({
  body: { deviceIds: [{ id: "A10085E5003861", kind: "meid" }, { id: "A10085E5003186", kind: "meid" }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.listCurrentDevicesPrlVersion(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.ListCurrentDevicesPrlVersionError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.listCurrentDevicesPrlVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.ListCurrentDevicesPrlVersionError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.listDevicesInformation({
    body: { deviceId: { id: "20-digit ICCID", kind: "iccid" } },
  });
  // TODO: Handle 'response' of type AccountDeviceListResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.ListDevicesInformationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.listDevicesInformation({
  body: { deviceId: { id: "20-digit ICCID", kind: "iccid" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountDeviceListResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.listDevicesInformation(request)`

- **OnSuccess**: <code>[AccountDeviceListResult](src/models/account-device-list-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.ListDevicesInformationError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.listDevicesInformation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountDeviceListResult, DeviceManagement.ListDevicesInformationError&gt;</code>, with `result.value` of type <code>[AccountDeviceListResult](src/models/account-device-list-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.listDevicesProvisioningHistory({
    body: {
      deviceId: { id: "89141390780800784259", kind: "iccid" },
      earliest: "2015-09-16T00:00:01Z",
      latest: "2015-09-18T00:00:01Z",
    },
  });
  // TODO: Handle 'response' of type DeviceProvisioningHistoryListResult[]
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.ListDevicesProvisioningHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.listDevicesProvisioningHistory({
  body: {
    deviceId: { id: "89141390780800784259", kind: "iccid" },
    earliest: "2015-09-16T00:00:01Z",
    latest: "2015-09-18T00:00:01Z",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceProvisioningHistoryListResult[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.listDevicesProvisioningHistory(request)`

- **OnSuccess**: <code>[DeviceProvisioningHistoryListResult](src/models/device-provisioning-history-list-result.ts)[]</code>
- **OnError**: throws <code>[DeviceManagement.ListDevicesProvisioningHistoryError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.listDevicesProvisioningHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceProvisioningHistoryListResult[], DeviceManagement.ListDevicesProvisioningHistoryError&gt;</code>, with `result.value` of type <code>[DeviceProvisioningHistoryListResult](src/models/device-provisioning-history-list-result.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.listDevicesUsageHistory({
    body: {
      earliest: "2018-03-20T00:00:01Z",
      latest: "2020-12-31T00:00:01Z",
      deviceId: { id: "50684915885088839315521399821675", kind: "eid" },
    },
  });
  // TODO: Handle 'response' of type DeviceUsageListResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.ListDevicesUsageHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.listDevicesUsageHistory({
  body: {
    earliest: "2018-03-20T00:00:01Z",
    latest: "2020-12-31T00:00:01Z",
    deviceId: { id: "50684915885088839315521399821675", kind: "eid" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceUsageListResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.listDevicesUsageHistory(request)`

- **OnSuccess**: <code>[DeviceUsageListResult](src/models/device-usage-list-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.ListDevicesUsageHistoryError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.listDevicesUsageHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceUsageListResult, DeviceManagement.ListDevicesUsageHistoryError&gt;</code>, with `result.value` of type <code>[DeviceUsageListResult](src/models/device-usage-list-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.listDevicesWithImeiIccidMismatch({
    body: {
      filter: { earliest: "2020-05-01T15:00:00-08:00Z", latest: "2020-07-30T15:00:00-08:00Z" },
      devices: [
        { deviceIds: [{ id: "8914800000080078", kind: "ICCID" }, { id: "5096300587", kind: "MDN" }] },
      ],
      accountName: "0342077109-00001",
    },
  });
  // TODO: Handle 'response' of type DeviceMismatchListResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.ListDevicesWithImeiIccidMismatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.listDevicesWithImeiIccidMismatch({
  body: {
    filter: { earliest: "2020-05-01T15:00:00-08:00Z", latest: "2020-07-30T15:00:00-08:00Z" },
    devices: [{ deviceIds: [{ id: "8914800000080078", kind: "ICCID" }, { id: "5096300587", kind: "MDN" }] }],
    accountName: "0342077109-00001",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceMismatchListResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.listDevicesWithImeiIccidMismatch(request)`

- **OnSuccess**: <code>[DeviceMismatchListResult](src/models/device-mismatch-list-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.ListDevicesWithImeiIccidMismatchError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.listDevicesWithImeiIccidMismatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceMismatchListResult, DeviceManagement.ListDevicesWithImeiIccidMismatchError&gt;</code>, with `result.value` of type <code>[DeviceMismatchListResult](src/models/device-mismatch-list-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.moveDevicesWithinAccountsOfProfile({
    body: {
      accountName: "0212345678-00001",
      devices: [{ deviceIds: [{ id: "19110173057", kind: "ESN" }] }],
      servicePlan: "M2M5GB",
    },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.MoveDevicesWithinAccountsOfProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.moveDevicesWithinAccountsOfProfile({
  body: {
    accountName: "0212345678-00001",
    devices: [{ deviceIds: [{ id: "19110173057", kind: "ESN" }] }],
    servicePlan: "M2M5GB",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.moveDevicesWithinAccountsOfProfile(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.MoveDevicesWithinAccountsOfProfileError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.moveDevicesWithinAccountsOfProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.MoveDevicesWithinAccountsOfProfileError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.restoreServiceForSuspendedDevices({
    body: { devices: [{ deviceIds: [{ id: "89148000000800139708", kind: "iccid" }] }] },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.RestoreServiceForSuspendedDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.restoreServiceForSuspendedDevices({
  body: { devices: [{ deviceIds: [{ id: "89148000000800139708", kind: "iccid" }] }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.restoreServiceForSuspendedDevices(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.RestoreServiceForSuspendedDevicesError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.restoreServiceForSuspendedDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.RestoreServiceForSuspendedDevicesError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.retrieveAggregateDeviceUsageHistory({
    body: {
      startTime: "2021-08-01T00:00:00-06:00",
      endTime: "2021-08-30T00:00:00-06:00",
      deviceIds: [{ id: "84258000000891490087", kind: "ICCID" }],
      accountName: "9992330389-00001",
    },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.RetrieveAggregateDeviceUsageHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.retrieveAggregateDeviceUsageHistory({
  body: {
    startTime: "2021-08-01T00:00:00-06:00",
    endTime: "2021-08-30T00:00:00-06:00",
    deviceIds: [{ id: "84258000000891490087", kind: "ICCID" }],
    accountName: "9992330389-00001",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.retrieveAggregateDeviceUsageHistory(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.RetrieveAggregateDeviceUsageHistoryError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.retrieveAggregateDeviceUsageHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.RetrieveAggregateDeviceUsageHistoryError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.retrieveDeviceConnectionHistory({
    body: {
      deviceId: { id: "89141390780800784259", kind: "iccid" },
      earliest: "2015-09-16T00:00:01Z",
      latest: "2010-09-18T00:00:01Z",
    },
  });
  // TODO: Handle 'response' of type ConnectionHistoryResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.RetrieveDeviceConnectionHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.retrieveDeviceConnectionHistory({
  body: {
    deviceId: { id: "89141390780800784259", kind: "iccid" },
    earliest: "2015-09-16T00:00:01Z",
    latest: "2010-09-18T00:00:01Z",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectionHistoryResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.retrieveDeviceConnectionHistory(request)`

- **OnSuccess**: <code>[ConnectionHistoryResult](src/models/connection-history-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.RetrieveDeviceConnectionHistoryError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.retrieveDeviceConnectionHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectionHistoryResult, DeviceManagement.RetrieveDeviceConnectionHistoryError&gt;</code>, with `result.value` of type <code>[ConnectionHistoryResult](src/models/connection-history-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.suspendServiceForDevices({
    body: { devices: [{ deviceIds: [{ id: "89148000000800139708", kind: "iccid" }] }] },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.SuspendServiceForDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.suspendServiceForDevices({
  body: { devices: [{ deviceIds: [{ id: "89148000000800139708", kind: "iccid" }] }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.suspendServiceForDevices(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.SuspendServiceForDevicesError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.suspendServiceForDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.SuspendServiceForDevicesError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.updateDeviceId({
    serviceType: "some example string",
    body: {
      change4GOption: "ChangeICCID",
      deviceIds: [{ id: "42590078891480000008", kind: "iccid" }],
      deviceIdsTo: [{ id: "89148000000842590078", kind: "iccid" }],
      servicePlan: "4G 2GB",
      zipCode: "98802",
    },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.UpdateDeviceIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.updateDeviceId({
  serviceType: "some example string",
  body: {
    change4GOption: "ChangeICCID",
    deviceIds: [{ id: "42590078891480000008", kind: "iccid" }],
    deviceIdsTo: [{ id: "89148000000842590078", kind: "iccid" }],
    servicePlan: "4G 2GB",
    zipCode: "98802",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.updateDeviceId(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.UpdateDeviceIdError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.updateDeviceId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.UpdateDeviceIdError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.updateDevicesContactInformation({
    body: {
      primaryPlaceOfUse: {
        address: {
          addressLine1: "9868 Scranton Rd",
          addressLine2: "Suite A",
          city: "San Diego",
          state: "CA",
          zip: "92121",
          zip4: "0001",
          country: "USA",
          phone: "1234567890",
          phoneType: "H",
          emailAddress: "zaffod@theinternet.com",
        },
        customerName: {
          title: "President",
          firstName: "Zaffod",
          middleName: "P",
          lastName: "Beeblebrox",
          suffix: "I",
        },
      },
      accountName: "0000123456-00001",
      devices: [{ deviceIds: [{ id: "19110173057", kind: "ESN" }, { id: "19110173057", kind: "ESN" }] }],
    },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.UpdateDevicesContactInformationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.updateDevicesContactInformation({
  body: {
    primaryPlaceOfUse: {
      address: {
        addressLine1: "9868 Scranton Rd",
        addressLine2: "Suite A",
        city: "San Diego",
        state: "CA",
        zip: "92121",
        zip4: "0001",
        country: "USA",
        phone: "1234567890",
        phoneType: "H",
        emailAddress: "zaffod@theinternet.com",
      },
      customerName: {
        title: "President",
        firstName: "Zaffod",
        middleName: "P",
        lastName: "Beeblebrox",
        suffix: "I",
      },
    },
    accountName: "0000123456-00001",
    devices: [{ deviceIds: [{ id: "19110173057", kind: "ESN" }, { id: "19110173057", kind: "ESN" }] }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.updateDevicesContactInformation(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.UpdateDevicesContactInformationError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.updateDevicesContactInformation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.UpdateDevicesContactInformationError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.updateDevicesCostCenterCode({
    body: {
      costCenter: "cc12345",
      devices: [{ deviceIds: [{ id: "89148000000800139708", kind: "iccid" }] }],
    },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.UpdateDevicesCostCenterCodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.updateDevicesCostCenterCode({
  body: { costCenter: "cc12345", devices: [{ deviceIds: [{ id: "89148000000800139708", kind: "iccid" }] }] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.updateDevicesCostCenterCode(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.UpdateDevicesCostCenterCodeError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.updateDevicesCostCenterCode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.UpdateDevicesCostCenterCodeError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.updateDevicesCustomFields({
    body: {
      customFieldsToUpdate: [
        { key: "CustomField1", value: "West Region" },
        { key: "CustomField2", value: "Distribution" },
      ],
      devices: [{ deviceIds: [{ id: "89148000000800139708", kind: "iccid" }] }],
    },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.UpdateDevicesCustomFieldsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.updateDevicesCustomFields({
  body: {
    customFieldsToUpdate: [
      { key: "CustomField1", value: "West Region" },
      { key: "CustomField2", value: "Distribution" },
    ],
    devices: [{ deviceIds: [{ id: "89148000000800139708", kind: "iccid" }] }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.updateDevicesCustomFields(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.UpdateDevicesCustomFieldsError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.updateDevicesCustomFields(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.UpdateDevicesCustomFieldsError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.updateDevicesState({
    body: {
      serviceName: "some example string",
      stateName: "some example string",
      servicePlan: "some example string",
      mdnZipCode: "some example string",
    },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.UpdateDevicesStateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.updateDevicesState({
  body: {
    serviceName: "some example string",
    stateName: "some example string",
    servicePlan: "some example string",
    mdnZipCode: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.updateDevicesState(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.UpdateDevicesStateError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.updateDevicesState(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.UpdateDevicesStateError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.uploadActivateDevice({
    body: {
      accountName: "1223334444-00001",
      emailAddress: "bob@mycompany.com",
      deviceSku: "VZW123456",
      uploadType: "IMEI ICCID Pair",
      servicePlan: "15MBShr",
      carrierIpPoolName: "",
      mdnZipCode: "92222",
      devices: [
        {
          deviceIds: [{ id: "990013907835573", kind: "imei" }, { id: "89141390780800784259", kind: "iccid" }],
        },
      ],
    },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.UploadActivateDeviceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.uploadActivateDevice({
  body: {
    accountName: "1223334444-00001",
    emailAddress: "bob@mycompany.com",
    deviceSku: "VZW123456",
    uploadType: "IMEI ICCID Pair",
    servicePlan: "15MBShr",
    carrierIpPoolName: "",
    mdnZipCode: "92222",
    devices: [
      { deviceIds: [{ id: "990013907835573", kind: "imei" }, { id: "89141390780800784259", kind: "iccid" }] },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.uploadActivateDevice(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.UploadActivateDeviceError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.uploadActivateDevice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.UploadActivateDeviceError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.usageSegmentationLabelAssociation({
    body: { accountName: "some example string", labels: { devices: [{}] } },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.UsageSegmentationLabelAssociationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.usageSegmentationLabelAssociation({
  body: { accountName: "some example string", labels: { devices: [{}] } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.usageSegmentationLabelAssociation(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.UsageSegmentationLabelAssociationError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.usageSegmentationLabelAssociation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.UsageSegmentationLabelAssociationError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceManagement.usageSegmentationLabelDeletion({
    accountName: "0000123456-00001",
    labelList: {},
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceManagement.UsageSegmentationLabelDeletionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceManagement.usageSegmentationLabelDeletion({
  accountName: "0000123456-00001",
  labelList: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceManagement.usageSegmentationLabelDeletion(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceManagement.UsageSegmentationLabelDeletionError](src/resources/device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceManagement.usageSegmentationLabelDeletion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceManagement.UsageSegmentationLabelDeletionError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.getAccountInformation({ aname: "Chintan_CPNStaticBulk" });
  // TODO: Handle 'response' of type Account
} catch (err) {
  // TODO: Handle 'err' of type Accounts.GetAccountInformationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts.getAccountInformation({ aname: "Chintan_CPNStaticBulk" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Account
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.accounts.getAccountInformation(request)`

- **OnSuccess**: <code>[Account](src/models/account.ts)</code>
- **OnError**: throws <code>[Accounts.GetAccountInformationError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.getAccountInformation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Account, Accounts.GetAccountInformationError&gt;</code>, with `result.value` of type <code>[Account](src/models/account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.listAccountLeads({ aname: "0252012345-00001" });
  // TODO: Handle 'response' of type AccountLeadsResult
} catch (err) {
  // TODO: Handle 'err' of type Accounts.ListAccountLeadsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts.listAccountLeads({ aname: "0252012345-00001" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountLeadsResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.accounts.listAccountLeads(request)`

- **OnSuccess**: <code>[AccountLeadsResult](src/models/account-leads-result.ts)</code>
- **OnError**: throws <code>[Accounts.ListAccountLeadsError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.listAccountLeads(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountLeadsResult, Accounts.ListAccountLeadsError&gt;</code>, with `result.value` of type <code>[AccountLeadsResult](src/models/account-leads-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.listAccountStatesAndServices({ aname: "0252012345-00001" });
  // TODO: Handle 'response' of type AccountStatesAndServices
} catch (err) {
  // TODO: Handle 'err' of type Accounts.ListAccountStatesAndServicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts.listAccountStatesAndServices({
  aname: "0252012345-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountStatesAndServices
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.accounts.listAccountStatesAndServices(request)`

- **OnSuccess**: <code>[AccountStatesAndServices](src/models/account-states-and-services.ts)</code>
- **OnError**: throws <code>[Accounts.ListAccountStatesAndServicesError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.listAccountStatesAndServices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountStatesAndServices, Accounts.ListAccountStatesAndServicesError&gt;</code>, with `result.value` of type <code>[AccountStatesAndServices](src/models/account-states-and-services.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceGroups.createDeviceGroup({
    body: {
      accountName: "0000123456-00001",
      groupDescription: "descriptive string",
      groupName: "group name",
      devicesToAdd: [{ id: "15-digit IMEI", kind: "imei" }],
    },
  });
  // TODO: Handle 'response' of type ConnectivityManagementSuccessResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceGroups.CreateDeviceGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceGroups.createDeviceGroup({
  body: {
    accountName: "0000123456-00001",
    groupDescription: "descriptive string",
    groupName: "group name",
    devicesToAdd: [{ id: "15-digit IMEI", kind: "imei" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectivityManagementSuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceGroups.createDeviceGroup(request)`

- **OnSuccess**: <code>[ConnectivityManagementSuccessResult](src/models/connectivity-management-success-result.ts)</code>
- **OnError**: throws <code>[DeviceGroups.CreateDeviceGroupError](src/resources/device-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceGroups.createDeviceGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectivityManagementSuccessResult, DeviceGroups.CreateDeviceGroupError&gt;</code>, with `result.value` of type <code>[ConnectivityManagementSuccessResult](src/models/connectivity-management-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceGroups.deleteDeviceGroup({
    aname: "0252012345-00001",
    gname: "some example string",
  });
  // TODO: Handle 'response' of type ConnectivityManagementSuccessResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceGroups.DeleteDeviceGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceGroups.deleteDeviceGroup({
  aname: "0252012345-00001",
  gname: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectivityManagementSuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceGroups.deleteDeviceGroup(request)`

- **OnSuccess**: <code>[ConnectivityManagementSuccessResult](src/models/connectivity-management-success-result.ts)</code>
- **OnError**: throws <code>[DeviceGroups.DeleteDeviceGroupError](src/resources/device-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceGroups.deleteDeviceGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectivityManagementSuccessResult, DeviceGroups.DeleteDeviceGroupError&gt;</code>, with `result.value` of type <code>[ConnectivityManagementSuccessResult](src/models/connectivity-management-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceGroups.getDeviceGroupInformation({
    aname: "0252012345-00001",
    gname: "some example string",
  });
  // TODO: Handle 'response' of type DeviceGroupDevicesData
} catch (err) {
  // TODO: Handle 'err' of type DeviceGroups.GetDeviceGroupInformationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceGroups.getDeviceGroupInformation({
  aname: "0252012345-00001",
  gname: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceGroupDevicesData
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceGroups.getDeviceGroupInformation(request)`

- **OnSuccess**: <code>[DeviceGroupDevicesData](src/models/device-group-devices-data.ts)</code>
- **OnError**: throws <code>[DeviceGroups.GetDeviceGroupInformationError](src/resources/device-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceGroups.getDeviceGroupInformation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceGroupDevicesData, DeviceGroups.GetDeviceGroupInformationError&gt;</code>, with `result.value` of type <code>[DeviceGroupDevicesData](src/models/device-group-devices-data.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceGroups.listDeviceGroups({ aname: "0252012345-00001" });
  // TODO: Handle 'response' of type DeviceGroup[]
} catch (err) {
  // TODO: Handle 'err' of type DeviceGroups.ListDeviceGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceGroups.listDeviceGroups({ aname: "0252012345-00001" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceGroup[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceGroups.listDeviceGroups(request)`

- **OnSuccess**: <code>[DeviceGroup](src/models/device-group.ts)[]</code>
- **OnError**: throws <code>[DeviceGroups.ListDeviceGroupsError](src/resources/device-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceGroups.listDeviceGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceGroup[], DeviceGroups.ListDeviceGroupsError&gt;</code>, with `result.value` of type <code>[DeviceGroup](src/models/device-group.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceGroups.updateDeviceGroup({
    aname: "0252012345-00001",
    gname: "some example string",
    body: {
      devicesToAdd: [{ id: "990003420535537", kind: "imei" }],
      newGroupDescription: "All western region tank level monitors.",
      newGroupName: "Western region tanks",
    },
  });
  // TODO: Handle 'response' of type ConnectivityManagementSuccessResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceGroups.UpdateDeviceGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceGroups.updateDeviceGroup({
  aname: "0252012345-00001",
  gname: "some example string",
  body: {
    devicesToAdd: [{ id: "990003420535537", kind: "imei" }],
    newGroupDescription: "All western region tank level monitors.",
    newGroupName: "Western region tanks",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectivityManagementSuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceGroups.updateDeviceGroup(request)`

- **OnSuccess**: <code>[ConnectivityManagementSuccessResult](src/models/connectivity-management-success-result.ts)</code>
- **OnError**: throws <code>[DeviceGroups.UpdateDeviceGroupError](src/resources/device-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceGroups.updateDeviceGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectivityManagementSuccessResult, DeviceGroups.UpdateDeviceGroupError&gt;</code>, with `result.value` of type <code>[ConnectivityManagementSuccessResult](src/models/connectivity-management-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sms.listDevicesSmsMessages({ aname: "0252012345-00001" });
  // TODO: Handle 'response' of type SmsMessagesQueryResult
} catch (err) {
  // TODO: Handle 'err' of type Sms.ListDevicesSmsMessagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sms.listDevicesSmsMessages({ aname: "0252012345-00001" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SmsMessagesQueryResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sms.listDevicesSmsMessages(request)`

- **OnSuccess**: <code>[SmsMessagesQueryResult](src/models/sms-messages-query-result.ts)</code>
- **OnError**: throws <code>[Sms.ListDevicesSmsMessagesError](src/resources/sms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sms.listDevicesSmsMessages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SmsMessagesQueryResult, Sms.ListDevicesSmsMessagesError&gt;</code>, with `result.value` of type <code>[SmsMessagesQueryResult](src/models/sms-messages-query-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sms.sendSmsToDevice({
    body: {
      accountName: "0000123456-00001",
      smsMessage: "the body or text of the message itself",
      customFields: [{ key: "CustomField1", value: "value of the field" }],
      dataEncoding: "optional 7 or 8-bit encoding",
      deviceIds: [{ id: "20-digit ICCID", kind: "iccid" }],
      timeToLive: "a000000010000000R",
    },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type Sms.SendSmsToDeviceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sms.sendSmsToDevice({
  body: {
    accountName: "0000123456-00001",
    smsMessage: "the body or text of the message itself",
    customFields: [{ key: "CustomField1", value: "value of the field" }],
    dataEncoding: "optional 7 or 8-bit encoding",
    deviceIds: [{ id: "20-digit ICCID", kind: "iccid" }],
    timeToLive: "a000000010000000R",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sms.sendSmsToDevice(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[Sms.SendSmsToDeviceError](src/resources/sms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sms.sendSmsToDevice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, Sms.SendSmsToDeviceError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sms.startQueuedSmsDelivery({ aname: "0252012345-00001" });
  // TODO: Handle 'response' of type ConnectivityManagementSuccessResult
} catch (err) {
  // TODO: Handle 'err' of type Sms.StartQueuedSmsDeliveryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sms.startQueuedSmsDelivery({ aname: "0252012345-00001" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectivityManagementSuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sms.startQueuedSmsDelivery(request)`

- **OnSuccess**: <code>[ConnectivityManagementSuccessResult](src/models/connectivity-management-success-result.ts)</code>
- **OnError**: throws <code>[Sms.StartQueuedSmsDeliveryError](src/resources/sms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sms.startQueuedSmsDelivery(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectivityManagementSuccessResult, Sms.StartQueuedSmsDeliveryError&gt;</code>, with `result.value` of type <code>[ConnectivityManagementSuccessResult](src/models/connectivity-management-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionManagement.endConnectivityManagementSession();
  // TODO: Handle 'response' of type LogOutRequest
} catch (err) {
  // TODO: Handle 'err' of type SessionManagement.EndConnectivityManagementSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessionManagement.endConnectivityManagementSession().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LogOutRequest
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessionManagement.endConnectivityManagementSession()`

- **OnSuccess**: <code>[LogOutRequest](src/models/log-out-request.ts)</code>
- **OnError**: throws <code>[SessionManagement.EndConnectivityManagementSessionError](src/resources/session-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessionManagement.endConnectivityManagementSession().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LogOutRequest, SessionManagement.EndConnectivityManagementSessionError&gt;</code>, with `result.value` of type <code>[LogOutRequest](src/models/log-out-request.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionManagement.resetConnectivityManagementPassword({
    body: { oldPassword: "grflbk" },
  });
  // TODO: Handle 'response' of type SessionResetPasswordResult
} catch (err) {
  // TODO: Handle 'err' of type SessionManagement.ResetConnectivityManagementPasswordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessionManagement.resetConnectivityManagementPassword({
  body: { oldPassword: "grflbk" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionResetPasswordResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sessionManagement.resetConnectivityManagementPassword(request)`

- **OnSuccess**: <code>[SessionResetPasswordResult](src/models/session-reset-password-result.ts)</code>
- **OnError**: throws <code>[SessionManagement.ResetConnectivityManagementPasswordError](src/resources/session-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessionManagement.resetConnectivityManagementPassword(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionResetPasswordResult, SessionManagement.ResetConnectivityManagementPasswordError&gt;</code>, with `result.value` of type <code>[SessionResetPasswordResult](src/models/session-reset-password-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionManagement.startConnectivityManagementSession({
    body: { username: "zbeeblebrox", password: "IMgr8" },
  });
  // TODO: Handle 'response' of type LogInResult
} catch (err) {
  // TODO: Handle 'err' of type SessionManagement.StartConnectivityManagementSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessionManagement.startConnectivityManagementSession({
  body: { username: "zbeeblebrox", password: "IMgr8" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LogInResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sessionManagement.startConnectivityManagementSession(request)`

- **OnSuccess**: <code>[LogInResult](src/models/log-in-result.ts)</code>
- **OnError**: throws <code>[SessionManagement.StartConnectivityManagementSessionError](src/resources/session-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessionManagement.startConnectivityManagementSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LogInResult, SessionManagement.StartConnectivityManagementSessionError&gt;</code>, with `result.value` of type <code>[LogInResult](src/models/log-in-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectivityCallbacks.deregisterCallback({
    aname: "1223334444-00001",
    sname: "CarrierService",
  });
  // TODO: Handle 'response' of type CallbackActionResult
} catch (err) {
  // TODO: Handle 'err' of type ConnectivityCallbacks.DeregisterCallbackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectivityCallbacks.deregisterCallback({
  aname: "1223334444-00001",
  sname: "CarrierService",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CallbackActionResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.connectivityCallbacks.deregisterCallback(request)`

- **OnSuccess**: <code>[CallbackActionResult](src/models/callback-action-result.ts)</code>
- **OnError**: throws <code>[ConnectivityCallbacks.DeregisterCallbackError](src/resources/connectivity-callbacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectivityCallbacks.deregisterCallback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CallbackActionResult, ConnectivityCallbacks.DeregisterCallbackError&gt;</code>, with `result.value` of type <code>[CallbackActionResult](src/models/callback-action-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectivityCallbacks.listRegisteredCallbacks({ aname: "0252012345-00001" });
  // TODO: Handle 'response' of type ConnectivityManagementCallback[]
} catch (err) {
  // TODO: Handle 'err' of type ConnectivityCallbacks.ListRegisteredCallbacksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectivityCallbacks.listRegisteredCallbacks({
  aname: "0252012345-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectivityManagementCallback[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.connectivityCallbacks.listRegisteredCallbacks(request)`

- **OnSuccess**: <code>[ConnectivityManagementCallback](src/models/connectivity-management-callback.ts)[]</code>
- **OnError**: throws <code>[ConnectivityCallbacks.ListRegisteredCallbacksError](src/resources/connectivity-callbacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectivityCallbacks.listRegisteredCallbacks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectivityManagementCallback[], ConnectivityCallbacks.ListRegisteredCallbacksError&gt;</code>, with `result.value` of type <code>[ConnectivityManagementCallback](src/models/connectivity-management-callback.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connectivityCallbacks.registerCallback({
    aname: "TestAccount-2",
    body: { name: "CarrierService", url: "https://mock.thingspace.verizon.com/webhook" },
  });
  // TODO: Handle 'response' of type CallbackActionResult
} catch (err) {
  // TODO: Handle 'err' of type ConnectivityCallbacks.RegisterCallbackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connectivityCallbacks.registerCallback({
  aname: "TestAccount-2",
  body: { name: "CarrierService", url: "https://mock.thingspace.verizon.com/webhook" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CallbackActionResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.connectivityCallbacks.registerCallback(request)`

- **OnSuccess**: <code>[CallbackActionResult](src/models/callback-action-result.ts)</code>
- **OnError**: throws <code>[ConnectivityCallbacks.RegisterCallbackError](src/resources/connectivity-callbacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connectivityCallbacks.registerCallback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CallbackActionResult, ConnectivityCallbacks.RegisterCallbackError&gt;</code>, with `result.value` of type <code>[CallbackActionResult](src/models/callback-action-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountRequests.getCurrentAsynchronousRequestStatus({
    aname: "0252012345-00001",
    requestId: "86c83330-4bf5-4235-9c4e-a83f93aeae4c",
  });
  // TODO: Handle 'response' of type AsynchronousRequestResult
} catch (err) {
  // TODO: Handle 'err' of type AccountRequests.GetCurrentAsynchronousRequestStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountRequests.getCurrentAsynchronousRequestStatus({
  aname: "0252012345-00001",
  requestId: "86c83330-4bf5-4235-9c4e-a83f93aeae4c",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AsynchronousRequestResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.accountRequests.getCurrentAsynchronousRequestStatus(request)`

- **OnSuccess**: <code>[AsynchronousRequestResult](src/models/asynchronous-request-result.ts)</code>
- **OnError**: throws <code>[AccountRequests.GetCurrentAsynchronousRequestStatusError](src/resources/account-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountRequests.getCurrentAsynchronousRequestStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AsynchronousRequestResult, AccountRequests.GetCurrentAsynchronousRequestStatusError&gt;</code>, with `result.value` of type <code>[AsynchronousRequestResult](src/models/asynchronous-request-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.servicePlans.listAccountServicePlans({ aname: "0252012345-00001" });
  // TODO: Handle 'response' of type ServicePlan[]
} catch (err) {
  // TODO: Handle 'err' of type ServicePlans.ListAccountServicePlansError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.servicePlans.listAccountServicePlans({ aname: "0252012345-00001" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ServicePlan[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.servicePlans.listAccountServicePlans(request)`

- **OnSuccess**: <code>[ServicePlan](src/models/service-plan.ts)[]</code>
- **OnError**: throws <code>[ServicePlans.ListAccountServicePlansError](src/resources/service-plans.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.servicePlans.listAccountServicePlans(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ServicePlan[], ServicePlans.ListAccountServicePlansError&gt;</code>, with `result.value` of type <code>[ServicePlan](src/models/service-plan.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceDiagnostics.deviceReachabilityStatusUsingPost({
    body: {
      accountName: "some example string",
      device: { id: "some example string", kind: "some example string" },
      requestType: "some example string",
    },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceDiagnostics.DeviceReachabilityStatusUsingPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceDiagnostics.deviceReachabilityStatusUsingPost({
  body: {
    accountName: "some example string",
    device: { id: "some example string", kind: "some example string" },
    requestType: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceDiagnostics.deviceReachabilityStatusUsingPost(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceDiagnostics.DeviceReachabilityStatusUsingPostError](src/resources/device-diagnostics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceDiagnostics.deviceReachabilityStatusUsingPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceDiagnostics.DeviceReachabilityStatusUsingPostError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceDiagnostics.retrieveActiveMonitorsUsingPost({
    body: {
      accountName: "0242123520-00001",
      devices: [{ deviceIds: [{ id: "12016560696", kind: "msisdn" }] }],
    },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceDiagnostics.RetrieveActiveMonitorsUsingPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceDiagnostics.retrieveActiveMonitorsUsingPost({
  body: {
    accountName: "0242123520-00001",
    devices: [{ deviceIds: [{ id: "12016560696", kind: "msisdn" }] }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceDiagnostics.retrieveActiveMonitorsUsingPost(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[DeviceDiagnostics.RetrieveActiveMonitorsUsingPostError](src/resources/device-diagnostics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceDiagnostics.retrieveActiveMonitorsUsingPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, DeviceDiagnostics.RetrieveActiveMonitorsUsingPostError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceMonitoring.deviceReachability({
    body: {
      accountName: "0000123456-00001",
      requestType: "REACHABLE_FOR_DATA",
      devices: [
        { deviceIds: [{ id: "20-digit ICCID", kind: "iccid" }, { id: "20-digit ICCID", kind: "iccid" }] },
      ],
      monitorExpirationTime: "2019-12-02T15:00:00-08:00Z",
    },
  });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceMonitoring.DeviceReachabilityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceMonitoring.deviceReachability({
  body: {
    accountName: "0000123456-00001",
    requestType: "REACHABLE_FOR_DATA",
    devices: [
      { deviceIds: [{ id: "20-digit ICCID", kind: "iccid" }, { id: "20-digit ICCID", kind: "iccid" }] },
    ],
    monitorExpirationTime: "2019-12-02T15:00:00-08:00Z",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceMonitoring.deviceReachability(request)`

- **OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: throws <code>[DeviceMonitoring.DeviceReachabilityError](src/resources/device-monitoring.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceMonitoring.deviceReachability(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RequestResponse, DeviceMonitoring.DeviceReachabilityError&gt;</code>, with `result.value` of type <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopDeviceReachability(request: DeviceMonitoring.StopDeviceReachabilityRequest, options?: RequestOptions): ApiPromise&lt;RequestResponse, DeviceMonitoring.StopDeviceReachabilityError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceMonitoring.stopDeviceReachability({
    stopreachabilitypayload: {
      accountName: "0000123456-00001",
      devices: [{ deviceIds: [{ id: "1+ 10-digit phone number", kind: "msisdn" }] }],
    },
  });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceMonitoring.StopDeviceReachabilityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceMonitoring.stopDeviceReachability({
  stopreachabilitypayload: {
    accountName: "0000123456-00001",
    devices: [{ deviceIds: [{ id: "1+ 10-digit phone number", kind: "msisdn" }] }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceMonitoring.stopDeviceReachability(request)`

- **OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: throws <code>[DeviceMonitoring.StopDeviceReachabilityError](src/resources/device-monitoring.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceMonitoring.stopDeviceReachability(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RequestResponse, DeviceMonitoring.StopDeviceReachabilityError&gt;</code>, with `result.value` of type <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceProfileManagement.activateDeviceThroughProfile({
    body: {
      devices: [{ deviceIds: [{ id: "32-digit EID", kind: "eid" }, { id: "15-digit IMEI", kind: "imei" }] }],
      accountName: "0000123456-00001",
      servicePlan: "The service plan name",
      mdnZipCode: "five digit zip code",
    },
  });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceProfileManagement.ActivateDeviceThroughProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceProfileManagement.activateDeviceThroughProfile({
  body: {
    devices: [{ deviceIds: [{ id: "32-digit EID", kind: "eid" }, { id: "15-digit IMEI", kind: "imei" }] }],
    accountName: "0000123456-00001",
    servicePlan: "The service plan name",
    mdnZipCode: "five digit zip code",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceProfileManagement.activateDeviceThroughProfile(request)`

- **OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: throws <code>[DeviceProfileManagement.ActivateDeviceThroughProfileError](src/resources/device-profile-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceProfileManagement.activateDeviceThroughProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RequestResponse, DeviceProfileManagement.ActivateDeviceThroughProfileError&gt;</code>, with `result.value` of type <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceProfileManagement.profileToActivateDevice({
    body: { accountName: "some example string", devices: [{}] },
  });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceProfileManagement.ProfileToActivateDeviceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceProfileManagement.profileToActivateDevice({
  body: { accountName: "some example string", devices: [{}] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceProfileManagement.profileToActivateDevice(request)`

- **OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: throws <code>[DeviceProfileManagement.ProfileToActivateDeviceError](src/resources/device-profile-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceProfileManagement.profileToActivateDevice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RequestResponse, DeviceProfileManagement.ProfileToActivateDeviceError&gt;</code>, with `result.value` of type <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceProfileManagement.profileToDeactivateDevice({
    body: { accountName: "some example string", reasonCode: "some example string" },
  });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceProfileManagement.ProfileToDeactivateDeviceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceProfileManagement.profileToDeactivateDevice({
  body: { accountName: "some example string", reasonCode: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceProfileManagement.profileToDeactivateDevice(request)`

- **OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: throws <code>[DeviceProfileManagement.ProfileToDeactivateDeviceError](src/resources/device-profile-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceProfileManagement.profileToDeactivateDevice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RequestResponse, DeviceProfileManagement.ProfileToDeactivateDeviceError&gt;</code>, with `result.value` of type <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceProfileManagement.profileToSetFallbackAttribute({
    body: { devices: [{}], accountName: "some example string" },
  });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceProfileManagement.ProfileToSetFallbackAttributeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceProfileManagement.profileToSetFallbackAttribute({
  body: { devices: [{}], accountName: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceProfileManagement.profileToSetFallbackAttribute(request)`

- **OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: throws <code>[DeviceProfileManagement.ProfileToSetFallbackAttributeError](src/resources/device-profile-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceProfileManagement.profileToSetFallbackAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RequestResponse, DeviceProfileManagement.ProfileToSetFallbackAttributeError&gt;</code>, with `result.value` of type <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eUiccDeviceProfileManagement.deleteLocalProfile({
    body: {
      devices: [
        {
          deviceIds: [
            { id: "678912789123453456784008666456", kind: "eid" },
            { id: "78425989148000000840", kind: "iccid" },
          ],
        },
      ],
      accountName: "1223334444-00001",
      smsrOid: "1.3.6.1.4.1.31746.1.500.200.101.5",
    },
  });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  // TODO: Handle 'err' of type EUiccDeviceProfileManagement.DeleteLocalProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.eUiccDeviceProfileManagement.deleteLocalProfile({
  body: {
    devices: [
      {
        deviceIds: [
          { id: "678912789123453456784008666456", kind: "eid" },
          { id: "78425989148000000840", kind: "iccid" },
        ],
      },
    ],
    accountName: "1223334444-00001",
    smsrOid: "1.3.6.1.4.1.31746.1.500.200.101.5",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.eUiccDeviceProfileManagement.deleteLocalProfile(request)`

- **OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: throws <code>[EUiccDeviceProfileManagement.DeleteLocalProfileError](src/resources/euicc-device-profile-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eUiccDeviceProfileManagement.deleteLocalProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RequestResponse, EUiccDeviceProfileManagement.DeleteLocalProfileError&gt;</code>, with `result.value` of type <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eUiccDeviceProfileManagement.disableLocalProfile({
    body: {
      devices: [
        {
          deviceIds: [
            { id: "678912789123453456784008666456", kind: "eid" },
            { id: "78425989148000000840", kind: "iccid" },
          ],
        },
      ],
      accountName: "1223334444-00001",
      smsrOid: "1.3.6.1.4.1.31746.1.500.200.101.5",
    },
  });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  // TODO: Handle 'err' of type EUiccDeviceProfileManagement.DisableLocalProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.eUiccDeviceProfileManagement.disableLocalProfile({
  body: {
    devices: [
      {
        deviceIds: [
          { id: "678912789123453456784008666456", kind: "eid" },
          { id: "78425989148000000840", kind: "iccid" },
        ],
      },
    ],
    accountName: "1223334444-00001",
    smsrOid: "1.3.6.1.4.1.31746.1.500.200.101.5",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.eUiccDeviceProfileManagement.disableLocalProfile(request)`

- **OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: throws <code>[EUiccDeviceProfileManagement.DisableLocalProfileError](src/resources/euicc-device-profile-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eUiccDeviceProfileManagement.disableLocalProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RequestResponse, EUiccDeviceProfileManagement.DisableLocalProfileError&gt;</code>, with `result.value` of type <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eUiccDeviceProfileManagement.downloadLocalProfileToDisable({
    body: {
      devices: [
        {
          deviceIds: [
            { id: "678912789123453456784008666456", kind: "eid" },
            { id: "78425989148000000840", kind: "iccid" },
          ],
        },
      ],
      accountName: "1223334444-00001",
      smsrOid: "1.3.6.1.4.1.31746.1.500.200.101.5",
    },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type EUiccDeviceProfileManagement.DownloadLocalProfileToDisableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.eUiccDeviceProfileManagement.downloadLocalProfileToDisable({
  body: {
    devices: [
      {
        deviceIds: [
          { id: "678912789123453456784008666456", kind: "eid" },
          { id: "78425989148000000840", kind: "iccid" },
        ],
      },
    ],
    accountName: "1223334444-00001",
    smsrOid: "1.3.6.1.4.1.31746.1.500.200.101.5",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.eUiccDeviceProfileManagement.downloadLocalProfileToDisable(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[EUiccDeviceProfileManagement.DownloadLocalProfileToDisableError](src/resources/euicc-device-profile-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eUiccDeviceProfileManagement.downloadLocalProfileToDisable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, EUiccDeviceProfileManagement.DownloadLocalProfileToDisableError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eUiccDeviceProfileManagement.downloadLocalProfileToEnable({
    body: {
      devices: [
        {
          deviceIds: [
            { id: "678912789123453456784008666456", kind: "eid" },
            { id: "78425989148000000840", kind: "iccid" },
          ],
        },
      ],
      accountName: "1223334444-00001",
      smsrOid: "1.3.6.1.4.1.31746.1.500.200.101.5",
    },
  });
  // TODO: Handle 'response' of type DeviceManagementResult
} catch (err) {
  // TODO: Handle 'err' of type EUiccDeviceProfileManagement.DownloadLocalProfileToEnableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.eUiccDeviceProfileManagement.downloadLocalProfileToEnable({
  body: {
    devices: [
      {
        deviceIds: [
          { id: "678912789123453456784008666456", kind: "eid" },
          { id: "78425989148000000840", kind: "iccid" },
        ],
      },
    ],
    accountName: "1223334444-00001",
    smsrOid: "1.3.6.1.4.1.31746.1.500.200.101.5",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceManagementResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.eUiccDeviceProfileManagement.downloadLocalProfileToEnable(request)`

- **OnSuccess**: <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: throws <code>[EUiccDeviceProfileManagement.DownloadLocalProfileToEnableError](src/resources/euicc-device-profile-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eUiccDeviceProfileManagement.downloadLocalProfileToEnable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceManagementResult, EUiccDeviceProfileManagement.DownloadLocalProfileToEnableError&gt;</code>, with `result.value` of type <code>[DeviceManagementResult](src/models/device-management-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.eUiccDeviceProfileManagement.enableLocalProfile({
    body: {
      devices: [
        {
          deviceIds: [
            { id: "678912789123453456784008666456", kind: "eid" },
            { id: "78425989148000000840", kind: "iccid" },
          ],
        },
      ],
      accountName: "1223334444-00001",
      smsrOid: "1.3.6.1.4.1.31746.1.500.200.101.5",
    },
  });
  // TODO: Handle 'response' of type RequestResponse
} catch (err) {
  // TODO: Handle 'err' of type EUiccDeviceProfileManagement.EnableLocalProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.eUiccDeviceProfileManagement.enableLocalProfile({
  body: {
    devices: [
      {
        deviceIds: [
          { id: "678912789123453456784008666456", kind: "eid" },
          { id: "78425989148000000840", kind: "iccid" },
        ],
      },
    ],
    accountName: "1223334444-00001",
    smsrOid: "1.3.6.1.4.1.31746.1.500.200.101.5",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.eUiccDeviceProfileManagement.enableLocalProfile(request)`

- **OnSuccess**: <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: throws <code>[EUiccDeviceProfileManagement.EnableLocalProfileError](src/resources/euicc-device-profile-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.eUiccDeviceProfileManagement.enableLocalProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RequestResponse, EUiccDeviceProfileManagement.EnableLocalProfileError&gt;</code>, with `result.value` of type <code>[RequestResponse](src/models/request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.devicesLocations.cancelQueuedLocationReportGeneration({
    accountName: "0252012345-00001",
    txid: "2c90bd28-eeee-ffff-gggg-7e3bd4fbff33",
  });
  // TODO: Handle 'response' of type TransactionId
} catch (err) {
  // TODO: Handle 'err' of type DevicesLocations.CancelQueuedLocationReportGenerationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.devicesLocations.cancelQueuedLocationReportGeneration({
  accountName: "0252012345-00001",
  txid: "2c90bd28-eeee-ffff-gggg-7e3bd4fbff33",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionId
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.devicesLocations.cancelQueuedLocationReportGeneration(request)`

- **OnSuccess**: <code>[TransactionId](src/models/transaction-id.ts)</code>
- **OnError**: throws <code>[DevicesLocations.CancelQueuedLocationReportGenerationError](src/resources/devices-locations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.devicesLocations.cancelQueuedLocationReportGeneration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionId, DevicesLocations.CancelQueuedLocationReportGenerationError&gt;</code>, with `result.value` of type <code>[TransactionId](src/models/transaction-id.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.devicesLocations.createLocationReport();
  // TODO: Handle 'response' of type AsynchronousLocationRequestResult
} catch (err) {
  // TODO: Handle 'err' of type DevicesLocations.CreateLocationReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.devicesLocations.createLocationReport().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AsynchronousLocationRequestResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.devicesLocations.createLocationReport()`

- **OnSuccess**: <code>[AsynchronousLocationRequestResult](src/models/asynchronous-location-request-result.ts)</code>
- **OnError**: throws <code>[DevicesLocations.CreateLocationReportError](src/resources/devices-locations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.devicesLocations.createLocationReport().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AsynchronousLocationRequestResult, DevicesLocations.CreateLocationReportError&gt;</code>, with `result.value` of type <code>[AsynchronousLocationRequestResult](src/models/asynchronous-location-request-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.devicesLocations.getLocationReportStatus({
    accountName: "0252012345-00001",
    txid: "2c90bd28-eeee-ffff-gggg-7e3bd4fbff33",
  });
  // TODO: Handle 'response' of type LocationReportStatus
} catch (err) {
  // TODO: Handle 'err' of type DevicesLocations.GetLocationReportStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.devicesLocations.getLocationReportStatus({
  accountName: "0252012345-00001",
  txid: "2c90bd28-eeee-ffff-gggg-7e3bd4fbff33",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LocationReportStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.devicesLocations.getLocationReportStatus(request)`

- **OnSuccess**: <code>[LocationReportStatus](src/models/location-report-status.ts)</code>
- **OnError**: throws <code>[DevicesLocations.GetLocationReportStatusError](src/resources/devices-locations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.devicesLocations.getLocationReportStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LocationReportStatus, DevicesLocations.GetLocationReportStatusError&gt;</code>, with `result.value` of type <code>[LocationReportStatus](src/models/location-report-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.devicesLocations.listDevicesLocationsAsynchronous();
  // TODO: Handle 'response' of type SynchronousLocationRequestResult
} catch (err) {
  // TODO: Handle 'err' of type DevicesLocations.ListDevicesLocationsAsynchronousError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.devicesLocations.listDevicesLocationsAsynchronous().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SynchronousLocationRequestResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.devicesLocations.listDevicesLocationsAsynchronous()`

- **OnSuccess**: <code>[SynchronousLocationRequestResult](src/models/synchronous-location-request-result.ts)</code>
- **OnError**: throws <code>[DevicesLocations.ListDevicesLocationsAsynchronousError](src/resources/devices-locations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.devicesLocations.listDevicesLocationsAsynchronous().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SynchronousLocationRequestResult, DevicesLocations.ListDevicesLocationsAsynchronousError&gt;</code>, with `result.value` of type <code>[SynchronousLocationRequestResult](src/models/synchronous-location-request-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.devicesLocations.listDevicesLocationsSynchronous({
    body: {
      accountName: "1234567890-00001",
      deviceList: [
        { id: "980003420535573", kind: "imei", mdn: "7892345678" },
        { id: "375535024300089", kind: "imei", mdn: "7897654321" },
      ],
      accuracyMode: AccuracyMode._0,
      cacheMode: CacheMode._1,
    },
  });
  // TODO: Handle 'response' of type Location[]
} catch (err) {
  // TODO: Handle 'err' of type DevicesLocations.ListDevicesLocationsSynchronousError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.devicesLocations.listDevicesLocationsSynchronous({
  body: {
    accountName: "1234567890-00001",
    deviceList: [
      { id: "980003420535573", kind: "imei", mdn: "7892345678" },
      { id: "375535024300089", kind: "imei", mdn: "7897654321" },
    ],
    accuracyMode: AccuracyMode._0,
    cacheMode: CacheMode._1,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Location[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.devicesLocations.listDevicesLocationsSynchronous(request)`

- **OnSuccess**: <code>[Location](src/models/location.ts)[]</code>
- **OnError**: throws <code>[DevicesLocations.ListDevicesLocationsSynchronousError](src/resources/devices-locations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.devicesLocations.listDevicesLocationsSynchronous(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Location[], DevicesLocations.ListDevicesLocationsSynchronousError&gt;</code>, with `result.value` of type <code>[Location](src/models/location.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.devicesLocations.retrieveLocationReport({
    accountName: "0000123456-00001",
    txid: "2017-12-11Te8b47da2-eeee-ffff-gggg-61815e1e97e9",
    startindex: 0,
  });
  // TODO: Handle 'response' of type LocationReport
} catch (err) {
  // TODO: Handle 'err' of type DevicesLocations.RetrieveLocationReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.devicesLocations.retrieveLocationReport({
  accountName: "0000123456-00001",
  txid: "2017-12-11Te8b47da2-eeee-ffff-gggg-61815e1e97e9",
  startindex: 0,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LocationReport
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.devicesLocations.retrieveLocationReport(request)`

- **OnSuccess**: <code>[LocationReport](src/models/location-report.ts)</code>
- **OnError**: throws <code>[DevicesLocations.RetrieveLocationReportError](src/resources/devices-locations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.devicesLocations.retrieveLocationReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LocationReport, DevicesLocations.RetrieveLocationReportError&gt;</code>, with `result.value` of type <code>[LocationReport](src/models/location-report.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exclusions.devicesLocationGetConsentAsync({
    accountName: "0000123456-00001",
    deviceId: "900000000000009",
  });
  // TODO: Handle 'response' of type GetAccountDeviceConsent
} catch (err) {
  // TODO: Handle 'err' of type Exclusions.DevicesLocationGetConsentAsyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exclusions.devicesLocationGetConsentAsync({
  accountName: "0000123456-00001",
  deviceId: "900000000000009",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetAccountDeviceConsent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.exclusions.devicesLocationGetConsentAsync(request)`

- **OnSuccess**: <code>[GetAccountDeviceConsent](src/models/get-account-device-consent.ts)</code>
- **OnError**: throws <code>[Exclusions.DevicesLocationGetConsentAsyncError](src/resources/exclusions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exclusions.devicesLocationGetConsentAsync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetAccountDeviceConsent, Exclusions.DevicesLocationGetConsentAsyncError&gt;</code>, with `result.value` of type <code>[GetAccountDeviceConsent](src/models/get-account-device-consent.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exclusions.devicesLocationGiveConsentAsync();
  // TODO: Handle 'response' of type ConsentTransactionId
} catch (err) {
  // TODO: Handle 'err' of type Exclusions.DevicesLocationGiveConsentAsyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exclusions.devicesLocationGiveConsentAsync().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConsentTransactionId
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.exclusions.devicesLocationGiveConsentAsync(request)`

- **OnSuccess**: <code>[ConsentTransactionId](src/models/consent-transaction-id.ts)</code>
- **OnError**: throws <code>[Exclusions.DevicesLocationGiveConsentAsyncError](src/resources/exclusions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exclusions.devicesLocationGiveConsentAsync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConsentTransactionId, Exclusions.DevicesLocationGiveConsentAsyncError&gt;</code>, with `result.value` of type <code>[ConsentTransactionId](src/models/consent-transaction-id.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exclusions.devicesLocationUpdateConsent();
  // TODO: Handle 'response' of type ConsentTransactionId
} catch (err) {
  // TODO: Handle 'err' of type Exclusions.DevicesLocationUpdateConsentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exclusions.devicesLocationUpdateConsent().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConsentTransactionId
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.exclusions.devicesLocationUpdateConsent(request)`

- **OnSuccess**: <code>[ConsentTransactionId](src/models/consent-transaction-id.ts)</code>
- **OnError**: throws <code>[Exclusions.DevicesLocationUpdateConsentError](src/resources/exclusions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exclusions.devicesLocationUpdateConsent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConsentTransactionId, Exclusions.DevicesLocationUpdateConsentError&gt;</code>, with `result.value` of type <code>[ConsentTransactionId](src/models/consent-transaction-id.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exclusions.excludeDevices();
  // TODO: Handle 'response' of type DeviceLocationSuccessResult
} catch (err) {
  // TODO: Handle 'err' of type Exclusions.ExcludeDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exclusions.excludeDevices().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceLocationSuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exclusions.excludeDevices()`

- **OnSuccess**: <code>[DeviceLocationSuccessResult](src/models/device-location-success-result.ts)</code>
- **OnError**: throws <code>[Exclusions.ExcludeDevicesError](src/resources/exclusions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exclusions.excludeDevices().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceLocationSuccessResult, Exclusions.ExcludeDevicesError&gt;</code>, with `result.value` of type <code>[DeviceLocationSuccessResult](src/models/device-location-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exclusions.listExcludedDevices({
    accountName: "0252012345-00001",
    startIndex: "0",
  });
  // TODO: Handle 'response' of type DevicesConsentResult
} catch (err) {
  // TODO: Handle 'err' of type Exclusions.ListExcludedDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exclusions.listExcludedDevices({
  accountName: "0252012345-00001",
  startIndex: "0",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DevicesConsentResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.exclusions.listExcludedDevices(request)`

- **OnSuccess**: <code>[DevicesConsentResult](src/models/devices-consent-result.ts)</code>
- **OnError**: throws <code>[Exclusions.ListExcludedDevicesError](src/resources/exclusions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exclusions.listExcludedDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DevicesConsentResult, Exclusions.ListExcludedDevicesError&gt;</code>, with `result.value` of type <code>[DevicesConsentResult](src/models/devices-consent-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.exclusions.removeDevicesFromExclusionList({
    accountName: "0000123456-00001",
    deviceList: "IMEI",
  });
  // TODO: Handle 'response' of type DeviceLocationSuccessResult
} catch (err) {
  // TODO: Handle 'err' of type Exclusions.RemoveDevicesFromExclusionListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exclusions.removeDevicesFromExclusionList({
  accountName: "0000123456-00001",
  deviceList: "IMEI",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceLocationSuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.exclusions.removeDevicesFromExclusionList(request)`

- **OnSuccess**: <code>[DeviceLocationSuccessResult](src/models/device-location-success-result.ts)</code>
- **OnError**: throws <code>[Exclusions.RemoveDevicesFromExclusionListError](src/resources/exclusions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exclusions.removeDevicesFromExclusionList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceLocationSuccessResult, Exclusions.RemoveDevicesFromExclusionListError&gt;</code>, with `result.value` of type <code>[DeviceLocationSuccessResult](src/models/device-location-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.devicesLocationSubscriptions.getLocationServiceSubscriptionStatus({
    accountName: "0000123456-00001",
  });
  // TODO: Handle 'response' of type DeviceLocationSubscription
} catch (err) {
  // TODO: Handle 'err' of type DevicesLocationSubscriptions.GetLocationServiceSubscriptionStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.devicesLocationSubscriptions.getLocationServiceSubscriptionStatus({
  accountName: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceLocationSubscription
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.devicesLocationSubscriptions.getLocationServiceSubscriptionStatus(request)`

- **OnSuccess**: <code>[DeviceLocationSubscription](src/models/device-location-subscription.ts)</code>
- **OnError**: throws <code>[DevicesLocationSubscriptions.GetLocationServiceSubscriptionStatusError](src/resources/devices-location-subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.devicesLocationSubscriptions.getLocationServiceSubscriptionStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceLocationSubscription, DevicesLocationSubscriptions.GetLocationServiceSubscriptionStatusError&gt;</code>, with `result.value` of type <code>[DeviceLocationSubscription](src/models/device-location-subscription.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.devicesLocationSubscriptions.getLocationServiceUsage();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type DevicesLocationSubscriptions.GetLocationServiceUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.devicesLocationSubscriptions.getLocationServiceUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.devicesLocationSubscriptions.getLocationServiceUsage()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[DevicesLocationSubscriptions.GetLocationServiceUsageError](src/resources/devices-location-subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.devicesLocationSubscriptions.getLocationServiceUsage().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, DevicesLocationSubscriptions.GetLocationServiceUsageError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceLocationCallbacks.cancelAsyncReport({
    txid: "2c90bd28-eeee-ffff-gggg-7e3bd4fbff33",
    accountName: "0000123456-00001",
  });
  // TODO: Handle 'response' of type TransactionId
} catch (err) {
  // TODO: Handle 'err' of type DeviceLocationCallbacks.CancelAsyncReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceLocationCallbacks.cancelAsyncReport({
  txid: "2c90bd28-eeee-ffff-gggg-7e3bd4fbff33",
  accountName: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionId
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceLocationCallbacks.cancelAsyncReport(request)`

- **OnSuccess**: <code>[TransactionId](src/models/transaction-id.ts)</code>
- **OnError**: throws <code>[DeviceLocationCallbacks.CancelAsyncReportError](src/resources/device-location-callbacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceLocationCallbacks.cancelAsyncReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionId, DeviceLocationCallbacks.CancelAsyncReportError&gt;</code>, with `result.value` of type <code>[TransactionId](src/models/transaction-id.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceLocationCallbacks.deregisterCallback2({
    accountName: "0000123456-00001",
    service: CallbackServiceName.Location,
  });
  // TODO: Handle 'response' of type DeviceLocationSuccessResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceLocationCallbacks.DeregisterCallback2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceLocationCallbacks.deregisterCallback2({
  accountName: "0000123456-00001",
  service: CallbackServiceName.Location,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceLocationSuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceLocationCallbacks.deregisterCallback2(request)`

- **OnSuccess**: <code>[DeviceLocationSuccessResult](src/models/device-location-success-result.ts)</code>
- **OnError**: throws <code>[DeviceLocationCallbacks.DeregisterCallback2Error](src/resources/device-location-callbacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceLocationCallbacks.deregisterCallback2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceLocationSuccessResult, DeviceLocationCallbacks.DeregisterCallback2Error&gt;</code>, with `result.value` of type <code>[DeviceLocationSuccessResult](src/models/device-location-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceLocationCallbacks.listRegisteredCallbacks2({
    accountName: "0000123456-00001",
  });
  // TODO: Handle 'response' of type DeviceLocationCallback[]
} catch (err) {
  // TODO: Handle 'err' of type DeviceLocationCallbacks.ListRegisteredCallbacks2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceLocationCallbacks.listRegisteredCallbacks2({
  accountName: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceLocationCallback[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceLocationCallbacks.listRegisteredCallbacks2(request)`

- **OnSuccess**: <code>[DeviceLocationCallback](src/models/device-location-callback.ts)[]</code>
- **OnError**: throws <code>[DeviceLocationCallbacks.ListRegisteredCallbacks2Error](src/resources/device-location-callbacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceLocationCallbacks.listRegisteredCallbacks2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceLocationCallback[], DeviceLocationCallbacks.ListRegisteredCallbacks2Error&gt;</code>, with `result.value` of type <code>[DeviceLocationCallback](src/models/device-location-callback.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceLocationCallbacks.registerCallback2({
    accountName: "0000123456-00001",
  });
  // TODO: Handle 'response' of type CallbackRegistrationResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceLocationCallbacks.RegisterCallback2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceLocationCallbacks.registerCallback2({
  accountName: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CallbackRegistrationResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceLocationCallbacks.registerCallback2(request)`

- **OnSuccess**: <code>[CallbackRegistrationResult](src/models/callback-registration-result.ts)</code>
- **OnError**: throws <code>[DeviceLocationCallbacks.RegisterCallback2Error](src/resources/device-location-callbacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceLocationCallbacks.registerCallback2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CallbackRegistrationResult, DeviceLocationCallbacks.RegisterCallback2Error&gt;</code>, with `result.value` of type <code>[CallbackRegistrationResult](src/models/callback-registration-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usageTriggerManagement.createNewTrigger({
    body: {
      triggerName: "95% usage alert",
      accountName: "0212312345-00001",
      serviceName: ServiceName.Location,
      thresholdValue: "95",
      allowExcess: true,
      sendSmsNotification: true,
      smsPhoneNumbers: "5551231234",
      sendEmailNotification: true,
      emailAddresses: "you@theinternet.com",
    },
  });
  // TODO: Handle 'response' of type UsageTriggerResponse
} catch (err) {
  // TODO: Handle 'err' of type UsageTriggerManagement.CreateNewTriggerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usageTriggerManagement.createNewTrigger({
  body: {
    triggerName: "95% usage alert",
    accountName: "0212312345-00001",
    serviceName: ServiceName.Location,
    thresholdValue: "95",
    allowExcess: true,
    sendSmsNotification: true,
    smsPhoneNumbers: "5551231234",
    sendEmailNotification: true,
    emailAddresses: "you@theinternet.com",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsageTriggerResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.usageTriggerManagement.createNewTrigger(request)`

- **OnSuccess**: <code>[UsageTriggerResponse](src/models/usage-trigger-response.ts)</code>
- **OnError**: throws <code>[UsageTriggerManagement.CreateNewTriggerError](src/resources/usage-trigger-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usageTriggerManagement.createNewTrigger(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsageTriggerResponse, UsageTriggerManagement.CreateNewTriggerError&gt;</code>, with `result.value` of type <code>[UsageTriggerResponse](src/models/usage-trigger-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usageTriggerManagement.deleteTrigger({
    accountName: "0212312345-00001",
    triggerId: "595f5c44-c31c-4552-8670-020a1545a84d",
  });
  // TODO: Handle 'response' of type DeviceLocationSuccessResult
} catch (err) {
  // TODO: Handle 'err' of type UsageTriggerManagement.DeleteTriggerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usageTriggerManagement.deleteTrigger({
  accountName: "0212312345-00001",
  triggerId: "595f5c44-c31c-4552-8670-020a1545a84d",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceLocationSuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.usageTriggerManagement.deleteTrigger(request)`

- **OnSuccess**: <code>[DeviceLocationSuccessResult](src/models/device-location-success-result.ts)</code>
- **OnError**: throws <code>[UsageTriggerManagement.DeleteTriggerError](src/resources/usage-trigger-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usageTriggerManagement.deleteTrigger(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceLocationSuccessResult, UsageTriggerManagement.DeleteTriggerError&gt;</code>, with `result.value` of type <code>[DeviceLocationSuccessResult](src/models/device-location-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usageTriggerManagement.updateTrigger({
    triggerId: "595f5c44-c31c-4552-8670-020a1545a84d",
    body: { accountName: "1000012345-00001", thresholdValue: "95" },
  });
  // TODO: Handle 'response' of type UsageTriggerResponse
} catch (err) {
  // TODO: Handle 'err' of type UsageTriggerManagement.UpdateTriggerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usageTriggerManagement.updateTrigger({
  triggerId: "595f5c44-c31c-4552-8670-020a1545a84d",
  body: { accountName: "1000012345-00001", thresholdValue: "95" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsageTriggerResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.usageTriggerManagement.updateTrigger(request)`

- **OnSuccess**: <code>[UsageTriggerResponse](src/models/usage-trigger-response.ts)</code>
- **OnError**: throws <code>[UsageTriggerManagement.UpdateTriggerError](src/resources/usage-trigger-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usageTriggerManagement.updateTrigger(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsageTriggerResponse, UsageTriggerManagement.UpdateTriggerError&gt;</code>, with `result.value` of type <code>[UsageTriggerResponse](src/models/usage-trigger-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.addAccount({
    body: {
      accountName: "1234567890-00001",
      serviceName: ServiceName.Location,
      type: "TS-LOC-COARSE-CellID-Aggr",
      managedAccList: ["1223334444-00001", "2334445555-00001", "3445556666-00001"],
    },
  });
  // TODO: Handle 'response' of type ManagedAccountsAddResponse
} catch (err) {
  // TODO: Handle 'err' of type Billing.AddAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billing.addAccount({
  body: {
    accountName: "1234567890-00001",
    serviceName: ServiceName.Location,
    type: "TS-LOC-COARSE-CellID-Aggr",
    managedAccList: ["1223334444-00001", "2334445555-00001", "3445556666-00001"],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ManagedAccountsAddResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.billing.addAccount(request)`

- **OnSuccess**: <code>[ManagedAccountsAddResponse](src/models/managed-accounts-add-response.ts)</code>
- **OnError**: throws <code>[Billing.AddAccountError](src/resources/billing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billing.addAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ManagedAccountsAddResponse, Billing.AddAccountError&gt;</code>, with `result.value` of type <code>[ManagedAccountsAddResponse](src/models/managed-accounts-add-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.cancelManagedAccountAction({
    body: {
      accountName: "1223334444-00001",
      paccountName: "1234567890-00001",
      serviceName: ServiceName.Location,
      type: "TS-LOC-COARSE-CellID-5K",
      txid: "d4fbff33-eeee-ffff-gggg-2c90bd287e3b",
    },
  });
  // TODO: Handle 'response' of type ManagedAccountCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type Billing.CancelManagedAccountActionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billing.cancelManagedAccountAction({
  body: {
    accountName: "1223334444-00001",
    paccountName: "1234567890-00001",
    serviceName: ServiceName.Location,
    type: "TS-LOC-COARSE-CellID-5K",
    txid: "d4fbff33-eeee-ffff-gggg-2c90bd287e3b",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ManagedAccountCancelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.billing.cancelManagedAccountAction(request)`

- **OnSuccess**: <code>[ManagedAccountCancelResponse](src/models/managed-account-cancel-response.ts)</code>
- **OnError**: throws <code>[Billing.CancelManagedAccountActionError](src/resources/billing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billing.cancelManagedAccountAction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ManagedAccountCancelResponse, Billing.CancelManagedAccountActionError&gt;</code>, with `result.value` of type <code>[ManagedAccountCancelResponse](src/models/managed-account-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.listManagedAccount({
    accountName: "1223334444-00001",
    serviceName: "some example string",
  });
  // TODO: Handle 'response' of type ManagedAccountsGetAllResponse
} catch (err) {
  // TODO: Handle 'err' of type Billing.ListManagedAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billing.listManagedAccount({
  accountName: "1223334444-00001",
  serviceName: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ManagedAccountsGetAllResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.billing.listManagedAccount(request)`

- **OnSuccess**: <code>[ManagedAccountsGetAllResponse](src/models/managed-accounts-get-all-response.ts)</code>
- **OnError**: throws <code>[Billing.ListManagedAccountError](src/resources/billing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billing.listManagedAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ManagedAccountsGetAllResponse, Billing.ListManagedAccountError&gt;</code>, with `result.value` of type <code>[ManagedAccountsGetAllResponse](src/models/managed-accounts-get-all-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.billing.managedAccountAction({
    body: {
      accountName: "1223334444-00001",
      paccountName: "1234567890-00001",
      serviceName: ServiceName.Location,
      type: "TS-LOC-COARSE-CellID-5K",
      txid: "d4fbff33-eeee-ffff-gggg-2c90bd287e3b",
    },
  });
  // TODO: Handle 'response' of type ManagedAccountsProvisionResponse
} catch (err) {
  // TODO: Handle 'err' of type Billing.ManagedAccountActionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.billing.managedAccountAction({
  body: {
    accountName: "1223334444-00001",
    paccountName: "1234567890-00001",
    serviceName: ServiceName.Location,
    type: "TS-LOC-COARSE-CellID-5K",
    txid: "d4fbff33-eeee-ffff-gggg-2c90bd287e3b",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ManagedAccountsProvisionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.billing.managedAccountAction(request)`

- **OnSuccess**: <code>[ManagedAccountsProvisionResponse](src/models/managed-accounts-provision-response.ts)</code>
- **OnError**: throws <code>[Billing.ManagedAccountActionError](src/resources/billing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.billing.managedAccountAction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ManagedAccountsProvisionResponse, Billing.ManagedAccountActionError&gt;</code>, with `result.value` of type <code>[ManagedAccountsProvisionResponse](src/models/managed-accounts-provision-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementSubscriptionsV1.getAccountLicenseStatus({
    account: "0402196254-00001",
    startIndex: "0",
  });
  // TODO: Handle 'response' of type AccountLicenseInfo
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementSubscriptionsV1.GetAccountLicenseStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementSubscriptionsV1.getAccountLicenseStatus({
  account: "0402196254-00001",
  startIndex: "0",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountLicenseInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementSubscriptionsV1.getAccountLicenseStatus(request)`

- **OnSuccess**: <code>[AccountLicenseInfo](src/models/account-license-info.ts)</code>
- **OnError**: throws <code>[SoftwareManagementSubscriptionsV1.GetAccountLicenseStatusError](src/resources/software-management-subscriptions-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementSubscriptionsV1.getAccountLicenseStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountLicenseInfo, SoftwareManagementSubscriptionsV1.GetAccountLicenseStatusError&gt;</code>, with `result.value` of type <code>[AccountLicenseInfo](src/models/account-license-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementSubscriptionsV1.getAccountSubscriptionStatus({
    account: "0402196254-00001",
  });
  // TODO: Handle 'response' of type V1AccountSubscription
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementSubscriptionsV1.GetAccountSubscriptionStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementSubscriptionsV1.getAccountSubscriptionStatus({
  account: "0402196254-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1AccountSubscription
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementSubscriptionsV1.getAccountSubscriptionStatus(request)`

- **OnSuccess**: <code>[V1AccountSubscription](src/models/v1-account-subscription.ts)</code>
- **OnError**: throws <code>[SoftwareManagementSubscriptionsV1.GetAccountSubscriptionStatusError](src/resources/software-management-subscriptions-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementSubscriptionsV1.getAccountSubscriptionStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1AccountSubscription, SoftwareManagementSubscriptionsV1.GetAccountSubscriptionStatusError&gt;</code>, with `result.value` of type <code>[V1AccountSubscription](src/models/v1-account-subscription.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV1.assignLicensesToDevices({
    account: "0242078689-00001",
    body: { deviceList: ["990003425730535", "990000473475989"] },
  });
  // TODO: Handle 'response' of type V1LicensesAssignedRemovedResult
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementLicensesV1.AssignLicensesToDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementLicensesV1.assignLicensesToDevices({
  account: "0242078689-00001",
  body: { deviceList: ["990003425730535", "990000473475989"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1LicensesAssignedRemovedResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementLicensesV1.assignLicensesToDevices(request)`

- **OnSuccess**: <code>[V1LicensesAssignedRemovedResult](src/models/v1-licenses-assigned-removed-result.ts)</code>
- **OnError**: throws <code>[SoftwareManagementLicensesV1.AssignLicensesToDevicesError](src/resources/software-management-licenses-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementLicensesV1.assignLicensesToDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1LicensesAssignedRemovedResult, SoftwareManagementLicensesV1.AssignLicensesToDevicesError&gt;</code>, with `result.value` of type <code>[V1LicensesAssignedRemovedResult](src/models/v1-licenses-assigned-removed-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV1.createListOfLicensesToRemove({
    account: "0242078689-00001",
    body: { type: "append", deviceList: ["990003425730535", "990000473475989"] },
  });
  // TODO: Handle 'response' of type V1ListOfLicensesToRemoveResult
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementLicensesV1.CreateListOfLicensesToRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementLicensesV1.createListOfLicensesToRemove({
  account: "0242078689-00001",
  body: { type: "append", deviceList: ["990003425730535", "990000473475989"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ListOfLicensesToRemoveResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementLicensesV1.createListOfLicensesToRemove(request)`

- **OnSuccess**: <code>[V1ListOfLicensesToRemoveResult](src/models/v1-list-of-licenses-to-remove-result.ts)</code>
- **OnError**: throws <code>[SoftwareManagementLicensesV1.CreateListOfLicensesToRemoveError](src/resources/software-management-licenses-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementLicensesV1.createListOfLicensesToRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ListOfLicensesToRemoveResult, SoftwareManagementLicensesV1.CreateListOfLicensesToRemoveError&gt;</code>, with `result.value` of type <code>[V1ListOfLicensesToRemoveResult](src/models/v1-list-of-licenses-to-remove-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.softwareManagementLicensesV1.deleteListOfLicensesToRemove({ account: "0242078689-00001" });
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementLicensesV1.DeleteListOfLicensesToRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementLicensesV1.deleteListOfLicensesToRemove({
  account: "0242078689-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementLicensesV1.deleteListOfLicensesToRemove(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SoftwareManagementLicensesV1.DeleteListOfLicensesToRemoveError](src/resources/software-management-licenses-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementLicensesV1.deleteListOfLicensesToRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SoftwareManagementLicensesV1.DeleteListOfLicensesToRemoveError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV1.listLicensesToRemove({
    account: "0242078689-00001",
    startIndex: "some example string",
  });
  // TODO: Handle 'response' of type V1ListOfLicensesToRemove
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementLicensesV1.ListLicensesToRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementLicensesV1.listLicensesToRemove({
  account: "0242078689-00001",
  startIndex: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ListOfLicensesToRemove
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementLicensesV1.listLicensesToRemove(request)`

- **OnSuccess**: <code>[V1ListOfLicensesToRemove](src/models/v1-list-of-licenses-to-remove.ts)</code>
- **OnError**: throws <code>[SoftwareManagementLicensesV1.ListLicensesToRemoveError](src/resources/software-management-licenses-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementLicensesV1.listLicensesToRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ListOfLicensesToRemove, SoftwareManagementLicensesV1.ListLicensesToRemoveError&gt;</code>, with `result.value` of type <code>[V1ListOfLicensesToRemove](src/models/v1-list-of-licenses-to-remove.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV1.removeLicensesFromDevices({
    account: "0242078689-00001",
    body: { deviceList: ["900000000000001", "900000000000998", "900000000000999"] },
  });
  // TODO: Handle 'response' of type V1LicensesAssignedRemovedResult
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementLicensesV1.RemoveLicensesFromDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementLicensesV1.removeLicensesFromDevices({
  account: "0242078689-00001",
  body: { deviceList: ["900000000000001", "900000000000998", "900000000000999"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1LicensesAssignedRemovedResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementLicensesV1.removeLicensesFromDevices(request)`

- **OnSuccess**: <code>[V1LicensesAssignedRemovedResult](src/models/v1-licenses-assigned-removed-result.ts)</code>
- **OnError**: throws <code>[SoftwareManagementLicensesV1.RemoveLicensesFromDevicesError](src/resources/software-management-licenses-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementLicensesV1.removeLicensesFromDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1LicensesAssignedRemovedResult, SoftwareManagementLicensesV1.RemoveLicensesFromDevicesError&gt;</code>, with `result.value` of type <code>[V1LicensesAssignedRemovedResult](src/models/v1-licenses-assigned-removed-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.firmwareV1.cancelScheduledFirmwareUpgrade({
    accountName: "0242078689-00001",
    upgradeId: "e3a8d88a-04c6-4ef3-b039-89b62f91e962",
  });
  // TODO: Handle 'response' of type FotaV1SuccessResult
} catch (err) {
  // TODO: Handle 'err' of type FirmwareV1.CancelScheduledFirmwareUpgradeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.firmwareV1.cancelScheduledFirmwareUpgrade({
  accountName: "0242078689-00001",
  upgradeId: "e3a8d88a-04c6-4ef3-b039-89b62f91e962",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FotaV1SuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.firmwareV1.cancelScheduledFirmwareUpgrade(request)`

- **OnSuccess**: <code>[FotaV1SuccessResult](src/models/fota-v1-success-result.ts)</code>
- **OnError**: throws <code>[FirmwareV1.CancelScheduledFirmwareUpgradeError](src/resources/firmware-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.firmwareV1.cancelScheduledFirmwareUpgrade(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FotaV1SuccessResult, FirmwareV1.CancelScheduledFirmwareUpgradeError&gt;</code>, with `result.value` of type <code>[FotaV1SuccessResult](src/models/fota-v1-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.firmwareV1.listAvailableFirmware({ account: "0242078689-00001" });
  // TODO: Handle 'response' of type Firmware[]
} catch (err) {
  // TODO: Handle 'err' of type FirmwareV1.ListAvailableFirmwareError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.firmwareV1.listAvailableFirmware({ account: "0242078689-00001" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Firmware[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.firmwareV1.listAvailableFirmware(request)`

- **OnSuccess**: <code>[Firmware](src/models/firmware.ts)[]</code>
- **OnError**: throws <code>[FirmwareV1.ListAvailableFirmwareError](src/resources/firmware-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.firmwareV1.listAvailableFirmware(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Firmware[], FirmwareV1.ListAvailableFirmwareError&gt;</code>, with `result.value` of type <code>[Firmware](src/models/firmware.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.firmwareV1.listFirmwareUpgradeDetails({
    accountName: "0242078689-00001",
    upgradeId: "e3a8d88a-04c6-4ef3-b039-89b62f91e962",
  });
  // TODO: Handle 'response' of type FirmwareUpgrade
} catch (err) {
  // TODO: Handle 'err' of type FirmwareV1.ListFirmwareUpgradeDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.firmwareV1.listFirmwareUpgradeDetails({
  accountName: "0242078689-00001",
  upgradeId: "e3a8d88a-04c6-4ef3-b039-89b62f91e962",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FirmwareUpgrade
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.firmwareV1.listFirmwareUpgradeDetails(request)`

- **OnSuccess**: <code>[FirmwareUpgrade](src/models/firmware-upgrade.ts)</code>
- **OnError**: throws <code>[FirmwareV1.ListFirmwareUpgradeDetailsError](src/resources/firmware-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.firmwareV1.listFirmwareUpgradeDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FirmwareUpgrade, FirmwareV1.ListFirmwareUpgradeDetailsError&gt;</code>, with `result.value` of type <code>[FirmwareUpgrade](src/models/firmware-upgrade.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.firmwareV1.scheduleFirmwareUpgrade({
    body: {
      accountName: "0402196254-00001",
      firmwareName: "FOTA_Verizon_Model-A_01To02_HF",
      firmwareTo: "VerizonFirmwareVersion-02",
      startDate: "2018-04-01",
      endDate: "2018-04-05",
      deviceList: ["990003425730535", "990000473475989"],
    },
  });
  // TODO: Handle 'response' of type FirmwareUpgrade
} catch (err) {
  // TODO: Handle 'err' of type FirmwareV1.ScheduleFirmwareUpgradeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.firmwareV1.scheduleFirmwareUpgrade({
  body: {
    accountName: "0402196254-00001",
    firmwareName: "FOTA_Verizon_Model-A_01To02_HF",
    firmwareTo: "VerizonFirmwareVersion-02",
    startDate: "2018-04-01",
    endDate: "2018-04-05",
    deviceList: ["990003425730535", "990000473475989"],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FirmwareUpgrade
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.firmwareV1.scheduleFirmwareUpgrade(request)`

- **OnSuccess**: <code>[FirmwareUpgrade](src/models/firmware-upgrade.ts)</code>
- **OnError**: throws <code>[FirmwareV1.ScheduleFirmwareUpgradeError](src/resources/firmware-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.firmwareV1.scheduleFirmwareUpgrade(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FirmwareUpgrade, FirmwareV1.ScheduleFirmwareUpgradeError&gt;</code>, with `result.value` of type <code>[FirmwareUpgrade](src/models/firmware-upgrade.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.firmwareV1.updateFirmwareUpgradeDevices({
    accountName: "0242078689-00001",
    upgradeId: "e3a8d88a-04c6-4ef3-b039-89b62f91e962",
  });
  // TODO: Handle 'response' of type FirmwareUpgradeChangeResult
} catch (err) {
  // TODO: Handle 'err' of type FirmwareV1.UpdateFirmwareUpgradeDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.firmwareV1.updateFirmwareUpgradeDevices({
  accountName: "0242078689-00001",
  upgradeId: "e3a8d88a-04c6-4ef3-b039-89b62f91e962",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FirmwareUpgradeChangeResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.firmwareV1.updateFirmwareUpgradeDevices(request)`

- **OnSuccess**: <code>[FirmwareUpgradeChangeResult](src/models/firmware-upgrade-change-result.ts)</code>
- **OnError**: throws <code>[FirmwareV1.UpdateFirmwareUpgradeDevicesError](src/resources/firmware-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.firmwareV1.updateFirmwareUpgradeDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FirmwareUpgradeChangeResult, FirmwareV1.UpdateFirmwareUpgradeDevicesError&gt;</code>, with `result.value` of type <code>[FirmwareUpgradeChangeResult](src/models/firmware-upgrade-change-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.softwareManagementCallbacksV1.deregisterCallback3({
    account: "0242078689-00001",
    service: CallbackService.Fota,
  });
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementCallbacksV1.DeregisterCallback3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementCallbacksV1.deregisterCallback3({
  account: "0242078689-00001",
  service: CallbackService.Fota,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementCallbacksV1.deregisterCallback3(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SoftwareManagementCallbacksV1.DeregisterCallback3Error](src/resources/software-management-callbacks-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementCallbacksV1.deregisterCallback3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SoftwareManagementCallbacksV1.DeregisterCallback3Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV1.listRegisteredCallbacks3({
    account: "0242078689-00001",
  });
  // TODO: Handle 'response' of type RegisteredCallbacks[]
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementCallbacksV1.ListRegisteredCallbacks3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementCallbacksV1.listRegisteredCallbacks3({
  account: "0242078689-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RegisteredCallbacks[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementCallbacksV1.listRegisteredCallbacks3(request)`

- **OnSuccess**: <code>[RegisteredCallbacks](src/models/registered-callbacks.ts)[]</code>
- **OnError**: throws <code>[SoftwareManagementCallbacksV1.ListRegisteredCallbacks3Error](src/resources/software-management-callbacks-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementCallbacksV1.listRegisteredCallbacks3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RegisteredCallbacks[], SoftwareManagementCallbacksV1.ListRegisteredCallbacks3Error&gt;</code>, with `result.value` of type <code>[RegisteredCallbacks](src/models/registered-callbacks.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV1.registerCallback3({
    account: "0242078689-00001",
    body: { name: "Fota", url: "https://10.120.102.183:50559/CallbackListener/FirmwareServiceMessages.asmx" },
  });
  // TODO: Handle 'response' of type FotaV1CallbackRegistrationResult
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementCallbacksV1.RegisterCallback3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementCallbacksV1.registerCallback3({
  account: "0242078689-00001",
  body: { name: "Fota", url: "https://10.120.102.183:50559/CallbackListener/FirmwareServiceMessages.asmx" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FotaV1CallbackRegistrationResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementCallbacksV1.registerCallback3(request)`

- **OnSuccess**: <code>[FotaV1CallbackRegistrationResult](src/models/fota-v1-callback-registration-result.ts)</code>
- **OnError**: throws <code>[SoftwareManagementCallbacksV1.RegisterCallback3Error](src/resources/software-management-callbacks-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementCallbacksV1.registerCallback3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FotaV1CallbackRegistrationResult, SoftwareManagementCallbacksV1.RegisterCallback3Error&gt;</code>, with `result.value` of type <code>[FotaV1CallbackRegistrationResult](src/models/fota-v1-callback-registration-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV1.getDeviceFirmwareUpgradeHistory({
    account: "0242078689-00001",
    deviceId: "900000000000001",
  });
  // TODO: Handle 'response' of type DeviceUpgradeHistory[]
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementReportsV1.GetDeviceFirmwareUpgradeHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementReportsV1.getDeviceFirmwareUpgradeHistory({
  account: "0242078689-00001",
  deviceId: "900000000000001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceUpgradeHistory[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementReportsV1.getDeviceFirmwareUpgradeHistory(request)`

- **OnSuccess**: <code>[DeviceUpgradeHistory](src/models/device-upgrade-history.ts)[]</code>
- **OnError**: throws <code>[SoftwareManagementReportsV1.GetDeviceFirmwareUpgradeHistoryError](src/resources/software-management-reports-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementReportsV1.getDeviceFirmwareUpgradeHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceUpgradeHistory[], SoftwareManagementReportsV1.GetDeviceFirmwareUpgradeHistoryError&gt;</code>, with `result.value` of type <code>[DeviceUpgradeHistory](src/models/device-upgrade-history.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV1.listAccountDevices({
    account: "0242078689-00001",
    startIndex: "some example string",
  });
  // TODO: Handle 'response' of type DeviceListQueryResult
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementReportsV1.ListAccountDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementReportsV1.listAccountDevices({
  account: "0242078689-00001",
  startIndex: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceListQueryResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementReportsV1.listAccountDevices(request)`

- **OnSuccess**: <code>[DeviceListQueryResult](src/models/device-list-query-result.ts)</code>
- **OnError**: throws <code>[SoftwareManagementReportsV1.ListAccountDevicesError](src/resources/software-management-reports-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementReportsV1.listAccountDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceListQueryResult, SoftwareManagementReportsV1.ListAccountDevicesError&gt;</code>, with `result.value` of type <code>[DeviceListQueryResult](src/models/device-list-query-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV1.listUpgradesForSpecifiedStatus({
    account: "0242078689-00001",
    upgradeStatus: UpgradeStatus.RequestPending,
    startIndex: "some example string",
  });
  // TODO: Handle 'response' of type UpgradeListQueryResult
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementReportsV1.ListUpgradesForSpecifiedStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementReportsV1.listUpgradesForSpecifiedStatus({
  account: "0242078689-00001",
  upgradeStatus: UpgradeStatus.RequestPending,
  startIndex: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpgradeListQueryResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementReportsV1.listUpgradesForSpecifiedStatus(request)`

- **OnSuccess**: <code>[UpgradeListQueryResult](src/models/upgrade-list-query-result.ts)</code>
- **OnError**: throws <code>[SoftwareManagementReportsV1.ListUpgradesForSpecifiedStatusError](src/resources/software-management-reports-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementReportsV1.listUpgradesForSpecifiedStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpgradeListQueryResult, SoftwareManagementReportsV1.ListUpgradesForSpecifiedStatusError&gt;</code>, with `result.value` of type <code>[UpgradeListQueryResult](src/models/upgrade-list-query-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementSubscriptionsV2.getAccountSubscriptionStatus2({
    account: "0000123456-00001",
  });
  // TODO: Handle 'response' of type FotaV2Subscription
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementSubscriptionsV2.GetAccountSubscriptionStatus2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementSubscriptionsV2.getAccountSubscriptionStatus2({
  account: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FotaV2Subscription
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementSubscriptionsV2.getAccountSubscriptionStatus2(request)`

- **OnSuccess**: <code>[FotaV2Subscription](src/models/fota-v2-subscription.ts)</code>
- **OnError**: throws <code>[SoftwareManagementSubscriptionsV2.GetAccountSubscriptionStatus2Error](src/resources/software-management-subscriptions-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementSubscriptionsV2.getAccountSubscriptionStatus2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FotaV2Subscription, SoftwareManagementSubscriptionsV2.GetAccountSubscriptionStatus2Error&gt;</code>, with `result.value` of type <code>[FotaV2Subscription](src/models/fota-v2-subscription.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV2.assignLicensesToDevices2({
    account: "0242078689-00001",
  });
  // TODO: Handle 'response' of type V2LicensesAssignedRemovedResult
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementLicensesV2.AssignLicensesToDevices2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementLicensesV2.assignLicensesToDevices2({
  account: "0242078689-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2LicensesAssignedRemovedResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementLicensesV2.assignLicensesToDevices2(request)`

- **OnSuccess**: <code>[V2LicensesAssignedRemovedResult](src/models/v2-licenses-assigned-removed-result.ts)</code>
- **OnError**: throws <code>[SoftwareManagementLicensesV2.AssignLicensesToDevices2Error](src/resources/software-management-licenses-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementLicensesV2.assignLicensesToDevices2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2LicensesAssignedRemovedResult, SoftwareManagementLicensesV2.AssignLicensesToDevices2Error&gt;</code>, with `result.value` of type <code>[V2LicensesAssignedRemovedResult](src/models/v2-licenses-assigned-removed-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV2.createListOfLicensesToRemove2({
    account: "0242078689-00001",
  });
  // TODO: Handle 'response' of type V2ListOfLicensesToRemoveResult
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementLicensesV2.CreateListOfLicensesToRemove2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementLicensesV2.createListOfLicensesToRemove2({
  account: "0242078689-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2ListOfLicensesToRemoveResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementLicensesV2.createListOfLicensesToRemove2(request)`

- **OnSuccess**: <code>[V2ListOfLicensesToRemoveResult](src/models/v2-list-of-licenses-to-remove-result.ts)</code>
- **OnError**: throws <code>[SoftwareManagementLicensesV2.CreateListOfLicensesToRemove2Error](src/resources/software-management-licenses-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementLicensesV2.createListOfLicensesToRemove2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2ListOfLicensesToRemoveResult, SoftwareManagementLicensesV2.CreateListOfLicensesToRemove2Error&gt;</code>, with `result.value` of type <code>[V2ListOfLicensesToRemoveResult](src/models/v2-list-of-licenses-to-remove-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV2.deleteListOfLicensesToRemove2({
    account: "0242078689-00001",
  });
  // TODO: Handle 'response' of type FotaV2SuccessResult
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementLicensesV2.DeleteListOfLicensesToRemove2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementLicensesV2.deleteListOfLicensesToRemove2({
  account: "0242078689-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FotaV2SuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementLicensesV2.deleteListOfLicensesToRemove2(request)`

- **OnSuccess**: <code>[FotaV2SuccessResult](src/models/fota-v2-success-result.ts)</code>
- **OnError**: throws <code>[SoftwareManagementLicensesV2.DeleteListOfLicensesToRemove2Error](src/resources/software-management-licenses-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementLicensesV2.deleteListOfLicensesToRemove2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FotaV2SuccessResult, SoftwareManagementLicensesV2.DeleteListOfLicensesToRemove2Error&gt;</code>, with `result.value` of type <code>[FotaV2SuccessResult](src/models/fota-v2-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV2.getAccountLicenseStatus2({
    account: "0000123456-00001",
    lastSeenDeviceId: "15-digit IMEI",
  });
  // TODO: Handle 'response' of type V2LicenseSummary
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementLicensesV2.GetAccountLicenseStatus2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementLicensesV2.getAccountLicenseStatus2({
  account: "0000123456-00001",
  lastSeenDeviceId: "15-digit IMEI",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2LicenseSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementLicensesV2.getAccountLicenseStatus2(request)`

- **OnSuccess**: <code>[V2LicenseSummary](src/models/v2-license-summary.ts)</code>
- **OnError**: throws <code>[SoftwareManagementLicensesV2.GetAccountLicenseStatus2Error](src/resources/software-management-licenses-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementLicensesV2.getAccountLicenseStatus2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2LicenseSummary, SoftwareManagementLicensesV2.GetAccountLicenseStatus2Error&gt;</code>, with `result.value` of type <code>[V2LicenseSummary](src/models/v2-license-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV2.listLicensesToRemove2({
    account: "0242078689-00001",
  });
  // TODO: Handle 'response' of type V2ListOfLicensesToRemove
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementLicensesV2.ListLicensesToRemove2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementLicensesV2.listLicensesToRemove2({
  account: "0242078689-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2ListOfLicensesToRemove
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementLicensesV2.listLicensesToRemove2(request)`

- **OnSuccess**: <code>[V2ListOfLicensesToRemove](src/models/v2-list-of-licenses-to-remove.ts)</code>
- **OnError**: throws <code>[SoftwareManagementLicensesV2.ListLicensesToRemove2Error](src/resources/software-management-licenses-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementLicensesV2.listLicensesToRemove2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2ListOfLicensesToRemove, SoftwareManagementLicensesV2.ListLicensesToRemove2Error&gt;</code>, with `result.value` of type <code>[V2ListOfLicensesToRemove](src/models/v2-list-of-licenses-to-remove.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV2.removeLicensesFromDevices2({
    account: "0242078689-00001",
  });
  // TODO: Handle 'response' of type V2LicensesAssignedRemovedResult
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementLicensesV2.RemoveLicensesFromDevices2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementLicensesV2.removeLicensesFromDevices2({
  account: "0242078689-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2LicensesAssignedRemovedResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementLicensesV2.removeLicensesFromDevices2(request)`

- **OnSuccess**: <code>[V2LicensesAssignedRemovedResult](src/models/v2-licenses-assigned-removed-result.ts)</code>
- **OnError**: throws <code>[SoftwareManagementLicensesV2.RemoveLicensesFromDevices2Error](src/resources/software-management-licenses-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementLicensesV2.removeLicensesFromDevices2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2LicensesAssignedRemovedResult, SoftwareManagementLicensesV2.RemoveLicensesFromDevices2Error&gt;</code>, with `result.value` of type <code>[V2LicensesAssignedRemovedResult](src/models/v2-licenses-assigned-removed-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV2.cancelCampaign({
    account: "0000123456-00001",
    campaignId: "60b5d639-ccdc-4db8-8824-069bd94c95bf",
  });
  // TODO: Handle 'response' of type FotaV2SuccessResult
} catch (err) {
  // TODO: Handle 'err' of type CampaignsV2.CancelCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsV2.cancelCampaign({
  account: "0000123456-00001",
  campaignId: "60b5d639-ccdc-4db8-8824-069bd94c95bf",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FotaV2SuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.campaignsV2.cancelCampaign(request)`

- **OnSuccess**: <code>[FotaV2SuccessResult](src/models/fota-v2-success-result.ts)</code>
- **OnError**: throws <code>[CampaignsV2.CancelCampaignError](src/resources/campaigns-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsV2.cancelCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FotaV2SuccessResult, CampaignsV2.CancelCampaignError&gt;</code>, with `result.value` of type <code>[FotaV2SuccessResult](src/models/fota-v2-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV2.getCampaignInformation({
    account: "0000123456-00001",
    campaignId: "60b5d639-ccdc-4db8-8824-069bd94c95bf",
  });
  // TODO: Handle 'response' of type CampaignSoftware
} catch (err) {
  // TODO: Handle 'err' of type CampaignsV2.GetCampaignInformationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsV2.getCampaignInformation({
  account: "0000123456-00001",
  campaignId: "60b5d639-ccdc-4db8-8824-069bd94c95bf",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CampaignSoftware
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.campaignsV2.getCampaignInformation(request)`

- **OnSuccess**: <code>[CampaignSoftware](src/models/campaign-software.ts)</code>
- **OnError**: throws <code>[CampaignsV2.GetCampaignInformationError](src/resources/campaigns-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsV2.getCampaignInformation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CampaignSoftware, CampaignsV2.GetCampaignInformationError&gt;</code>, with `result.value` of type <code>[CampaignSoftware](src/models/campaign-software.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV2.scheduleCampaignFirmwareUpgrade({ account: "0000123456-00001" });
  // TODO: Handle 'response' of type CampaignSoftware
} catch (err) {
  // TODO: Handle 'err' of type CampaignsV2.ScheduleCampaignFirmwareUpgradeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsV2.scheduleCampaignFirmwareUpgrade({
  account: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CampaignSoftware
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.campaignsV2.scheduleCampaignFirmwareUpgrade(request)`

- **OnSuccess**: <code>[CampaignSoftware](src/models/campaign-software.ts)</code>
- **OnError**: throws <code>[CampaignsV2.ScheduleCampaignFirmwareUpgradeError](src/resources/campaigns-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsV2.scheduleCampaignFirmwareUpgrade(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CampaignSoftware, CampaignsV2.ScheduleCampaignFirmwareUpgradeError&gt;</code>, with `result.value` of type <code>[CampaignSoftware](src/models/campaign-software.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV2.scheduleFileUpgrade({ acc: "0402196254-00001", body: {} });
  // TODO: Handle 'response' of type UploadAndScheduleFileResponse
} catch (err) {
  // TODO: Handle 'err' of type CampaignsV2.ScheduleFileUpgradeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsV2.scheduleFileUpgrade({
  acc: "0402196254-00001",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadAndScheduleFileResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.campaignsV2.scheduleFileUpgrade(request)`

- **OnSuccess**: <code>[UploadAndScheduleFileResponse](src/models/upload-and-schedule-file-response.ts)</code>
- **OnError**: throws <code>[CampaignsV2.ScheduleFileUpgradeError](src/resources/campaigns-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsV2.scheduleFileUpgrade(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadAndScheduleFileResponse, CampaignsV2.ScheduleFileUpgradeError&gt;</code>, with `result.value` of type <code>[UploadAndScheduleFileResponse](src/models/upload-and-schedule-file-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV2.scheduleSwUpgradeHttpDevices({
    acc: "0402196254-00001",
    body: {
      campaignName: "FOTA_Verizon_Upgrade",
      softwareName: "FOTA_Verizon_Model-A_02To03_HF",
      softwareFrom: "FOTA_Verizon_Model-A_00To01_HF",
      softwareTo: "FOTA_Verizon_Model-A_02To03_HF",
      distributionType: "HTTP",
      startDate: "2020-08-21",
      endDate: "2020-08-22",
      downloadAfterDate: "2020-08-21",
      downloadTimeWindowList: [{ startTime: "20", endTime: "21" }],
      installAfterDate: "2020-08-21",
      installTimeWindowList: [{ startTime: "22", endTime: "23" }],
      deviceList: ["990013907835573", "990013907884259"],
    },
  });
  // TODO: Handle 'response' of type UploadAndScheduleFileResponse
} catch (err) {
  // TODO: Handle 'err' of type CampaignsV2.ScheduleSwUpgradeHttpDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsV2.scheduleSwUpgradeHttpDevices({
  acc: "0402196254-00001",
  body: {
    campaignName: "FOTA_Verizon_Upgrade",
    softwareName: "FOTA_Verizon_Model-A_02To03_HF",
    softwareFrom: "FOTA_Verizon_Model-A_00To01_HF",
    softwareTo: "FOTA_Verizon_Model-A_02To03_HF",
    distributionType: "HTTP",
    startDate: "2020-08-21",
    endDate: "2020-08-22",
    downloadAfterDate: "2020-08-21",
    downloadTimeWindowList: [{ startTime: "20", endTime: "21" }],
    installAfterDate: "2020-08-21",
    installTimeWindowList: [{ startTime: "22", endTime: "23" }],
    deviceList: ["990013907835573", "990013907884259"],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadAndScheduleFileResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.campaignsV2.scheduleSwUpgradeHttpDevices(request)`

- **OnSuccess**: <code>[UploadAndScheduleFileResponse](src/models/upload-and-schedule-file-response.ts)</code>
- **OnError**: throws <code>[CampaignsV2.ScheduleSwUpgradeHttpDevicesError](src/resources/campaigns-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsV2.scheduleSwUpgradeHttpDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadAndScheduleFileResponse, CampaignsV2.ScheduleSwUpgradeHttpDevicesError&gt;</code>, with `result.value` of type <code>[UploadAndScheduleFileResponse](src/models/upload-and-schedule-file-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV2.updateCampaignDates({
    account: "0000123456-00001",
    campaignId: "60b5d639-ccdc-4db8-8824-069bd94c95bf",
  });
  // TODO: Handle 'response' of type CampaignSoftware
} catch (err) {
  // TODO: Handle 'err' of type CampaignsV2.UpdateCampaignDatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsV2.updateCampaignDates({
  account: "0000123456-00001",
  campaignId: "60b5d639-ccdc-4db8-8824-069bd94c95bf",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CampaignSoftware
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.campaignsV2.updateCampaignDates(request)`

- **OnSuccess**: <code>[CampaignSoftware](src/models/campaign-software.ts)</code>
- **OnError**: throws <code>[CampaignsV2.UpdateCampaignDatesError](src/resources/campaigns-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsV2.updateCampaignDates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CampaignSoftware, CampaignsV2.UpdateCampaignDatesError&gt;</code>, with `result.value` of type <code>[CampaignSoftware](src/models/campaign-software.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV2.updateCampaignFirmwareDevices({
    account: "0000123456-00001",
    campaignId: "60b5d639-ccdc-4db8-8824-069bd94c95bf",
  });
  // TODO: Handle 'response' of type V2AddOrRemoveDeviceResult
} catch (err) {
  // TODO: Handle 'err' of type CampaignsV2.UpdateCampaignFirmwareDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsV2.updateCampaignFirmwareDevices({
  account: "0000123456-00001",
  campaignId: "60b5d639-ccdc-4db8-8824-069bd94c95bf",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2AddOrRemoveDeviceResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.campaignsV2.updateCampaignFirmwareDevices(request)`

- **OnSuccess**: <code>[V2AddOrRemoveDeviceResult](src/models/v2-add-or-remove-device-result.ts)</code>
- **OnError**: throws <code>[CampaignsV2.UpdateCampaignFirmwareDevicesError](src/resources/campaigns-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsV2.updateCampaignFirmwareDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2AddOrRemoveDeviceResult, CampaignsV2.UpdateCampaignFirmwareDevicesError&gt;</code>, with `result.value` of type <code>[V2AddOrRemoveDeviceResult](src/models/v2-add-or-remove-device-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV2.deregisterCallback4({
    account: "0000123456-00001",
  });
  // TODO: Handle 'response' of type FotaV2SuccessResult
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementCallbacksV2.DeregisterCallback4Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementCallbacksV2.deregisterCallback4({
  account: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FotaV2SuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementCallbacksV2.deregisterCallback4(request)`

- **OnSuccess**: <code>[FotaV2SuccessResult](src/models/fota-v2-success-result.ts)</code>
- **OnError**: throws <code>[SoftwareManagementCallbacksV2.DeregisterCallback4Error](src/resources/software-management-callbacks-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementCallbacksV2.deregisterCallback4(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FotaV2SuccessResult, SoftwareManagementCallbacksV2.DeregisterCallback4Error&gt;</code>, with `result.value` of type <code>[FotaV2SuccessResult](src/models/fota-v2-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV2.listRegisteredCallbacks4({
    account: "0000123456-00001",
  });
  // TODO: Handle 'response' of type CallbackSummary
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementCallbacksV2.ListRegisteredCallbacks4Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementCallbacksV2.listRegisteredCallbacks4({
  account: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CallbackSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementCallbacksV2.listRegisteredCallbacks4(request)`

- **OnSuccess**: <code>[CallbackSummary](src/models/callback-summary.ts)</code>
- **OnError**: throws <code>[SoftwareManagementCallbacksV2.ListRegisteredCallbacks4Error](src/resources/software-management-callbacks-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementCallbacksV2.listRegisteredCallbacks4(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CallbackSummary, SoftwareManagementCallbacksV2.ListRegisteredCallbacks4Error&gt;</code>, with `result.value` of type <code>[CallbackSummary](src/models/callback-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV2.registerCallback4({
    account: "0000123456-00001",
  });
  // TODO: Handle 'response' of type FotaV2CallbackRegistrationResult
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementCallbacksV2.RegisterCallback4Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementCallbacksV2.registerCallback4({
  account: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FotaV2CallbackRegistrationResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementCallbacksV2.registerCallback4(request)`

- **OnSuccess**: <code>[FotaV2CallbackRegistrationResult](src/models/fota-v2-callback-registration-result.ts)</code>
- **OnError**: throws <code>[SoftwareManagementCallbacksV2.RegisterCallback4Error](src/resources/software-management-callbacks-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementCallbacksV2.registerCallback4(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FotaV2CallbackRegistrationResult, SoftwareManagementCallbacksV2.RegisterCallback4Error&gt;</code>, with `result.value` of type <code>[FotaV2CallbackRegistrationResult](src/models/fota-v2-callback-registration-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV2.updateCallback({ account: "0000123456-00001" });
  // TODO: Handle 'response' of type FotaV2CallbackRegistrationResult
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementCallbacksV2.UpdateCallbackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementCallbacksV2.updateCallback({
  account: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FotaV2CallbackRegistrationResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementCallbacksV2.updateCallback(request)`

- **OnSuccess**: <code>[FotaV2CallbackRegistrationResult](src/models/fota-v2-callback-registration-result.ts)</code>
- **OnError**: throws <code>[SoftwareManagementCallbacksV2.UpdateCallbackError](src/resources/software-management-callbacks-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementCallbacksV2.updateCallback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FotaV2CallbackRegistrationResult, SoftwareManagementCallbacksV2.UpdateCallbackError&gt;</code>, with `result.value` of type <code>[FotaV2CallbackRegistrationResult](src/models/fota-v2-callback-registration-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV2.getCampaignDeviceStatus({
    account: "0000123456-00001",
    campaignId: "60b5d639-ccdc-4db8-8824-069bd94c95bf",
    lastSeenDeviceId: "15-digit IMEI",
  });
  // TODO: Handle 'response' of type V2CampaignDevice
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementReportsV2.GetCampaignDeviceStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementReportsV2.getCampaignDeviceStatus({
  account: "0000123456-00001",
  campaignId: "60b5d639-ccdc-4db8-8824-069bd94c95bf",
  lastSeenDeviceId: "15-digit IMEI",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2CampaignDevice
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementReportsV2.getCampaignDeviceStatus(request)`

- **OnSuccess**: <code>[V2CampaignDevice](src/models/v2-campaign-device.ts)</code>
- **OnError**: throws <code>[SoftwareManagementReportsV2.GetCampaignDeviceStatusError](src/resources/software-management-reports-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementReportsV2.getCampaignDeviceStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2CampaignDevice, SoftwareManagementReportsV2.GetCampaignDeviceStatusError&gt;</code>, with `result.value` of type <code>[V2CampaignDevice](src/models/v2-campaign-device.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV2.getCampaignHistoryByStatus({
    account: "0000123456-00001",
    campaignStatus: "some example string",
    lastSeenCampaignId: "60b5d639-ccdc-4db8-8824-069bd94c95bf",
  });
  // TODO: Handle 'response' of type V2CampaignHistory
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementReportsV2.GetCampaignHistoryByStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementReportsV2.getCampaignHistoryByStatus({
  account: "0000123456-00001",
  campaignStatus: "some example string",
  lastSeenCampaignId: "60b5d639-ccdc-4db8-8824-069bd94c95bf",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2CampaignHistory
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementReportsV2.getCampaignHistoryByStatus(request)`

- **OnSuccess**: <code>[V2CampaignHistory](src/models/v2-campaign-history.ts)</code>
- **OnError**: throws <code>[SoftwareManagementReportsV2.GetCampaignHistoryByStatusError](src/resources/software-management-reports-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementReportsV2.getCampaignHistoryByStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2CampaignHistory, SoftwareManagementReportsV2.GetCampaignHistoryByStatusError&gt;</code>, with `result.value` of type <code>[V2CampaignHistory](src/models/v2-campaign-history.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV2.getDeviceFirmwareUpgradeHistory2({
    account: "0000123456-00001",
    deviceId: "990013907835573",
  });
  // TODO: Handle 'response' of type DeviceSoftwareUpgrade[]
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementReportsV2.GetDeviceFirmwareUpgradeHistory2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementReportsV2.getDeviceFirmwareUpgradeHistory2({
  account: "0000123456-00001",
  deviceId: "990013907835573",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceSoftwareUpgrade[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementReportsV2.getDeviceFirmwareUpgradeHistory2(request)`

- **OnSuccess**: <code>[DeviceSoftwareUpgrade](src/models/device-software-upgrade.ts)[]</code>
- **OnError**: throws <code>[SoftwareManagementReportsV2.GetDeviceFirmwareUpgradeHistory2Error](src/resources/software-management-reports-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementReportsV2.getDeviceFirmwareUpgradeHistory2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceSoftwareUpgrade[], SoftwareManagementReportsV2.GetDeviceFirmwareUpgradeHistory2Error&gt;</code>, with `result.value` of type <code>[DeviceSoftwareUpgrade](src/models/device-software-upgrade.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV2.listAccountDevices2({
    account: "0000123456-00001",
    lastSeenDeviceId: "15-digit IMEI",
    distributionType: "HTTP",
  });
  // TODO: Handle 'response' of type V2AccountDeviceList
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementReportsV2.ListAccountDevices2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementReportsV2.listAccountDevices2({
  account: "0000123456-00001",
  lastSeenDeviceId: "15-digit IMEI",
  distributionType: "HTTP",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2AccountDeviceList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementReportsV2.listAccountDevices2(request)`

- **OnSuccess**: <code>[V2AccountDeviceList](src/models/v2-account-device-list.ts)</code>
- **OnError**: throws <code>[SoftwareManagementReportsV2.ListAccountDevices2Error](src/resources/software-management-reports-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementReportsV2.listAccountDevices2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2AccountDeviceList, SoftwareManagementReportsV2.ListAccountDevices2Error&gt;</code>, with `result.value` of type <code>[V2AccountDeviceList](src/models/v2-account-device-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV2.listAvailableSoftware({
    account: "0000123456-00001",
    distributionType: "HTTP",
  });
  // TODO: Handle 'response' of type SoftwarePackage[]
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementReportsV2.ListAvailableSoftwareError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementReportsV2.listAvailableSoftware({
  account: "0000123456-00001",
  distributionType: "HTTP",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SoftwarePackage[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementReportsV2.listAvailableSoftware(request)`

- **OnSuccess**: <code>[SoftwarePackage](src/models/software-package.ts)[]</code>
- **OnError**: throws <code>[SoftwareManagementReportsV2.ListAvailableSoftwareError](src/resources/software-management-reports-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementReportsV2.listAvailableSoftware(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SoftwarePackage[], SoftwareManagementReportsV2.ListAvailableSoftwareError&gt;</code>, with `result.value` of type <code>[SoftwarePackage](src/models/software-package.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.clientLogging.disableDeviceLogging({
    account: "0000123456-00001",
    deviceId: "990013907835573",
  });
} catch (err) {
  // TODO: Handle 'err' of type ClientLogging.DisableDeviceLoggingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientLogging.disableDeviceLogging({
  account: "0000123456-00001",
  deviceId: "990013907835573",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.clientLogging.disableDeviceLogging(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ClientLogging.DisableDeviceLoggingError](src/resources/client-logging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientLogging.disableDeviceLogging(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ClientLogging.DisableDeviceLoggingError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.clientLogging.disableLoggingForDevices({
    account: "0000123456-00001",
    deviceIds: "990013907835573",
  });
} catch (err) {
  // TODO: Handle 'err' of type ClientLogging.DisableLoggingForDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientLogging.disableLoggingForDevices({
  account: "0000123456-00001",
  deviceIds: "990013907835573",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.clientLogging.disableLoggingForDevices(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ClientLogging.DisableLoggingForDevicesError](src/resources/client-logging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientLogging.disableLoggingForDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ClientLogging.DisableLoggingForDevicesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientLogging.enableDeviceLogging({
    account: "0000123456-00001",
    deviceId: "990013907835573",
  });
  // TODO: Handle 'response' of type DeviceLoggingStatus
} catch (err) {
  // TODO: Handle 'err' of type ClientLogging.EnableDeviceLoggingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientLogging.enableDeviceLogging({
  account: "0000123456-00001",
  deviceId: "990013907835573",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceLoggingStatus
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.clientLogging.enableDeviceLogging(request)`

- **OnSuccess**: <code>[DeviceLoggingStatus](src/models/device-logging-status.ts)</code>
- **OnError**: throws <code>[ClientLogging.EnableDeviceLoggingError](src/resources/client-logging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientLogging.enableDeviceLogging(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceLoggingStatus, ClientLogging.EnableDeviceLoggingError&gt;</code>, with `result.value` of type <code>[DeviceLoggingStatus](src/models/device-logging-status.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientLogging.enableLoggingForDevices({ account: "0000123456-00001" });
  // TODO: Handle 'response' of type DeviceLoggingStatus[]
} catch (err) {
  // TODO: Handle 'err' of type ClientLogging.EnableLoggingForDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientLogging.enableLoggingForDevices({
  account: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceLoggingStatus[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.clientLogging.enableLoggingForDevices(request)`

- **OnSuccess**: <code>[DeviceLoggingStatus](src/models/device-logging-status.ts)[]</code>
- **OnError**: throws <code>[ClientLogging.EnableLoggingForDevicesError](src/resources/client-logging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientLogging.enableLoggingForDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceLoggingStatus[], ClientLogging.EnableLoggingForDevicesError&gt;</code>, with `result.value` of type <code>[DeviceLoggingStatus](src/models/device-logging-status.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientLogging.listDeviceLogs({
    account: "0000123456-00001",
    deviceId: "990013907835573",
  });
  // TODO: Handle 'response' of type DeviceLog[]
} catch (err) {
  // TODO: Handle 'err' of type ClientLogging.ListDeviceLogsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientLogging.listDeviceLogs({
  account: "0000123456-00001",
  deviceId: "990013907835573",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceLog[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.clientLogging.listDeviceLogs(request)`

- **OnSuccess**: <code>[DeviceLog](src/models/device-log.ts)[]</code>
- **OnError**: throws <code>[ClientLogging.ListDeviceLogsError](src/resources/client-logging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientLogging.listDeviceLogs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceLog[], ClientLogging.ListDeviceLogsError&gt;</code>, with `result.value` of type <code>[DeviceLog](src/models/device-log.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.clientLogging.listDevicesWithLoggingEnabled({ account: "0000123456-00001" });
  // TODO: Handle 'response' of type DeviceLoggingStatus[]
} catch (err) {
  // TODO: Handle 'err' of type ClientLogging.ListDevicesWithLoggingEnabledError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.clientLogging.listDevicesWithLoggingEnabled({
  account: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceLoggingStatus[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.clientLogging.listDevicesWithLoggingEnabled(request)`

- **OnSuccess**: <code>[DeviceLoggingStatus](src/models/device-logging-status.ts)[]</code>
- **OnError**: throws <code>[ClientLogging.ListDevicesWithLoggingEnabledError](src/resources/client-logging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.clientLogging.listDevicesWithLoggingEnabled(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceLoggingStatus[], ClientLogging.ListDevicesWithLoggingEnabledError&gt;</code>, with `result.value` of type <code>[DeviceLoggingStatus](src/models/device-logging-status.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.serverLogging.getDeviceCheckInHistory({
    account: "0000123456-00001",
    deviceId: "990013907835573",
  });
  // TODO: Handle 'response' of type CheckInHistoryItem[]
} catch (err) {
  // TODO: Handle 'err' of type ServerLogging.GetDeviceCheckInHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.serverLogging.getDeviceCheckInHistory({
  account: "0000123456-00001",
  deviceId: "990013907835573",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CheckInHistoryItem[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.serverLogging.getDeviceCheckInHistory(request)`

- **OnSuccess**: <code>[CheckInHistoryItem](src/models/check-in-history-item.ts)[]</code>
- **OnError**: throws <code>[ServerLogging.GetDeviceCheckInHistoryError](src/resources/server-logging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.serverLogging.getDeviceCheckInHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CheckInHistoryItem[], ServerLogging.GetDeviceCheckInHistoryError&gt;</code>, with `result.value` of type <code>[CheckInHistoryItem](src/models/check-in-history-item.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.configurationFiles.getListOfFiles({
    acc: "0402196254-00001",
    distributionType: "HTTP",
  });
  // TODO: Handle 'response' of type RetrievesAvailableFilesResponseList
} catch (err) {
  // TODO: Handle 'err' of type ConfigurationFiles.GetListOfFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.configurationFiles.getListOfFiles({
  acc: "0402196254-00001",
  distributionType: "HTTP",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrievesAvailableFilesResponseList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.configurationFiles.getListOfFiles(request)`

- **OnSuccess**: <code>[RetrievesAvailableFilesResponseList](src/models/retrieves-available-files-response-list.ts)</code>
- **OnError**: throws <code>[ConfigurationFiles.GetListOfFilesError](src/resources/configuration-files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.configurationFiles.getListOfFiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrievesAvailableFilesResponseList, ConfigurationFiles.GetListOfFilesError&gt;</code>, with `result.value` of type <code>[RetrievesAvailableFilesResponseList](src/models/retrieves-available-files-response-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.configurationFiles.uploadConfigFile({
    acc: "0402196254-00001",
    fileVersion: "1.0",
    make: "Verizon",
    model: "VZW1",
    localTargetPath: "/VZWFOTA/hello-world.txt",
  });
  // TODO: Handle 'response' of type UploadConfigurationFilesResponse
} catch (err) {
  // TODO: Handle 'err' of type ConfigurationFiles.UploadConfigFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.configurationFiles.uploadConfigFile({
  acc: "0402196254-00001",
  fileVersion: "1.0",
  make: "Verizon",
  model: "VZW1",
  localTargetPath: "/VZWFOTA/hello-world.txt",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadConfigurationFilesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>fileupload?</code> | <code>FileInput</code> | The file to upload. |
| <code>fileVersion?</code> | <code>string</code> | Version of the file. |
| <code>make?</code> | <code>string</code> | The software-applicable device make. |
| <code>model?</code> | <code>string</code> | The software-applicable device model. |
| <code>localTargetPath?</code> | <code>string</code> | Local target path on the device. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.configurationFiles.uploadConfigFile(request)`

- **OnSuccess**: <code>[UploadConfigurationFilesResponse](src/models/upload-configuration-files-response.ts)</code>
- **OnError**: throws <code>[ConfigurationFiles.UploadConfigFileError](src/resources/configuration-files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.configurationFiles.uploadConfigFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadConfigurationFilesResponse, ConfigurationFiles.UploadConfigFileError&gt;</code>, with `result.value` of type <code>[UploadConfigurationFilesResponse](src/models/upload-configuration-files-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementSubscriptionsV3.getAccountSubscriptionStatus3({
    acc: "0000123456-00001",
  });
  // TODO: Handle 'response' of type FotaV3Subscription
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementSubscriptionsV3.GetAccountSubscriptionStatus3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementSubscriptionsV3.getAccountSubscriptionStatus3({
  acc: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FotaV3Subscription
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementSubscriptionsV3.getAccountSubscriptionStatus3(request)`

- **OnSuccess**: <code>[FotaV3Subscription](src/models/fota-v3-subscription.ts)</code>
- **OnError**: throws <code>[SoftwareManagementSubscriptionsV3.GetAccountSubscriptionStatus3Error](src/resources/software-management-subscriptions-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementSubscriptionsV3.getAccountSubscriptionStatus3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FotaV3Subscription, SoftwareManagementSubscriptionsV3.GetAccountSubscriptionStatus3Error&gt;</code>, with `result.value` of type <code>[FotaV3Subscription](src/models/fota-v3-subscription.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV3.assignLicensesToDevices3({
    acc: "0000123456-00001",
    body: { deviceList: ["15-digit IMEI", "15-digit IMEI"] },
  });
  // TODO: Handle 'response' of type V3LicenseAssignedRemovedResult
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementLicensesV3.AssignLicensesToDevices3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementLicensesV3.assignLicensesToDevices3({
  acc: "0000123456-00001",
  body: { deviceList: ["15-digit IMEI", "15-digit IMEI"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3LicenseAssignedRemovedResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementLicensesV3.assignLicensesToDevices3(request)`

- **OnSuccess**: <code>[V3LicenseAssignedRemovedResult](src/models/v3-license-assigned-removed-result.ts)</code>
- **OnError**: throws <code>[SoftwareManagementLicensesV3.AssignLicensesToDevices3Error](src/resources/software-management-licenses-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementLicensesV3.assignLicensesToDevices3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3LicenseAssignedRemovedResult, SoftwareManagementLicensesV3.AssignLicensesToDevices3Error&gt;</code>, with `result.value` of type <code>[V3LicenseAssignedRemovedResult](src/models/v3-license-assigned-removed-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV3.getAccountLicensesStatus({
    acc: "0000123456-00001",
    lastSeenDeviceId: "0",
  });
  // TODO: Handle 'response' of type V3LicenseSummary
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementLicensesV3.GetAccountLicensesStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementLicensesV3.getAccountLicensesStatus({
  acc: "0000123456-00001",
  lastSeenDeviceId: "0",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3LicenseSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementLicensesV3.getAccountLicensesStatus(request)`

- **OnSuccess**: <code>[V3LicenseSummary](src/models/v3-license-summary.ts)</code>
- **OnError**: throws <code>[SoftwareManagementLicensesV3.GetAccountLicensesStatusError](src/resources/software-management-licenses-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementLicensesV3.getAccountLicensesStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3LicenseSummary, SoftwareManagementLicensesV3.GetAccountLicensesStatusError&gt;</code>, with `result.value` of type <code>[V3LicenseSummary](src/models/v3-license-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementLicensesV3.removeLicensesFromDevices3({
    acc: "0000123456-00001",
    body: { deviceList: ["15-digit IMEI", "15-digit IMEI", "15-digit IMEI"] },
  });
  // TODO: Handle 'response' of type V3LicenseAssignedRemovedResult
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementLicensesV3.RemoveLicensesFromDevices3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementLicensesV3.removeLicensesFromDevices3({
  acc: "0000123456-00001",
  body: { deviceList: ["15-digit IMEI", "15-digit IMEI", "15-digit IMEI"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3LicenseAssignedRemovedResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementLicensesV3.removeLicensesFromDevices3(request)`

- **OnSuccess**: <code>[V3LicenseAssignedRemovedResult](src/models/v3-license-assigned-removed-result.ts)</code>
- **OnError**: throws <code>[SoftwareManagementLicensesV3.RemoveLicensesFromDevices3Error](src/resources/software-management-licenses-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementLicensesV3.removeLicensesFromDevices3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3LicenseAssignedRemovedResult, SoftwareManagementLicensesV3.RemoveLicensesFromDevices3Error&gt;</code>, with `result.value` of type <code>[V3LicenseAssignedRemovedResult](src/models/v3-license-assigned-removed-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV3.cancelCampaign2({
    accountName: "0000123456-00001",
    campaignId: "f858b8c4-2153-11ec-8c44-aeb16d1aa652",
  });
  // TODO: Handle 'response' of type FotaV3SuccessResult
} catch (err) {
  // TODO: Handle 'err' of type CampaignsV3.CancelCampaign2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsV3.cancelCampaign2({
  accountName: "0000123456-00001",
  campaignId: "f858b8c4-2153-11ec-8c44-aeb16d1aa652",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FotaV3SuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.campaignsV3.cancelCampaign2(request)`

- **OnSuccess**: <code>[FotaV3SuccessResult](src/models/fota-v3-success-result.ts)</code>
- **OnError**: throws <code>[CampaignsV3.CancelCampaign2Error](src/resources/campaigns-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsV3.cancelCampaign2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FotaV3SuccessResult, CampaignsV3.CancelCampaign2Error&gt;</code>, with `result.value` of type <code>[FotaV3SuccessResult](src/models/fota-v3-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV3.getCampaignInformation2({
    accountName: "0000123456-00001",
    campaignId: "f858b8c4-2153-11ec-8c44-aeb16d1aa652",
  });
  // TODO: Handle 'response' of type Campaign
} catch (err) {
  // TODO: Handle 'err' of type CampaignsV3.GetCampaignInformation2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsV3.getCampaignInformation2({
  accountName: "0000123456-00001",
  campaignId: "f858b8c4-2153-11ec-8c44-aeb16d1aa652",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Campaign
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.campaignsV3.getCampaignInformation2(request)`

- **OnSuccess**: <code>[Campaign](src/models/campaign.ts)</code>
- **OnError**: throws <code>[CampaignsV3.GetCampaignInformation2Error](src/resources/campaigns-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsV3.getCampaignInformation2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Campaign, CampaignsV3.GetCampaignInformation2Error&gt;</code>, with `result.value` of type <code>[Campaign](src/models/campaign.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV3.scheduleCampaignFirmwareUpgrade2({
    accountName: "0000123456-00001",
    body: {
      campaignName: "Smart FOTA - test 4",
      firmwareName: "SEQUANSCommunications_GM01Q_SR1.2.0.0-10512_SR1.2.0.0-10657",
      firmwareFrom: "SR1.2.0.0-10512",
      firmwareTo: "SR1.2.0.0-10657",
      protocol: "LWM2M",
      startDate: "2021-09-29",
      endDate: "2021-10-01",
      campaignTimeWindowList: [{ startTime: 18, endTime: 22 }],
      deviceList: ["15-digit IMEI"],
      autoAssignLicenseFlag: false,
      autoAddDevicesFlag: false,
    },
  });
  // TODO: Handle 'response' of type FirmwareCampaign
} catch (err) {
  // TODO: Handle 'err' of type CampaignsV3.ScheduleCampaignFirmwareUpgrade2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsV3.scheduleCampaignFirmwareUpgrade2({
  accountName: "0000123456-00001",
  body: {
    campaignName: "Smart FOTA - test 4",
    firmwareName: "SEQUANSCommunications_GM01Q_SR1.2.0.0-10512_SR1.2.0.0-10657",
    firmwareFrom: "SR1.2.0.0-10512",
    firmwareTo: "SR1.2.0.0-10657",
    protocol: "LWM2M",
    startDate: "2021-09-29",
    endDate: "2021-10-01",
    campaignTimeWindowList: [{ startTime: 18, endTime: 22 }],
    deviceList: ["15-digit IMEI"],
    autoAssignLicenseFlag: false,
    autoAddDevicesFlag: false,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FirmwareCampaign
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.campaignsV3.scheduleCampaignFirmwareUpgrade2(request)`

- **OnSuccess**: <code>[FirmwareCampaign](src/models/firmware-campaign.ts)</code>
- **OnError**: throws <code>[CampaignsV3.ScheduleCampaignFirmwareUpgrade2Error](src/resources/campaigns-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsV3.scheduleCampaignFirmwareUpgrade2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FirmwareCampaign, CampaignsV3.ScheduleCampaignFirmwareUpgrade2Error&gt;</code>, with `result.value` of type <code>[FirmwareCampaign](src/models/firmware-campaign.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV3.updateCampaignDates2({
    acc: "0000123456-00001",
    campaignId: "f858b8c4-2153-11ec-8c44-aeb16d1aa652",
    body: {
      startDate: "2022-02-23",
      endDate: "2022-02-24",
      campaignTimeWindowList: [{ startTime: 14, endTime: 18 }],
    },
  });
  // TODO: Handle 'response' of type FirmwareCampaign
} catch (err) {
  // TODO: Handle 'err' of type CampaignsV3.UpdateCampaignDates2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsV3.updateCampaignDates2({
  acc: "0000123456-00001",
  campaignId: "f858b8c4-2153-11ec-8c44-aeb16d1aa652",
  body: {
    startDate: "2022-02-23",
    endDate: "2022-02-24",
    campaignTimeWindowList: [{ startTime: 14, endTime: 18 }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FirmwareCampaign
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.campaignsV3.updateCampaignDates2(request)`

- **OnSuccess**: <code>[FirmwareCampaign](src/models/firmware-campaign.ts)</code>
- **OnError**: throws <code>[CampaignsV3.UpdateCampaignDates2Error](src/resources/campaigns-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsV3.updateCampaignDates2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FirmwareCampaign, CampaignsV3.UpdateCampaignDates2Error&gt;</code>, with `result.value` of type <code>[FirmwareCampaign](src/models/firmware-campaign.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsV3.updateCampaignFirmwareDevices2({
    acc: "0000123456-00001",
    campaignId: "f858b8c4-2153-11ec-8c44-aeb16d1aa652",
    body: { type: "remove", deviceList: ["15-digit IMEI"] },
  });
  // TODO: Handle 'response' of type V3AddOrRemoveDeviceResult
} catch (err) {
  // TODO: Handle 'err' of type CampaignsV3.UpdateCampaignFirmwareDevices2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsV3.updateCampaignFirmwareDevices2({
  acc: "0000123456-00001",
  campaignId: "f858b8c4-2153-11ec-8c44-aeb16d1aa652",
  body: { type: "remove", deviceList: ["15-digit IMEI"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3AddOrRemoveDeviceResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.campaignsV3.updateCampaignFirmwareDevices2(request)`

- **OnSuccess**: <code>[V3AddOrRemoveDeviceResult](src/models/v3-add-or-remove-device-result.ts)</code>
- **OnError**: throws <code>[CampaignsV3.UpdateCampaignFirmwareDevices2Error](src/resources/campaigns-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsV3.updateCampaignFirmwareDevices2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3AddOrRemoveDeviceResult, CampaignsV3.UpdateCampaignFirmwareDevices2Error&gt;</code>, with `result.value` of type <code>[V3AddOrRemoveDeviceResult](src/models/v3-add-or-remove-device-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV3.getCampaignDeviceStatus2({
    acc: "0000123456-00001",
    campaignId: "f858b8c4-2153-11ec-8c44-aeb16d1aa652",
    lastSeenDeviceId: "15-digit IMEI",
  });
  // TODO: Handle 'response' of type V3CampaignDevice
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementReportsV3.GetCampaignDeviceStatus2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementReportsV3.getCampaignDeviceStatus2({
  acc: "0000123456-00001",
  campaignId: "f858b8c4-2153-11ec-8c44-aeb16d1aa652",
  lastSeenDeviceId: "15-digit IMEI",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3CampaignDevice
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementReportsV3.getCampaignDeviceStatus2(request)`

- **OnSuccess**: <code>[V3CampaignDevice](src/models/v3-campaign-device.ts)</code>
- **OnError**: throws <code>[SoftwareManagementReportsV3.GetCampaignDeviceStatus2Error](src/resources/software-management-reports-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementReportsV3.getCampaignDeviceStatus2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3CampaignDevice, SoftwareManagementReportsV3.GetCampaignDeviceStatus2Error&gt;</code>, with `result.value` of type <code>[V3CampaignDevice](src/models/v3-campaign-device.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV3.getCampaignHistoryByStatus2({
    acc: "0000123456-00001",
    campaignStatus: CampaignStatus.CampaignRequestPending,
    lastSeenCampaignId: "60b5d639-ccdc-4db8-8824-069bd94c95bf",
  });
  // TODO: Handle 'response' of type V3CampaignHistory
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementReportsV3.GetCampaignHistoryByStatus2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementReportsV3.getCampaignHistoryByStatus2({
  acc: "0000123456-00001",
  campaignStatus: CampaignStatus.CampaignRequestPending,
  lastSeenCampaignId: "60b5d639-ccdc-4db8-8824-069bd94c95bf",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3CampaignHistory
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementReportsV3.getCampaignHistoryByStatus2(request)`

- **OnSuccess**: <code>[V3CampaignHistory](src/models/v3-campaign-history.ts)</code>
- **OnError**: throws <code>[SoftwareManagementReportsV3.GetCampaignHistoryByStatus2Error](src/resources/software-management-reports-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementReportsV3.getCampaignHistoryByStatus2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3CampaignHistory, SoftwareManagementReportsV3.GetCampaignHistoryByStatus2Error&gt;</code>, with `result.value` of type <code>[V3CampaignHistory](src/models/v3-campaign-history.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementReportsV3.getDeviceFirmwareUpgradeHistory3({
    acc: "0000123456-00001",
    deviceId: "15-digit IMEI",
  });
  // TODO: Handle 'response' of type DeviceFirmwareUpgrade[]
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementReportsV3.GetDeviceFirmwareUpgradeHistory3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementReportsV3.getDeviceFirmwareUpgradeHistory3({
  acc: "0000123456-00001",
  deviceId: "15-digit IMEI",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceFirmwareUpgrade[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementReportsV3.getDeviceFirmwareUpgradeHistory3(request)`

- **OnSuccess**: <code>[DeviceFirmwareUpgrade](src/models/device-firmware-upgrade.ts)[]</code>
- **OnError**: throws <code>[SoftwareManagementReportsV3.GetDeviceFirmwareUpgradeHistory3Error](src/resources/software-management-reports-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementReportsV3.getDeviceFirmwareUpgradeHistory3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceFirmwareUpgrade[], SoftwareManagementReportsV3.GetDeviceFirmwareUpgradeHistory3Error&gt;</code>, with `result.value` of type <code>[DeviceFirmwareUpgrade](src/models/device-firmware-upgrade.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.firmwareV3.listAvailableFirmware2({
    acc: "0000123456-00001",
    protocol: FirmwareProtocol.Lwm2M,
  });
  // TODO: Handle 'response' of type FirmwarePackage[]
} catch (err) {
  // TODO: Handle 'err' of type FirmwareV3.ListAvailableFirmware2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.firmwareV3.listAvailableFirmware2({
  acc: "0000123456-00001",
  protocol: FirmwareProtocol.Lwm2M,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FirmwarePackage[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>protocol?</code> | <code>[FirmwareProtocol](src/models/firmware-protocol.ts)</code> | Filter to retrieve a specific protocol type used.<br>**Default**: "LWM2M" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.firmwareV3.listAvailableFirmware2(request)`

- **OnSuccess**: <code>[FirmwarePackage](src/models/firmware-package.ts)[]</code>
- **OnError**: throws <code>[FirmwareV3.ListAvailableFirmware2Error](src/resources/firmware-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.firmwareV3.listAvailableFirmware2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FirmwarePackage[], FirmwareV3.ListAvailableFirmware2Error&gt;</code>, with `result.value` of type <code>[FirmwarePackage](src/models/firmware-package.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.firmwareV3.reportDeviceFirmware({
    acc: "0000123456-00001",
    deviceId: "15-digit IMEI",
  });
  // TODO: Handle 'response' of type DeviceFirmwareVersionUpdateResult
} catch (err) {
  // TODO: Handle 'err' of type FirmwareV3.ReportDeviceFirmwareError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.firmwareV3.reportDeviceFirmware({
  acc: "0000123456-00001",
  deviceId: "15-digit IMEI",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceFirmwareVersionUpdateResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.firmwareV3.reportDeviceFirmware(request)`

- **OnSuccess**: <code>[DeviceFirmwareVersionUpdateResult](src/models/device-firmware-version-update-result.ts)</code>
- **OnError**: throws <code>[FirmwareV3.ReportDeviceFirmwareError](src/resources/firmware-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.firmwareV3.reportDeviceFirmware(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceFirmwareVersionUpdateResult, FirmwareV3.ReportDeviceFirmwareError&gt;</code>, with `result.value` of type <code>[DeviceFirmwareVersionUpdateResult](src/models/device-firmware-version-update-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.firmwareV3.synchronizeDeviceFirmware({
    acc: "0000123456-00001",
    body: { deviceList: ["15-digit IMEI"] },
  });
  // TODO: Handle 'response' of type DeviceFirmwareList
} catch (err) {
  // TODO: Handle 'err' of type FirmwareV3.SynchronizeDeviceFirmwareError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.firmwareV3.synchronizeDeviceFirmware({
  acc: "0000123456-00001",
  body: { deviceList: ["15-digit IMEI"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceFirmwareList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.firmwareV3.synchronizeDeviceFirmware(request)`

- **OnSuccess**: <code>[DeviceFirmwareList](src/models/device-firmware-list.ts)</code>
- **OnError**: throws <code>[FirmwareV3.SynchronizeDeviceFirmwareError](src/resources/firmware-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.firmwareV3.synchronizeDeviceFirmware(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceFirmwareList, FirmwareV3.SynchronizeDeviceFirmwareError&gt;</code>, with `result.value` of type <code>[DeviceFirmwareList](src/models/device-firmware-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountDevices.getAccountDeviceInformation({
    acc: "0000123456-00001",
    lastSeenDeviceId: "0",
    protocol: DevicesProtocol.Lwm2M,
  });
  // TODO: Handle 'response' of type V3AccountDeviceList
} catch (err) {
  // TODO: Handle 'err' of type AccountDevices.GetAccountDeviceInformationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountDevices.getAccountDeviceInformation({
  acc: "0000123456-00001",
  lastSeenDeviceId: "0",
  protocol: DevicesProtocol.Lwm2M,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3AccountDeviceList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>protocol?</code> | <code>[DevicesProtocol](src/models/devices-protocol.ts)</code> | Filter to retrieve a specific protocol type used.<br>**Default**: "LWM2M" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accountDevices.getAccountDeviceInformation(request)`

- **OnSuccess**: <code>[V3AccountDeviceList](src/models/v3-account-device-list.ts)</code>
- **OnError**: throws <code>[AccountDevices.GetAccountDeviceInformationError](src/resources/account-devices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountDevices.getAccountDeviceInformation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3AccountDeviceList, AccountDevices.GetAccountDeviceInformationError&gt;</code>, with `result.value` of type <code>[V3AccountDeviceList](src/models/v3-account-device-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountDevices.listAccountDevicesInformation({
    acc: "0000123456-00001",
    body: { deviceList: ["15-digit IMEI"] },
  });
  // TODO: Handle 'response' of type DeviceListResult
} catch (err) {
  // TODO: Handle 'err' of type AccountDevices.ListAccountDevicesInformationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountDevices.listAccountDevicesInformation({
  acc: "0000123456-00001",
  body: { deviceList: ["15-digit IMEI"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceListResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.accountDevices.listAccountDevicesInformation(request)`

- **OnSuccess**: <code>[DeviceListResult](src/models/device-list-result.ts)</code>
- **OnError**: throws <code>[AccountDevices.ListAccountDevicesInformationError](src/resources/account-devices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountDevices.listAccountDevicesInformation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceListResult, AccountDevices.ListAccountDevicesInformationError&gt;</code>, with `result.value` of type <code>[DeviceListResult](src/models/device-list-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV3.deregisterCallback5({
    acc: "0000123456-00001",
  });
  // TODO: Handle 'response' of type FotaV3SuccessResult
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementCallbacksV3.DeregisterCallback5Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementCallbacksV3.deregisterCallback5({
  acc: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FotaV3SuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementCallbacksV3.deregisterCallback5(request)`

- **OnSuccess**: <code>[FotaV3SuccessResult](src/models/fota-v3-success-result.ts)</code>
- **OnError**: throws <code>[SoftwareManagementCallbacksV3.DeregisterCallback5Error](src/resources/software-management-callbacks-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementCallbacksV3.deregisterCallback5(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FotaV3SuccessResult, SoftwareManagementCallbacksV3.DeregisterCallback5Error&gt;</code>, with `result.value` of type <code>[FotaV3SuccessResult](src/models/fota-v3-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV3.listRegisteredCallbacks5({
    acc: "0000123456-00001",
  });
  // TODO: Handle 'response' of type FotaV3CallbackSummary
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementCallbacksV3.ListRegisteredCallbacks5Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementCallbacksV3.listRegisteredCallbacks5({
  acc: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FotaV3CallbackSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementCallbacksV3.listRegisteredCallbacks5(request)`

- **OnSuccess**: <code>[FotaV3CallbackSummary](src/models/fota-v3-callback-summary.ts)</code>
- **OnError**: throws <code>[SoftwareManagementCallbacksV3.ListRegisteredCallbacks5Error](src/resources/software-management-callbacks-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementCallbacksV3.listRegisteredCallbacks5(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FotaV3CallbackSummary, SoftwareManagementCallbacksV3.ListRegisteredCallbacks5Error&gt;</code>, with `result.value` of type <code>[FotaV3CallbackSummary](src/models/fota-v3-callback-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV3.registerCallback5({
    acc: "0000123456-00001",
    body: { url: "https://255.255.11.135:50559/CallbackListener/FirmwareServiceMessages.asmx" },
  });
  // TODO: Handle 'response' of type FotaV3CallbackRegistrationResult
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementCallbacksV3.RegisterCallback5Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementCallbacksV3.registerCallback5({
  acc: "0000123456-00001",
  body: { url: "https://255.255.11.135:50559/CallbackListener/FirmwareServiceMessages.asmx" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FotaV3CallbackRegistrationResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementCallbacksV3.registerCallback5(request)`

- **OnSuccess**: <code>[FotaV3CallbackRegistrationResult](src/models/fota-v3-callback-registration-result.ts)</code>
- **OnError**: throws <code>[SoftwareManagementCallbacksV3.RegisterCallback5Error](src/resources/software-management-callbacks-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementCallbacksV3.registerCallback5(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FotaV3CallbackRegistrationResult, SoftwareManagementCallbacksV3.RegisterCallback5Error&gt;</code>, with `result.value` of type <code>[FotaV3CallbackRegistrationResult](src/models/fota-v3-callback-registration-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareManagementCallbacksV3.updateCallback2({
    acc: "0000123456-00001",
    body: { url: "https://255.255.11.135:50559/CallbackListener/FirmwareServiceMessages.asmx" },
  });
  // TODO: Handle 'response' of type FotaV3CallbackRegistrationResult
} catch (err) {
  // TODO: Handle 'err' of type SoftwareManagementCallbacksV3.UpdateCallback2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareManagementCallbacksV3.updateCallback2({
  acc: "0000123456-00001",
  body: { url: "https://255.255.11.135:50559/CallbackListener/FirmwareServiceMessages.asmx" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FotaV3CallbackRegistrationResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.softwareManagementCallbacksV3.updateCallback2(request)`

- **OnSuccess**: <code>[FotaV3CallbackRegistrationResult](src/models/fota-v3-callback-registration-result.ts)</code>
- **OnError**: throws <code>[SoftwareManagementCallbacksV3.UpdateCallback2Error](src/resources/software-management-callbacks-v3.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareManagementCallbacksV3.updateCallback2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FotaV3CallbackRegistrationResult, SoftwareManagementCallbacksV3.UpdateCallback2Error&gt;</code>, with `result.value` of type <code>[FotaV3CallbackRegistrationResult](src/models/fota-v3-callback-registration-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simSecureForIoTLicenses.assignLicenseToDevices({
    body: {
      accountName: "0000123456-00001",
      devices: [{ deviceIds: [{ id: "864508030109877", kind: "IMEI" }] }],
      skuNumber: "SIMSec-IoT-Lt",
    },
  });
  // TODO: Handle 'response' of type SecuritySuccessResult
} catch (err) {
  // TODO: Handle 'err' of type SimSecureForIoTLicenses.AssignLicenseToDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simSecureForIoTLicenses.assignLicenseToDevices({
  body: {
    accountName: "0000123456-00001",
    devices: [{ deviceIds: [{ id: "864508030109877", kind: "IMEI" }] }],
    skuNumber: "SIMSec-IoT-Lt",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SecuritySuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.simSecureForIoTLicenses.assignLicenseToDevices(request)`

- **OnSuccess**: <code>[SecuritySuccessResult](src/models/security-success-result.ts)</code>
- **OnError**: throws <code>[SimSecureForIoTLicenses.AssignLicenseToDevicesError](src/resources/sim-secure-for-io-tlicenses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.simSecureForIoTLicenses.assignLicenseToDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SecuritySuccessResult, SimSecureForIoTLicenses.AssignLicenseToDevicesError&gt;</code>, with `result.value` of type <code>[SecuritySuccessResult](src/models/security-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simSecureForIoTLicenses.unassignLicenseToDevices({
    xRequestId: "some example string",
  });
  // TODO: Handle 'response' of type SecuritySuccessResult
} catch (err) {
  // TODO: Handle 'err' of type SimSecureForIoTLicenses.UnassignLicenseToDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simSecureForIoTLicenses.unassignLicenseToDevices({
  xRequestId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SecuritySuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.simSecureForIoTLicenses.unassignLicenseToDevices(request)`

- **OnSuccess**: <code>[SecuritySuccessResult](src/models/security-success-result.ts)</code>
- **OnError**: throws <code>[SimSecureForIoTLicenses.UnassignLicenseToDevicesError](src/resources/sim-secure-for-io-tlicenses.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.simSecureForIoTLicenses.unassignLicenseToDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SecuritySuccessResult, SimSecureForIoTLicenses.UnassignLicenseToDevicesError&gt;</code>, with `result.value` of type <code>[SecuritySuccessResult](src/models/security-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountSubscriptions.listAccountSubscriptions({
    body: { accountName: "000012345600001", skuNumber: "SIMSec-IoT-Lt" },
  });
  // TODO: Handle 'response' of type SecuritySubscriptionResult
} catch (err) {
  // TODO: Handle 'err' of type AccountSubscriptions.ListAccountSubscriptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountSubscriptions.listAccountSubscriptions({
  body: { accountName: "000012345600001", skuNumber: "SIMSec-IoT-Lt" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SecuritySubscriptionResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.accountSubscriptions.listAccountSubscriptions(request)`

- **OnSuccess**: <code>[SecuritySubscriptionResult](src/models/security-subscription-result.ts)</code>
- **OnError**: throws <code>[AccountSubscriptions.ListAccountSubscriptionsError](src/resources/account-subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountSubscriptions.listAccountSubscriptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SecuritySubscriptionResult, AccountSubscriptions.ListAccountSubscriptionsError&gt;</code>, with `result.value` of type <code>[SecuritySubscriptionResult](src/models/security-subscription-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticsSubscriptions.getDiagnosticsSubscription({
    accountName: "0000123456-00001",
  });
  // TODO: Handle 'response' of type DiagnosticsSubscription
} catch (err) {
  // TODO: Handle 'err' of type DiagnosticsSubscriptions.GetDiagnosticsSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.diagnosticsSubscriptions.getDiagnosticsSubscription({
  accountName: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiagnosticsSubscription
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.diagnosticsSubscriptions.getDiagnosticsSubscription(request)`

- **OnSuccess**: <code>[DiagnosticsSubscription](src/models/diagnostics-subscription.ts)</code>
- **OnError**: throws <code>[DiagnosticsSubscriptions.GetDiagnosticsSubscriptionError](src/resources/diagnostics-subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.diagnosticsSubscriptions.getDiagnosticsSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiagnosticsSubscription, DiagnosticsSubscriptions.GetDiagnosticsSubscriptionError&gt;</code>, with `result.value` of type <code>[DiagnosticsSubscription](src/models/diagnostics-subscription.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticsObservations.startDiagnosticsObservation();
  // TODO: Handle 'response' of type DiagnosticsObservationResult
} catch (err) {
  // TODO: Handle 'err' of type DiagnosticsObservations.StartDiagnosticsObservationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.diagnosticsObservations.startDiagnosticsObservation().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiagnosticsObservationResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.diagnosticsObservations.startDiagnosticsObservation()`

- **OnSuccess**: <code>[DiagnosticsObservationResult](src/models/diagnostics-observation-result.ts)</code>
- **OnError**: throws <code>[DiagnosticsObservations.StartDiagnosticsObservationError](src/resources/diagnostics-observations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.diagnosticsObservations.startDiagnosticsObservation().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiagnosticsObservationResult, DiagnosticsObservations.StartDiagnosticsObservationError&gt;</code>, with `result.value` of type <code>[DiagnosticsObservationResult](src/models/diagnostics-observation-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticsObservations.stopDiagnosticsObservation({
    transactionId: "5f4bd2ff-5d7f-444d-af17-3f6a80bb2a94",
    accountName: "0000123456-00001",
  });
  // TODO: Handle 'response' of type DiagnosticsObservationResult
} catch (err) {
  // TODO: Handle 'err' of type DiagnosticsObservations.StopDiagnosticsObservationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.diagnosticsObservations.stopDiagnosticsObservation({
  transactionId: "5f4bd2ff-5d7f-444d-af17-3f6a80bb2a94",
  accountName: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiagnosticsObservationResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.diagnosticsObservations.stopDiagnosticsObservation(request)`

- **OnSuccess**: <code>[DiagnosticsObservationResult](src/models/diagnostics-observation-result.ts)</code>
- **OnError**: throws <code>[DiagnosticsObservations.StopDiagnosticsObservationError](src/resources/diagnostics-observations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.diagnosticsObservations.stopDiagnosticsObservation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiagnosticsObservationResult, DiagnosticsObservations.StopDiagnosticsObservationError&gt;</code>, with `result.value` of type <code>[DiagnosticsObservationResult](src/models/diagnostics-observation-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticsHistory.getDiagnosticsHistory();
  // TODO: Handle 'response' of type History[]
} catch (err) {
  // TODO: Handle 'err' of type DiagnosticsHistory.GetDiagnosticsHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.diagnosticsHistory.getDiagnosticsHistory().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type History[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.diagnosticsHistory.getDiagnosticsHistory()`

- **OnSuccess**: <code>[History](src/models/history.ts)[]</code>
- **OnError**: throws <code>[DiagnosticsHistory.GetDiagnosticsHistoryError](src/resources/diagnostics-history.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.diagnosticsHistory.getDiagnosticsHistory().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;History[], DiagnosticsHistory.GetDiagnosticsHistoryError&gt;</code>, with `result.value` of type <code>[History](src/models/history.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticsSettings.listDiagnosticsSettings({
    accountName: "0000123456-00001",
    devices: "864508030026238,IMEI",
  });
  // TODO: Handle 'response' of type DiagnosticObservationSetting[]
} catch (err) {
  // TODO: Handle 'err' of type DiagnosticsSettings.ListDiagnosticsSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.diagnosticsSettings.listDiagnosticsSettings({
  accountName: "0000123456-00001",
  devices: "864508030026238,IMEI",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiagnosticObservationSetting[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.diagnosticsSettings.listDiagnosticsSettings(request)`

- **OnSuccess**: <code>[DiagnosticObservationSetting](src/models/diagnostic-observation-setting.ts)[]</code>
- **OnError**: throws <code>[DiagnosticsSettings.ListDiagnosticsSettingsError](src/resources/diagnostics-settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.diagnosticsSettings.listDiagnosticsSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiagnosticObservationSetting[], DiagnosticsSettings.ListDiagnosticsSettingsError&gt;</code>, with `result.value` of type <code>[DiagnosticObservationSetting](src/models/diagnostic-observation-setting.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticsCallbacks.getDiagnosticsSubscriptionCallbackInfo({
    accountName: "0000123456-00001",
  });
  // TODO: Handle 'response' of type DeviceDiagnosticsCallback[]
} catch (err) {
  // TODO: Handle 'err' of type DiagnosticsCallbacks.GetDiagnosticsSubscriptionCallbackInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.diagnosticsCallbacks.getDiagnosticsSubscriptionCallbackInfo({
  accountName: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceDiagnosticsCallback[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.diagnosticsCallbacks.getDiagnosticsSubscriptionCallbackInfo(request)`

- **OnSuccess**: <code>[DeviceDiagnosticsCallback](src/models/device-diagnostics-callback.ts)[]</code>
- **OnError**: throws <code>[DiagnosticsCallbacks.GetDiagnosticsSubscriptionCallbackInfoError](src/resources/diagnostics-callbacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.diagnosticsCallbacks.getDiagnosticsSubscriptionCallbackInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceDiagnosticsCallback[], DiagnosticsCallbacks.GetDiagnosticsSubscriptionCallbackInfoError&gt;</code>, with `result.value` of type <code>[DeviceDiagnosticsCallback](src/models/device-diagnostics-callback.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticsCallbacks.registerDiagnosticsCallbackUrl();
  // TODO: Handle 'response' of type DeviceDiagnosticsCallback
} catch (err) {
  // TODO: Handle 'err' of type DiagnosticsCallbacks.RegisterDiagnosticsCallbackUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.diagnosticsCallbacks.registerDiagnosticsCallbackUrl().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceDiagnosticsCallback
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.diagnosticsCallbacks.registerDiagnosticsCallbackUrl()`

- **OnSuccess**: <code>[DeviceDiagnosticsCallback](src/models/device-diagnostics-callback.ts)</code>
- **OnError**: throws <code>[DiagnosticsCallbacks.RegisterDiagnosticsCallbackUrlError](src/resources/diagnostics-callbacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.diagnosticsCallbacks.registerDiagnosticsCallbackUrl().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceDiagnosticsCallback, DiagnosticsCallbacks.RegisterDiagnosticsCallbackUrlError&gt;</code>, with `result.value` of type <code>[DeviceDiagnosticsCallback](src/models/device-diagnostics-callback.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticsCallbacks.unregisterDiagnosticsCallback({
    accountName: "0000123456-00001",
    serviceName: "string",
  });
  // TODO: Handle 'response' of type DeviceDiagnosticsCallback
} catch (err) {
  // TODO: Handle 'err' of type DiagnosticsCallbacks.UnregisterDiagnosticsCallbackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.diagnosticsCallbacks.unregisterDiagnosticsCallback({
  accountName: "0000123456-00001",
  serviceName: "string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceDiagnosticsCallback
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.diagnosticsCallbacks.unregisterDiagnosticsCallback(request)`

- **OnSuccess**: <code>[DeviceDiagnosticsCallback](src/models/device-diagnostics-callback.ts)</code>
- **OnError**: throws <code>[DiagnosticsCallbacks.UnregisterDiagnosticsCallbackError](src/resources/diagnostics-callbacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.diagnosticsCallbacks.unregisterDiagnosticsCallback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceDiagnosticsCallback, DiagnosticsCallbacks.UnregisterDiagnosticsCallbackError&gt;</code>, with `result.value` of type <code>[DeviceDiagnosticsCallback](src/models/device-diagnostics-callback.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.diagnosticsFactoryReset.decivesRestart({
    body: {
      accountName: "0642233522-00003",
      action: "reboot",
      devices: [{ id: "355154080648401", kind: "IMEI" }],
    },
  });
  // TODO: Handle 'response' of type DiagnosticsObservationResult
} catch (err) {
  // TODO: Handle 'err' of type DiagnosticsFactoryReset.DecivesRestartError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.diagnosticsFactoryReset.decivesRestart({
  body: {
    accountName: "0642233522-00003",
    action: "reboot",
    devices: [{ id: "355154080648401", kind: "IMEI" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiagnosticsObservationResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.diagnosticsFactoryReset.decivesRestart(request)`

- **OnSuccess**: <code>[DiagnosticsObservationResult](src/models/diagnostics-observation-result.ts)</code>
- **OnError**: throws <code>[DiagnosticsFactoryReset.DecivesRestartError](src/resources/diagnostics-factory-reset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.diagnosticsFactoryReset.decivesRestart(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiagnosticsObservationResult, DiagnosticsFactoryReset.DecivesRestartError&gt;</code>, with `result.value` of type <code>[DiagnosticsObservationResult](src/models/diagnostics-observation-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Targets

> Source: [Targets](src/resources/targets.ts)

<details>
<summary><code>createAzureCentralIoTApplication(request: Targets.CreateAzureCentralIoTApplicationRequest, options?: RequestOptions): ApiPromise&lt;CreateIoTApplicationResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deploy a new Azure IoT Central application based on the Verizon ARM template within the specified Azure Active Directory account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.targets.createAzureCentralIoTApplication({
    billingaccountId: "some example string",
    body: {
      appName: "newarmapp1",
      billingAccountId: "0000123456-00001",
      clientId: "UUID",
      clientSecret: "client secret",
      emailIDs: "email@domain.com",
      resourcegroup: "Myresourcegroup",
      sampleIoTcApp: "{app ID}",
      subscriptionId: "{subscription ID}",
      tenantId: "{tenant ID}",
    },
  });
  // TODO: Handle 'response' of type CreateIoTApplicationResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.targets.createAzureCentralIoTApplication({
  billingaccountId: "some example string",
  body: {
    appName: "newarmapp1",
    billingAccountId: "0000123456-00001",
    clientId: "UUID",
    clientSecret: "client secret",
    emailIDs: "email@domain.com",
    resourcegroup: "Myresourcegroup",
    sampleIoTcApp: "{app ID}",
    subscriptionId: "{subscription ID}",
    tenantId: "{tenant ID}",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateIoTApplicationResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.targets.createAzureCentralIoTApplication(request)`

- **OnSuccess**: <code>[CreateIoTApplicationResponse](src/models/create-io-tapplication-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.targets.createAzureCentralIoTApplication(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateIoTApplicationResponse, ApiError&gt;</code>, with `result.value` of type <code>[CreateIoTApplicationResponse](src/models/create-io-tapplication-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTarget(request: Targets.CreateTargetRequestParams, options?: RequestOptions): ApiPromise&lt;Target, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Define a target to receive data streams, alerts, or callbacks. After creating the target resource, use its ID in a subscription to set up a data stream.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.targets.createTarget({
    body: {
      accountidentifier: { billingaccountid: "0000000000-00001" },
      billingaccountid: "0000000000-00001",
      kind: "ts.target",
      address: "https://your_IoT_Central_Application.azureiotcentral.com",
      addressscheme: "streamazureiot",
      fields: {
        httpheaders: {
          authorization:
            "SharedAccessSignature sr=d1f9b6bf-1380-41f6-b757-d9805e48392b&sig=EF5tnXClw3MWkb84OkIOUhMH%2FaS1DRD2nXT69QR8RD8%3D&skn=TSCCtoken&se=1648827260410",
        },
        devicetypes: ["cHeAssetTracker", "cHeAssetTrackerV2", "tgAssetTracker", "tgAssetTrackerV2"],
      },
    },
  });
  // TODO: Handle 'response' of type Target
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.targets.createTarget({
  body: {
    accountidentifier: { billingaccountid: "0000000000-00001" },
    billingaccountid: "0000000000-00001",
    kind: "ts.target",
    address: "https://your_IoT_Central_Application.azureiotcentral.com",
    addressscheme: "streamazureiot",
    fields: {
      httpheaders: {
        authorization:
          "SharedAccessSignature sr=d1f9b6bf-1380-41f6-b757-d9805e48392b&sig=EF5tnXClw3MWkb84OkIOUhMH%2FaS1DRD2nXT69QR8RD8%3D&skn=TSCCtoken&se=1648827260410",
      },
      devicetypes: ["cHeAssetTracker", "cHeAssetTrackerV2", "tgAssetTracker", "tgAssetTrackerV2"],
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Target
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.targets.createTarget(request)`

- **OnSuccess**: <code>[Target](src/models/target.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.targets.createTarget(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Target, ApiError&gt;</code>, with `result.value` of type <code>[Target](src/models/target.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTarget(request: Targets.DeleteTargetRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a target from a ThingSpace account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.targets.deleteTarget({
    body: {
      accountidentifier: { billingaccountid: "0000000000-00001" },
      resourceidentifier: { id: "2e61a17d-8fd1-6816-e995-e4c2528bf535" },
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.targets.deleteTarget({
  body: {
    accountidentifier: { billingaccountid: "0000000000-00001" },
    resourceidentifier: { id: "2e61a17d-8fd1-6816-e995-e4c2528bf535" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.targets.deleteTarget(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.targets.deleteTarget(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generateTargetExternalId(request: Targets.GenerateTargetExternalIdRequest, options?: RequestOptions): ApiPromise&lt;GenerateExternalIdResult, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a unique string that ThingSpace will pass to AWS for increased security.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.targets.generateTargetExternalId({
    body: { accountidentifier: { billingaccountid: "0000000000-00001" } },
  });
  // TODO: Handle 'response' of type GenerateExternalIdResult
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.targets.generateTargetExternalId({
  body: { accountidentifier: { billingaccountid: "0000000000-00001" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GenerateExternalIdResult
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.targets.generateTargetExternalId(request)`

- **OnSuccess**: <code>[GenerateExternalIdResult](src/models/generate-external-id-result.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.targets.generateTargetExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GenerateExternalIdResult, ApiError&gt;</code>, with `result.value` of type <code>[GenerateExternalIdResult](src/models/generate-external-id-result.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryTarget(request: Targets.QueryTargetRequestParams, options?: RequestOptions): ApiPromise&lt;Target[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for targets by property values. Returns an array of all matching target resources.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.targets.queryTarget({
    body: {
      accountidentifier: { billingaccountid: "1223334444-00001" },
      resourceidentifier: { id: "dd1682d3-2d80-cefc-f3ee-25154800beff" },
    },
  });
  // TODO: Handle 'response' of type Target[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.targets.queryTarget({
  body: {
    accountidentifier: { billingaccountid: "1223334444-00001" },
    resourceidentifier: { id: "dd1682d3-2d80-cefc-f3ee-25154800beff" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Target[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.targets.queryTarget(request)`

- **OnSuccess**: <code>[Target](src/models/target.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.targets.queryTarget(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Target[], ApiError&gt;</code>, with `result.value` of type <code>[Target](src/models/target.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CloudConnectorSubscriptions

> Source: [CloudConnectorSubscriptions](src/resources/cloud-connector-subscriptions.ts)

<details>
<summary><code>createSubscription(request: CloudConnectorSubscriptions.CreateSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;Subscription, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a subscription to define a streaming channel that sends data from devices in the account to an endpoint defined in a target resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudConnectorSubscriptions.createSubscription({
    body: {
      accountidentifier: { billingaccountid: "1223334444-00001" },
      email: "me@mycompany.com",
      billingaccountid: "1223334444-00001",
      streamkind: "ts.event",
      targetid: "{target ID}",
      name: "Account subscription 1",
      allowaggregation: false,
    },
  });
  // TODO: Handle 'response' of type Subscription
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudConnectorSubscriptions.createSubscription({
  body: {
    accountidentifier: { billingaccountid: "1223334444-00001" },
    email: "me@mycompany.com",
    billingaccountid: "1223334444-00001",
    streamkind: "ts.event",
    targetid: "{target ID}",
    name: "Account subscription 1",
    allowaggregation: false,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Subscription
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.cloudConnectorSubscriptions.createSubscription(request)`

- **OnSuccess**: <code>[Subscription](src/models/subscription.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.cloudConnectorSubscriptions.createSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Subscription, ApiError&gt;</code>, with `result.value` of type <code>[Subscription](src/models/subscription.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSubscription(request: CloudConnectorSubscriptions.DeleteSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a subscription from a ThingSpace account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.cloudConnectorSubscriptions.deleteSubscription({
    body: {
      accountidentifier: { billingaccountid: "1223334444-00001" },
      resourceidentifier: { id: "f8b112df-739c-6236-f059-106c67bafd99" },
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudConnectorSubscriptions.deleteSubscription({
  body: {
    accountidentifier: { billingaccountid: "1223334444-00001" },
    resourceidentifier: { id: "f8b112df-739c-6236-f059-106c67bafd99" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.cloudConnectorSubscriptions.deleteSubscription(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.cloudConnectorSubscriptions.deleteSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>querySubscription(request: CloudConnectorSubscriptions.QuerySubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;Subscription[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for subscriptions by property values. Returns an array of all matching subscription resources.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudConnectorSubscriptions.querySubscription({
    body: {
      accountidentifier: { billingaccountid: "1223334444-00001" },
      resourceidentifier: { id: "dd1682d3-2d80-cefc-f3ee-25154800beff" },
    },
  });
  // TODO: Handle 'response' of type Subscription[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudConnectorSubscriptions.querySubscription({
  body: {
    accountidentifier: { billingaccountid: "1223334444-00001" },
    resourceidentifier: { id: "dd1682d3-2d80-cefc-f3ee-25154800beff" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Subscription[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.cloudConnectorSubscriptions.querySubscription(request)`

- **OnSuccess**: <code>[Subscription](src/models/subscription.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.cloudConnectorSubscriptions.querySubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Subscription[], ApiError&gt;</code>, with `result.value` of type <code>[Subscription](src/models/subscription.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CloudConnectorDevices

> Source: [CloudConnectorDevices](src/resources/cloud-connector-devices.ts)

<details>
<summary><code>deleteDeviceFromAccount(request: CloudConnectorDevices.DeleteDeviceFromAccountRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a device from a ThingSpace account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.cloudConnectorDevices.deleteDeviceFromAccount({
    body: {
      accountidentifier: { billingaccountid: "1223334444-00001" },
      resourceidentifier: { imei: "864508030084997" },
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudConnectorDevices.deleteDeviceFromAccount({
  body: {
    accountidentifier: { billingaccountid: "1223334444-00001" },
    resourceidentifier: { imei: "864508030084997" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.cloudConnectorDevices.deleteDeviceFromAccount(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.cloudConnectorDevices.deleteDeviceFromAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>findDeviceByPropertyValues(request: CloudConnectorDevices.FindDeviceByPropertyValuesRequest, options?: RequestOptions): ApiPromise&lt;FindDeviceByPropertyResponseList, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find devices by property values. Returns an array of all matching device resources.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudConnectorDevices.findDeviceByPropertyValues({
    body: {
      accountidentifier: { billingaccountid: "1223334444-00001" },
      resourceidentifier: { imei: "159495694333703" },
    },
  });
  // TODO: Handle 'response' of type FindDeviceByPropertyResponseList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudConnectorDevices.findDeviceByPropertyValues({
  body: {
    accountidentifier: { billingaccountid: "1223334444-00001" },
    resourceidentifier: { imei: "159495694333703" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FindDeviceByPropertyResponseList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.cloudConnectorDevices.findDeviceByPropertyValues(request)`

- **OnSuccess**: <code>[FindDeviceByPropertyResponseList](src/models/find-device-by-property-response-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.cloudConnectorDevices.findDeviceByPropertyValues(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FindDeviceByPropertyResponseList, ApiError&gt;</code>, with `result.value` of type <code>[FindDeviceByPropertyResponseList](src/models/find-device-by-property-response-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchDeviceEventHistory(request: CloudConnectorDevices.SearchDeviceEventHistoryRequestParams, options?: RequestOptions): ApiPromise&lt;SearchDeviceEventHistoryResponseList, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search device event history to find events that match criteria.Sensor readings, configuration changes, and other device data are all stored as events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudConnectorDevices.searchDeviceEventHistory({
    body: {
      accountidentifier: { billingaccountid: "1223334444-00001" },
      selection: { kind: "ts.event.configuration" },
      resourceidentifier: { imei: "864508030084997" },
      limitnumber: 2,
    },
  });
  // TODO: Handle 'response' of type SearchDeviceEventHistoryResponseList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudConnectorDevices.searchDeviceEventHistory({
  body: {
    accountidentifier: { billingaccountid: "1223334444-00001" },
    selection: { kind: "ts.event.configuration" },
    resourceidentifier: { imei: "864508030084997" },
    limitnumber: 2,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchDeviceEventHistoryResponseList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.cloudConnectorDevices.searchDeviceEventHistory(request)`

- **OnSuccess**: <code>[SearchDeviceEventHistoryResponseList](src/models/search-device-event-history-response-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.cloudConnectorDevices.searchDeviceEventHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchDeviceEventHistoryResponseList, ApiError&gt;</code>, with `result.value` of type <code>[SearchDeviceEventHistoryResponseList](src/models/search-device-event-history-response-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchDevicesResourcesByPropertyValues(request: CloudConnectorDevices.SearchDevicesResourcesByPropertyValuesRequest, options?: RequestOptions): ApiPromise&lt;SearchDeviceByPropertyResponseList, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for devices by property values. Returns an array of all matching device resources.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudConnectorDevices.searchDevicesResourcesByPropertyValues({
    body: {
      accountidentifier: { billingaccountid: "1223334444-00001" },
      selection: { iccid: "89148000003499233389" },
    },
  });
  // TODO: Handle 'response' of type SearchDeviceByPropertyResponseList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudConnectorDevices.searchDevicesResourcesByPropertyValues({
  body: {
    accountidentifier: { billingaccountid: "1223334444-00001" },
    selection: { iccid: "89148000003499233389" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchDeviceByPropertyResponseList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.cloudConnectorDevices.searchDevicesResourcesByPropertyValues(request)`

- **OnSuccess**: <code>[SearchDeviceByPropertyResponseList](src/models/search-device-by-property-response-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.cloudConnectorDevices.searchDevicesResourcesByPropertyValues(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchDeviceByPropertyResponseList, ApiError&gt;</code>, with `result.value` of type <code>[SearchDeviceByPropertyResponseList](src/models/search-device-by-property-response-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchSensorReadings(request: CloudConnectorDevices.SearchSensorReadingsRequest, options?: RequestOptions): ApiPromise&lt;SearchSensorHistoryResponseList, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the readings of a specified sensor, with the most recent reading first. Sensor readings are stored as events; this request an array of events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudConnectorDevices.searchSensorReadings({
    fieldname: "some example string",
    body: {
      accountidentifier: { billingaccountid: "1223334444-00001" },
      resourceidentifier: { imei: "864508030084997" },
      limitnumber: 2,
    },
  });
  // TODO: Handle 'response' of type SearchSensorHistoryResponseList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudConnectorDevices.searchSensorReadings({
  fieldname: "some example string",
  body: {
    accountidentifier: { billingaccountid: "1223334444-00001" },
    resourceidentifier: { imei: "864508030084997" },
    limitnumber: 2,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSensorHistoryResponseList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.cloudConnectorDevices.searchSensorReadings(request)`

- **OnSuccess**: <code>[SearchSensorHistoryResponseList](src/models/search-sensor-history-response-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.cloudConnectorDevices.searchSensorReadings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSensorHistoryResponseList, ApiError&gt;</code>, with `result.value` of type <code>[SearchSensorHistoryResponseList](src/models/search-sensor-history-response-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDevicesConfigurationValue(request: CloudConnectorDevices.UpdateDevicesConfigurationValueRequest, options?: RequestOptions): ApiPromise&lt;ChangeConfigurationResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change configuration values on a device, such as setting how often a device records and reports sensor readings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cloudConnectorDevices.updateDevicesConfigurationValue({
    body: {
      accountidentifier: { billingaccountid: "1223334444-00001" },
      resourceidentifier: { imei: "864508030147323" },
      configuration: { frequency: "Low" },
    },
  });
  // TODO: Handle 'response' of type ChangeConfigurationResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cloudConnectorDevices.updateDevicesConfigurationValue({
  body: {
    accountidentifier: { billingaccountid: "1223334444-00001" },
    resourceidentifier: { imei: "864508030147323" },
    configuration: { frequency: "Low" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChangeConfigurationResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.cloudConnectorDevices.updateDevicesConfigurationValue(request)`

- **OnSuccess**: <code>[ChangeConfigurationResponse](src/models/change-configuration-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.cloudConnectorDevices.updateDevicesConfigurationValue(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChangeConfigurationResponse, ApiError&gt;</code>, with `result.value` of type <code>[ChangeConfigurationResponse](src/models/change-configuration-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.hplDeviceManagement.addDevicesHyperPrecise({
    body: {
      state: "preactive",
      devicesToAdd: [
        { deviceIds: [{ kind: "imei", id: "15-digit IMEI" }, { kind: "iccid", id: "20-digit ICCID" }] },
        { deviceIds: [{ kind: "imei", id: "15-digit IMEI" }, { kind: "iccid", id: "20-digit ICCID" }] },
      ],
      accountName: "0000123456-00001",
      customFields: [{ key: "CustomField2", value: "SuperVend" }],
      groupName: "West Region",
    },
  });
  // TODO: Handle 'response' of type HplAddDevicesRequest[]
} catch (err) {
  // TODO: Handle 'err' of type HplDeviceManagement.AddDevicesHyperPreciseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.hplDeviceManagement.addDevicesHyperPrecise({
  body: {
    state: "preactive",
    devicesToAdd: [
      { deviceIds: [{ kind: "imei", id: "15-digit IMEI" }, { kind: "iccid", id: "20-digit ICCID" }] },
      { deviceIds: [{ kind: "imei", id: "15-digit IMEI" }, { kind: "iccid", id: "20-digit ICCID" }] },
    ],
    accountName: "0000123456-00001",
    customFields: [{ key: "CustomField2", value: "SuperVend" }],
    groupName: "West Region",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HplAddDevicesRequest[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.hplDeviceManagement.addDevicesHyperPrecise(request)`

- **OnSuccess**: <code>[HplAddDevicesRequest](src/models/hpl-add-devices-request.ts)[]</code>
- **OnError**: throws <code>[HplDeviceManagement.AddDevicesHyperPreciseError](src/resources/hpl-device-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.hplDeviceManagement.addDevicesHyperPrecise(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HplAddDevicesRequest[], HplDeviceManagement.AddDevicesHyperPreciseError&gt;</code>, with `result.value` of type <code>[HplAddDevicesRequest](src/models/hpl-add-devices-request.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceServiceManagement.getDeviceHyperPreciseStatus({
    imei: "15-digit IMEI",
    accountNumber: "0000123456-00001",
  });
  // TODO: Handle 'response' of type BullseyeServiceResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceServiceManagement.GetDeviceHyperPreciseStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceServiceManagement.getDeviceHyperPreciseStatus({
  imei: "15-digit IMEI",
  accountNumber: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BullseyeServiceResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceServiceManagement.getDeviceHyperPreciseStatus(request)`

- **OnSuccess**: <code>[BullseyeServiceResult](src/models/bullseye-service-result.ts)</code>
- **OnError**: throws <code>[DeviceServiceManagement.GetDeviceHyperPreciseStatusError](src/resources/device-service-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceServiceManagement.getDeviceHyperPreciseStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BullseyeServiceResult, DeviceServiceManagement.GetDeviceHyperPreciseStatusError&gt;</code>, with `result.value` of type <code>[BullseyeServiceResult](src/models/bullseye-service-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceServiceManagement.updateDeviceHyperPreciseStatus({
    body: {
      deviceList: [{ imei: "some example string", bullseyeEnable: {} }],
      accountNumber: "some example string",
    },
  });
  // TODO: Handle 'response' of type BullseyeServiceResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceServiceManagement.UpdateDeviceHyperPreciseStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceServiceManagement.updateDeviceHyperPreciseStatus({
  body: {
    deviceList: [{ imei: "some example string", bullseyeEnable: {} }],
    accountNumber: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BullseyeServiceResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceServiceManagement.updateDeviceHyperPreciseStatus(request)`

- **OnSuccess**: <code>[BullseyeServiceResult](src/models/bullseye-service-result.ts)</code>
- **OnError**: throws <code>[DeviceServiceManagement.UpdateDeviceHyperPreciseStatusError](src/resources/device-service-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceServiceManagement.updateDeviceHyperPreciseStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BullseyeServiceResult, DeviceServiceManagement.UpdateDeviceHyperPreciseStatusError&gt;</code>, with `result.value` of type <code>[BullseyeServiceResult](src/models/bullseye-service-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceReports.calculateAggregatedReportAsynchronous({
    body: {
      accountNumber: "0000123456-00001",
      startDate: "2022-12-09T22:01:06.217Z",
      endDate: "2022-12-09T22:01:08.734Z",
      imei: ["15-digit IMEI"],
      deviceGroup: "string",
      dataPlan: "string",
      noSessionFlag: false,
    },
  });
  // TODO: Handle 'response' of type AggregatedReportCallbackResult
} catch (err) {
  // TODO: Handle 'err' of type DeviceReports.CalculateAggregatedReportAsynchronousError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceReports.calculateAggregatedReportAsynchronous({
  body: {
    accountNumber: "0000123456-00001",
    startDate: "2022-12-09T22:01:06.217Z",
    endDate: "2022-12-09T22:01:08.734Z",
    imei: ["15-digit IMEI"],
    deviceGroup: "string",
    dataPlan: "string",
    noSessionFlag: false,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AggregatedReportCallbackResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceReports.calculateAggregatedReportAsynchronous(request)`

- **OnSuccess**: <code>[AggregatedReportCallbackResult](src/models/aggregated-report-callback-result.ts)</code>
- **OnError**: throws <code>[DeviceReports.CalculateAggregatedReportAsynchronousError](src/resources/device-reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceReports.calculateAggregatedReportAsynchronous(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AggregatedReportCallbackResult, DeviceReports.CalculateAggregatedReportAsynchronousError&gt;</code>, with `result.value` of type <code>[AggregatedReportCallbackResult](src/models/aggregated-report-callback-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceReports.calculateAggregatedReportSynchronous({
    body: {
      accountNumber: "0000123456-00001",
      startDate: "2022-12-09T22:01:06.217Z",
      endDate: "2022-12-09T22:01:08.734Z",
      imei: ["15-digit IMEI"],
      deviceGroup: "string",
      dataPlan: "string",
      noSessionFlag: false,
    },
  });
  // TODO: Handle 'response' of type AggregateSessionReport
} catch (err) {
  // TODO: Handle 'err' of type DeviceReports.CalculateAggregatedReportSynchronousError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceReports.calculateAggregatedReportSynchronous({
  body: {
    accountNumber: "0000123456-00001",
    startDate: "2022-12-09T22:01:06.217Z",
    endDate: "2022-12-09T22:01:08.734Z",
    imei: ["15-digit IMEI"],
    deviceGroup: "string",
    dataPlan: "string",
    noSessionFlag: false,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AggregateSessionReport
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceReports.calculateAggregatedReportSynchronous(request)`

- **OnSuccess**: <code>[AggregateSessionReport](src/models/aggregate-session-report.ts)</code>
- **OnError**: throws <code>[DeviceReports.CalculateAggregatedReportSynchronousError](src/resources/device-reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceReports.calculateAggregatedReportSynchronous(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AggregateSessionReport, DeviceReports.CalculateAggregatedReportSynchronousError&gt;</code>, with `result.value` of type <code>[AggregateSessionReport](src/models/aggregate-session-report.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceReports.getSessionsReport({
    body: {
      accountNumber: "0000123456-00001",
      imei: "15-digit IMEI",
      startDate: "2022-12-09T22:01:06.217Z",
      endDate: "2022-12-09T22:01:08.734Z",
      durationLow: 0,
      durationHigh: 0,
    },
  });
  // TODO: Handle 'response' of type SessionReport
} catch (err) {
  // TODO: Handle 'err' of type DeviceReports.GetSessionsReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceReports.getSessionsReport({
  body: {
    accountNumber: "0000123456-00001",
    imei: "15-digit IMEI",
    startDate: "2022-12-09T22:01:06.217Z",
    endDate: "2022-12-09T22:01:08.734Z",
    durationLow: 0,
    durationHigh: 0,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionReport
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceReports.getSessionsReport(request)`

- **OnSuccess**: <code>[SessionReport](src/models/session-report.ts)</code>
- **OnError**: throws <code>[DeviceReports.GetSessionsReportError](src/resources/device-reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceReports.getSessionsReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionReport, DeviceReports.GetSessionsReportError&gt;</code>, with `result.value` of type <code>[SessionReport](src/models/session-report.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.hyperPreciseLocationCallbacks.deregisterCallback6({
    accountNumber: "0000123456-00001",
    service: "BullseyeReporting",
  });
} catch (err) {
  // TODO: Handle 'err' of type HyperPreciseLocationCallbacks.DeregisterCallback6Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.hyperPreciseLocationCallbacks.deregisterCallback6({
  accountNumber: "0000123456-00001",
  service: "BullseyeReporting",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.hyperPreciseLocationCallbacks.deregisterCallback6(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[HyperPreciseLocationCallbacks.DeregisterCallback6Error](src/resources/hyper-precise-location-callbacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.hyperPreciseLocationCallbacks.deregisterCallback6(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, HyperPreciseLocationCallbacks.DeregisterCallback6Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.hyperPreciseLocationCallbacks.listRegisteredCallbacks6({
    accountNumber: "0000123456-00001",
  });
  // TODO: Handle 'response' of type CallbackCreated[]
} catch (err) {
  // TODO: Handle 'err' of type HyperPreciseLocationCallbacks.ListRegisteredCallbacks6Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.hyperPreciseLocationCallbacks.listRegisteredCallbacks6({
  accountNumber: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CallbackCreated[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.hyperPreciseLocationCallbacks.listRegisteredCallbacks6(request)`

- **OnSuccess**: <code>[CallbackCreated](src/models/callback-created.ts)[]</code>
- **OnError**: throws <code>[HyperPreciseLocationCallbacks.ListRegisteredCallbacks6Error](src/resources/hyper-precise-location-callbacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.hyperPreciseLocationCallbacks.listRegisteredCallbacks6(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CallbackCreated[], HyperPreciseLocationCallbacks.ListRegisteredCallbacks6Error&gt;</code>, with `result.value` of type <code>[CallbackCreated](src/models/callback-created.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.hyperPreciseLocationCallbacks.registerCallback6({
    accountNumber: "0000123456-00001",
    body: { name: "BullseyeReporting", url: "https://tsustgtests.mocklab.io/notifications/bullseye" },
  });
  // TODO: Handle 'response' of type CallbackRegistered
} catch (err) {
  // TODO: Handle 'err' of type HyperPreciseLocationCallbacks.RegisterCallback6Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.hyperPreciseLocationCallbacks.registerCallback6({
  accountNumber: "0000123456-00001",
  body: { name: "BullseyeReporting", url: "https://tsustgtests.mocklab.io/notifications/bullseye" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CallbackRegistered
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.hyperPreciseLocationCallbacks.registerCallback6(request)`

- **OnSuccess**: <code>[CallbackRegistered](src/models/callback-registered.ts)</code>
- **OnError**: throws <code>[HyperPreciseLocationCallbacks.RegisterCallback6Error](src/resources/hyper-precise-location-callbacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.hyperPreciseLocationCallbacks.registerCallback6(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CallbackRegistered, HyperPreciseLocationCallbacks.RegisterCallback6Error&gt;</code>, with `result.value` of type <code>[CallbackRegistered](src/models/callback-registered.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceCredentialManagement.dropCredentials({
    body: {
      ecpd: "some example string",
      accountNumber: "some example string",
      items: [{ imei: "some example string" }],
    },
  });
  // TODO: Handle 'response' of type DropResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceCredentialManagement.DropCredentialsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceCredentialManagement.dropCredentials({
  body: {
    ecpd: "some example string",
    accountNumber: "some example string",
    items: [{ imei: "some example string" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DropResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceCredentialManagement.dropCredentials(request)`

- **OnSuccess**: <code>[DropResponse](src/models/drop-response.ts)</code>
- **OnError**: throws <code>[DeviceCredentialManagement.DropCredentialsError](src/resources/device-credential-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceCredentialManagement.dropCredentials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DropResponse, DeviceCredentialManagement.DropCredentialsError&gt;</code>, with `result.value` of type <code>[DropResponse](src/models/drop-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generateCredentials(request: DeviceCredentialManagement.GenerateCredentialsRequest, options?: RequestOptions): ApiPromise&lt;GenerateResponse, DeviceCredentialManagement.GenerateCredentialsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceCredentialManagement.generateCredentials({
    body: {
      ecpd: "some example string",
      accountNumber: "some example string",
      items: [{ imei: "some example string" }],
    },
  });
  // TODO: Handle 'response' of type GenerateResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceCredentialManagement.GenerateCredentialsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceCredentialManagement.generateCredentials({
  body: {
    ecpd: "some example string",
    accountNumber: "some example string",
    items: [{ imei: "some example string" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GenerateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceCredentialManagement.generateCredentials(request)`

- **OnSuccess**: <code>[GenerateResponse](src/models/generate-response.ts)</code>
- **OnError**: throws <code>[DeviceCredentialManagement.GenerateCredentialsError](src/resources/device-credential-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceCredentialManagement.generateCredentials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GenerateResponse, DeviceCredentialManagement.GenerateCredentialsError&gt;</code>, with `result.value` of type <code>[GenerateResponse](src/models/generate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resetCredentials(request: DeviceCredentialManagement.ResetCredentialsRequest, options?: RequestOptions): ApiPromise&lt;GenerateResponse, DeviceCredentialManagement.ResetCredentialsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceCredentialManagement.resetCredentials({
    body: {
      ecpd: "some example string",
      accountNumber: "some example string",
      items: [{ imei: "some example string" }],
    },
  });
  // TODO: Handle 'response' of type GenerateResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceCredentialManagement.ResetCredentialsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceCredentialManagement.resetCredentials({
  body: {
    ecpd: "some example string",
    accountNumber: "some example string",
    items: [{ imei: "some example string" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GenerateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceCredentialManagement.resetCredentials(request)`

- **OnSuccess**: <code>[GenerateResponse](src/models/generate-response.ts)</code>
- **OnError**: throws <code>[DeviceCredentialManagement.ResetCredentialsError](src/resources/device-credential-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceCredentialManagement.resetCredentials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GenerateResponse, DeviceCredentialManagement.ResetCredentialsError&gt;</code>, with `result.value` of type <code>[GenerateResponse](src/models/generate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveCredentials(request: DeviceCredentialManagement.RetrieveCredentialsRequest, options?: RequestOptions): ApiPromise&lt;RetrieveResponse, DeviceCredentialManagement.RetrieveCredentialsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceCredentialManagement.retrieveCredentials({
    body: {
      ecpd: "some example string",
      accountNumber: "some example string",
      items: [{ imei: "some example string" }],
    },
  });
  // TODO: Handle 'response' of type RetrieveResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceCredentialManagement.RetrieveCredentialsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceCredentialManagement.retrieveCredentials({
  body: {
    ecpd: "some example string",
    accountNumber: "some example string",
    items: [{ imei: "some example string" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceCredentialManagement.retrieveCredentials(request)`

- **OnSuccess**: <code>[RetrieveResponse](src/models/retrieve-response.ts)</code>
- **OnError**: throws <code>[DeviceCredentialManagement.RetrieveCredentialsError](src/resources/device-credential-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceCredentialManagement.retrieveCredentials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveResponse, DeviceCredentialManagement.RetrieveCredentialsError&gt;</code>, with `result.value` of type <code>[RetrieveResponse](src/models/retrieve-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalySettings.activateAnomalyDetection({
    body: {
      accountName: "0000123456-00001",
      requestType: "anomaly",
      sensitivityParameter: {
        abnormalMaxValue: 1.1,
        enableAbnormal: true,
        enableVeryAbnormal: true,
        veryAbnormalMaxValue: 0.55,
      },
    },
  });
  // TODO: Handle 'response' of type IntelligenceSuccessResult
} catch (err) {
  // TODO: Handle 'err' of type AnomalySettings.ActivateAnomalyDetectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.anomalySettings.activateAnomalyDetection({
  body: {
    accountName: "0000123456-00001",
    requestType: "anomaly",
    sensitivityParameter: {
      abnormalMaxValue: 1.1,
      enableAbnormal: true,
      enableVeryAbnormal: true,
      veryAbnormalMaxValue: 0.55,
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IntelligenceSuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.anomalySettings.activateAnomalyDetection(request)`

- **OnSuccess**: <code>[IntelligenceSuccessResult](src/models/intelligence-success-result.ts)</code>
- **OnError**: throws <code>[AnomalySettings.ActivateAnomalyDetectionError](src/resources/anomaly-settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.anomalySettings.activateAnomalyDetection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IntelligenceSuccessResult, AnomalySettings.ActivateAnomalyDetectionError&gt;</code>, with `result.value` of type <code>[IntelligenceSuccessResult](src/models/intelligence-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalySettings.listAnomalyDetectionSettings({
    accountName: "0000123456-00001",
  });
  // TODO: Handle 'response' of type AnomalyDetectionSettings
} catch (err) {
  // TODO: Handle 'err' of type AnomalySettings.ListAnomalyDetectionSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.anomalySettings.listAnomalyDetectionSettings({
  accountName: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnomalyDetectionSettings
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.anomalySettings.listAnomalyDetectionSettings(request)`

- **OnSuccess**: <code>[AnomalyDetectionSettings](src/models/anomaly-detection-settings.ts)</code>
- **OnError**: throws <code>[AnomalySettings.ListAnomalyDetectionSettingsError](src/resources/anomaly-settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.anomalySettings.listAnomalyDetectionSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnomalyDetectionSettings, AnomalySettings.ListAnomalyDetectionSettingsError&gt;</code>, with `result.value` of type <code>[AnomalyDetectionSettings](src/models/anomaly-detection-settings.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalySettings.resetAnomalyDetectionParameters({
    accountName: "0000123456-00001",
  });
  // TODO: Handle 'response' of type IntelligenceSuccessResult
} catch (err) {
  // TODO: Handle 'err' of type AnomalySettings.ResetAnomalyDetectionParametersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.anomalySettings.resetAnomalyDetectionParameters({
  accountName: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IntelligenceSuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.anomalySettings.resetAnomalyDetectionParameters(request)`

- **OnSuccess**: <code>[IntelligenceSuccessResult](src/models/intelligence-success-result.ts)</code>
- **OnError**: throws <code>[AnomalySettings.ResetAnomalyDetectionParametersError](src/resources/anomaly-settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.anomalySettings.resetAnomalyDetectionParameters(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IntelligenceSuccessResult, AnomalySettings.ResetAnomalyDetectionParametersError&gt;</code>, with `result.value` of type <code>[IntelligenceSuccessResult](src/models/intelligence-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalyTriggers.createAnomalyDetectionTrigger({ body: {} });
  // TODO: Handle 'response' of type AnomalyDetectionTrigger
} catch (err) {
  // TODO: Handle 'err' of type AnomalyTriggers.CreateAnomalyDetectionTriggerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.anomalyTriggers.createAnomalyDetectionTrigger({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnomalyDetectionTrigger
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.anomalyTriggers.createAnomalyDetectionTrigger(request)`

- **OnSuccess**: <code>[AnomalyDetectionTrigger](src/models/anomaly-detection-trigger.ts)</code>
- **OnError**: throws <code>[AnomalyTriggers.CreateAnomalyDetectionTriggerError](src/resources/anomaly-triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.anomalyTriggers.createAnomalyDetectionTrigger(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnomalyDetectionTrigger, AnomalyTriggers.CreateAnomalyDetectionTriggerError&gt;</code>, with `result.value` of type <code>[AnomalyDetectionTrigger](src/models/anomaly-detection-trigger.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalyTriggers.deleteAnomalyDetectionTrigger({
    triggerId: "be1b5958-3e11-41db-9abd-b1b7618c0035",
  });
  // TODO: Handle 'response' of type AnomalyDetectionTrigger
} catch (err) {
  // TODO: Handle 'err' of type AnomalyTriggers.DeleteAnomalyDetectionTriggerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.anomalyTriggers.deleteAnomalyDetectionTrigger({
  triggerId: "be1b5958-3e11-41db-9abd-b1b7618c0035",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnomalyDetectionTrigger
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.anomalyTriggers.deleteAnomalyDetectionTrigger(request)`

- **OnSuccess**: <code>[AnomalyDetectionTrigger](src/models/anomaly-detection-trigger.ts)</code>
- **OnError**: throws <code>[AnomalyTriggers.DeleteAnomalyDetectionTriggerError](src/resources/anomaly-triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.anomalyTriggers.deleteAnomalyDetectionTrigger(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnomalyDetectionTrigger, AnomalyTriggers.DeleteAnomalyDetectionTriggerError&gt;</code>, with `result.value` of type <code>[AnomalyDetectionTrigger](src/models/anomaly-detection-trigger.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalyTriggers.listAnomalyDetectionTriggerSettings({
    triggerId: "be1b5958-3e11-41db-9abd-b1b7618c0035",
  });
  // TODO: Handle 'response' of type GetTriggerResponseList[]
} catch (err) {
  // TODO: Handle 'err' of type AnomalyTriggers.ListAnomalyDetectionTriggerSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.anomalyTriggers.listAnomalyDetectionTriggerSettings({
  triggerId: "be1b5958-3e11-41db-9abd-b1b7618c0035",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTriggerResponseList[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.anomalyTriggers.listAnomalyDetectionTriggerSettings(request)`

- **OnSuccess**: <code>[GetTriggerResponseList](src/models/get-trigger-response-list.ts)[]</code>
- **OnError**: throws <code>[AnomalyTriggers.ListAnomalyDetectionTriggerSettingsError](src/resources/anomaly-triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.anomalyTriggers.listAnomalyDetectionTriggerSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTriggerResponseList[], AnomalyTriggers.ListAnomalyDetectionTriggerSettingsError&gt;</code>, with `result.value` of type <code>[GetTriggerResponseList](src/models/get-trigger-response-list.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalyTriggers.listAnomalyDetectionTriggers();
  // TODO: Handle 'response' of type GetTriggerResponseList[]
} catch (err) {
  // TODO: Handle 'err' of type AnomalyTriggers.ListAnomalyDetectionTriggersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.anomalyTriggers.listAnomalyDetectionTriggers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTriggerResponseList[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.anomalyTriggers.listAnomalyDetectionTriggers()`

- **OnSuccess**: <code>[GetTriggerResponseList](src/models/get-trigger-response-list.ts)[]</code>
- **OnError**: throws <code>[AnomalyTriggers.ListAnomalyDetectionTriggersError](src/resources/anomaly-triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.anomalyTriggers.listAnomalyDetectionTriggers().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTriggerResponseList[], AnomalyTriggers.ListAnomalyDetectionTriggersError&gt;</code>, with `result.value` of type <code>[GetTriggerResponseList](src/models/get-trigger-response-list.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalyTriggers.updateAnomalyDetectionTrigger({ body: {} });
  // TODO: Handle 'response' of type AnomalyDetectionTrigger
} catch (err) {
  // TODO: Handle 'err' of type AnomalyTriggers.UpdateAnomalyDetectionTriggerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.anomalyTriggers.updateAnomalyDetectionTrigger({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnomalyDetectionTrigger
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.anomalyTriggers.updateAnomalyDetectionTrigger(request)`

- **OnSuccess**: <code>[AnomalyDetectionTrigger](src/models/anomaly-detection-trigger.ts)</code>
- **OnError**: throws <code>[AnomalyTriggers.UpdateAnomalyDetectionTriggerError](src/resources/anomaly-triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.anomalyTriggers.updateAnomalyDetectionTrigger(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnomalyDetectionTrigger, AnomalyTriggers.UpdateAnomalyDetectionTriggerError&gt;</code>, with `result.value` of type <code>[AnomalyDetectionTrigger](src/models/anomaly-detection-trigger.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalyTriggersV2.createAnomalyDetectionTriggerV2({
    body: [
      {
        name: "Anomaly Daily Usage REST Test-Patch 1",
        triggerCategory: "UsageAnomaly",
        accountName: "0000123456-00001",
        anomalyTriggerRequest: {
          accountNames: "0000123456-00001",
          includeAbnormal: true,
          includeVeryAbnormal: true,
          includeUnderExpectedUsage: true,
          includeOverExpectedUsage: true,
        },
        notification: {
          notificationType: "DailySummary",
          callback: true,
          emailNotification: false,
          notificationGroupName: "Anomaly Test API",
          notificationFrequencyFactor: 3,
          notificationFrequencyInterval: "Hourly",
          externalEmailRecipients: "placeholder@verizon.com",
          smsNotification: true,
          smsNumbers: [{ carrier: "US Cellular", number: "9299280711" }],
          reminder: true,
          severity: "Critical",
        },
      },
    ],
  });
  // TODO: Handle 'response' of type AnomalyDetectionTrigger
} catch (err) {
  // TODO: Handle 'err' of type AnomalyTriggersV2.CreateAnomalyDetectionTriggerV2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.anomalyTriggersV2.createAnomalyDetectionTriggerV2({
  body: [
    {
      name: "Anomaly Daily Usage REST Test-Patch 1",
      triggerCategory: "UsageAnomaly",
      accountName: "0000123456-00001",
      anomalyTriggerRequest: {
        accountNames: "0000123456-00001",
        includeAbnormal: true,
        includeVeryAbnormal: true,
        includeUnderExpectedUsage: true,
        includeOverExpectedUsage: true,
      },
      notification: {
        notificationType: "DailySummary",
        callback: true,
        emailNotification: false,
        notificationGroupName: "Anomaly Test API",
        notificationFrequencyFactor: 3,
        notificationFrequencyInterval: "Hourly",
        externalEmailRecipients: "placeholder@verizon.com",
        smsNotification: true,
        smsNumbers: [{ carrier: "US Cellular", number: "9299280711" }],
        reminder: true,
        severity: "Critical",
      },
    },
  ],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnomalyDetectionTrigger
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.anomalyTriggersV2.createAnomalyDetectionTriggerV2(request)`

- **OnSuccess**: <code>[AnomalyDetectionTrigger](src/models/anomaly-detection-trigger.ts)</code>
- **OnError**: throws <code>[AnomalyTriggersV2.CreateAnomalyDetectionTriggerV2Error](src/resources/anomaly-triggers-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.anomalyTriggersV2.createAnomalyDetectionTriggerV2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnomalyDetectionTrigger, AnomalyTriggersV2.CreateAnomalyDetectionTriggerV2Error&gt;</code>, with `result.value` of type <code>[AnomalyDetectionTrigger](src/models/anomaly-detection-trigger.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalyTriggersV2.listAnomalyDetectionTriggerSettingsV2({
    triggerId: "be1b5958-3e11-41db-9abd-b1b7618c0035",
  });
  // TODO: Handle 'response' of type AnomalyTriggerResult
} catch (err) {
  // TODO: Handle 'err' of type AnomalyTriggersV2.ListAnomalyDetectionTriggerSettingsV2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.anomalyTriggersV2.listAnomalyDetectionTriggerSettingsV2({
  triggerId: "be1b5958-3e11-41db-9abd-b1b7618c0035",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnomalyTriggerResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.anomalyTriggersV2.listAnomalyDetectionTriggerSettingsV2(request)`

- **OnSuccess**: <code>[AnomalyTriggerResult](src/models/anomaly-trigger-result.ts)</code>
- **OnError**: throws <code>[AnomalyTriggersV2.ListAnomalyDetectionTriggerSettingsV2Error](src/resources/anomaly-triggers-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.anomalyTriggersV2.listAnomalyDetectionTriggerSettingsV2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnomalyTriggerResult, AnomalyTriggersV2.ListAnomalyDetectionTriggerSettingsV2Error&gt;</code>, with `result.value` of type <code>[AnomalyTriggerResult](src/models/anomaly-trigger-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.anomalyTriggersV2.updateAnomalyDetectionTriggerV2({
    body: [
      {
        triggerId: "595f5c44-c31c-4552-8670-020a1545a84d",
        triggerName: "Anomaly Daily Usage REST Test-Patch Update 4",
        triggerCategory: "UsageAnomaly",
        accountName: "0000123456-00001",
        anomalyTriggerRequest: {
          accountNames: "0000123456-00001",
          includeAbnormal: true,
          includeVeryAbnormal: true,
          includeUnderExpectedUsage: false,
          includeOverExpectedUsage: true,
        },
        notification: {
          notificationType: "DailySummary",
          callback: true,
          emailNotification: false,
          notificationGroupName: "Anomaly Test API",
          notificationFrequencyFactor: 3,
          notificationFrequencyInterval: "Hourly",
          externalEmailRecipients: "placeholder@verizon.com",
          smsNotification: true,
          smsNumbers: [{ carrier: "US Cellular", number: "9299280711" }],
          reminder: true,
          severity: "Critical",
        },
      },
    ],
  });
  // TODO: Handle 'response' of type IntelligenceSuccessResult
} catch (err) {
  // TODO: Handle 'err' of type AnomalyTriggersV2.UpdateAnomalyDetectionTriggerV2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.anomalyTriggersV2.updateAnomalyDetectionTriggerV2({
  body: [
    {
      triggerId: "595f5c44-c31c-4552-8670-020a1545a84d",
      triggerName: "Anomaly Daily Usage REST Test-Patch Update 4",
      triggerCategory: "UsageAnomaly",
      accountName: "0000123456-00001",
      anomalyTriggerRequest: {
        accountNames: "0000123456-00001",
        includeAbnormal: true,
        includeVeryAbnormal: true,
        includeUnderExpectedUsage: false,
        includeOverExpectedUsage: true,
      },
      notification: {
        notificationType: "DailySummary",
        callback: true,
        emailNotification: false,
        notificationGroupName: "Anomaly Test API",
        notificationFrequencyFactor: 3,
        notificationFrequencyInterval: "Hourly",
        externalEmailRecipients: "placeholder@verizon.com",
        smsNotification: true,
        smsNumbers: [{ carrier: "US Cellular", number: "9299280711" }],
        reminder: true,
        severity: "Critical",
      },
    },
  ],
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IntelligenceSuccessResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.anomalyTriggersV2.updateAnomalyDetectionTriggerV2(request)`

- **OnSuccess**: <code>[IntelligenceSuccessResult](src/models/intelligence-success-result.ts)</code>
- **OnError**: throws <code>[AnomalyTriggersV2.UpdateAnomalyDetectionTriggerV2Error](src/resources/anomaly-triggers-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.anomalyTriggersV2.updateAnomalyDetectionTriggerV2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IntelligenceSuccessResult, AnomalyTriggersV2.UpdateAnomalyDetectionTriggerV2Error&gt;</code>, with `result.value` of type <code>[IntelligenceSuccessResult](src/models/intelligence-success-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wirelessNetworkPerformance.deviceExperience30DaysHistory({
    body: {
      accountName: "0000123456-00001",
      deviceId: { kind: "iccid", id: "01234567899876543210", mdn: "0123456789" },
    },
  });
  // TODO: Handle 'response' of type WnpRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type WirelessNetworkPerformance.DeviceExperience30DaysHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wirelessNetworkPerformance.deviceExperience30DaysHistory({
  body: {
    accountName: "0000123456-00001",
    deviceId: { kind: "iccid", id: "01234567899876543210", mdn: "0123456789" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WnpRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.wirelessNetworkPerformance.deviceExperience30DaysHistory(request)`

- **OnSuccess**: <code>[WnpRequestResponse](src/models/wnp-request-response.ts)</code>
- **OnError**: throws <code>[WirelessNetworkPerformance.DeviceExperience30DaysHistoryError](src/resources/wireless-network-performance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wirelessNetworkPerformance.deviceExperience30DaysHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WnpRequestResponse, WirelessNetworkPerformance.DeviceExperience30DaysHistoryError&gt;</code>, with `result.value` of type <code>[WnpRequestResponse](src/models/wnp-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wirelessNetworkPerformance.deviceExperienceBulkLatest({
    body: {
      accountName: "0000123456-00001",
      deviceList: [{ kind: "iccid", id: "01234567899876543210", mdn: "0123456789" }],
    },
  });
  // TODO: Handle 'response' of type WnpRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type WirelessNetworkPerformance.DeviceExperienceBulkLatestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wirelessNetworkPerformance.deviceExperienceBulkLatest({
  body: {
    accountName: "0000123456-00001",
    deviceList: [{ kind: "iccid", id: "01234567899876543210", mdn: "0123456789" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WnpRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.wirelessNetworkPerformance.deviceExperienceBulkLatest(request)`

- **OnSuccess**: <code>[WnpRequestResponse](src/models/wnp-request-response.ts)</code>
- **OnError**: throws <code>[WirelessNetworkPerformance.DeviceExperienceBulkLatestError](src/resources/wireless-network-performance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wirelessNetworkPerformance.deviceExperienceBulkLatest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WnpRequestResponse, WirelessNetworkPerformance.DeviceExperienceBulkLatestError&gt;</code>, with `result.value` of type <code>[WnpRequestResponse](src/models/wnp-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wirelessNetworkPerformance.domestic4GAnd5GNationwideNetworkCoverage({
    body: {
      accountName: "0000123456-00001",
      requestType: "FWA",
      locationType: "ADDRESS",
      locations: {},
      networkTypesList: [{ networkType: "LTE" }],
    },
  });
  // TODO: Handle 'response' of type WnpRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type WirelessNetworkPerformance.Domestic4GAnd5GNationwideNetworkCoverageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wirelessNetworkPerformance.domestic4GAnd5GNationwideNetworkCoverage({
  body: {
    accountName: "0000123456-00001",
    requestType: "FWA",
    locationType: "ADDRESS",
    locations: {},
    networkTypesList: [{ networkType: "LTE" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WnpRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.wirelessNetworkPerformance.domestic4GAnd5GNationwideNetworkCoverage(request)`

- **OnSuccess**: <code>[WnpRequestResponse](src/models/wnp-request-response.ts)</code>
- **OnError**: throws <code>[WirelessNetworkPerformance.Domestic4GAnd5GNationwideNetworkCoverageError](src/resources/wireless-network-performance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wirelessNetworkPerformance.domestic4GAnd5GNationwideNetworkCoverage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WnpRequestResponse, WirelessNetworkPerformance.Domestic4GAnd5GNationwideNetworkCoverageError&gt;</code>, with `result.value` of type <code>[WnpRequestResponse](src/models/wnp-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wirelessNetworkPerformance.nearRealTimeNetworkConditions({
    body: {
      accountName: "0000123456-00001",
      locationType: "LONGLAT",
      coordinates: { latitude: "-33.84819", longitude: "151.22049" },
    },
  });
  // TODO: Handle 'response' of type WnpRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type WirelessNetworkPerformance.NearRealTimeNetworkConditionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wirelessNetworkPerformance.nearRealTimeNetworkConditions({
  body: {
    accountName: "0000123456-00001",
    locationType: "LONGLAT",
    coordinates: { latitude: "-33.84819", longitude: "151.22049" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WnpRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.wirelessNetworkPerformance.nearRealTimeNetworkConditions(request)`

- **OnSuccess**: <code>[WnpRequestResponse](src/models/wnp-request-response.ts)</code>
- **OnError**: throws <code>[WirelessNetworkPerformance.NearRealTimeNetworkConditionsError](src/resources/wireless-network-performance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wirelessNetworkPerformance.nearRealTimeNetworkConditions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WnpRequestResponse, WirelessNetworkPerformance.NearRealTimeNetworkConditionsError&gt;</code>, with `result.value` of type <code>[WnpRequestResponse](src/models/wnp-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.wirelessNetworkPerformance.siteProximity({
    body: {
      accountName: "0000123456-00001",
      locationType: "LONGLAT",
      coordinates: { latitude: "-33.84819", longitude: "151.22049" },
    },
  });
  // TODO: Handle 'response' of type WnpRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type WirelessNetworkPerformance.SiteProximityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.wirelessNetworkPerformance.siteProximity({
  body: {
    accountName: "0000123456-00001",
    locationType: "LONGLAT",
    coordinates: { latitude: "-33.84819", longitude: "151.22049" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WnpRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.wirelessNetworkPerformance.siteProximity(request)`

- **OnSuccess**: <code>[WnpRequestResponse](src/models/wnp-request-response.ts)</code>
- **OnError**: throws <code>[WirelessNetworkPerformance.SiteProximityError](src/resources/wireless-network-performance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.wirelessNetworkPerformance.siteProximity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WnpRequestResponse, WirelessNetworkPerformance.SiteProximityError&gt;</code>, with `result.value` of type <code>[WnpRequestResponse](src/models/wnp-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.activateADeviceProfile({
    body: { devices: [{}], accountName: "some example string" },
  });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type ManagingESimProfiles.ActivateADeviceProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.managingESimProfiles.activateADeviceProfile({
  body: { devices: [{}], accountName: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GioRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.managingESimProfiles.activateADeviceProfile(request)`

- **OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: throws <code>[ManagingESimProfiles.ActivateADeviceProfileError](src/resources/managing-esim-profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.managingESimProfiles.activateADeviceProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GioRequestResponse, ManagingESimProfiles.ActivateADeviceProfileError&gt;</code>, with `result.value` of type <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.deactivateADeviceProfile({ body: {} });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type ManagingESimProfiles.DeactivateADeviceProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.managingESimProfiles.deactivateADeviceProfile({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GioRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.managingESimProfiles.deactivateADeviceProfile(request)`

- **OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: throws <code>[ManagingESimProfiles.DeactivateADeviceProfileError](src/resources/managing-esim-profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.managingESimProfiles.deactivateADeviceProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GioRequestResponse, ManagingESimProfiles.DeactivateADeviceProfileError&gt;</code>, with `result.value` of type <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.deleteADeviceProfile({ body: {} });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type ManagingESimProfiles.DeleteADeviceProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.managingESimProfiles.deleteADeviceProfile({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GioRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.managingESimProfiles.deleteADeviceProfile(request)`

- **OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: throws <code>[ManagingESimProfiles.DeleteADeviceProfileError](src/resources/managing-esim-profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.managingESimProfiles.deleteADeviceProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GioRequestResponse, ManagingESimProfiles.DeleteADeviceProfileError&gt;</code>, with `result.value` of type <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.deviceSuspend({
    body: { devices: [{}], accountName: "some example string" },
  });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type ManagingESimProfiles.DeviceSuspendError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.managingESimProfiles.deviceSuspend({
  body: { devices: [{}], accountName: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GioRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.managingESimProfiles.deviceSuspend(request)`

- **OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: throws <code>[ManagingESimProfiles.DeviceSuspendError](src/resources/managing-esim-profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.managingESimProfiles.deviceSuspend(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GioRequestResponse, ManagingESimProfiles.DeviceSuspendError&gt;</code>, with `result.value` of type <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.downloadADeviceProfile({ body: {} });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type ManagingESimProfiles.DownloadADeviceProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.managingESimProfiles.downloadADeviceProfile({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GioRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.managingESimProfiles.downloadADeviceProfile(request)`

- **OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: throws <code>[ManagingESimProfiles.DownloadADeviceProfileError](src/resources/managing-esim-profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.managingESimProfiles.downloadADeviceProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GioRequestResponse, ManagingESimProfiles.DownloadADeviceProfileError&gt;</code>, with `result.value` of type <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.enableADeviceProfile({ body: {} });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type ManagingESimProfiles.EnableADeviceProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.managingESimProfiles.enableADeviceProfile({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GioRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.managingESimProfiles.enableADeviceProfile(request)`

- **OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: throws <code>[ManagingESimProfiles.EnableADeviceProfileError](src/resources/managing-esim-profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.managingESimProfiles.enableADeviceProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GioRequestResponse, ManagingESimProfiles.EnableADeviceProfileError&gt;</code>, with `result.value` of type <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.enableADeviceProfileForDownload({ body: {} });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type ManagingESimProfiles.EnableADeviceProfileForDownloadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.managingESimProfiles.enableADeviceProfileForDownload({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GioRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.managingESimProfiles.enableADeviceProfileForDownload(request)`

- **OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: throws <code>[ManagingESimProfiles.EnableADeviceProfileForDownloadError](src/resources/managing-esim-profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.managingESimProfiles.enableADeviceProfileForDownload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GioRequestResponse, ManagingESimProfiles.EnableADeviceProfileForDownloadError&gt;</code>, with `result.value` of type <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.profileSuspend({
    body: {
      devices: [{ deviceIds: [{ kind: "eid", id: "12345678901234567890123456789012" }] }],
      accountName: "0000123456-00001",
      smrsOid: "1.3.6.1.4.1.#####.1.500.200.101.5",
      mdnZipCode: "12345",
      servicePlan: "service plan name",
    },
  });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type ManagingESimProfiles.ProfileSuspendError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.managingESimProfiles.profileSuspend({
  body: {
    devices: [{ deviceIds: [{ kind: "eid", id: "12345678901234567890123456789012" }] }],
    accountName: "0000123456-00001",
    smrsOid: "1.3.6.1.4.1.#####.1.500.200.101.5",
    mdnZipCode: "12345",
    servicePlan: "service plan name",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GioRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.managingESimProfiles.profileSuspend(request)`

- **OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: throws <code>[ManagingESimProfiles.ProfileSuspendError](src/resources/managing-esim-profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.managingESimProfiles.profileSuspend(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GioRequestResponse, ManagingESimProfiles.ProfileSuspendError&gt;</code>, with `result.value` of type <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.resumeProfile({
    body: {
      devices: [{ deviceIds: [{ kind: "eid", id: "12345678901234567890123456789012" }] }],
      accountName: "0000123456-00001",
      smrsOid: "1.3.6.1.4.1.#####.1.500.200.101.5",
      mdnZipCode: "12345",
      servicePlan: "service plan name",
    },
  });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type ManagingESimProfiles.ResumeProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.managingESimProfiles.resumeProfile({
  body: {
    devices: [{ deviceIds: [{ kind: "eid", id: "12345678901234567890123456789012" }] }],
    accountName: "0000123456-00001",
    smrsOid: "1.3.6.1.4.1.#####.1.500.200.101.5",
    mdnZipCode: "12345",
    servicePlan: "service plan name",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GioRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.managingESimProfiles.resumeProfile(request)`

- **OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: throws <code>[ManagingESimProfiles.ResumeProfileError](src/resources/managing-esim-profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.managingESimProfiles.resumeProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GioRequestResponse, ManagingESimProfiles.ResumeProfileError&gt;</code>, with `result.value` of type <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.managingESimProfiles.setFallback({ body: {} });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type ManagingESimProfiles.SetFallbackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.managingESimProfiles.setFallback({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GioRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.managingESimProfiles.setFallback(request)`

- **OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: throws <code>[ManagingESimProfiles.SetFallbackError](src/resources/managing-esim-profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.managingESimProfiles.setFallback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GioRequestResponse, ManagingESimProfiles.SetFallbackError&gt;</code>, with `result.value` of type <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceSmsMessaging.getSmsMessages({
    accountName: "0000123456-00001",
    next: "TheURLForTheNextQuery",
  });
  // TODO: Handle 'response' of type SmsMessagesResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceSmsMessaging.GetSmsMessagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceSmsMessaging.getSmsMessages({
  accountName: "0000123456-00001",
  next: "TheURLForTheNextQuery",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SmsMessagesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceSmsMessaging.getSmsMessages(request)`

- **OnSuccess**: <code>[SmsMessagesResponse](src/models/sms-messages-response.ts)</code>
- **OnError**: throws <code>[DeviceSmsMessaging.GetSmsMessagesError](src/resources/device-sms-messaging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceSmsMessaging.getSmsMessages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SmsMessagesResponse, DeviceSmsMessaging.GetSmsMessagesError&gt;</code>, with `result.value` of type <code>[SmsMessagesResponse](src/models/sms-messages-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceSmsMessaging.listSmsMessageHistory({
    body: { deviceId: { kind: "some example string", id: "some example string" } },
  });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceSmsMessaging.ListSmsMessageHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceSmsMessaging.listSmsMessageHistory({
  body: { deviceId: { kind: "some example string", id: "some example string" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GioRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceSmsMessaging.listSmsMessageHistory(request)`

- **OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: throws <code>[DeviceSmsMessaging.ListSmsMessageHistoryError](src/resources/device-sms-messaging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceSmsMessaging.listSmsMessageHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GioRequestResponse, DeviceSmsMessaging.ListSmsMessageHistoryError&gt;</code>, with `result.value` of type <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceSmsMessaging.sendAnSmsMessage({
    body: {
      accountName: "0000123456-00001",
      customFields: [{ key: "CustomField1", value: "value of the field" }],
      dataEncoding: "optional 7 or 8-bit encoding",
      timeToLive: "000000010000000R",
      deviceIds: [{ kind: "iccid", id: "20-digit ICCID" }],
      smsMessage: "the body or text of the message itself",
    },
  });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceSmsMessaging.SendAnSmsMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceSmsMessaging.sendAnSmsMessage({
  body: {
    accountName: "0000123456-00001",
    customFields: [{ key: "CustomField1", value: "value of the field" }],
    dataEncoding: "optional 7 or 8-bit encoding",
    timeToLive: "000000010000000R",
    deviceIds: [{ kind: "iccid", id: "20-digit ICCID" }],
    smsMessage: "the body or text of the message itself",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GioRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceSmsMessaging.sendAnSmsMessage(request)`

- **OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: throws <code>[DeviceSmsMessaging.SendAnSmsMessageError](src/resources/device-sms-messaging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceSmsMessaging.sendAnSmsMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GioRequestResponse, DeviceSmsMessaging.SendAnSmsMessageError&gt;</code>, with `result.value` of type <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceSmsMessaging.startSmsMessageDelivery({
    accountName: "0000123456-00001",
  });
  // TODO: Handle 'response' of type SuccessResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceSmsMessaging.StartSmsMessageDeliveryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceSmsMessaging.startSmsMessageDelivery({
  accountName: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceSmsMessaging.startSmsMessageDelivery(request)`

- **OnSuccess**: <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: throws <code>[DeviceSmsMessaging.StartSmsMessageDeliveryError](src/resources/device-sms-messaging.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceSmsMessaging.startSmsMessageDelivery(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponse, DeviceSmsMessaging.StartSmsMessageDeliveryError&gt;</code>, with `result.value` of type <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceActions.accountInformation({ accountName: "some example string" });
  // TODO: Handle 'response' of type AccountDetails
} catch (err) {
  // TODO: Handle 'err' of type DeviceActions.AccountInformationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceActions.accountInformation({
  accountName: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountDetails
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceActions.accountInformation(request)`

- **OnSuccess**: <code>[AccountDetails](src/models/account-details.ts)</code>
- **OnError**: throws <code>[DeviceActions.AccountInformationError](src/resources/device-actions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceActions.accountInformation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountDetails, DeviceActions.AccountInformationError&gt;</code>, with `result.value` of type <code>[AccountDetails](src/models/account-details.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceActions.aggregateUsage({ body: {} });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceActions.AggregateUsageApiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceActions.aggregateUsage({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GioRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceActions.aggregateUsage(request)`

- **OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: throws <code>[DeviceActions.AggregateUsageApiError](src/resources/device-actions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceActions.aggregateUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GioRequestResponse, DeviceActions.AggregateUsageApiError&gt;</code>, with `result.value` of type <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceActions.dailyUsage({ body: {} });
  // TODO: Handle 'response' of type DailyUsageResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceActions.DailyUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceActions.dailyUsage({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DailyUsageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceActions.dailyUsage(request)`

- **OnSuccess**: <code>[DailyUsageResponse](src/models/daily-usage-response.ts)</code>
- **OnError**: throws <code>[DeviceActions.DailyUsageError](src/resources/device-actions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceActions.dailyUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DailyUsageResponse, DeviceActions.DailyUsageError&gt;</code>, with `result.value` of type <code>[DailyUsageResponse](src/models/daily-usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceActions.getAsynchronousRequestStatus({
    accountName: "0000123456-00001",
    requestId: "d1f08526-5443-4054-9a29-4456490ea9f8",
  });
  // TODO: Handle 'response' of type StatusResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceActions.GetAsynchronousRequestStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceActions.getAsynchronousRequestStatus({
  accountName: "0000123456-00001",
  requestId: "d1f08526-5443-4054-9a29-4456490ea9f8",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceActions.getAsynchronousRequestStatus(request)`

- **OnSuccess**: <code>[StatusResponse](src/models/status-response.ts)</code>
- **OnError**: throws <code>[DeviceActions.GetAsynchronousRequestStatusError](src/resources/device-actions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceActions.getAsynchronousRequestStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatusResponse, DeviceActions.GetAsynchronousRequestStatusError&gt;</code>, with `result.value` of type <code>[StatusResponse](src/models/status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceActions.retrieveDeviceProvisioningHistory({ body: {} });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceActions.RetrieveDeviceProvisioningHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceActions.retrieveDeviceProvisioningHistory({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GioRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceActions.retrieveDeviceProvisioningHistory(request)`

- **OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: throws <code>[DeviceActions.RetrieveDeviceProvisioningHistoryError](src/resources/device-actions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceActions.retrieveDeviceProvisioningHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GioRequestResponse, DeviceActions.RetrieveDeviceProvisioningHistoryError&gt;</code>, with `result.value` of type <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceActions.retrieveTheGlobalDeviceList({
    body: { accountName: "some example string" },
  });
  // TODO: Handle 'response' of type GioRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type DeviceActions.RetrieveTheGlobalDeviceListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceActions.retrieveTheGlobalDeviceList({
  body: { accountName: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GioRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceActions.retrieveTheGlobalDeviceList(request)`

- **OnSuccess**: <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: throws <code>[DeviceActions.RetrieveTheGlobalDeviceListError](src/resources/device-actions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceActions.retrieveTheGlobalDeviceList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GioRequestResponse, DeviceActions.RetrieveTheGlobalDeviceListError&gt;</code>, with `result.value` of type <code>[GioRequestResponse](src/models/gio-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceActions.servicePlanList({ accountName: "some example string" });
  // TODO: Handle 'response' of type AccountDetails
} catch (err) {
  // TODO: Handle 'err' of type DeviceActions.ServicePlanListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceActions.servicePlanList({
  accountName: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountDetails
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceActions.servicePlanList(request)`

- **OnSuccess**: <code>[AccountDetails](src/models/account-details.ts)</code>
- **OnError**: throws <code>[DeviceActions.ServicePlanListError](src/resources/device-actions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceActions.servicePlanList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountDetails, DeviceActions.ServicePlanListError&gt;</code>, with `result.value` of type <code>[AccountDetails](src/models/account-details.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.thingSpaceQualityOfServiceApiActions.createAThingSpaceQualityOfServiceApiSubscription({
      body: { accountName: "some example string", deviceInfo: [{ deviceId: {}, flowInfo: [{}] }] },
    });
  // TODO: Handle 'response' of type Success201
} catch (err) {
  // TODO: Handle 'err' of type ThingSpaceQualityOfServiceApiActions.CreateAThingSpaceQualityOfServiceApiSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result =
  await client.thingSpaceQualityOfServiceApiActions.createAThingSpaceQualityOfServiceApiSubscription({
    body: { accountName: "some example string", deviceInfo: [{ deviceId: {}, flowInfo: [{}] }] },
  }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Success201
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.thingSpaceQualityOfServiceApiActions.createAThingSpaceQualityOfServiceApiSubscription(request)`

- **OnSuccess**: <code>[Success201](src/models/success201.ts)</code>
- **OnError**: throws <code>[ThingSpaceQualityOfServiceApiActions.CreateAThingSpaceQualityOfServiceApiSubscriptionError](src/resources/thing-space-quality-of-service-api-actions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.thingSpaceQualityOfServiceApiActions.createAThingSpaceQualityOfServiceApiSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Success201, ThingSpaceQualityOfServiceApiActions.CreateAThingSpaceQualityOfServiceApiSubscriptionError&gt;</code>, with `result.value` of type <code>[Success201](src/models/success201.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.thingSpaceQualityOfServiceApiActions.stopAThingSpaceQualityOfServiceApiSubscription({
      accountName: "0000123456-00001",
      qosSubscriptionId: "QoS subscription ID",
    });
  // TODO: Handle 'response' of type Success201
} catch (err) {
  // TODO: Handle 'err' of type ThingSpaceQualityOfServiceApiActions.StopAThingSpaceQualityOfServiceApiSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result =
  await client.thingSpaceQualityOfServiceApiActions.stopAThingSpaceQualityOfServiceApiSubscription({
    accountName: "0000123456-00001",
    qosSubscriptionId: "QoS subscription ID",
  }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Success201
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.thingSpaceQualityOfServiceApiActions.stopAThingSpaceQualityOfServiceApiSubscription(request)`

- **OnSuccess**: <code>[Success201](src/models/success201.ts)</code>
- **OnError**: throws <code>[ThingSpaceQualityOfServiceApiActions.StopAThingSpaceQualityOfServiceApiSubscriptionError](src/resources/thing-space-quality-of-service-api-actions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.thingSpaceQualityOfServiceApiActions.stopAThingSpaceQualityOfServiceApiSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Success201, ThingSpaceQualityOfServiceApiActions.StopAThingSpaceQualityOfServiceApiSubscriptionError&gt;</code>, with `result.value` of type <code>[Success201](src/models/success201.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Pwn

> Source: [Pwn](src/resources/pwn.ts)

<details>
<summary><code>changePwnDeviceIPaddress(request: Pwn.ChangePwnDeviceIPaddressRequestParams, options?: RequestOptions): ApiPromise&lt;ChangePwnDeviceIpAddressResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pwn.changePwnDeviceIPaddress({
    body: {
      accountName: "some example string",
      deviceList: [
        {
          deviceIds: [{ id: "some example string", kind: "some example string" }],
          ipAddress: "some example string",
        },
      ],
    },
  });
  // TODO: Handle 'response' of type ChangePwnDeviceIpAddressResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pwn.changePwnDeviceIPaddress({
  body: {
    accountName: "some example string",
    deviceList: [
      {
        deviceIds: [{ id: "some example string", kind: "some example string" }],
        ipAddress: "some example string",
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChangePwnDeviceIpAddressResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.pwn.changePwnDeviceIPaddress(request)`

- **OnSuccess**: <code>[ChangePwnDeviceIpAddressResponse](src/models/change-pwn-device-ip-address-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.pwn.changePwnDeviceIPaddress(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChangePwnDeviceIpAddressResponse, ApiError&gt;</code>, with `result.value` of type <code>[ChangePwnDeviceIpAddressResponse](src/models/change-pwn-device-ip-address-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>changePwnDeviceProfile(request: Pwn.ChangePwnDeviceProfileRequestParams, options?: RequestOptions): ApiPromise&lt;ChangePwnDeviceProfileResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pwn.changePwnDeviceProfile({
    body: {
      accountName: "0342351414-00001",
      deviceList: [{ deviceIds: [{ id: "99948099913024600000", kind: "iccid" }] }],
      newProfile: "HSS EsmProfile Enterprise 5G internet",
    },
  });
  // TODO: Handle 'response' of type ChangePwnDeviceProfileResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pwn.changePwnDeviceProfile({
  body: {
    accountName: "0342351414-00001",
    deviceList: [{ deviceIds: [{ id: "99948099913024600000", kind: "iccid" }] }],
    newProfile: "HSS EsmProfile Enterprise 5G internet",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChangePwnDeviceProfileResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.pwn.changePwnDeviceProfile(request)`

- **OnSuccess**: <code>[ChangePwnDeviceProfileResponse](src/models/change-pwn-device-profile-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.pwn.changePwnDeviceProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChangePwnDeviceProfileResponse, ApiError&gt;</code>, with `result.value` of type <code>[ChangePwnDeviceProfileResponse](src/models/change-pwn-device-profile-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>changePwnDeviceStateActivate(request: Pwn.ChangePwnDeviceStateActivateRequestParams, options?: RequestOptions): ApiPromise&lt;ChangePwnDeviceStateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pwn.changePwnDeviceStateActivate({
    body: {
      accountName: "0342351414-00001",
      deviceList: [{ deviceIds: [{ id: "99948099913024600001", kind: "iccid" }] }],
      activate: { profile: "HSS EsmProfile Enterprise 5G" },
    },
  });
  // TODO: Handle 'response' of type ChangePwnDeviceStateResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pwn.changePwnDeviceStateActivate({
  body: {
    accountName: "0342351414-00001",
    deviceList: [{ deviceIds: [{ id: "99948099913024600001", kind: "iccid" }] }],
    activate: { profile: "HSS EsmProfile Enterprise 5G" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChangePwnDeviceStateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.pwn.changePwnDeviceStateActivate(request)`

- **OnSuccess**: <code>[ChangePwnDeviceStateResponse](src/models/change-pwn-device-state-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.pwn.changePwnDeviceStateActivate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChangePwnDeviceStateResponse, ApiError&gt;</code>, with `result.value` of type <code>[ChangePwnDeviceStateResponse](src/models/change-pwn-device-state-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>changePwnDeviceStateDeactivate(request: Pwn.ChangePwnDeviceStateDeactivateRequestParams, options?: RequestOptions): ApiPromise&lt;ChangePwnDeviceStateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pwn.changePwnDeviceStateDeactivate({
    body: {
      accountName: "0342351414-00001",
      deviceList: [
        { deviceIds: [{ id: "99948099913031600000", kind: "iccid" }] },
        { deviceIds: [{ id: "99948099913031700000", kind: "iccid" }] },
      ],
    },
  });
  // TODO: Handle 'response' of type ChangePwnDeviceStateResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pwn.changePwnDeviceStateDeactivate({
  body: {
    accountName: "0342351414-00001",
    deviceList: [
      { deviceIds: [{ id: "99948099913031600000", kind: "iccid" }] },
      { deviceIds: [{ id: "99948099913031700000", kind: "iccid" }] },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChangePwnDeviceStateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.pwn.changePwnDeviceStateDeactivate(request)`

- **OnSuccess**: <code>[ChangePwnDeviceStateResponse](src/models/change-pwn-device-state-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.pwn.changePwnDeviceStateDeactivate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChangePwnDeviceStateResponse, ApiError&gt;</code>, with `result.value` of type <code>[ChangePwnDeviceStateResponse](src/models/change-pwn-device-state-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPwnPerformanceConsent(request: Pwn.GetPwnPerformanceConsentRequest, options?: RequestOptions): ApiPromise&lt;GetPwnPerformanceConsentResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pwn.getPwnPerformanceConsent({ aname: "1533445500-00088" });
  // TODO: Handle 'response' of type GetPwnPerformanceConsentResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pwn.getPwnPerformanceConsent({ aname: "1533445500-00088" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetPwnPerformanceConsentResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.pwn.getPwnPerformanceConsent(request)`

- **OnSuccess**: <code>[GetPwnPerformanceConsentResponse](src/models/get-pwn-performance-consent-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.pwn.getPwnPerformanceConsent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetPwnPerformanceConsentResponse, ApiError&gt;</code>, with `result.value` of type <code>[GetPwnPerformanceConsentResponse](src/models/get-pwn-performance-consent-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProfileList(request: Pwn.GetProfileListRequest, options?: RequestOptions): ApiPromise&lt;PwnProfileList, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pwn.getProfileList({ aname: "0342351414-00001" });
  // TODO: Handle 'response' of type PwnProfileList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pwn.getProfileList({ aname: "0342351414-00001" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PwnProfileList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.pwn.getProfileList(request)`

- **OnSuccess**: <code>[PwnProfileList](src/models/pwn-profile-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.pwn.getProfileList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PwnProfileList, ApiError&gt;</code>, with `result.value` of type <code>[PwnProfileList](src/models/pwn-profile-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>kpiList(request: Pwn.KpiListRequest, options?: RequestOptions): ApiPromise&lt;KpiInfoList, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pwn.kpiList({ aname: "0342351414-00001" });
  // TODO: Handle 'response' of type KpiInfoList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pwn.kpiList({ aname: "0342351414-00001" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type KpiInfoList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
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

**Direct**: `await client.pwn.kpiList(request)`

- **OnSuccess**: <code>[KpiInfoList](src/models/kpi-info-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.pwn.kpiList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;KpiInfoList, ApiError&gt;</code>, with `result.value` of type <code>[KpiInfoList](src/models/kpi-info-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.promotionPeriodInformation.getPromoDeviceAggregateUsageHistory({ body: {} });
  // TODO: Handle 'response' of type UsageRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.promotionPeriodInformation.getPromoDeviceAggregateUsageHistory({
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsageRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.promotionPeriodInformation.getPromoDeviceAggregateUsageHistory(request)`

- **OnSuccess**: <code>[UsageRequestResponse](src/models/usage-request-response.ts)</code>
- **OnError**: throws <code>[PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryError](src/resources/promotion-period-information.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.promotionPeriodInformation.getPromoDeviceAggregateUsageHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsageRequestResponse, PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryError&gt;</code>, with `result.value` of type <code>[UsageRequestResponse](src/models/usage-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.promotionPeriodInformation.getPromoDeviceUsageHistory({ body: {} });
  // TODO: Handle 'response' of type ResponseToUsageQuery
} catch (err) {
  // TODO: Handle 'err' of type PromotionPeriodInformation.GetPromoDeviceUsageHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.promotionPeriodInformation.getPromoDeviceUsageHistory({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResponseToUsageQuery
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.promotionPeriodInformation.getPromoDeviceUsageHistory(request)`

- **OnSuccess**: <code>[ResponseToUsageQuery](src/models/response-to-usage-query.ts)</code>
- **OnError**: throws <code>[PromotionPeriodInformation.GetPromoDeviceUsageHistoryError](src/resources/promotion-period-information.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.promotionPeriodInformation.getPromoDeviceUsageHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResponseToUsageQuery, PromotionPeriodInformation.GetPromoDeviceUsageHistoryError&gt;</code>, with `result.value` of type <code>[ResponseToUsageQuery](src/models/response-to-usage-query.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.retrieveTheTriggers.getAllAvailableTriggers();
  // TODO: Handle 'response' of type TriggerValueResponse
} catch (err) {
  // TODO: Handle 'err' of type RetrieveTheTriggers.GetAllAvailableTriggersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.retrieveTheTriggers.getAllAvailableTriggers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TriggerValueResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.retrieveTheTriggers.getAllAvailableTriggers()`

- **OnSuccess**: <code>[TriggerValueResponse](src/models/trigger-value-response.ts)</code>
- **OnError**: throws <code>[RetrieveTheTriggers.GetAllAvailableTriggersError](src/resources/retrieve-the-triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.retrieveTheTriggers.getAllAvailableTriggers().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TriggerValueResponse, RetrieveTheTriggers.GetAllAvailableTriggersError&gt;</code>, with `result.value` of type <code>[TriggerValueResponse](src/models/trigger-value-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.retrieveTheTriggers.getAllTriggersByAccountName({
    accountName: "0000123456-000001",
  });
  // TODO: Handle 'response' of type TriggerValueResponse
} catch (err) {
  // TODO: Handle 'err' of type RetrieveTheTriggers.GetAllTriggersByAccountNameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.retrieveTheTriggers.getAllTriggersByAccountName({
  accountName: "0000123456-000001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TriggerValueResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.retrieveTheTriggers.getAllTriggersByAccountName(request)`

- **OnSuccess**: <code>[TriggerValueResponse](src/models/trigger-value-response.ts)</code>
- **OnError**: throws <code>[RetrieveTheTriggers.GetAllTriggersByAccountNameError](src/resources/retrieve-the-triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.retrieveTheTriggers.getAllTriggersByAccountName(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TriggerValueResponse, RetrieveTheTriggers.GetAllTriggersByAccountNameError&gt;</code>, with `result.value` of type <code>[TriggerValueResponse](src/models/trigger-value-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.retrieveTheTriggers.getAllTriggersByTriggerCategory();
  // TODO: Handle 'response' of type TriggerValueResponse2
} catch (err) {
  // TODO: Handle 'err' of type RetrieveTheTriggers.GetAllTriggersByTriggerCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.retrieveTheTriggers.getAllTriggersByTriggerCategory().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TriggerValueResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.retrieveTheTriggers.getAllTriggersByTriggerCategory()`

- **OnSuccess**: <code>[TriggerValueResponse2](src/models/trigger-value-response2.ts)</code>
- **OnError**: throws <code>[RetrieveTheTriggers.GetAllTriggersByTriggerCategoryError](src/resources/retrieve-the-triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.retrieveTheTriggers.getAllTriggersByTriggerCategory().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TriggerValueResponse2, RetrieveTheTriggers.GetAllTriggersByTriggerCategoryError&gt;</code>, with `result.value` of type <code>[TriggerValueResponse2](src/models/trigger-value-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.retrieveTheTriggers.getTriggersById({
    triggerId: "2874DEC7-26CF-4797-9C6A-B5A2AC72D526",
  });
  // TODO: Handle 'response' of type TriggerValueResponse2
} catch (err) {
  // TODO: Handle 'err' of type RetrieveTheTriggers.GetTriggersByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.retrieveTheTriggers.getTriggersById({
  triggerId: "2874DEC7-26CF-4797-9C6A-B5A2AC72D526",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TriggerValueResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.retrieveTheTriggers.getTriggersById(request)`

- **OnSuccess**: <code>[TriggerValueResponse2](src/models/trigger-value-response2.ts)</code>
- **OnError**: throws <code>[RetrieveTheTriggers.GetTriggersByIdError](src/resources/retrieve-the-triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.retrieveTheTriggers.getTriggersById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TriggerValueResponse2, RetrieveTheTriggers.GetTriggersByIdError&gt;</code>, with `result.value` of type <code>[TriggerValueResponse2](src/models/trigger-value-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateTriggers.updateAllAvailableTriggers();
  // TODO: Handle 'response' of type Success
} catch (err) {
  // TODO: Handle 'err' of type UpdateTriggers.UpdateAllAvailableTriggersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateTriggers.updateAllAvailableTriggers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Success
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.updateTriggers.updateAllAvailableTriggers(request)`

- **OnSuccess**: <code>[Success](src/models/success.ts)</code>
- **OnError**: throws <code>[UpdateTriggers.UpdateAllAvailableTriggersError](src/resources/update-triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateTriggers.updateAllAvailableTriggers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Success, UpdateTriggers.UpdateAllAvailableTriggersError&gt;</code>, with `result.value` of type <code>[Success](src/models/success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simActions.newactivatecode({
    body: {
      devices: [
        { deviceIds: [{ id: "15-digit IMEI", kind: "imei" }, { id: "20-digit ICCID", kind: "iccid" }] },
      ],
      accountName: "0000123456-00001",
      servicePlan: "the service plan name",
      mdnZipCode: "five digit zip code",
    },
  });
  // TODO: Handle 'response' of type ESimRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type SimActions.NewactivatecodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simActions.newactivatecode({
  body: {
    devices: [
      { deviceIds: [{ id: "15-digit IMEI", kind: "imei" }, { id: "20-digit ICCID", kind: "iccid" }] },
    ],
    accountName: "0000123456-00001",
    servicePlan: "the service plan name",
    mdnZipCode: "five digit zip code",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ESimRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.simActions.newactivatecode(request)`

- **OnSuccess**: <code>[ESimRequestResponse](src/models/esim-request-response.ts)</code>
- **OnError**: throws <code>[SimActions.NewactivatecodeError](src/resources/sim-actions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.simActions.newactivatecode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ESimRequestResponse, SimActions.NewactivatecodeError&gt;</code>, with `result.value` of type <code>[ESimRequestResponse](src/models/esim-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simActions.setactivateUsingPost({
    body: {
      devices: [
        {
          deviceIds: [
            { id: "32-digit EID", kind: "eid" },
            { id: "15-digit IMEI", kind: "imei" },
            { id: "20-digit ICCID", kind: "iccid (ICCID is only used for reactivation)" },
          ],
        },
      ],
      carrierName: "Verizon Wireless",
      accountName: "0000123456-00001",
      servicePlan: "the service plan name",
      mdnZipCode: "five digit zip code",
    },
  });
  // TODO: Handle 'response' of type ESimRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type SimActions.SetactivateUsingPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simActions.setactivateUsingPost({
  body: {
    devices: [
      {
        deviceIds: [
          { id: "32-digit EID", kind: "eid" },
          { id: "15-digit IMEI", kind: "imei" },
          { id: "20-digit ICCID", kind: "iccid (ICCID is only used for reactivation)" },
        ],
      },
    ],
    carrierName: "Verizon Wireless",
    accountName: "0000123456-00001",
    servicePlan: "the service plan name",
    mdnZipCode: "five digit zip code",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ESimRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.simActions.setactivateUsingPost(request)`

- **OnSuccess**: <code>[ESimRequestResponse](src/models/esim-request-response.ts)</code>
- **OnError**: throws <code>[SimActions.SetactivateUsingPostError](src/resources/sim-actions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.simActions.setactivateUsingPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ESimRequestResponse, SimActions.SetactivateUsingPostError&gt;</code>, with `result.value` of type <code>[ESimRequestResponse](src/models/esim-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.simActions.setdeactivateUsingPost({ body: {} });
  // TODO: Handle 'response' of type ESimRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type SimActions.SetdeactivateUsingPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.simActions.setdeactivateUsingPost({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ESimRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.simActions.setdeactivateUsingPost(request)`

- **OnSuccess**: <code>[ESimRequestResponse](src/models/esim-request-response.ts)</code>
- **OnError**: throws <code>[SimActions.SetdeactivateUsingPostError](src/resources/sim-actions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.simActions.setdeactivateUsingPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ESimRequestResponse, SimActions.SetdeactivateUsingPostError&gt;</code>, with `result.value` of type <code>[ESimRequestResponse](src/models/esim-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.globalReporting.retrieveGlobalList({ body: {} });
  // TODO: Handle 'response' of type ESimRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type GlobalReporting.RetrieveGlobalListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.globalReporting.retrieveGlobalList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ESimRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.globalReporting.retrieveGlobalList(request)`

- **OnSuccess**: <code>[ESimRequestResponse](src/models/esim-request-response.ts)</code>
- **OnError**: throws <code>[GlobalReporting.RetrieveGlobalListError](src/resources/global-reporting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.globalReporting.retrieveGlobalList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ESimRequestResponse, GlobalReporting.RetrieveGlobalListError&gt;</code>, with `result.value` of type <code>[ESimRequestResponse](src/models/esim-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.globalReporting.deviceprovhistoryUsingPost({ body: {} });
  // TODO: Handle 'response' of type ESimRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type GlobalReporting.DeviceprovhistoryUsingPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.globalReporting.deviceprovhistoryUsingPost({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ESimRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.globalReporting.deviceprovhistoryUsingPost(request)`

- **OnSuccess**: <code>[ESimRequestResponse](src/models/esim-request-response.ts)</code>
- **OnError**: throws <code>[GlobalReporting.DeviceprovhistoryUsingPostError](src/resources/global-reporting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.globalReporting.deviceprovhistoryUsingPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ESimRequestResponse, GlobalReporting.DeviceprovhistoryUsingPostError&gt;</code>, with `result.value` of type <code>[ESimRequestResponse](src/models/esim-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deviceRoleController.getAclRulesByVendorId({ vendorId: "TestVendor" });
  // TODO: Handle 'response' of type DeviceRole[]
} catch (err) {
  // TODO: Handle 'err' of type DeviceRoleController.GetAclRulesByVendorIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deviceRoleController.getAclRulesByVendorId({
  vendorId: "TestVendor",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceRole[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.deviceRoleController.getAclRulesByVendorId(request)`

- **OnSuccess**: <code>[DeviceRole](src/models/device-role.ts)[]</code>
- **OnError**: throws <code>[DeviceRoleController.GetAclRulesByVendorIdError](src/resources/device-role-controller.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deviceRoleController.getAclRulesByVendorId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceRole[], DeviceRoleController.GetAclRulesByVendorIdError&gt;</code>, with `result.value` of type <code>[DeviceRole](src/models/device-role.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.etxAppConfiguration.createConfiguration({
    vendorId: "VerizonETX",
    body: {
      geoFence: {
        type: Type.FeatureCollection,
        features: [{ type: Type1.Feature, geometry: {}, properties: {} }],
      },
      messages: [
        {
          isPrivate: true,
          roadUserType: [RoadUserTypes.VulnerableRoadUser],
          triggerConditions: [TriggerCondition.Enter],
          generic: {
            messageType: "some example string",
            messageFormat: "some example string",
            payload: "some example string",
          },
        },
      ],
      isActive: true,
    },
  });
  // TODO: Handle 'response' of type GeoFenceConfigurationResponse
} catch (err) {
  // TODO: Handle 'err' of type EtxAppConfiguration.CreateConfigurationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.etxAppConfiguration.createConfiguration({
  vendorId: "VerizonETX",
  body: {
    geoFence: {
      type: Type.FeatureCollection,
      features: [{ type: Type1.Feature, geometry: {}, properties: {} }],
    },
    messages: [
      {
        isPrivate: true,
        roadUserType: [RoadUserTypes.VulnerableRoadUser],
        triggerConditions: [TriggerCondition.Enter],
        generic: {
          messageType: "some example string",
          messageFormat: "some example string",
          payload: "some example string",
        },
      },
    ],
    isActive: true,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GeoFenceConfigurationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.etxAppConfiguration.createConfiguration(request)`

- **OnSuccess**: <code>[GeoFenceConfigurationResponse](src/models/geo-fence-configuration-response.ts)</code>
- **OnError**: throws <code>[EtxAppConfiguration.CreateConfigurationError](src/resources/etx-app-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.etxAppConfiguration.createConfiguration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GeoFenceConfigurationResponse, EtxAppConfiguration.CreateConfigurationError&gt;</code>, with `result.value` of type <code>[GeoFenceConfigurationResponse](src/models/geo-fence-configuration-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.etxAppConfiguration.deleteConfiguration({
    id: "18bac1ff-c7bd-44d9-a7ad-06a093a94713",
    vendorId: "VerizonETX",
  });
} catch (err) {
  // TODO: Handle 'err' of type EtxAppConfiguration.DeleteConfigurationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.etxAppConfiguration.deleteConfiguration({
  id: "18bac1ff-c7bd-44d9-a7ad-06a093a94713",
  vendorId: "VerizonETX",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.etxAppConfiguration.deleteConfiguration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[EtxAppConfiguration.DeleteConfigurationError](src/resources/etx-app-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.etxAppConfiguration.deleteConfiguration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, EtxAppConfiguration.DeleteConfigurationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.etxAppConfiguration.getConfiguration({
    id: "18bac1ff-c7bd-44d9-a7ad-06a093a94713",
    vendorId: "VerizonETX",
  });
  // TODO: Handle 'response' of type GeoFenceConfigurationResponse
} catch (err) {
  // TODO: Handle 'err' of type EtxAppConfiguration.GetConfigurationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.etxAppConfiguration.getConfiguration({
  id: "18bac1ff-c7bd-44d9-a7ad-06a093a94713",
  vendorId: "VerizonETX",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GeoFenceConfigurationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.etxAppConfiguration.getConfiguration(request)`

- **OnSuccess**: <code>[GeoFenceConfigurationResponse](src/models/geo-fence-configuration-response.ts)</code>
- **OnError**: throws <code>[EtxAppConfiguration.GetConfigurationError](src/resources/etx-app-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.etxAppConfiguration.getConfiguration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GeoFenceConfigurationResponse, EtxAppConfiguration.GetConfigurationError&gt;</code>, with `result.value` of type <code>[GeoFenceConfigurationResponse](src/models/geo-fence-configuration-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.etxAppConfiguration.getConfigurationList({ vendorId: "VerizonETX" });
  // TODO: Handle 'response' of type ConfigurationListItem[]
} catch (err) {
  // TODO: Handle 'err' of type EtxAppConfiguration.GetConfigurationListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.etxAppConfiguration.getConfigurationList({
  vendorId: "VerizonETX",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConfigurationListItem[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.etxAppConfiguration.getConfigurationList(request)`

- **OnSuccess**: <code>[ConfigurationListItem](src/models/configuration-list-item.ts)[]</code>
- **OnError**: throws <code>[EtxAppConfiguration.GetConfigurationListError](src/resources/etx-app-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.etxAppConfiguration.getConfigurationList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConfigurationListItem[], EtxAppConfiguration.GetConfigurationListError&gt;</code>, with `result.value` of type <code>[ConfigurationListItem](src/models/configuration-list-item.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.etxAppConfiguration.updateConfiguration({
    id: "18bac1ff-c7bd-44d9-a7ad-06a093a94713",
    vendorId: "VerizonETX",
    body: {},
  });
} catch (err) {
  // TODO: Handle 'err' of type EtxAppConfiguration.UpdateConfigurationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.etxAppConfiguration.updateConfiguration({
  id: "18bac1ff-c7bd-44d9-a7ad-06a093a94713",
  vendorId: "VerizonETX",
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.etxAppConfiguration.updateConfiguration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[EtxAppConfiguration.UpdateConfigurationError](src/resources/etx-app-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.etxAppConfiguration.updateConfiguration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, EtxAppConfiguration.UpdateConfigurationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.etxRegistration.getEtxClientCertificate({
    id: {},
    vendorId: "VerizonETX",
    xTransactionId: "123e4567-e89b-12d3-a456-426614174000",
  });
  // TODO: Handle 'response' of type ClientPersistenceResponse
} catch (err) {
  // TODO: Handle 'err' of type EtxRegistration.GetEtxClientCertificateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.etxRegistration.getEtxClientCertificate({
  id: {},
  vendorId: "VerizonETX",
  xTransactionId: "123e4567-e89b-12d3-a456-426614174000",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientPersistenceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.etxRegistration.getEtxClientCertificate(request)`

- **OnSuccess**: <code>[ClientPersistenceResponse](src/models/client-persistence-response.ts)</code>
- **OnError**: throws <code>[EtxRegistration.GetEtxClientCertificateError](src/resources/etx-registration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.etxRegistration.getEtxClientCertificate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientPersistenceResponse, EtxRegistration.GetEtxClientCertificateError&gt;</code>, with `result.value` of type <code>[ClientPersistenceResponse](src/models/client-persistence-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.etxRegistration.getEtxConnectionUrl({
    vendorId: "VerizonETX",
    xTransactionId: "123e4567-e89b-12d3-a456-426614174000",
    body: {
      deviceId: "00000000-0000-0000-0000-000000000000",
      geolocation: { latitude: 1.5, longitude: 1.5 },
      networkType: NetworkType.Vz,
    },
  });
  // TODO: Handle 'response' of type ConnectionResponse
} catch (err) {
  // TODO: Handle 'err' of type EtxRegistration.GetEtxConnectionUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.etxRegistration.getEtxConnectionUrl({
  vendorId: "VerizonETX",
  xTransactionId: "123e4567-e89b-12d3-a456-426614174000",
  body: {
    deviceId: "00000000-0000-0000-0000-000000000000",
    geolocation: { latitude: 1.5, longitude: 1.5 },
    networkType: NetworkType.Vz,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.etxRegistration.getEtxConnectionUrl(request)`

- **OnSuccess**: <code>[ConnectionResponse](src/models/connection-response.ts)</code>
- **OnError**: throws <code>[EtxRegistration.GetEtxConnectionUrlError](src/resources/etx-registration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.etxRegistration.getEtxConnectionUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectionResponse, EtxRegistration.GetEtxConnectionUrlError&gt;</code>, with `result.value` of type <code>[ConnectionResponse](src/models/connection-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.etxRegistration.getEtxConnectionUrlMultiMec({
    vendorId: "VerizonETX",
    xTransactionId: "123e4567-e89b-12d3-a456-426614174000",
    body: {
      deviceId: "00000000-0000-0000-0000-000000000000",
      geolocation: { latitude: 1.5, longitude: 1.5 },
      networkType: NetworkType.Vz,
    },
  });
  // TODO: Handle 'response' of type ConnectionResponseV3
} catch (err) {
  // TODO: Handle 'err' of type EtxRegistration.GetEtxConnectionUrlMultiMecError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.etxRegistration.getEtxConnectionUrlMultiMec({
  vendorId: "VerizonETX",
  xTransactionId: "123e4567-e89b-12d3-a456-426614174000",
  body: {
    deviceId: "00000000-0000-0000-0000-000000000000",
    geolocation: { latitude: 1.5, longitude: 1.5 },
    networkType: NetworkType.Vz,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectionResponseV3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.etxRegistration.getEtxConnectionUrlMultiMec(request)`

- **OnSuccess**: <code>[ConnectionResponseV3](src/models/connection-response-v3.ts)</code>
- **OnError**: throws <code>[EtxRegistration.GetEtxConnectionUrlMultiMecError](src/resources/etx-registration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.etxRegistration.getEtxConnectionUrlMultiMec(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectionResponseV3, EtxRegistration.GetEtxConnectionUrlMultiMecError&gt;</code>, with `result.value` of type <code>[ConnectionResponseV3](src/models/connection-response-v3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.etxRegistration.queryEtxDevices({
    xTransactionId: "123e4567-e89b-12d3-a456-426614174000",
    body: { vendorId: "some example string" },
  });
  // TODO: Handle 'response' of type DevicesResponse[]
} catch (err) {
  // TODO: Handle 'err' of type EtxRegistration.QueryEtxDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.etxRegistration.queryEtxDevices({
  xTransactionId: "123e4567-e89b-12d3-a456-426614174000",
  body: { vendorId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DevicesResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.etxRegistration.queryEtxDevices(request)`

- **OnSuccess**: <code>[DevicesResponse](src/models/devices-response.ts)[]</code>
- **OnError**: throws <code>[EtxRegistration.QueryEtxDevicesError](src/resources/etx-registration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.etxRegistration.queryEtxDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DevicesResponse[], EtxRegistration.QueryEtxDevicesError&gt;</code>, with `result.value` of type <code>[DevicesResponse](src/models/devices-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.etxRegistration.registerEtxClient({
    xTransactionId: "123e4567-e89b-12d3-a456-426614174000",
    body: {
      clientType: EtxClientType.Vehicle,
      clientSubtype: ClientSubtype.PassengerCar,
      vendorId: "some example string",
    },
  });
  // TODO: Handle 'response' of type ClientRegistrationResponse
} catch (err) {
  // TODO: Handle 'err' of type EtxRegistration.RegisterEtxClientError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.etxRegistration.registerEtxClient({
  xTransactionId: "123e4567-e89b-12d3-a456-426614174000",
  body: {
    clientType: EtxClientType.Vehicle,
    clientSubtype: ClientSubtype.PassengerCar,
    vendorId: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientRegistrationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.etxRegistration.registerEtxClient(request)`

- **OnSuccess**: <code>[ClientRegistrationResponse](src/models/client-registration-response.ts)</code>
- **OnError**: throws <code>[EtxRegistration.RegisterEtxClientError](src/resources/etx-registration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.etxRegistration.registerEtxClient(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientRegistrationResponse, EtxRegistration.RegisterEtxClientError&gt;</code>, with `result.value` of type <code>[ClientRegistrationResponse](src/models/client-registration-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.etxRegistration.renewEtxClientCertificate({
    deviceId: "a4fcd16a-343d-4527-8203-2f46e3e4ff4b",
    vendorId: "VerizonETX",
    xTransactionId: "123e4567-e89b-12d3-a456-426614174000",
  });
  // TODO: Handle 'response' of type ClientRegistrationResponse
} catch (err) {
  // TODO: Handle 'err' of type EtxRegistration.RenewEtxClientCertificateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.etxRegistration.renewEtxClientCertificate({
  deviceId: "a4fcd16a-343d-4527-8203-2f46e3e4ff4b",
  vendorId: "VerizonETX",
  xTransactionId: "123e4567-e89b-12d3-a456-426614174000",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClientRegistrationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.etxRegistration.renewEtxClientCertificate(request)`

- **OnSuccess**: <code>[ClientRegistrationResponse](src/models/client-registration-response.ts)</code>
- **OnError**: throws <code>[EtxRegistration.RenewEtxClientCertificateError](src/resources/etx-registration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.etxRegistration.renewEtxClientCertificate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClientRegistrationResponse, EtxRegistration.RenewEtxClientCertificateError&gt;</code>, with `result.value` of type <code>[ClientRegistrationResponse](src/models/client-registration-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.etxRegistration.unregisterEtxClients({
    deviceIDs: ["00000000-0000-0000-0000-000000000000"],
    vendorId: "VerizonETX",
    xTransactionId: "123e4567-e89b-12d3-a456-426614174000",
  });
} catch (err) {
  // TODO: Handle 'err' of type EtxRegistration.UnregisterEtxClientsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.etxRegistration.unregisterEtxClients({
  deviceIDs: ["00000000-0000-0000-0000-000000000000"],
  vendorId: "VerizonETX",
  xTransactionId: "123e4567-e89b-12d3-a456-426614174000",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.etxRegistration.unregisterEtxClients(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[EtxRegistration.UnregisterEtxClientsError](src/resources/etx-registration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.etxRegistration.unregisterEtxClients(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, EtxRegistration.UnregisterEtxClientsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.mapMessageController.deleteMapMessage({ regionId: "0", i10Nid: "58399" });
} catch (err) {
  // TODO: Handle 'err' of type MapMessageController.DeleteMapMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mapMessageController.deleteMapMessage({
  regionId: "0",
  i10Nid: "58399",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.mapMessageController.deleteMapMessage(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MapMessageController.DeleteMapMessageError](src/resources/map-message-controller.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mapMessageController.deleteMapMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MapMessageController.DeleteMapMessageError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mapMessageController.downloadMapMessages({
    geofence: {
      type: EtxMapMessageGeofenceGeometry.Polygon,
      coordinates: [
        [-77.479395, 38.990773],
        [-77.114566, 38.99944],
        [-77.100228, 38.817204],
        [-77.418059, 38.827754],
        [-77.479395, 38.990773],
      ],
    },
    vendorId: "VzMapManager",
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type MapMessageController.DownloadMapMessagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mapMessageController.downloadMapMessages({
  geofence: {
    type: EtxMapMessageGeofenceGeometry.Polygon,
    coordinates: [
      [-77.479395, 38.990773],
      [-77.114566, 38.99944],
      [-77.100228, 38.817204],
      [-77.418059, 38.827754],
      [-77.479395, 38.990773],
    ],
  },
  vendorId: "VzMapManager",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.mapMessageController.downloadMapMessages(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[MapMessageController.DownloadMapMessagesError](src/resources/map-message-controller.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mapMessageController.downloadMapMessages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, MapMessageController.DownloadMapMessagesError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mapMessageController.ingestMapMessages({
    vendorId: "VzMapManager",
    mapDataMessageStandard: EtxMessageStandardEnum.Sae,
    body: { messageId: 1, value: {} },
  });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type MapMessageController.IngestMapMessagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mapMessageController.ingestMapMessages({
  vendorId: "VzMapManager",
  mapDataMessageStandard: EtxMessageStandardEnum.Sae,
  body: { messageId: 1, value: {} },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>mapDataMessageStandard?</code> | <code>[EtxMessageStandardEnum](src/models/etx-message-standard-enum.ts)</code> | Select which V2X messaging standard will be used for the message generation. The following options are supported:<br>- "etsi": The message will be generated using the ETSI (European) standard (e.g. MAPEM).<br>- "sae": The message will be generated using the SAE J2735 (North American) standard (e.g. MAP).<br>- if not sent while POST, defaults to "sae"<br>**Default**: "sae" |
| <code>body</code> | <code>[EtxMapDataIngestRequest](src/models/etx-map-data-ingest-request.ts)</code> | UPER/ASN.1 J2735/ETSI base64 encoded MapData message or JSON representation of the MapData message. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mapMessageController.ingestMapMessages(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[MapMessageController.IngestMapMessagesError](src/resources/map-message-controller.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mapMessageController.ingestMapMessages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, MapMessageController.IngestMapMessagesError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mapMessageController.queryMapMessages({
    vendorId: "VzMapManager",
    body: {
      messageStandard: EtxMessageStandardEnum.Sae,
      regionIntersectionPairs: [{ regionId: 100, intersectionId: 5233 }],
      expectedType: EtxExpectedTypeEnum.Base64,
      pageSize: 50,
    },
  });
  // TODO: Handle 'response' of type Record<string, unknown>[]
} catch (err) {
  // TODO: Handle 'err' of type MapMessageController.QueryMapMessagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mapMessageController.queryMapMessages({
  vendorId: "VzMapManager",
  body: {
    messageStandard: EtxMessageStandardEnum.Sae,
    regionIntersectionPairs: [{ regionId: 100, intersectionId: 5233 }],
    expectedType: EtxExpectedTypeEnum.Base64,
    pageSize: 50,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.mapMessageController.queryMapMessages(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;[]</code>
- **OnError**: throws <code>[MapMessageController.QueryMapMessagesError](src/resources/map-message-controller.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mapMessageController.queryMapMessages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;[], MapMessageController.QueryMapMessagesError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.retrieveRatePlanList.getRatePlanList({ ecpdId: "0000123456-00001" });
  // TODO: Handle 'response' of type Rateplan
} catch (err) {
  // TODO: Handle 'err' of type RetrieveRatePlanList.GetRatePlanListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.retrieveRatePlanList.getRatePlanList({
  ecpdId: "0000123456-00001",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Rateplan
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.retrieveRatePlanList.getRatePlanList(request)`

- **OnSuccess**: <code>[Rateplan](src/models/rateplan.ts)</code>
- **OnError**: throws <code>[RetrieveRatePlanList.GetRatePlanListError](src/resources/retrieve-rate-plan-list.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.retrieveRatePlanList.getRatePlanList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Rateplan, RetrieveRatePlanList.GetRatePlanListError&gt;</code>, with `result.value` of type <code>[Rateplan](src/models/rateplan.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createPricePlanTriggers.createTriggerRules({
    body: {
      triggerName: "name of the trigger",
      ecpdId: "Verizon profile ID",
      triggerCategory: TriggerCategory.AccountUsage,
      dataTrigger: { accountLevel: { filterCriteria: {}, condition: {}, action: AccountLevelAction.Notify } },
      notification: {
        notificationType: "PerEvent",
        callback: true,
        emailNotification: false,
        notificationGroupName: "NotificationGroupName",
        notificationFrequencyFactor: 3,
        notificationFrequencyInterval: "Daily",
        externalEmailRecipients: "ExternalEmailRecipients",
        smsNotification: true,
        smsNumbers: [
          { number: "10-digit mobile number", carrier: "mobile service provider" },
          { number: "10-digit mobile number", carrier: "mobile service provider" },
        ],
        reminder: true,
        severity: "Notice",
      },
      active: Active.True,
    },
  });
  // TODO: Handle 'response' of type TriggerResponse
} catch (err) {
  // TODO: Handle 'err' of type CreatePricePlanTriggers.CreateTriggerRulesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.createPricePlanTriggers.createTriggerRules({
  body: {
    triggerName: "name of the trigger",
    ecpdId: "Verizon profile ID",
    triggerCategory: TriggerCategory.AccountUsage,
    dataTrigger: { accountLevel: { filterCriteria: {}, condition: {}, action: AccountLevelAction.Notify } },
    notification: {
      notificationType: "PerEvent",
      callback: true,
      emailNotification: false,
      notificationGroupName: "NotificationGroupName",
      notificationFrequencyFactor: 3,
      notificationFrequencyInterval: "Daily",
      externalEmailRecipients: "ExternalEmailRecipients",
      smsNotification: true,
      smsNumbers: [
        { number: "10-digit mobile number", carrier: "mobile service provider" },
        { number: "10-digit mobile number", carrier: "mobile service provider" },
      ],
      reminder: true,
      severity: "Notice",
    },
    active: Active.True,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TriggerResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.createPricePlanTriggers.createTriggerRules(request)`

- **OnSuccess**: <code>[TriggerResponse](src/models/trigger-response.ts)</code>
- **OnError**: throws <code>[CreatePricePlanTriggers.CreateTriggerRulesError](src/resources/create-price-plan-triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createPricePlanTriggers.createTriggerRules(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TriggerResponse, CreatePricePlanTriggers.CreateTriggerRulesError&gt;</code>, with `result.value` of type <code>[TriggerResponse](src/models/trigger-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updatePricePlanTriggers.updateTriggerRules({
    body: {
      triggerId: "b9cc1da6-ffff-eeee-gggg-7eba8859ab5e",
      triggerName: "name of the trigger",
      ecpdId: "Verizon profile ID",
      triggerCategory: TriggerCategory.AccountUsage,
      dataTrigger: {},
      notification: {
        notificationType: "PerEvent",
        callback: true,
        emailNotification: false,
        notificationGroupName: "NotificationGroupName",
        notificationFrequencyFactor: 3,
        notificationFrequencyInterval: "Daily",
        externalEmailRecipients: "ExternalEmailRecipients",
        smsNotification: true,
        smsNumbers: [
          { number: "10-digit mobile number", carrier: "mobile service provider" },
          { number: "10-digit mobile number", carrier: "mobile service provider" },
        ],
        reminder: true,
        severity: "Notice",
      },
      active: Active.True,
    },
  });
  // TODO: Handle 'response' of type TriggerResponse
} catch (err) {
  // TODO: Handle 'err' of type UpdatePricePlanTriggers.UpdateTriggerRulesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updatePricePlanTriggers.updateTriggerRules({
  body: {
    triggerId: "b9cc1da6-ffff-eeee-gggg-7eba8859ab5e",
    triggerName: "name of the trigger",
    ecpdId: "Verizon profile ID",
    triggerCategory: TriggerCategory.AccountUsage,
    dataTrigger: {},
    notification: {
      notificationType: "PerEvent",
      callback: true,
      emailNotification: false,
      notificationGroupName: "NotificationGroupName",
      notificationFrequencyFactor: 3,
      notificationFrequencyInterval: "Daily",
      externalEmailRecipients: "ExternalEmailRecipients",
      smsNotification: true,
      smsNumbers: [
        { number: "10-digit mobile number", carrier: "mobile service provider" },
        { number: "10-digit mobile number", carrier: "mobile service provider" },
      ],
      reminder: true,
      severity: "Notice",
    },
    active: Active.True,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TriggerResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.updatePricePlanTriggers.updateTriggerRules(request)`

- **OnSuccess**: <code>[TriggerResponse](src/models/trigger-response.ts)</code>
- **OnError**: throws <code>[UpdatePricePlanTriggers.UpdateTriggerRulesError](src/resources/update-price-plan-triggers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updatePricePlanTriggers.updateTriggerRules(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TriggerResponse, UpdatePricePlanTriggers.UpdateTriggerRulesError&gt;</code>, with `result.value` of type <code>[TriggerResponse](src/models/trigger-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gbiDeviceActions5.businessInternetServiceplanchange({
    body: {
      accountName: "0000123456-00001",
      servicePlan: "5G BI service plan name being changed to",
      deviceListWithServiceAddress: [
        { deviceId: [{ id: "15-digit IMEI", kind: "imei" }] },
        { primaryPlaceofuse: {} },
      ],
      currentServicePlan: "Optional name of the plan being changed from",
    },
  });
  // TODO: Handle 'response' of type GbiRequestResponse5
} catch (err) {
  // TODO: Handle 'err' of type GbiDeviceActions5.BusinessInternetServiceplanchangeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.gbiDeviceActions5.businessInternetServiceplanchange({
  body: {
    accountName: "0000123456-00001",
    servicePlan: "5G BI service plan name being changed to",
    deviceListWithServiceAddress: [
      { deviceId: [{ id: "15-digit IMEI", kind: "imei" }] },
      { primaryPlaceofuse: {} },
    ],
    currentServicePlan: "Optional name of the plan being changed from",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GbiRequestResponse5
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.gbiDeviceActions5.businessInternetServiceplanchange(request)`

- **OnSuccess**: <code>[GbiRequestResponse5](src/models/gbi-request-response5.ts)</code>
- **OnError**: throws <code>[GbiDeviceActions5.BusinessInternetServiceplanchangeError](src/resources/gbi-device-actions5.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.gbiDeviceActions5.businessInternetServiceplanchange(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GbiRequestResponse5, GbiDeviceActions5.BusinessInternetServiceplanchangeError&gt;</code>, with `result.value` of type <code>[GbiRequestResponse5](src/models/gbi-request-response5.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gbiDeviceActions5.businessInternetactivateUsingPost({
    body: {
      accountName: "0000123456-00001",
      servicePlan: "service plan name",
      deviceListWithServiceAddress: [
        { deviceId: [{ id: "15-digit IMEI", kind: "imei" }, { id: "20-digit ICCID", kind: "iccid" }] },
        { primaryPlaceofuse: { address: {}, customerName: {} } },
      ],
      skuNumber: "VZW Stock Keeping Unit number",
      publicIpRestriction: "Unrestricted",
      carrierName: "Verizon Wireless",
      mdnZipCode: "the 5-digit ZIP code of the Mobile Directory Number (MDN)",
    },
  });
  // TODO: Handle 'response' of type GbiRequestResponse5
} catch (err) {
  // TODO: Handle 'err' of type GbiDeviceActions5.BusinessInternetactivateUsingPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.gbiDeviceActions5.businessInternetactivateUsingPost({
  body: {
    accountName: "0000123456-00001",
    servicePlan: "service plan name",
    deviceListWithServiceAddress: [
      { deviceId: [{ id: "15-digit IMEI", kind: "imei" }, { id: "20-digit ICCID", kind: "iccid" }] },
      { primaryPlaceofuse: { address: {}, customerName: {} } },
    ],
    skuNumber: "VZW Stock Keeping Unit number",
    publicIpRestriction: "Unrestricted",
    carrierName: "Verizon Wireless",
    mdnZipCode: "the 5-digit ZIP code of the Mobile Directory Number (MDN)",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GbiRequestResponse5
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.gbiDeviceActions5.businessInternetactivateUsingPost(request)`

- **OnSuccess**: <code>[GbiRequestResponse5](src/models/gbi-request-response5.ts)</code>
- **OnError**: throws <code>[GbiDeviceActions5.BusinessInternetactivateUsingPostError](src/resources/gbi-device-actions5.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.gbiDeviceActions5.businessInternetactivateUsingPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GbiRequestResponse5, GbiDeviceActions5.BusinessInternetactivateUsingPostError&gt;</code>, with `result.value` of type <code>[GbiRequestResponse5](src/models/gbi-request-response5.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.gbiDeviceActions5.businessInternetlistDeviceInformation({
    body: { deviceId: { id: "20-digit ICCID", kind: "iccid" } },
  });
  // TODO: Handle 'response' of type GbideviceDetailsresponse5
} catch (err) {
  // TODO: Handle 'err' of type GbiDeviceActions5.BusinessInternetlistDeviceInformationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.gbiDeviceActions5.businessInternetlistDeviceInformation({
  body: { deviceId: { id: "20-digit ICCID", kind: "iccid" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GbideviceDetailsresponse5
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.gbiDeviceActions5.businessInternetlistDeviceInformation(request)`

- **OnSuccess**: <code>[GbideviceDetailsresponse5](src/models/gbidevice-detailsresponse5.ts)</code>
- **OnError**: throws <code>[GbiDeviceActions5.BusinessInternetlistDeviceInformationError](src/resources/gbi-device-actions5.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.gbiDeviceActions5.businessInternetlistDeviceInformation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GbideviceDetailsresponse5, GbiDeviceActions5.BusinessInternetlistDeviceInformationError&gt;</code>, with `result.value` of type <code>[GbideviceDetailsresponse5](src/models/gbidevice-detailsresponse5.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsSensors.sensorInsightsListSensorDevicesRequest({
    body: {
      accountname: "0000123456-00001",
      filter: {
        expand: "device detail(s)",
        limitnumber: 100,
        nopagination: true,
        page: "The number of pages",
        pagenumber: 1,
        projection: ["specific device fields requested"],
        selection: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
      },
      resourceidentifier: {
        deveui: "The unique EUI64 address of the device",
        deviceid: "The UUID of the device",
        esn: 223372036854775800,
        iccid: "The 20-digit Integrated Circuit Card ID (SIM card ID)",
        imei: 223372036854775,
        imsi: 223372036854775800,
        mac: "The Media Access Control address of the device, listed on the device in the format XX-XX-XX-XX-XX-XX or XX:XX:XX:XX:XX:XX",
        manufacturer: "REOLINK",
        meid: "The 56-bit Mobile Equipment ID",
        msisdn:
          "The Mobile Station International Subscriber Directory Number. In the USA, this is 1+ a 10-digit phone number",
        nodeUuid: "The UUID of the node the device is associated with",
        qrcode: "The Quick Response (QR) code",
        serial: "The device's serial number",
      },
    },
  });
  // TODO: Handle 'response' of type ResourceDevice[]
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsSensors.SensorInsightsListSensorDevicesRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsSensors.sensorInsightsListSensorDevicesRequest({
  body: {
    accountname: "0000123456-00001",
    filter: {
      expand: "device detail(s)",
      limitnumber: 100,
      nopagination: true,
      page: "The number of pages",
      pagenumber: 1,
      projection: ["specific device fields requested"],
      selection: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
    },
    resourceidentifier: {
      deveui: "The unique EUI64 address of the device",
      deviceid: "The UUID of the device",
      esn: 223372036854775800,
      iccid: "The 20-digit Integrated Circuit Card ID (SIM card ID)",
      imei: 223372036854775,
      imsi: 223372036854775800,
      mac: "The Media Access Control address of the device, listed on the device in the format XX-XX-XX-XX-XX-XX or XX:XX:XX:XX:XX:XX",
      manufacturer: "REOLINK",
      meid: "The 56-bit Mobile Equipment ID",
      msisdn:
        "The Mobile Station International Subscriber Directory Number. In the USA, this is 1+ a 10-digit phone number",
      nodeUuid: "The UUID of the node the device is associated with",
      qrcode: "The Quick Response (QR) code",
      serial: "The device's serial number",
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResourceDevice[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsSensors.sensorInsightsListSensorDevicesRequest(request)`

- **OnSuccess**: <code>[ResourceDevice](src/models/resource-device.ts)[]</code>
- **OnError**: throws <code>[SensorInsightsSensors.SensorInsightsListSensorDevicesRequestError](src/resources/sensor-insights-sensors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsSensors.sensorInsightsListSensorDevicesRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResourceDevice[], SensorInsightsSensors.SensorInsightsListSensorDevicesRequestError&gt;</code>, with `result.value` of type <code>[ResourceDevice](src/models/resource-device.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsOffBoardSensorRequest(request: SensorInsightsSensors.SensorInsightsOffBoardSensorRequestRequest, options?: RequestOptions): ApiPromise&lt;undefined, SensorInsightsSensors.SensorInsightsOffBoardSensorRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sensorInsightsSensors.sensorInsightsOffBoardSensorRequest({
    body: {
      accountname: "0000123456-00001",
      configuration: { removesensor: { deveui: "The unique EUI64 address of the device" } },
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsSensors.SensorInsightsOffBoardSensorRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsSensors.sensorInsightsOffBoardSensorRequest({
  body: {
    accountname: "0000123456-00001",
    configuration: { removesensor: { deveui: "The unique EUI64 address of the device" } },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsSensors.sensorInsightsOffBoardSensorRequest(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SensorInsightsSensors.SensorInsightsOffBoardSensorRequestError](src/resources/sensor-insights-sensors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsSensors.sensorInsightsOffBoardSensorRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SensorInsightsSensors.SensorInsightsOffBoardSensorRequestError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsOnBoardSensorRequest(request: SensorInsightsSensors.SensorInsightsOnBoardSensorRequestRequest, options?: RequestOptions): ApiPromise&lt;undefined, SensorInsightsSensors.SensorInsightsOnBoardSensorRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sensorInsightsSensors.sensorInsightsOnBoardSensorRequest({
    body: {
      accountname: "0000123456-00001",
      payload: {
        addsensor: {
          deveui: "The unique EUI64 address of the device",
          appeui:
            "global application ID in IEEE EUI64 address space that uniquely identifies the entity able to process the JoinReq frame",
          appkey: "Encryption key used for messages during every over the air activation",
          class: "A",
          kind: "ts.device.sensor.lorawan.radiobridge.RBS301-DWS-US",
          description: "used to identify water leaks",
          name: "Water Leak sensor",
          customdata: { additionalProp1: {}, additionalProp2: {}, additionalProp3: {} },
        },
      },
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsSensors.SensorInsightsOnBoardSensorRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsSensors.sensorInsightsOnBoardSensorRequest({
  body: {
    accountname: "0000123456-00001",
    payload: {
      addsensor: {
        deveui: "The unique EUI64 address of the device",
        appeui:
          "global application ID in IEEE EUI64 address space that uniquely identifies the entity able to process the JoinReq frame",
        appkey: "Encryption key used for messages during every over the air activation",
        class: "A",
        kind: "ts.device.sensor.lorawan.radiobridge.RBS301-DWS-US",
        description: "used to identify water leaks",
        name: "Water Leak sensor",
        customdata: { additionalProp1: {}, additionalProp2: {}, additionalProp3: {} },
      },
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsSensors.sensorInsightsOnBoardSensorRequest(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SensorInsightsSensors.SensorInsightsOnBoardSensorRequestError](src/resources/sensor-insights-sensors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsSensors.sensorInsightsOnBoardSensorRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SensorInsightsSensors.SensorInsightsOnBoardSensorRequestError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsSensorOffBoardingStatusRequest(request: SensorInsightsSensors.SensorInsightsSensorOffBoardingStatusRequestRequest, options?: RequestOptions): ApiPromise&lt;DtoSensorOffBoardingStatusResponse, SensorInsightsSensors.SensorInsightsSensorOffBoardingStatusRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsSensors.sensorInsightsSensorOffBoardingStatusRequest({
    body: {
      accountname: "0000123456-00001",
      gatewayidentifier: { deviceid: "UUID of the Gateway device" },
      offboarding: {},
    },
  });
  // TODO: Handle 'response' of type DtoSensorOffBoardingStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsSensors.SensorInsightsSensorOffBoardingStatusRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsSensors.sensorInsightsSensorOffBoardingStatusRequest({
  body: {
    accountname: "0000123456-00001",
    gatewayidentifier: { deviceid: "UUID of the Gateway device" },
    offboarding: {},
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DtoSensorOffBoardingStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsSensors.sensorInsightsSensorOffBoardingStatusRequest(request)`

- **OnSuccess**: <code>[DtoSensorOffBoardingStatusResponse](src/models/dto-sensor-off-boarding-status-response.ts)</code>
- **OnError**: throws <code>[SensorInsightsSensors.SensorInsightsSensorOffBoardingStatusRequestError](src/resources/sensor-insights-sensors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsSensors.sensorInsightsSensorOffBoardingStatusRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DtoSensorOffBoardingStatusResponse, SensorInsightsSensors.SensorInsightsSensorOffBoardingStatusRequestError&gt;</code>, with `result.value` of type <code>[DtoSensorOffBoardingStatusResponse](src/models/dto-sensor-off-boarding-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsSensorOnBoardStatusRequest(request: SensorInsightsSensors.SensorInsightsSensorOnBoardStatusRequestRequest, options?: RequestOptions): ApiPromise&lt;DtoSensorOnBoardingStatusResponse, SensorInsightsSensors.SensorInsightsSensorOnBoardStatusRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsSensors.sensorInsightsSensorOnBoardStatusRequest({
    body: {
      accountname: "0000123456-00001",
      gatewayidentifier: { deviceid: "00000000-0000-0000-0000-000000000255" },
      onboarding: {},
    },
  });
  // TODO: Handle 'response' of type DtoSensorOnBoardingStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsSensors.SensorInsightsSensorOnBoardStatusRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsSensors.sensorInsightsSensorOnBoardStatusRequest({
  body: {
    accountname: "0000123456-00001",
    gatewayidentifier: { deviceid: "00000000-0000-0000-0000-000000000255" },
    onboarding: {},
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DtoSensorOnBoardingStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsSensors.sensorInsightsSensorOnBoardStatusRequest(request)`

- **OnSuccess**: <code>[DtoSensorOnBoardingStatusResponse](src/models/dto-sensor-on-boarding-status-response.ts)</code>
- **OnError**: throws <code>[SensorInsightsSensors.SensorInsightsSensorOnBoardStatusRequestError](src/resources/sensor-insights-sensors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsSensors.sensorInsightsSensorOnBoardStatusRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DtoSensorOnBoardingStatusResponse, SensorInsightsSensors.SensorInsightsSensorOnBoardStatusRequestError&gt;</code>, with `result.value` of type <code>[DtoSensorOnBoardingStatusResponse](src/models/dto-sensor-on-boarding-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDevices.sensorInsightsDeviceActionSetRequest({
    body: {
      accountname: "0000123456-00001",
      configuration: { deviceConfig: { ble: {} } },
      resourceidentifier: {
        deveui: "The unique EUI64 address of the device",
        deviceid: "The UUID of the device",
        esn: 223372036854775800,
        iccid: "The 20-digit Integrated Circuit Card ID (SIM card ID)",
        imei: 223372036854775,
        imsi: 223372036854775800,
        mac: "The Media Access Control address of the device, listed on the device in the format XX-XX-XX-XX-XX-XX or XX:XX:XX:XX:XX:XX",
        manufacturer: "REOLINK",
        meid: "The 56-bit Mobile Equipment ID",
        msisdn:
          "The Mobile Station International Subscriber Directory Number. In the USA, this is 1+ a 10-digit phone number",
        nodeUuid: "The UUID of the node the device is associated with",
        qrcode: "The Quick Response (QR) code",
        serial: "The device's serial number",
      },
    },
  });
  // TODO: Handle 'response' of type DtoDeviceActionSetResponse
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsDevices.SensorInsightsDeviceActionSetRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsDevices.sensorInsightsDeviceActionSetRequest({
  body: {
    accountname: "0000123456-00001",
    configuration: { deviceConfig: { ble: {} } },
    resourceidentifier: {
      deveui: "The unique EUI64 address of the device",
      deviceid: "The UUID of the device",
      esn: 223372036854775800,
      iccid: "The 20-digit Integrated Circuit Card ID (SIM card ID)",
      imei: 223372036854775,
      imsi: 223372036854775800,
      mac: "The Media Access Control address of the device, listed on the device in the format XX-XX-XX-XX-XX-XX or XX:XX:XX:XX:XX:XX",
      manufacturer: "REOLINK",
      meid: "The 56-bit Mobile Equipment ID",
      msisdn:
        "The Mobile Station International Subscriber Directory Number. In the USA, this is 1+ a 10-digit phone number",
      nodeUuid: "The UUID of the node the device is associated with",
      qrcode: "The Quick Response (QR) code",
      serial: "The device's serial number",
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DtoDeviceActionSetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsDevices.sensorInsightsDeviceActionSetRequest(request)`

- **OnSuccess**: <code>[DtoDeviceActionSetResponse](src/models/dto-device-action-set-response.ts)</code>
- **OnError**: throws <code>[SensorInsightsDevices.SensorInsightsDeviceActionSetRequestError](src/resources/sensor-insights-devices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsDevices.sensorInsightsDeviceActionSetRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DtoDeviceActionSetResponse, SensorInsightsDevices.SensorInsightsDeviceActionSetRequestError&gt;</code>, with `result.value` of type <code>[DtoDeviceActionSetResponse](src/models/dto-device-action-set-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsLastReportedTimeRequest(request: SensorInsightsDevices.SensorInsightsLastReportedTimeRequestRequest, options?: RequestOptions): ApiPromise&lt;DtoLastReportedTimeResponse, SensorInsightsDevices.SensorInsightsLastReportedTimeRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDevices.sensorInsightsLastReportedTimeRequest({
    body: {
      accountname: "0000123456-00001",
      resourceidentifier: {
        deveui: "The unique EUI64 address of the device",
        deviceid: "The UUID of the device",
        esn: 223372036854775800,
        iccid: "The 20-digit Integrated Circuit Card ID (SIM card ID)",
        imei: 223372036854775,
        imsi: 223372036854775800,
        mac: "The Media Access Control address of the device, listed on the device in the format XX-XX-XX-XX-XX-XX or XX:XX:XX:XX:XX:XX",
        manufacturer: "REOLINK",
        meid: "The 56-bit Mobile Equipment ID",
        msisdn:
          "The Mobile Station International Subscriber Directory Number. In the USA, this is 1+ a 10-digit phone number",
        nodeUuid: "The UUID of the node the device is associated with",
        qrcode: "The Quick Response (QR) code",
        serial: "The device's serial number",
      },
    },
  });
  // TODO: Handle 'response' of type DtoLastReportedTimeResponse
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsDevices.SensorInsightsLastReportedTimeRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsDevices.sensorInsightsLastReportedTimeRequest({
  body: {
    accountname: "0000123456-00001",
    resourceidentifier: {
      deveui: "The unique EUI64 address of the device",
      deviceid: "The UUID of the device",
      esn: 223372036854775800,
      iccid: "The 20-digit Integrated Circuit Card ID (SIM card ID)",
      imei: 223372036854775,
      imsi: 223372036854775800,
      mac: "The Media Access Control address of the device, listed on the device in the format XX-XX-XX-XX-XX-XX or XX:XX:XX:XX:XX:XX",
      manufacturer: "REOLINK",
      meid: "The 56-bit Mobile Equipment ID",
      msisdn:
        "The Mobile Station International Subscriber Directory Number. In the USA, this is 1+ a 10-digit phone number",
      nodeUuid: "The UUID of the node the device is associated with",
      qrcode: "The Quick Response (QR) code",
      serial: "The device's serial number",
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DtoLastReportedTimeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsDevices.sensorInsightsLastReportedTimeRequest(request)`

- **OnSuccess**: <code>[DtoLastReportedTimeResponse](src/models/dto-last-reported-time-response.ts)</code>
- **OnError**: throws <code>[SensorInsightsDevices.SensorInsightsLastReportedTimeRequestError](src/resources/sensor-insights-devices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsDevices.sensorInsightsLastReportedTimeRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DtoLastReportedTimeResponse, SensorInsightsDevices.SensorInsightsLastReportedTimeRequestError&gt;</code>, with `result.value` of type <code>[DtoLastReportedTimeResponse](src/models/dto-last-reported-time-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsListDeviceExperienceHistoryRequest(request: SensorInsightsDevices.SensorInsightsListDeviceExperienceHistoryRequestRequest, options?: RequestOptions): ApiPromise&lt;UserDeviceExperienceHistory[], SensorInsightsDevices.SensorInsightsListDeviceExperienceHistoryRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDevices.sensorInsightsListDeviceExperienceHistoryRequest({
    body: {
      accountname: "0000123456-00001",
      filter: {
        expand: "device detail(s)",
        limitnumber: 100,
        nopagination: true,
        page: "The number of pages",
        pagenumber: 100,
        projection: ["specific device fields requested"],
        selection: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
      },
    },
  });
  // TODO: Handle 'response' of type UserDeviceExperienceHistory[]
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsDevices.SensorInsightsListDeviceExperienceHistoryRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsDevices.sensorInsightsListDeviceExperienceHistoryRequest({
  body: {
    accountname: "0000123456-00001",
    filter: {
      expand: "device detail(s)",
      limitnumber: 100,
      nopagination: true,
      page: "The number of pages",
      pagenumber: 100,
      projection: ["specific device fields requested"],
      selection: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserDeviceExperienceHistory[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsDevices.sensorInsightsListDeviceExperienceHistoryRequest(request)`

- **OnSuccess**: <code>[UserDeviceExperienceHistory](src/models/user-device-experience-history.ts)[]</code>
- **OnError**: throws <code>[SensorInsightsDevices.SensorInsightsListDeviceExperienceHistoryRequestError](src/resources/sensor-insights-devices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsDevices.sensorInsightsListDeviceExperienceHistoryRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserDeviceExperienceHistory[], SensorInsightsDevices.SensorInsightsListDeviceExperienceHistoryRequestError&gt;</code>, with `result.value` of type <code>[UserDeviceExperienceHistory](src/models/user-device-experience-history.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsListDevicesRequest(request: SensorInsightsDevices.SensorInsightsListDevicesRequestRequest, options?: RequestOptions): ApiPromise&lt;DtoExpandedDeviceResponse[], SensorInsightsDevices.SensorInsightsListDevicesRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDevices.sensorInsightsListDevicesRequest({
    body: {
      accountname: "0000123456-00001",
      filter: {
        expand: "device detail(s)",
        limitnumber: 100,
        nopagination: true,
        page: "The number of pages",
        pagenumber: 100,
        projection: ["specific device fields requested"],
        selection: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
      },
      resourceidentifier: {
        deveui: "The unique EUI64 address of the device",
        deviceid: "The UUID of the device",
        esn: 223372036854775800,
        iccid: "The 20-digit Integrated Circuit Card ID (SIM card ID)",
        imei: 223372036854775,
        imsi: 223372036854775800,
        mac: "The Media Access Control address of the device, listed on the device in the format XX-XX-XX-XX-XX-XX or XX:XX:XX:XX:XX:XX",
        manufacturer: "REOLINK",
        meid: "The 56-bit Mobile Equipment ID",
        msisdn:
          "The Mobile Station International Subscriber Directory Number. In the USA, this is 1+ a 10-digit phone number",
        nodeUuid: "The UUID of the node the device is associated with",
        qrcode: "The Quick Response (QR) code",
        serial: "The device's serial number",
      },
    },
  });
  // TODO: Handle 'response' of type DtoExpandedDeviceResponse[]
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsDevices.SensorInsightsListDevicesRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsDevices.sensorInsightsListDevicesRequest({
  body: {
    accountname: "0000123456-00001",
    filter: {
      expand: "device detail(s)",
      limitnumber: 100,
      nopagination: true,
      page: "The number of pages",
      pagenumber: 100,
      projection: ["specific device fields requested"],
      selection: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
    },
    resourceidentifier: {
      deveui: "The unique EUI64 address of the device",
      deviceid: "The UUID of the device",
      esn: 223372036854775800,
      iccid: "The 20-digit Integrated Circuit Card ID (SIM card ID)",
      imei: 223372036854775,
      imsi: 223372036854775800,
      mac: "The Media Access Control address of the device, listed on the device in the format XX-XX-XX-XX-XX-XX or XX:XX:XX:XX:XX:XX",
      manufacturer: "REOLINK",
      meid: "The 56-bit Mobile Equipment ID",
      msisdn:
        "The Mobile Station International Subscriber Directory Number. In the USA, this is 1+ a 10-digit phone number",
      nodeUuid: "The UUID of the node the device is associated with",
      qrcode: "The Quick Response (QR) code",
      serial: "The device's serial number",
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DtoExpandedDeviceResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsDevices.sensorInsightsListDevicesRequest(request)`

- **OnSuccess**: <code>[DtoExpandedDeviceResponse](src/models/dto-expanded-device-response.ts)[]</code>
- **OnError**: throws <code>[SensorInsightsDevices.SensorInsightsListDevicesRequestError](src/resources/sensor-insights-devices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsDevices.sensorInsightsListDevicesRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DtoExpandedDeviceResponse[], SensorInsightsDevices.SensorInsightsListDevicesRequestError&gt;</code>, with `result.value` of type <code>[DtoExpandedDeviceResponse](src/models/dto-expanded-device-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsListNetworkExperienceHistoryRequest(request: SensorInsightsDevices.SensorInsightsListNetworkExperienceHistoryRequestRequest, options?: RequestOptions): ApiPromise&lt;UserNetworkExperienceHistory[], SensorInsightsDevices.SensorInsightsListNetworkExperienceHistoryRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDevices.sensorInsightsListNetworkExperienceHistoryRequest({
    body: {
      accountname: "0000123456-00001",
      filter: {
        expand: "device detail(s)",
        limitnumber: 100,
        nopagination: true,
        page: "The number of pages",
        pagenumber: 100,
        projection: ["specific device fields requested"],
        selection: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
      },
    },
  });
  // TODO: Handle 'response' of type UserNetworkExperienceHistory[]
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsDevices.SensorInsightsListNetworkExperienceHistoryRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsDevices.sensorInsightsListNetworkExperienceHistoryRequest({
  body: {
    accountname: "0000123456-00001",
    filter: {
      expand: "device detail(s)",
      limitnumber: 100,
      nopagination: true,
      page: "The number of pages",
      pagenumber: 100,
      projection: ["specific device fields requested"],
      selection: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserNetworkExperienceHistory[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsDevices.sensorInsightsListNetworkExperienceHistoryRequest(request)`

- **OnSuccess**: <code>[UserNetworkExperienceHistory](src/models/user-network-experience-history.ts)[]</code>
- **OnError**: throws <code>[SensorInsightsDevices.SensorInsightsListNetworkExperienceHistoryRequestError](src/resources/sensor-insights-devices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsDevices.sensorInsightsListNetworkExperienceHistoryRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserNetworkExperienceHistory[], SensorInsightsDevices.SensorInsightsListNetworkExperienceHistoryRequestError&gt;</code>, with `result.value` of type <code>[UserNetworkExperienceHistory](src/models/user-network-experience-history.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsPatchDeviceRequest(request: SensorInsightsDevices.SensorInsightsPatchDeviceRequestRequest, options?: RequestOptions): ApiPromise&lt;ResourceDevice, SensorInsightsDevices.SensorInsightsPatchDeviceRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDevices.sensorInsightsPatchDeviceRequest({
    body: {
      accountname: "0000123456-00001",
      device: {
        accountclientid: "null",
        billingaccountid: "0000123456-00001",
        chipset: "The chipset used by the device",
        createdon: new Date(Date.UTC(2023, 9, 2, 15, 46, 34, 562)),
        customdata: { additionalProp1: {}, additionalProp2: {}, additionalProp3: {} },
        description: "The number of days to retaing the event data",
        esn: 223372036854775800,
        fields: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
        foreignid: "c1f178d3-eeee-ffff-gggg-0d6b7ae6022a",
        hardwareversion: "1.0",
        iccid: "The 20-digit Integrated Circuit Card ID (SIM card ID)",
        id: "33e21f61-a44a-44c9-b7a0-a63f5d19bd4f",
        imei: 223372036854775,
        imsi: 223372036854775800,
        lastupdated: new Date(Date.UTC(2023, 9, 2, 15, 46, 34, 562)),
        licenses: ["licenses assigned to the device"],
        mac: "The Media Access Control address of the device, listed on the device in the format XX-XX-XX-XX-XX-XX or XX:XX:XX:XX:XX:XX",
        manufacturer: "REOLINK",
        meid: "The 56-bit Mobile Equipment ID",
        msisdn:
          "The Mobile Station International Subscriber Directory Number. In the USA, this is 1+ a 10-digit phone number",
        name: "User defined name of the record",
        parentdeviceid: "BLE device ID",
        productmodel: "Model name of the device",
        providerid: "Verizon Wireless",
        qrcode: "The Quick Response (QR) code",
        refid: "P3730-1422323050860",
        refidtype: "The type of value represented by `refid`",
        serial: "The device's serial number",
        services: ["configuration"],
        sku: "The Stock Keeping Unit (SKU) number",
        softwareversion: "the current device software version",
        state: "success",
        version: "1.0",
        versionid: "337bd2e8-eeee-ffff-gggg-5207992fd395",
        eventretention: 90,
      },
      resourceidentifier: {
        deveui: "The unique EUI64 address of the device",
        deviceid: "The UUID of the device",
        esn: 223372036854775800,
        iccid: "The 20-digit Integrated Circuit Card ID (SIM card ID)",
        imei: 223372036854775,
        imsi: 223372036854775800,
        mac: "The Media Access Control address of the device, listed on the device in the format XX-XX-XX-XX-XX-XX or XX:XX:XX:XX:XX:XX",
        manufacturer: "REOLINK",
        meid: "The 56-bit Mobile Equipment ID",
        msisdn:
          "The Mobile Station International Subscriber Directory Number. In the USA, this is 1+ a 10-digit phone number",
        nodeUuid: "The UUID of the node the device is associated with",
        qrcode: "The Quick Response (QR) code",
        serial: "The device's serial number",
      },
    },
  });
  // TODO: Handle 'response' of type ResourceDevice
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsDevices.SensorInsightsPatchDeviceRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsDevices.sensorInsightsPatchDeviceRequest({
  body: {
    accountname: "0000123456-00001",
    device: {
      accountclientid: "null",
      billingaccountid: "0000123456-00001",
      chipset: "The chipset used by the device",
      createdon: new Date(Date.UTC(2023, 9, 2, 15, 46, 34, 562)),
      customdata: { additionalProp1: {}, additionalProp2: {}, additionalProp3: {} },
      description: "The number of days to retaing the event data",
      esn: 223372036854775800,
      fields: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
      foreignid: "c1f178d3-eeee-ffff-gggg-0d6b7ae6022a",
      hardwareversion: "1.0",
      iccid: "The 20-digit Integrated Circuit Card ID (SIM card ID)",
      id: "33e21f61-a44a-44c9-b7a0-a63f5d19bd4f",
      imei: 223372036854775,
      imsi: 223372036854775800,
      lastupdated: new Date(Date.UTC(2023, 9, 2, 15, 46, 34, 562)),
      licenses: ["licenses assigned to the device"],
      mac: "The Media Access Control address of the device, listed on the device in the format XX-XX-XX-XX-XX-XX or XX:XX:XX:XX:XX:XX",
      manufacturer: "REOLINK",
      meid: "The 56-bit Mobile Equipment ID",
      msisdn:
        "The Mobile Station International Subscriber Directory Number. In the USA, this is 1+ a 10-digit phone number",
      name: "User defined name of the record",
      parentdeviceid: "BLE device ID",
      productmodel: "Model name of the device",
      providerid: "Verizon Wireless",
      qrcode: "The Quick Response (QR) code",
      refid: "P3730-1422323050860",
      refidtype: "The type of value represented by `refid`",
      serial: "The device's serial number",
      services: ["configuration"],
      sku: "The Stock Keeping Unit (SKU) number",
      softwareversion: "the current device software version",
      state: "success",
      version: "1.0",
      versionid: "337bd2e8-eeee-ffff-gggg-5207992fd395",
      eventretention: 90,
    },
    resourceidentifier: {
      deveui: "The unique EUI64 address of the device",
      deviceid: "The UUID of the device",
      esn: 223372036854775800,
      iccid: "The 20-digit Integrated Circuit Card ID (SIM card ID)",
      imei: 223372036854775,
      imsi: 223372036854775800,
      mac: "The Media Access Control address of the device, listed on the device in the format XX-XX-XX-XX-XX-XX or XX:XX:XX:XX:XX:XX",
      manufacturer: "REOLINK",
      meid: "The 56-bit Mobile Equipment ID",
      msisdn:
        "The Mobile Station International Subscriber Directory Number. In the USA, this is 1+ a 10-digit phone number",
      nodeUuid: "The UUID of the node the device is associated with",
      qrcode: "The Quick Response (QR) code",
      serial: "The device's serial number",
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResourceDevice
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsDevices.sensorInsightsPatchDeviceRequest(request)`

- **OnSuccess**: <code>[ResourceDevice](src/models/resource-device.ts)</code>
- **OnError**: throws <code>[SensorInsightsDevices.SensorInsightsPatchDeviceRequestError](src/resources/sensor-insights-devices.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsDevices.sensorInsightsPatchDeviceRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResourceDevice, SensorInsightsDevices.SensorInsightsPatchDeviceRequestError&gt;</code>, with `result.value` of type <code>[ResourceDevice](src/models/resource-device.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsGateways.sensorInsightsListGatewayDevicesRequest({
    body: {
      accountname: "0000123456-00001",
      filter: {
        expand: "device detail(s)",
        limitnumber: 100,
        nopagination: true,
        page: "The number of pages",
        pagenumber: 100,
        projection: ["specific device fields requested"],
        selection: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
      },
      resourceidentifier: {
        deveui: "The unique EUI64 address of the device",
        deviceid: "The UUID of the device",
        esn: 223372036854775800,
        iccid: "The 20-digit Integrated Circuit Card ID (SIM card ID)",
        imei: 223372036854775,
        imsi: 223372036854775800,
        mac: "The Media Access Control address of the device, listed on the device in the format XX-XX-XX-XX-XX-XX or XX:XX:XX:XX:XX:XX",
        manufacturer: "REOLINK",
        meid: "The 56-bit Mobile Equipment ID",
        msisdn:
          "The Mobile Station International Subscriber Directory Number. In the USA, this is 1+ a 10-digit phone number",
        nodeUuid: "The UUID of the node the device is associated with",
        qrcode: "The Quick Response (QR) code",
        serial: "The device's serial number",
      },
    },
  });
  // TODO: Handle 'response' of type ResourceDevice[]
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsGateways.SensorInsightsListGatewayDevicesRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsGateways.sensorInsightsListGatewayDevicesRequest({
  body: {
    accountname: "0000123456-00001",
    filter: {
      expand: "device detail(s)",
      limitnumber: 100,
      nopagination: true,
      page: "The number of pages",
      pagenumber: 100,
      projection: ["specific device fields requested"],
      selection: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
    },
    resourceidentifier: {
      deveui: "The unique EUI64 address of the device",
      deviceid: "The UUID of the device",
      esn: 223372036854775800,
      iccid: "The 20-digit Integrated Circuit Card ID (SIM card ID)",
      imei: 223372036854775,
      imsi: 223372036854775800,
      mac: "The Media Access Control address of the device, listed on the device in the format XX-XX-XX-XX-XX-XX or XX:XX:XX:XX:XX:XX",
      manufacturer: "REOLINK",
      meid: "The 56-bit Mobile Equipment ID",
      msisdn:
        "The Mobile Station International Subscriber Directory Number. In the USA, this is 1+ a 10-digit phone number",
      nodeUuid: "The UUID of the node the device is associated with",
      qrcode: "The Quick Response (QR) code",
      serial: "The device's serial number",
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResourceDevice[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsGateways.sensorInsightsListGatewayDevicesRequest(request)`

- **OnSuccess**: <code>[ResourceDevice](src/models/resource-device.ts)[]</code>
- **OnError**: throws <code>[SensorInsightsGateways.SensorInsightsListGatewayDevicesRequestError](src/resources/sensor-insights-gateways.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsGateways.sensorInsightsListGatewayDevicesRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResourceDevice[], SensorInsightsGateways.SensorInsightsListGatewayDevicesRequestError&gt;</code>, with `result.value` of type <code>[ResourceDevice](src/models/resource-device.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsSmartAlerts.sensorInsightsBulkUpdate({
    body: {
      accountname: "0000123456-00001",
      resourceidentifiers: [
        { id: "ee70a869-eeee-ffff-gggg-07c14c31f96e" },
        { deviceid: "The UUID of the device" },
      ],
      smartalert: { name: "User defined name of the record" },
    },
  });
  // TODO: Handle 'response' of type UserSmartAlert
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsSmartAlerts.SensorInsightsBulkUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsSmartAlerts.sensorInsightsBulkUpdate({
  body: {
    accountname: "0000123456-00001",
    resourceidentifiers: [
      { id: "ee70a869-eeee-ffff-gggg-07c14c31f96e" },
      { deviceid: "The UUID of the device" },
    ],
    smartalert: { name: "User defined name of the record" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserSmartAlert
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsSmartAlerts.sensorInsightsBulkUpdate(request)`

- **OnSuccess**: <code>[UserSmartAlert](src/models/user-smart-alert.ts)</code>
- **OnError**: throws <code>[SensorInsightsSmartAlerts.SensorInsightsBulkUpdateError](src/resources/sensor-insights-smart-alerts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsSmartAlerts.sensorInsightsBulkUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserSmartAlert, SensorInsightsSmartAlerts.SensorInsightsBulkUpdateError&gt;</code>, with `result.value` of type <code>[UserSmartAlert](src/models/user-smart-alert.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsListSmartAlertsRequest(request: SensorInsightsSmartAlerts.SensorInsightsListSmartAlertsRequestRequest, options?: RequestOptions): ApiPromise&lt;UserSmartAlert[], SensorInsightsSmartAlerts.SensorInsightsListSmartAlertsRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsSmartAlerts.sensorInsightsListSmartAlertsRequest({
    body: {
      accountname: "0000123456-00001",
      filter: {
        expand: "device detail(s)",
        limitnumber: 100,
        nopagination: true,
        page: "The number of pages",
        pagenumber: 100,
        projection: ["specific device fields requested"],
        selection: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
      },
      resourceidentifier: { id: "cb3eea68-eeee-ffff-gggg-ac4463ccd073" },
    },
  });
  // TODO: Handle 'response' of type UserSmartAlert[]
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsSmartAlerts.SensorInsightsListSmartAlertsRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsSmartAlerts.sensorInsightsListSmartAlertsRequest({
  body: {
    accountname: "0000123456-00001",
    filter: {
      expand: "device detail(s)",
      limitnumber: 100,
      nopagination: true,
      page: "The number of pages",
      pagenumber: 100,
      projection: ["specific device fields requested"],
      selection: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
    },
    resourceidentifier: { id: "cb3eea68-eeee-ffff-gggg-ac4463ccd073" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserSmartAlert[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsSmartAlerts.sensorInsightsListSmartAlertsRequest(request)`

- **OnSuccess**: <code>[UserSmartAlert](src/models/user-smart-alert.ts)[]</code>
- **OnError**: throws <code>[SensorInsightsSmartAlerts.SensorInsightsListSmartAlertsRequestError](src/resources/sensor-insights-smart-alerts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsSmartAlerts.sensorInsightsListSmartAlertsRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserSmartAlert[], SensorInsightsSmartAlerts.SensorInsightsListSmartAlertsRequestError&gt;</code>, with `result.value` of type <code>[UserSmartAlert](src/models/user-smart-alert.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsPatchSmartAlertRequest(request: SensorInsightsSmartAlerts.SensorInsightsPatchSmartAlertRequestRequest, options?: RequestOptions): ApiPromise&lt;UserSmartAlert, SensorInsightsSmartAlerts.SensorInsightsPatchSmartAlertRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsSmartAlerts.sensorInsightsPatchSmartAlertRequest({
    body: {
      accountname: "0000123456-00001",
      resourceidentifier: { id: "0b37ab8b-eeee-ffff-gggg-e0149af43f43" },
      smartalert: {
        accountclientid: "null",
        billingaccountid: "0000123456-00001",
        category: "telemetry",
        condition: 2592000,
        createdon: new Date(Date.UTC(2023, 9, 2, 15, 46, 34, 562)),
        description: "a short description",
        deviceid: "The UUID of the device",
        foreignid: "c1f178d3-eeee-ffff-gggg-0d6b7ae6022a",
        id: "fecbe450-eeee-ffff-gggg-aa166fd5f8e3",
        isacknowledged: true,
        iscleared: true,
        isdisabled: false,
        lastupdated: new Date(Date.UTC(2023, 9, 2, 15, 46, 34, 562)),
        name: "User defined name of the record",
        ruleid: "The UUID of a rule",
        severity: "minor",
        state: "success",
        template: "The template ID",
        version: "1.0",
        versionid: "337bd2e8-eeee-ffff-gggg-5207992fd395",
      },
    },
  });
  // TODO: Handle 'response' of type UserSmartAlert
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsSmartAlerts.SensorInsightsPatchSmartAlertRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsSmartAlerts.sensorInsightsPatchSmartAlertRequest({
  body: {
    accountname: "0000123456-00001",
    resourceidentifier: { id: "0b37ab8b-eeee-ffff-gggg-e0149af43f43" },
    smartalert: {
      accountclientid: "null",
      billingaccountid: "0000123456-00001",
      category: "telemetry",
      condition: 2592000,
      createdon: new Date(Date.UTC(2023, 9, 2, 15, 46, 34, 562)),
      description: "a short description",
      deviceid: "The UUID of the device",
      foreignid: "c1f178d3-eeee-ffff-gggg-0d6b7ae6022a",
      id: "fecbe450-eeee-ffff-gggg-aa166fd5f8e3",
      isacknowledged: true,
      iscleared: true,
      isdisabled: false,
      lastupdated: new Date(Date.UTC(2023, 9, 2, 15, 46, 34, 562)),
      name: "User defined name of the record",
      ruleid: "The UUID of a rule",
      severity: "minor",
      state: "success",
      template: "The template ID",
      version: "1.0",
      versionid: "337bd2e8-eeee-ffff-gggg-5207992fd395",
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserSmartAlert
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsSmartAlerts.sensorInsightsPatchSmartAlertRequest(request)`

- **OnSuccess**: <code>[UserSmartAlert](src/models/user-smart-alert.ts)</code>
- **OnError**: throws <code>[SensorInsightsSmartAlerts.SensorInsightsPatchSmartAlertRequestError](src/resources/sensor-insights-smart-alerts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsSmartAlerts.sensorInsightsPatchSmartAlertRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserSmartAlert, SensorInsightsSmartAlerts.SensorInsightsPatchSmartAlertRequestError&gt;</code>, with `result.value` of type <code>[UserSmartAlert](src/models/user-smart-alert.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsRules.sensorInsightsListRulesRequest({
    body: {
      accountname: "0000123456-00001",
      filter: {
        expand: "device detail(s)",
        limitnumber: 100,
        nopagination: true,
        page: "The number of pages",
        pagenumber: 100,
        projection: ["specific device fields requested"],
        selection: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
      },
      resourceidentifier: { id: "ffb86390-eeee-ffff-gggg-9d1180882d63" },
    },
  });
  // TODO: Handle 'response' of type ResourceRule[]
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsRules.SensorInsightsListRulesRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsRules.sensorInsightsListRulesRequest({
  body: {
    accountname: "0000123456-00001",
    filter: {
      expand: "device detail(s)",
      limitnumber: 100,
      nopagination: true,
      page: "The number of pages",
      pagenumber: 100,
      projection: ["specific device fields requested"],
      selection: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
    },
    resourceidentifier: { id: "ffb86390-eeee-ffff-gggg-9d1180882d63" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResourceRule[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsRules.sensorInsightsListRulesRequest(request)`

- **OnSuccess**: <code>[ResourceRule](src/models/resource-rule.ts)[]</code>
- **OnError**: throws <code>[SensorInsightsRules.SensorInsightsListRulesRequestError](src/resources/sensor-insights-rules.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsRules.sensorInsightsListRulesRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResourceRule[], SensorInsightsRules.SensorInsightsListRulesRequestError&gt;</code>, with `result.value` of type <code>[ResourceRule](src/models/resource-rule.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsOverwriteRuleRequest(request: SensorInsightsRules.SensorInsightsOverwriteRuleRequestRequest, options?: RequestOptions): ApiPromise&lt;ResourceRule, SensorInsightsRules.SensorInsightsOverwriteRuleRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsRules.sensorInsightsOverwriteRuleRequest({
    body: {
      accountname: "0000123456-00001",
      resourceidentifier: { id: "7f5f610a-eeee-ffff-gggg-4d20cf3dcfbc" },
      rule: {
        accountclientid: "null",
        billingaccountid: "The billing account ID",
        createdon: new Date(Date.UTC(2023, 9, 2, 15, 46, 34, 562)),
        description: "a short description",
        deviceid: "The UUID of the device",
        disabled: true,
        foreignid: "c1f178d3-eeee-ffff-gggg-0d6b7ae6022a",
        id: "bc5b5b5a-eeee-ffff-gggg-cb2cb2533d47",
        lastupdated: new Date(Date.UTC(2023, 9, 2, 15, 46, 34, 562)),
        name: "User defined name of the record",
        rulechain: {},
        rulesyntax: "The rule syntax",
        version: "1.0",
        versionid: "337bd2e8-eeee-ffff-gggg-5207992fd395",
      },
    },
  });
  // TODO: Handle 'response' of type ResourceRule
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsRules.SensorInsightsOverwriteRuleRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsRules.sensorInsightsOverwriteRuleRequest({
  body: {
    accountname: "0000123456-00001",
    resourceidentifier: { id: "7f5f610a-eeee-ffff-gggg-4d20cf3dcfbc" },
    rule: {
      accountclientid: "null",
      billingaccountid: "The billing account ID",
      createdon: new Date(Date.UTC(2023, 9, 2, 15, 46, 34, 562)),
      description: "a short description",
      deviceid: "The UUID of the device",
      disabled: true,
      foreignid: "c1f178d3-eeee-ffff-gggg-0d6b7ae6022a",
      id: "bc5b5b5a-eeee-ffff-gggg-cb2cb2533d47",
      lastupdated: new Date(Date.UTC(2023, 9, 2, 15, 46, 34, 562)),
      name: "User defined name of the record",
      rulechain: {},
      rulesyntax: "The rule syntax",
      version: "1.0",
      versionid: "337bd2e8-eeee-ffff-gggg-5207992fd395",
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResourceRule
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsRules.sensorInsightsOverwriteRuleRequest(request)`

- **OnSuccess**: <code>[ResourceRule](src/models/resource-rule.ts)</code>
- **OnError**: throws <code>[SensorInsightsRules.SensorInsightsOverwriteRuleRequestError](src/resources/sensor-insights-rules.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsRules.sensorInsightsOverwriteRuleRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResourceRule, SensorInsightsRules.SensorInsightsOverwriteRuleRequestError&gt;</code>, with `result.value` of type <code>[ResourceRule](src/models/resource-rule.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsHealthScore.sensorInsightsGetNetworkHealthScoreResponse();
  // TODO: Handle 'response' of type DtoGetNetworkHealthScoreResponse
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsHealthScore.SensorInsightsGetNetworkHealthScoreResponseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result =
  await client.sensorInsightsHealthScore.sensorInsightsGetNetworkHealthScoreResponse().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DtoGetNetworkHealthScoreResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sensorInsightsHealthScore.sensorInsightsGetNetworkHealthScoreResponse()`

- **OnSuccess**: <code>[DtoGetNetworkHealthScoreResponse](src/models/dto-get-network-health-score-response.ts)</code>
- **OnError**: throws <code>[SensorInsightsHealthScore.SensorInsightsGetNetworkHealthScoreResponseError](src/resources/sensor-insights-health-score.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsHealthScore.sensorInsightsGetNetworkHealthScoreResponse().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DtoGetNetworkHealthScoreResponse, SensorInsightsHealthScore.SensorInsightsGetNetworkHealthScoreResponseError&gt;</code>, with `result.value` of type <code>[DtoGetNetworkHealthScoreResponse](src/models/dto-get-network-health-score-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsHealthScoreSummary(options?: RequestOptions): ApiPromise&lt;DtoHealthScoreSummary, SensorInsightsHealthScore.SensorInsightsHealthScoreSummaryError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsHealthScore.sensorInsightsHealthScoreSummary();
  // TODO: Handle 'response' of type DtoHealthScoreSummary
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsHealthScore.SensorInsightsHealthScoreSummaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsHealthScore.sensorInsightsHealthScoreSummary().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DtoHealthScoreSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sensorInsightsHealthScore.sensorInsightsHealthScoreSummary()`

- **OnSuccess**: <code>[DtoHealthScoreSummary](src/models/dto-health-score-summary.ts)</code>
- **OnError**: throws <code>[SensorInsightsHealthScore.SensorInsightsHealthScoreSummaryError](src/resources/sensor-insights-health-score.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsHealthScore.sensorInsightsHealthScoreSummary().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DtoHealthScoreSummary, SensorInsightsHealthScore.SensorInsightsHealthScoreSummaryError&gt;</code>, with `result.value` of type <code>[DtoHealthScoreSummary](src/models/dto-health-score-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sensorInsightsNotificationGroups.sensorInsightsAddUsersToNotificationGroupRequest({
    body: {
      accountname: "0000123456-00001",
      id: "45f1a56e-eeee-ffff-gggg-68cb994feb5f",
      userids: ["ee70a869-eeee-ffff-gggg-07c14c31f96e", "131501ff-eeee-ffff-gggg-647d19179a12"],
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsNotificationGroups.SensorInsightsAddUsersToNotificationGroupRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsNotificationGroups.sensorInsightsAddUsersToNotificationGroupRequest(
  {
    body: {
      accountname: "0000123456-00001",
      id: "45f1a56e-eeee-ffff-gggg-68cb994feb5f",
      userids: ["ee70a869-eeee-ffff-gggg-07c14c31f96e", "131501ff-eeee-ffff-gggg-647d19179a12"],
    },
  },
).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsNotificationGroups.sensorInsightsAddUsersToNotificationGroupRequest(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SensorInsightsNotificationGroups.SensorInsightsAddUsersToNotificationGroupRequestError](src/resources/sensor-insights-notification-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsNotificationGroups.sensorInsightsAddUsersToNotificationGroupRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SensorInsightsNotificationGroups.SensorInsightsAddUsersToNotificationGroupRequestError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsCreateNotificationGroupRequest(request: SensorInsightsNotificationGroups.SensorInsightsCreateNotificationGroupRequestRequest, options?: RequestOptions): ApiPromise&lt;DtoNotificationGroupResponseEntity, SensorInsightsNotificationGroups.SensorInsightsCreateNotificationGroupRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsNotificationGroups.sensorInsightsCreateNotificationGroupRequest(
    {
      body: {
        accountname: "0000123456-00001",
        group: {
          description: "a short description",
          groupemail: "email@domain.com",
          name: "User defined name of the record",
        },
        userids: ["ee70a869-eeee-ffff-gggg-07c14c31f96e", "131501ff-eeee-ffff-gggg-647d19179a12"],
      },
    },
  );
  // TODO: Handle 'response' of type DtoNotificationGroupResponseEntity
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsNotificationGroups.SensorInsightsCreateNotificationGroupRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsNotificationGroups.sensorInsightsCreateNotificationGroupRequest({
  body: {
    accountname: "0000123456-00001",
    group: {
      description: "a short description",
      groupemail: "email@domain.com",
      name: "User defined name of the record",
    },
    userids: ["ee70a869-eeee-ffff-gggg-07c14c31f96e", "131501ff-eeee-ffff-gggg-647d19179a12"],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DtoNotificationGroupResponseEntity
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsNotificationGroups.sensorInsightsCreateNotificationGroupRequest(request)`

- **OnSuccess**: <code>[DtoNotificationGroupResponseEntity](src/models/dto-notification-group-response-entity.ts)</code>
- **OnError**: throws <code>[SensorInsightsNotificationGroups.SensorInsightsCreateNotificationGroupRequestError](src/resources/sensor-insights-notification-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsNotificationGroups.sensorInsightsCreateNotificationGroupRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DtoNotificationGroupResponseEntity, SensorInsightsNotificationGroups.SensorInsightsCreateNotificationGroupRequestError&gt;</code>, with `result.value` of type <code>[DtoNotificationGroupResponseEntity](src/models/dto-notification-group-response-entity.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsDeleteNotificationGroup(request: SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sensorInsightsNotificationGroups.sensorInsightsDeleteNotificationGroup({
    payload: { accountname: "0000123456-00001", force: true, id: "6737ca22-eeee-ffff-gggg-84c09f2ede8e" },
  });
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsNotificationGroups.sensorInsightsDeleteNotificationGroup({
  payload: { accountname: "0000123456-00001", force: true, id: "6737ca22-eeee-ffff-gggg-84c09f2ede8e" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsNotificationGroups.sensorInsightsDeleteNotificationGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupError](src/resources/sensor-insights-notification-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsNotificationGroups.sensorInsightsDeleteNotificationGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsListNotificationGroupRequest(request: SensorInsightsNotificationGroups.SensorInsightsListNotificationGroupRequestRequest, options?: RequestOptions): ApiPromise&lt;DtoNotificationGroupResponseEntity[], SensorInsightsNotificationGroups.SensorInsightsListNotificationGroupRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsNotificationGroups.sensorInsightsListNotificationGroupRequest({
    body: {
      accountname: "0000123456-00001",
      filter: {
        expand: "device detail(s)",
        limitnumber: 100,
        nopagination: true,
        page: "The number of pages",
        pagenumber: 100,
        projection: ["specific device fields requested"],
        selection: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
      },
    },
  });
  // TODO: Handle 'response' of type DtoNotificationGroupResponseEntity[]
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsNotificationGroups.SensorInsightsListNotificationGroupRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsNotificationGroups.sensorInsightsListNotificationGroupRequest({
  body: {
    accountname: "0000123456-00001",
    filter: {
      expand: "device detail(s)",
      limitnumber: 100,
      nopagination: true,
      page: "The number of pages",
      pagenumber: 100,
      projection: ["specific device fields requested"],
      selection: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DtoNotificationGroupResponseEntity[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsNotificationGroups.sensorInsightsListNotificationGroupRequest(request)`

- **OnSuccess**: <code>[DtoNotificationGroupResponseEntity](src/models/dto-notification-group-response-entity.ts)[]</code>
- **OnError**: throws <code>[SensorInsightsNotificationGroups.SensorInsightsListNotificationGroupRequestError](src/resources/sensor-insights-notification-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsNotificationGroups.sensorInsightsListNotificationGroupRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DtoNotificationGroupResponseEntity[], SensorInsightsNotificationGroups.SensorInsightsListNotificationGroupRequestError&gt;</code>, with `result.value` of type <code>[DtoNotificationGroupResponseEntity](src/models/dto-notification-group-response-entity.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsRemoveUsersFromNotificationGroupRequest(request: SensorInsightsNotificationGroups.SensorInsightsRemoveUsersFromNotificationGroupRequestRequest, options?: RequestOptions): ApiPromise&lt;undefined, SensorInsightsNotificationGroups.SensorInsightsRemoveUsersFromNotificationGroupRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sensorInsightsNotificationGroups.sensorInsightsRemoveUsersFromNotificationGroupRequest({
    body: {
      accountname: "0000123456-00001",
      id: "111538a8-eeee-ffff-gggg-3b72804403e8",
      userids: ["ee70a869-eeee-ffff-gggg-07c14c31f96e", "131501ff-eeee-ffff-gggg-647d19179a12"],
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsNotificationGroups.SensorInsightsRemoveUsersFromNotificationGroupRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result =
  await client.sensorInsightsNotificationGroups.sensorInsightsRemoveUsersFromNotificationGroupRequest({
    body: {
      accountname: "0000123456-00001",
      id: "111538a8-eeee-ffff-gggg-3b72804403e8",
      userids: ["ee70a869-eeee-ffff-gggg-07c14c31f96e", "131501ff-eeee-ffff-gggg-647d19179a12"],
    },
  }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsNotificationGroups.sensorInsightsRemoveUsersFromNotificationGroupRequest(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SensorInsightsNotificationGroups.SensorInsightsRemoveUsersFromNotificationGroupRequestError](src/resources/sensor-insights-notification-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsNotificationGroups.sensorInsightsRemoveUsersFromNotificationGroupRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SensorInsightsNotificationGroups.SensorInsightsRemoveUsersFromNotificationGroupRequestError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsUpdateNotificationGroupRequest(request: SensorInsightsNotificationGroups.SensorInsightsUpdateNotificationGroupRequestRequest, options?: RequestOptions): ApiPromise&lt;DtoNotificationGroupResponseEntity, SensorInsightsNotificationGroups.SensorInsightsUpdateNotificationGroupRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsNotificationGroups.sensorInsightsUpdateNotificationGroupRequest(
    {
      body: {
        accountname: "0000123456-00001",
        group: {
          description: "a short description",
          groupemail: "email@domain.com",
          name: "User defined name of the record",
        },
        id: "7b0b9c53-eeee-ffff-gggg-bde5e44f4b12",
        userids: ["ee70a869-eeee-ffff-gggg-07c14c31f96e", "131501ff-eeee-ffff-gggg-647d19179a12"],
      },
    },
  );
  // TODO: Handle 'response' of type DtoNotificationGroupResponseEntity
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsNotificationGroups.SensorInsightsUpdateNotificationGroupRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsNotificationGroups.sensorInsightsUpdateNotificationGroupRequest({
  body: {
    accountname: "0000123456-00001",
    group: {
      description: "a short description",
      groupemail: "email@domain.com",
      name: "User defined name of the record",
    },
    id: "7b0b9c53-eeee-ffff-gggg-bde5e44f4b12",
    userids: ["ee70a869-eeee-ffff-gggg-07c14c31f96e", "131501ff-eeee-ffff-gggg-647d19179a12"],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DtoNotificationGroupResponseEntity
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsNotificationGroups.sensorInsightsUpdateNotificationGroupRequest(request)`

- **OnSuccess**: <code>[DtoNotificationGroupResponseEntity](src/models/dto-notification-group-response-entity.ts)</code>
- **OnError**: throws <code>[SensorInsightsNotificationGroups.SensorInsightsUpdateNotificationGroupRequestError](src/resources/sensor-insights-notification-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsNotificationGroups.sensorInsightsUpdateNotificationGroupRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DtoNotificationGroupResponseEntity, SensorInsightsNotificationGroups.SensorInsightsUpdateNotificationGroupRequestError&gt;</code>, with `result.value` of type <code>[DtoNotificationGroupResponseEntity](src/models/dto-notification-group-response-entity.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsUsers.sensorInsightsCreateUserRequest({
    body: {
      accountname: "0000123456-00001",
      user: {
        email: "email@domain.com",
        firstname: "First name",
        lastname: "Last name or Surname",
        mdn: "908-555-1234",
        customdata: { additionalProp1: {}, additionalProp2: {}, additionalProp3: {} },
      },
    },
  });
  // TODO: Handle 'response' of type ResourceUser
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsUsers.SensorInsightsCreateUserRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsUsers.sensorInsightsCreateUserRequest({
  body: {
    accountname: "0000123456-00001",
    user: {
      email: "email@domain.com",
      firstname: "First name",
      lastname: "Last name or Surname",
      mdn: "908-555-1234",
      customdata: { additionalProp1: {}, additionalProp2: {}, additionalProp3: {} },
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResourceUser
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsUsers.sensorInsightsCreateUserRequest(request)`

- **OnSuccess**: <code>[ResourceUser](src/models/resource-user.ts)</code>
- **OnError**: throws <code>[SensorInsightsUsers.SensorInsightsCreateUserRequestError](src/resources/sensor-insights-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsUsers.sensorInsightsCreateUserRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResourceUser, SensorInsightsUsers.SensorInsightsCreateUserRequestError&gt;</code>, with `result.value` of type <code>[ResourceUser](src/models/resource-user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsDeleteUser(request: SensorInsightsUsers.SensorInsightsDeleteUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, SensorInsightsUsers.SensorInsightsDeleteUserError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sensorInsightsUsers.sensorInsightsDeleteUser({
    deleterequestpayload: { accountname: "0000123456-00001", id: "8ea30999-eeee-ffff-gggg-3ea409f5fee4" },
  });
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsUsers.SensorInsightsDeleteUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsUsers.sensorInsightsDeleteUser({
  deleterequestpayload: { accountname: "0000123456-00001", id: "8ea30999-eeee-ffff-gggg-3ea409f5fee4" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsUsers.sensorInsightsDeleteUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SensorInsightsUsers.SensorInsightsDeleteUserError](src/resources/sensor-insights-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsUsers.sensorInsightsDeleteUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SensorInsightsUsers.SensorInsightsDeleteUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsListUserRequest(request: SensorInsightsUsers.SensorInsightsListUserRequestRequest, options?: RequestOptions): ApiPromise&lt;ResourceUser[], SensorInsightsUsers.SensorInsightsListUserRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsUsers.sensorInsightsListUserRequest({
    body: {
      accountname: "0000123456-00001",
      filter: {
        expand: "device detail(s)",
        limitnumber: 100,
        nopagination: true,
        page: "The number of pages",
        pagenumber: 100,
        projection: ["specific device fields requested"],
        selection: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
      },
    },
  });
  // TODO: Handle 'response' of type ResourceUser[]
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsUsers.SensorInsightsListUserRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsUsers.sensorInsightsListUserRequest({
  body: {
    accountname: "0000123456-00001",
    filter: {
      expand: "device detail(s)",
      limitnumber: 100,
      nopagination: true,
      page: "The number of pages",
      pagenumber: 100,
      projection: ["specific device fields requested"],
      selection: { additionalProp1: "string", additionalProp2: "string", additionalProp3: "string" },
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResourceUser[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsUsers.sensorInsightsListUserRequest(request)`

- **OnSuccess**: <code>[ResourceUser](src/models/resource-user.ts)[]</code>
- **OnError**: throws <code>[SensorInsightsUsers.SensorInsightsListUserRequestError](src/resources/sensor-insights-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsUsers.sensorInsightsListUserRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResourceUser[], SensorInsightsUsers.SensorInsightsListUserRequestError&gt;</code>, with `result.value` of type <code>[ResourceUser](src/models/resource-user.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sensorInsightsUpdateUserRequest(request: SensorInsightsUsers.SensorInsightsUpdateUserRequestRequest, options?: RequestOptions): ApiPromise&lt;ResourceUser, SensorInsightsUsers.SensorInsightsUpdateUserRequestError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsUsers.sensorInsightsUpdateUserRequest({
    body: {
      accountname: "0000123456-00001",
      id: "9dd573ba-eeee-ffff-gggg-8009758bcaca",
      user: {
        email: "email@domain.com",
        firstname: "First name",
        lastname: "Last name or Surname",
        mdn: "908-555-1234",
        customdata: { additionalProp1: {}, additionalProp2: {}, additionalProp3: {} },
      },
    },
  });
  // TODO: Handle 'response' of type ResourceUser
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsUsers.SensorInsightsUpdateUserRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsUsers.sensorInsightsUpdateUserRequest({
  body: {
    accountname: "0000123456-00001",
    id: "9dd573ba-eeee-ffff-gggg-8009758bcaca",
    user: {
      email: "email@domain.com",
      firstname: "First name",
      lastname: "Last name or Surname",
      mdn: "908-555-1234",
      customdata: { additionalProp1: {}, additionalProp2: {}, additionalProp3: {} },
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResourceUser
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsUsers.sensorInsightsUpdateUserRequest(request)`

- **OnSuccess**: <code>[ResourceUser](src/models/resource-user.ts)</code>
- **OnError**: throws <code>[SensorInsightsUsers.SensorInsightsUpdateUserRequestError](src/resources/sensor-insights-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsUsers.sensorInsightsUpdateUserRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResourceUser, SensorInsightsUsers.SensorInsightsUpdateUserRequestError&gt;</code>, with `result.value` of type <code>[ResourceUser](src/models/resource-user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDeviceProfile.createAProfile({
    body: {
      accountname: "0000123456-00001",
      profiles: [
        {
          kind: "the kind of profile being created",
          version: "1.0",
          modelid: "00000000-0000-0000-0000-000000000019",
          name: "Demo Entry sensor 1730928792",
          configuration: {},
        },
      ],
    },
  });
  // TODO: Handle 'response' of type DtoProfileResponse[]
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsDeviceProfile.CreateAProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsDeviceProfile.createAProfile({
  body: {
    accountname: "0000123456-00001",
    profiles: [
      {
        kind: "the kind of profile being created",
        version: "1.0",
        modelid: "00000000-0000-0000-0000-000000000019",
        name: "Demo Entry sensor 1730928792",
        configuration: {},
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DtoProfileResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsDeviceProfile.createAProfile(request)`

- **OnSuccess**: <code>[DtoProfileResponse](src/models/dto-profile-response.ts)[]</code>
- **OnError**: throws <code>[SensorInsightsDeviceProfile.CreateAProfileError](src/resources/sensor-insights-device-profile.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsDeviceProfile.createAProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DtoProfileResponse[], SensorInsightsDeviceProfile.CreateAProfileError&gt;</code>, with `result.value` of type <code>[DtoProfileResponse](src/models/dto-profile-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDeviceProfile.deleteAProfile({ deleterequest: {} });
  // TODO: Handle 'response' of type DtoProfileResponse[]
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsDeviceProfile.DeleteAProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsDeviceProfile.deleteAProfile({ deleterequest: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DtoProfileResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsDeviceProfile.deleteAProfile(request)`

- **OnSuccess**: <code>[DtoProfileResponse](src/models/dto-profile-response.ts)[]</code>
- **OnError**: throws <code>[SensorInsightsDeviceProfile.DeleteAProfileError](src/resources/sensor-insights-device-profile.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsDeviceProfile.deleteAProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DtoProfileResponse[], SensorInsightsDeviceProfile.DeleteAProfileError&gt;</code>, with `result.value` of type <code>[DtoProfileResponse](src/models/dto-profile-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDeviceProfile.queryAProfile({
    body: {
      filter: { selection: { modelid: "00000000-0000-0000-0000-000000000019" }, querytotalcount: true },
    },
  });
  // TODO: Handle 'response' of type DtoProfileResponse[]
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsDeviceProfile.QueryAProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsDeviceProfile.queryAProfile({
  body: { filter: { selection: { modelid: "00000000-0000-0000-0000-000000000019" }, querytotalcount: true } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DtoProfileResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsDeviceProfile.queryAProfile(request)`

- **OnSuccess**: <code>[DtoProfileResponse](src/models/dto-profile-response.ts)[]</code>
- **OnError**: throws <code>[SensorInsightsDeviceProfile.QueryAProfileError](src/resources/sensor-insights-device-profile.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsDeviceProfile.queryAProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DtoProfileResponse[], SensorInsightsDeviceProfile.QueryAProfileError&gt;</code>, with `result.value` of type <code>[DtoProfileResponse](src/models/dto-profile-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsDeviceProfile.updateAProfile({ body: {} });
  // TODO: Handle 'response' of type DtoProfileResponse[]
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsDeviceProfile.UpdateAProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsDeviceProfile.updateAProfile({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DtoProfileResponse[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsDeviceProfile.updateAProfile(request)`

- **OnSuccess**: <code>[DtoProfileResponse](src/models/dto-profile-response.ts)[]</code>
- **OnError**: throws <code>[SensorInsightsDeviceProfile.UpdateAProfileError](src/resources/sensor-insights-device-profile.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsDeviceProfile.updateAProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DtoProfileResponse[], SensorInsightsDeviceProfile.UpdateAProfileError&gt;</code>, with `result.value` of type <code>[DtoProfileResponse](src/models/dto-profile-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sensorInsightsSmartAlertMetrics.sensorinsightsmetricsquery({ body: {} });
  // TODO: Handle 'response' of type DtoQueryMetricsResponse
} catch (err) {
  // TODO: Handle 'err' of type SensorInsightsSmartAlertMetrics.SensorinsightsmetricsqueryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sensorInsightsSmartAlertMetrics.sensorinsightsmetricsquery({
  body: {},
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DtoQueryMetricsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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

**Direct**: `await client.sensorInsightsSmartAlertMetrics.sensorinsightsmetricsquery(request)`

- **OnSuccess**: <code>[DtoQueryMetricsResponse](src/models/dto-query-metrics-response.ts)</code>
- **OnError**: throws <code>[SensorInsightsSmartAlertMetrics.SensorinsightsmetricsqueryError](src/resources/sensor-insights-smart-alert-metrics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sensorInsightsSmartAlertMetrics.sensorinsightsmetricsquery(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DtoQueryMetricsResponse, SensorInsightsSmartAlertMetrics.SensorinsightsmetricsqueryError&gt;</code>, with `result.value` of type <code>[DtoQueryMetricsResponse](src/models/dto-query-metrics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[VerizonError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

