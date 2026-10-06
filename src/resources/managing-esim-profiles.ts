import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { deviceProfileRequestSchema, type DeviceProfileRequest } from "../models/device-profile-request.js";
import { fallBackSchema, type FallBack } from "../models/fall-back.js";
import {
  gioDeactivateDeviceProfileRequestSchema,
  type GioDeactivateDeviceProfileRequest,
} from "../models/gio-deactivate-device-profile-request.js";
import { gioProfileRequestSchema, type GioProfileRequest } from "../models/gio-profile-request.js";
import { gioRequestResponseSchema, type GioRequestResponse } from "../models/gio-request-response.js";
import { gioRestErrorResponseSchema, type GioRestErrorResponse } from "../models/gio-rest-error-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage Global IoT Orchestration device profiles for either Verizon (lead) or Global (local).
 */
export class ManagingESimProfiles {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Activate a device profile.
   *
   * @remarks
   * Activate a device with either a lead or local profile.
   *
   * @returns Request ID
   *
   * @throws {@link ManagingESimProfiles.ActivateADeviceProfileError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activateADeviceProfile(
    request: ManagingESimProfiles.ActivateADeviceProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.ActivateADeviceProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/activate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: gioProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.ActivateADeviceProfileError,
      },
      options,
    );
  }

  /**
   * Deactivate a device profile.
   *
   * @remarks
   * Deactivate the lead or local profile. **Note:** to reactivate the profile, use the **Activate**
   * endpoint above.
   *
   * @returns Request ID
   *
   * @throws {@link ManagingESimProfiles.DeactivateADeviceProfileError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deactivateADeviceProfile(
    request: ManagingESimProfiles.DeactivateADeviceProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.DeactivateADeviceProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/deactivate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: gioDeactivateDeviceProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.DeactivateADeviceProfileError,
      },
      options,
    );
  }

  /**
   * Delete a device profile (Global).
   *
   * @remarks
   * Delete a device profile for Global IoT Orchestration. **Note:** the profile must be deactivated
   * first!
   *
   * @returns Request ID
   *
   * @throws {@link ManagingESimProfiles.DeleteADeviceProfileError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteADeviceProfile(
    request: ManagingESimProfiles.DeleteADeviceProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.DeleteADeviceProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/delete"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deviceProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.DeleteADeviceProfileError,
      },
      options,
    );
  }

  /**
   * Suspend an eUICC device.
   *
   * @remarks
   * Suspend all service to an eUICC device, including the lead and local profile.
   *
   * @returns Request ID
   *
   * @throws {@link ManagingESimProfiles.DeviceSuspendError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deviceSuspend(
    request: ManagingESimProfiles.DeviceSuspendRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.DeviceSuspendError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/device_suspend"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: gioProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.DeviceSuspendError,
      },
      options,
    );
  }

  /**
   * Download a device profile (Global).
   *
   * @remarks
   * Download a Global IoT Orchestration device profile.
   *
   * @returns Request ID
   *
   * @throws {@link ManagingESimProfiles.DownloadADeviceProfileError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadADeviceProfile(
    request: ManagingESimProfiles.DownloadADeviceProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.DownloadADeviceProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/download"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deviceProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.DownloadADeviceProfileError,
      },
      options,
    );
  }

  /**
   * Enable a device profile.
   *
   * @remarks
   * Enable a device lead or local profile.
   *
   * @returns Request ID
   *
   * @throws {@link ManagingESimProfiles.EnableADeviceProfileError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enableADeviceProfile(
    request: ManagingESimProfiles.EnableADeviceProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.EnableADeviceProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/enable"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deviceProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.EnableADeviceProfileError,
      },
      options,
    );
  }

  /**
   * Enable a device profile for download (Global).
   *
   * @remarks
   * Enable the Global IoT Orchestration device profile for download.
   *
   * @returns Request ID
   *
   * @throws {@link ManagingESimProfiles.EnableADeviceProfileForDownloadError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enableADeviceProfileForDownload(
    request: ManagingESimProfiles.EnableADeviceProfileForDownloadRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.EnableADeviceProfileForDownloadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/download_enable"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deviceProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.EnableADeviceProfileForDownloadError,
      },
      options,
    );
  }

  /**
   * Suspend a device profile.
   *
   * @remarks
   * Suspend a device's Global profile.
   *
   * @returns Request ID
   *
   * @throws {@link ManagingESimProfiles.ProfileSuspendError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  profileSuspend(
    request: ManagingESimProfiles.ProfileSuspendRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.ProfileSuspendError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/profile_suspend"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: gioProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.ProfileSuspendError,
      },
      options,
    );
  }

  /**
   * Resume a device profile.
   *
   * @remarks
   * Resume service to a device with either a lead or local profile.
   *
   * @returns Request ID
   *
   * @throws {@link ManagingESimProfiles.ResumeProfileError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resumeProfile(
    request: ManagingESimProfiles.ResumeProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.ResumeProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/profile_resume"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: gioProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.ResumeProfileError,
      },
      options,
    );
  }

  /**
   * Set Fallback.
   *
   * @remarks
   * Enable a fallback profile to be set.
   *
   * @returns Request ID
   *
   * @throws {@link ManagingESimProfiles.SetFallbackError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setFallback(
    request: ManagingESimProfiles.SetFallbackRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.SetFallbackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/v1/devices/profile/actions/setfallbackattribute"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: fallBackSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.SetFallbackError,
      },
      options,
    );
  }
}

export namespace ManagingESimProfiles {
  export type ActivateADeviceProfileRequest = {
    /** Device Profile Query */
    body: GioProfileRequest;
  };

  export class ActivateADeviceProfileError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<ActivateADeviceProfileError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type DeactivateADeviceProfileRequest = {
    /** Device Profile Query */
    body: GioDeactivateDeviceProfileRequest;
  };

  export class DeactivateADeviceProfileError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<DeactivateADeviceProfileError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type DeleteADeviceProfileRequest = {
    /** Device Profile Query */
    body: DeviceProfileRequest;
  };

  export class DeleteADeviceProfileError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<DeleteADeviceProfileError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type DeviceSuspendRequest = {
    /** Device Profile Query */
    body: GioProfileRequest;
  };

  export class DeviceSuspendError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<DeviceSuspendError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type DownloadADeviceProfileRequest = {
    /** Device Profile Query */
    body: DeviceProfileRequest;
  };

  export class DownloadADeviceProfileError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<DownloadADeviceProfileError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type EnableADeviceProfileRequest = {
    /** Device Profile Query */
    body: DeviceProfileRequest;
  };

  export class EnableADeviceProfileError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<EnableADeviceProfileError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type EnableADeviceProfileForDownloadRequest = {
    /** Device Profile Query */
    body: DeviceProfileRequest;
  };

  export class EnableADeviceProfileForDownloadError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<EnableADeviceProfileForDownloadError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type ProfileSuspendRequest = {
    /** Device Profile Query */
    body: GioProfileRequest;
  };

  export class ProfileSuspendError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<ProfileSuspendError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type ResumeProfileRequest = {
    /** Device Profile Query */
    body: GioProfileRequest;
  };

  export class ResumeProfileError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<ResumeProfileError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type SetFallbackRequest = {
    /** Set the fallback attributes to allow a fallback profile to be activated. */
    body: FallBack;
  };

  export class SetFallbackError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<SetFallbackError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }
}
