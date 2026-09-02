<!-- Generated file — do not edit; regenerated with the SDK. -->

# UpdateTriggers — operations

Accessor: `client.updateTriggers` · Source: `src/resources/update-triggers.ts` · 1 operation · Request and error types: namespace `UpdateTriggers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `verizon`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### updateAllAvailableTriggers

- **Signature**: `updateAllAvailableTriggers(request: UpdateTriggers.UpdateAllAvailableTriggersRequest, options?: RequestOptions): ApiPromise<Success, UpdateTriggers.UpdateAllAvailableTriggersError>`
- **Wire**: `PUT /m2m/v2/triggers`
- **Auth**: all of `thingspaceOauth`, `vzM2MToken` — both are sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Success`
- **Error**: `UpdateTriggers.UpdateAllAvailableTriggersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"readySimRestErrorResponse"` [400–599] `ReadySimRestErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UpdateTriggers.UpdateAllAvailableTriggersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RequestTrigger` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RequestTrigger` | `requestTriggerSchema` | `src/models/request-trigger.ts` |
| `Success` | `successSchema` | `src/models/success.ts` |
| `ReadySimRestErrorResponse` | `readySimRestErrorResponseSchema` | `src/models/ready-sim-rest-error-response.ts` |

