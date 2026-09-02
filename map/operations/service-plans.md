<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServicePlans — operations

Accessor: `client.servicePlans` · Source: `src/resources/service-plans.ts` · 1 operation · Request and error types: namespace `ServicePlans`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listAccountServicePlans

- **Signature**: `listAccountServicePlans(request: ServicePlans.ListAccountServicePlansRequest, options?: RequestOptions): ApiPromise<ServicePlan[], ServicePlans.ListAccountServicePlansError>`
- **Wire**: `GET /m2m/v1/plans/{aname}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ServicePlan[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ServicePlans.ListAccountServicePlansError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectivityManagementResult"` [400] `ConnectivityManagementResult` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServicePlans.ListAccountServicePlansRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `aname` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServicePlan` | `servicePlanSchema` | `src/models/service-plan.ts` |
| `ConnectivityManagementResult` | `connectivityManagementResultSchema` | `src/models/connectivity-management-result.ts` |

