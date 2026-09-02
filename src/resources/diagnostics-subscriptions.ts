import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  deviceDiagnosticsResultSchema,
  type DeviceDiagnosticsResult,
} from "../models/device-diagnostics-result.js";
import {
  diagnosticsSubscriptionSchema,
  type DiagnosticsSubscription,
} from "../models/diagnostics-subscription.js";
import type { Servers } from "../servers.js";

export class DiagnosticsSubscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getDiagnosticsSubscription(
    request: DiagnosticsSubscriptions.GetDiagnosticsSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<DiagnosticsSubscription, DiagnosticsSubscriptions.GetDiagnosticsSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.deviceDiagnostics("/subscriptions"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        query: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: diagnosticsSubscriptionSchema },
        errorFactory: DiagnosticsSubscriptions.GetDiagnosticsSubscriptionError,
      },
      options,
    );
  }
}

export namespace DiagnosticsSubscriptions {
  export type GetDiagnosticsSubscriptionRequest = {
    accountName: string;
  };

  export class GetDiagnosticsSubscriptionError extends ResponseError<
    Declared<"deviceDiagnosticsResult", DeviceDiagnosticsResult>
  > {
    static readonly errors: ErrorDecoders<GetDiagnosticsSubscriptionError> = [
      {
        on: [400, 599],
        kind: "deviceDiagnosticsResult",
        decode: { kind: "json", schema: deviceDiagnosticsResultSchema },
      },
    ];
  }
}
