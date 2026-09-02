<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoftwareManagementLicensesV3 — operations

Accessor: `client.softwareManagementLicensesV3` · Source: `src/resources/software-management-licenses-v3.ts` · 3 operations · Request and error types: namespace `SoftwareManagementLicensesV3`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### assignLicensesToDevices3

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `assignLicensesToDevices3(request: SoftwareManagementLicensesV3.AssignLicensesToDevices3Request, options?: RequestOptions): ApiPromise<V3LicenseAssignedRemovedResult, SoftwareManagementLicensesV3.AssignLicensesToDevices3Error>`
- **Wire**: `POST /licenses/{acc}/assign`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `V3LicenseAssignedRemovedResult`
- **Error**: `SoftwareManagementLicensesV3.AssignLicensesToDevices3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementLicensesV3.AssignLicensesToDevices3Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |
| `body` | `body` | `V3LicenseImei` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3LicenseImei` | `v3LicenseImeiSchema` | `src/models/v3-license-imei.ts` |
| `V3LicenseAssignedRemovedResult` | `v3LicenseAssignedRemovedResultSchema` | `src/models/v3-license-assigned-removed-result.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

### getAccountLicensesStatus

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getAccountLicensesStatus(request: SoftwareManagementLicensesV3.GetAccountLicensesStatusRequest, options?: RequestOptions): ApiPromise<V3LicenseSummary, SoftwareManagementLicensesV3.GetAccountLicensesStatusError>`
- **Wire**: `GET /licenses/{acc}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V3LicenseSummary`
- **Error**: `SoftwareManagementLicensesV3.GetAccountLicensesStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementLicensesV3.GetAccountLicensesStatusRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |
| `lastSeenDeviceId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3LicenseSummary` | `v3LicenseSummarySchema` | `src/models/v3-license-summary.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

### removeLicensesFromDevices3

- **Server**: `softwareManagementV3` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `removeLicensesFromDevices3(request: SoftwareManagementLicensesV3.RemoveLicensesFromDevices3Request, options?: RequestOptions): ApiPromise<V3LicenseAssignedRemovedResult, SoftwareManagementLicensesV3.RemoveLicensesFromDevices3Error>`
- **Wire**: `POST /licenses/{acc}/remove`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `V3LicenseAssignedRemovedResult`
- **Error**: `SoftwareManagementLicensesV3.RemoveLicensesFromDevices3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV3Result"` [400] `FotaV3Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoftwareManagementLicensesV3.RemoveLicensesFromDevices3Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |
| `body` | `body` | `V3LicenseImei` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V3LicenseImei` | `v3LicenseImeiSchema` | `src/models/v3-license-imei.ts` |
| `V3LicenseAssignedRemovedResult` | `v3LicenseAssignedRemovedResultSchema` | `src/models/v3-license-assigned-removed-result.ts` |
| `FotaV3Result` | `fotaV3ResultSchema` | `src/models/fota-v3-result.ts` |

