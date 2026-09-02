<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoftwareManagementLicensesV1 — operations

Accessor: `client.softwareManagementLicensesV1` · Source: `src/resources/software-management-licenses-v1.ts` · 5 operations · Request and error types: namespace `SoftwareManagementLicensesV1`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### assignLicensesToDevices

- **Server**: `softwareManagementV1` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `assignLicensesToDevices(request: SoftwareManagementLicensesV1.AssignLicensesToDevicesRequest, options?: RequestOptions): ApiPromise<V1LicensesAssignedRemovedResult, SoftwareManagementLicensesV1.AssignLicensesToDevicesError>`
- **Wire**: `POST /licenses/{account}/assign`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `V1LicensesAssignedRemovedResult`
- **Error**: `SoftwareManagementLicensesV1.AssignLicensesToDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV1Result"` [400] `FotaV1Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementLicensesV1.AssignLicensesToDevicesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `body` | `body` | `V1LicensesAssignedRemovedRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1LicensesAssignedRemovedRequest` | `v1LicensesAssignedRemovedRequestSchema` | `src/models/v1-licenses-assigned-removed-request.ts` |
| `V1LicensesAssignedRemovedResult` | `v1LicensesAssignedRemovedResultSchema` | `src/models/v1-licenses-assigned-removed-result.ts` |
| `FotaV1Result` | `fotaV1ResultSchema` | `src/models/fota-v1-result.ts` |

### createListOfLicensesToRemove

- **Server**: `softwareManagementV1` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `createListOfLicensesToRemove(request: SoftwareManagementLicensesV1.CreateListOfLicensesToRemoveRequest, options?: RequestOptions): ApiPromise<V1ListOfLicensesToRemoveResult, SoftwareManagementLicensesV1.CreateListOfLicensesToRemoveError>`
- **Wire**: `POST /licenses/{account}/cancel`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `V1ListOfLicensesToRemoveResult`
- **Error**: `SoftwareManagementLicensesV1.CreateListOfLicensesToRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV1Result"` [400] `FotaV1Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementLicensesV1.CreateListOfLicensesToRemoveRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `body` | `body` | `V1ListOfLicensesToRemoveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ListOfLicensesToRemoveRequest` | `v1ListOfLicensesToRemoveRequestSchema` | `src/models/v1-list-of-licenses-to-remove-request.ts` |
| `V1ListOfLicensesToRemoveResult` | `v1ListOfLicensesToRemoveResultSchema` | `src/models/v1-list-of-licenses-to-remove-result.ts` |
| `FotaV1Result` | `fotaV1ResultSchema` | `src/models/fota-v1-result.ts` |

### deleteListOfLicensesToRemove

- **Server**: `softwareManagementV1` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteListOfLicensesToRemove(request: SoftwareManagementLicensesV1.DeleteListOfLicensesToRemoveRequest, options?: RequestOptions): ApiPromise<undefined, SoftwareManagementLicensesV1.DeleteListOfLicensesToRemoveError>`
- **Wire**: `DELETE /licenses/{account}/cancel`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SoftwareManagementLicensesV1.DeleteListOfLicensesToRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementLicensesV1.DeleteListOfLicensesToRemoveRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |

### listLicensesToRemove

- **Server**: `softwareManagementV1` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listLicensesToRemove(request: SoftwareManagementLicensesV1.ListLicensesToRemoveRequest, options?: RequestOptions): ApiPromise<V1ListOfLicensesToRemove, SoftwareManagementLicensesV1.ListLicensesToRemoveError>`
- **Wire**: `GET /licenses/{account}/cancel/index/{startIndex}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ListOfLicensesToRemove`
- **Error**: `SoftwareManagementLicensesV1.ListLicensesToRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV1Result"` [400] `FotaV1Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementLicensesV1.ListLicensesToRemoveRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `startIndex` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ListOfLicensesToRemove` | `v1ListOfLicensesToRemoveSchema` | `src/models/v1-list-of-licenses-to-remove.ts` |
| `FotaV1Result` | `fotaV1ResultSchema` | `src/models/fota-v1-result.ts` |

### removeLicensesFromDevices

- **Server**: `softwareManagementV1` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `removeLicensesFromDevices(request: SoftwareManagementLicensesV1.RemoveLicensesFromDevicesRequest, options?: RequestOptions): ApiPromise<V1LicensesAssignedRemovedResult, SoftwareManagementLicensesV1.RemoveLicensesFromDevicesError>`
- **Wire**: `POST /licenses/{account}/remove`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `V1LicensesAssignedRemovedResult`
- **Error**: `SoftwareManagementLicensesV1.RemoveLicensesFromDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV1Result"` [400] `FotaV1Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementLicensesV1.RemoveLicensesFromDevicesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `body` | `body` | `V1LicensesAssignedRemovedRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1LicensesAssignedRemovedRequest` | `v1LicensesAssignedRemovedRequestSchema` | `src/models/v1-licenses-assigned-removed-request.ts` |
| `V1LicensesAssignedRemovedResult` | `v1LicensesAssignedRemovedResultSchema` | `src/models/v1-licenses-assigned-removed-result.ts` |
| `FotaV1Result` | `fotaV1ResultSchema` | `src/models/fota-v1-result.ts` |

