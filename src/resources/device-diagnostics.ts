import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class DeviceDiagnostics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deviceReachabilityStatusUsingPost(
    request: DeviceDiagnostics.DeviceReachabilityStatusUsingPostRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceDiagnostics.DeviceReachabilityStatusUsingPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/diagnostics/basic/devicereachability/status"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: notificationReportStatusRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceDiagnostics.DeviceReachabilityStatusUsingPostError,
      },
      options,
    );
  }

  retrieveActiveMonitorsUsingPost(
    request: DeviceDiagnostics.RetrieveActiveMonitorsUsingPostRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceDiagnostics.RetrieveActiveMonitorsUsingPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/diagnostics/basic/devicereachability/monitors"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
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
    body: NotificationReportStatusRequest;
  };

  export class DeviceReachabilityStatusUsingPostError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<DeviceReachabilityStatusUsingPostError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type RetrieveActiveMonitorsUsingPostRequest = {
    body: RetrieveMonitorsRequest;
  };

  export class RetrieveActiveMonitorsUsingPostError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<RetrieveActiveMonitorsUsingPostError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }
}
