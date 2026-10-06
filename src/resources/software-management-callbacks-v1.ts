import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { callbackServiceSchema, type CallbackService } from "../models/callback-service.js";
import {
  fotaV1CallbackRegistrationRequestSchema,
  type FotaV1CallbackRegistrationRequest,
} from "../models/fota-v1-callback-registration-request.js";
import {
  fotaV1CallbackRegistrationResultSchema,
  type FotaV1CallbackRegistrationResult,
} from "../models/fota-v1-callback-registration-result.js";
import { fotaV1ResultSchema, type FotaV1Result } from "../models/fota-v1-result.js";
import { registeredCallbacksSchema, type RegisteredCallbacks } from "../models/registered-callbacks.js";
import type { Servers } from "../servers.js";

/**
 * Register and deregister callback endpoints.
 */
export class SoftwareManagementCallbacksV1 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Deregister a callback endpoint
   *
   * @remarks
   * Deregisters the callback endpoint and stops ThingSpace from sending FOTA callback messages for
   * the specified account.
   *
   * @returns Callback successfully deregistered.
   *
   * @throws {@link SoftwareManagementCallbacksV1.DeregisterCallback3Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deregisterCallback3(
    request: SoftwareManagementCallbacksV1.DeregisterCallback3Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, SoftwareManagementCallbacksV1.DeregisterCallback3Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.softwareManagementV1("/callbacks/{account}/name/{service}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "service", value: request.service, schema: callbackServiceSchema },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SoftwareManagementCallbacksV1.DeregisterCallback3Error,
      },
      options,
    );
  }

  /**
   * Get registered callback endpoints
   *
   * @remarks
   * Returns the name and endpoint URL of the callback listening services registered for a given
   * account.
   *
   * @returns List of callbacks.
   *
   * @throws {@link SoftwareManagementCallbacksV1.ListRegisteredCallbacks3Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRegisteredCallbacks3(
    request: SoftwareManagementCallbacksV1.ListRegisteredCallbacks3Request,
    options?: RequestOptions,
  ): ApiPromise<RegisteredCallbacks[], SoftwareManagementCallbacksV1.ListRegisteredCallbacks3Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV1("/callbacks/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => registeredCallbacksSchema)) },
        errorFactory: SoftwareManagementCallbacksV1.ListRegisteredCallbacks3Error,
      },
      options,
    );
  }

  /**
   * Register a Callback Listener URL
   *
   * @remarks
   * Registers a URL to receive RESTful messages from a callback service when new firmware versions
   * are available and when upgrades start and finish.
   *
   * @returns Result of registering a callback.
   *
   * @throws {@link SoftwareManagementCallbacksV1.RegisterCallback3Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  registerCallback3(
    request: SoftwareManagementCallbacksV1.RegisterCallback3Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV1CallbackRegistrationResult, SoftwareManagementCallbacksV1.RegisterCallback3Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.softwareManagementV1("/callbacks/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: fotaV1CallbackRegistrationRequestSchema },
      },
      {
        success: { kind: "json", schema: fotaV1CallbackRegistrationResultSchema },
        errorFactory: SoftwareManagementCallbacksV1.RegisterCallback3Error,
      },
      options,
    );
  }
}

export namespace SoftwareManagementCallbacksV1 {
  export type DeregisterCallback3Request = {
    /** Account identifier in "##########-#####". */
    account: string;
    /** Callback type. Must be 'Fota' for Software Management Services API. */
    service: CallbackService;
  };

  export class DeregisterCallback3Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error400", undefined>>;

    static readonly errors: ErrorDecoders<DeregisterCallback3Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListRegisteredCallbacks3Request = {
    /** Account identifier in "##########-#####". */
    account: string;
  };

  export class ListRegisteredCallbacks3Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV1Result", FotaV1Result>>;

    static readonly errors: ErrorDecoders<ListRegisteredCallbacks3Error> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type RegisterCallback3Request = {
    /** Account identifier in "##########-#####". */
    account: string;
    /** Callback details. */
    body: FotaV1CallbackRegistrationRequest;
  };

  export class RegisterCallback3Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV1Result", FotaV1Result>>;

    static readonly errors: ErrorDecoders<RegisterCallback3Error> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }
}
