<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsageTriggerManagement — operations

Accessor: `client.usageTriggerManagement` · Source: `src/resources/usage-trigger-management.ts` · 3 operations · Request and error types: namespace `UsageTriggerManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createNewTrigger

- **Server**: `subscriptionServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `createNewTrigger(request: UsageTriggerManagement.CreateNewTriggerRequest, options?: RequestOptions): ApiPromise<UsageTriggerResponse, UsageTriggerManagement.CreateNewTriggerError>`
- **Wire**: `POST /usage/triggers`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UsageTriggerResponse`
- **Error**: `UsageTriggerManagement.CreateNewTriggerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsageTriggerManagement.CreateNewTriggerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UsageTriggerAddRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsageTriggerAddRequest` | `usageTriggerAddRequestSchema` | `src/models/usage-trigger-add-request.ts` |
| `UsageTriggerResponse` | `usageTriggerResponseSchema` | `src/models/usage-trigger-response.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### deleteTrigger

- **Server**: `subscriptionServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteTrigger(request: UsageTriggerManagement.DeleteTriggerRequest, options?: RequestOptions): ApiPromise<DeviceLocationSuccessResult, UsageTriggerManagement.DeleteTriggerError>`
- **Wire**: `DELETE /usage/accounts/{accountName}/triggers/{triggerId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceLocationSuccessResult`
- **Error**: `UsageTriggerManagement.DeleteTriggerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsageTriggerManagement.DeleteTriggerRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |
| `triggerId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceLocationSuccessResult` | `deviceLocationSuccessResultSchema` | `src/models/device-location-success-result.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### updateTrigger

- **Server**: `subscriptionServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `updateTrigger(request: UsageTriggerManagement.UpdateTriggerRequestParams, options?: RequestOptions): ApiPromise<UsageTriggerResponse, UsageTriggerManagement.UpdateTriggerError>`
- **Wire**: `POST /usage/triggers/{triggerId}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UsageTriggerResponse`
- **Error**: `UsageTriggerManagement.UpdateTriggerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsageTriggerManagement.UpdateTriggerRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `triggerId` | `path` | `string` | yes |
| `body` | `body` | `UsageTriggerUpdateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsageTriggerUpdateRequest` | `usageTriggerUpdateRequestSchema` | `src/models/usage-trigger-update-request.ts` |
| `UsageTriggerResponse` | `usageTriggerResponseSchema` | `src/models/usage-trigger-response.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

