import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  connectivityManagementResultSchema,
  type ConnectivityManagementResult,
} from "../models/connectivity-management-result.js";
import {
  deviceManagementResultSchema,
  type DeviceManagementResult,
} from "../models/device-management-result.js";
import {
  notificationReportStatusRequestSchema,
  type NotificationReportStatusRequest,
} from "../models/notification-report-status-request.js";
import {
  retrieveMonitorsRequestSchema,
  type RetrieveMonitorsRequest,
} from "../models/retrieve-monitors-request.js";
import type { Servers } from "../servers.js";

/**
 * Helps to create & manage diagnostics
 */
export class DeviceDiagnostics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Requests for status of device based on the request type.
   *
   * @remarks
   * If the devices do not already exist in the account, this API resource adds them before
   * activation.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceDiagnostics.DeviceReachabilityStatusUsingPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deviceReachabilityStatusUsingPost(
    request: DeviceDiagnostics.DeviceReachabilityStatusUsingPostRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceDiagnostics.DeviceReachabilityStatusUsingPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/diagnostics/basic/devicereachability/status"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: notificationReportStatusRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceDiagnostics.DeviceReachabilityStatusUsingPostError,
      },
      options,
    );
  }

  /**
   * Retrieve all the active monitors.
   *
   * @remarks
   * Retrieve all the active monitors.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceDiagnostics.RetrieveActiveMonitorsUsingPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveActiveMonitorsUsingPost(
    request: DeviceDiagnostics.RetrieveActiveMonitorsUsingPostRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceDiagnostics.RetrieveActiveMonitorsUsingPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/diagnostics/basic/devicereachability/monitors"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: retrieveMonitorsRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceDiagnostics.RetrieveActiveMonitorsUsingPostError,
      },
      options,
    );
  }
}

export namespace DeviceDiagnostics {
  export type DeviceReachabilityStatusUsingPostRequest = {
    /** Retrieve Reachability Report Status for a device. */
    body: NotificationReportStatusRequest;
  };

  export class DeviceReachabilityStatusUsingPostError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<DeviceReachabilityStatusUsingPostError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type RetrieveActiveMonitorsUsingPostRequest = {
    /** Retrieve Monitor Request. */
    body: RetrieveMonitorsRequest;
  };

  export class RetrieveActiveMonitorsUsingPostError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<RetrieveActiveMonitorsUsingPostError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }
}
