# ETX Registration

Manage device registration and connection.

```ts
const eTXRegistrationController = new ETXRegistrationController(client);
```

## Class Name

`ETXRegistrationController`

## Methods

* [Register ETX Client](../../doc/controllers/etx-registration.md#register-etx-client)
* [Renew ETX Client Certificate](../../doc/controllers/etx-registration.md#renew-etx-client-certificate)
* [Unregister ETX Clients](../../doc/controllers/etx-registration.md#unregister-etx-clients)
* [Get ETX Client Certificate](../../doc/controllers/etx-registration.md#get-etx-client-certificate)
* [Get ETX Connection Url](../../doc/controllers/etx-registration.md#get-etx-connection-url)
* [Get ETX Connection Url Multi Mec](../../doc/controllers/etx-registration.md#get-etx-connection-url-multi-mec)
* [Query ETX Devices](../../doc/controllers/etx-registration.md#query-etx-devices)


# Register ETX Client

With this API call the user (client) registers its device or software service to the ETX system. Therefore, when a connection is initiated from the device or software service to the ETX system along with the credential provided by this registration call, then the connection will be authorized.

- The user can register multiple devices or software services, which can all be used at the same time.
- There rules set in the system that limit the type and subtype of the clients that are allowed to be registered under the VendorID. The rules are created based ont he agreement between the Vendor and Verizon.
- The user will only be able to register a limited number of devices or software services under the same VendorID. This registration limit is specified by the agreement between the Vendor and Verizon.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.

```ts
async registerETXClient(
  body: ClientRegistrationRequestV2,
  xTransactionId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ClientRegistrationResponse>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [sessionToken](../../doc/auth/custom-header-signature-1.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ClientRegistrationRequestV2`](../../doc/models/client-registration-request-v2.md) | Body, Required | - |
| `xTransactionId` | `string \| undefined` | Header, Optional | Optional transaction identifier for tracing requests. If not provided, the application will generate one. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successful Registration

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ClientRegistrationResponse`](../../doc/models/client-registration-response.md).

## Example Usage

```ts
const body: ClientRegistrationRequestV2 = {
  clientType: EtxClientTypeEnum.TrafficLightController,
  clientSubtype: ClientSubtypeEnum.Scooter,
  vendorID: 'VerizonETX',
  deviceID: 'a4fcd16a-343d-4527-8203-2f46e3e4ff4b',
  iMEI: '12-345678-901234-5',
  iCCID: '89345678901234567890',
  iMSI: '123456789012345',
};

const xTransactionId = '123e4567-e89b-12d3-a456-426614174000';

try {
  const response = await eTXRegistrationController.registerETXClient(
    body,
    xTransactionId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ETXRespondingError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid Request | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 401 | Unauthorized Request | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 403 | Forbidden Request | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 429 | Too Many Requests | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 503 | Internal Server Error | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| Default | Forbidden | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |


# Renew ETX Client Certificate

With this API call the user (client) can:

- renew the certificate of a device or software service in the ETX system if the original certificate has expired. If the client's certificate expired or going to expire within 30 days and new certificate will be issued. If the certificate expires more than 30 days, the current certificate will be returned to the client.
- complete its device or software service registration to the ETX system if the original registration request was not successful because of a pending certificate generation. Whenever the user receives a "client registration is pending" response (HTTP 202) from POST /clients/registration call. The client should initiate this PUT API call to finish the registration process and get the required certificate.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.

```ts
async renewETXClientCertificate(
  deviceID: string,
  vendorID: string,
  xTransactionId?: string,
  body?: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ClientRegistrationResponse>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [sessionToken](../../doc/auth/custom-header-signature-1.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceID` | `string` | Header, Required | - |
| `vendorID` | `string` | Header, Required | The VendorID set during the Vendor registration call.<br><br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9]+$` |
| `xTransactionId` | `string \| undefined` | Header, Optional | Optional transaction identifier for tracing requests. If not provided, the application will generate one. |
| `body` | `unknown \| undefined` | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successful Registration

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ClientRegistrationResponse`](../../doc/models/client-registration-response.md).

## Example Usage

```ts
const deviceID = 'a4fcd16a-343d-4527-8203-2f46e3e4ff4b';

const vendorID = 'VerizonETX';

const xTransactionId = '123e4567-e89b-12d3-a456-426614174000';

try {
  const response = await eTXRegistrationController.renewETXClientCertificate(
    deviceID,
    vendorID,
    xTransactionId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ETXRespondingError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid Request | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 401 | Unauthorized Request | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 403 | Forbidden Request | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 429 | Too Many Requests | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 503 | Internal Server Error | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| Default | Forbidden | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |


# Unregister ETX Clients

With this API call the user (client) can unregister its devices and software services from the ETX system. The unregistered devices and services will no longer be able to use the ETX Message Exchange.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.

```ts
async unregisterETXClients(
  deviceIDs: string[],
  vendorID: string,
  xTransactionId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [sessionToken](../../doc/auth/custom-header-signature-1.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceIDs` | `string[]` | Query, Required | The list of device IDs and software service IDs to be unregistered<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `100` |
| `vendorID` | `string` | Header, Required | The VendorID set during the Vendor registration call.<br><br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9]+$` |
| `xTransactionId` | `string \| undefined` | Header, Optional | Optional transaction identifier for tracing requests. If not provided, the application will generate one. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: Successful Deletion

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const deviceIDs: string[] = [
  '0000225a-0000-0000-0000-000000000000'
];

const vendorID = 'VerizonETX';

const xTransactionId = '123e4567-e89b-12d3-a456-426614174000';

try {
  const response = await eTXRegistrationController.unregisterETXClients(
    deviceIDs,
    vendorID,
    xTransactionId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ETXRespondingError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid Request | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 401 | Unauthorized Request | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 403 | Forbidden Request | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 429 | Too Many Requests | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 503 | Internal Server Error | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| Default | Forbidden | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |


# Get ETX Client Certificate

With this API call the user can check the certificate of the device. At least one of the DeviceID, IMEI, ICCID or IMSI is required to make the call.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.

```ts
async getETXClientCertificate(
  iD: ETXClientIDLookup,
  vendorID: string,
  xTransactionId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ClientPersistenceResponse>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [sessionToken](../../doc/auth/custom-header-signature-1.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `iD` | [`ETXClientIDLookup`](../../doc/models/etx-client-id-lookup.md) | Query, Required | One of the following IDs is required- DeviceID, IMEI, ICCID, IMSI. If more than one ID is provided, the API will return the certificate for the first ID found. The IDs are evaluated in the following order: DeviceID, IMEI, ICCID, IMSI. If the first provided ID is not found, the API will return an error. |
| `vendorID` | `string` | Header, Required | The VendorID set during the Vendor registration call.<br><br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9]+$` |
| `xTransactionId` | `string \| undefined` | Header, Optional | Optional transaction identifier for tracing requests. If not provided, the application will generate one. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successful retrieval

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ClientPersistenceResponse`](../../doc/models/client-persistence-response.md).

## Example Usage

```ts
const iD: ETXClientIDLookup = {
  deviceID: 'a4fcd16a-343d-4527-8203-2f46e3e4ff4b',
  iMEI: '12-345678-901234-5',
  iCCID: '89345678901234567890',
  iMSI: '123456789012345',
};

const vendorID = 'VerizonETX';

const xTransactionId = '123e4567-e89b-12d3-a456-426614174000';

try {
  const response = await eTXRegistrationController.getETXClientCertificate(
    iD,
    vendorID,
    xTransactionId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ETXRespondingError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid request | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 401 | Unauthorized | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 403 | Forbidden Request | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 404 | Not Found | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 429 | Too Many Requests | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 500 | Internal server Error | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| Default | Forbidden | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |


# Get ETX Connection Url

With this API call the device or software service requests the MQTT URL for the location that it needs to connect. To determine the proper URL the device or software service needs to provide its ID (the one that was provided in the registration request), location (GPS coordinates), and whether it is on the Verizon cellular network or not.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.

```ts
async getETXConnectionUrl(
  vendorID: string,
  body: ConnectionRequest,
  xTransactionId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectionResponse>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [sessionToken](../../doc/auth/custom-header-signature-1.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vendorID` | `string` | Header, Required | The VendorID set during the Vendor registration call.<br><br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9]+$` |
| `body` | [`ConnectionRequest`](../../doc/models/connection-request.md) | Body, Required | - |
| `xTransactionId` | `string \| undefined` | Header, Optional | Optional transaction identifier for tracing requests. If not provided, the application will generate one. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successful retrieval

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ConnectionResponse`](../../doc/models/connection-response.md).

## Example Usage

```ts
const vendorID = 'VerizonETX';

const body: ConnectionRequest = {
  deviceID: '976c4bad-03d3-4dcb-9688-ee57db7890e4',
  geolocation: {
    latitude: 42.36,
    longitude: -71.06,
  },
  networkType: NetworkTypeEnum.NonVZ,
};

const xTransactionId = '123e4567-e89b-12d3-a456-426614174000';

try {
  const response = await eTXRegistrationController.getETXConnectionUrl(
    vendorID,
    body,
    xTransactionId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ETXRespondingError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid request | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 401 | Unauthorized | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 403 | Forbidden Request | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 429 | Too Many Requests | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 503 | Internal server Error | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| Default | Forbidden | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |


# Get ETX Connection Url Multi Mec

With this API call the device or software service requests the MQTT URL for the location that it needs to connect. To determine the proper URL the device or software service needs to provide its ID (the one that was provided in the registration request), location (GPS coordinates), and whether it is on the Verizon cellular network or not.

If there are multiple MECs that serve the location of the client all options are provided in the response, and the client is free to choose which MEC they want to connect.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.

```ts
async getETXConnectionUrlMultiMec(
  vendorID: string,
  body: ConnectionRequest,
  xTransactionId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConnectionResponseV3>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [sessionToken](../../doc/auth/custom-header-signature-1.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vendorID` | `string` | Header, Required | The VendorID set during the Vendor registration call.<br><br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9]+$` |
| `body` | [`ConnectionRequest`](../../doc/models/connection-request.md) | Body, Required | - |
| `xTransactionId` | `string \| undefined` | Header, Optional | Optional transaction identifier for tracing requests. If not provided, the application will generate one. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successful retrieval

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ConnectionResponseV3`](../../doc/models/connection-response-v3.md).

## Example Usage

```ts
const vendorID = 'VerizonETX';

const body: ConnectionRequest = {
  deviceID: '976c4bad-03d3-4dcb-9688-ee57db7890e4',
  geolocation: {
    latitude: 42.36,
    longitude: -71.06,
  },
  networkType: NetworkTypeEnum.NonVZ,
};

const xTransactionId = '123e4567-e89b-12d3-a456-426614174000';

try {
  const response = await eTXRegistrationController.getETXConnectionUrlMultiMec(
    vendorID,
    body,
    xTransactionId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ETXRespondingError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid request | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 401 | Unauthorized | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 403 | Forbidden Request | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 429 | Too Many Requests | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 503 | Internal server Error | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| Default | Forbidden | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |


# Query ETX Devices

This API allows retrieving devices by vendor ID and optional filters. The request should include the VendorID and any filters to apply.

```ts
async queryETXDevices(
  body: DevicesRequest,
  xTransactionId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DevicesResponse[]>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [sessionToken](../../doc/auth/custom-header-signature-1.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DevicesRequest`](../../doc/models/devices-request.md) | Body, Required | - |
| `xTransactionId` | `string \| undefined` | Header, Optional | Optional transaction identifier for tracing requests. If not provided, the application will generate one. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successful retrieval of devices

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DevicesResponse[]`](../../doc/models/devices-response.md).

## Example Usage

```ts
const body: DevicesRequest = {
  vendorId: 'VerizonETX',
};

const xTransactionId = '123e4567-e89b-12d3-a456-426614174000';

try {
  const response = await eTXRegistrationController.queryETXDevices(
    body,
    xTransactionId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ETXRespondingError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid Request | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 401 | Unauthorized Request | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| 500 | Internal Server Error | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |
| Default | Forbidden | [`ETXRespondingError`](../../doc/models/etx-responding-error.md) |

