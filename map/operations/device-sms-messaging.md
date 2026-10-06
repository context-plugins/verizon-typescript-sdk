<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeviceSmsMessaging — operations

Accessor: `client.deviceSmsMessaging` · Source: `src/resources/device-sms-messaging.ts` · 4 operations · Request and error types: namespace `DeviceSmsMessaging`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSmsMessages

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getSmsMessages(request: DeviceSmsMessaging.GetSmsMessagesRequest, options?: RequestOptions): ApiPromise<SmsMessagesResponse, DeviceSmsMessaging.GetSmsMessagesError>`
- **Wire**: `GET /m2m/v1/sms/{accountName}/history`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SmsMessagesResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DeviceSmsMessaging.GetSmsMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [default — any status no arm above covers] `GioRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `GioRestErrorResponse`] `rawBody: ArrayBuffer`

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

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listSmsMessageHistory(request: DeviceSmsMessaging.ListSmsMessageHistoryRequest, options?: RequestOptions): ApiPromise<GioRequestResponse, DeviceSmsMessaging.ListSmsMessageHistoryError>`
- **Wire**: `POST /m2m/v1/devices/sms/history/actions/list`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GioRequestResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DeviceSmsMessaging.ListSmsMessageHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [default — any status no arm above covers] `GioRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `GioRestErrorResponse`] `rawBody: ArrayBuffer`

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

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `sendAnSmsMessage(request: DeviceSmsMessaging.SendAnSmsMessageRequest, options?: RequestOptions): ApiPromise<GioRequestResponse, DeviceSmsMessaging.SendAnSmsMessageError>`
- **Wire**: `POST /m2m/v1/sms`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GioRequestResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DeviceSmsMessaging.SendAnSmsMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [default — any status no arm above covers] `GioRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `GioRestErrorResponse`] `rawBody: ArrayBuffer`

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

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `startSmsMessageDelivery(request: DeviceSmsMessaging.StartSmsMessageDeliveryRequest, options?: RequestOptions): ApiPromise<SuccessResponse, DeviceSmsMessaging.StartSmsMessageDeliveryError>`
- **Wire**: `PUT /m2m/v1/sms/{accountName}/startCallbacks`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `DeviceSmsMessaging.StartSmsMessageDeliveryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gioRestErrorResponse"` [default — any status no arm above covers] `GioRestErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `GioRestErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `DeviceSmsMessaging.StartSmsMessageDeliveryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessResponse` | `successResponseSchema` | `src/models/success-response.ts` |
| `GioRestErrorResponse` | `gioRestErrorResponseSchema` | `src/models/gio-rest-error-response.ts` |

