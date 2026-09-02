import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import {
  aggregateSessionReportRequestSchema,
  type AggregateSessionReportRequest,
} from "../models/aggregate-session-report-request.js";
import {
  aggregateSessionReportSchema,
  type AggregateSessionReport,
} from "../models/aggregate-session-report.js";
import {
  aggregatedReportCallbackResultSchema,
  type AggregatedReportCallbackResult,
} from "../models/aggregated-report-callback-result.js";
import {
  hyperPreciseLocationResultSchema,
  type HyperPreciseLocationResult,
} from "../models/hyper-precise-location-result.js";
import { sessionReportRequestSchema, type SessionReportRequest } from "../models/session-report-request.js";
import { sessionReportSchema, type SessionReport } from "../models/session-report.js";
import type { Servers } from "../servers.js";

export class DeviceReports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  calculateAggregatedReportAsynchronous(
    request: DeviceReports.CalculateAggregatedReportAsynchronousRequest,
    options?: RequestOptions,
  ): ApiPromise<AggregatedReportCallbackResult, DeviceReports.CalculateAggregatedReportAsynchronousError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseLocation("/report/async/aggregate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: aggregateSessionReportRequestSchema },
      },
      {
        success: { kind: "json", schema: aggregatedReportCallbackResultSchema },
        errorFactory: DeviceReports.CalculateAggregatedReportAsynchronousError,
      },
      options,
    );
  }

  calculateAggregatedReportSynchronous(
    request: DeviceReports.CalculateAggregatedReportSynchronousRequest,
    options?: RequestOptions,
  ): ApiPromise<AggregateSessionReport, DeviceReports.CalculateAggregatedReportSynchronousError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseLocation("/report/aggregate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: aggregateSessionReportRequestSchema },
      },
      {
        success: { kind: "json", schema: aggregateSessionReportSchema },
        errorFactory: DeviceReports.CalculateAggregatedReportSynchronousError,
      },
      options,
    );
  }

  getSessionsReport(
    request: DeviceReports.GetSessionsReportRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionReport, DeviceReports.GetSessionsReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseLocation("/report/sessions"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: sessionReportRequestSchema },
      },
      {
        success: { kind: "json", schema: sessionReportSchema },
        errorFactory: DeviceReports.GetSessionsReportError,
      },
      options,
    );
  }
}

export namespace DeviceReports {
  export type CalculateAggregatedReportAsynchronousRequest = {
    body: AggregateSessionReportRequest;
  };

  export class CalculateAggregatedReportAsynchronousError extends ResponseError<
    | Declared<"hyperPreciseLocationResult", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult2", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult3", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult4", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult5", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult6", HyperPreciseLocationResult>
  > {
    static readonly errors: ErrorDecoders<CalculateAggregatedReportAsynchronousError> = [
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

  export type CalculateAggregatedReportSynchronousRequest = {
    body: AggregateSessionReportRequest;
  };

  export class CalculateAggregatedReportSynchronousError extends ResponseError<
    | Declared<"hyperPreciseLocationResult", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult2", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult3", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult4", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult5", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult6", HyperPreciseLocationResult>
  > {
    static readonly errors: ErrorDecoders<CalculateAggregatedReportSynchronousError> = [
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

  export type GetSessionsReportRequest = {
    body: SessionReportRequest;
  };

  export class GetSessionsReportError extends ResponseError<
    | Declared<"hyperPreciseLocationResult", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult2", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult3", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult4", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult5", HyperPreciseLocationResult>
    | Declared<"hyperPreciseLocationResult6", HyperPreciseLocationResult>
  > {
    static readonly errors: ErrorDecoders<GetSessionsReportError> = [
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
