import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { campaignStatusSchema, type CampaignStatus } from "../models/campaign-status.js";
import {
  deviceFirmwareUpgradeSchema,
  type DeviceFirmwareUpgrade,
} from "../models/device-firmware-upgrade.js";
import { fotaV3ResultSchema, type FotaV3Result } from "../models/fota-v3-result.js";
import { v3CampaignDeviceSchema, type V3CampaignDevice } from "../models/v3-campaign-device.js";
import { v3CampaignHistorySchema, type V3CampaignHistory } from "../models/v3-campaign-history.js";
import type { Servers } from "../servers.js";

export class SoftwareManagementReportsV3 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getCampaignDeviceStatus2(
    request: SoftwareManagementReportsV3.GetCampaignDeviceStatus2Request,
    options?: RequestOptions,
  ): ApiPromise<V3CampaignDevice, SoftwareManagementReportsV3.GetCampaignDeviceStatus2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV3("/reports/{acc}/campaigns/{campaignId}/devices"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "acc", value: request.acc, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
        query: [
          { name: "lastSeenDeviceId", value: request.lastSeenDeviceId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3CampaignDeviceSchema },
        errorFactory: SoftwareManagementReportsV3.GetCampaignDeviceStatus2Error,
      },
      options,
    );
  }

  getCampaignHistoryByStatus2(
    request: SoftwareManagementReportsV3.GetCampaignHistoryByStatus2Request,
    options?: RequestOptions,
  ): ApiPromise<V3CampaignHistory, SoftwareManagementReportsV3.GetCampaignHistoryByStatus2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV3("/reports/{acc}/firmware/campaigns"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [
          { name: "campaignStatus", value: request.campaignStatus, schema: campaignStatusSchema },
          { name: "lastSeenCampaignId", value: request.lastSeenCampaignId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3CampaignHistorySchema },
        errorFactory: SoftwareManagementReportsV3.GetCampaignHistoryByStatus2Error,
      },
      options,
    );
  }

  getDeviceFirmwareUpgradeHistory3(
    request: SoftwareManagementReportsV3.GetDeviceFirmwareUpgradeHistory3Request,
    options?: RequestOptions,
  ): ApiPromise<DeviceFirmwareUpgrade[], SoftwareManagementReportsV3.GetDeviceFirmwareUpgradeHistory3Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV3("/reports/{acc}/devices/{deviceId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "acc", value: request.acc, schema: s.string() },
          { name: "deviceId", value: request.deviceId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deviceFirmwareUpgradeSchema)) },
        errorFactory: SoftwareManagementReportsV3.GetDeviceFirmwareUpgradeHistory3Error,
      },
      options,
    );
  }
}

export namespace SoftwareManagementReportsV3 {
  export type GetCampaignDeviceStatus2Request = {
    acc: string;
    campaignId: string;
    lastSeenDeviceId?: string;
  };

  export class GetCampaignDeviceStatus2Error extends ResponseError<Declared<"fotaV3Result", FotaV3Result>> {
    static readonly errors: ErrorDecoders<GetCampaignDeviceStatus2Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type GetCampaignHistoryByStatus2Request = {
    acc: string;
    campaignStatus: CampaignStatus;
    lastSeenCampaignId?: string;
  };

  export class GetCampaignHistoryByStatus2Error extends ResponseError<
    Declared<"fotaV3Result", FotaV3Result>
  > {
    static readonly errors: ErrorDecoders<GetCampaignHistoryByStatus2Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type GetDeviceFirmwareUpgradeHistory3Request = {
    acc: string;
    deviceId: string;
  };

  export class GetDeviceFirmwareUpgradeHistory3Error extends ResponseError<
    Declared<"fotaV3Result", FotaV3Result>
  > {
    static readonly errors: ErrorDecoders<GetDeviceFirmwareUpgradeHistory3Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }
}
