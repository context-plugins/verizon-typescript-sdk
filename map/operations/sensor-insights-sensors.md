<!-- Generated file — do not edit; regenerated with the SDK. -->

# SensorInsightsSensors — operations

Accessor: `client.sensorInsightsSensors` · Source: `src/resources/sensor-insights-sensors.ts` · 5 operations · Request and error types: namespace `SensorInsightsSensors`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### sensorInsightsListSensorDevicesRequest

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `sensorInsightsListSensorDevicesRequest(request: SensorInsightsSensors.SensorInsightsListSensorDevicesRequestRequest, options?: RequestOptions): ApiPromise<ResourceDevice[], SensorInsightsSensors.SensorInsightsListSensorDevicesRequestError>`
- **Wire**: `POST /dm/v1/devices/sensors/actions/query`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ResourceDevice[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `VerizonError` with `kind: "api"`, an instance of `SensorInsightsSensors.SensorInsightsListSensorDevicesRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [default — any status no arm above covers] `ManagementError` · `"undeclared"` [a `default`-matched body that did not fit `ManagementError`] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsSensors.SensorInsightsListSensorDevicesRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoListSensorDevicesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoListSensorDevicesRequest` | `dtoListSensorDevicesRequestSchema` | `src/models/dto-list-sensor-devices-request.ts` |
| `ResourceDevice` | `resourceDeviceSchema` | `src/models/resource-device.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

### sensorInsightsOffBoardSensorRequest

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `sensorInsightsOffBoardSensorRequest(request: SensorInsightsSensors.SensorInsightsOffBoardSensorRequestRequest, options?: RequestOptions): ApiPromise<undefined, SensorInsightsSensors.SensorInsightsOffBoardSensorRequestError>`
- **Wire**: `POST /dm/v1/devices/sensors/offboard`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VerizonError` with `kind: "api"`, an instance of `SensorInsightsSensors.SensorInsightsOffBoardSensorRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsSensors.SensorInsightsOffBoardSensorRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoOffBoardSensorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoOffBoardSensorRequest` | `dtoOffBoardSensorRequestSchema` | `src/models/dto-off-board-sensor-request.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |

### sensorInsightsOnBoardSensorRequest

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `sensorInsightsOnBoardSensorRequest(request: SensorInsightsSensors.SensorInsightsOnBoardSensorRequestRequest, options?: RequestOptions): ApiPromise<undefined, SensorInsightsSensors.SensorInsightsOnBoardSensorRequestError>`
- **Wire**: `POST /dm/v1/devices/sensors/onboard`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `VerizonError` with `kind: "api"`, an instance of `SensorInsightsSensors.SensorInsightsOnBoardSensorRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [default — any status no arm above covers] `ManagementError` · `"undeclared"` [a `default`-matched body that did not fit `ManagementError`] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsSensors.SensorInsightsOnBoardSensorRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoOnBoardSensorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoOnBoardSensorRequest` | `dtoOnBoardSensorRequestSchema` | `src/models/dto-on-board-sensor-request.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

### sensorInsightsSensorOffBoardingStatusRequest

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `sensorInsightsSensorOffBoardingStatusRequest(request: SensorInsightsSensors.SensorInsightsSensorOffBoardingStatusRequestRequest, options?: RequestOptions): ApiPromise<DtoSensorOffBoardingStatusResponse, SensorInsightsSensors.SensorInsightsSensorOffBoardingStatusRequestError>`
- **Wire**: `POST /dm/v1/devices/sensors/offboard/status/actions/query`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DtoSensorOffBoardingStatusResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `SensorInsightsSensors.SensorInsightsSensorOffBoardingStatusRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [default — any status no arm above covers] `ManagementError` · `"undeclared"` [a `default`-matched body that did not fit `ManagementError`] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsSensors.SensorInsightsSensorOffBoardingStatusRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoSensorOffBoardStatusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoSensorOffBoardStatusRequest` | `dtoSensorOffBoardStatusRequestSchema` | `src/models/dto-sensor-off-board-status-request.ts` |
| `DtoSensorOffBoardingStatusResponse` | `dtoSensorOffBoardingStatusResponseSchema` | `src/models/dto-sensor-off-boarding-status-response.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

### sensorInsightsSensorOnBoardStatusRequest

- **Server**: `thingspace` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `sensorInsightsSensorOnBoardStatusRequest(request: SensorInsightsSensors.SensorInsightsSensorOnBoardStatusRequestRequest, options?: RequestOptions): ApiPromise<DtoSensorOnBoardingStatusResponse, SensorInsightsSensors.SensorInsightsSensorOnBoardStatusRequestError>`
- **Wire**: `POST /dm/v1/devices/sensors/onboard/status/actions/query`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DtoSensorOnBoardingStatusResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `SensorInsightsSensors.SensorInsightsSensorOnBoardStatusRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"managementError400"` [400] `ManagementError400` · `"managementError"` [401] `ManagementError` · `"managementError403"` [403] `ManagementError403` · `"managementError404"` [404] `ManagementError404` · `"managementError2"` [406] `ManagementError` · `"managementError3"` [415] `ManagementError` · `"managementError4"` [429] `ManagementError` · `"managementError500"` [500] `ManagementError500` · `"managementError5"` [default — any status no arm above covers] `ManagementError` · `"undeclared"` [a `default`-matched body that did not fit `ManagementError`] `rawBody: ArrayBuffer`

**Fields** — `SensorInsightsSensors.SensorInsightsSensorOnBoardStatusRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DtoSensorOnBoardStatusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DtoSensorOnBoardStatusRequest` | `dtoSensorOnBoardStatusRequestSchema` | `src/models/dto-sensor-on-board-status-request.ts` |
| `DtoSensorOnBoardingStatusResponse` | `dtoSensorOnBoardingStatusResponseSchema` | `src/models/dto-sensor-on-boarding-status-response.ts` |
| `ManagementError400` | `managementError400Schema` | `src/models/management-error400.ts` |
| `ManagementError` | `managementErrorSchema` | `src/models/management-error.ts` |
| `ManagementError403` | `managementError403Schema` | `src/models/management-error403.ts` |
| `ManagementError404` | `managementError404Schema` | `src/models/management-error404.ts` |
| `ManagementError500` | `managementError500Schema` | `src/models/management-error500.ts` |

