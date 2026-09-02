<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoftwareManagementLicensesV2 — operations

Accessor: `client.softwareManagementLicensesV2` · Source: `src/resources/software-management-licenses-v2.ts` · 6 operations · Request and error types: namespace `SoftwareManagementLicensesV2`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### assignLicensesToDevices2

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `assignLicensesToDevices2(request: SoftwareManagementLicensesV2.AssignLicensesToDevices2Request, options?: RequestOptions): ApiPromise<V2LicensesAssignedRemovedResult, SoftwareManagementLicensesV2.AssignLicensesToDevices2Error>`
- **Wire**: `POST /licenses/{account}/assign`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2LicensesAssignedRemovedResult`
- **Error**: `SoftwareManagementLicensesV2.AssignLicensesToDevices2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementLicensesV2.AssignLicensesToDevices2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2LicensesAssignedRemovedResult` | `v2LicensesAssignedRemovedResultSchema` | `src/models/v2-licenses-assigned-removed-result.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### createListOfLicensesToRemove2

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `createListOfLicensesToRemove2(request: SoftwareManagementLicensesV2.CreateListOfLicensesToRemove2Request, options?: RequestOptions): ApiPromise<V2ListOfLicensesToRemoveResult, SoftwareManagementLicensesV2.CreateListOfLicensesToRemove2Error>`
- **Wire**: `POST /licenses/{account}/cancel`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2ListOfLicensesToRemoveResult`
- **Error**: `SoftwareManagementLicensesV2.CreateListOfLicensesToRemove2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementLicensesV2.CreateListOfLicensesToRemove2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2ListOfLicensesToRemoveResult` | `v2ListOfLicensesToRemoveResultSchema` | `src/models/v2-list-of-licenses-to-remove-result.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### deleteListOfLicensesToRemove2

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteListOfLicensesToRemove2(request: SoftwareManagementLicensesV2.DeleteListOfLicensesToRemove2Request, options?: RequestOptions): ApiPromise<FotaV2SuccessResult, SoftwareManagementLicensesV2.DeleteListOfLicensesToRemove2Error>`
- **Wire**: `DELETE /licenses/{account}/cancel`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FotaV2SuccessResult`
- **Error**: `SoftwareManagementLicensesV2.DeleteListOfLicensesToRemove2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementLicensesV2.DeleteListOfLicensesToRemove2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FotaV2SuccessResult` | `fotaV2SuccessResultSchema` | `src/models/fota-v2-success-result.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### getAccountLicenseStatus2

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getAccountLicenseStatus2(request: SoftwareManagementLicensesV2.GetAccountLicenseStatus2Request, options?: RequestOptions): ApiPromise<V2LicenseSummary, SoftwareManagementLicensesV2.GetAccountLicenseStatus2Error>`
- **Wire**: `GET /licenses/{account}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2LicenseSummary`
- **Error**: `SoftwareManagementLicensesV2.GetAccountLicenseStatus2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementLicensesV2.GetAccountLicenseStatus2Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `lastSeenDeviceId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2LicenseSummary` | `v2LicenseSummarySchema` | `src/models/v2-license-summary.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### listLicensesToRemove2

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `listLicensesToRemove2(request: SoftwareManagementLicensesV2.ListLicensesToRemove2Request, options?: RequestOptions): ApiPromise<V2ListOfLicensesToRemove, SoftwareManagementLicensesV2.ListLicensesToRemove2Error>`
- **Wire**: `GET /licenses/{account}/cancel`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2ListOfLicensesToRemove`
- **Error**: `SoftwareManagementLicensesV2.ListLicensesToRemove2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementLicensesV2.ListLicensesToRemove2Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |
| `startIndex` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2ListOfLicensesToRemove` | `v2ListOfLicensesToRemoveSchema` | `src/models/v2-list-of-licenses-to-remove.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### removeLicensesFromDevices2

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `removeLicensesFromDevices2(request: SoftwareManagementLicensesV2.RemoveLicensesFromDevices2Request, options?: RequestOptions): ApiPromise<V2LicensesAssignedRemovedResult, SoftwareManagementLicensesV2.RemoveLicensesFromDevices2Error>`
- **Wire**: `POST /licenses/{account}/remove`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2LicensesAssignedRemovedResult`
- **Error**: `SoftwareManagementLicensesV2.RemoveLicensesFromDevices2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementLicensesV2.RemoveLicensesFromDevices2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `account` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2LicensesAssignedRemovedResult` | `v2LicensesAssignedRemovedResultSchema` | `src/models/v2-licenses-assigned-removed-result.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

