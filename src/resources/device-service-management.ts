import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Check status and enable or disable service for Hyper Precise
 */
export class DeviceServiceManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a hyper precise status
   *
   * @remarks
   * Gets the list of a status for hyper-precise location devices.
   *
   * @returns Returns the status of Hyper Precise Location on the device.
   *
   * @throws {@link DeviceServiceManagement.GetDeviceHyperPreciseStatusError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDeviceHyperPreciseStatus(
    request: DeviceServiceManagement.GetDeviceHyperPreciseStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<BullseyeServiceResult, DeviceServiceManagement.GetDeviceHyperPreciseStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.hyperPreciseLocation("/devices/services"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [
          { name: "imei", value: request.imei, schema: s.string() },
          { name: "accountNumber", value: request.accountNumber, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bullseyeServiceResultSchema },
        errorFactory: DeviceServiceManagement.GetDeviceHyperPreciseStatusError,
      },
      options,
    );
  }

  /**
   * Enable or disable hyper-precise
   *
   * @remarks
   * Enable/disable hyper-precise service for a device.
   *
   * @returns Successful response.
   *
   * @throws {@link DeviceServiceManagement.UpdateDeviceHyperPreciseStatusError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDeviceHyperPreciseStatus(
    request: DeviceServiceManagement.UpdateDeviceHyperPreciseStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<BullseyeServiceResult, DeviceServiceManagement.UpdateDeviceHyperPreciseStatusError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.hyperPreciseLocation("/devices/services"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The International Mobile Equipment Identifier of the device. */
    imei: string;
    /** The numeric name of the account and must include leading zeroes. */
    accountNumber: string;
  };

  export class GetDeviceHyperPreciseStatusError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"hyperPreciseLocationResult", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult2", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult3", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult4", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult5", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult6", HyperPreciseLocationResult>
    >;

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
    /** List of devices and hyper-precise required statuses. */
    body: BullseyeServiceRequest;
  };

  export class UpdateDeviceHyperPreciseStatusError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"hyperPreciseLocationResult", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult2", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult3", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult4", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult5", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult6", HyperPreciseLocationResult>
    >;

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
