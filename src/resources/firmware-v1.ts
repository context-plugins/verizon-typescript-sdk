import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  firmwareUpgradeChangeResultSchema,
  type FirmwareUpgradeChangeResult,
} from "../models/firmware-upgrade-change-result.js";
import {
  firmwareUpgradeRequestSchema,
  type FirmwareUpgradeRequest,
} from "../models/firmware-upgrade-request.js";
import { firmwareUpgradeSchema, type FirmwareUpgrade } from "../models/firmware-upgrade.js";
import { firmwareSchema, type Firmware } from "../models/firmware.js";
import { fotaV1ResultSchema, type FotaV1Result } from "../models/fota-v1-result.js";
import { fotaV1SuccessResultSchema, type FotaV1SuccessResult } from "../models/fota-v1-success-result.js";
import type { Servers } from "../servers.js";

export class FirmwareV1 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  cancelScheduledFirmwareUpgrade(
    request: FirmwareV1.CancelScheduledFirmwareUpgradeRequest,
    options?: RequestOptions,
  ): ApiPromise<FotaV1SuccessResult, FirmwareV1.CancelScheduledFirmwareUpgradeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.softwareManagementV1("/upgrades/{accountName}/upgrade/{upgradeId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "upgradeId", value: request.upgradeId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV1SuccessResultSchema },
        errorFactory: FirmwareV1.CancelScheduledFirmwareUpgradeError,
      },
      options,
    );
  }

  listAvailableFirmware(
    request: FirmwareV1.ListAvailableFirmwareRequest,
    options?: RequestOptions,
  ): ApiPromise<Firmware[], FirmwareV1.ListAvailableFirmwareError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV1("/firmware/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => firmwareSchema)) },
        errorFactory: FirmwareV1.ListAvailableFirmwareError,
      },
      options,
    );
  }

  listFirmwareUpgradeDetails(
    request: FirmwareV1.ListFirmwareUpgradeDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<FirmwareUpgrade, FirmwareV1.ListFirmwareUpgradeDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV1("/upgrades/{accountName}/upgrade/{upgradeId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "upgradeId", value: request.upgradeId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: firmwareUpgradeSchema },
        errorFactory: FirmwareV1.ListFirmwareUpgradeDetailsError,
      },
      options,
    );
  }

  scheduleFirmwareUpgrade(
    request: FirmwareV1.ScheduleFirmwareUpgradeRequest,
    options?: RequestOptions,
  ): ApiPromise<FirmwareUpgrade, FirmwareV1.ScheduleFirmwareUpgradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.softwareManagementV1("/upgrades"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: firmwareUpgradeRequestSchema },
      },
      {
        success: { kind: "json", schema: firmwareUpgradeSchema },
        errorFactory: FirmwareV1.ScheduleFirmwareUpgradeError,
      },
      options,
    );
  }

  updateFirmwareUpgradeDevices(
    request: FirmwareV1.UpdateFirmwareUpgradeDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<FirmwareUpgradeChangeResult, FirmwareV1.UpdateFirmwareUpgradeDevicesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.softwareManagementV1("/upgrades/{accountName}/upgrade/{upgradeId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "upgradeId", value: request.upgradeId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: firmwareUpgradeChangeResultSchema },
        errorFactory: FirmwareV1.UpdateFirmwareUpgradeDevicesError,
      },
      options,
    );
  }
}

export namespace FirmwareV1 {
  export type CancelScheduledFirmwareUpgradeRequest = {
    accountName: string;
    upgradeId: string;
  };

  export class CancelScheduledFirmwareUpgradeError extends ResponseError<
    Declared<"fotaV1Result", FotaV1Result>
  > {
    static readonly errors: ErrorDecoders<CancelScheduledFirmwareUpgradeError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type ListAvailableFirmwareRequest = {
    account: string;
  };

  export class ListAvailableFirmwareError extends ResponseError<Declared<"fotaV1Result", FotaV1Result>> {
    static readonly errors: ErrorDecoders<ListAvailableFirmwareError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type ListFirmwareUpgradeDetailsRequest = {
    accountName: string;
    upgradeId: string;
  };

  export class ListFirmwareUpgradeDetailsError extends ResponseError<Declared<"fotaV1Result", FotaV1Result>> {
    static readonly errors: ErrorDecoders<ListFirmwareUpgradeDetailsError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type ScheduleFirmwareUpgradeRequest = {
    body: FirmwareUpgradeRequest;
  };

  export class ScheduleFirmwareUpgradeError extends ResponseError<Declared<"fotaV1Result", FotaV1Result>> {
    static readonly errors: ErrorDecoders<ScheduleFirmwareUpgradeError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type UpdateFirmwareUpgradeDevicesRequest = {
    accountName: string;
    upgradeId: string;
  };

  export class UpdateFirmwareUpgradeDevicesError extends ResponseError<
    Declared<"fotaV1Result", FotaV1Result>
  > {
    static readonly errors: ErrorDecoders<UpdateFirmwareUpgradeDevicesError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }
}
