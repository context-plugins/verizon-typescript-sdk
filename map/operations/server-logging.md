<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServerLogging — operations

Accessor: `client.serverLogging` · Source: `src/resources/server-logging.ts` · 1 operation · Request and error types: namespace `ServerLogging`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getDeviceCheckInHistory

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getDeviceCheckInHistory(request: ServerLogging.GetDeviceCheckInHistoryRequest, options?: RequestOptions): ApiPromise<CheckInHistoryItem[], ServerLogging.GetDeviceCheckInHistoryError>`
- **Wire**: `GET /logging/{account}/devices/{deviceId}/checkInHistory`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CheckInHistoryItem[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ServerLogging.GetDeviceCheckInHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServerLogging.GetDeviceCheckInHistoryRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `deviceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckInHistoryItem` | `checkInHistoryItemSchema` | `src/models/check-in-history-item.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

