import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import {
  activateDeviceProfileRequestSchema,
  type ActivateDeviceProfileRequest,
} from "../models/activate-device-profile-request.js";
import {
  deactivateDeviceProfileRequestSchema,
  type DeactivateDeviceProfileRequest,
} from "../models/deactivate-device-profile-request.js";
import { profileRequestSchema, type ProfileRequest } from "../models/profile-request.js";
import { requestResponseSchema, type RequestResponse } from "../models/request-response.js";
import { restErrorResponseSchema, type RestErrorResponse } from "../models/rest-error-response.js";
import {
  setFallbackAttributeRequestSchema,
  type SetFallbackAttributeRequest,
} from "../models/set-fallback-attribute-request.js";
import type { Servers } from "../servers.js";

export class DeviceProfileManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  activateDeviceThroughProfile(
    request: DeviceProfileManagement.ActivateDeviceThroughProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, DeviceProfileManagement.ActivateDeviceThroughProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/activate_enable"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: activateDeviceProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: requestResponseSchema },
        errorFactory: DeviceProfileManagement.ActivateDeviceThroughProfileError,
      },
      options,
    );
  }

  profileToActivateDevice(
    request: DeviceProfileManagement.ProfileToActivateDeviceRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, DeviceProfileManagement.ProfileToActivateDeviceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/activate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: profileRequestSchema },
      },
      {
        success: { kind: "json", schema: requestResponseSchema },
        errorFactory: DeviceProfileManagement.ProfileToActivateDeviceError,
      },
      options,
    );
  }

  profileToDeactivateDevice(
    request: DeviceProfileManagement.ProfileToDeactivateDeviceRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, DeviceProfileManagement.ProfileToDeactivateDeviceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/deactivate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: deactivateDeviceProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: requestResponseSchema },
        errorFactory: DeviceProfileManagement.ProfileToDeactivateDeviceError,
      },
      options,
    );
  }

  profileToSetFallbackAttribute(
    request: DeviceProfileManagement.ProfileToSetFallbackAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, DeviceProfileManagement.ProfileToSetFallbackAttributeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/setfallbackattribute"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: setFallbackAttributeRequestSchema },
      },
      {
        success: { kind: "json", schema: requestResponseSchema },
        errorFactory: DeviceProfileManagement.ProfileToSetFallbackAttributeError,
      },
      options,
    );
  }
}

export namespace DeviceProfileManagement {
  export type ActivateDeviceThroughProfileRequest = {
    body: ActivateDeviceProfileRequest;
  };

  export class ActivateDeviceThroughProfileError extends ResponseError<
    Declared<"restErrorResponse", RestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<ActivateDeviceThroughProfileError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }

  export type ProfileToActivateDeviceRequest = {
    body: ProfileRequest;
  };

  export class ProfileToActivateDeviceError extends ResponseError<
    Declared<"restErrorResponse", RestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<ProfileToActivateDeviceError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }

  export type ProfileToDeactivateDeviceRequest = {
    body: DeactivateDeviceProfileRequest;
  };

  export class ProfileToDeactivateDeviceError extends ResponseError<
    Declared<"restErrorResponse", RestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<ProfileToDeactivateDeviceError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }

  export type ProfileToSetFallbackAttributeRequest = {
    body: SetFallbackAttributeRequest;
  };

  export class ProfileToSetFallbackAttributeError extends ResponseError<
    Declared<"restErrorResponse", RestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<ProfileToSetFallbackAttributeError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }
}
