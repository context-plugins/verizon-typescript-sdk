import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class SoftwareManagementCallbacksV3 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deregisterCallback5(
    request: SoftwareManagementCallbacksV3.DeregisterCallback5Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV3SuccessResult, SoftwareManagementCallbacksV3.DeregisterCallback5Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.softwareManagementV3("/callbacks/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV3SuccessResultSchema },
        errorFactory: SoftwareManagementCallbacksV3.DeregisterCallback5Error,
      },
      options,
    );
  }

  listRegisteredCallbacks5(
    request: SoftwareManagementCallbacksV3.ListRegisteredCallbacks5Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV3CallbackSummary, SoftwareManagementCallbacksV3.ListRegisteredCallbacks5Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV3("/callbacks/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV3CallbackSummarySchema },
        errorFactory: SoftwareManagementCallbacksV3.ListRegisteredCallbacks5Error,
      },
      options,
    );
  }

  registerCallback5(
    request: SoftwareManagementCallbacksV3.RegisterCallback5Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV3CallbackRegistrationResult, SoftwareManagementCallbacksV3.RegisterCallback5Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.softwareManagementV3("/callbacks/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: fotaV3CallbackRegistrationRequestSchema },
      },
      {
        success: { kind: "json", schema: fotaV3CallbackRegistrationResultSchema },
        errorFactory: SoftwareManagementCallbacksV3.RegisterCallback5Error,
      },
      options,
    );
  }

  updateCallback2(
    request: SoftwareManagementCallbacksV3.UpdateCallback2Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV3CallbackRegistrationResult, SoftwareManagementCallbacksV3.UpdateCallback2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.softwareManagementV3("/callbacks/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
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
    acc: string;
  };

  export class DeregisterCallback5Error extends ResponseError<Declared<"fotaV3Result", FotaV3Result>> {
    static readonly errors: ErrorDecoders<DeregisterCallback5Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type ListRegisteredCallbacks5Request = {
    acc: string;
  };

  export class ListRegisteredCallbacks5Error extends ResponseError<Declared<"fotaV3Result", FotaV3Result>> {
    static readonly errors: ErrorDecoders<ListRegisteredCallbacks5Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type RegisterCallback5Request = {
    acc: string;
    body: FotaV3CallbackRegistrationRequest;
  };

  export class RegisterCallback5Error extends ResponseError<Declared<"fotaV3Result", FotaV3Result>> {
    static readonly errors: ErrorDecoders<RegisterCallback5Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type UpdateCallback2Request = {
    acc: string;
    body: FotaV3CallbackRegistrationRequest;
  };

  export class UpdateCallback2Error extends ResponseError<Declared<"fotaV3Result", FotaV3Result>> {
    static readonly errors: ErrorDecoders<UpdateCallback2Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }
}
