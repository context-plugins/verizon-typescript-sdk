import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Locate devices.
 */
export class DevicesLocations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel a queued location report
   *
   * @remarks
   * Cancel a queued device location report.
   *
   * @returns Report generation cancelled.
   *
   * @throws {@link DevicesLocations.CancelQueuedLocationReportGenerationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelQueuedLocationReportGeneration(
    request: DevicesLocations.CancelQueuedLocationReportGenerationRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionId, DevicesLocations.CancelQueuedLocationReportGenerationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.deviceLocation("/locationreports/{accountName}/report/{txid}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "txid", value: request.txid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionIdSchema },
        errorFactory: DevicesLocations.CancelQueuedLocationReportGenerationError,
      },
      options,
    );
  }

  /**
   * Create a location report
   *
   * @remarks
   * Request an asynchronous device location report.
   *
   * @returns Request accepted; location report in progress.
   *
   * @throws {@link DevicesLocations.CreateLocationReportError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLocationReport(
    options?: RequestOptions,
  ): ApiPromise<AsynchronousLocationRequestResult, DevicesLocations.CreateLocationReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.deviceLocation("/locationreports"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: asynchronousLocationRequestResultSchema },
        errorFactory: DevicesLocations.CreateLocationReportError,
      },
      options,
    );
  }

  /**
   * Get the status of a location report
   *
   * @remarks
   * Returns the current status of a requested device location report.
   *
   * @returns Location report status.
   *
   * @throws {@link DevicesLocations.GetLocationReportStatusError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLocationReportStatus(
    request: DevicesLocations.GetLocationReportStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<LocationReportStatus, DevicesLocations.GetLocationReportStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.deviceLocation("/locationreports/{accountName}/report/{txid}/status"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "txid", value: request.txid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: locationReportStatusSchema },
        errorFactory: DevicesLocations.GetLocationReportStatusError,
      },
      options,
    );
  }

  /**
   * Obtain locations of IoT or consumer devices
   *
   * @remarks
   * Requests the current or cached location of up to 10,000 IoT or consumer devices (phones,
   * tablets. etc.). This request returns a synchronous transaction ID, and the location information
   * for each device is returned asynchronously as a DeviceLocation callback message.
   *
   * @returns Request accepted; location report in progress
   *
   * @throws {@link DevicesLocations.ListDevicesLocationsAsynchronousError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDevicesLocationsAsynchronous(
    options?: RequestOptions,
  ): ApiPromise<SynchronousLocationRequestResult, DevicesLocations.ListDevicesLocationsAsynchronousError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.deviceLocation("/devicelocations"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: synchronousLocationRequestResultSchema },
        errorFactory: DevicesLocations.ListDevicesLocationsAsynchronousError,
      },
      options,
    );
  }

  /**
   * Obtain locations of devices
   *
   * @remarks
   * This locations endpoint retrieves the locations for a list of devices.
   *
   * @returns List of JSON objects, each containing the position data or an error for a device in
   * the request.
   *
   * @throws {@link DevicesLocations.ListDevicesLocationsSynchronousError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDevicesLocationsSynchronous(
    request: DevicesLocations.ListDevicesLocationsSynchronousRequest,
    options?: RequestOptions,
  ): ApiPromise<Location[], DevicesLocations.ListDevicesLocationsSynchronousError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.deviceLocation("/locations"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: locationRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => locationSchema)) },
        errorFactory: DevicesLocations.ListDevicesLocationsSynchronousError,
      },
      options,
    );
  }

  /**
   * Retrieve a location report
   *
   * @remarks
   * Download a completed asynchronous device location report.
   *
   * @returns Location information for up to 1,000 devices.
   *
   * @throws {@link DevicesLocations.RetrieveLocationReportError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveLocationReport(
    request: DevicesLocations.RetrieveLocationReportRequest,
    options?: RequestOptions,
  ): ApiPromise<LocationReport, DevicesLocations.RetrieveLocationReportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.deviceLocation(
          "/locationreports/{accountName}/report/{txid}/index/{startindex}",
        ),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "txid", value: request.txid, schema: s.string() },
          { name: "startindex", value: request.startindex, schema: s.int() },
        ],
        query: [],
        headers: [],
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
    /** Account identifier in "##########-#####". */
    accountName: string;
    /** Transaction ID of the report to cancel. */
    txid: string;
  };

  export class CancelQueuedLocationReportGenerationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<CancelQueuedLocationReportGenerationError> = [
      {
        on: "default",
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }

  export class CreateLocationReportError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<CreateLocationReportError> = [
      {
        on: "default",
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }

  export type GetLocationReportStatusRequest = {
    /** Account identifier in "##########-#####". */
    accountName: string;
    /** Transaction ID of the report. */
    txid: string;
  };

  export class GetLocationReportStatusError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<GetLocationReportStatusError> = [
      {
        on: "default",
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }

  export class ListDevicesLocationsAsynchronousError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<ListDevicesLocationsAsynchronousError> = [
      {
        on: "default",
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }

  export type ListDevicesLocationsSynchronousRequest = {
    /** Request to obtain location of devices. */
    body: LocationRequest;
  };

  export class ListDevicesLocationsSynchronousError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<ListDevicesLocationsSynchronousError> = [
      {
        on: "default",
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }

  export type RetrieveLocationReportRequest = {
    /** Account identifier in "##########-#####". */
    accountName: string;
    /** Transaction ID from POST /locationreports response. */
    txid: string;
    /** Zero-based number of the first record to return. */
    startindex: number;
  };

  export class RetrieveLocationReportError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<RetrieveLocationReportError> = [
      {
        on: "default",
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }
}
