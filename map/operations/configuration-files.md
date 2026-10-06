<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConfigurationFiles — operations

Accessor: `client.configurationFiles` · Source: `src/resources/configuration-files.ts` · 2 operations · Request and error types: namespace `ConfigurationFiles`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getListOfFiles

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getListOfFiles(request: ConfigurationFiles.GetListOfFilesRequest, options?: RequestOptions): ApiPromise<RetrievesAvailableFilesResponseList, ConfigurationFiles.GetListOfFilesError>`
- **Wire**: `GET /files/{acc}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrievesAvailableFilesResponseList`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `ConfigurationFiles.GetListOfFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConfigurationFiles.GetListOfFilesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |
| `distributionType` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrievesAvailableFilesResponseList` | `retrievesAvailableFilesResponseListSchema` | `src/models/retrieves-available-files-response-list.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

### uploadConfigFile

- **Server**: `softwareManagementV2` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `uploadConfigFile(request: ConfigurationFiles.UploadConfigFileRequest, options?: RequestOptions): ApiPromise<UploadConfigurationFilesResponse, ConfigurationFiles.UploadConfigFileError>`
- **Wire**: `POST /files/{acc}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `multipart/form-data` — every field marked `form`. `fileupload` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UploadConfigurationFilesResponse`
- **Error**: `VerizonError` with `kind: "api"`, an instance of `ConfigurationFiles.UploadConfigFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fotaV2Result"` [400] `FotaV2Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConfigurationFiles.UploadConfigFileRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `acc` | `path` | `string` | yes |
| `fileupload` | `form` | `FileInput` | no |
| `fileVersion` | `form` | `string` | no |
| `make` | `form` | `string` | no |
| `model` | `form` | `string` | no |
| `localTargetPath` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadConfigurationFilesResponse` | `uploadConfigurationFilesResponseSchema` | `src/models/upload-configuration-files-response.ts` |
| `FotaV2Result` | `fotaV2ResultSchema` | `src/models/fota-v2-result.ts` |

