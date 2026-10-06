import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  readySimRestErrorResponseSchema,
  type ReadySimRestErrorResponse,
} from "../models/ready-sim-rest-error-response.js";
import { requestTriggerSchema, type RequestTrigger } from "../models/request-trigger.js";
import { successSchema, type Success } from "../models/success.js";
import type { Servers } from "../servers.js";

/**
 * Updates the trigger threshold values for alerts.
 */
export class UpdateTriggers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Update promotional triggers.
   *
   * @remarks
   * Updates the promotional triggers for pseudo-MDN.
   *
   * @returns Status of Request
   *
   * @throws {@link UpdateTriggers.UpdateAllAvailableTriggersError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAllAvailableTriggers(
    request: UpdateTriggers.UpdateAllAvailableTriggersRequest,
    options?: RequestOptions,
  ): ApiPromise<Success, UpdateTriggers.UpdateAllAvailableTriggersError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.thingspace("/m2m/v2/triggers"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** Update the triggers */
    body?: RequestTrigger;
  };

  export class UpdateAllAvailableTriggersError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"readySimRestErrorResponse", ReadySimRestErrorResponse>>;

    static readonly errors: ErrorDecoders<UpdateAllAvailableTriggersError> = [
      {
        on: "default",
        kind: "readySimRestErrorResponse",
        decode: { kind: "json", schema: readySimRestErrorResponseSchema },
      },
    ];
  }
}
