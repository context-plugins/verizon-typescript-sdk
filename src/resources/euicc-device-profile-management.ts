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
  profileChangeStateRequestSchema,
  type ProfileChangeStateRequest,
} from "../models/profile-change-state-request.js";
import { requestResponseSchema, type RequestResponse } from "../models/request-response.js";
import { restErrorResponseSchema, type RestErrorResponse } from "../models/rest-error-response.js";
import type { Servers } from "../servers.js";

export class EUiccDeviceProfileManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteLocalProfile(
    request: EUiccDeviceProfileManagement.DeleteLocalProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, EUiccDeviceProfileManagement.DeleteLocalProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/delete"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: profileChangeStateRequestSchema },
      },
      {
        success: { kind: "json", schema: requestResponseSchema },
        errorFactory: EUiccDeviceProfileManagement.DeleteLocalProfileError,
      },
      options,
    );
  }

  disableLocalProfile(
    request: EUiccDeviceProfileManagement.DisableLocalProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, EUiccDeviceProfileManagement.DisableLocalProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/disable"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: profileChangeStateRequestSchema },
      },
      {
        success: { kind: "json", schema: requestResponseSchema },
        errorFactory: EUiccDeviceProfileManagement.DisableLocalProfileError,
      },
      options,
    );
  }

  downloadLocalProfileToDisable(
    request: EUiccDeviceProfileManagement.DownloadLocalProfileToDisableRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, EUiccDeviceProfileManagement.DownloadLocalProfileToDisableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/download_disable"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: profileChangeStateRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: EUiccDeviceProfileManagement.DownloadLocalProfileToDisableError,
      },
      options,
    );
  }

  downloadLocalProfileToEnable(
    request: EUiccDeviceProfileManagement.DownloadLocalProfileToEnableRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, EUiccDeviceProfileManagement.DownloadLocalProfileToEnableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/download_enable"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: profileChangeStateRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: EUiccDeviceProfileManagement.DownloadLocalProfileToEnableError,
      },
      options,
    );
  }

  enableLocalProfile(
    request: EUiccDeviceProfileManagement.EnableLocalProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, EUiccDeviceProfileManagement.EnableLocalProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/enable"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: profileChangeStateRequestSchema },
      },
      {
        success: { kind: "json", schema: requestResponseSchema },
        errorFactory: EUiccDeviceProfileManagement.EnableLocalProfileError,
      },
      options,
    );
  }
}

export namespace EUiccDeviceProfileManagement {
  export type DeleteLocalProfileRequest = {
    body: ProfileChangeStateRequest;
  };

  export class DeleteLocalProfileError extends ResponseError<
    Declared<"restErrorResponse", RestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<DeleteLocalProfileError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }

  export type DisableLocalProfileRequest = {
    body: ProfileChangeStateRequest;
  };

  export class DisableLocalProfileError extends ResponseError<
    Declared<"restErrorResponse", RestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<DisableLocalProfileError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }

  export type DownloadLocalProfileToDisableRequest = {
    body: ProfileChangeStateRequest;
  };

  export class DownloadLocalProfileToDisableError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<DownloadLocalProfileToDisableError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type DownloadLocalProfileToEnableRequest = {
    body: ProfileChangeStateRequest;
  };

  export class DownloadLocalProfileToEnableError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<DownloadLocalProfileToEnableError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type EnableLocalProfileRequest = {
    body: ProfileChangeStateRequest;
  };

  export class EnableLocalProfileError extends ResponseError<
    Declared<"restErrorResponse", RestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<EnableLocalProfileError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }
}
