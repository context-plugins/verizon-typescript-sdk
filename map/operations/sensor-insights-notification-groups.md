<!-- Generated file — do not edit; regenerated with the SDK. -->

# SensorInsightsNotificationGroups — operations

Accessor: `client.sensorInsightsNotificationGroups` · Source: `src/resources/sensor-insights-notification-groups.ts` · 6 operations · Request and error types: namespace `SensorInsightsNotificationGroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### sensorInsightsAddUsersToNotificationGroupRequest

- **Signature**: `sensorInsightsAddUsersToNotificationGroupRequest(request: SensorInsightsNotificationGroups.SensorInsightsAddUsersToNotificationGroupRequestRequest, options?: RequestOptions): ApiPromise<undefined, SensorInsightsNotificationGroups.SensorInsightsAddUsersToNotificationGroupRequestError>`
- **Wire**: `POST /dm/v1/notificationGroups/actions/add-users`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SensorInsightsNotificationGroups.SensorInsightsAddUsersToNotificationGroupRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [400–599] `ManagementError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsNotificationGroups.SensorInsightsAddUsersToNotificationGroupRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoAddUsersToNotificationGroupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoAddUsersToNotificationGroupRequest` | `dtoAddUsersToNotificationGroupRequestSchema` | `src/models/dto-add-users-to-notification-group-request.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

### sensorInsightsCreateNotificationGroupRequest

- **Signature**: `sensorInsightsCreateNotificationGroupRequest(request: SensorInsightsNotificationGroups.SensorInsightsCreateNotificationGroupRequestRequest, options?: RequestOptions): ApiPromise<DtoNotificationGroupResponseEntity, SensorInsightsNotificationGroups.SensorInsightsCreateNotificationGroupRequestError>`
- **Wire**: `POST /dm/v1/notificationGroups`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DtoNotificationGroupResponseEntity`
- **Error**: `SensorInsightsNotificationGroups.SensorInsightsCreateNotificationGroupRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [400–599] `ManagementError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsNotificationGroups.SensorInsightsCreateNotificationGroupRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoCreateNotificationGroupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoCreateNotificationGroupRequest` | `dtoCreateNotificationGroupRequestSchema` | `src/models/dto-create-notification-group-request.ts` |
| `DtoNotificationGroupResponseEntity` | `dtoNotificationGroupResponseEntitySchema` | `src/models/dto-notification-group-response-entity.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

### sensorInsightsDeleteNotificationGroup

- **Signature**: `sensorInsightsDeleteNotificationGroup(request: SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupRequest, options?: RequestOptions): ApiPromise<undefined, SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupError>`
- **Wire**: `DELETE /dm/v1/notificationGroups`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `payload` | `query` | `DtoDeleteNotificationGroupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoDeleteNotificationGroupRequest` | `dtoDeleteNotificationGroupRequestSchema` | `src/models/dto-delete-notification-group-request.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |

### sensorInsightsListNotificationGroupRequest

- **Signature**: `sensorInsightsListNotificationGroupRequest(request: SensorInsightsNotificationGroups.SensorInsightsListNotificationGroupRequestRequest, options?: RequestOptions): ApiPromise<DtoNotificationGroupResponseEntity[], SensorInsightsNotificationGroups.SensorInsightsListNotificationGroupRequestError>`
- **Wire**: `POST /dm/v1/notificationGroups/actions/query`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DtoNotificationGroupResponseEntity[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SensorInsightsNotificationGroups.SensorInsightsListNotificationGroupRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [400–599] `ManagementError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsNotificationGroups.SensorInsightsListNotificationGroupRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoListNotificationGroupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoListNotificationGroupRequest` | `dtoListNotificationGroupRequestSchema` | `src/models/dto-list-notification-group-request.ts` |
| `DtoNotificationGroupResponseEntity` | `dtoNotificationGroupResponseEntitySchema` | `src/models/dto-notification-group-response-entity.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

### sensorInsightsRemoveUsersFromNotificationGroupRequest

- **Signature**: `sensorInsightsRemoveUsersFromNotificationGroupRequest(request: SensorInsightsNotificationGroups.SensorInsightsRemoveUsersFromNotificationGroupRequestRequest, options?: RequestOptions): ApiPromise<undefined, SensorInsightsNotificationGroups.SensorInsightsRemoveUsersFromNotificationGroupRequestError>`
- **Wire**: `POST /dm/v1/notificationGroups/actions/remove-users`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SensorInsightsNotificationGroups.SensorInsightsRemoveUsersFromNotificationGroupRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [400–599] `ManagementError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsNotificationGroups.SensorInsightsRemoveUsersFromNotificationGroupRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoRemoveUsersFromNotificationGroupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoRemoveUsersFromNotificationGroupRequest` | `dtoRemoveUsersFromNotificationGroupRequestSchema` | `src/models/dto-remove-users-from-notification-group-request.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

### sensorInsightsUpdateNotificationGroupRequest

- **Signature**: `sensorInsightsUpdateNotificationGroupRequest(request: SensorInsightsNotificationGroups.SensorInsightsUpdateNotificationGroupRequestRequest, options?: RequestOptions): ApiPromise<DtoNotificationGroupResponseEntity, SensorInsightsNotificationGroups.SensorInsightsUpdateNotificationGroupRequestError>`
- **Wire**: `PATCH /dm/v1/notificationGroups`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DtoNotificationGroupResponseEntity`
- **Error**: `SensorInsightsNotificationGroups.SensorInsightsUpdateNotificationGroupRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [400–599] `ManagementError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsNotificationGroups.SensorInsightsUpdateNotificationGroupRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoUpdateNotificationGroupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoUpdateNotificationGroupRequest` | `dtoUpdateNotificationGroupRequestSchema` | `src/models/dto-update-notification-group-request.ts` |
| `DtoNotificationGroupResponseEntity` | `dtoNotificationGroupResponseEntitySchema` | `src/models/dto-notification-group-response-entity.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

