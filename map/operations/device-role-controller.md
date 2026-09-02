<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeviceRoleController — operations

Accessor: `client.deviceRoleController` · Source: `src/resources/device-role-controller.ts` · 1 operation · Request and error types: namespace `DeviceRoleController`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getAclRulesByVendorId

- **Server**: `impServer` — not the `hyperPreciseCredentials` group; see Servers & auth in sdk-map.md
- **Signature**: `getAclRulesByVendorId(request: DeviceRoleController.GetAclRulesByVendorIdRequest, options?: RequestOptions): ApiPromise<DeviceRole[], DeviceRoleController.GetAclRulesByVendorIdError>`
- **Wire**: `GET /api/v1/device-roles/vendor`
- **Auth**: all of `thingspaceOauth`, `sessionToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeviceRole[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DeviceRoleController.GetAclRulesByVendorIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] `string` · `"error400"` [400] `string` · `"error403"` [403] `string` · `"error406"` [406] `string` · `"error429"` [429] `string` · `"errorDefault"` [400–599] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceRoleController.GetAclRulesByVendorIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vendorId` | `query` | `VendorID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceRole` | `deviceRoleSchema` | `src/models/device-role.ts` |

