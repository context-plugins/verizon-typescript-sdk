import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  dtoListSensorDevicesRequestSchema,
  type DtoListSensorDevicesRequest,
} from "../models/dto-list-sensor-devices-request.js";
import {
  dtoOffBoardSensorRequestSchema,
  type DtoOffBoardSensorRequest,
} from "../models/dto-off-board-sensor-request.js";
import {
  dtoOnBoardSensorRequestSchema,
  type DtoOnBoardSensorRequest,
} from "../models/dto-on-board-sensor-request.js";
import {
  dtoSensorOffBoardStatusRequestSchema,
  type DtoSensorOffBoardStatusRequest,
} from "../models/dto-sensor-off-board-status-request.js";
import {
  dtoSensorOffBoardingStatusResponseSchema,
  type DtoSensorOffBoardingStatusResponse,
} from "../models/dto-sensor-off-boarding-status-response.js";
import {
  dtoSensorOnBoardStatusRequestSchema,
  type DtoSensorOnBoardStatusRequest,
} from "../models/dto-sensor-on-board-status-request.js";
import {
  dtoSensorOnBoardingStatusResponseSchema,
  type DtoSensorOnBoardingStatusResponse,
} from "../models/dto-sensor-on-boarding-status-response.js";
import { managementErrorSchema, type ManagementError } from "../models/management-error.js";
import { managementError400Schema, type ManagementError400 } from "../models/management-error400.js";
import { managementError403Schema, type ManagementError403 } from "../models/management-error403.js";
import { managementError404Schema, type ManagementError404 } from "../models/management-error404.js";
import { managementError500Schema, type ManagementError500 } from "../models/management-error500.js";
import { resourceDeviceSchema, type ResourceDevice } from "../models/resource-device.js";
import type { Servers } from "../servers.js";

export class SensorInsightsSensors {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  sensorInsightsListSensorDevicesRequest(
    request: SensorInsightsSensors.SensorInsightsListSensorDevicesRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ResourceDevice[], SensorInsightsSensors.SensorInsightsListSensorDevicesRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/devices/sensors/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoListSensorDevicesRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => resourceDeviceSchema)) },
        errorFactory: SensorInsightsSensors.SensorInsightsListSensorDevicesRequestError,
      },
      options,
    );
  }

  sensorInsightsOffBoardSensorRequest(
    request: SensorInsightsSensors.SensorInsightsOffBoardSensorRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SensorInsightsSensors.SensorInsightsOffBoardSensorRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/devices/sensors/offboard"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoOffBoardSensorRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: SensorInsightsSensors.SensorInsightsOffBoardSensorRequestError,
      },
      options,
    );
  }

  sensorInsightsOnBoardSensorRequest(
    request: SensorInsightsSensors.SensorInsightsOnBoardSensorRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SensorInsightsSensors.SensorInsightsOnBoardSensorRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/devices/sensors/onboard"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoOnBoardSensorRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: SensorInsightsSensors.SensorInsightsOnBoardSensorRequestError,
      },
      options,
    );
  }

  sensorInsightsSensorOffBoardingStatusRequest(
    request: SensorInsightsSensors.SensorInsightsSensorOffBoardingStatusRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DtoSensorOffBoardingStatusResponse,
    SensorInsightsSensors.SensorInsightsSensorOffBoardingStatusRequestError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/devices/sensors/offboard/status/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoSensorOffBoardStatusRequestSchema },
      },
      {
        success: { kind: "json", schema: dtoSensorOffBoardingStatusResponseSchema },
        errorFactory: SensorInsightsSensors.SensorInsightsSensorOffBoardingStatusRequestError,
      },
      options,
    );
  }

  sensorInsightsSensorOnBoardStatusRequest(
    request: SensorInsightsSensors.SensorInsightsSensorOnBoardStatusRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DtoSensorOnBoardingStatusResponse,
    SensorInsightsSensors.SensorInsightsSensorOnBoardStatusRequestError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/devices/sensors/onboard/status/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoSensorOnBoardStatusRequestSchema },
      },
      {
        success: { kind: "json", schema: dtoSensorOnBoardingStatusResponseSchema },
        errorFactory: SensorInsightsSensors.SensorInsightsSensorOnBoardStatusRequestError,
      },
      options,
    );
  }
}

export namespace SensorInsightsSensors {
  export type SensorInsightsListSensorDevicesRequestRequest = {
    body: DtoListSensorDevicesRequest;
  };

  export class SensorInsightsListSensorDevicesRequestError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError", ManagementError>
    | Declared<"managementError403", ManagementError403>
    | Declared<"managementError404", ManagementError404>
    | Declared<"managementError2", ManagementError>
    | Declared<"managementError3", ManagementError>
    | Declared<"managementError4", ManagementError>
    | Declared<"managementError500", ManagementError500>
    | Declared<"managementError5", ManagementError>
  > {
    static readonly errors: ErrorDecoders<SensorInsightsListSensorDevicesRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: [400, 599], kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }

  export type SensorInsightsOffBoardSensorRequestRequest = {
    body: DtoOffBoardSensorRequest;
  };

  export class SensorInsightsOffBoardSensorRequestError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError", ManagementError>
    | Declared<"managementError403", ManagementError403>
  > {
    static readonly errors: ErrorDecoders<SensorInsightsOffBoardSensorRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
    ];
  }

  export type SensorInsightsOnBoardSensorRequestRequest = {
    body: DtoOnBoardSensorRequest;
  };

  export class SensorInsightsOnBoardSensorRequestError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError", ManagementError>
    | Declared<"managementError403", ManagementError403>
    | Declared<"managementError2", ManagementError>
    | Declared<"managementError3", ManagementError>
    | Declared<"managementError4", ManagementError>
    | Declared<"managementError500", ManagementError500>
    | Declared<"managementError5", ManagementError>
  > {
    static readonly errors: ErrorDecoders<SensorInsightsOnBoardSensorRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: [400, 599], kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }

  export type SensorInsightsSensorOffBoardingStatusRequestRequest = {
    body: DtoSensorOffBoardStatusRequest;
  };

  export class SensorInsightsSensorOffBoardingStatusRequestError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError", ManagementError>
    | Declared<"managementError403", ManagementError403>
    | Declared<"managementError404", ManagementError404>
    | Declared<"managementError2", ManagementError>
    | Declared<"managementError3", ManagementError>
    | Declared<"managementError4", ManagementError>
    | Declared<"managementError500", ManagementError500>
    | Declared<"managementError5", ManagementError>
  > {
    static readonly errors: ErrorDecoders<SensorInsightsSensorOffBoardingStatusRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: [400, 599], kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }

  export type SensorInsightsSensorOnBoardStatusRequestRequest = {
    body: DtoSensorOnBoardStatusRequest;
  };

  export class SensorInsightsSensorOnBoardStatusRequestError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError", ManagementError>
    | Declared<"managementError403", ManagementError403>
    | Declared<"managementError404", ManagementError404>
    | Declared<"managementError2", ManagementError>
    | Declared<"managementError3", ManagementError>
    | Declared<"managementError4", ManagementError>
    | Declared<"managementError500", ManagementError500>
    | Declared<"managementError5", ManagementError>
  > {
    static readonly errors: ErrorDecoders<SensorInsightsSensorOnBoardStatusRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: [400, 599], kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }
}
