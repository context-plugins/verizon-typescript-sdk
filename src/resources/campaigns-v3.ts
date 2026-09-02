import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class CampaignsV3 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  cancelCampaign2(
    request: CampaignsV3.CancelCampaign2Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV3SuccessResult, CampaignsV3.CancelCampaign2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.softwareManagementV3("/campaigns/{accountName}/{campaignId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV3SuccessResultSchema },
        errorFactory: CampaignsV3.CancelCampaign2Error,
      },
      options,
    );
  }

  getCampaignInformation2(
    request: CampaignsV3.GetCampaignInformation2Request,
    options?: RequestOptions,
  ): ApiPromise<Campaign, CampaignsV3.GetCampaignInformation2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV3("/campaigns/{accountName}/{campaignId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: campaignSchema },
        errorFactory: CampaignsV3.GetCampaignInformation2Error,
      },
      options,
    );
  }

  scheduleCampaignFirmwareUpgrade2(
    request: CampaignsV3.ScheduleCampaignFirmwareUpgrade2Request,
    options?: RequestOptions,
  ): ApiPromise<FirmwareCampaign, CampaignsV3.ScheduleCampaignFirmwareUpgrade2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.softwareManagementV3("/campaigns/firmware/{accountName}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: campaignFirmwareUpgradeSchema },
      },
      {
        success: { kind: "json", schema: firmwareCampaignSchema },
        errorFactory: CampaignsV3.ScheduleCampaignFirmwareUpgrade2Error,
      },
      options,
    );
  }

  updateCampaignDates2(
    request: CampaignsV3.UpdateCampaignDates2Request,
    options?: RequestOptions,
  ): ApiPromise<FirmwareCampaign, CampaignsV3.UpdateCampaignDates2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.softwareManagementV3("/campaigns/firmware/{acc}/{campaignId}/dates"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "acc", value: request.acc, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: v3ChangeCampaignDatesRequestSchema },
      },
      {
        success: { kind: "json", schema: firmwareCampaignSchema },
        errorFactory: CampaignsV3.UpdateCampaignDates2Error,
      },
      options,
    );
  }

  updateCampaignFirmwareDevices2(
    request: CampaignsV3.UpdateCampaignFirmwareDevices2Request,
    options?: RequestOptions,
  ): ApiPromise<V3AddOrRemoveDeviceResult, CampaignsV3.UpdateCampaignFirmwareDevices2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.softwareManagementV3("/campaigns/firmware/{acc}/{campaignId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "acc", value: request.acc, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
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
    accountName: string;
    campaignId: string;
  };

  export class CancelCampaign2Error extends ResponseError<Declared<"fotaV3Result", FotaV3Result>> {
    static readonly errors: ErrorDecoders<CancelCampaign2Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type GetCampaignInformation2Request = {
    accountName: string;
    campaignId: string;
  };

  export class GetCampaignInformation2Error extends ResponseError<Declared<"fotaV3Result", FotaV3Result>> {
    static readonly errors: ErrorDecoders<GetCampaignInformation2Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type ScheduleCampaignFirmwareUpgrade2Request = {
    accountName: string;
    body: CampaignFirmwareUpgrade;
  };

  export class ScheduleCampaignFirmwareUpgrade2Error extends ResponseError<
    Declared<"fotaV3Result", FotaV3Result>
  > {
    static readonly errors: ErrorDecoders<ScheduleCampaignFirmwareUpgrade2Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type UpdateCampaignDates2Request = {
    acc: string;
    campaignId: string;
    body: V3ChangeCampaignDatesRequest;
  };

  export class UpdateCampaignDates2Error extends ResponseError<Declared<"fotaV3Result", FotaV3Result>> {
    static readonly errors: ErrorDecoders<UpdateCampaignDates2Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type UpdateCampaignFirmwareDevices2Request = {
    acc: string;
    campaignId: string;
    body: V3AddOrRemoveDeviceRequest;
  };

  export class UpdateCampaignFirmwareDevices2Error extends ResponseError<
    Declared<"fotaV3Result", FotaV3Result>
  > {
    static readonly errors: ErrorDecoders<UpdateCampaignFirmwareDevices2Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }
}
