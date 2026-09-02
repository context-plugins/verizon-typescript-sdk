import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  asynchronousLocationRequestResultSchema,
  type AsynchronousLocationRequestResult,
} from "../models/asynchronous-location-request-result.js";
import { deviceLocationResultSchema, type DeviceLocationResult } from "../models/device-location-result.js";
import { locationReportStatusSchema, type LocationReportStatus } from "../models/location-report-status.js";
import { locationReportSchema, type LocationReport } from "../models/location-report.js";
import { locationRequestSchema, type LocationRequest } from "../models/location-request.js";
import { locationSchema, type Location } from "../models/location.js";
import {
  synchronousLocationRequestResultSchema,
  type SynchronousLocationRequestResult,
} from "../models/synchronous-location-request-result.js";
import { transactionIdSchema, type TransactionId } from "../models/transaction-id.js";
import type { Servers } from "../servers.js";

export class DevicesLocations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  cancelQueuedLocationReportGeneration(
    request: DevicesLocations.CancelQueuedLocationReportGenerationRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionId, DevicesLocations.CancelQueuedLocationReportGenerationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.deviceLocation("/locationreports/{accountName}/report/{txid}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "txid", value: request.txid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionIdSchema },
        errorFactory: DevicesLocations.CancelQueuedLocationReportGenerationError,
      },
      options,
    );
  }

  createLocationReport(
    options?: RequestOptions,
  ): ApiPromise<AsynchronousLocationRequestResult, DevicesLocations.CreateLocationReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.deviceLocation("/locationreports"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: asynchronousLocationRequestResultSchema },
        errorFactory: DevicesLocations.CreateLocationReportError,
      },
      options,
    );
  }

  getLocationReportStatus(
    request: DevicesLocations.GetLocationReportStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<LocationReportStatus, DevicesLocations.GetLocationReportStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.deviceLocation("/locationreports/{accountName}/report/{txid}/status"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "txid", value: request.txid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: locationReportStatusSchema },
        errorFactory: DevicesLocations.GetLocationReportStatusError,
      },
      options,
    );
  }

  listDevicesLocationsAsynchronous(
    options?: RequestOptions,
  ): ApiPromise<SynchronousLocationRequestResult, DevicesLocations.ListDevicesLocationsAsynchronousError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.deviceLocation("/devicelocations"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: synchronousLocationRequestResultSchema },
        errorFactory: DevicesLocations.ListDevicesLocationsAsynchronousError,
      },
      options,
    );
  }

  listDevicesLocationsSynchronous(
    request: DevicesLocations.ListDevicesLocationsSynchronousRequest,
    options?: RequestOptions,
  ): ApiPromise<Location[], DevicesLocations.ListDevicesLocationsSynchronousError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.deviceLocation("/locations"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: locationRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => locationSchema)) },
        errorFactory: DevicesLocations.ListDevicesLocationsSynchronousError,
      },
      options,
    );
  }

  retrieveLocationReport(
    request: DevicesLocations.RetrieveLocationReportRequest,
    options?: RequestOptions,
  ): ApiPromise<LocationReport, DevicesLocations.RetrieveLocationReportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.deviceLocation("/locationreports/{accountName}/report/{txid}/index/{startindex}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "txid", value: request.txid, schema: s.string() },
          { name: "startindex", value: request.startindex, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: locationReportSchema },
        errorFactory: DevicesLocations.RetrieveLocationReportError,
      },
      options,
    );
  }
}

export namespace DevicesLocations {
  export type CancelQueuedLocationReportGenerationRequest = {
    accountName: string;
    txid: string;
  };

  export class CancelQueuedLocationReportGenerationError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<CancelQueuedLocationReportGenerationError> = [
      {
        on: [400, 599],
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }

  export class CreateLocationReportError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<CreateLocationReportError> = [
      {
        on: [400, 599],
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }

  export type GetLocationReportStatusRequest = {
    accountName: string;
    txid: string;
  };

  export class GetLocationReportStatusError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<GetLocationReportStatusError> = [
      {
        on: [400, 599],
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }

  export class ListDevicesLocationsAsynchronousError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<ListDevicesLocationsAsynchronousError> = [
      {
        on: [400, 599],
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }

  export type ListDevicesLocationsSynchronousRequest = {
    body: LocationRequest;
  };

  export class ListDevicesLocationsSynchronousError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<ListDevicesLocationsSynchronousError> = [
      {
        on: [400, 599],
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }

  export type RetrieveLocationReportRequest = {
    accountName: string;
    txid: string;
    startindex: number;
  };

  export class RetrieveLocationReportError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<RetrieveLocationReportError> = [
      {
        on: [400, 599],
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }
}
