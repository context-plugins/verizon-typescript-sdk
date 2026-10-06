import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  notificationReportRequestSchema,
  type NotificationReportRequest,
} from "../models/notification-report-request.js";
import { requestResponseSchema, type RequestResponse } from "../models/request-response.js";
import { restErrorResponseSchema, type RestErrorResponse } from "../models/rest-error-response.js";
import { stopMonitorRequestSchema, type StopMonitorRequest } from "../models/stop-monitor-request.js";
import type { Servers } from "../servers.js";

/**
 * Monitor device reachability and connection status.
 */
export class DeviceMonitoring {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Register for notification reports based on the request type.
   *
   * @returns Request ID
   *
   * @throws {@link DeviceMonitoring.DeviceReachabilityError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deviceReachability(
    request: DeviceMonitoring.DeviceReachabilityRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, DeviceMonitoring.DeviceReachabilityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/diagnostics/basic/devicereachability"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: notificationReportRequestSchema },
      },
      {
        success: { kind: "json", schema: requestResponseSchema },
        errorFactory: DeviceMonitoring.DeviceReachabilityError,
      },
      options,
    );
  }

  /**
   * Stop Device Reachability monitors.
   *
   * @returns Request ID
   *
   * @throws {@link DeviceMonitoring.StopDeviceReachabilityError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stopDeviceReachability(
    request: DeviceMonitoring.StopDeviceReachabilityRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, DeviceMonitoring.StopDeviceReachabilityError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.thingspace("/m2m/v1/diagnostics/basic/devicereachability"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [
          {
            name: "stopreachabilitypayload",
            value: request.stopreachabilitypayload,
            schema: stopMonitorRequestSchema,
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: requestResponseSchema },
        errorFactory: DeviceMonitoring.StopDeviceReachabilityError,
      },
      options,
    );
  }
}

export namespace DeviceMonitoring {
  export type DeviceReachabilityRequest = {
    /** Create Reachability Report Request */
    body: NotificationReportRequest;
  };

  export class DeviceReachabilityError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"restErrorResponse", RestErrorResponse>>;

    static readonly errors: ErrorDecoders<DeviceReachabilityError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }

  export type StopDeviceReachabilityRequest = {
    /** Payload for the Stop Device Reachability monitors request. */
    stopreachabilitypayload: StopMonitorRequest;
  };

  export class StopDeviceReachabilityError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"restErrorResponse", RestErrorResponse>>;

    static readonly errors: ErrorDecoders<StopDeviceReachabilityError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }
}
