<!-- Generated file — do not edit; regenerated with the SDK. -->

# EtxAppConfiguration — operations

Accessor: `client.etxAppConfiguration` · Source: `src/resources/etx-app-configuration.ts` · 5 operations · Request and error types: namespace `EtxAppConfiguration`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createConfiguration

- **Server**: `impServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `createConfiguration(request: EtxAppConfiguration.CreateConfigurationRequest, options?: RequestOptions): ApiPromise<GeoFenceConfigurationResponse, EtxAppConfiguration.CreateConfigurationError>`
- **Wire**: `POST /api/v1/application/configurations/geofence`
- **Auth**: all of `thingspaceOauth`, `sessionToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GeoFenceConfigurationResponse`
- **Error**: `EtxAppConfiguration.CreateConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"responseErrorModel"` [400] `ResponseErrorModel` · `"responseErrorModel2"` [403] `ResponseErrorModel` · `"responseErrorModel3"` [429] `ResponseErrorModel` · `"responseErrorModel4"` [400–599] `ResponseErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EtxAppConfiguration.CreateConfigurationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vendorId` | `header` | `VendorID` | `string` | yes |
| `body` | `body` | — | `GeoFenceConfigurationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GeoFenceConfigurationRequest` | `geoFenceConfigurationRequestSchema` | `src/models/geo-fence-configuration-request.ts` |
| `GeoFenceConfigurationResponse` | `geoFenceConfigurationResponseSchema` | `src/models/geo-fence-configuration-response.ts` |
| `ResponseErrorModel` | `responseErrorModelSchema` | `src/models/response-error-model.ts` |

### deleteConfiguration

- **Server**: `impServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteConfiguration(request: EtxAppConfiguration.DeleteConfigurationRequest, options?: RequestOptions): ApiPromise<undefined, EtxAppConfiguration.DeleteConfigurationError>`
- **Wire**: `DELETE /api/v1/application/configurations/geofence`
- **Auth**: all of `thingspaceOauth`, `sessionToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `EtxAppConfiguration.DeleteConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"responseErrorModel"` [403] `ResponseErrorModel` · `"responseErrorModel2"` [429] `ResponseErrorModel` · `"responseErrorModel3"` [400–599] `ResponseErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EtxAppConfiguration.DeleteConfigurationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `query` | — | `string` | yes |
| `vendorId` | `header` | `VendorID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResponseErrorModel` | `responseErrorModelSchema` | `src/models/response-error-model.ts` |

### getConfiguration

- **Server**: `impServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getConfiguration(request: EtxAppConfiguration.GetConfigurationRequest, options?: RequestOptions): ApiPromise<GeoFenceConfigurationResponse, EtxAppConfiguration.GetConfigurationError>`
- **Wire**: `GET /api/v1/application/configurations/geofence`
- **Auth**: all of `thingspaceOauth`, `sessionToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GeoFenceConfigurationResponse`
- **Error**: `EtxAppConfiguration.GetConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"responseErrorModel"` [403] `ResponseErrorModel` · `"responseErrorModel2"` [404] `ResponseErrorModel` · `"responseErrorModel3"` [429] `ResponseErrorModel` · `"responseErrorModel4"` [400–599] `ResponseErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EtxAppConfiguration.GetConfigurationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `query` | — | `string` | yes |
| `vendorId` | `header` | `VendorID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GeoFenceConfigurationResponse` | `geoFenceConfigurationResponseSchema` | `src/models/geo-fence-configuration-response.ts` |
| `ResponseErrorModel` | `responseErrorModelSchema` | `src/models/response-error-model.ts` |

### getConfigurationList

- **Server**: `impServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getConfigurationList(request: EtxAppConfiguration.GetConfigurationListRequest, options?: RequestOptions): ApiPromise<ConfigurationListItem[], EtxAppConfiguration.GetConfigurationListError>`
- **Wire**: `GET /api/v1/application/configurations/geofence/ids`
- **Auth**: all of `thingspaceOauth`, `sessionToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConfigurationListItem[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `EtxAppConfiguration.GetConfigurationListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"responseErrorModel"` [403] `ResponseErrorModel` · `"responseErrorModel2"` [404] `ResponseErrorModel` · `"responseErrorModel3"` [429] `ResponseErrorModel` · `"responseErrorModel4"` [400–599] `ResponseErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EtxAppConfiguration.GetConfigurationListRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vendorId` | `header` | `VendorID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConfigurationListItem` | `configurationListItemSchema` | `src/models/configuration-list-item.ts` |
| `ResponseErrorModel` | `responseErrorModelSchema` | `src/models/response-error-model.ts` |

### updateConfiguration

- **Server**: `impServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `updateConfiguration(request: EtxAppConfiguration.UpdateConfigurationRequest, options?: RequestOptions): ApiPromise<undefined, EtxAppConfiguration.UpdateConfigurationError>`
- **Wire**: `PUT /api/v1/application/configurations/geofence`
- **Auth**: all of `thingspaceOauth`, `sessionToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `EtxAppConfiguration.UpdateConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"responseErrorModel"` [400] `ResponseErrorModel` · `"responseErrorModel2"` [403] `ResponseErrorModel` · `"responseErrorModel3"` [404] `ResponseErrorModel` · `"responseErrorModel4"` [429] `ResponseErrorModel` · `"responseErrorModel5"` [400–599] `ResponseErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EtxAppConfiguration.UpdateConfigurationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `query` | — | `string` | yes |
| `vendorId` | `header` | `VendorID` | `string` | yes |
| `body` | `body` | — | `GeoFenceConfigurationUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GeoFenceConfigurationUpdateRequest` | `geoFenceConfigurationUpdateRequestSchema` | `src/models/geo-fence-configuration-update-request.ts` |
| `ResponseErrorModel` | `responseErrorModelSchema` | `src/models/response-error-model.ts` |

