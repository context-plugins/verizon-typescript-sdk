<!-- Generated file — do not edit; regenerated with the SDK. -->

# SensorInsightsUsers — operations

Accessor: `client.sensorInsightsUsers` · Source: `src/resources/sensor-insights-users.ts` · 4 operations · Request and error types: namespace `SensorInsightsUsers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### sensorInsightsCreateUserRequest

- **Signature**: `sensorInsightsCreateUserRequest(request: SensorInsightsUsers.SensorInsightsCreateUserRequestRequest, options?: RequestOptions): ApiPromise<ResourceUser, SensorInsightsUsers.SensorInsightsCreateUserRequestError>`
- **Wire**: `POST /dm/v1/users`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ResourceUser`
- **Error**: `SensorInsightsUsers.SensorInsightsCreateUserRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [400–599] `ManagementError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsUsers.SensorInsightsCreateUserRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoCreateUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoCreateUserRequest` | `dtoCreateUserRequestSchema` | `src/models/dto-create-user-request.ts` |
| `ResourceUser` | `resourceUserSchema` | `src/models/resource-user.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

### sensorInsightsDeleteUser

- **Signature**: `sensorInsightsDeleteUser(request: SensorInsightsUsers.SensorInsightsDeleteUserRequest, options?: RequestOptions): ApiPromise<undefined, SensorInsightsUsers.SensorInsightsDeleteUserError>`
- **Wire**: `DELETE /dm/v1/users`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SensorInsightsUsers.SensorInsightsDeleteUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsUsers.SensorInsightsDeleteUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `deleterequestpayload` | `query` | `DtoDeleteUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoDeleteUserRequest` | `dtoDeleteUserRequestSchema` | `src/models/dto-delete-user-request.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |

### sensorInsightsListUserRequest

- **Signature**: `sensorInsightsListUserRequest(request: SensorInsightsUsers.SensorInsightsListUserRequestRequest, options?: RequestOptions): ApiPromise<ResourceUser[], SensorInsightsUsers.SensorInsightsListUserRequestError>`
- **Wire**: `POST /dm/v1/users/actions/query`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ResourceUser[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SensorInsightsUsers.SensorInsightsListUserRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [400–599] `ManagementError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsUsers.SensorInsightsListUserRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoListUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoListUserRequest` | `dtoListUserRequestSchema` | `src/models/dto-list-user-request.ts` |
| `ResourceUser` | `resourceUserSchema` | `src/models/resource-user.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

### sensorInsightsUpdateUserRequest

- **Signature**: `sensorInsightsUpdateUserRequest(request: SensorInsightsUsers.SensorInsightsUpdateUserRequestRequest, options?: RequestOptions): ApiPromise<ResourceUser, SensorInsightsUsers.SensorInsightsUpdateUserRequestError>`
- **Wire**: `PATCH /dm/v1/users`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ResourceUser`
- **Error**: `SensorInsightsUsers.SensorInsightsUpdateUserRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [400–599] `ManagementError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsUsers.SensorInsightsUpdateUserRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoUpdateUserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoUpdateUserRequest` | `dtoUpdateUserRequestSchema` | `src/models/dto-update-user-request.ts` |
| `ResourceUser` | `resourceUserSchema` | `src/models/resource-user.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

