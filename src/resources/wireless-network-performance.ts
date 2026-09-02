import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class WirelessNetworkPerformance {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deviceExperience30DaysHistory(
    request: WirelessNetworkPerformance.DeviceExperience30DaysHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<WnpRequestResponse, WirelessNetworkPerformance.DeviceExperience30DaysHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/intelligence/device-experience/history/30-days"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: getDeviceExperienceScoreHistoryRequestSchema },
      },
      {
        success: { kind: "json", schema: wnpRequestResponseSchema },
        errorFactory: WirelessNetworkPerformance.DeviceExperience30DaysHistoryError,
      },
      options,
    );
  }

  deviceExperienceBulkLatest(
    request: WirelessNetworkPerformance.DeviceExperienceBulkLatestRequest,
    options?: RequestOptions,
  ): ApiPromise<WnpRequestResponse, WirelessNetworkPerformance.DeviceExperienceBulkLatestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/intelligence/device-experience/bulk/latest"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: getDeviceExperienceScoreBulkRequestSchema },
      },
      {
        success: { kind: "json", schema: wnpRequestResponseSchema },
        errorFactory: WirelessNetworkPerformance.DeviceExperienceBulkLatestError,
      },
      options,
    );
  }

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
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/intelligence/wireless-coverage"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: m2Mv1IntelligenceWirelessCoverageRequestSchema },
      },
      {
        success: { kind: "json", schema: wnpRequestResponseSchema },
        errorFactory: WirelessNetworkPerformance.Domestic4GAnd5GNationwideNetworkCoverageError,
      },
      options,
    );
  }

  nearRealTimeNetworkConditions(
    request: WirelessNetworkPerformance.NearRealTimeNetworkConditionsRequest,
    options?: RequestOptions,
  ): ApiPromise<WnpRequestResponse, WirelessNetworkPerformance.NearRealTimeNetworkConditionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/intelligence/network-conditions"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: getNetworkConditionsRequestSchema },
      },
      {
        success: { kind: "json", schema: wnpRequestResponseSchema },
        errorFactory: WirelessNetworkPerformance.NearRealTimeNetworkConditionsError,
      },
      options,
    );
  }

  siteProximity(
    request: WirelessNetworkPerformance.SiteProximityRequest,
    options?: RequestOptions,
  ): ApiPromise<WnpRequestResponse, WirelessNetworkPerformance.SiteProximityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/intelligence/site-proximity/action/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
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
    body: GetDeviceExperienceScoreHistoryRequest;
  };

  export class DeviceExperience30DaysHistoryError extends ResponseError<
    Declared<"wnpRestErrorResponse", WnpRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<DeviceExperience30DaysHistoryError> = [
      {
        on: [400, 599],
        kind: "wnpRestErrorResponse",
        decode: { kind: "json", schema: wnpRestErrorResponseSchema },
      },
    ];
  }

  export type DeviceExperienceBulkLatestRequest = {
    body: GetDeviceExperienceScoreBulkRequest;
  };

  export class DeviceExperienceBulkLatestError extends ResponseError<
    Declared<"wnpRestErrorResponse", WnpRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<DeviceExperienceBulkLatestError> = [
      {
        on: [400, 599],
        kind: "wnpRestErrorResponse",
        decode: { kind: "json", schema: wnpRestErrorResponseSchema },
      },
    ];
  }

  export type Domestic4GAnd5GNationwideNetworkCoverageRequest = {
    body: M2MV1IntelligenceWirelessCoverageRequest;
  };

  export class Domestic4GAnd5GNationwideNetworkCoverageError extends ResponseError<
    Declared<"wnpRestErrorResponse", WnpRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<Domestic4GAnd5GNationwideNetworkCoverageError> = [
      {
        on: [400, 599],
        kind: "wnpRestErrorResponse",
        decode: { kind: "json", schema: wnpRestErrorResponseSchema },
      },
    ];
  }

  export type NearRealTimeNetworkConditionsRequest = {
    body: GetNetworkConditionsRequest;
  };

  export class NearRealTimeNetworkConditionsError extends ResponseError<
    Declared<"wnpRestErrorResponse", WnpRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<NearRealTimeNetworkConditionsError> = [
      {
        on: [400, 599],
        kind: "wnpRestErrorResponse",
        decode: { kind: "json", schema: wnpRestErrorResponseSchema },
      },
    ];
  }

  export type SiteProximityRequest = {
    body: GetNetworkConditionsRequest;
  };

  export class SiteProximityError extends ResponseError<
    Declared<"wnpRestErrorResponse", WnpRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<SiteProximityError> = [
      {
        on: [400, 599],
        kind: "wnpRestErrorResponse",
        decode: { kind: "json", schema: wnpRestErrorResponseSchema },
      },
    ];
  }
}
