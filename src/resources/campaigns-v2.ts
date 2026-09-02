import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class CampaignsV2 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  cancelCampaign(
    request: CampaignsV2.CancelCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<FotaV2SuccessResult, CampaignsV2.CancelCampaignError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.softwareManagementV2("/campaigns/{account}/{campaignId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV2SuccessResultSchema },
        errorFactory: CampaignsV2.CancelCampaignError,
      },
      options,
    );
  }

  getCampaignInformation(
    request: CampaignsV2.GetCampaignInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<CampaignSoftware, CampaignsV2.GetCampaignInformationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV2("/campaigns/{account}/{campaignId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: campaignSoftwareSchema },
        errorFactory: CampaignsV2.GetCampaignInformationError,
      },
      options,
    );
  }

  scheduleCampaignFirmwareUpgrade(
    request: CampaignsV2.ScheduleCampaignFirmwareUpgradeRequest,
    options?: RequestOptions,
  ): ApiPromise<CampaignSoftware, CampaignsV2.ScheduleCampaignFirmwareUpgradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.softwareManagementV2("/campaigns/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: campaignSoftwareSchema },
        errorFactory: CampaignsV2.ScheduleCampaignFirmwareUpgradeError,
      },
      options,
    );
  }

  scheduleFileUpgrade(
    request: CampaignsV2.ScheduleFileUpgradeRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadAndScheduleFileResponse, CampaignsV2.ScheduleFileUpgradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.softwareManagementV2("/campaigns/files/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: uploadAndScheduleFileRequestSchema },
      },
      {
        success: { kind: "json", schema: uploadAndScheduleFileResponseSchema },
        errorFactory: CampaignsV2.ScheduleFileUpgradeError,
      },
      options,
    );
  }

  scheduleSwUpgradeHttpDevices(
    request: CampaignsV2.ScheduleSwUpgradeHttpDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadAndScheduleFileResponse, CampaignsV2.ScheduleSwUpgradeHttpDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.softwareManagementV2("/campaigns/software/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: schedulesSoftwareUpgradeRequestSchema },
      },
      {
        success: { kind: "json", schema: uploadAndScheduleFileResponseSchema },
        errorFactory: CampaignsV2.ScheduleSwUpgradeHttpDevicesError,
      },
      options,
    );
  }

  updateCampaignDates(
    request: CampaignsV2.UpdateCampaignDatesRequest,
    options?: RequestOptions,
  ): ApiPromise<CampaignSoftware, CampaignsV2.UpdateCampaignDatesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.softwareManagementV2("/campaigns/{account}/{campaignId}/dates"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: campaignSoftwareSchema },
        errorFactory: CampaignsV2.UpdateCampaignDatesError,
      },
      options,
    );
  }

  updateCampaignFirmwareDevices(
    request: CampaignsV2.UpdateCampaignFirmwareDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<V2AddOrRemoveDeviceResult, CampaignsV2.UpdateCampaignFirmwareDevicesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.softwareManagementV2("/campaigns/{account}/{campaignId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
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
    account: string;
    campaignId: string;
  };

  export class CancelCampaignError extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<CancelCampaignError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type GetCampaignInformationRequest = {
    account: string;
    campaignId: string;
  };

  export class GetCampaignInformationError extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<GetCampaignInformationError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type ScheduleCampaignFirmwareUpgradeRequest = {
    account: string;
  };

  export class ScheduleCampaignFirmwareUpgradeError extends ResponseError<
    Declared<"fotaV2Result", FotaV2Result>
  > {
    static readonly errors: ErrorDecoders<ScheduleCampaignFirmwareUpgradeError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type ScheduleFileUpgradeRequest = {
    acc: string;
    body: UploadAndScheduleFileRequest;
  };

  export class ScheduleFileUpgradeError extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<ScheduleFileUpgradeError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type ScheduleSwUpgradeHttpDevicesRequest = {
    acc: string;
    body: SchedulesSoftwareUpgradeRequest;
  };

  export class ScheduleSwUpgradeHttpDevicesError extends ResponseError<
    Declared<"fotaV2Result", FotaV2Result>
  > {
    static readonly errors: ErrorDecoders<ScheduleSwUpgradeHttpDevicesError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type UpdateCampaignDatesRequest = {
    account: string;
    campaignId: string;
  };

  export class UpdateCampaignDatesError extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<UpdateCampaignDatesError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type UpdateCampaignFirmwareDevicesRequest = {
    account: string;
    campaignId: string;
  };

  export class UpdateCampaignFirmwareDevicesError extends ResponseError<
    Declared<"fotaV2Result", FotaV2Result>
  > {
    static readonly errors: ErrorDecoders<UpdateCampaignFirmwareDevicesError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }
}
