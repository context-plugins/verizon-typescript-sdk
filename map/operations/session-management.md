<!-- Generated file — do not edit; regenerated with the SDK. -->

# SessionManagement — operations

Accessor: `client.sessionManagement` · Source: `src/resources/session-management.ts` · 3 operations · Request and error types: namespace `SessionManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### endConnectivityManagementSession

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `endConnectivityManagementSession(options?: RequestOptions): ApiPromise<LogOutRequest, SessionManagement.EndConnectivityManagementSessionError>`
- **Wire**: `POST /m2m/v1/session/logout`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LogOutRequest`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `SessionManagement.EndConnectivityManagementSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `LogOutRequest` | `logOutRequestSchema` | `src/models/log-out-request.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

### resetConnectivityManagementPassword

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `resetConnectivityManagementPassword(request: SessionManagement.ResetConnectivityManagementPasswordRequest, options?: RequestOptions): ApiPromise<SessionResetPasswordResult, SessionManagement.ResetConnectivityManagementPasswordError>`
- **Wire**: `PUT /m2m/v1/session/password/actions/reset`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SessionResetPasswordResult`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `SessionManagement.ResetConnectivityManagementPasswordError` — **typed arms**, narrowed on `err.payload.kind`
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

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `startConnectivityManagementSession(request: SessionManagement.StartConnectivityManagementSessionRequest, options?: RequestOptions): ApiPromise<LogInResult, SessionManagement.StartConnectivityManagementSessionError>`
- **Wire**: `POST /m2m/v1/session/login`
- **Auth**: `thingspaceOauth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LogInResult`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `SessionManagement.StartConnectivityManagementSessionError` — **typed arms**, narrowed on `err.payload.kind`
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

