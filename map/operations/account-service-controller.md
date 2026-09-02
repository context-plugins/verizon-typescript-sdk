<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountServiceController — operations

Accessor: `client.accountServiceController` · Source: `src/resources/account-service-controller.ts` · 1 operation · Request and error types: namespace `AccountServiceController`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getAccountInformationUsingGet

- **Signature**: `getAccountInformationUsingGet(request: AccountServiceController.GetAccountInformationUsingGetRequest, options?: RequestOptions): ApiPromise<GetAccountInformationResponseforplanner, AccountServiceController.GetAccountInformationUsingGetError>`
- **Wire**: `GET /v1/accounts/{accountName}`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetAccountInformationResponseforplanner`
- **Error**: `AccountServiceController.GetAccountInformationUsingGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restErrorResponseforplanner"` [400] `RestErrorResponseforplanner` · `"authRestErrorResponseforplanner"` [401] `AuthRestErrorResponseforplanner` · `"restErrorResponseforplanner2"` [403] `RestErrorResponseforplanner` · `"restErrorResponseforplanner3"` [404] `RestErrorResponseforplanner` · `"restErrorResponseforplanner4"` [406] `RestErrorResponseforplanner` · `"restErrorResponseforplanner5"` [429] `RestErrorResponseforplanner` · `"restErrorResponseforplanner6"` [400–599] `RestErrorResponseforplanner` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountServiceController.GetAccountInformationUsingGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountName` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetAccountInformationResponseforplanner` | `getAccountInformationResponseforplannerSchema` | `src/models/get-account-information-responseforplanner.ts` |
| `RestErrorResponseforplanner` | `restErrorResponseforplannerSchema` | `src/models/rest-error-responseforplanner.ts` |
| `AuthRestErrorResponseforplanner` | `authRestErrorResponseforplannerSchema` | `src/models/auth-rest-error-responseforplanner.ts` |

