import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class ManagingESimProfiles {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  activateADeviceProfile(
    request: ManagingESimProfiles.ActivateADeviceProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.ActivateADeviceProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/activate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: gioProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.ActivateADeviceProfileError,
      },
      options,
    );
  }

  deactivateADeviceProfile(
    request: ManagingESimProfiles.DeactivateADeviceProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.DeactivateADeviceProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/deactivate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: gioDeactivateDeviceProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.DeactivateADeviceProfileError,
      },
      options,
    );
  }

  deleteADeviceProfile(
    request: ManagingESimProfiles.DeleteADeviceProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.DeleteADeviceProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/delete"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: deviceProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.DeleteADeviceProfileError,
      },
      options,
    );
  }

  deviceSuspend(
    request: ManagingESimProfiles.DeviceSuspendRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.DeviceSuspendError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/device_suspend"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: gioProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.DeviceSuspendError,
      },
      options,
    );
  }

  downloadADeviceProfile(
    request: ManagingESimProfiles.DownloadADeviceProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.DownloadADeviceProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/download"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: deviceProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.DownloadADeviceProfileError,
      },
      options,
    );
  }

  enableADeviceProfile(
    request: ManagingESimProfiles.EnableADeviceProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.EnableADeviceProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/enable"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: deviceProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.EnableADeviceProfileError,
      },
      options,
    );
  }

  enableADeviceProfileForDownload(
    request: ManagingESimProfiles.EnableADeviceProfileForDownloadRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.EnableADeviceProfileForDownloadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/download_enable"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: deviceProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.EnableADeviceProfileForDownloadError,
      },
      options,
    );
  }

  profileSuspend(
    request: ManagingESimProfiles.ProfileSuspendRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.ProfileSuspendError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/profile_suspend"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: gioProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.ProfileSuspendError,
      },
      options,
    );
  }

  resumeProfile(
    request: ManagingESimProfiles.ResumeProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.ResumeProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/profile_resume"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: gioProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: ManagingESimProfiles.ResumeProfileError,
      },
      options,
    );
  }

  setFallback(
    request: ManagingESimProfiles.SetFallbackRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, ManagingESimProfiles.SetFallbackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/v1/devices/profile/actions/setfallbackattribute"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
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
    body: GioProfileRequest;
  };

  export class ActivateADeviceProfileError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<ActivateADeviceProfileError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type DeactivateADeviceProfileRequest = {
    body: GioDeactivateDeviceProfileRequest;
  };

  export class DeactivateADeviceProfileError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<DeactivateADeviceProfileError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type DeleteADeviceProfileRequest = {
    body: DeviceProfileRequest;
  };

  export class DeleteADeviceProfileError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<DeleteADeviceProfileError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type DeviceSuspendRequest = {
    body: GioProfileRequest;
  };

  export class DeviceSuspendError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<DeviceSuspendError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type DownloadADeviceProfileRequest = {
    body: DeviceProfileRequest;
  };

  export class DownloadADeviceProfileError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<DownloadADeviceProfileError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type EnableADeviceProfileRequest = {
    body: DeviceProfileRequest;
  };

  export class EnableADeviceProfileError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<EnableADeviceProfileError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type EnableADeviceProfileForDownloadRequest = {
    body: DeviceProfileRequest;
  };

  export class EnableADeviceProfileForDownloadError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<EnableADeviceProfileForDownloadError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type ProfileSuspendRequest = {
    body: GioProfileRequest;
  };

  export class ProfileSuspendError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<ProfileSuspendError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type ResumeProfileRequest = {
    body: GioProfileRequest;
  };

  export class ResumeProfileError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<ResumeProfileError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type SetFallbackRequest = {
    body: FallBack;
  };

  export class SetFallbackError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<SetFallbackError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }
}
