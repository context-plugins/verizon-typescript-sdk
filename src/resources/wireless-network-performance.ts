import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  getDeviceExperienceScoreBulkRequestSchema,
  type GetDeviceExperienceScoreBulkRequest,
} from "../models/get-device-experience-score-bulk-request.js";
import {
  getDeviceExperienceScoreHistoryRequestSchema,
  type GetDeviceExperienceScoreHistoryRequest,
} from "../models/get-device-experience-score-history-request.js";
import {
  getNetworkConditionsRequestSchema,
  type GetNetworkConditionsRequest,
} from "../models/get-network-conditions-request.js";
import {
  m2Mv1IntelligenceWirelessCoverageRequestSchema,
  type M2MV1IntelligenceWirelessCoverageRequest,
} from "../models/unions/m2-mv1-intelligence-wireless-coverage-request.js";
import { wnpRequestResponseSchema, type WnpRequestResponse } from "../models/wnp-request-response.js";
import { wnpRestErrorResponseSchema, type WnpRestErrorResponse } from "../models/wnp-rest-error-response.js";
import type { Servers } from "../servers.js";

/**
 * Run reports to query current network conditions, historic network conditions, see what wireless
 * technologies are supported in your area or qualify and address for Fixed Wireless Access (FWA).
 */
export class WirelessNetworkPerformance {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Device Experience - 30 days History
   *
   * @remarks
   * A report of a specific device's service scores over a 30 day period.
   *
   * @returns Request ID
   *
   * @throws {@link WirelessNetworkPerformance.DeviceExperience30DaysHistoryError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deviceExperience30DaysHistory(
    request: WirelessNetworkPerformance.DeviceExperience30DaysHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<WnpRequestResponse, WirelessNetworkPerformance.DeviceExperience30DaysHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/intelligence/device-experience/history/30-days"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getDeviceExperienceScoreHistoryRequestSchema },
      },
      {
        success: { kind: "json", schema: wnpRequestResponseSchema },
        errorFactory: WirelessNetworkPerformance.DeviceExperience30DaysHistoryError,
      },
      options,
    );
  }

  /**
   * Device Experience - Bulk Latest
   *
   * @remarks
   * Run a report to view the latest device experience score for specific devices.
   *
   * @returns Request ID
   *
   * @throws {@link WirelessNetworkPerformance.DeviceExperienceBulkLatestError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deviceExperienceBulkLatest(
    request: WirelessNetworkPerformance.DeviceExperienceBulkLatestRequest,
    options?: RequestOptions,
  ): ApiPromise<WnpRequestResponse, WirelessNetworkPerformance.DeviceExperienceBulkLatestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/intelligence/device-experience/bulk/latest"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getDeviceExperienceScoreBulkRequestSchema },
      },
      {
        success: { kind: "json", schema: wnpRequestResponseSchema },
        errorFactory: WirelessNetworkPerformance.DeviceExperienceBulkLatestError,
      },
      options,
    );
  }

  /**
   * Domestic 4G and 5G nationwide network coverage
   *
   * @remarks
   * Run a report for FWA Address qualification or to determine network types available and
   * available coverage. Network types covered include: CAT-M, NB-IOT, LTE, LTE-AWS, 5GNW, MMWAVE
   * and C-BAND.
   *
   * @returns Request ID
   *
   * @throws {@link WirelessNetworkPerformance.Domestic4GAnd5GNationwideNetworkCoverageError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  domestic4GAnd5GNationwideNetworkCoverage(
    request: WirelessNetworkPerformance.Domestic4GAnd5GNationwideNetworkCoverageRequest,
    options?: RequestOptions,
  ): ApiPromise<
    WnpRequestResponse,
    WirelessNetworkPerformance.Domestic4GAnd5GNationwideNetworkCoverageError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/intelligence/wireless-coverage"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: m2Mv1IntelligenceWirelessCoverageRequestSchema },
      },
      {
        success: { kind: "json", schema: wnpRequestResponseSchema },
        errorFactory: WirelessNetworkPerformance.Domestic4GAnd5GNationwideNetworkCoverageError,
      },
      options,
    );
  }

  /**
   * Near real-time network conditions
   *
   * @remarks
   * WNP Query for current network condition.
   *
   * @returns Request ID
   *
   * @throws {@link WirelessNetworkPerformance.NearRealTimeNetworkConditionsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nearRealTimeNetworkConditions(
    request: WirelessNetworkPerformance.NearRealTimeNetworkConditionsRequest,
    options?: RequestOptions,
  ): ApiPromise<WnpRequestResponse, WirelessNetworkPerformance.NearRealTimeNetworkConditionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/intelligence/network-conditions"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getNetworkConditionsRequestSchema },
      },
      {
        success: { kind: "json", schema: wnpRequestResponseSchema },
        errorFactory: WirelessNetworkPerformance.NearRealTimeNetworkConditionsError,
      },
      options,
    );
  }

  /**
   * Site Proximity
   *
   * @remarks
   * Identify the direction and general distance of nearby cell sites and the technology supported
   * by the equipment.
   *
   * @returns Request ID
   *
   * @throws {@link WirelessNetworkPerformance.SiteProximityError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  siteProximity(
    request: WirelessNetworkPerformance.SiteProximityRequest,
    options?: RequestOptions,
  ): ApiPromise<WnpRequestResponse, WirelessNetworkPerformance.SiteProximityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/intelligence/site-proximity/action/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getNetworkConditionsRequestSchema },
      },
      {
        success: { kind: "json", schema: wnpRequestResponseSchema },
        errorFactory: WirelessNetworkPerformance.SiteProximityError,
      },
      options,
    );
  }
}

export namespace WirelessNetworkPerformance {
  export type DeviceExperience30DaysHistoryRequest = {
    /** Request for a device's 30 day experience. */
    body: GetDeviceExperienceScoreHistoryRequest;
  };

  export class DeviceExperience30DaysHistoryError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"wnpRestErrorResponse", WnpRestErrorResponse>>;

    static readonly errors: ErrorDecoders<DeviceExperience30DaysHistoryError> = [
      {
        on: "default",
        kind: "wnpRestErrorResponse",
        decode: { kind: "json", schema: wnpRestErrorResponseSchema },
      },
    ];
  }

  export type DeviceExperienceBulkLatestRequest = {
    /** Request for bulk latest history details. */
    body: GetDeviceExperienceScoreBulkRequest;
  };

  export class DeviceExperienceBulkLatestError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"wnpRestErrorResponse", WnpRestErrorResponse>>;

    static readonly errors: ErrorDecoders<DeviceExperienceBulkLatestError> = [
      {
        on: "default",
        kind: "wnpRestErrorResponse",
        decode: { kind: "json", schema: wnpRestErrorResponseSchema },
      },
    ];
  }

  export type Domestic4GAnd5GNationwideNetworkCoverageRequest = {
    /** Request for network coverage details. */
    body: M2MV1IntelligenceWirelessCoverageRequest;
  };

  export class Domestic4GAnd5GNationwideNetworkCoverageError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"wnpRestErrorResponse", WnpRestErrorResponse>>;

    static readonly errors: ErrorDecoders<Domestic4GAnd5GNationwideNetworkCoverageError> = [
      {
        on: "default",
        kind: "wnpRestErrorResponse",
        decode: { kind: "json", schema: wnpRestErrorResponseSchema },
      },
    ];
  }

  export type NearRealTimeNetworkConditionsRequest = {
    /** Request for current network health. */
    body: GetNetworkConditionsRequest;
  };

  export class NearRealTimeNetworkConditionsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"wnpRestErrorResponse", WnpRestErrorResponse>>;

    static readonly errors: ErrorDecoders<NearRealTimeNetworkConditionsError> = [
      {
        on: "default",
        kind: "wnpRestErrorResponse",
        decode: { kind: "json", schema: wnpRestErrorResponseSchema },
      },
    ];
  }

  export type SiteProximityRequest = {
    /** Request for cell site proximity. */
    body: GetNetworkConditionsRequest;
  };

  export class SiteProximityError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"wnpRestErrorResponse", WnpRestErrorResponse>>;

    static readonly errors: ErrorDecoders<SiteProximityError> = [
      {
        on: "default",
        kind: "wnpRestErrorResponse",
        decode: { kind: "json", schema: wnpRestErrorResponseSchema },
      },
    ];
  }
}
