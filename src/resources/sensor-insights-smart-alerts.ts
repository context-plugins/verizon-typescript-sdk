import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { dtoBulkUpdateSchema, type DtoBulkUpdate } from "../models/dto-bulk-update.js";
import {
  dtoListSmartAlertsRequestSchema,
  type DtoListSmartAlertsRequest,
} from "../models/dto-list-smart-alerts-request.js";
import {
  dtoPatchSmartAlertRequestSchema,
  type DtoPatchSmartAlertRequest,
} from "../models/dto-patch-smart-alert-request.js";
import { managementErrorSchema, type ManagementError } from "../models/management-error.js";
import { managementError400Schema, type ManagementError400 } from "../models/management-error400.js";
import { managementError403Schema, type ManagementError403 } from "../models/management-error403.js";
import { managementError404Schema, type ManagementError404 } from "../models/management-error404.js";
import { managementError500Schema, type ManagementError500 } from "../models/management-error500.js";
import { userSmartAlertSchema, type UserSmartAlert } from "../models/user-smart-alert.js";
import type { Servers } from "../servers.js";

export class SensorInsightsSmartAlerts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  sensorInsightsBulkUpdate(
    request: SensorInsightsSmartAlerts.SensorInsightsBulkUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<UserSmartAlert, SensorInsightsSmartAlerts.SensorInsightsBulkUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/smartAlerts/actions/bulkupdate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoBulkUpdateSchema },
      },
      {
        success: { kind: "json", schema: userSmartAlertSchema },
        errorFactory: SensorInsightsSmartAlerts.SensorInsightsBulkUpdateError,
      },
      options,
    );
  }

  sensorInsightsListSmartAlertsRequest(
    request: SensorInsightsSmartAlerts.SensorInsightsListSmartAlertsRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<UserSmartAlert[], SensorInsightsSmartAlerts.SensorInsightsListSmartAlertsRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/smartAlerts/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoListSmartAlertsRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => userSmartAlertSchema)) },
        errorFactory: SensorInsightsSmartAlerts.SensorInsightsListSmartAlertsRequestError,
      },
      options,
    );
  }

  sensorInsightsPatchSmartAlertRequest(
    request: SensorInsightsSmartAlerts.SensorInsightsPatchSmartAlertRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<UserSmartAlert, SensorInsightsSmartAlerts.SensorInsightsPatchSmartAlertRequestError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/smartAlerts"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoPatchSmartAlertRequestSchema },
      },
      {
        success: { kind: "json", schema: userSmartAlertSchema },
        errorFactory: SensorInsightsSmartAlerts.SensorInsightsPatchSmartAlertRequestError,
      },
      options,
    );
  }
}

export namespace SensorInsightsSmartAlerts {
  export type SensorInsightsBulkUpdateRequest = {
    body: DtoBulkUpdate;
  };

  export class SensorInsightsBulkUpdateError extends ResponseError<
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
    static readonly errors: ErrorDecoders<SensorInsightsBulkUpdateError> = [
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

  export type SensorInsightsListSmartAlertsRequestRequest = {
    body: DtoListSmartAlertsRequest;
  };

  export class SensorInsightsListSmartAlertsRequestError extends ResponseError<
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
    static readonly errors: ErrorDecoders<SensorInsightsListSmartAlertsRequestError> = [
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

  export type SensorInsightsPatchSmartAlertRequestRequest = {
    body: DtoPatchSmartAlertRequest;
  };

  export class SensorInsightsPatchSmartAlertRequestError extends ResponseError<
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
    static readonly errors: ErrorDecoders<SensorInsightsPatchSmartAlertRequestError> = [
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
