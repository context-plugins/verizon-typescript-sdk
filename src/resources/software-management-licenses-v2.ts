import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { fotaV2ResultSchema, type FotaV2Result } from "../models/fota-v2-result.js";
import { fotaV2SuccessResultSchema, type FotaV2SuccessResult } from "../models/fota-v2-success-result.js";
import { v2LicenseSummarySchema, type V2LicenseSummary } from "../models/v2-license-summary.js";
import {
  v2LicensesAssignedRemovedResultSchema,
  type V2LicensesAssignedRemovedResult,
} from "../models/v2-licenses-assigned-removed-result.js";
import {
  v2ListOfLicensesToRemoveResultSchema,
  type V2ListOfLicensesToRemoveResult,
} from "../models/v2-list-of-licenses-to-remove-result.js";
import {
  v2ListOfLicensesToRemoveSchema,
  type V2ListOfLicensesToRemove,
} from "../models/v2-list-of-licenses-to-remove.js";
import type { Servers } from "../servers.js";

/**
 * License status and assignment.
 */
export class SoftwareManagementLicensesV2 {
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
   * @throws {@link SoftwareManagementLicensesV2.AssignLicensesToDevices2Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  assignLicensesToDevices2(
    request: SoftwareManagementLicensesV2.AssignLicensesToDevices2Request,
    options?: RequestOptions,
  ): ApiPromise<V2LicensesAssignedRemovedResult, SoftwareManagementLicensesV2.AssignLicensesToDevices2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.softwareManagementV2("/licenses/{account}/assign"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2LicensesAssignedRemovedResultSchema },
        errorFactory: SoftwareManagementLicensesV2.AssignLicensesToDevices2Error,
      },
      options,
    );
  }

  /**
   * Create a list of license cancellation candidate devices
   *
   * @remarks
   * The license cancel endpoint allows user to create a list of license cancellation candidate
   * devices.
   *
   * @returns Return a created license cancellation device list.
   *
   * @throws {@link SoftwareManagementLicensesV2.CreateListOfLicensesToRemove2Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  createListOfLicensesToRemove2(
    request: SoftwareManagementLicensesV2.CreateListOfLicensesToRemove2Request,
    options?: RequestOptions,
  ): ApiPromise<
    V2ListOfLicensesToRemoveResult,
    SoftwareManagementLicensesV2.CreateListOfLicensesToRemove2Error
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.softwareManagementV2("/licenses/{account}/cancel"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2ListOfLicensesToRemoveResultSchema },
        errorFactory: SoftwareManagementLicensesV2.CreateListOfLicensesToRemove2Error,
      },
      options,
    );
  }

  /**
   * Delete a previously created cancel candidate device list
   *
   * @remarks
   * This endpoint allows user to delete a created cancel candidate device list.
   *
   * @returns Result of deletion of candidate list of devices to remove.
   *
   * @throws {@link SoftwareManagementLicensesV2.DeleteListOfLicensesToRemove2Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deleteListOfLicensesToRemove2(
    request: SoftwareManagementLicensesV2.DeleteListOfLicensesToRemove2Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV2SuccessResult, SoftwareManagementLicensesV2.DeleteListOfLicensesToRemove2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.softwareManagementV2("/licenses/{account}/cancel"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV2SuccessResultSchema },
        errorFactory: SoftwareManagementLicensesV2.DeleteListOfLicensesToRemove2Error,
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
   * @throws {@link SoftwareManagementLicensesV2.GetAccountLicenseStatus2Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountLicenseStatus2(
    request: SoftwareManagementLicensesV2.GetAccountLicenseStatus2Request,
    options?: RequestOptions,
  ): ApiPromise<V2LicenseSummary, SoftwareManagementLicensesV2.GetAccountLicenseStatus2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV2("/licenses/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [
          { name: "lastSeenDeviceId", value: request.lastSeenDeviceId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2LicenseSummarySchema },
        errorFactory: SoftwareManagementLicensesV2.GetAccountLicenseStatus2Error,
      },
      options,
    );
  }

  /**
   * Retrieve a list of license cancellation candidate devices
   *
   * @remarks
   * The license cancel endpoint allows user to list registered license cancellation candidate
   * devices.
   *
   * @returns A list of license cancellation candidate devices.
   *
   * @throws {@link SoftwareManagementLicensesV2.ListLicensesToRemove2Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  listLicensesToRemove2(
    request: SoftwareManagementLicensesV2.ListLicensesToRemove2Request,
    options?: RequestOptions,
  ): ApiPromise<V2ListOfLicensesToRemove, SoftwareManagementLicensesV2.ListLicensesToRemove2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV2("/licenses/{account}/cancel"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [{ name: "startIndex", value: request.startIndex, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2ListOfLicensesToRemoveSchema },
        errorFactory: SoftwareManagementLicensesV2.ListLicensesToRemove2Error,
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
   * @throws {@link SoftwareManagementLicensesV2.RemoveLicensesFromDevices2Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  removeLicensesFromDevices2(
    request: SoftwareManagementLicensesV2.RemoveLicensesFromDevices2Request,
    options?: RequestOptions,
  ): ApiPromise<
    V2LicensesAssignedRemovedResult,
    SoftwareManagementLicensesV2.RemoveLicensesFromDevices2Error
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.softwareManagementV2("/licenses/{account}/remove"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2LicensesAssignedRemovedResultSchema },
        errorFactory: SoftwareManagementLicensesV2.RemoveLicensesFromDevices2Error,
      },
      options,
    );
  }
}

export namespace SoftwareManagementLicensesV2 {
  export type AssignLicensesToDevices2Request = {
    /** Account identifier. */
    account: string;
  };

  export class AssignLicensesToDevices2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<AssignLicensesToDevices2Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type CreateListOfLicensesToRemove2Request = {
    /** Account identifier. */
    account: string;
  };

  export class CreateListOfLicensesToRemove2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<CreateListOfLicensesToRemove2Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type DeleteListOfLicensesToRemove2Request = {
    /** Account identifier. */
    account: string;
  };

  export class DeleteListOfLicensesToRemove2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<DeleteListOfLicensesToRemove2Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type GetAccountLicenseStatus2Request = {
    /** Account identifier. */
    account: string;
    /** Last seen device identifier. */
    lastSeenDeviceId?: string;
  };

  export class GetAccountLicenseStatus2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<GetAccountLicenseStatus2Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type ListLicensesToRemove2Request = {
    /** Account identifier. */
    account: string;
    /** Start index to retrieve. */
    startIndex?: string;
  };

  export class ListLicensesToRemove2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<ListLicensesToRemove2Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type RemoveLicensesFromDevices2Request = {
    /** Account identifier. */
    account: string;
  };

  export class RemoveLicensesFromDevices2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<RemoveLicensesFromDevices2Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }
}
