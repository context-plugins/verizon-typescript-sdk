<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sms — operations

Accessor: `client.sms` · Source: `src/resources/sms.ts` · 3 operations · Request and error types: namespace `Sms`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listDevicesSmsMessages

- **Signature**: `listDevicesSmsMessages(request: Sms.ListDevicesSmsMessagesRequest, options?: RequestOptions): ApiPromise<SmsMessagesQueryResult, Sms.ListDevicesSmsMessagesError>`
- **Wire**: `GET /m2m/v1/sms/{aname}/history`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SmsMessagesQueryResult`
- **Error**: `Sms.ListDevicesSmsMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sms.ListDevicesSmsMessagesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `aname` | `path` | `string` | yes |
| `next` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SmsMessagesQueryResult` | `smsMessagesQueryResultSchema` | `src/models/sms-messages-query-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### sendSmsToDevice

- **Signature**: `sendSmsToDevice(request: Sms.SendSmsToDeviceRequest, options?: RequestOptions): ApiPromise<DeviceManagementResult, Sms.SendSmsToDeviceError>`
- **Wire**: `POST /m2m/v1/sms`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceManagementResult`
- **Error**: `Sms.SendSmsToDeviceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sms.SendSmsToDeviceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SmsSendRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SmsSendRequest` | `smsSendRequestSchema` | `src/models/sms-send-request.ts` |
| `DeviceManagementResult` | `deviceManagementResultSchema` | `src/models/device-management-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### startQueuedSmsDelivery

- **Signature**: `startQueuedSmsDelivery(request: Sms.StartQueuedSmsDeliveryRequest, options?: RequestOptions): ApiPromise<ConnectivityManagementSuccessResult, Sms.StartQueuedSmsDeliveryError>`
- **Wire**: `PUT /m2m/v1/sms/{aname}/startCallbacks`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectivityManagementSuccessResult`
- **Error**: `Sms.StartQueuedSmsDeliveryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sms.StartQueuedSmsDeliveryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `aname` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectivityManagementSuccessResult` | `connectivityManagementSuccessResultSchema` | `src/models/connectivity-management-success-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

