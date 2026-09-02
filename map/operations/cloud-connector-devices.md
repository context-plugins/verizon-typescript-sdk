<!-- Generated file — do not edit; regenerated with the SDK. -->

# CloudConnectorDevices — operations

Accessor: `client.cloudConnectorDevices` · Source: `src/resources/cloud-connector-devices.ts` · 6 operations · Request types: namespace `CloudConnectorDevices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteDeviceFromAccount

- **Server**: `cloudConnector` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteDeviceFromAccount(request: CloudConnectorDevices.DeleteDeviceFromAccountRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `POST /devices/actions/delete`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CloudConnectorDevices.DeleteDeviceFromAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RemoveDeviceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RemoveDeviceRequest` | `removeDeviceRequestSchema` | `src/models/remove-device-request.ts` |

### findDeviceByPropertyValues

- **Server**: `cloudConnector` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `findDeviceByPropertyValues(request: CloudConnectorDevices.FindDeviceByPropertyValuesRequest, options?: RequestOptions): ApiPromise<FindDeviceByPropertyResponseList, ResponseError>`
- **Wire**: `POST /devices/actions/query`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `FindDeviceByPropertyResponseList`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CloudConnectorDevices.FindDeviceByPropertyValuesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `QuerySubscriptionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QuerySubscriptionRequest` | `querySubscriptionRequestSchema` | `src/models/query-subscription-request.ts` |
| `FindDeviceByPropertyResponseList` | `findDeviceByPropertyResponseListSchema` | `src/models/find-device-by-property-response-list.ts` |

### searchDeviceEventHistory

- **Server**: `cloudConnector` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `searchDeviceEventHistory(request: CloudConnectorDevices.SearchDeviceEventHistoryRequestParams, options?: RequestOptions): ApiPromise<SearchDeviceEventHistoryResponseList, ResponseError>`
- **Wire**: `POST /devices/fields/actions/history/search`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchDeviceEventHistoryResponseList`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CloudConnectorDevices.SearchDeviceEventHistoryRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchDeviceEventHistoryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchDeviceEventHistoryRequest` | `searchDeviceEventHistoryRequestSchema` | `src/models/search-device-event-history-request.ts` |
| `SearchDeviceEventHistoryResponseList` | `searchDeviceEventHistoryResponseListSchema` | `src/models/search-device-event-history-response-list.ts` |

### searchDevicesResourcesByPropertyValues

- **Server**: `cloudConnector` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `searchDevicesResourcesByPropertyValues(request: CloudConnectorDevices.SearchDevicesResourcesByPropertyValuesRequest, options?: RequestOptions): ApiPromise<SearchDeviceByPropertyResponseList, ResponseError>`
- **Wire**: `POST /devices/actions/search`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchDeviceByPropertyResponseList`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CloudConnectorDevices.SearchDevicesResourcesByPropertyValuesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `QuerySubscriptionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QuerySubscriptionRequest` | `querySubscriptionRequestSchema` | `src/models/query-subscription-request.ts` |
| `SearchDeviceByPropertyResponseList` | `searchDeviceByPropertyResponseListSchema` | `src/models/search-device-by-property-response-list.ts` |

### searchSensorReadings

- **Server**: `cloudConnector` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `searchSensorReadings(request: CloudConnectorDevices.SearchSensorReadingsRequest, options?: RequestOptions): ApiPromise<SearchSensorHistoryResponseList, ResponseError>`
- **Wire**: `POST /devices/fields/{fieldname}/actions/history`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchSensorHistoryResponseList`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CloudConnectorDevices.SearchSensorReadingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `fieldname` | `path` | `string` | yes |
| `body` | `body` | `SearchSensorHistoryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchSensorHistoryRequest` | `searchSensorHistoryRequestSchema` | `src/models/search-sensor-history-request.ts` |
| `SearchSensorHistoryResponseList` | `searchSensorHistoryResponseListSchema` | `src/models/search-sensor-history-response-list.ts` |

### updateDevicesConfigurationValue

- **Server**: `cloudConnector` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `updateDevicesConfigurationValue(request: CloudConnectorDevices.UpdateDevicesConfigurationValueRequest, options?: RequestOptions): ApiPromise<ChangeConfigurationResponse, ResponseError>`
- **Wire**: `POST /devices/configuration/actions/set`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ChangeConfigurationResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CloudConnectorDevices.UpdateDevicesConfigurationValueRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ChangeConfigurationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChangeConfigurationRequest` | `changeConfigurationRequestSchema` | `src/models/change-configuration-request.ts` |
| `ChangeConfigurationResponse` | `changeConfigurationResponseSchema` | `src/models/change-configuration-response.ts` |

