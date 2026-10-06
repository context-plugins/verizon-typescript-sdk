import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Schedule and monitor firmware upgrades.
 */
export class FirmwareV1 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel a scheduled firmware upgrade.
   *
   * @returns Upgrade canceled.
   *
   * @throws {@link FirmwareV1.CancelScheduledFirmwareUpgradeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelScheduledFirmwareUpgrade(
    request: FirmwareV1.CancelScheduledFirmwareUpgradeRequest,
    options?: RequestOptions,
  ): ApiPromise<FotaV1SuccessResult, FirmwareV1.CancelScheduledFirmwareUpgradeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.softwareManagementV1("/upgrades/{accountName}/upgrade/{upgradeId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "upgradeId", value: request.upgradeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV1SuccessResultSchema },
        errorFactory: FirmwareV1.CancelScheduledFirmwareUpgradeError,
      },
      options,
    );
  }

  /**
   * Get list of available firmware
   *
   * @remarks
   * Lists all device firmware images available for an account, based on the devices registered to
   * that account.
   *
   * @returns List of available firmware.
   *
   * @throws {@link FirmwareV1.ListAvailableFirmwareError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAvailableFirmware(
    request: FirmwareV1.ListAvailableFirmwareRequest,
    options?: RequestOptions,
  ): ApiPromise<Firmware[], FirmwareV1.ListAvailableFirmwareError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV1("/firmware/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => firmwareSchema)) },
        errorFactory: FirmwareV1.ListAvailableFirmwareError,
      },
      options,
    );
  }

  /**
   * Get information about a firmware upgrade
   *
   * @remarks
   * Returns information about a specified upgrade, include the target date of the upgrade, the list
   * of devices in the upgrade, and the status of the upgrade for each device.
   *
   * @returns Firmware upgrade information.
   *
   * @throws {@link FirmwareV1.ListFirmwareUpgradeDetailsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFirmwareUpgradeDetails(
    request: FirmwareV1.ListFirmwareUpgradeDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<FirmwareUpgrade, FirmwareV1.ListFirmwareUpgradeDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV1("/upgrades/{accountName}/upgrade/{upgradeId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "upgradeId", value: request.upgradeId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: firmwareUpgradeSchema },
        errorFactory: FirmwareV1.ListFirmwareUpgradeDetailsError,
      },
      options,
    );
  }

  /**
   * Schedule a firmware upgrade
   *
   * @remarks
   * Schedules a firmware upgrade for devices.
   *
   * @returns Confirmation of successful firmware upgrade.
   *
   * @throws {@link FirmwareV1.ScheduleFirmwareUpgradeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  scheduleFirmwareUpgrade(
    request: FirmwareV1.ScheduleFirmwareUpgradeRequest,
    options?: RequestOptions,
  ): ApiPromise<FirmwareUpgrade, FirmwareV1.ScheduleFirmwareUpgradeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.softwareManagementV1("/upgrades"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: firmwareUpgradeRequestSchema },
      },
      {
        success: { kind: "json", schema: firmwareUpgradeSchema },
        errorFactory: FirmwareV1.ScheduleFirmwareUpgradeError,
      },
      options,
    );
  }

  /**
   * Change the device list for a scheduled upgrade
   *
   * @remarks
   * Add or remove devices from a scheduled upgrade.
   *
   * @returns Upgrade information.
   *
   * @throws {@link FirmwareV1.UpdateFirmwareUpgradeDevicesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFirmwareUpgradeDevices(
    request: FirmwareV1.UpdateFirmwareUpgradeDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<FirmwareUpgradeChangeResult, FirmwareV1.UpdateFirmwareUpgradeDevicesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.softwareManagementV1("/upgrades/{accountName}/upgrade/{upgradeId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "upgradeId", value: request.upgradeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** Account identifier in "##########-#####". */
    accountName: string;
    /** The UUID of the scheduled upgrade that you want to cancel. */
    upgradeId: string;
  };

  export class CancelScheduledFirmwareUpgradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV1Result", FotaV1Result>>;

    static readonly errors: ErrorDecoders<CancelScheduledFirmwareUpgradeError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type ListAvailableFirmwareRequest = {
    /** Account identifier in "##########-#####". */
    account: string;
  };

  export class ListAvailableFirmwareError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV1Result", FotaV1Result>>;

    static readonly errors: ErrorDecoders<ListAvailableFirmwareError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type ListFirmwareUpgradeDetailsRequest = {
    /** Account identifier in "##########-#####". */
    accountName: string;
    /** The UUID of the upgrade, returned by POST /upgrades when the upgrade was scheduled. */
    upgradeId: string;
  };

  export class ListFirmwareUpgradeDetailsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV1Result", FotaV1Result>>;

    static readonly errors: ErrorDecoders<ListFirmwareUpgradeDetailsError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type ScheduleFirmwareUpgradeRequest = {
    /** Details of the firmware upgrade request. */
    body: FirmwareUpgradeRequest;
  };

  export class ScheduleFirmwareUpgradeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV1Result", FotaV1Result>>;

    static readonly errors: ErrorDecoders<ScheduleFirmwareUpgradeError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type UpdateFirmwareUpgradeDevicesRequest = {
    /** Account identifier in "##########-#####". */
    accountName: string;
    /** The UUID of the upgrade, returned by POST /upgrades when the upgrade was scheduled. */
    upgradeId: string;
  };

  export class UpdateFirmwareUpgradeDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV1Result", FotaV1Result>>;

    static readonly errors: ErrorDecoders<UpdateFirmwareUpgradeDevicesError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }
}
