<!-- Generated file — do not edit; regenerated with the SDK. -->

# DevicesLocationSubscriptions — operations

Accessor: `client.devicesLocationSubscriptions` · Source: `src/resources/devices-location-subscriptions.ts` · 2 operations · Request and error types: namespace `DevicesLocationSubscriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getLocationServiceSubscriptionStatus

- **Server**: `deviceLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getLocationServiceSubscriptionStatus(request: DevicesLocationSubscriptions.GetLocationServiceSubscriptionStatusRequest, options?: RequestOptions): ApiPromise<DeviceLocationSubscription, DevicesLocationSubscriptions.GetLocationServiceSubscriptionStatusError>`
- **Wire**: `GET /subscriptions/{accountName}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceLocationSubscription`
- **Error**: `DevicesLocationSubscriptions.GetLocationServiceSubscriptionStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DevicesLocationSubscriptions.GetLocationServiceSubscriptionStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceLocationSubscription` | `deviceLocationSubscriptionSchema` | `src/models/device-location-subscription.ts` |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

### getLocationServiceUsage

- **Server**: `deviceLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getLocationServiceUsage(options?: RequestOptions): ApiPromise<Record<string, unknown>, DevicesLocationSubscriptions.GetLocationServiceUsageError>`
- **Wire**: `POST /usage`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DevicesLocationSubscriptions.GetLocationServiceUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"deviceLocationResult"` [400] `DeviceLocationResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceLocationResult` | `deviceLocationResultSchema` | `src/models/device-location-result.ts` |

