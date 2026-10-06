import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { fotaV3ResultSchema, type FotaV3Result } from "../models/fota-v3-result.js";
import {
  v3LicenseAssignedRemovedResultSchema,
  type V3LicenseAssignedRemovedResult,
} from "../models/v3-license-assigned-removed-result.js";
import { v3LicenseImeiSchema, type V3LicenseImei } from "../models/v3-license-imei.js";
import { v3LicenseSummarySchema, type V3LicenseSummary } from "../models/v3-license-summary.js";
import type { Servers } from "../servers.js";

/**
 * License status and assignment.
 */
export class SoftwareManagementLicensesV3 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Assign FOTA licenses to devices
   *
   * @remarks
   * This endpoint allows user to assign licenses to a list of devices.
   *
   * @returns License assignment result.
   *
   * @throws {@link SoftwareManagementLicensesV3.AssignLicensesToDevices3Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assignLicensesToDevices3(
    request: SoftwareManagementLicensesV3.AssignLicensesToDevices3Request,
    options?: RequestOptions,
  ): ApiPromise<V3LicenseAssignedRemovedResult, SoftwareManagementLicensesV3.AssignLicensesToDevices3Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.softwareManagementV3("/licenses/{acc}/assign"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v3LicenseImeiSchema },
      },
      {
        success: { kind: "json", schema: v3LicenseAssignedRemovedResultSchema },
        errorFactory: SoftwareManagementLicensesV3.AssignLicensesToDevices3Error,
      },
      options,
    );
  }

  /**
   * Summarize FOTA licenses assignment
   *
   * @remarks
   * The endpoint allows user to list license usage.
   *
   * @returns Summary of license assignment.
   *
   * @throws {@link SoftwareManagementLicensesV3.GetAccountLicensesStatusError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountLicensesStatus(
    request: SoftwareManagementLicensesV3.GetAccountLicensesStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<V3LicenseSummary, SoftwareManagementLicensesV3.GetAccountLicensesStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV3("/licenses/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [
          { name: "lastSeenDeviceId", value: request.lastSeenDeviceId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3LicenseSummarySchema },
        errorFactory: SoftwareManagementLicensesV3.GetAccountLicensesStatusError,
      },
      options,
    );
  }

  /**
   * Remove licenses from devices
   *
   * @remarks
   * This endpoint allows user to remove licenses from a list of devices.
   *
   * @returns License removal result.
   *
   * @throws {@link SoftwareManagementLicensesV3.RemoveLicensesFromDevices3Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeLicensesFromDevices3(
    request: SoftwareManagementLicensesV3.RemoveLicensesFromDevices3Request,
    options?: RequestOptions,
  ): ApiPromise<
    V3LicenseAssignedRemovedResult,
    SoftwareManagementLicensesV3.RemoveLicensesFromDevices3Error
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.softwareManagementV3("/licenses/{acc}/remove"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v3LicenseImeiSchema },
      },
      {
        success: { kind: "json", schema: v3LicenseAssignedRemovedResultSchema },
        errorFactory: SoftwareManagementLicensesV3.RemoveLicensesFromDevices3Error,
      },
      options,
    );
  }
}

export namespace SoftwareManagementLicensesV3 {
  export type AssignLicensesToDevices3Request = {
    /** Account identifier. */
    acc: string;
    /** License assignment. */
    body: V3LicenseImei;
  };

  export class AssignLicensesToDevices3Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<AssignLicensesToDevices3Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type GetAccountLicensesStatusRequest = {
    /** Account identifier. */
    acc: string;
    /** Last seen device identifier. */
    lastSeenDeviceId?: string;
  };

  export class GetAccountLicensesStatusError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<GetAccountLicensesStatusError> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type RemoveLicensesFromDevices3Request = {
    /** Account identifier. */
    acc: string;
    /** License removal. */
    body: V3LicenseImei;
  };

  export class RemoveLicensesFromDevices3Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<RemoveLicensesFromDevices3Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }
}
