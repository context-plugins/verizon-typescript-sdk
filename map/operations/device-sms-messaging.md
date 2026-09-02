<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeviceSmsMessaging — operations

Accessor: `client.deviceSmsMessaging` · Source: `src/resources/device-sms-messaging.ts` · 4 operations · Request and error types: namespace `DeviceSmsMessaging`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getSmsMessages

- **Signature**: `getSmsMessages(request: DeviceSmsMessaging.GetSmsMessagesRequest, options?: RequestOptions): ApiPromise<SmsMessagesResponse, DeviceSmsMessaging.GetSmsMessagesError>`
- **Wire**: `GET /m2m/v1/sms/{accountName}/history`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SmsMessagesResponse`
- **Error**: `DeviceSmsMessaging.GetSmsMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [400–599] `GioRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceSmsMessaging.GetSmsMessagesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |
| `next` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SmsMessagesResponse` | `smsMessagesResponseSchema` | `src/models/sms-messages-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

### listSmsMessageHistory

- **Signature**: `listSmsMessageHistory(request: DeviceSmsMessaging.ListSmsMessageHistoryRequest, options?: RequestOptions): ApiPromise<GioRequestResponse, DeviceSmsMessaging.ListSmsMessageHistoryError>`
- **Wire**: `POST /m2m/v1/devices/sms/history/actions/list`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GioRequestResponse`
- **Error**: `DeviceSmsMessaging.ListSmsMessageHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [400–599] `GioRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceSmsMessaging.ListSmsMessageHistoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SmsEventHistoryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SmsEventHistoryRequest` | `smsEventHistoryRequestSchema` | `src/models/sms-event-history-request.ts` |
| `GioRequestResponse` | `gioRequestResponseSchema` | `src/models/gio-request-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

### sendAnSmsMessage

- **Signature**: `sendAnSmsMessage(request: DeviceSmsMessaging.SendAnSmsMessageRequest, options?: RequestOptions): ApiPromise<GioRequestResponse, DeviceSmsMessaging.SendAnSmsMessageError>`
- **Wire**: `POST /m2m/v1/sms`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GioRequestResponse`
- **Error**: `DeviceSmsMessaging.SendAnSmsMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [400–599] `GioRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceSmsMessaging.SendAnSmsMessageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GiosmsSendRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GiosmsSendRequest` | `giosmsSendRequestSchema` | `src/models/giosms-send-request.ts` |
| `GioRequestResponse` | `gioRequestResponseSchema` | `src/models/gio-request-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

### startSmsMessageDelivery

- **Signature**: `startSmsMessageDelivery(request: DeviceSmsMessaging.StartSmsMessageDeliveryRequest, options?: RequestOptions): ApiPromise<SuccessResponse, DeviceSmsMessaging.StartSmsMessageDeliveryError>`
- **Wire**: `PUT /m2m/v1/sms/{accountName}/startCallbacks`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SuccessResponse`
- **Error**: `DeviceSmsMessaging.StartSmsMessageDeliveryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [400–599] `GioRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceSmsMessaging.StartSmsMessageDeliveryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessResponse` | `successResponseSchema` | `src/models/success-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

