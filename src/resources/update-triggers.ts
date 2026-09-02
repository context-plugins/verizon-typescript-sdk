import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  readySimRestErrorResponseSchema,
  type ReadySimRestErrorResponse,
} from "../models/ready-sim-rest-error-response.js";
import { requestTriggerSchema, type RequestTrigger } from "../models/request-trigger.js";
import { successSchema, type Success } from "../models/success.js";
import type { Servers } from "../servers.js";

export class UpdateTriggers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  updateAllAvailableTriggers(
    request: UpdateTriggers.UpdateAllAvailableTriggersRequest,
    options?: RequestOptions,
  ): ApiPromise<Success, UpdateTriggers.UpdateAllAvailableTriggersError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseCredentials("/m2m/v2/triggers"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => requestTriggerSchema)) },
      },
      {
        success: { kind: "json", schema: successSchema },
        errorFactory: UpdateTriggers.UpdateAllAvailableTriggersError,
      },
      options,
    );
  }
}

export namespace UpdateTriggers {
  export type UpdateAllAvailableTriggersRequest = {
    body?: RequestTrigger;
  };

  export class UpdateAllAvailableTriggersError extends ResponseError<
    Declared<"readySimRestErrorResponse", ReadySimRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<UpdateAllAvailableTriggersError> = [
      {
        on: [400, 599],
        kind: "readySimRestErrorResponse",
        decode: { kind: "json", schema: readySimRestErrorResponseSchema },
      },
    ];
  }
}
