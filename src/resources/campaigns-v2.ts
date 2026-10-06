import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { campaignSoftwareSchema, type CampaignSoftware } from "../models/campaign-software.js";
import { fotaV2ResultSchema, type FotaV2Result } from "../models/fota-v2-result.js";
import { fotaV2SuccessResultSchema, type FotaV2SuccessResult } from "../models/fota-v2-success-result.js";
import {
  schedulesSoftwareUpgradeRequestSchema,
  type SchedulesSoftwareUpgradeRequest,
} from "../models/schedules-software-upgrade-request.js";
import {
  uploadAndScheduleFileRequestSchema,
  type UploadAndScheduleFileRequest,
} from "../models/upload-and-schedule-file-request.js";
import {
  uploadAndScheduleFileResponseSchema,
  type UploadAndScheduleFileResponse,
} from "../models/upload-and-schedule-file-response.js";
import {
  v2AddOrRemoveDeviceResultSchema,
  type V2AddOrRemoveDeviceResult,
} from "../models/v2-add-or-remove-device-result.js";
import type { Servers } from "../servers.js";

/**
 * Schedule, retrieve or cancel scheduled FOTA campaigns.
 */
export class CampaignsV2 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel a previously scheduled software upgrade
   *
   * @remarks
   * This endpoint allows user to cancel software upgrade. A software upgrade already started can
   * not be cancelled.
   *
   * @returns Return cancellation status.
   *
   * @throws {@link CampaignsV2.CancelCampaignError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelCampaign(
    request: CampaignsV2.CancelCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<FotaV2SuccessResult, CampaignsV2.CancelCampaignError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.softwareManagementV2("/campaigns/{account}/{campaignId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV2SuccessResultSchema },
        errorFactory: CampaignsV2.CancelCampaignError,
      },
      options,
    );
  }

  /**
   * Get information of a software upgrade.
   *
   * @remarks
   * This endpoint allows user to get information of a software upgrade.
   *
   * @returns Return software upgrade information.
   *
   * @throws {@link CampaignsV2.GetCampaignInformationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCampaignInformation(
    request: CampaignsV2.GetCampaignInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<CampaignSoftware, CampaignsV2.GetCampaignInformationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV2("/campaigns/{account}/{campaignId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: campaignSoftwareSchema },
        errorFactory: CampaignsV2.GetCampaignInformationError,
      },
      options,
    );
  }

  /**
   * Schedule a software upgrade
   *
   * @remarks
   * This endpoint allows user to schedule a software upgrade.
   *
   * @returns Return software upgrade information.
   *
   * @throws {@link CampaignsV2.ScheduleCampaignFirmwareUpgradeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  scheduleCampaignFirmwareUpgrade(
    request: CampaignsV2.ScheduleCampaignFirmwareUpgradeRequest,
    options?: RequestOptions,
  ): ApiPromise<CampaignSoftware, CampaignsV2.ScheduleCampaignFirmwareUpgradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.softwareManagementV2("/campaigns/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: campaignSoftwareSchema },
        errorFactory: CampaignsV2.ScheduleCampaignFirmwareUpgradeError,
      },
      options,
    );
  }

  /**
   * Schedules a file upgrade.
   *
   * @remarks
   * You can upload configuration files and schedule them in a campaign to devices.
   *
   * @returns Successful responses.
   *
   * @throws {@link CampaignsV2.ScheduleFileUpgradeError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  scheduleFileUpgrade(
    request: CampaignsV2.ScheduleFileUpgradeRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadAndScheduleFileResponse, CampaignsV2.ScheduleFileUpgradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.softwareManagementV2("/campaigns/files/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: uploadAndScheduleFileRequestSchema },
      },
      {
        success: { kind: "json", schema: uploadAndScheduleFileResponseSchema },
        errorFactory: CampaignsV2.ScheduleFileUpgradeError,
      },
      options,
    );
  }

  /**
   * Schedules a software upgrade for HTTP devices.
   *
   * @remarks
   * Campaign time windows for downloading and installing software are available as long as the
   * device OEM supports this.
   *
   * @returns Successful responses.
   *
   * @throws {@link CampaignsV2.ScheduleSwUpgradeHttpDevicesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  scheduleSwUpgradeHttpDevices(
    request: CampaignsV2.ScheduleSwUpgradeHttpDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadAndScheduleFileResponse, CampaignsV2.ScheduleSwUpgradeHttpDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.softwareManagementV2("/campaigns/software/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: schedulesSoftwareUpgradeRequestSchema },
      },
      {
        success: { kind: "json", schema: uploadAndScheduleFileResponseSchema },
        errorFactory: CampaignsV2.ScheduleSwUpgradeHttpDevicesError,
      },
      options,
    );
  }

  /**
   * Change campaign dates and time windows
   *
   * @remarks
   * This endpoint allows user to change campaign dates and time windows. Fields which need to
   * remain unchanged should be also provided.
   *
   * @returns Updated campaign information.
   *
   * @throws {@link CampaignsV2.UpdateCampaignDatesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCampaignDates(
    request: CampaignsV2.UpdateCampaignDatesRequest,
    options?: RequestOptions,
  ): ApiPromise<CampaignSoftware, CampaignsV2.UpdateCampaignDatesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.softwareManagementV2("/campaigns/{account}/{campaignId}/dates"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: campaignSoftwareSchema },
        errorFactory: CampaignsV2.UpdateCampaignDatesError,
      },
      options,
    );
  }

  /**
   * Add or Remove device to existing software upgrade
   *
   * @remarks
   * This endpoint allows user to Add or Remove devices to an existing software upgrade.
   *
   * @returns Result of adding or removing devices to existing software upgrade information.
   *
   * @throws {@link CampaignsV2.UpdateCampaignFirmwareDevicesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCampaignFirmwareDevices(
    request: CampaignsV2.UpdateCampaignFirmwareDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<V2AddOrRemoveDeviceResult, CampaignsV2.UpdateCampaignFirmwareDevicesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.softwareManagementV2("/campaigns/{account}/{campaignId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2AddOrRemoveDeviceResultSchema },
        errorFactory: CampaignsV2.UpdateCampaignFirmwareDevicesError,
      },
      options,
    );
  }
}

export namespace CampaignsV2 {
  export type CancelCampaignRequest = {
    /** Account identifier. */
    account: string;
    /** Unique identifier of campaign. */
    campaignId: string;
  };

  export class CancelCampaignError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<CancelCampaignError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type GetCampaignInformationRequest = {
    /** Account identifier. */
    account: string;
    /** Software upgrade identifier. */
    campaignId: string;
  };

  export class GetCampaignInformationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<GetCampaignInformationError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type ScheduleCampaignFirmwareUpgradeRequest = {
    /** Account identifier. */
    account: string;
  };

  export class ScheduleCampaignFirmwareUpgradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<ScheduleCampaignFirmwareUpgradeError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type ScheduleFileUpgradeRequest = {
    /** Account identifier. */
    acc: string;
    /** Device logging information. */
    body: UploadAndScheduleFileRequest;
  };

  export class ScheduleFileUpgradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<ScheduleFileUpgradeError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type ScheduleSwUpgradeHttpDevicesRequest = {
    /** Account identifier. */
    acc: string;
    /** Device logging information. */
    body: SchedulesSoftwareUpgradeRequest;
  };

  export class ScheduleSwUpgradeHttpDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<ScheduleSwUpgradeHttpDevicesError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type UpdateCampaignDatesRequest = {
    /** Account identifier. */
    account: string;
    /** Software upgrade information. */
    campaignId: string;
  };

  export class UpdateCampaignDatesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<UpdateCampaignDatesError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type UpdateCampaignFirmwareDevicesRequest = {
    /** Account identifier. */
    account: string;
    /** Software upgrade information. */
    campaignId: string;
  };

  export class UpdateCampaignFirmwareDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<UpdateCampaignFirmwareDevicesError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }
}
