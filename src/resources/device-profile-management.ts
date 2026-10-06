import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Activate a device for a profile.
   *
   * @remarks
   * Uses the profile to bring the device under management.
   *
   * @returns Request ID
   *
   * @throws {@link DeviceProfileManagement.ActivateDeviceThroughProfileError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activateDeviceThroughProfile(
    request: DeviceProfileManagement.ActivateDeviceThroughProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, DeviceProfileManagement.ActivateDeviceThroughProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/activate_enable"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: activateDeviceProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: requestResponseSchema },
        errorFactory: DeviceProfileManagement.ActivateDeviceThroughProfileError,
      },
      options,
    );
  }

  /**
   * Activate a device.
   *
   * @remarks
   * Uses the profile to activate the device.
   *
   * @returns Request ID
   *
   * @throws {@link DeviceProfileManagement.ProfileToActivateDeviceError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  profileToActivateDevice(
    request: DeviceProfileManagement.ProfileToActivateDeviceRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, DeviceProfileManagement.ProfileToActivateDeviceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/activate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: profileRequestSchema },
      },
      {
        success: { kind: "json", schema: requestResponseSchema },
        errorFactory: DeviceProfileManagement.ProfileToActivateDeviceError,
      },
      options,
    );
  }

  /**
   * Deactivate a device.
   *
   * @remarks
   * Uses the profile to deactivate the device.
   *
   * @returns Request ID
   *
   * @throws {@link DeviceProfileManagement.ProfileToDeactivateDeviceError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  profileToDeactivateDevice(
    request: DeviceProfileManagement.ProfileToDeactivateDeviceRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, DeviceProfileManagement.ProfileToDeactivateDeviceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/deactivate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deactivateDeviceProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: requestResponseSchema },
        errorFactory: DeviceProfileManagement.ProfileToDeactivateDeviceError,
      },
      options,
    );
  }

  /**
   * Set the fallback attribute.
   *
   * @remarks
   * Allows the profile to set the fallback attribute to the device.
   *
   * @returns Request ID
   *
   * @throws {@link DeviceProfileManagement.ProfileToSetFallbackAttributeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  profileToSetFallbackAttribute(
    request: DeviceProfileManagement.ProfileToSetFallbackAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, DeviceProfileManagement.ProfileToSetFallbackAttributeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/setfallbackattribute"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** Device Profile Query */
    body: ActivateDeviceProfileRequest;
  };

  export class ActivateDeviceThroughProfileError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"restErrorResponse", RestErrorResponse>>;

    static readonly errors: ErrorDecoders<ActivateDeviceThroughProfileError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }

  export type ProfileToActivateDeviceRequest = {
    /** Device Profile Query */
    body: ProfileRequest;
  };

  export class ProfileToActivateDeviceError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"restErrorResponse", RestErrorResponse>>;

    static readonly errors: ErrorDecoders<ProfileToActivateDeviceError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }

  export type ProfileToDeactivateDeviceRequest = {
    /** Device Profile Query */
    body: DeactivateDeviceProfileRequest;
  };

  export class ProfileToDeactivateDeviceError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"restErrorResponse", RestErrorResponse>>;

    static readonly errors: ErrorDecoders<ProfileToDeactivateDeviceError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }

  export type ProfileToSetFallbackAttributeRequest = {
    /** Device Profile Query */
    body: SetFallbackAttributeRequest;
  };

  export class ProfileToSetFallbackAttributeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"restErrorResponse", RestErrorResponse>>;

    static readonly errors: ErrorDecoders<ProfileToSetFallbackAttributeError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }
}
