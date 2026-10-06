import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  fotaV3CallbackRegistrationRequestSchema,
  type FotaV3CallbackRegistrationRequest,
} from "../models/fota-v3-callback-registration-request.js";
import {
  fotaV3CallbackRegistrationResultSchema,
  type FotaV3CallbackRegistrationResult,
} from "../models/fota-v3-callback-registration-result.js";
import {
  fotaV3CallbackSummarySchema,
  type FotaV3CallbackSummary,
} from "../models/fota-v3-callback-summary.js";
import { fotaV3ResultSchema, type FotaV3Result } from "../models/fota-v3-result.js";
import { fotaV3SuccessResultSchema, type FotaV3SuccessResult } from "../models/fota-v3-success-result.js";
import type { Servers } from "../servers.js";

/**
 * Find registered callbacks or create, update and delete a registered callback.
 */
export class SoftwareManagementCallbacksV3 {
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
   * @returns Delete request result.
   *
   * @throws {@link SoftwareManagementCallbacksV3.DeregisterCallback5Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deregisterCallback5(
    request: SoftwareManagementCallbacksV3.DeregisterCallback5Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV3SuccessResult, SoftwareManagementCallbacksV3.DeregisterCallback5Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.softwareManagementV3("/callbacks/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV3SuccessResultSchema },
        errorFactory: SoftwareManagementCallbacksV3.DeregisterCallback5Error,
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
   * @throws {@link SoftwareManagementCallbacksV3.ListRegisteredCallbacks5Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRegisteredCallbacks5(
    request: SoftwareManagementCallbacksV3.ListRegisteredCallbacks5Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV3CallbackSummary, SoftwareManagementCallbacksV3.ListRegisteredCallbacks5Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV3("/callbacks/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV3CallbackSummarySchema },
        errorFactory: SoftwareManagementCallbacksV3.ListRegisteredCallbacks5Error,
      },
      options,
    );
  }

  /**
   * Create HTTPS callback address
   *
   * @remarks
   * This endpoint allows the user to create the HTTPS callback address.
   *
   * @returns Return callback registration.
   *
   * @throws {@link SoftwareManagementCallbacksV3.RegisterCallback5Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  registerCallback5(
    request: SoftwareManagementCallbacksV3.RegisterCallback5Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV3CallbackRegistrationResult, SoftwareManagementCallbacksV3.RegisterCallback5Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.softwareManagementV3("/callbacks/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: fotaV3CallbackRegistrationRequestSchema },
      },
      {
        success: { kind: "json", schema: fotaV3CallbackRegistrationResultSchema },
        errorFactory: SoftwareManagementCallbacksV3.RegisterCallback5Error,
      },
      options,
    );
  }

  /**
   * Update HTTPS callback address
   *
   * @remarks
   * This endpoint allows the user to update the HTTPS callback address.
   *
   * @returns Return callback registration.
   *
   * @throws {@link SoftwareManagementCallbacksV3.UpdateCallback2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCallback2(
    request: SoftwareManagementCallbacksV3.UpdateCallback2Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV3CallbackRegistrationResult, SoftwareManagementCallbacksV3.UpdateCallback2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.softwareManagementV3("/callbacks/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: fotaV3CallbackRegistrationRequestSchema },
      },
      {
        success: { kind: "json", schema: fotaV3CallbackRegistrationResultSchema },
        errorFactory: SoftwareManagementCallbacksV3.UpdateCallback2Error,
      },
      options,
    );
  }
}

export namespace SoftwareManagementCallbacksV3 {
  export type DeregisterCallback5Request = {
    /** Account identifier. */
    acc: string;
  };

  export class DeregisterCallback5Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<DeregisterCallback5Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type ListRegisteredCallbacks5Request = {
    /** Account identifier. */
    acc: string;
  };

  export class ListRegisteredCallbacks5Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<ListRegisteredCallbacks5Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type RegisterCallback5Request = {
    /** Account identifier. */
    acc: string;
    /** Callback URL registration. */
    body: FotaV3CallbackRegistrationRequest;
  };

  export class RegisterCallback5Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<RegisterCallback5Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type UpdateCallback2Request = {
    /** Account identifier. */
    acc: string;
    /** Callback URL registration. */
    body: FotaV3CallbackRegistrationRequest;
  };

  export class UpdateCallback2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<UpdateCallback2Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }
}
