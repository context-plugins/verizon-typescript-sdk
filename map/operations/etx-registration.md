<!-- Generated file — do not edit; regenerated with the SDK. -->

# EtxRegistration — operations

Accessor: `client.etxRegistration` · Source: `src/resources/etx-registration.ts` · 7 operations · Request and error types: namespace `EtxRegistration`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getEtxClientCertificate

- **Server**: `impServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getEtxClientCertificate(request: EtxRegistration.GetEtxClientCertificateRequest, options?: RequestOptions): ApiPromise<ClientPersistenceResponse, EtxRegistration.GetEtxClientCertificateError>`
- **Wire**: `GET /api/v2/clients/registration`
- **Auth**: all of `thingspaceOauth`, `sessionToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClientPersistenceResponse`
- **Error**: `EtxRegistration.GetEtxClientCertificateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"etxRespondingError"` [400] `EtxRespondingError` · `"etxRespondingError2"` [401] `EtxRespondingError` · `"etxRespondingError3"` [403] `EtxRespondingError` · `"etxRespondingError4"` [404] `EtxRespondingError` · `"etxRespondingError5"` [429] `EtxRespondingError` · `"etxRespondingError6"` [500] `EtxRespondingError` · `"etxRespondingError7"` [400–599] `EtxRespondingError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EtxRegistration.GetEtxClientCertificateRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `query` | `ID` | `EtxClientIdLookup` | yes |
| `vendorId` | `header` | `VendorID` | `string` | yes |
| `xTransactionId` | `header` | `X-Transaction-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EtxClientIdLookup` | `etxClientIdLookupSchema` | `src/models/etx-client-id-lookup.ts` |
| `ClientPersistenceResponse` | `clientPersistenceResponseSchema` | `src/models/client-persistence-response.ts` |
| `EtxRespondingError` | `etxRespondingErrorSchema` | `src/models/etx-responding-error.ts` |

### getEtxConnectionUrl

- **Server**: `impServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getEtxConnectionUrl(request: EtxRegistration.GetEtxConnectionUrlRequest, options?: RequestOptions): ApiPromise<ConnectionResponse, EtxRegistration.GetEtxConnectionUrlError>`
- **Wire**: `POST /api/v2/clients/connection`
- **Auth**: all of `thingspaceOauth`, `sessionToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ConnectionResponse`
- **Error**: `EtxRegistration.GetEtxConnectionUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"etxRespondingError"` [400] `EtxRespondingError` · `"etxRespondingError2"` [401] `EtxRespondingError` · `"etxRespondingError3"` [403] `EtxRespondingError` · `"etxRespondingError4"` [429] `EtxRespondingError` · `"etxRespondingError5"` [503] `EtxRespondingError` · `"etxRespondingError6"` [400–599] `EtxRespondingError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EtxRegistration.GetEtxConnectionUrlRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vendorId` | `header` | `VendorID` | `string` | yes |
| `xTransactionId` | `header` | `X-Transaction-Id` | `string` | no |
| `body` | `body` | — | `ConnectionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectionRequest` | `connectionRequestSchema` | `src/models/connection-request.ts` |
| `ConnectionResponse` | `connectionResponseSchema` | `src/models/connection-response.ts` |
| `EtxRespondingError` | `etxRespondingErrorSchema` | `src/models/etx-responding-error.ts` |

### getEtxConnectionUrlMultiMec

- **Server**: `impServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getEtxConnectionUrlMultiMec(request: EtxRegistration.GetEtxConnectionUrlMultiMecRequest, options?: RequestOptions): ApiPromise<ConnectionResponseV3, EtxRegistration.GetEtxConnectionUrlMultiMecError>`
- **Wire**: `POST /api/v3/clients/connection`
- **Auth**: all of `thingspaceOauth`, `sessionToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ConnectionResponseV3`
- **Error**: `EtxRegistration.GetEtxConnectionUrlMultiMecError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"etxRespondingError"` [400] `EtxRespondingError` · `"etxRespondingError2"` [401] `EtxRespondingError` · `"etxRespondingError3"` [403] `EtxRespondingError` · `"etxRespondingError4"` [429] `EtxRespondingError` · `"etxRespondingError5"` [503] `EtxRespondingError` · `"etxRespondingError6"` [400–599] `EtxRespondingError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EtxRegistration.GetEtxConnectionUrlMultiMecRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vendorId` | `header` | `VendorID` | `string` | yes |
| `xTransactionId` | `header` | `X-Transaction-Id` | `string` | no |
| `body` | `body` | — | `ConnectionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectionRequest` | `connectionRequestSchema` | `src/models/connection-request.ts` |
| `ConnectionResponseV3` | `connectionResponseV3Schema` | `src/models/connection-response-v3.ts` |
| `EtxRespondingError` | `etxRespondingErrorSchema` | `src/models/etx-responding-error.ts` |

### queryEtxDevices

- **Server**: `impServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `queryEtxDevices(request: EtxRegistration.QueryEtxDevicesRequest, options?: RequestOptions): ApiPromise<DevicesResponse[], EtxRegistration.QueryEtxDevicesError>`
- **Wire**: `POST /api/v1/clients/query`
- **Auth**: all of `thingspaceOauth`, `sessionToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DevicesResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `EtxRegistration.QueryEtxDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"etxRespondingError"` [400] `EtxRespondingError` · `"etxRespondingError2"` [401] `EtxRespondingError` · `"etxRespondingError3"` [500] `EtxRespondingError` · `"etxRespondingError4"` [400–599] `EtxRespondingError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EtxRegistration.QueryEtxDevicesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xTransactionId` | `header` | `X-Transaction-Id` | `string` | no |
| `body` | `body` | — | `DevicesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DevicesRequest` | `devicesRequestSchema` | `src/models/devices-request.ts` |
| `DevicesResponse` | `devicesResponseSchema` | `src/models/devices-response.ts` |
| `EtxRespondingError` | `etxRespondingErrorSchema` | `src/models/etx-responding-error.ts` |

### registerEtxClient

- **Server**: `impServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `registerEtxClient(request: EtxRegistration.RegisterEtxClientRequest, options?: RequestOptions): ApiPromise<ClientRegistrationResponse, EtxRegistration.RegisterEtxClientError>`
- **Wire**: `POST /api/v2/clients/registration`
- **Auth**: all of `thingspaceOauth`, `sessionToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ClientRegistrationResponse`
- **Error**: `EtxRegistration.RegisterEtxClientError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"etxRespondingError"` [400] `EtxRespondingError` · `"etxRespondingError2"` [401] `EtxRespondingError` · `"etxRespondingError3"` [403] `EtxRespondingError` · `"etxRespondingError4"` [429] `EtxRespondingError` · `"etxRespondingError5"` [503] `EtxRespondingError` · `"etxRespondingError6"` [400–599] `EtxRespondingError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EtxRegistration.RegisterEtxClientRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xTransactionId` | `header` | `X-Transaction-Id` | `string` | no |
| `body` | `body` | — | `ClientRegistrationRequestV2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientRegistrationRequestV2` | `clientRegistrationRequestV2Schema` | `src/models/client-registration-request-v2.ts` |
| `ClientRegistrationResponse` | `clientRegistrationResponseSchema` | `src/models/client-registration-response.ts` |
| `EtxRespondingError` | `etxRespondingErrorSchema` | `src/models/etx-responding-error.ts` |

### renewEtxClientCertificate

- **Server**: `impServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `renewEtxClientCertificate(request: EtxRegistration.RenewEtxClientCertificateRequest, options?: RequestOptions): ApiPromise<ClientRegistrationResponse, EtxRegistration.RenewEtxClientCertificateError>`
- **Wire**: `PUT /api/v2/clients/registration`
- **Auth**: all of `thingspaceOauth`, `sessionToken` — both are sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **Returns**: `ClientRegistrationResponse`
- **Error**: `EtxRegistration.RenewEtxClientCertificateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"etxRespondingError"` [400] `EtxRespondingError` · `"etxRespondingError2"` [401] `EtxRespondingError` · `"etxRespondingError3"` [403] `EtxRespondingError` · `"etxRespondingError4"` [429] `EtxRespondingError` · `"etxRespondingError5"` [503] `EtxRespondingError` · `"etxRespondingError6"` [400–599] `EtxRespondingError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EtxRegistration.RenewEtxClientCertificateRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `deviceId` | `header` | `DeviceID` | `string` | yes |
| `vendorId` | `header` | `VendorID` | `string` | yes |
| `xTransactionId` | `header` | `X-Transaction-Id` | `string` | no |
| `body` | `body` | — | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClientRegistrationResponse` | `clientRegistrationResponseSchema` | `src/models/client-registration-response.ts` |
| `EtxRespondingError` | `etxRespondingErrorSchema` | `src/models/etx-responding-error.ts` |

### unregisterEtxClients

- **Server**: `impServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `unregisterEtxClients(request: EtxRegistration.UnregisterEtxClientsRequest, options?: RequestOptions): ApiPromise<undefined, EtxRegistration.UnregisterEtxClientsError>`
- **Wire**: `DELETE /api/v2/clients/registration`
- **Auth**: all of `thingspaceOauth`, `sessionToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `EtxRegistration.UnregisterEtxClientsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"etxRespondingError"` [400] `EtxRespondingError` · `"etxRespondingError2"` [401] `EtxRespondingError` · `"etxRespondingError3"` [403] `EtxRespondingError` · `"etxRespondingError4"` [429] `EtxRespondingError` · `"etxRespondingError5"` [503] `EtxRespondingError` · `"etxRespondingError6"` [400–599] `EtxRespondingError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EtxRegistration.UnregisterEtxClientsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `deviceIDs` | `query` | `DeviceIDs` | `string[]` | yes |
| `vendorId` | `header` | `VendorID` | `string` | yes |
| `xTransactionId` | `header` | `X-Transaction-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EtxRespondingError` | `etxRespondingErrorSchema` | `src/models/etx-responding-error.ts` |

