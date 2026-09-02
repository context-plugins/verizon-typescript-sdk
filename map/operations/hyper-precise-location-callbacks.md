<!-- Generated file — do not edit; regenerated with the SDK. -->

# HyperPreciseLocationCallbacks — operations

Accessor: `client.hyperPreciseLocationCallbacks` · Source: `src/resources/hyper-precise-location-callbacks.ts` · 3 operations · Request and error types: namespace `HyperPreciseLocationCallbacks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deregisterCallback6

- **Server**: `hyperPreciseLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `deregisterCallback6(request: HyperPreciseLocationCallbacks.DeregisterCallback6Request, options?: RequestOptions): ApiPromise<undefined, HyperPreciseLocationCallbacks.DeregisterCallback6Error>`
- **Wire**: `DELETE /callbacks`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `HyperPreciseLocationCallbacks.DeregisterCallback6Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"hyperPreciseLocationResult"` [400] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult2"` [401] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult3"` [403] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult4"` [404] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult5"` [409] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult6"` [500] `HyperPreciseLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HyperPreciseLocationCallbacks.DeregisterCallback6Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountNumber` | `query` | `string` | yes |
| `service` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HyperPreciseLocationResult` | `hyperPreciseLocationResultSchema` | `src/models/hyper-precise-location-result.ts` |

### listRegisteredCallbacks6

- **Server**: `hyperPreciseLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listRegisteredCallbacks6(request: HyperPreciseLocationCallbacks.ListRegisteredCallbacks6Request, options?: RequestOptions): ApiPromise<CallbackCreated[], HyperPreciseLocationCallbacks.ListRegisteredCallbacks6Error>`
- **Wire**: `GET /callbacks`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CallbackCreated[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `HyperPreciseLocationCallbacks.ListRegisteredCallbacks6Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"hyperPreciseLocationResult"` [400] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult2"` [401] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult3"` [403] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult4"` [404] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult5"` [409] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult6"` [500] `HyperPreciseLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HyperPreciseLocationCallbacks.ListRegisteredCallbacks6Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountNumber` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CallbackCreated` | `callbackCreatedSchema` | `src/models/callback-created.ts` |
| `HyperPreciseLocationResult` | `hyperPreciseLocationResultSchema` | `src/models/hyper-precise-location-result.ts` |

### registerCallback6

- **Server**: `hyperPreciseLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `registerCallback6(request: HyperPreciseLocationCallbacks.RegisterCallback6Request, options?: RequestOptions): ApiPromise<CallbackRegistered, HyperPreciseLocationCallbacks.RegisterCallback6Error>`
- **Wire**: `POST /callbacks`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CallbackRegistered`
- **Error**: `HyperPreciseLocationCallbacks.RegisterCallback6Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"hyperPreciseLocationResult"` [400] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult2"` [401] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult3"` [403] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult4"` [404] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult5"` [409] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult6"` [500] `HyperPreciseLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HyperPreciseLocationCallbacks.RegisterCallback6Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountNumber` | `query` | `string` | yes |
| `body` | `body` | `HyperPreciseLocationCallback` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HyperPreciseLocationCallback` | `hyperPreciseLocationCallbackSchema` | `src/models/hyper-precise-location-callback.ts` |
| `CallbackRegistered` | `callbackRegisteredSchema` | `src/models/callback-registered.ts` |
| `HyperPreciseLocationResult` | `hyperPreciseLocationResultSchema` | `src/models/hyper-precise-location-result.ts` |

