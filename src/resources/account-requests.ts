import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class AccountRequests {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getCurrentAsynchronousRequestStatus(
    request: AccountRequests.GetCurrentAsynchronousRequestStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<AsynchronousRequestResult, AccountRequests.GetCurrentAsynchronousRequestStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/accounts/{aname}/requests/{requestId}/status"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "aname", value: request.aname, schema: s.string() },
          { name: "requestId", value: request.requestId, schema: s.string() },
        ],
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
    aname: string;
    requestId: string;
  };

  export class GetCurrentAsynchronousRequestStatusError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<GetCurrentAsynchronousRequestStatusError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }
}
