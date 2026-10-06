import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { callbackSummarySchema, type CallbackSummary } from "../models/callback-summary.js";
import {
  fotaV2CallbackRegistrationResultSchema,
  type FotaV2CallbackRegistrationResult,
} from "../models/fota-v2-callback-registration-result.js";
import { fotaV2ResultSchema, type FotaV2Result } from "../models/fota-v2-result.js";
import { fotaV2SuccessResultSchema, type FotaV2SuccessResult } from "../models/fota-v2-success-result.js";
import type { Servers } from "../servers.js";

/**
 * Find registered callbacks or create, update and delete a registered callback.
 */
export class SoftwareManagementCallbacksV2 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a previously registered Callback
   *
   * @remarks
   * This endpoint allows user to delete a previously registered callback URL.
   *
   * @returns Result of deregistering a callback.
   *
   * @throws {@link SoftwareManagementCallbacksV2.DeregisterCallback4Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deregisterCallback4(
    request: SoftwareManagementCallbacksV2.DeregisterCallback4Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV2SuccessResult, SoftwareManagementCallbacksV2.DeregisterCallback4Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.softwareManagementV2("/callbacks/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV2SuccessResultSchema },
        errorFactory: SoftwareManagementCallbacksV2.DeregisterCallback4Error,
      },
      options,
    );
  }

  /**
   * Get the registered callback information
   *
   * @remarks
   * This endpoint allows user to get the registered callback information.
   *
   * @returns Return callback registration.
   *
   * @throws {@link SoftwareManagementCallbacksV2.ListRegisteredCallbacks4Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRegisteredCallbacks4(
    request: SoftwareManagementCallbacksV2.ListRegisteredCallbacks4Request,
    options?: RequestOptions,
  ): ApiPromise<CallbackSummary, SoftwareManagementCallbacksV2.ListRegisteredCallbacks4Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV2("/callbacks/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: callbackSummarySchema },
        errorFactory: SoftwareManagementCallbacksV2.ListRegisteredCallbacks4Error,
      },
      options,
    );
  }

  /**
   * Create HTTPS callback address
   *
   * @remarks
   * This endpoint allows user to create the HTTPS callback address.
   *
   * @returns Return callback registration.
   *
   * @throws {@link SoftwareManagementCallbacksV2.RegisterCallback4Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  registerCallback4(
    request: SoftwareManagementCallbacksV2.RegisterCallback4Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV2CallbackRegistrationResult, SoftwareManagementCallbacksV2.RegisterCallback4Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.softwareManagementV2("/callbacks/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV2CallbackRegistrationResultSchema },
        errorFactory: SoftwareManagementCallbacksV2.RegisterCallback4Error,
      },
      options,
    );
  }

  /**
   * Update HTTPS callback address
   *
   * @remarks
   * This endpoint allows user to update the HTTPS callback address.
   *
   * @returns Return callback registration.
   *
   * @throws {@link SoftwareManagementCallbacksV2.UpdateCallbackError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCallback(
    request: SoftwareManagementCallbacksV2.UpdateCallbackRequest,
    options?: RequestOptions,
  ): ApiPromise<FotaV2CallbackRegistrationResult, SoftwareManagementCallbacksV2.UpdateCallbackError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.softwareManagementV2("/callbacks/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV2CallbackRegistrationResultSchema },
        errorFactory: SoftwareManagementCallbacksV2.UpdateCallbackError,
      },
      options,
    );
  }
}

export namespace SoftwareManagementCallbacksV2 {
  export type DeregisterCallback4Request = {
    /** Account identifier. */
    account: string;
  };

  export class DeregisterCallback4Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<DeregisterCallback4Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type ListRegisteredCallbacks4Request = {
    /** Account identifier. */
    account: string;
  };

  export class ListRegisteredCallbacks4Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<ListRegisteredCallbacks4Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type RegisterCallback4Request = {
    /** Account identifier. */
    account: string;
  };

  export class RegisterCallback4Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<RegisterCallback4Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type UpdateCallbackRequest = {
    /** Account identifier. */
    account: string;
  };

  export class UpdateCallbackError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<UpdateCallbackError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }
}
