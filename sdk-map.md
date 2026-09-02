<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Verizon (TypeScript)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, request-field placement, error types and server wiring **by lookup**. Model shapes are *not* duplicated here — the map names the file declaring each type and the schema value exported beside it; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Verizon |
| Package | `verizon` |
| Package version | `v1.0` |
| API spec version | `v1.0` |
| Import specifier | `verizon` — the package root is the **only** entry. Deep imports (`verizon/models/...`) do not resolve; the `exports` map exposes `.` and `./package.json` and nothing else |
| Module format | dual ESM + CommonJS, as folder dialects (`dist/esm`, `dist/commonjs`), each with its own `package.json` marker. No `.mjs`, `.cjs`, `.d.mts` or `.d.cts` files exist |
| Node floor | `>=20` (`engines.node`) |
| TypeScript floor | a resolver that reads `exports` (4.7+), plus whatever the pinned `zod` requires — `zod@4` needs 5.5 or later. The public `.d.ts` chain reaches `zod/v4-mini`, so this is a real constraint rather than a build-tool version |
| Runtime dependency | `zod` (`^3.25.0 \|\| ^4.0.0`), imported as `zod/v4-mini`. The only runtime dependency |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `package.json` — never to the page that carries them: a page two directories deep writes exactly what a page at the root would. The package ships its `src/` tree, so the same paths resolve inside `node_modules/verizon/` too. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

---

## Getting a client

```ts
import { ServerEnvironment, VerizonClient } from "verizon";

const client = new VerizonClient({
  serverEnvironment: ServerEnvironment.Production,
  thingspaceOauth: { clientId: "YOUR_CLIENT_ID", clientSecret: "YOUR_CLIENT_SECRET" },
  vzM2MToken: "YOUR_API_KEY",
  sessionToken: "YOUR_API_KEY",
  thingspaceOauth1: { clientId: "YOUR_CLIENT_ID", clientSecret: "YOUR_CLIENT_SECRET" },
});
```

The only constructor is `new VerizonClient(clientOptions: Partial<ClientOptions> = {})`, so `new VerizonClient()` is valid. Resources are memoized lazy getters on the client — `client.accountServiceController`, `client.intelligenceServiceController`, `client.deviceManagement`, `client.accounts`, `client.deviceGroups`, `client.sms`, `client.sessionManagement`, `client.connectivityCallbacks`, `client.accountRequests`, `client.servicePlans`, `client.deviceDiagnostics`, `client.deviceMonitoring`, `client.deviceProfileManagement`, `client.eUiccDeviceProfileManagement`, `client.devicesLocations`, `client.exclusions`, `client.devicesLocationSubscriptions`, `client.deviceLocationCallbacks`, `client.usageTriggerManagement`, `client.billing`, `client.softwareManagementSubscriptionsV1`, `client.softwareManagementLicensesV1`, `client.firmwareV1`, `client.softwareManagementCallbacksV1`, `client.softwareManagementReportsV1`, `client.softwareManagementSubscriptionsV2`, `client.softwareManagementLicensesV2`, `client.campaignsV2`, `client.softwareManagementCallbacksV2`, `client.softwareManagementReportsV2`, `client.clientLogging`, `client.serverLogging`, `client.configurationFiles`, `client.softwareManagementSubscriptionsV3`, `client.softwareManagementLicensesV3`, `client.campaignsV3`, `client.softwareManagementReportsV3`, `client.firmwareV3`, `client.accountDevices`, `client.softwareManagementCallbacksV3`, `client.simSecureForIoTLicenses`, `client.accountSubscriptions`, `client.diagnosticsSubscriptions`, `client.diagnosticsObservations`, `client.diagnosticsHistory`, `client.diagnosticsSettings`, `client.diagnosticsCallbacks`, `client.diagnosticsFactoryReset`, `client.targets`, `client.cloudConnectorSubscriptions`, `client.cloudConnectorDevices`, `client.hplDeviceManagement`, `client.deviceServiceManagement`, `client.deviceReports`, `client.hyperPreciseLocationCallbacks`, `client.deviceCredentialManagement`, `client.anomalySettings`, `client.anomalyTriggers`, `client.anomalyTriggersV2`, `client.wirelessNetworkPerformance`, `client.managingESimProfiles`, `client.deviceSmsMessaging`, `client.deviceActions`, `client.thingSpaceQualityOfServiceApiActions`, `client.pwn`, `client.promotionPeriodInformation`, `client.retrieveTheTriggers`, `client.updateTriggers`, `client.simActions`, `client.globalReporting`, `client.deviceRoleController`, `client.etxAppConfiguration`, `client.etxRegistration`, `client.mapMessageController`, `client.retrieveRatePlanList`, `client.createPricePlanTriggers`, `client.updatePricePlanTriggers`, `client.gbiDeviceActions5`, `client.sensorInsightsSensors`, `client.sensorInsightsDevices`, `client.sensorInsightsGateways`, `client.sensorInsightsSmartAlerts`, `client.sensorInsightsRules`, `client.sensorInsightsHealthScore`, `client.sensorInsightsNotificationGroups`, `client.sensorInsightsUsers`, `client.sensorInsightsDeviceProfile`, `client.sensorInsightsSmartAlertMetrics` — and their classes are exported only for their merged namespaces and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter.

All `ClientOptions` fields (source: `src/client-options.ts`; every field is `readonly`):

| Field | Type | Default |
| --- | --- | --- |
| `serverEnvironment` | `ServerEnvironment` | `ServerEnvironment.Production` |
| `serverOptions` | `ServerOptions` | `{}` — each resolver merges its own per-environment defaults in |
| `timeout` | `number` (ms) | `60_000` |
| `fetch` | `FetchLike \| undefined` | the global `fetch`, resolved by the transport |
| `thingspaceOauth` | `OAuth2ClientCredentials \| undefined` | unset |
| `thingspaceOauthStrategy` | `OAuth2TokenStrategy<OAuth2ClientCredentials> \| undefined` | the built-in grant |
| `vzM2MToken` | `TokenProvider \| undefined` | unset |
| `sessionToken` | `TokenProvider \| undefined` | unset |
| `thingspaceOauth1` | `OAuth2ClientCredentials \| undefined` | unset |
| `thingspaceOauth1Strategy` | `OAuth2TokenStrategy<OAuth2ClientCredentials> \| undefined` | the built-in grant |

The 6 auth fields are all optional, and an unset one is not an error — the operation that wanted it simply sends no credential. What each one puts on the wire, and which operations require it, are under Servers & auth.

Two engine behaviours the table cannot show. A non-finite or non-positive `timeout` is **not** "no timeout" — the transport (`src/core/raw-client.ts`) falls back to its own ceiling and clamps anything above it. And when no `fetch` is reachable the **constructor** throws `SdkError`, not the first call.

**`ClientOptions.fetch` is the one extension point** — there are no hooks, no middleware and no interceptors, so a proxy, a custom agent, extra headers, retries or request logging all go here. A replacement **must forward `init.signal`** to whatever actually performs the request; spreading `...init` does it. Drop it and both the per-call signal and `timeout` go inert — the call neither aborts nor times out.

**Cancellation.** The `signal` on `RequestOptions` is the whole per-request surface. An already-aborted signal rejects immediately, `err.cause` is whatever was passed to `abort()`, and the client-level `timeout` surfaces through the same branch with `err.kind === "timeout"`. There is no per-request timeout.

The entire per-request surface is the optional second argument of every operation:

| Type | Members | Source |
| --- | --- | --- |
| `RequestOptions` | `signal?: AbortSignal` | `src/core/api-request.ts` |

**Not on this SDK.** These are absent by design, not undocumented. This table ships with `src/core/` and is versioned with it.

| You might reach for | Reality |
| --- | --- |
| `maxRetries`, backoff, `Retry-After` handling | no retries. A failed call rejects once |
| a logger, `logLevel`, request/response logging | none. `src/core/` contains no `console` call |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one extension point |
| pagination, `for await`, auto-paging helpers | no operation is paginated and nothing is async-iterable |
| SSE, `text/event-stream`, `ReadableStream` | no streaming. Every decoder reads the body to completion |
| `FormData`, `Blob`, `File`, multipart, binary bodies | none. The only body kinds are empty, JSON, form-urlencoded and text |
| per-request `headers`, `timeout`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal }` |
| the raw `fetch` `Response` | deliberately unreachable. `status` and `headers` are on `asApiResult()` and on a thrown `ResponseError` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**, and failures fall into **two disjoint families**. Neither is `instanceof` the other, so the two branches can never overlap and a complete `catch` needs both. `instanceof` is reliable **within one dialect**: a process that loads both — `import` in one file, `require` in another — gets two independent copies of every error class, and `instanceof` across that boundary is `false`. Narrow on `err.kind` or on `err.payload.kind` there, or on `err.name`, which is stable across copies.

- **Family A — the API answered with an error status.** The call rejects with `ResponseError`, or with a subclass of it where the spec declared error bodies for that operation. `err.payload` is a discriminated union whose `kind` names the **response schema the spec declared**, *not* the status code — so two statuses sharing one schema share one arm, and `"undeclared"` is an always-present arm carrying the raw bytes.
- **Family B — no usable response was produced.** The call rejects with a member of the `VerizonError` set. `VerizonError` is **abstract**: use it for `instanceof`, never construct it.

Core types (public members with their declared types; all are `readonly`):

| Type | Public members | Source |
| --- | --- | --- |
| `ResponseError<P>` | `status: number` · `headers: Headers` · `payload: ErrorPayload<P>`, and a `message` of the form `<status> <statusText>` | `src/core/response-error.ts` |
| `Declared<K, B>` | `kind: K` · `body: B` | `src/core/response-error.ts` |
| `ErrorPayload<P>` | `P` or `{ kind: "undeclared"; rawBody: ArrayBuffer }` | `src/core/response-error.ts` |
| `VerizonError` (abstract; declared as `CoreError`) | `kind: ErrorKind` · `message` · `cause` | `src/core/errors.ts` |
| `SchemaError` | `kind: "schema"` · `rawBody: unknown` | `src/core/validation/schema-error.ts` |
| `AuthError` | `kind: "auth"` · `failures: readonly unknown[]` | `src/core/errors.ts` |
| `ApiResult<T, E>` | on success `{ ok: true; status; headers; value: T }`, on failure `{ ok: false; status; headers; errorMessage: string; error }` — `error` carries the **payload**, not the error object | `src/core/api-promise.ts` |

`ErrorKind` is one value per Family B class: `connection` (the `fetch` call rejected, or the body read failed mid-stream), `timeout` (the client-level timeout elapsed), `abort` (the per-call signal aborted, including one that was already aborted), `sdk` (a defect on the SDK side), `schema` (a value failed its schema in **either** direction — inbound the response body was malformed, outbound nothing was sent at all), and `auth` (a credential could not be **obtained**).

**`AuthError` is about obtaining a credential, never about being refused one.** A 401 *from the API* is a Family A `ResponseError` like any other status, so the two are disjoint and one `catch` arm cannot absorb the other. A 401 does have one auth consequence: it invalidates whatever that operation's scheme had cached, so the **next** call re-acquires. The current request is not retried — see Servers & auth.

```ts
try {
  const response = await client.accountServiceController.getAccountInformationUsingGet({ accountName });
} catch (err) {
  if (err instanceof ResponseError) {
    // TODO: the API answered with an error status — read err.status and err.payload
  }
  if (err instanceof VerizonError) {
    // TODO: no usable response was produced — err.kind says which
  }
}
```

A typed subclass narrows further, on `err.payload.kind`. Which arms an operation declares, with the status each covers, is the **Error arms** bullet on its page below.

**Matcher precedence** for a subclass with several arms: an exact numeric status is looked up across the whole table **first**; only then does the first covering wildcard or range win.

**The non-throwing form exists on every operation.** `.asApiResult()` returns `ApiResult<T, E>` and does **not** reject for an HTTP error status — it still rejects for Family B. It must be called on the value the operation returned: `ApiPromise` overrides `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the method is gone.

Of **314 operations**, **293** declare typed error bodies and **21** reject with the base `ResponseError`, whose payload is always the `"undeclared"` arm.

---

## Operations — by resource (88 groups, 314 operations)

Each page below carries one block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire**, **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms**, then a **Fields** table mapping every request field to the channel it travels on, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions. With `api-reference.md` documenting operations only, that table is the route from an operation to the file declaring what it takes.

**Each block states what is specific to its operation. Everything in the table below holds for EVERY operation unless that operation says otherwise, so a block silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A block departs from it only by |
| --- | --- | --- |
| **Call shape `op(request, options?)`** — one flat request object first, the per-call options second. There is no positional overload, and no per-call base URL, header, timeout, retry or auth override | here, Getting a client | never — it always holds |
| **The request object is flat and channel-blind.** A field named `body` *is* the whole request body; every other field is fanned out to path, query, header or form by the SDK. Nothing in the object is nested by channel | here | never — the **Fields** table `Channel` column always resolves it |
| **Throw-based, returning `ApiPromise<T, E>`.** `await` it for `T`; call `.asApiResult()` on the returned value for the non-throwing `ApiResult<T, E>`. No operation is result-only | here, Error-handling model | never |
| **`E` is the base `ResponseError`** and the payload is always the `"undeclared"` arm | Error-handling model | the spec declared error bodies — the **Error** bullet names a subclass and an **Error arms** bullet gives each arm's tag, status and body |
| **The request body and its media type are stated on every block**, by a **Request body** bullet that is never omitted. `none` means no body **and no `Content-Type` header** | here | never — the bullet is always present |
| **Resolves once, to one whole value.** No pagination, no streaming, no SSE, no async iterables, no partial results, no multipart and no binary anywhere | here, Not on this SDK | never at this SDK version |
| **Server group `hyperPreciseCredentials`** | here, Servers & auth | the operation is on another group — its block carries a **Server** bullet |
| **Every operation states its auth requirement**, by an **Auth** bullet that is never omitted — one scheme, a composition over schemes, or `none` for a public operation | here, Servers & auth | never — the bullet is always present |
| **Every value is schema-encoded before the request is built** — a wrong type or format rejects and nothing is sent. **An omitted field that has a default is still sent, with that default**, filled by the SDK rather than by the server | here, Models | the field has a default — it appears in the **Fields** table `Default` column |
| **Field names are TypeScript camelCase and the wire name is the same** | here | some field differs — the **Fields** table gains a `Wire` column, where an em dash means "same as the field name" |
| **Arrays repeat their key and objects bracket-expand** | the serialization block below | never — this SDK declares no per-field serialization style, so every array takes this one |

**Wire serialization, once, for every channel** (source: `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts`). This block ships with `src/core/` and is versioned with it:

- **`path`** takes no style. An array is comma-joined with each element percent-encoded **separately**; an object becomes one percent-encoded JSON document inside the segment. A field whose encoded value is `undefined` throws `SdkError` naming the unfilled placeholder; `null` collapses the segment.
- **`header`** takes no style. An array is comma-joined un-encoded (OpenAPI `simple`). `undefined` says nothing, while `null` and an empty array are tombstones that remove the header. Later layers win by **lowercased** name, in the order body content type, then client defaults, then operation.
- **`query`** and **`form`** repeat an array's key and bracket-expand an object at any depth (`filter[status]=open`, `ranges[amount][min]=10`). An array of *objects* bracket-expands per element with **no index**, so element boundaries collapse.
- Nullish **fields** are dropped from every channel except `path`, where `null` collapses the segment. A nullish array **element** is dropped, so an all-nullish array emits no key at all.
- `form` bodies use RFC 1866 encoding (space becomes `+`); `query` uses `%20`. On the wire both key and value go through `encodeURIComponent`, plus a further escape of `!`, `'`, `(`, `)` and `*`.

**The verb and route are on the pages below**, where a map for a language whose method names are derived from the route can leave them to the source. A TypeScript method name carries none of it, and a `path` field row is unreadable without the route template it fills.

**Endpoint prose is not on this map.** Where the *semantics* of an operation decide what you must pass — a field whose value changes server-side behaviour, an ordering or exclusivity rule between fields — read `api-reference.md`, whose entries are keyed by the same signature these pages print. Blocks here give you the contract: names, channels, types, defaults, errors.

| Resource (`client.X`) | Ops | Page |
| --- | --- | --- |
| `accountServiceController` | 1 | [map/operations/account-service-controller.md](map/operations/account-service-controller.md) |
| `intelligenceServiceController` | 2 | [map/operations/intelligence-service-controller.md](map/operations/intelligence-service-controller.md) |
| `deviceManagement` | 29 | [map/operations/device-management.md](map/operations/device-management.md) |
| `accounts` | 3 | [map/operations/accounts.md](map/operations/accounts.md) |
| `deviceGroups` | 5 | [map/operations/device-groups.md](map/operations/device-groups.md) |
| `sms` | 3 | [map/operations/sms.md](map/operations/sms.md) |
| `sessionManagement` | 3 | [map/operations/session-management.md](map/operations/session-management.md) |
| `connectivityCallbacks` | 3 | [map/operations/connectivity-callbacks.md](map/operations/connectivity-callbacks.md) |
| `accountRequests` | 1 | [map/operations/account-requests.md](map/operations/account-requests.md) |
| `servicePlans` | 1 | [map/operations/service-plans.md](map/operations/service-plans.md) |
| `deviceDiagnostics` | 2 | [map/operations/device-diagnostics.md](map/operations/device-diagnostics.md) |
| `deviceMonitoring` | 2 | [map/operations/device-monitoring.md](map/operations/device-monitoring.md) |
| `deviceProfileManagement` | 4 | [map/operations/device-profile-management.md](map/operations/device-profile-management.md) |
| `eUiccDeviceProfileManagement` | 5 | [map/operations/euicc-device-profile-management.md](map/operations/euicc-device-profile-management.md) |
| `devicesLocations` | 6 | [map/operations/devices-locations.md](map/operations/devices-locations.md) |
| `exclusions` | 6 | [map/operations/exclusions.md](map/operations/exclusions.md) |
| `devicesLocationSubscriptions` | 2 | [map/operations/devices-location-subscriptions.md](map/operations/devices-location-subscriptions.md) |
| `deviceLocationCallbacks` | 4 | [map/operations/device-location-callbacks.md](map/operations/device-location-callbacks.md) |
| `usageTriggerManagement` | 3 | [map/operations/usage-trigger-management.md](map/operations/usage-trigger-management.md) |
| `billing` | 4 | [map/operations/billing.md](map/operations/billing.md) |
| `softwareManagementSubscriptionsV1` | 2 | [map/operations/software-management-subscriptions-v1.md](map/operations/software-management-subscriptions-v1.md) |
| `softwareManagementLicensesV1` | 5 | [map/operations/software-management-licenses-v1.md](map/operations/software-management-licenses-v1.md) |
| `firmwareV1` | 5 | [map/operations/firmware-v1.md](map/operations/firmware-v1.md) |
| `softwareManagementCallbacksV1` | 3 | [map/operations/software-management-callbacks-v1.md](map/operations/software-management-callbacks-v1.md) |
| `softwareManagementReportsV1` | 3 | [map/operations/software-management-reports-v1.md](map/operations/software-management-reports-v1.md) |
| `softwareManagementSubscriptionsV2` | 1 | [map/operations/software-management-subscriptions-v2.md](map/operations/software-management-subscriptions-v2.md) |
| `softwareManagementLicensesV2` | 6 | [map/operations/software-management-licenses-v2.md](map/operations/software-management-licenses-v2.md) |
| `campaignsV2` | 7 | [map/operations/campaigns-v2.md](map/operations/campaigns-v2.md) |
| `softwareManagementCallbacksV2` | 4 | [map/operations/software-management-callbacks-v2.md](map/operations/software-management-callbacks-v2.md) |
| `softwareManagementReportsV2` | 5 | [map/operations/software-management-reports-v2.md](map/operations/software-management-reports-v2.md) |
| `clientLogging` | 6 | [map/operations/client-logging.md](map/operations/client-logging.md) |
| `serverLogging` | 1 | [map/operations/server-logging.md](map/operations/server-logging.md) |
| `configurationFiles` | 2 | [map/operations/configuration-files.md](map/operations/configuration-files.md) |
| `softwareManagementSubscriptionsV3` | 1 | [map/operations/software-management-subscriptions-v3.md](map/operations/software-management-subscriptions-v3.md) |
| `softwareManagementLicensesV3` | 3 | [map/operations/software-management-licenses-v3.md](map/operations/software-management-licenses-v3.md) |
| `campaignsV3` | 5 | [map/operations/campaigns-v3.md](map/operations/campaigns-v3.md) |
| `softwareManagementReportsV3` | 3 | [map/operations/software-management-reports-v3.md](map/operations/software-management-reports-v3.md) |
| `firmwareV3` | 3 | [map/operations/firmware-v3.md](map/operations/firmware-v3.md) |
| `accountDevices` | 2 | [map/operations/account-devices.md](map/operations/account-devices.md) |
| `softwareManagementCallbacksV3` | 4 | [map/operations/software-management-callbacks-v3.md](map/operations/software-management-callbacks-v3.md) |
| `simSecureForIoTLicenses` | 2 | [map/operations/sim-secure-for-io-tlicenses.md](map/operations/sim-secure-for-io-tlicenses.md) |
| `accountSubscriptions` | 1 | [map/operations/account-subscriptions.md](map/operations/account-subscriptions.md) |
| `diagnosticsSubscriptions` | 1 | [map/operations/diagnostics-subscriptions.md](map/operations/diagnostics-subscriptions.md) |
| `diagnosticsObservations` | 2 | [map/operations/diagnostics-observations.md](map/operations/diagnostics-observations.md) |
| `diagnosticsHistory` | 1 | [map/operations/diagnostics-history.md](map/operations/diagnostics-history.md) |
| `diagnosticsSettings` | 1 | [map/operations/diagnostics-settings.md](map/operations/diagnostics-settings.md) |
| `diagnosticsCallbacks` | 3 | [map/operations/diagnostics-callbacks.md](map/operations/diagnostics-callbacks.md) |
| `diagnosticsFactoryReset` | 1 | [map/operations/diagnostics-factory-reset.md](map/operations/diagnostics-factory-reset.md) |
| `targets` | 5 | [map/operations/targets.md](map/operations/targets.md) |
| `cloudConnectorSubscriptions` | 3 | [map/operations/cloud-connector-subscriptions.md](map/operations/cloud-connector-subscriptions.md) |
| `cloudConnectorDevices` | 6 | [map/operations/cloud-connector-devices.md](map/operations/cloud-connector-devices.md) |
| `hplDeviceManagement` | 1 | [map/operations/hpl-device-management.md](map/operations/hpl-device-management.md) |
| `deviceServiceManagement` | 2 | [map/operations/device-service-management.md](map/operations/device-service-management.md) |
| `deviceReports` | 3 | [map/operations/device-reports.md](map/operations/device-reports.md) |
| `hyperPreciseLocationCallbacks` | 3 | [map/operations/hyper-precise-location-callbacks.md](map/operations/hyper-precise-location-callbacks.md) |
| `deviceCredentialManagement` | 4 | [map/operations/device-credential-management.md](map/operations/device-credential-management.md) |
| `anomalySettings` | 3 | [map/operations/anomaly-settings.md](map/operations/anomaly-settings.md) |
| `anomalyTriggers` | 5 | [map/operations/anomaly-triggers.md](map/operations/anomaly-triggers.md) |
| `anomalyTriggersV2` | 3 | [map/operations/anomaly-triggers-v2.md](map/operations/anomaly-triggers-v2.md) |
| `wirelessNetworkPerformance` | 5 | [map/operations/wireless-network-performance.md](map/operations/wireless-network-performance.md) |
| `managingESimProfiles` | 10 | [map/operations/managing-esim-profiles.md](map/operations/managing-esim-profiles.md) |
| `deviceSmsMessaging` | 4 | [map/operations/device-sms-messaging.md](map/operations/device-sms-messaging.md) |
| `deviceActions` | 7 | [map/operations/device-actions.md](map/operations/device-actions.md) |
| `thingSpaceQualityOfServiceApiActions` | 2 | [map/operations/thing-space-quality-of-service-api-actions.md](map/operations/thing-space-quality-of-service-api-actions.md) |
| `pwn` | 7 | [map/operations/pwn.md](map/operations/pwn.md) |
| `promotionPeriodInformation` | 2 | [map/operations/promotion-period-information.md](map/operations/promotion-period-information.md) |
| `retrieveTheTriggers` | 4 | [map/operations/retrieve-the-triggers.md](map/operations/retrieve-the-triggers.md) |
| `updateTriggers` | 1 | [map/operations/update-triggers.md](map/operations/update-triggers.md) |
| `simActions` | 3 | [map/operations/sim-actions.md](map/operations/sim-actions.md) |
| `globalReporting` | 2 | [map/operations/global-reporting.md](map/operations/global-reporting.md) |
| `deviceRoleController` | 1 | [map/operations/device-role-controller.md](map/operations/device-role-controller.md) |
| `etxAppConfiguration` | 5 | [map/operations/etx-app-configuration.md](map/operations/etx-app-configuration.md) |
| `etxRegistration` | 7 | [map/operations/etx-registration.md](map/operations/etx-registration.md) |
| `mapMessageController` | 4 | [map/operations/map-message-controller.md](map/operations/map-message-controller.md) |
| `retrieveRatePlanList` | 1 | [map/operations/retrieve-rate-plan-list.md](map/operations/retrieve-rate-plan-list.md) |
| `createPricePlanTriggers` | 1 | [map/operations/create-price-plan-triggers.md](map/operations/create-price-plan-triggers.md) |
| `updatePricePlanTriggers` | 1 | [map/operations/update-price-plan-triggers.md](map/operations/update-price-plan-triggers.md) |
| `gbiDeviceActions5` | 3 | [map/operations/gbi-device-actions5.md](map/operations/gbi-device-actions5.md) |
| `sensorInsightsSensors` | 5 | [map/operations/sensor-insights-sensors.md](map/operations/sensor-insights-sensors.md) |
| `sensorInsightsDevices` | 6 | [map/operations/sensor-insights-devices.md](map/operations/sensor-insights-devices.md) |
| `sensorInsightsGateways` | 1 | [map/operations/sensor-insights-gateways.md](map/operations/sensor-insights-gateways.md) |
| `sensorInsightsSmartAlerts` | 3 | [map/operations/sensor-insights-smart-alerts.md](map/operations/sensor-insights-smart-alerts.md) |
| `sensorInsightsRules` | 2 | [map/operations/sensor-insights-rules.md](map/operations/sensor-insights-rules.md) |
| `sensorInsightsHealthScore` | 2 | [map/operations/sensor-insights-health-score.md](map/operations/sensor-insights-health-score.md) |
| `sensorInsightsNotificationGroups` | 6 | [map/operations/sensor-insights-notification-groups.md](map/operations/sensor-insights-notification-groups.md) |
| `sensorInsightsUsers` | 4 | [map/operations/sensor-insights-users.md](map/operations/sensor-insights-users.md) |
| `sensorInsightsDeviceProfile` | 4 | [map/operations/sensor-insights-device-profile.md](map/operations/sensor-insights-device-profile.md) |
| `sensorInsightsSmartAlertMetrics` | 1 | [map/operations/sensor-insights-smart-alert-metrics.md](map/operations/sensor-insights-smart-alert-metrics.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every module under `src/models/` declares exactly one model type and the schema value beside it, and both are re-exported from the package root. So there are two facts per type, and the map gives both: the **names you import** and the **file you read**.

```ts
import { type Success201, success201Schema } from "verizon";
```

Take the pair from an operation's **Type sources** table. **Do not derive the path from the type name** — the transform is not reversible in general, and the table is the authority. There is no default export.

| Group | Count | Directory |
| --- | --- | --- |
| Objects | 781 | `src/models/` |
| Enums (open; const companion plus schema) | 61 | `src/models/` |
| Unions without a discriminant | 50 | `src/models/unions/` |

**Conventions.** Every model is a plain `type`, not a class — build one with an object literal; there is no constructor and no builder. `f: T` is required, `f?: T` is optional (omit the key), and `f: T | null` is a **required, nullable** field where `null` is a value distinct from an omitted key. Optional properties are declared `f?: T`, not `f?: T | undefined`, so under `exactOptionalPropertyTypes` you must **omit or spread** an absent field rather than assign `undefined` to it.

**Schema companions.** `Schema<T, W = Encoded<T>>` is `{ decode(v: unknown): T; encode(v: unknown): W }`, so a schema value is directly usable both ways. `Encoded<T>` is the wire projection — a `Date` becomes `string | number`, a `Uint8Array` becomes a base64 `string`, recursing through arrays and objects. `EnumSchema<T>` adds `readonly values: readonly T[]`, so an enum's known set is testable at run time.

**Enums are open, and are not TypeScript `enum`s.** Each is a `const` companion object plus a union that includes `(string & {})` or `(number & {})`, so **any** value of the right base type is assignable and the schema validates the base type only, never membership. That is deliberate: an unrecognized server value round-trips instead of throwing. Use `.values` to test membership yourself.

| Enum | Members (member to wire value) | Schema value |
| --- | --- | --- |
| `AccuracyMode` | `_0` to `"0"` | `accuracyModeSchema` |
| `AggregatedReportCallbackStatus` | `Queued` to `"QUEUED"` · `Completed` to `"COMPLETED"` | `aggregatedReportCallbackStatusSchema` |
| `AltitudeConfidence` | `Alt00001` to `"alt-000-01"` · `Alt00002` to `"alt-000-02"` · `Alt00005` to `"alt-000-05"` · `Alt00010` to `"alt-000-10"` · `Alt00020` to `"alt-000-20"` · `Alt00050` to `"alt-000-50"` · `Alt00100` to `"alt-001-00"` · `Alt00200` to `"alt-002-00"` · `Alt00500` to `"alt-005-00"` · `Alt01000` to `"alt-010-00"` · `Alt02000` to `"alt-020-00"` · `Alt05000` to `"alt-050-00"` · `Alt10000` to `"alt-100-00"` · `Alt20000` to `"alt-200-00"` · `OutOfRange` to `"outOfRange"` · `Unavailable` to `"unavailable"` | `altitudeConfidenceSchema` |
| `AttributeIdentifier` | `NetworkBearer` to `"NETWORK_BEARER"` · `RadioSignalStrength` to `"RADIO_SIGNAL_STRENGTH"` · `LinkQuality` to `"LINK_QUALITY"` · `CellId` to `"CELL_ID"` · `Manufacturer` to `"MANUFACTURER"` | `attributeIdentifierSchema` |
| `AwarenessDistance` | `LessThan50M` to `"lessThan50m"` · `LessThan100M` to `"lessThan100m"` · `LessThan200M` to `"lessThan200m"` · `LessThan500M` to `"lessThan500m"` · `LessThan1000M` to `"lessThan1000m"` · `LessThan5Km` to `"lessThan5km"` · `LessThan10Km` to `"lessThan10km"` · `Over10Km` to `"over10km"` | `awarenessDistanceSchema` |
| `CacheMode` | `_0` to `"0"` · `_1` to `"1"` · `_2` to `"2"` | `cacheModeSchema` |
| `CallbackService` | `Fota` to `"Fota"` | `callbackServiceSchema` |
| `CallbackServiceName` | `Location` to `"Location"` · `DeviceLocation` to `"DeviceLocation"` | `callbackServiceNameSchema` |
| `CampaignMetaInfoProtocol` | `Lwm2M` to `"LWM2M"` · `OmdDm` to `"OMD-DM"` | `campaignMetaInfoProtocolSchema` |
| `CampaignStatus` | `CampaignRequestPending` to `"CampaignRequestPending"` · `CampaignRequestFailed` to `"CampaignRequestFailed"` · `CampaignRequestQueued` to `"CampaignRequestQueued"` · `CampaignCancelled` to `"CampaignCancelled"` · `CampaignAborted` to `"CampaignAborted"` · `CampaignFailed` to `"CampaignFailed"` · `CampaignScheduled` to `"CampaignScheduled"` · `CampaignEnded` to `"CampaignEnded"` | `campaignStatusSchema` |
| `ClientSubtype` | `PassengerCar` to `"PassengerCar"` · `Truck` to `"Truck"` · `Bus` to `"Bus"` · `EmergencyVehicle` to `"EmergencyVehicle"` · `SchoolBus` to `"SchoolBus"` · `MaintenanceVehicle` to `"MaintenanceVehicle"` · `Pedestrian` to `"Pedestrian"` · `Bicycle` to `"Bicycle"` · `Scooter` to `"Scooter"` · `Motorcycle` to `"Motorcycle"` · `RoadSideUnit` to `"RoadSideUnit"` · `Camera` to `"Camera"` · `Lidar` to `"Lidar"` · `Radar` to `"Radar"` · `InductiveLoop` to `"InductiveLoop"` · `MagneticSensor` to `"MagneticSensor"` · `Platform` to `"Platform"` · `Application` to `"Application"` · `Na` to `"NA"` | `clientSubtypeSchema` |
| `Comparitor` | `Gt` to `"gt"` · `Lt` to `"lt"` · `Eq` to `"eq"` | `comparitorSchema` |
| `CycleType` | `Cycleone` to `"cycleone"` · `Cycletwo` to `"cycletwo"` | `cycleTypeSchema` |
| `DevicesProtocol` | `Lwm2M` to `"LWM2M"` · `Omdadm` to `"OMDADM"` · `Http` to `"HTTP"` | `devicesProtocolSchema` |
| `DistributionTypes` | `Targeted` to `"Targeted"` · `Broadcast` to `"Broadcast"` | `distributionTypesSchema` |
| `EtxMapMessageGeofenceGeometry` | `Polygon` to `"Polygon"` | `etxMapMessageGeofenceGeometrySchema` |
| `EtxExpectedTypeEnum` | `Base64` to `"BASE64"` · `Json` to `"JSON"` | `etxExpectedTypeEnumSchema` |
| `EtxMessageStandardEnum` | `Etsi` to `"etsi"` · `Sae` to `"sae"` | `etxMessageStandardEnumSchema` |
| `ErrorResponseCode` | `Unauthorized` to `"UNAUTHORIZED"` · `InvalidAccess` to `"INVALID_ACCESS"` · `InvalidParameter` to `"INVALID_PARAMETER"` · `InternalError` to `"INTERNAL_ERROR"` · `Success` to `"SUCCESS"` | `errorResponseCodeSchema` |
| `FirmwareProtocol` | `Lwm2M` to `"LWM2M"` · `OmdDm` to `"OMD-DM"` · `All` to `"all"` | `firmwareProtocolSchema` |
| `FirmwareTypeList` | `Append` to `"append"` · `Remove` to `"remove"` | `firmwareTypeListSchema` |
| `FrameType` | `Unknown` to `"unknown"` · `Advisory` to `"advisory"` · `RoadSignage` to `"roadSignage"` · `CommercialSignage` to `"commercialSignage"` | `frameTypeSchema` |
| `HttpStatusCode` | `_100Continue` to `"100 CONTINUE"` · `_101SwitchingProtocols` to `"101 SWITCHING_PROTOCOLS"` · `_102Processing` to `"102 PROCESSING"` · `_103Checkpoint` to `"103 CHECKPOINT"` · `_200Ok` to `"200 OK"` · `_201Created` to `"201 CREATED"` · `_202Accepted` to `"202 ACCEPTED"` · `_203NonAuthoritativeInformation` to `"203 NON_AUTHORITATIVE_INFORMATION"` · `_204NoContent` to `"204 NO_CONTENT"` · `_205ResetContent` to `"205 RESET_CONTENT"` · `_206PartialContent` to `"206 PARTIAL_CONTENT"` · `_207MultiStatus` to `"207 MULTI_STATUS"` · `_208AlreadyReported` to `"208 ALREADY_REPORTED"` · `_226ImUsed` to `"226 IM_USED"` · `_300MultipleChoices` to `"300 MULTIPLE_CHOICES"` · `_301MovedPermanently` to `"301 MOVED_PERMANENTLY"` · `_302Found` to `"302 FOUND"` · `_302MovedTemporarily` to `"302 MOVED_TEMPORARILY"` · `_303SeeOther` to `"303 SEE_OTHER"` · `_304NotModified` to `"304 NOT_MODIFIED"` · `_305UseProxy` to `"305 USE_PROXY"` · `_307TemporaryRedirect` to `"307 TEMPORARY_REDIRECT"` · `_308PermanentRedirect` to `"308 PERMANENT_REDIRECT"` · `_400BadRequest` to `"400 BAD_REQUEST"` · `_401Unauthorized` to `"401 UNAUTHORIZED"` · `_402PaymentRequired` to `"402 PAYMENT_REQUIRED"` · `_403Forbidden` to `"403 FORBIDDEN"` · `_404NotFound` to `"404 NOT_FOUND"` · `_405MethodNotAllowed` to `"405 METHOD_NOT_ALLOWED"` · `_406NotAcceptable` to `"406 NOT_ACCEPTABLE"` · `_407ProxyAuthenticationRequired` to `"407 PROXY_AUTHENTICATION_REQUIRED"` · `_408RequestTimeout` to `"408 REQUEST_TIMEOUT"` · `_409Conflict` to `"409 CONFLICT"` · `_410Gone` to `"410 GONE"` · `_411LengthRequired` to `"411 LENGTH_REQUIRED"` · `_412PreconditionFailed` to `"412 PRECONDITION_FAILED"` · `_413PayloadTooLarge` to `"413 PAYLOAD_TOO_LARGE"` · `_413RequestEntityTooLarge` to `"413 REQUEST_ENTITY_TOO_LARGE"` · `_414UriTooLong` to `"414 URI_TOO_LONG"` · `_414RequestUriTooLong` to `"414 REQUEST_URI_TOO_LONG"` · `_415UnsupportedMediaType` to `"415 UNSUPPORTED_MEDIA_TYPE"` · `_416RequestedRangeNotSatisfiable` to `"416 REQUESTED_RANGE_NOT_SATISFIABLE"` · `_417ExpectationFailed` to `"417 EXPECTATION_FAILED"` · `_418IAmATeapot` to `"418 I_AM_A_TEAPOT"` · `_419InsufficientSpaceOnResource` to `"419 INSUFFICIENT_SPACE_ON_RESOURCE"` · `_420MethodFailure` to `"420 METHOD_FAILURE"` · `_421DestinationLocked` to `"421 DESTINATION_LOCKED"` · `_422UnprocessableEntity` to `"422 UNPROCESSABLE_ENTITY"` · `_423Locked` to `"423 LOCKED"` · `_424FailedDependency` to `"424 FAILED_DEPENDENCY"` · `_425TooEarly` to `"425 TOO_EARLY"` · `_426UpgradeRequired` to `"426 UPGRADE_REQUIRED"` · `_428PreconditionRequired` to `"428 PRECONDITION_REQUIRED"` · `_429TooManyRequests` to `"429 TOO_MANY_REQUESTS"` · `_431RequestHeaderFieldsTooLarge` to `"431 REQUEST_HEADER_FIELDS_TOO_LARGE"` · `_451UnavailableForLegalReasons` to `"451 UNAVAILABLE_FOR_LEGAL_REASONS"` · `_500InternalServerError` to `"500 INTERNAL_SERVER_ERROR"` · `_501NotImplemented` to `"501 NOT_IMPLEMENTED"` · `_502BadGateway` to `"502 BAD_GATEWAY"` · `_503ServiceUnavailable` to `"503 SERVICE_UNAVAILABLE"` · `_504GatewayTimeout` to `"504 GATEWAY_TIMEOUT"` · `_505HttpVersionNotSupported` to `"505 HTTP_VERSION_NOT_SUPPORTED"` · `_506VariantAlsoNegotiates` to `"506 VARIANT_ALSO_NEGOTIATES"` · `_507InsufficientStorage` to `"507 INSUFFICIENT_STORAGE"` · `_508LoopDetected` to `"508 LOOP_DETECTED"` · `_509BandwidthLimitExceeded` to `"509 BANDWIDTH_LIMIT_EXCEEDED"` · `_510NotExtended` to `"510 NOT_EXTENDED"` · `_511NetworkAuthenticationRequired` to `"511 NETWORK_AUTHENTICATION_REQUIRED"` | `httpStatusCodeSchema` |
| `MessageId` | `_1` to `1` | `messageIdSchema` |
| `MessageStandard` | `Etsi` to `"etsi"` · `Sae` to `"sae"` | `messageStandardSchema` |
| `Mode` | `ReportOnChange` to `"reportOnChange"` | `modeSchema` |
| `NetworkType` | `Vz` to `"VZ"` · `NonVz` to `"non-VZ"` | `networkTypeSchema` |
| `NumericalDataUnit` | `Second` to `"SECOND"` · `Minute` to `"MINUTE"` · `Hour` to `"HOUR"` · `Day` to `"DAY"` | `numericalDataUnitSchema` |
| `ProfileStatusFilter` | `Enable` to `"ENABLE"` · `Disable` to `"DISABLE"` · `DownloadDisable` to `"DOWNLOAD_DISABLE"` · `DownloadEnable` to `"DOWNLOAD_ENABLE"` · `NotDownloaded` to `"NOT_DOWNLOADED"` · `Unknown` to `"UNKNOWN"` · `Delete` to `"DELETE"` | `profileStatusFilterSchema` |
| `ProtocolVersion` | `_2` to `2` | `protocolVersionSchema` |
| `ProvisioningStatusFilter` | `Unknown` to `"UNKNOWN"` · `Deactivated` to `"DEACTIVATED"` · `Activated` to `"ACTIVATED"` · `Deactive` to `"DEACTIVE"` · `Active` to `"ACTIVE"` · `Suspend` to `"SUSPEND"` · `PendingActivation` to `"PENDING_ACTIVATION"` · `PendingDeactivation` to `"PENDING_DEACTIVATION"` · `PreActive` to `"PRE_ACTIVE"` · `ActivationReady` to `"ACTIVATION_READY"` · `Inventory` to `"INVENTORY"` · `Purged` to `"PURGED"` · `Replaced` to `"REPLACED"` · `Retired` to `"RETIRED"` · `TestReady` to `"TEST_READY"` | `provisioningStatusFilterSchema` |
| `ReportStatus` | `Queued` to `"QUEUED"` · `Inprogress` to `"INPROGRESS"` · `Completed` to `"COMPLETED"` | `reportStatusSchema` |
| `RequestStatus` | `Pending` to `"Pending"` · `Success` to `"Success"` · `Failure` to `"Failure"` | `requestStatusSchema` |
| `ResponseCode` | `InvalidAccess` to `"INVALID_ACCESS"` · `InvalidParameter` to `"INVALID_PARAMETER"` · `InternalError` to `"INTERNAL_ERROR"` · `Success` to `"SUCCESS"` | `responseCodeSchema` |
| `RoadUserTypes` | `VulnerableRoadUser` to `"VulnerableRoadUser"` · `Vehicle` to `"Vehicle"` | `roadUserTypesSchema` |
| `TriggerCondition` | `Enter` to `"enter"` · `Leave` to `"leave"` · `Inside` to `"inside"` · `Crossing` to `"crossing"` | `triggerConditionSchema` |
| `Type` | `FeatureCollection` to `"FeatureCollection"` | `typeSchema` |
| `Type1` | `Feature` to `"Feature"` | `type1Schema` |
| `Type10` | `Packed` to `"packed"` | `type10Schema` |
| `Type11` | `Crushed` to `"crushed"` | `type11Schema` |
| `Type12` | `Smooth` to `"smooth"` | `type12Schema` |
| `Type13` | `Packed` to `"packed"` · `Loose` to `"loose"` | `type13Schema` |
| `Type2` | `LineString` to `"LineString"` | `type2Schema` |
| `Type3` | `Polygon` to `"Polygon"` | `type3Schema` |
| `Type4` | `MultiLineString` to `"MultiLineString"` | `type4Schema` |
| `Type5` | `MultiPolygon` to `"MultiPolygon"` | `type5Schema` |
| `Type6` | `NewSharp` to `"newSharp"` · `Traveled` to `"traveled"` · `TrafficPolished` to `"trafficPolished"` | `type6Schema` |
| `Type7` | `NewSharp` to `"newSharp"` · `Traveled` to `"traveled"` · `TrafficPolished` to `"trafficPolished"` · `ExcessTar` to `"excessTar"` | `type7Schema` |
| `Type8` | `PackedOiled` to `"packedOiled"` · `Loose` to `"loose"` | `type8Schema` |
| `Type9` | `LessThan30Mph` to `"lessThan30Mph"` | `type9Schema` |
| `Unit` | `Minutes` to `"minutes"` · `Hours` to `"hours"` | `unitSchema` |
| `UpgradeStatus` | `RequestPending` to `"RequestPending"` · `Queued` to `"Queued"` · `RequestFailed` to `"RequestFailed"` · `InProgress` to `"InProgress"` · `Finished` to `"Finished"` · `UpgradeFailed` to `"UpgradeFailed"` | `upgradeStatusSchema` |
| `AccountLevelAction` | `Notify` to `"notify"` · `Suspend` to `"suspend"` · `ChangePricePlan` to `"changePricePlan"` | `accountLevelActionSchema` |
| `Active` | `True` to `"true"` · `False` to `"false"` | `activeSchema` |
| `ConditionAction` | `Notify` to `"notify"` · `Suspend` to `"suspend"` · `ChangePricePlan` to `"changePricePlan"` | `conditionActionSchema` |
| `ConditionType` | `Individual` to `"Individual"` · `Aging` to `"Aging"` · `UsageAllowance` to `"UsageAllowance"` | `conditionTypeSchema` |
| `EtxClientType` | `Vehicle` to `"Vehicle"` · `VulnerableRoadUser` to `"VulnerableRoadUser"` · `TrafficLightController` to `"TrafficLightController"` · `InfrastructureSensor` to `"InfrastructureSensor"` · `OnboardSensor` to `"OnboardSensor"` · `Software` to `"Software"` | `etxClientTypeSchema` |
| `RulesCycleType` | `Daily` to `"Daily"` · `Weekly` to `"Weekly"` · `Monthly` to `"Monthly"` | `rulesCycleTypeSchema` |
| `ServiceName` | `Location` to `"Location"` · `Fota` to `"fota"` | `serviceNameSchema` |
| `ThresholdUnit` | `Kb` to `"KB"` · `Mb` to `"MB"` · `Gb` to `"GB"` | `thresholdUnitSchema` |
| `TriggerCategory` | `AccountUsage` to `"AccountUsage"` · `DeviceGroupUsage` to `"DeviceGroupUsage"` · `PricePlanDataUsage` to `"PricePlanDataUsage"` | `triggerCategorySchema` |

**Unions.** A discriminated union is narrowed with an exhaustive `switch` on its tag, with no fallback arm and no type guard to import. One without a discriminant is narrowed on the shape of its arms.

| Union | Variants | Narrow with | Source |
| --- | --- | --- | --- |
| `Advisory` | no discriminant | `typeof`, or an `in` check | `src/models/unions/advisory.ts` |
| `AdvisoryItem` | no discriminant | `typeof`, or an `in` check | `src/models/unions/advisory-item.ts` |
| `CauseCodeChoice` | no discriminant | `typeof`, or an `in` check | `src/models/unions/cause-code-choice.ts` |
| `Content` | no discriminant | `typeof`, or an `in` check | `src/models/unions/content.ts` |
| `CreateTriggerRequestOptions` | no discriminant | `typeof`, or an `in` check | `src/models/unions/create-trigger-request-options.ts` |
| `CreateV2TriggerRequest` | no discriminant | `typeof`, or an `in` check | `src/models/unions/create-v2-trigger-request.ts` |
| `CustomField` | no discriminant | `typeof`, or an `in` check | `src/models/unions/custom-field.ts` |
| `DescriptionOfRoadSurface` | no discriminant | `typeof`, or an `in` check | `src/models/unions/description-of-road-surface.ts` |
| `DeviceFilter1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/device-filter1.ts` |
| `DeviceId1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/device-id1.ts` |
| `DeviceId11` | no discriminant | `typeof`, or an `in` check | `src/models/unions/device-id11.ts` |
| `DeviceIds` | no discriminant | `typeof`, or an `in` check | `src/models/unions/device-ids.ts` |
| `DeviceListWithServiceAddress` | no discriminant | `typeof`, or an `in` check | `src/models/unions/device-list-with-service-address.ts` |
| `DeviceListWithServiceAddress1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/device-list-with-service-address1.ts` |
| `DmV1DevicesActionsSetRequest` | no discriminant | `typeof`, or an `in` check | `src/models/unions/dm-v1-devices-actions-set-request.ts` |
| `ExitService` | no discriminant | `typeof`, or an `in` check | `src/models/unions/exit-service.ts` |
| `ExtendedAttribute1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/extended-attribute1.ts` |
| `Filter` | no discriminant | `typeof`, or an `in` check | `src/models/unions/filter.ts` |
| `GenericSign` | no discriminant | `typeof`, or an `in` check | `src/models/unions/generic-sign.ts` |
| `Geometry` | no discriminant | `typeof`, or an `in` check | `src/models/unions/geometry.ts` |
| `Id` | no discriminant | `typeof`, or an `in` check | `src/models/unions/id.ts` |
| `Id1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/id1.ts` |
| `Limit` | no discriminant | `typeof`, or an `in` check | `src/models/unions/limit.ts` |
| `Limits` | no discriminant | `typeof`, or an `in` check | `src/models/unions/limits.ts` |
| `M2MV1IntelligenceWirelessCoverageRequest` | no discriminant | `typeof`, or an `in` check | `src/models/unions/m2-mv1-intelligence-wireless-coverage-request.ts` |
| `MapDataQueryRequest` | no discriminant | `typeof`, or an `in` check | `src/models/unions/map-data-query-request.ts` |
| `Message4` | no discriminant | `typeof`, or an `in` check | `src/models/unions/message4.ts` |
| `Messages` | no discriminant | `typeof`, or an `in` check | `src/models/unions/messages.ts` |
| `MsgId` | no discriminant | `typeof`, or an `in` check | `src/models/unions/msg-id.ts` |
| `PricePlanTriggerCondition` | no discriminant | `typeof`, or an `in` check | `src/models/unions/price-plan-trigger-condition.ts` |
| `PrimaryPlaceOfUse` | no discriminant | `typeof`, or an `in` check | `src/models/unions/primary-place-of-use.ts` |
| `RatePlanGroup` | no discriminant | `typeof`, or an `in` check | `src/models/unions/rate-plan-group.ts` |
| `SmsNumberModel` | no discriminant | `typeof`, or an `in` check | `src/models/unions/sms-number-model.ts` |
| `SpeedLimit` | no discriminant | `typeof`, or an `in` check | `src/models/unions/speed-limit.ts` |
| `TextPhraseOrItis` | no discriminant | `typeof`, or an `in` check | `src/models/unions/text-phrase-or-itis.ts` |
| `TriggerAttributes` | no discriminant | `typeof`, or an `in` check | `src/models/unions/trigger-attributes.ts` |
| `TriggerAttributesOptions` | no discriminant | `typeof`, or an `in` check | `src/models/unions/trigger-attributes-options.ts` |
| `TriggersListOptions` | no discriminant | `typeof`, or an `in` check | `src/models/unions/triggers-list-options.ts` |
| `UpdateTriggerRequestOptions` | no discriminant | `typeof`, or an `in` check | `src/models/unions/update-trigger-request-options.ts` |
| `UpdateV2TriggerRequest` | no discriminant | `typeof`, or an `in` check | `src/models/unions/update-v2-trigger-request.ts` |
| `V2TriggersRequest` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v2-triggers-request.ts` |
| `V2TriggersRequest1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/v2-triggers-request1.ts` |
| `WorkZone` | no discriminant | `typeof`, or an `in` check | `src/models/unions/work-zone.ts` |
| `AccountGroupShareThreshold` | no discriminant | `typeof`, or an `in` check | `src/models/unions/account-group-share-threshold.ts` |
| `AccountLevelObjectcondition` | no discriminant | `typeof`, or an `in` check | `src/models/unions/account-level-objectcondition.ts` |
| `AccountSharePricePlanTriggerCondition` | no discriminant | `typeof`, or an `in` check | `src/models/unions/account-share-price-plan-trigger-condition.ts` |
| `KeysChunk` | no discriminant | `typeof`, or an `in` check | `src/models/unions/keys-chunk.ts` |
| `PayAsYouGoPricePlanTriggerCondition` | no discriminant | `typeof`, or an `in` check | `src/models/unions/pay-as-you-go-price-plan-trigger-condition.ts` |
| `Rateplantype2Condition` | no discriminant | `typeof`, or an `in` check | `src/models/unions/rateplantype2-condition.ts` |
| `Rateplantype2Condition1` | no discriminant | `typeof`, or an `in` check | `src/models/unions/rateplantype2-condition1.ts` |

**Wire-name divergences.** Only these model properties are sent and received under a different name; every other property uses its TypeScript name verbatim.

| Type | Property | Wire key |
| --- | --- | --- |
| `ManagementError400` | `errorDescription` | `error_description` |
| `ManagementErrorError400` | `errorDescription` | `error_description` |
| `ManagementError403` | `errorDescription` | `error_description` |
| `ManagementErrorError403` | `errorDescription` | `error_description` |
| `ManagementError404` | `errorDescription` | `error_description` |
| `ManagementErrorError404` | `errorDescription` | `error_description` |
| `ManagementError500` | `errorDescription` | `error_description` |
| `ManagementErrorError500` | `errorDescription` | `error_description` |
| `GbiAddress5` | `zip4` | `zip+4` |
| `Account` | `ipPools` | `iPPools` |
| `BillableUsageReport` | `primaryAccount` | `PrimaryAccount` |
| `BillableUsageReport` | `managedAccounts` | `ManagedAccounts` |
| `Certificate` | `certPem` | `cert.pem` |
| `Certificate` | `keyPem` | `key.pem` |
| `Certificate` | `caPem` | `ca.pem` |
| `Certificate` | `expirationTime` | `ExpirationTime` |
| `ChangeDeviceIdRequest` | `change4GOption` | `change4gOption` |
| `ClientPersistenceResponse` | `deviceId` | `DeviceID` |
| `ClientPersistenceResponse` | `certificate` | `Certificate` |
| `ClientPersistenceResponse` | `clientType` | `ClientType` |
| `ClientPersistenceResponse` | `clientSubtype` | `ClientSubtype` |
| `ClientPersistenceResponse` | `vendorId` | `VendorID` |
| `ClientRegistrationPendingResponse` | `deviceId` | `DeviceID` |
| `ClientRegistrationPendingResponse` | `message` | `Message` |
| `ClientRegistrationRequestV2` | `clientType` | `ClientType` |
| `ClientRegistrationRequestV2` | `clientSubtype` | `ClientSubtype` |
| `ClientRegistrationRequestV2` | `vendorId` | `VendorID` |
| `ClientRegistrationRequestV2` | `deviceId` | `DeviceID` |
| `ClientRegistrationRequestV2` | `imei` | `IMEI` |
| `ClientRegistrationRequestV2` | `iccid` | `ICCID` |
| `ClientRegistrationRequestV2` | `imsi` | `IMSI` |
| `ClientRegistrationResponse` | `deviceId` | `DeviceID` |
| `ClientRegistrationResponse` | `certificate` | `Certificate` |
| `ConnectionRequest` | `deviceId` | `DeviceID` |
| `ConnectionRequest` | `geolocation` | `Geolocation` |
| `ConnectionRequest` | `networkType` | `NetworkType` |
| `ConnectionResponse` | `mqttUrl` | `MqttURL` |
| `ConnectionResponse` | `host` | `Host` |
| `ConnectionResponse` | `port` | `Port` |
| `ConnectionResponseV3` | `mqttUrLs` | `MqttURLs` |
| `ConnectionResponseV3` | `hosts` | `Hosts` |
| `ConnectionResponseV3` | `ports` | `Ports` |
| `CreateIoTApplicationRequest` | `billingAccountId` | `billingAccountID` |
| `CreateIoTApplicationRequest` | `clientId` | `clientID` |
| `CreateIoTApplicationRequest` | `sampleIoTcApp` | `sampleIOTcApp` |
| `CreateIoTApplicationRequest` | `subscriptionId` | `subscriptionID` |
| `CreateIoTApplicationRequest` | `tenantId` | `tenantID` |
| `CredentialsRequest` | `ecpd` | `ECPD` |
| `DeviceServiceInformation` | `bullseyeEnable` | `BullseyeEnable` |
| `DeviceServiceRequest` | `bullseyeEnable` | `BullseyeEnable` |
| `DevicesFilter` | `clientType` | `ClientType` |
| `DevicesFilter` | `clientSubtype` | `ClientSubtype` |
| `DevicesFilter` | `mecId` | `MecId` |
| `DevicesFilter` | `pageSize` | `PageSize` |
| `DevicesRequest` | `vendorId` | `VendorId` |
| `DevicesRequest` | `filter` | `Filter` |
| `DevicesResponse` | `deviceId` | `DeviceID` |
| `DevicesResponse` | `clientType` | `ClientType` |
| `DevicesResponse` | `clientSubtype` | `ClientSubtype` |
| `DevicesResponse` | `mecIds` | `MecIds` |
| `DiagnosticsObservationResult` | `transactionId` | `transactionID` |
| `EtxClientIdLookup` | `deviceId` | `DeviceID` |
| `EtxClientIdLookup` | `imei` | `IMEI` |
| `EtxClientIdLookup` | `iccid` | `ICCID` |
| `EtxClientIdLookup` | `imsi` | `IMSI` |
| `FieldsHttpHeaders` | `authorization` | `Authorization` |
| `FindDeviceByPropertyResponseList` | `deviceProperty` | `DeviceProperty` |
| `FurtherInfoMsgId` | `furtherInfoId` | `furtherInfoID` |
| `Geolocation` | `latitude` | `Latitude` |
| `Geolocation` | `longitude` | `Longitude` |
| `GroupName` | `default` | `Default` |
| `HistorySearchRequest` | `filter` | `$filter` |
| `HistorySearchRequest` | `limitNumber` | `$limitNumber` |
| `HistorySearchRequest` | `limitTime` | `$limitTime` |
| `HistorySearchRequest` | `page` | `$page` |
| `KpiInfoList` | `kpiInfoList` | `KpiInfoList` |
| `ManagedAccountsAddResponse` | `txId` | `TxId` |
| `ManagedAccountsGetAllResponse` | `managedAccAddedList` | `ManagedAccAddedList` |
| `NodeOffsetPointLl` | `nodeLatLon` | `node-LatLon` |
| `PaginationFilter` | `page` | `Page` |
| `QuerySubscriptionRequest` | `selection` | `$selection` |
| `QueryTargetRequest` | `selection` | `$selection` |
| `RbsHighPrecisionTiltConfig` | `periodicReporting` | `periodic-reporting` |
| `RbsHighPrecisionTiltConfig` | `holdTime` | `hold-time` |
| `RbsHighPrecisionTiltConfig` | `angleAway` | `angle-away` |
| `RbsHighPrecisionTiltConfig` | `angleToward` | `angle-toward` |
| `RetrievesAvailableFilesResponseList` | `availableFilesResponse` | `AvailableFilesResponse` |
| `RoadSignMsgId` | `roadSignId` | `roadSignID` |
| `SaeInfoPayload` | `packetId` | `packetID` |
| `SearchDeviceByPropertyFields` | `devicePropertylocation` | `DevicePropertylocation` |
| `SearchDeviceByPropertyResponseList` | `deviceProperty` | `DeviceProperty` |
| `SearchDeviceEventHistoryRequest` | `selection` | `$selection` |
| `SearchDeviceEventHistoryRequest` | `limitnumber` | `$limitnumber` |
| `SearchDeviceEventHistoryRequest` | `page` | `$page` |
| `SearchDeviceEventHistoryResponseList` | `searchDeviceEventHistory` | `SearchDeviceEventHistory` |
| `SearchSensorHistoryRequest` | `limitnumber` | `$limitnumber` |
| `SearchSensorHistoryRequest` | `page` | `$page` |
| `SearchSensorHistoryResponseList` | `searchSensorHistory` | `SearchSensorHistory` |
| `TargetAuthenticationBody` | `grantType` | `grant_type` |
| `TargetAuthenticationBody` | `refreshToken` | `refresh_token` |
| `TargetAuthenticationBodyHeaders` | `authorization` | `Authorization` |
| `TargetAuthenticationBodyHeaders` | `contentType` | `Content-Type` |
| `V1DeviceListItem` | `reason` | `Reason` |
| `V2AddOrRemoveDeviceRequest` | `type` | `Type` |
| `V3AddOrRemoveDeviceRequest` | `type` | `Type` |
| `V3DeviceListItem` | `reason` | `Reason` |
| `DeviceGroupFilter` | `individualOrCombined` | `IndividualOrCombined` |
| `Devicepropertyfilter` | `selection` | `$selection` |
| `Devicepropertyfilter` | `querytotalcount` | `$querytotalcount` |
| `DtoDeviceResourceIdentifier` | `nodeUuid` | `node_uuid` |
| `DtoFilter` | `expand` | `$expand` |
| `DtoFilter` | `limitnumber` | `$limitnumber` |
| `DtoFilter` | `nopagination` | `$nopagination` |
| `DtoFilter` | `page` | `$page` |
| `DtoFilter` | `pagenumber` | `$pagenumber` |
| `DtoFilter` | `projection` | `$projection` |
| `DtoFilter` | `selection` | `$selection` |
| `HplBullseyeEnable` | `bullseyeEnable` | `BullseyeEnable` |
| `Keyschunk2` | `noOfDaysB4PromoExp` | `NoOfDaysB4PromoExp` |
| `ManagementError` | `errorDescription` | `error_description` |
| `ManagementErrorError` | `errorDescription` | `error_description` |
| `Rbstiltconfig` | `rbsHighPrecisionTiltConfig` | `RbsHighPrecisionTiltConfig` |
| `UsageHistory` | `moSms` | `moSMS` |
| `UsageHistory` | `mtSms` | `mtSMS` |

---

## Servers & auth

**Authentication is per operation.** Every operation declares the requirement it enforces and the SDK sends exactly that: **314 of the 314 operations** require a credential and **0** are public. Each block on a page above carries an **Auth** bullet naming its requirement, `none` included. There is no client-global switch and no per-call override.

| Scheme (as an **Auth** bullet names it) | Configured with | What the SDK sends |
| --- | --- | --- |
| `thingspaceOauth` | `thingspaceOauth: { clientId, clientSecret, scope? }` | `Authorization: Bearer <access token>` |
| `vzM2MToken` | `vzM2MToken` | header `VZ-M2M-Token: <key>` |
| `sessionToken` | `sessionToken` | header `SessionToken: <key>` |
| `thingspaceOauth1` | `thingspaceOauth1: { clientId, clientSecret, scope? }` | `Authorization: Bearer <access token>` |

A scheme **contributes** headers, query parameters and cookies rather than mutating the request, so a credential is encoded by exactly the code that encodes an operation's own parameters. The auth layer goes on **last**, which means a scheme's `Authorization` wins over one the operation declared.

**Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives the SDK sends the **first configured** one, in the order the **Auth** bullet prints them. The combinators that express this (`allAuth`, `anyAuth`, `noneAuth`) live in the generated resource modules and are **not exported**.

**A credential may be a function.** Every field typed `TokenProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as absent, and a function is treated as present without being invoked.

**An unconfigured scheme does not throw.** The request goes out without that credential and the server decides. So a 401 on a call you believed was authenticated is usually an unset credential field rather than an SDK failure — check the operation's **Auth** bullet against what the client was given.

**OAuth2 fetches and caches its own token.** The token request goes through the same client as every other call — same timeout, same `fetch` — sends a form-urlencoded body, and **decodes** the response against a schema rather than casting it. An access token is cached until shortly before it expires; a response carrying no `expires_in` is treated as never expiring (RFC 6749 §5.1); concurrent callers share one in-flight fetch. A refused token endpoint rejects with `AuthError` wrapping the underlying `ResponseError` as `cause`, so it never looks like the business call failing.

| Flow | Token endpoint | Client credentials travel |
| --- | --- | --- |
| `thingspaceOauth` | `oAuthServer` + `/oauth2/token` | as `Authorization: Basic` |
| `thingspaceOauth1` | `oAuthServer` + `/` | as `Authorization: Basic` |

**Replacing a grant.** Each OAuth2 scheme's token request is a strategy you can substitute — `thingspaceOauthStrategy`, `thingspaceOauth1Strategy` on `ClientOptions`. A strategy is one method, `getToken(credentials, signal)`, plus `tryRefreshToken(...)` for the refreshable one. Supply it and the built-in token request is not used, while the caching, the expiry buffer and the single-flight behaviour above still apply.

**The auth types you can name.** Every row below is exported from the package root. `Source` is where to read the declaration, never what to import — the credential shapes themselves are already spelled in the scheme table above.

| Type | Source |
| --- | --- |
| `OAuthToken` | `src/core/auth/oauth2-strategies.ts` |
| `OAuth2CredentialPlacement` | `src/core/auth/oauth2-strategies.ts` |

**A 401 invalidates, it does not retry.** On a **401** — 401 only, not 403 — the SDK clears whatever that operation's scheme had cached, so the *next* call re-acquires. The current request still rejects with the operation's `ResponseError`. There is no retry loop on this SDK, and the credential fields are on `ClientOptions`.

**Environments.** `ClientOptions.serverEnvironment` selects one for the whole client (source: `src/servers.ts`). `ServerEnvironment` is a `const` object with a derived union type, not a TypeScript `enum` — and unlike the model enums it is **closed**, so only the values below are assignable.

| `ServerEnvironment` member | Value |
| --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` |
| `ServerEnvironment.Staging` | `staging` |
| `ServerEnvironment.Dev` | `dev` |
| `ServerEnvironment.Qa` | `qa` |
| `ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart` | `mockServerForLimitedAvailabilitySeeQuickStart` |

**Server groups.** 15 logical servers; each operation is bound to one at generation time, and a block carries a **Server** bullet only when its group is not `hyperPreciseCredentials`.

| Group | Options type |
| --- | --- |
| `hyperPreciseCredentials` | `HyperPreciseCredentialsServerOptions` |
| `impServer` | `ImpServerServerOptions` |
| `thingspace` | `ThingspaceServerOptions` |
| `oAuthServer` | `OAuthServerServerOptions` |
| `m2M` | `M2MServerOptions` |
| `deviceLocation` | `DeviceLocationServerOptions` |
| `subscriptionServer` | `SubscriptionServerServerOptions` |
| `softwareManagementV1` | `SoftwareManagementV1ServerOptions` |
| `softwareManagementV2` | `SoftwareManagementV2ServerOptions` |
| `softwareManagementV3` | `SoftwareManagementV3ServerOptions` |
| `deviceDiagnostics` | `DeviceDiagnosticsServerOptions` |
| `cloudConnector` | `CloudConnectorServerOptions` |
| `hyperPreciseLocation` | `HyperPreciseLocationServerOptions` |
| `services` | `ServicesServerOptions` |
| `qualityOfService` | `QualityOfServiceServerOptions` |

**Base URLs and overrides.** One row per group-and-environment pair, so the table stays four columns wide however many environments a spec declares. Every cell is overridden at `serverOptions.<group>.<environment>.<name>`, where `<name>` is `baseUrl` for the whole template or the variable name for one substitution. An override merges with the built-in defaults **per pair, key by key**.

| Group | Environment | Base URL template | Template variables (default) |
| --- | --- | --- | --- |
| `hyperPreciseCredentials` | `production` | `https://thingspace.verizon.com/api/auth/v1` | — |
| `hyperPreciseCredentials` | `staging` | `https://staging.thingspace.verizon.com/api/auth/v1` | — |
| `hyperPreciseCredentials` | `dev` | `https://staging.thingspace.verizon.com/api/auth/v1` | — |
| `hyperPreciseCredentials` | `qa` | `https://thingspace.verizon.com/api/auth/v1` | — |
| `hyperPreciseCredentials` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://staging.thingspace.verizon.com/api/auth/v1` | — |
| `impServer` | `production` | `https://imp.thingspace.verizon.com` | — |
| `impServer` | `staging` | `https://imp-staging.thingspace.verizon.com` | — |
| `impServer` | `dev` | `https://devmanagement-staging.imp.thingspace.verizon.com` | — |
| `impServer` | `qa` | `https://tsd-nginx-qa-us-east-1.imp.thingspace.verizon.com` | — |
| `impServer` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com` | — |
| `thingspace` | `production` | `https://thingspace.verizon.com/api` | — |
| `thingspace` | `staging` | `https://staging.thingspace.verizon.com/api` | — |
| `thingspace` | `dev` | `https://devmanagement-staging.thingspace.verizon.com/api` | — |
| `thingspace` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api` | — |
| `thingspace` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api` | — |
| `oAuthServer` | `production` | `https://thingspace.verizon.com/api/ts/v1` | — |
| `oAuthServer` | `staging` | `https://staging.thingspace.verizon.com/api/ts/v1` | — |
| `oAuthServer` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/ts/v1` | — |
| `oAuthServer` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/ts/v1` | — |
| `oAuthServer` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/ts/v1` | — |
| `m2M` | `production` | `https://thingspace.verizon.com/api/m2m` | — |
| `m2M` | `staging` | `https://staging.thingspace.verizon.com/api/m2m` | — |
| `m2M` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/m2m` | — |
| `m2M` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/m2m` | — |
| `m2M` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/m2m` | — |
| `deviceLocation` | `production` | `https://thingspace.verizon.com/api/loc/v1` | — |
| `deviceLocation` | `staging` | `https://staging.thingspace.verizon.com/api/loc/v1` | — |
| `deviceLocation` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/loc/v1` | — |
| `deviceLocation` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/loc/v1` | — |
| `deviceLocation` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/loc/v1` | — |
| `subscriptionServer` | `production` | `https://thingspace.verizon.com/api/subsc/v1` | — |
| `subscriptionServer` | `staging` | `https://staging.thingspace.verizon.com/api/subsc/v1` | — |
| `subscriptionServer` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/subsc/v1` | — |
| `subscriptionServer` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/subsc/v1` | — |
| `subscriptionServer` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/subsc/v1` | — |
| `softwareManagementV1` | `production` | `https://thingspace.verizon.com/api/fota/v1` | — |
| `softwareManagementV1` | `staging` | `https://staging.thingspace.verizon.com/api/fota/v1` | — |
| `softwareManagementV1` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/fota/v1` | — |
| `softwareManagementV1` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/fota/v1` | — |
| `softwareManagementV1` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/fota/v1` | — |
| `softwareManagementV2` | `production` | `https://thingspace.verizon.com/api/fota/v2` | — |
| `softwareManagementV2` | `staging` | `https://staging.thingspace.verizon.com/api/fota/v2` | — |
| `softwareManagementV2` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/fota/v2` | — |
| `softwareManagementV2` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/fota/v2` | — |
| `softwareManagementV2` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/fota/v2` | — |
| `softwareManagementV3` | `production` | `https://thingspace.verizon.com/api/fota/v3` | — |
| `softwareManagementV3` | `staging` | `https://staging.thingspace.verizon.com/api/fota/v3` | — |
| `softwareManagementV3` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/fota/v3` | — |
| `softwareManagementV3` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/fota/v3` | — |
| `softwareManagementV3` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/fota/v3` | — |
| `deviceDiagnostics` | `production` | `https://thingspace.verizon.com/api/diagnostics/v1` | — |
| `deviceDiagnostics` | `staging` | `https://staging.thingspace.verizon.com/api/diagnostics/v1` | — |
| `deviceDiagnostics` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/diagnostics/v1` | — |
| `deviceDiagnostics` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/diagnostics/v1` | — |
| `deviceDiagnostics` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/diagnostics/v1` | — |
| `cloudConnector` | `production` | `https://thingspace.verizon.com/api/cc/v1` | — |
| `cloudConnector` | `staging` | `https://staging.thingspace.verizon.com/api/cc/v1` | — |
| `cloudConnector` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/cc/v1` | — |
| `cloudConnector` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/cc/v1` | — |
| `cloudConnector` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/cc/v1` | — |
| `hyperPreciseLocation` | `production` | `https://thingspace.verizon.com/api/hyper-precise/v1` | — |
| `hyperPreciseLocation` | `staging` | `https://staging.thingspace.verizon.com/api/hyper-precise/v1` | — |
| `hyperPreciseLocation` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/hyper-precise/v1` | — |
| `hyperPreciseLocation` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/hyper-precise/v1` | — |
| `hyperPreciseLocation` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/hyper-precise/v1` | — |
| `services` | `production` | `https://5gedge.verizon.com/api/mec/services` | — |
| `services` | `staging` | `https://staging.5gedge.verizon.com/api/mec/services` | — |
| `services` | `dev` | `https://devmanagement-staging.5gedge.verizon.com:80/mec/services` | — |
| `services` | `qa` | `https://tsd-nginx-qa-us-east-1.5gedge.verizon.com/api/mec/services` | — |
| `services` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/mec/services` | — |
| `qualityOfService` | `production` | `https://thingspace.verizon.com/api/m2m/v1/devices` | — |
| `qualityOfService` | `staging` | `https://staging.thingspace.verizon.com/api/m2m/v1/devices` | — |
| `qualityOfService` | `dev` | `https://devmanagement-staging.thingspace.verizon.com/api/m2m/v1/devices` | — |
| `qualityOfService` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/m2m/v1/devices` | — |
| `qualityOfService` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/m2m/v1/devices` | — |

A `baseUrl` override replaces the template verbatim; variable values are percent-encoded into it, and templates are expanded per request rather than once at construction. An environment value the SDK does not know throws `SdkError` when a server is resolved — at the first call, not at construction. It is the one failure on this surface that throws **synchronously** out of the operation method, so a `try`/`await` catches it but `.asApiResult()` and `.catch()` never see it.

---

## Runtime & packaging

The facts that change what you type, and the floors that decide whether the package loads at all. This section is the home for all of them.

|  |  |
| --- | --- |
| One entry, two dialects | `import` resolves `dist/esm`, `require` resolves `dist/commonjs`, both through the single `.` export. In a TypeScript CommonJS file the typed spelling is `import sdk = require("verizon")`; a plain `require` destructure works at run time but yields no types. `instanceof` is reliable **within** one dialect — if your app loads both, the two copies declare separate error classes |
| Consumer compiler settings | Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional rather than assigning `undefined` to it. Under `verbatimModuleSyntax`, names that carry no runtime value (the options types, every model type) must be imported with `import type` |
| Required globals, and only these | Always: `fetch` (or a replacement passed as the `fetch` option), `AbortController`, `Headers`, `URL`, `setTimeout` and `clearTimeout`, `JSON`, `BigInt`. Auth adds more, each reached only once the credential needing it is configured. `TextEncoder` and `btoa` build every `Authorization: Basic` value, sent on every OAuth2 token request, whose client credentials travel as Basic by default. |
| Values that cross the boundary | `Date` for `date-time`, `string` for `date`, `ArrayBuffer` for an undeclared error body, `Headers` on a result and on a thrown `ResponseError`. The engine also carries a `bigint` int64 path and a base64 `bytes()` codec, reached only where a model uses them |
| Browser distribution | The package ships `dist/esm` and `dist/commonjs` and nothing else — **no bundle, no UMD file, no CDN artifact**. Use it through a bundler, which resolves `zod/v4-mini`, deduplicates it against your own copy and tree-shakes the rest |
| Other runtimes | Deno, Bun, Cloudflare Workers and Vercel Edge are all likely to work — the SDK needs only the globals above and imports no Node built-in — but **none of them is tested for this package**, so nothing here claims support for them |

The browser floor comes from the emitted output rather than the sources: `tshy` builds at `target: ES2022`, so native `#private` fields and methods survive into `dist/`.

| Browser | Minimum | Set by |
| --- | --- | --- |
| Chrome / Edge | **85** | `String.prototype.replaceAll`, logical assignment (`??=`) |
| Firefox | **90** | private class fields and methods |
| Safari / iOS Safari | **15** | private class **methods** |

That table is the **module-load** floor: below it the SDK fails while the module is evaluating, not at the first call. Two things degrade quietly above it. `{ cause }` on the `Error` constructor needs Chrome 93, Firefox 91 or Safari 15, so below that `err.cause` is `undefined`. More consequentially, **cancellation needs `AbortController.abort(reason)` and `AbortSignal.reason`**, which arrived in Chrome 98, Firefox 97 and Safari 15.4 — between the module-load floor and those versions the engine still aborts the request but produces no typed error at all.

