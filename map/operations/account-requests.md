<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountRequests — operations

Accessor: `client.accountRequests` · Source: `src/resources/account-requests.ts` · 1 operation · Request and error types: namespace `AccountRequests`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getCurrentAsynchronousRequestStatus

- **Signature**: `getCurrentAsynchronousRequestStatus(request: AccountRequests.GetCurrentAsynchronousRequestStatusRequest, options?: RequestOptions): ApiPromise<AsynchronousRequestResult, AccountRequests.GetCurrentAsynchronousRequestStatusError>`
- **Wire**: `GET /m2m/v1/accounts/{aname}/requests/{requestId}/status`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AsynchronousRequestResult`
- **Error**: `AccountRequests.GetCurrentAsynchronousRequestStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountRequests.GetCurrentAsynchronousRequestStatusRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `aname` | `path` | `string` | yes |
| `requestId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AsynchronousRequestResult` | `asynchronousRequestResultSchema` | `src/models/asynchronous-request-result.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

