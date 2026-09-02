<!-- Generated file — do not edit; regenerated with the SDK. -->

# Exclusions — operations

Accessor: `client.exclusions` · Source: `src/resources/exclusions.ts` · 6 operations · Request and error types: namespace `Exclusions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### devicesLocationGetConsentAsync

- **Server**: `deviceLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `devicesLocationGetConsentAsync(request: Exclusions.DevicesLocationGetConsentAsyncRequest, options?: RequestOptions): ApiPromise<GetAccountDeviceConsent, Exclusions.DevicesLocationGetConsentAsyncError>`
- **Wire**: `GET /devicelocations/action/consents`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetAccountDeviceConsent`
- **Error**: `Exclusions.DevicesLocationGetConsentAsyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400–599] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Exclusions.DevicesLocationGetConsentAsyncRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `query` | `string` | yes |
| `deviceId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetAccountDeviceConsent` | `getAccountDeviceConsentSchema` | `src/models/get-account-device-consent.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### devicesLocationGiveConsentAsync

- **Server**: `deviceLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `devicesLocationGiveConsentAsync(request: Exclusions.DevicesLocationGiveConsentAsyncRequest, options?: RequestOptions): ApiPromise<ConsentTransactionId, Exclusions.DevicesLocationGiveConsentAsyncError>`
- **Wire**: `POST /devicelocations/action/consents`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ConsentTransactionId`
- **Error**: `Exclusions.DevicesLocationGiveConsentAsyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400–599] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Exclusions.DevicesLocationGiveConsentAsyncRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AccountConsentCreate` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountConsentCreate` | `accountConsentCreateSchema` | `src/models/account-consent-create.ts` |
| `ConsentTransactionId` | `consentTransactionIdSchema` | `src/models/consent-transaction-id.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### devicesLocationUpdateConsent

- **Server**: `deviceLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `devicesLocationUpdateConsent(request: Exclusions.DevicesLocationUpdateConsentRequest, options?: RequestOptions): ApiPromise<ConsentTransactionId, Exclusions.DevicesLocationUpdateConsentError>`
- **Wire**: `PUT /devicelocations/action/consents`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ConsentTransactionId`
- **Error**: `Exclusions.DevicesLocationUpdateConsentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400–599] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Exclusions.DevicesLocationUpdateConsentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AccountConsentUpdate` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountConsentUpdate` | `accountConsentUpdateSchema` | `src/models/account-consent-update.ts` |
| `ConsentTransactionId` | `consentTransactionIdSchema` | `src/models/consent-transaction-id.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### excludeDevices

- **Server**: `deviceLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `excludeDevices(options?: RequestOptions): ApiPromise<DeviceLocationSuccessResult, Exclusions.ExcludeDevicesError>`
- **Wire**: `POST /consents`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceLocationSuccessResult`
- **Error**: `Exclusions.ExcludeDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceLocationSuccessResult` | `deviceLocationSuccessResultSchema` | `src/models/device-location-success-result.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### listExcludedDevices

- **Server**: `deviceLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listExcludedDevices(request: Exclusions.ListExcludedDevicesRequest, options?: RequestOptions): ApiPromise<DevicesConsentResult, Exclusions.ListExcludedDevicesError>`
- **Wire**: `GET /consents/{accountName}/index/{startIndex}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DevicesConsentResult`
- **Error**: `Exclusions.ListExcludedDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Exclusions.ListExcludedDevicesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |
| `startIndex` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DevicesConsentResult` | `devicesConsentResultSchema` | `src/models/devices-consent-result.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### removeDevicesFromExclusionList

- **Server**: `deviceLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `removeDevicesFromExclusionList(request: Exclusions.RemoveDevicesFromExclusionListRequest, options?: RequestOptions): ApiPromise<DeviceLocationSuccessResult, Exclusions.RemoveDevicesFromExclusionListError>`
- **Wire**: `DELETE /consents`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceLocationSuccessResult`
- **Error**: `Exclusions.RemoveDevicesFromExclusionListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Exclusions.RemoveDevicesFromExclusionListRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `query` | `string` | yes |
| `deviceList` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceLocationSuccessResult` | `deviceLocationSuccessResultSchema` | `src/models/device-location-success-result.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

