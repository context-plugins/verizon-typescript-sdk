import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { hplAddDevicesRequestSchema, type HplAddDevicesRequest } from "../models/hpl-add-devices-request.js";
import {
  hyperPreciseLocationResultSchema,
  type HyperPreciseLocationResult,
} from "../models/hyper-precise-location-result.js";
import type { Servers } from "../servers.js";

/**
 * Manage the devices on the account
 */
export class HplDeviceManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Adds up to 200 new devices, without provisioning lines of service for them.
   *
   * @remarks
   * Use this API if you want to manage some device settings before you are ready to activate
   * service for the devices.
   *
   * @returns For each device in the request, contains device identifiers and a success or failure
   * response.
   *
   * @throws {@link HplDeviceManagement.AddDevicesHyperPreciseError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addDevicesHyperPrecise(
    request: HplDeviceManagement.AddDevicesHyperPreciseRequest,
    options?: RequestOptions,
  ): ApiPromise<HplAddDevicesRequest[], HplDeviceManagement.AddDevicesHyperPreciseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.hyperPreciseLocation("/devices/actions/add"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: hplAddDevicesRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => hplAddDevicesRequestSchema)) },
        errorFactory: HplDeviceManagement.AddDevicesHyperPreciseError,
      },
      options,
    );
  }
}

export namespace HplDeviceManagement {
  export type AddDevicesHyperPreciseRequest = {
    /** Devices to add to the account. */
    body: HplAddDevicesRequest;
  };

  export class AddDevicesHyperPreciseError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"hyperPreciseLocationResult", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult2", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult3", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult4", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult5", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult6", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult7", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult8", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult9", HyperPreciseLocationResult>
    >;

    static readonly errors: ErrorDecoders<AddDevicesHyperPreciseError> = [
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
        on: 405,
        kind: "hyperPreciseLocationResult5",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: 406,
        kind: "hyperPreciseLocationResult6",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: 429,
        kind: "hyperPreciseLocationResult7",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: 500,
        kind: "hyperPreciseLocationResult8",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
      {
        on: "default",
        kind: "hyperPreciseLocationResult9",
        decode: { kind: "json", schema: hyperPreciseLocationResultSchema },
      },
    ];
  }
}
