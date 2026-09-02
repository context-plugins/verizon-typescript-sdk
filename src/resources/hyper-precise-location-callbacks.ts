import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class HyperPreciseLocationCallbacks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deregisterCallback6(
    request: HyperPreciseLocationCallbacks.DeregisterCallback6Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, HyperPreciseLocationCallbacks.DeregisterCallback6Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.hyperPreciseLocation("/callbacks"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        query: [
          { name: "accountNumber", value: request.accountNumber, schema: s.string() },
          { name: "service", value: request.service, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: HyperPreciseLocationCallbacks.DeregisterCallback6Error,
      },
      options,
    );
  }

  listRegisteredCallbacks6(
    request: HyperPreciseLocationCallbacks.ListRegisteredCallbacks6Request,
    options?: RequestOptions,
  ): ApiPromise<CallbackCreated[], HyperPreciseLocationCallbacks.ListRegisteredCallbacks6Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseLocation("/callbacks"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        query: [{ name: "accountNumber", value: request.accountNumber, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => callbackCreatedSchema)) },
        errorFactory: HyperPreciseLocationCallbacks.ListRegisteredCallbacks6Error,
      },
      options,
    );
  }

  registerCallback6(
    request: HyperPreciseLocationCallbacks.RegisterCallback6Request,
    options?: RequestOptions,
  ): ApiPromise<CallbackRegistered, HyperPreciseLocationCallbacks.RegisterCallback6Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseLocation("/callbacks"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        query: [{ name: "accountNumber", value: request.accountNumber, schema: s.string() }],
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
    accountNumber: string;
    service: string;
  };

  export class DeregisterCallback6Error extends ResponseError<
    | Declared<"hyperPreciseLocationResult", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult2", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult3", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult4", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult5", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult6", HyperPreciseLocationResult>
  > {
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
    accountNumber: string;
  };

  export class ListRegisteredCallbacks6Error extends ResponseError<
    | Declared<"hyperPreciseLocationResult", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult2", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult3", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult4", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult5", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult6", HyperPreciseLocationResult>
  > {
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
    accountNumber: string;
    body: HyperPreciseLocationCallback;
  };

  export class RegisterCallback6Error extends ResponseError<
    | Declared<"hyperPreciseLocationResult", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult2", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult3", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult4", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult5", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult6", HyperPreciseLocationResult>
  > {
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
