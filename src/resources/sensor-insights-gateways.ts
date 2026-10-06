import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  dtoListDevicesRequestSchema,
  type DtoListDevicesRequest,
} from "../models/dto-list-devices-request.js";
import { managementErrorSchema, type ManagementError } from "../models/management-error.js";
import { managementError400Schema, type ManagementError400 } from "../models/management-error400.js";
import { managementError403Schema, type ManagementError403 } from "../models/management-error403.js";
import { managementError404Schema, type ManagementError404 } from "../models/management-error404.js";
import { managementError500Schema, type ManagementError500 } from "../models/management-error500.js";
import { resourceDeviceSchema, type ResourceDevice } from "../models/resource-device.js";
import type { Servers } from "../servers.js";

/**
 * Query gateway information
 */
export class SensorInsightsGateways {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get gateway information
   *
   * @returns OK
   *
   * @throws {@link SensorInsightsGateways.SensorInsightsListGatewayDevicesRequestError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sensorInsightsListGatewayDevicesRequest(
    request: SensorInsightsGateways.SensorInsightsListGatewayDevicesRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ResourceDevice[], SensorInsightsGateways.SensorInsightsListGatewayDevicesRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/dm/v1/devices/gateways/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dtoListDevicesRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => resourceDeviceSchema)) },
        errorFactory: SensorInsightsGateways.SensorInsightsListGatewayDevicesRequestError,
      },
      options,
    );
  }
}

export namespace SensorInsightsGateways {
  export type SensorInsightsListGatewayDevicesRequestRequest = {
    /** Get gateway information */
    body: DtoListDevicesRequest;
  };

  export class SensorInsightsListGatewayDevicesRequestError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"managementError400", ManagementError400>
      | Declared<"managementError", ManagementError>
      | Declared<"managementError403", ManagementError403>
      | Declared<"managementError404", ManagementError404>
      | Declared<"managementError2", ManagementError>
      | Declared<"managementError3", ManagementError>
      | Declared<"managementError4", ManagementError>
      | Declared<"managementError500", ManagementError500>
      | Declared<"managementError5", ManagementError>
    >;

    static readonly errors: ErrorDecoders<SensorInsightsListGatewayDevicesRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: "default", kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }
}
