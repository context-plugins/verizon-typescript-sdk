import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { assignLicenseRequestSchema, type AssignLicenseRequest } from "../models/assign-license-request.js";
import { securityResultSchema, type SecurityResult } from "../models/security-result.js";
import {
  securitySuccessResultSchema,
  type SecuritySuccessResult,
} from "../models/security-success-result.js";
import type { Servers } from "../servers.js";

export class SimSecureForIoTLicenses {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  assignLicenseToDevices(
    request: SimSecureForIoTLicenses.AssignLicenseToDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<SecuritySuccessResult, SimSecureForIoTLicenses.AssignLicenseToDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.m2M("/v1/devices/license/actions/assign"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        headers: [{ name: "X-Request-ID", value: request.xRequestId, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: assignLicenseRequestSchema },
      },
      {
        success: { kind: "json", schema: securitySuccessResultSchema },
        errorFactory: SimSecureForIoTLicenses.AssignLicenseToDevicesError,
      },
      options,
    );
  }

  unassignLicenseToDevices(
    request: SimSecureForIoTLicenses.UnassignLicenseToDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<SecuritySuccessResult, SimSecureForIoTLicenses.UnassignLicenseToDevicesError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.m2M("/v1/devices/license/actions/assign"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        headers: [{ name: "X-Request-ID", value: request.xRequestId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: securitySuccessResultSchema },
        errorFactory: SimSecureForIoTLicenses.UnassignLicenseToDevicesError,
      },
      options,
    );
  }
}

export namespace SimSecureForIoTLicenses {
  export type AssignLicenseToDevicesRequest = {
    xRequestId?: string;
    body: AssignLicenseRequest;
  };

  export class AssignLicenseToDevicesError extends ResponseError<
    | Declared<"securityResult", SecurityResult>
    | Declared<"securityResult2", SecurityResult>
    | Declared<"securityResult3", SecurityResult>
    | Declared<"securityResult4", SecurityResult>
    | Declared<"securityResult5", SecurityResult>
    | Declared<"securityResult6", SecurityResult>
    | Declared<"securityResult7", SecurityResult>
  > {
    static readonly errors: ErrorDecoders<AssignLicenseToDevicesError> = [
      { on: 400, kind: "securityResult", decode: { kind: "json", schema: securityResultSchema } },
      { on: 401, kind: "securityResult2", decode: { kind: "json", schema: securityResultSchema } },
      { on: 403, kind: "securityResult3", decode: { kind: "json", schema: securityResultSchema } },
      { on: 404, kind: "securityResult4", decode: { kind: "json", schema: securityResultSchema } },
      { on: 406, kind: "securityResult5", decode: { kind: "json", schema: securityResultSchema } },
      { on: 429, kind: "securityResult6", decode: { kind: "json", schema: securityResultSchema } },
      { on: [400, 599], kind: "securityResult7", decode: { kind: "json", schema: securityResultSchema } },
    ];
  }

  export type UnassignLicenseToDevicesRequest = {
    xRequestId: string;
  };

  export class UnassignLicenseToDevicesError extends ResponseError<
    | Declared<"securityResult", SecurityResult>
    | Declared<"securityResult2", SecurityResult>
    | Declared<"securityResult3", SecurityResult>
    | Declared<"securityResult4", SecurityResult>
    | Declared<"securityResult5", SecurityResult>
    | Declared<"securityResult6", SecurityResult>
    | Declared<"securityResult7", SecurityResult>
  > {
    static readonly errors: ErrorDecoders<UnassignLicenseToDevicesError> = [
      { on: 400, kind: "securityResult", decode: { kind: "json", schema: securityResultSchema } },
      { on: 401, kind: "securityResult2", decode: { kind: "json", schema: securityResultSchema } },
      { on: 403, kind: "securityResult3", decode: { kind: "json", schema: securityResultSchema } },
      { on: 404, kind: "securityResult4", decode: { kind: "json", schema: securityResultSchema } },
      { on: 406, kind: "securityResult5", decode: { kind: "json", schema: securityResultSchema } },
      { on: 429, kind: "securityResult6", decode: { kind: "json", schema: securityResultSchema } },
      { on: [400, 599], kind: "securityResult7", decode: { kind: "json", schema: securityResultSchema } },
    ];
  }
}
