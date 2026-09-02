import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class SoftwareManagementCallbacksV1 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deregisterCallback3(
    request: SoftwareManagementCallbacksV1.DeregisterCallback3Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, SoftwareManagementCallbacksV1.DeregisterCallback3Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.softwareManagementV1("/callbacks/{account}/name/{service}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "service", value: request.service, schema: callbackServiceSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SoftwareManagementCallbacksV1.DeregisterCallback3Error,
      },
      options,
    );
  }

  listRegisteredCallbacks3(
    request: SoftwareManagementCallbacksV1.ListRegisteredCallbacks3Request,
    options?: RequestOptions,
  ): ApiPromise<RegisteredCallbacks[], SoftwareManagementCallbacksV1.ListRegisteredCallbacks3Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV1("/callbacks/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => registeredCallbacksSchema)) },
        errorFactory: SoftwareManagementCallbacksV1.ListRegisteredCallbacks3Error,
      },
      options,
    );
  }

  registerCallback3(
    request: SoftwareManagementCallbacksV1.RegisterCallback3Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV1CallbackRegistrationResult, SoftwareManagementCallbacksV1.RegisterCallback3Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.softwareManagementV1("/callbacks/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
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
    account: string;
    service: CallbackService;
  };

  export class DeregisterCallback3Error extends ResponseError<Declared<"error400", undefined>> {
    static readonly errors: ErrorDecoders<DeregisterCallback3Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListRegisteredCallbacks3Request = {
    account: string;
  };

  export class ListRegisteredCallbacks3Error extends ResponseError<Declared<"fotaV1Result", FotaV1Result>> {
    static readonly errors: ErrorDecoders<ListRegisteredCallbacks3Error> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type RegisterCallback3Request = {
    account: string;
    body: FotaV1CallbackRegistrationRequest;
  };

  export class RegisterCallback3Error extends ResponseError<Declared<"fotaV1Result", FotaV1Result>> {
    static readonly errors: ErrorDecoders<RegisterCallback3Error> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }
}
