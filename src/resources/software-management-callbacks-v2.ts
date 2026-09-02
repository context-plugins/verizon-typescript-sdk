import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { callbackSummarySchema, type CallbackSummary } from "../models/callback-summary.js";
import {
  fotaV2CallbackRegistrationResultSchema,
  type FotaV2CallbackRegistrationResult,
} from "../models/fota-v2-callback-registration-result.js";
import { fotaV2ResultSchema, type FotaV2Result } from "../models/fota-v2-result.js";
import { fotaV2SuccessResultSchema, type FotaV2SuccessResult } from "../models/fota-v2-success-result.js";
import type { Servers } from "../servers.js";

export class SoftwareManagementCallbacksV2 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deregisterCallback4(
    request: SoftwareManagementCallbacksV2.DeregisterCallback4Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV2SuccessResult, SoftwareManagementCallbacksV2.DeregisterCallback4Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.softwareManagementV2("/callbacks/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV2SuccessResultSchema },
        errorFactory: SoftwareManagementCallbacksV2.DeregisterCallback4Error,
      },
      options,
    );
  }

  listRegisteredCallbacks4(
    request: SoftwareManagementCallbacksV2.ListRegisteredCallbacks4Request,
    options?: RequestOptions,
  ): ApiPromise<CallbackSummary, SoftwareManagementCallbacksV2.ListRegisteredCallbacks4Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV2("/callbacks/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: callbackSummarySchema },
        errorFactory: SoftwareManagementCallbacksV2.ListRegisteredCallbacks4Error,
      },
      options,
    );
  }

  registerCallback4(
    request: SoftwareManagementCallbacksV2.RegisterCallback4Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV2CallbackRegistrationResult, SoftwareManagementCallbacksV2.RegisterCallback4Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.softwareManagementV2("/callbacks/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV2CallbackRegistrationResultSchema },
        errorFactory: SoftwareManagementCallbacksV2.RegisterCallback4Error,
      },
      options,
    );
  }

  updateCallback(
    request: SoftwareManagementCallbacksV2.UpdateCallbackRequest,
    options?: RequestOptions,
  ): ApiPromise<FotaV2CallbackRegistrationResult, SoftwareManagementCallbacksV2.UpdateCallbackError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.softwareManagementV2("/callbacks/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
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
    account: string;
  };

  export class DeregisterCallback4Error extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<DeregisterCallback4Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type ListRegisteredCallbacks4Request = {
    account: string;
  };

  export class ListRegisteredCallbacks4Error extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<ListRegisteredCallbacks4Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type RegisterCallback4Request = {
    account: string;
  };

  export class RegisterCallback4Error extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<RegisterCallback4Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type UpdateCallbackRequest = {
    account: string;
  };

  export class UpdateCallbackError extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<UpdateCallbackError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }
}
