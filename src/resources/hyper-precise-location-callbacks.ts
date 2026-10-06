import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { callbackCreatedSchema, type CallbackCreated } from "../models/callback-created.js";
import { callbackRegisteredSchema, type CallbackRegistered } from "../models/callback-registered.js";
import {
  hyperPreciseLocationCallbackSchema,
  type HyperPreciseLocationCallback,
} from "../models/hyper-precise-location-callback.js";
import {
  hyperPreciseLocationResultSchema,
  type HyperPreciseLocationResult,
} from "../models/hyper-precise-location-result.js";
import type { Servers } from "../servers.js";

/**
 * Manage callback listeners for Hyper Precise
 */
export class HyperPreciseLocationCallbacks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Deregister a Callback Listener
   *
   * @remarks
   * Stops ThingSpace from sending callback messages for the specified account and listener name.
   *
   * @returns Successful response (no content).
   *
   * @throws {@link HyperPreciseLocationCallbacks.DeregisterCallback6Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deregisterCallback6(
    request: HyperPreciseLocationCallbacks.DeregisterCallback6Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, HyperPreciseLocationCallbacks.DeregisterCallback6Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.hyperPreciseLocation("/callbacks"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [
          { name: "accountNumber", value: request.accountNumber, schema: s.string() },
          { name: "service", value: request.service, schema: s.string() },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: HyperPreciseLocationCallbacks.DeregisterCallback6Error,
      },
      options,
    );
  }

  /**
   * Get registered callback listener
   *
   * @remarks
   * Find registered callback listener for account by account number.
   *
   * @returns A successful response will display the billing account number (`accountName`), the
   * name of the callback service (`name`) and the address of the callback listening service
   * (`url`).
   *
   * @throws {@link HyperPreciseLocationCallbacks.ListRegisteredCallbacks6Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRegisteredCallbacks6(
    request: HyperPreciseLocationCallbacks.ListRegisteredCallbacks6Request,
    options?: RequestOptions,
  ): ApiPromise<CallbackCreated[], HyperPreciseLocationCallbacks.ListRegisteredCallbacks6Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.hyperPreciseLocation("/callbacks"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [{ name: "accountNumber", value: request.accountNumber, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => callbackCreatedSchema)) },
        errorFactory: HyperPreciseLocationCallbacks.ListRegisteredCallbacks6Error,
      },
      options,
    );
  }

  /**
   * Register a Callback Listener URL
   *
   * @remarks
   * Registers a URL at which an account receives asynchronous responses and other messages from a
   * ThingSpace Platform callback service. The messages are REST messages. You are responsible for
   * creating and running a listening process on your server at that URL to receive and parse the
   * messages.
   *
   * @returns A successful response will display the billing account number (`accountName`), the
   * name of the callback service (`name`) and the address of the callback listening service
   * (`url`).
   *
   * @throws {@link HyperPreciseLocationCallbacks.RegisterCallback6Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  registerCallback6(
    request: HyperPreciseLocationCallbacks.RegisterCallback6Request,
    options?: RequestOptions,
  ): ApiPromise<CallbackRegistered, HyperPreciseLocationCallbacks.RegisterCallback6Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.hyperPreciseLocation("/callbacks"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [{ name: "accountNumber", value: request.accountNumber, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: hyperPreciseLocationCallbackSchema },
      },
      {
        success: { kind: "json", schema: callbackRegisteredSchema },
        errorFactory: HyperPreciseLocationCallbacks.RegisterCallback6Error,
      },
      options,
    );
  }
}

export namespace HyperPreciseLocationCallbacks {
  export type DeregisterCallback6Request = {
    /**
     * The numeric ID of the account and must include leading zeroes. This value is indentical to
     * `accountName`.
     */
    accountNumber: string;
    /** The name of the callback service that will be deleted. */
    service: string;
  };

  export class DeregisterCallback6Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"hyperPreciseLocationResult", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult2", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult3", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult4", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult5", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult6", HyperPreciseLocationResult>
    >;

    static readonly errors: ErrorDecoders<DeregisterCallback6Error> = [
      {
        on: 400,
        kind: "hyperPreciseLocationResult",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: 401,
        kind: "hyperPreciseLocationResult2",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: 403,
        kind: "hyperPreciseLocationResult3",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: 404,
        kind: "hyperPreciseLocationResult4",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: 409,
        kind: "hyperPreciseLocationResult5",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: 500,
        kind: "hyperPreciseLocationResult6",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
    ];
  }

  export type ListRegisteredCallbacks6Request = {
    /**
     * The numeric ID of the account and must include leading zeroes. This value is indentical to
     * `accountName`.
     */
    accountNumber: string;
  };

  export class ListRegisteredCallbacks6Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"hyperPreciseLocationResult", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult2", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult3", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult4", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult5", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult6", HyperPreciseLocationResult>
    >;

    static readonly errors: ErrorDecoders<ListRegisteredCallbacks6Error> = [
      {
        on: 400,
        kind: "hyperPreciseLocationResult",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: 401,
        kind: "hyperPreciseLocationResult2",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: 403,
        kind: "hyperPreciseLocationResult3",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: 404,
        kind: "hyperPreciseLocationResult4",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: 409,
        kind: "hyperPreciseLocationResult5",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: 500,
        kind: "hyperPreciseLocationResult6",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
    ];
  }

  export type RegisterCallback6Request = {
    /** A unique identifier for an account. */
    accountNumber: string;
    body: HyperPreciseLocationCallback;
  };

  export class RegisterCallback6Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"hyperPreciseLocationResult", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult2", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult3", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult4", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult5", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult6", HyperPreciseLocationResult>
    >;

    static readonly errors: ErrorDecoders<RegisterCallback6Error> = [
      {
        on: 400,
        kind: "hyperPreciseLocationResult",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: 401,
        kind: "hyperPreciseLocationResult2",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: 403,
        kind: "hyperPreciseLocationResult3",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: 404,
        kind: "hyperPreciseLocationResult4",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: 409,
        kind: "hyperPreciseLocationResult5",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: 500,
        kind: "hyperPreciseLocationResult6",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
    ];
  }
}
