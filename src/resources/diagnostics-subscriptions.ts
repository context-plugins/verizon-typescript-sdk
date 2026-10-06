import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Get diagnostics service subscription information
   *
   * @remarks
   * This endpoint retrieves a diagnostics subscription by account.
   *
   * @returns Diagnostics subscription response.
   *
   * @throws {@link DiagnosticsSubscriptions.GetDiagnosticsSubscriptionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDiagnosticsSubscription(
    request: DiagnosticsSubscriptions.GetDiagnosticsSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<DiagnosticsSubscription, DiagnosticsSubscriptions.GetDiagnosticsSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.deviceDiagnostics("/subscriptions"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        headers: [],
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
    /** Account identifier. */
    accountName: string;
  };

  export class GetDiagnosticsSubscriptionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceDiagnosticsResult", DeviceDiagnosticsResult>>;

    static readonly errors: ErrorDecoders<GetDiagnosticsSubscriptionError> = [
      {
        on: "default",
        kind: "deviceDiagnosticsResult",
        decode: { kind: "json", schema: deviceDiagnosticsResultSchema },
      },
    ];
  }
}
