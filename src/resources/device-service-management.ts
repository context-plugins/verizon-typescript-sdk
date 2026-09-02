import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  bullseyeServiceRequestSchema,
  type BullseyeServiceRequest,
} from "../models/bullseye-service-request.js";
import {
  bullseyeServiceResultSchema,
  type BullseyeServiceResult,
} from "../models/bullseye-service-result.js";
import {
  hyperPreciseLocationResultSchema,
  type HyperPreciseLocationResult,
} from "../models/hyper-precise-location-result.js";
import type { Servers } from "../servers.js";

export class DeviceServiceManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getDeviceHyperPreciseStatus(
    request: DeviceServiceManagement.GetDeviceHyperPreciseStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<BullseyeServiceResult, DeviceServiceManagement.GetDeviceHyperPreciseStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseLocation("/devices/services"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        query: [
          { name: "imei", value: request.imei, schema: s.string() },
          { name: "accountNumber", value: request.accountNumber, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bullseyeServiceResultSchema },
        errorFactory: DeviceServiceManagement.GetDeviceHyperPreciseStatusError,
      },
      options,
    );
  }

  updateDeviceHyperPreciseStatus(
    request: DeviceServiceManagement.UpdateDeviceHyperPreciseStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<BullseyeServiceResult, DeviceServiceManagement.UpdateDeviceHyperPreciseStatusError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseLocation("/devices/services"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: bullseyeServiceRequestSchema },
      },
      {
        success: { kind: "json", schema: bullseyeServiceResultSchema },
        errorFactory: DeviceServiceManagement.UpdateDeviceHyperPreciseStatusError,
      },
      options,
    );
  }
}

export namespace DeviceServiceManagement {
  export type GetDeviceHyperPreciseStatusRequest = {
    imei: string;
    accountNumber: string;
  };

  export class GetDeviceHyperPreciseStatusError extends ResponseError<
    | Declared<"hyperPreciseLocationResult", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult2", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult3", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult4", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult5", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult6", HyperPreciseLocationResult>
  > {
    static readonly errors: ErrorDecoders<GetDeviceHyperPreciseStatusError> = [
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

  export type UpdateDeviceHyperPreciseStatusRequest = {
    body: BullseyeServiceRequest;
  };

  export class UpdateDeviceHyperPreciseStatusError extends ResponseError<
    | Declared<"hyperPreciseLocationResult", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult2", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult3", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult4", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult5", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult6", HyperPreciseLocationResult>
  > {
    static readonly errors: ErrorDecoders<UpdateDeviceHyperPreciseStatusError> = [
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
