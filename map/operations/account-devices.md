<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountDevices — operations

Accessor: `client.accountDevices` · Source: `src/resources/account-devices.ts` · 2 operations · Request and error types: namespace `AccountDevices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getAccountDeviceInformation

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getAccountDeviceInformation(request: AccountDevices.GetAccountDeviceInformationRequest, options?: RequestOptions): ApiPromise<V3AccountDeviceList, AccountDevices.GetAccountDeviceInformationError>`
- **Wire**: `GET /devices/{acc}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3AccountDeviceList`
- **Error**: `AccountDevices.GetAccountDeviceInformationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountDevices.GetAccountDeviceInformationRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `acc` | `path` | `string` | yes | — |
| `lastSeenDeviceId` | `query` | `string` | no | — |
| `protocol` | `query` | `DevicesProtocol` | no | `DevicesProtocol.Lwm2M` |

| Type | Schema value | Source |
| --- | --- | --- |
| `DevicesProtocol` | `devicesProtocolSchema` | `src/models/devices-protocol.ts` |
| `V3AccountDeviceList` | `v3AccountDeviceListSchema` | `src/models/v3-account-device-list.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

### listAccountDevicesInformation

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listAccountDevicesInformation(request: AccountDevices.ListAccountDevicesInformationRequest, options?: RequestOptions): ApiPromise<DeviceListResult, AccountDevices.ListAccountDevicesInformationError>`
- **Wire**: `POST /devices/{acc}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeviceListResult`
- **Error**: `AccountDevices.ListAccountDevicesInformationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountDevices.ListAccountDevicesInformationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |
| `body` | `body` | `DeviceImei` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceImei` | `deviceImeiSchema` | `src/models/device-imei.ts` |
| `DeviceListResult` | `deviceListResultSchema` | `src/models/device-list-result.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

