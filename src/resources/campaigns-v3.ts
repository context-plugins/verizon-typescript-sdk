import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  campaignFirmwareUpgradeSchema,
  type CampaignFirmwareUpgrade,
} from "../models/campaign-firmware-upgrade.js";
import { campaignSchema, type Campaign } from "../models/campaign.js";
import { firmwareCampaignSchema, type FirmwareCampaign } from "../models/firmware-campaign.js";
import { fotaV3ResultSchema, type FotaV3Result } from "../models/fota-v3-result.js";
import { fotaV3SuccessResultSchema, type FotaV3SuccessResult } from "../models/fota-v3-success-result.js";
import {
  v3AddOrRemoveDeviceRequestSchema,
  type V3AddOrRemoveDeviceRequest,
} from "../models/v3-add-or-remove-device-request.js";
import {
  v3AddOrRemoveDeviceResultSchema,
  type V3AddOrRemoveDeviceResult,
} from "../models/v3-add-or-remove-device-result.js";
import {
  v3ChangeCampaignDatesRequestSchema,
  type V3ChangeCampaignDatesRequest,
} from "../models/v3-change-campaign-dates-request.js";
import type { Servers } from "../servers.js";

/**
 * Schedule, retrieve or cancel scheduled FOTA campaigns.
 */
export class CampaignsV3 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel a previously scheduled firmware campaign. This api is allowed before the campaign
   * StartDate
   *
   * @remarks
   * This endpoint allows user to cancel a firmware campaign. A firmware campaign already started
   * can not be cancelled.
   *
   * @returns Returns cancellation status.
   *
   * @throws {@link CampaignsV3.CancelCampaign2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelCampaign2(
    request: CampaignsV3.CancelCampaign2Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV3SuccessResult, CampaignsV3.CancelCampaign2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.softwareManagementV3("/campaigns/{accountName}/{campaignId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV3SuccessResultSchema },
        errorFactory: CampaignsV3.CancelCampaign2Error,
      },
      options,
    );
  }

  /**
   * Retrieve campaign level information
   *
   * @remarks
   * This endpoint allows the user to retrieve campaign level information for a specified campaign.
   *
   * @returns Returns firmware upgrade information.
   *
   * @throws {@link CampaignsV3.GetCampaignInformation2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCampaignInformation2(
    request: CampaignsV3.GetCampaignInformation2Request,
    options?: RequestOptions,
  ): ApiPromise<Campaign, CampaignsV3.GetCampaignInformation2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV3("/campaigns/{accountName}/{campaignId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: campaignSchema },
        errorFactory: CampaignsV3.GetCampaignInformation2Error,
      },
      options,
    );
  }

  /**
   * Schedule a firmware upgrade
   *
   * @remarks
   * This endpoint allows a user to schedule a firmware upgrade for a list of devices.
   *
   * @returns Return upgrade information.
   *
   * @throws {@link CampaignsV3.ScheduleCampaignFirmwareUpgrade2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  scheduleCampaignFirmwareUpgrade2(
    request: CampaignsV3.ScheduleCampaignFirmwareUpgrade2Request,
    options?: RequestOptions,
  ): ApiPromise<FirmwareCampaign, CampaignsV3.ScheduleCampaignFirmwareUpgrade2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.softwareManagementV3("/campaigns/firmware/{accountName}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: campaignFirmwareUpgradeSchema },
      },
      {
        success: { kind: "json", schema: firmwareCampaignSchema },
        errorFactory: CampaignsV3.ScheduleCampaignFirmwareUpgrade2Error,
      },
      options,
    );
  }

  /**
   * Change firmware campaign dates and time windows. This api is allowed before the campaign
   * StartDate
   *
   * @remarks
   * This endpoint allows user to change campaign dates and time windows. Fields which need to
   * remain unchanged should be also provided.
   *
   * @returns Updated campaign information.
   *
   * @throws {@link CampaignsV3.UpdateCampaignDates2Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCampaignDates2(
    request: CampaignsV3.UpdateCampaignDates2Request,
    options?: RequestOptions,
  ): ApiPromise<FirmwareCampaign, CampaignsV3.UpdateCampaignDates2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.softwareManagementV3("/campaigns/firmware/{acc}/{campaignId}/dates"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "acc", value: request.acc, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v3ChangeCampaignDatesRequestSchema },
      },
      {
        success: { kind: "json", schema: firmwareCampaignSchema },
        errorFactory: CampaignsV3.UpdateCampaignDates2Error,
      },
      options,
    );
  }

  /**
   * Add or Remove devices to an existing firmware campaign. This api is allowed before the campaign
   * StartDate
   *
   * @remarks
   * This endpoint allows user to Add or Remove devices to an existing campaign.
   *
   * @returns Returns add or remove devices to existing upgrade information.
   *
   * @throws {@link CampaignsV3.UpdateCampaignFirmwareDevices2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCampaignFirmwareDevices2(
    request: CampaignsV3.UpdateCampaignFirmwareDevices2Request,
    options?: RequestOptions,
  ): ApiPromise<V3AddOrRemoveDeviceResult, CampaignsV3.UpdateCampaignFirmwareDevices2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.softwareManagementV3("/campaigns/firmware/{acc}/{campaignId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "acc", value: request.acc, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v3AddOrRemoveDeviceRequestSchema },
      },
      {
        success: { kind: "json", schema: v3AddOrRemoveDeviceResultSchema },
        errorFactory: CampaignsV3.UpdateCampaignFirmwareDevices2Error,
      },
      options,
    );
  }
}

export namespace CampaignsV3 {
  export type CancelCampaign2Request = {
    /** Account identifier. */
    accountName: string;
    /** Firmware upgrade information. */
    campaignId: string;
  };

  export class CancelCampaign2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<CancelCampaign2Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type GetCampaignInformation2Request = {
    /** Account identifier. */
    accountName: string;
    /** Firmware upgrade identifier. */
    campaignId: string;
  };

  export class GetCampaignInformation2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<GetCampaignInformation2Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type ScheduleCampaignFirmwareUpgrade2Request = {
    /** Account identifier. */
    accountName: string;
    /** Firmware upgrade information. */
    body: CampaignFirmwareUpgrade;
  };

  export class ScheduleCampaignFirmwareUpgrade2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<ScheduleCampaignFirmwareUpgrade2Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type UpdateCampaignDates2Request = {
    /** Account identifier. */
    acc: string;
    /** Firmware upgrade information. */
    campaignId: string;
    /** New dates and time windows. */
    body: V3ChangeCampaignDatesRequest;
  };

  export class UpdateCampaignDates2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<UpdateCampaignDates2Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type UpdateCampaignFirmwareDevices2Request = {
    /** Account identifier. */
    acc: string;
    /** Unique identifier of a campaign. */
    campaignId: string;
    /** Add or remove device to existing upgrade information. */
    body: V3AddOrRemoveDeviceRequest;
  };

  export class UpdateCampaignFirmwareDevices2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<UpdateCampaignFirmwareDevices2Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }
}
