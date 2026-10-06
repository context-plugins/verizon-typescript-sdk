import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  asynchronousRequestResultSchema,
  type AsynchronousRequestResult,
} from "../models/asynchronous-request-result.js";
import {
  connectivityManagementResultSchema,
  type ConnectivityManagementResult,
} from "../models/connectivity-management-result.js";
import type { Servers } from "../servers.js";

/**
 * Get the status of asynchronous reqeusts.
 */
export class AccountRequests {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Returns the status of an asynchronous request
   *
   * @remarks
   * Returns the current status of an asynchronous request that was made for a single device.
   *
   * @returns The asynchronous request status.
   *
   * @throws {@link AccountRequests.GetCurrentAsynchronousRequestStatusError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCurrentAsynchronousRequestStatus(
    request: AccountRequests.GetCurrentAsynchronousRequestStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<AsynchronousRequestResult, AccountRequests.GetCurrentAsynchronousRequestStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v1/accounts/{aname}/requests/{requestId}/status"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "aname", value: request.aname, schema: s.string() },
          { name: "requestId", value: request.requestId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: asynchronousRequestResultSchema },
        errorFactory: AccountRequests.GetCurrentAsynchronousRequestStatusError,
      },
      options,
    );
  }
}

export namespace AccountRequests {
  export type GetCurrentAsynchronousRequestStatusRequest = {
    /** Account name. */
    aname: string;
    /** UUID from synchronous response. */
    requestId: string;
  };

  export class GetCurrentAsynchronousRequestStatusError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<GetCurrentAsynchronousRequestStatusError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }
}
