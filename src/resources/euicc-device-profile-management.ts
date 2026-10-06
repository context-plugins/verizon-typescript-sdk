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

  /**
   * Delete a local profile from eUICC devices.
   *
   * @remarks
   * Delete a local profile from eUICC devices. If the local profile is enabled, it will first be
   * disabled and the boot or default profile will be enabled.
   *
   * @returns Request ID
   *
   * @throws {@link EUiccDeviceProfileManagement.DeleteLocalProfileError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLocalProfile(
    request: EUiccDeviceProfileManagement.DeleteLocalProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, EUiccDeviceProfileManagement.DeleteLocalProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/delete"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: profileChangeStateRequestSchema },
      },
      {
        success: { kind: "json", schema: requestResponseSchema },
        errorFactory: EUiccDeviceProfileManagement.DeleteLocalProfileError,
      },
      options,
    );
  }

  /**
   * Disable a local profile on eUICC devices.
   *
   * @remarks
   * Disable a local profile on eUICC devices. The default or boot profile will become the enabled
   * profile.
   *
   * @returns Request ID
   *
   * @throws {@link EUiccDeviceProfileManagement.DisableLocalProfileError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disableLocalProfile(
    request: EUiccDeviceProfileManagement.DisableLocalProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, EUiccDeviceProfileManagement.DisableLocalProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/disable"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: profileChangeStateRequestSchema },
      },
      {
        success: { kind: "json", schema: requestResponseSchema },
        errorFactory: EUiccDeviceProfileManagement.DisableLocalProfileError,
      },
      options,
    );
  }

  /**
   * Download a local profile to eUICC devices and leave the profile disabled.
   *
   * @remarks
   * Downloads an eUICC local profile to devices and leaves the profile disabled.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link EUiccDeviceProfileManagement.DownloadLocalProfileToDisableError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadLocalProfileToDisable(
    request: EUiccDeviceProfileManagement.DownloadLocalProfileToDisableRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, EUiccDeviceProfileManagement.DownloadLocalProfileToDisableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/download_disable"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: profileChangeStateRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: EUiccDeviceProfileManagement.DownloadLocalProfileToDisableError,
      },
      options,
    );
  }

  /**
   * Download a local profile to eUICC devices and enable the profile.
   *
   * @remarks
   * Downloads an eUICC local profile to devices and enables the profile.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link EUiccDeviceProfileManagement.DownloadLocalProfileToEnableError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadLocalProfileToEnable(
    request: EUiccDeviceProfileManagement.DownloadLocalProfileToEnableRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, EUiccDeviceProfileManagement.DownloadLocalProfileToEnableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/download_enable"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: profileChangeStateRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: EUiccDeviceProfileManagement.DownloadLocalProfileToEnableError,
      },
      options,
    );
  }

  /**
   * Enable a local profile on eUICC devices.
   *
   * @remarks
   * Enable a local profile that has been downloaded to eUICC devices.
   *
   * @returns Request ID
   *
   * @throws {@link EUiccDeviceProfileManagement.EnableLocalProfileError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enableLocalProfile(
    request: EUiccDeviceProfileManagement.EnableLocalProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, EUiccDeviceProfileManagement.EnableLocalProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/enable"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** Update state */
    body: ProfileChangeStateRequest;
  };

  export class DeleteLocalProfileError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"restErrorResponse", RestErrorResponse>>;

    static readonly errors: ErrorDecoders<DeleteLocalProfileError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }

  export type DisableLocalProfileRequest = {
    /** Update state */
    body: ProfileChangeStateRequest;
  };

  export class DisableLocalProfileError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"restErrorResponse", RestErrorResponse>>;

    static readonly errors: ErrorDecoders<DisableLocalProfileError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }

  export type DownloadLocalProfileToDisableRequest = {
    /** Device Profile Query */
    body: ProfileChangeStateRequest;
  };

  export class DownloadLocalProfileToDisableError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<DownloadLocalProfileToDisableError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type DownloadLocalProfileToEnableRequest = {
    /** Device Profile Query */
    body: ProfileChangeStateRequest;
  };

  export class DownloadLocalProfileToEnableError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<DownloadLocalProfileToEnableError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type EnableLocalProfileRequest = {
    /** Update state */
    body: ProfileChangeStateRequest;
  };

  export class EnableLocalProfileError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"restErrorResponse", RestErrorResponse>>;

    static readonly errors: ErrorDecoders<EnableLocalProfileError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }
}
