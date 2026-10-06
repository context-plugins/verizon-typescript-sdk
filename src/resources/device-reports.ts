import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

/**
 * Check device usage
 */
export class DeviceReports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * An aggregated asynchronous sessions and usage report for a user specified selection of devices
   * and date range
   *
   * @remarks
   * Calculate aggregated report per day with number of sessions and usage information. User will
   * receive an asynchronous callback for the specified list of devices (Max 10000) and date range
   * (Max 180 days).
   *
   * @returns A successful response shows the request is queued with a unique `txid` to identify the
   * report data with.
   *
   * @throws {@link DeviceReports.CalculateAggregatedReportAsynchronousError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  calculateAggregatedReportAsynchronous(
    request: DeviceReports.CalculateAggregatedReportAsynchronousRequest,
    options?: RequestOptions,
  ): ApiPromise<AggregatedReportCallbackResult, DeviceReports.CalculateAggregatedReportAsynchronousError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.hyperPreciseLocation("/report/async/aggregate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: aggregateSessionReportRequestSchema },
      },
      {
        success: { kind: "json", schema: aggregatedReportCallbackResultSchema },
        errorFactory: DeviceReports.CalculateAggregatedReportAsynchronousError,
      },
      options,
    );
  }

  /**
   * An aggregated sessions and usage report for a user specified selection of devices and date
   * range
   *
   * @remarks
   * Calculate aggregated report per day with number of sessions and usage information. User will
   * receive synchronous response for specified list of devices (Max 10) and date range (Max 180
   * days).
   *
   * @returns A successful response shows session and usage details for up to 10 devices.
   *
   * @throws {@link DeviceReports.CalculateAggregatedReportSynchronousError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  calculateAggregatedReportSynchronous(
    request: DeviceReports.CalculateAggregatedReportSynchronousRequest,
    options?: RequestOptions,
  ): ApiPromise<AggregateSessionReport, DeviceReports.CalculateAggregatedReportSynchronousError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.hyperPreciseLocation("/report/aggregate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: aggregateSessionReportRequestSchema },
      },
      {
        success: { kind: "json", schema: aggregateSessionReportSchema },
        errorFactory: DeviceReports.CalculateAggregatedReportSynchronousError,
      },
      options,
    );
  }

  /**
   * A daily usage report for a single device for a specified date range (up to 180 days).
   *
   * @remarks
   * Detailed report of session duration and number of bytes transferred per day.
   *
   * @returns A successful response includes the session information for an individual device.
   *
   * @throws {@link DeviceReports.GetSessionsReportError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSessionsReport(
    request: DeviceReports.GetSessionsReportRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionReport, DeviceReports.GetSessionsReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.hyperPreciseLocation("/report/sessions"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** Aggregated session report request. */
    body: AggregateSessionReportRequest;
  };

  export class CalculateAggregatedReportAsynchronousError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"hyperPreciseLocationResult", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult2", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult3", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult4", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult5", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult6", HyperPreciseLocationResult>
    >;

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
    /** Aggregated report request. */
    body: AggregateSessionReportRequest;
  };

  export class CalculateAggregatedReportSynchronousError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"hyperPreciseLocationResult", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult2", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult3", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult4", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult5", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult6", HyperPreciseLocationResult>
    >;

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
    /** Request for sessions report. */
    body: SessionReportRequest;
  };

  export class GetSessionsReportError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"hyperPreciseLocationResult", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult2", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult3", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult4", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult5", HyperPreciseLocationResult>
      | Declared<"hyperPreciseLocationResult6", HyperPreciseLocationResult>
    >;

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
