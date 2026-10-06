<!-- Generated file — do not edit; regenerated with the SDK. -->

# HplDeviceManagement — operations

Accessor: `client.hplDeviceManagement` · Source: `src/resources/hpl-device-management.ts` · 1 operation · Request and error types: namespace `HplDeviceManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addDevicesHyperPrecise

- **Server**: `hyperPreciseLocation` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `addDevicesHyperPrecise(request: HplDeviceManagement.AddDevicesHyperPreciseRequest, options?: RequestOptions): ApiPromise<HplAddDevicesRequest[], HplDeviceManagement.AddDevicesHyperPreciseError>`
- **Wire**: `POST /devices/actions/add`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `HplAddDevicesRequest[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `VerizonError` with `kind: "api"`, an instance of `HplDeviceManagement.AddDevicesHyperPreciseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"hyperPreciseLocationResult"` [400] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult2"` [401] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult3"` [403] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult4"` [404] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult5"` [405] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult6"` [406] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult7"` [429] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult8"` [500] `HyperPreciseLocationResult` · `"hyperPreciseLocationResult9"` [default — any status no arm above covers] `HyperPreciseLocationResult` · `"undeclared"` [a `default`-matched body that did not fit `HyperPreciseLocationResult`] `rawBody: ArrayBuffer`

**Fields** — `HplDeviceManagement.AddDevicesHyperPreciseRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `HplAddDevicesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HplAddDevicesRequest` | `hplAddDevicesRequestSchema` | `src/models/hpl-add-devices-request.ts` |
| `HyperPreciseLocationResult` | `hyperPreciseLocationResultSchema` | `src/models/hyper-precise-location-result.ts` |

