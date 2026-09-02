<!-- Generated file — do not edit; regenerated with the SDK. -->

# SessionManagement — operations

Accessor: `client.sessionManagement` · Source: `src/resources/session-management.ts` · 3 operations · Request and error types: namespace `SessionManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### endConnectivityManagementSession

- **Signature**: `endConnectivityManagementSession(options?: RequestOptions): ApiPromise<LogOutRequest, SessionManagement.EndConnectivityManagementSessionError>`
- **Wire**: `POST /m2m/v1/session/logout`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LogOutRequest`
- **Error**: `SessionManagement.EndConnectivityManagementSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `LogOutRequest` | `logOutRequestSchema` | `src/models/log-out-request.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### resetConnectivityManagementPassword

- **Signature**: `resetConnectivityManagementPassword(request: SessionManagement.ResetConnectivityManagementPasswordRequest, options?: RequestOptions): ApiPromise<SessionResetPasswordResult, SessionManagement.ResetConnectivityManagementPasswordError>`
- **Wire**: `PUT /m2m/v1/session/password/actions/reset`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SessionResetPasswordResult`
- **Error**: `SessionManagement.ResetConnectivityManagementPasswordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SessionManagement.ResetConnectivityManagementPasswordRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SessionResetPasswordRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionResetPasswordRequest` | `sessionResetPasswordRequestSchema` | `src/models/session-reset-password-request.ts` |
| `SessionResetPasswordResult` | `sessionResetPasswordResultSchema` | `src/models/session-reset-password-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### startConnectivityManagementSession

- **Signature**: `startConnectivityManagementSession(request: SessionManagement.StartConnectivityManagementSessionRequest, options?: RequestOptions): ApiPromise<LogInResult, SessionManagement.StartConnectivityManagementSessionError>`
- **Wire**: `POST /m2m/v1/session/login`
- **Auth**: `thingspaceOauth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `LogInResult`
- **Error**: `SessionManagement.StartConnectivityManagementSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SessionManagement.StartConnectivityManagementSessionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LogInRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LogInRequest` | `logInRequestSchema` | `src/models/log-in-request.ts` |
| `LogInResult` | `logInResultSchema` | `src/models/log-in-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

