import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import {
  notificationReportRequestSchema,
  type NotificationReportRequest,
} from "../models/notification-report-request.js";
import { requestResponseSchema, type RequestResponse } from "../models/request-response.js";
import { restErrorResponseSchema, type RestErrorResponse } from "../models/rest-error-response.js";
import { stopMonitorRequestSchema, type StopMonitorRequest } from "../models/stop-monitor-request.js";
import type { Servers } from "../servers.js";

export class DeviceMonitoring {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deviceReachability(
    request: DeviceMonitoring.DeviceReachabilityRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, DeviceMonitoring.DeviceReachabilityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/diagnostics/basic/devicereachability"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: notificationReportRequestSchema },
      },
      {
        success: { kind: "json", schema: requestResponseSchema },
        errorFactory: DeviceMonitoring.DeviceReachabilityError,
      },
      options,
    );
  }

  stopDeviceReachability(
    request: DeviceMonitoring.StopDeviceReachabilityRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, DeviceMonitoring.StopDeviceReachabilityError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/diagnostics/basic/devicereachability"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        query: [
          {
            name: "stopreachabilitypayload",
            value: request.stopreachabilitypayload,
            schema: stopMonitorRequestSchema,
          },
        ],
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
    body: NotificationReportRequest;
  };

  export class DeviceReachabilityError extends ResponseError<
    Declared<"restErrorResponse", RestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<DeviceReachabilityError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }

  export type StopDeviceReachabilityRequest = {
    stopreachabilitypayload: StopMonitorRequest;
  };

  export class StopDeviceReachabilityError extends ResponseError<
    Declared<"restErrorResponse", RestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<StopDeviceReachabilityError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }
}
