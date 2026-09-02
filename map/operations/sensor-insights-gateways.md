<!-- Generated file — do not edit; regenerated with the SDK. -->

# SensorInsightsGateways — operations

Accessor: `client.sensorInsightsGateways` · Source: `src/resources/sensor-insights-gateways.ts` · 1 operation · Request and error types: namespace `SensorInsightsGateways`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### sensorInsightsListGatewayDevicesRequest

- **Signature**: `sensorInsightsListGatewayDevicesRequest(request: SensorInsightsGateways.SensorInsightsListGatewayDevicesRequestRequest, options?: RequestOptions): ApiPromise<ResourceDevice[], SensorInsightsGateways.SensorInsightsListGatewayDevicesRequestError>`
- **Wire**: `POST /dm/v1/devices/gateways/actions/query`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ResourceDevice[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SensorInsightsGateways.SensorInsightsListGatewayDevicesRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [400–599] `ManagementError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsGateways.SensorInsightsListGatewayDevicesRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoListDevicesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoListDevicesRequest` | `dtoListDevicesRequestSchema` | `src/models/dto-list-devices-request.ts` |
| `ResourceDevice` | `resourceDeviceSchema` | `src/models/resource-device.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

