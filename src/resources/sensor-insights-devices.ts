import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  dtoDeviceActionSetResponseSchema,
  type DtoDeviceActionSetResponse,
} from "../models/dto-device-action-set-response.js";
import {
  dtoExpandedDeviceResponseSchema,
  type DtoExpandedDeviceResponse,
} from "../models/dto-expanded-device-response.js";
import {
  dtoLastReportedTimeRequestSchema,
  type DtoLastReportedTimeRequest,
} from "../models/dto-last-reported-time-request.js";
import {
  dtoLastReportedTimeResponseSchema,
  type DtoLastReportedTimeResponse,
} from "../models/dto-last-reported-time-response.js";
import {
  dtoListDeviceExperienceHistoryRequestSchema,
  type DtoListDeviceExperienceHistoryRequest,
} from "../models/dto-list-device-experience-history-request.js";
import {
  dtoListDevicesRequestSchema,
  type DtoListDevicesRequest,
} from "../models/dto-list-devices-request.js";
import {
  dtoListNetworkExperienceHistoryRequestSchema,
  type DtoListNetworkExperienceHistoryRequest,
} from "../models/dto-list-network-experience-history-request.js";
import {
  dtoPatchDeviceRequestSchema,
  type DtoPatchDeviceRequest,
} from "../models/dto-patch-device-request.js";
import { managementErrorSchema, type ManagementError } from "../models/management-error.js";
import { managementError400Schema, type ManagementError400 } from "../models/management-error400.js";
import { managementError403Schema, type ManagementError403 } from "../models/management-error403.js";
import { managementError404Schema, type ManagementError404 } from "../models/management-error404.js";
import { managementError500Schema, type ManagementError500 } from "../models/management-error500.js";
import { resourceDeviceSchema, type ResourceDevice } from "../models/resource-device.js";
import {
  dmV1DevicesActionsSetRequestSchema,
  type DmV1DevicesActionsSetRequest,
} from "../models/unions/dm-v1-devices-actions-set-request.js";
import {
  userDeviceExperienceHistorySchema,
  type UserDeviceExperienceHistory,
} from "../models/user-device-experience-history.js";
import {
  userNetworkExperienceHistorySchema,
  type UserNetworkExperienceHistory,
} from "../models/user-network-experience-history.js";
import type { Servers } from "../servers.js";

export class SensorInsightsDevices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  sensorInsightsDeviceActionSetRequest(
    request: SensorInsightsDevices.SensorInsightsDeviceActionSetRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<DtoDeviceActionSetResponse, SensorInsightsDevices.SensorInsightsDeviceActionSetRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/devices/actions/set"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dmV1DevicesActionsSetRequestSchema },
      },
      {
        success: { kind: "json", schema: dtoDeviceActionSetResponseSchema },
        errorFactory: SensorInsightsDevices.SensorInsightsDeviceActionSetRequestError,
      },
      options,
    );
  }

  sensorInsightsLastReportedTimeRequest(
    request: SensorInsightsDevices.SensorInsightsLastReportedTimeRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DtoLastReportedTimeResponse,
    SensorInsightsDevices.SensorInsightsLastReportedTimeRequestError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/devices/lastreported"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoLastReportedTimeRequestSchema },
      },
      {
        success: { kind: "json", schema: dtoLastReportedTimeResponseSchema },
        errorFactory: SensorInsightsDevices.SensorInsightsLastReportedTimeRequestError,
      },
      options,
    );
  }

  sensorInsightsListDeviceExperienceHistoryRequest(
    request: SensorInsightsDevices.SensorInsightsListDeviceExperienceHistoryRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<
    UserDeviceExperienceHistory[],
    SensorInsightsDevices.SensorInsightsListDeviceExperienceHistoryRequestError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/devices/experience/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoListDeviceExperienceHistoryRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => userDeviceExperienceHistorySchema)) },
        errorFactory: SensorInsightsDevices.SensorInsightsListDeviceExperienceHistoryRequestError,
      },
      options,
    );
  }

  sensorInsightsListDevicesRequest(
    request: SensorInsightsDevices.SensorInsightsListDevicesRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<DtoExpandedDeviceResponse[], SensorInsightsDevices.SensorInsightsListDevicesRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/devices/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoListDevicesRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dtoExpandedDeviceResponseSchema)) },
        errorFactory: SensorInsightsDevices.SensorInsightsListDevicesRequestError,
      },
      options,
    );
  }

  sensorInsightsListNetworkExperienceHistoryRequest(
    request: SensorInsightsDevices.SensorInsightsListNetworkExperienceHistoryRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<
    UserNetworkExperienceHistory[],
    SensorInsightsDevices.SensorInsightsListNetworkExperienceHistoryRequestError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/devices/networkexperience/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoListNetworkExperienceHistoryRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => userNetworkExperienceHistorySchema)) },
        errorFactory: SensorInsightsDevices.SensorInsightsListNetworkExperienceHistoryRequestError,
      },
      options,
    );
  }

  sensorInsightsPatchDeviceRequest(
    request: SensorInsightsDevices.SensorInsightsPatchDeviceRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ResourceDevice, SensorInsightsDevices.SensorInsightsPatchDeviceRequestError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/devices"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoPatchDeviceRequestSchema },
      },
      {
        success: { kind: "json", schema: resourceDeviceSchema },
        errorFactory: SensorInsightsDevices.SensorInsightsPatchDeviceRequestError,
      },
      options,
    );
  }
}

export namespace SensorInsightsDevices {
  export type SensorInsightsDeviceActionSetRequestRequest = {
    body: DmV1DevicesActionsSetRequest;
  };

  export class SensorInsightsDeviceActionSetRequestError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError403", ManagementError403>
    | Declared<"managementError404", ManagementError404>
  > {
    static readonly errors: ErrorDecoders<SensorInsightsDeviceActionSetRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
    ];
  }

  export type SensorInsightsLastReportedTimeRequestRequest = {
    body: DtoLastReportedTimeRequest;
  };

  export class SensorInsightsLastReportedTimeRequestError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError403", ManagementError403>
    | Declared<"managementError404", ManagementError404>
  > {
    static readonly errors: ErrorDecoders<SensorInsightsLastReportedTimeRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
    ];
  }

  export type SensorInsightsListDeviceExperienceHistoryRequestRequest = {
    body: DtoListDeviceExperienceHistoryRequest;
  };

  export class SensorInsightsListDeviceExperienceHistoryRequestError extends ResponseError<
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
    static readonly errors: ErrorDecoders<SensorInsightsListDeviceExperienceHistoryRequestError> = [
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

  export type SensorInsightsListDevicesRequestRequest = {
    body: DtoListDevicesRequest;
  };

  export class SensorInsightsListDevicesRequestError extends ResponseError<
    | Declared<"managementError", ManagementError>
    | Declared<"managementError2", ManagementError>
    | Declared<"managementError3", ManagementError>
    | Declared<"managementError4", ManagementError>
    | Declared<"managementError5", ManagementError>
    | Declared<"managementError6", ManagementError>
    | Declared<"managementError7", ManagementError>
    | Declared<"managementError8", ManagementError>
    | Declared<"managementError9", ManagementError>
  > {
    static readonly errors: ErrorDecoders<SensorInsightsListDevicesRequestError> = [
      { on: 400, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 401, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 404, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 406, kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError6", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError7", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError8", decode: { kind: "json", schema: managementErrorSchema } },
      { on: [400, 599], kind: "managementError9", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }

  export type SensorInsightsListNetworkExperienceHistoryRequestRequest = {
    body: DtoListNetworkExperienceHistoryRequest;
  };

  export class SensorInsightsListNetworkExperienceHistoryRequestError extends ResponseError<
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
    static readonly errors: ErrorDecoders<SensorInsightsListNetworkExperienceHistoryRequestError> = [
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

  export type SensorInsightsPatchDeviceRequestRequest = {
    body: DtoPatchDeviceRequest;
  };

  export class SensorInsightsPatchDeviceRequestError extends ResponseError<
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
    static readonly errors: ErrorDecoders<SensorInsightsPatchDeviceRequestError> = [
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
