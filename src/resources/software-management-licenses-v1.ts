import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { fotaV1ResultSchema, type FotaV1Result } from "../models/fota-v1-result.js";
import {
  v1LicensesAssignedRemovedRequestSchema,
  type V1LicensesAssignedRemovedRequest,
} from "../models/v1-licenses-assigned-removed-request.js";
import {
  v1LicensesAssignedRemovedResultSchema,
  type V1LicensesAssignedRemovedResult,
} from "../models/v1-licenses-assigned-removed-result.js";
import {
  v1ListOfLicensesToRemoveRequestSchema,
  type V1ListOfLicensesToRemoveRequest,
} from "../models/v1-list-of-licenses-to-remove-request.js";
import {
  v1ListOfLicensesToRemoveResultSchema,
  type V1ListOfLicensesToRemoveResult,
} from "../models/v1-list-of-licenses-to-remove-result.js";
import {
  v1ListOfLicensesToRemoveSchema,
  type V1ListOfLicensesToRemove,
} from "../models/v1-list-of-licenses-to-remove.js";
import type { Servers } from "../servers.js";

/**
 * Assign Software Management Services license to devices **Note:**These endpoints have been
 * deprecated. Please use the **v3** endpoints.
 */
export class SoftwareManagementLicensesV1 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Assign licenses to devices
   *
   * @remarks
   * Assigns licenses to a specified list of devices so that firmware upgrades can be scheduled for
   * those devices.
   *
   * @returns List of licenses assigned.
   *
   * @throws {@link SoftwareManagementLicensesV1.AssignLicensesToDevicesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  assignLicensesToDevices(
    request: SoftwareManagementLicensesV1.AssignLicensesToDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1LicensesAssignedRemovedResult, SoftwareManagementLicensesV1.AssignLicensesToDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.softwareManagementV1("/licenses/{account}/assign"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1LicensesAssignedRemovedRequestSchema },
      },
      {
        success: { kind: "json", schema: v1LicensesAssignedRemovedResultSchema },
        errorFactory: SoftwareManagementLicensesV1.AssignLicensesToDevicesError,
      },
      options,
    );
  }

  /**
   * Creates a list of devices from which licenses will be removed if the number of MRC licenses
   * becomes less than the number of assigned licenses.
   *
   * @returns List of licenses assigned.
   *
   * @throws {@link SoftwareManagementLicensesV1.CreateListOfLicensesToRemoveError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  createListOfLicensesToRemove(
    request: SoftwareManagementLicensesV1.CreateListOfLicensesToRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<
    V1ListOfLicensesToRemoveResult,
    SoftwareManagementLicensesV1.CreateListOfLicensesToRemoveError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.softwareManagementV1("/licenses/{account}/cancel"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1ListOfLicensesToRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: v1ListOfLicensesToRemoveResultSchema },
        errorFactory: SoftwareManagementLicensesV1.CreateListOfLicensesToRemoveError,
      },
      options,
    );
  }

  /**
   * Remove all devices from the cancellation candidate list
   *
   * @remarks
   * Deletes the entire list of cancellation candidate devices.
   *
   * @returns Upgrade canceled.
   *
   * @throws {@link SoftwareManagementLicensesV1.DeleteListOfLicensesToRemoveError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deleteListOfLicensesToRemove(
    request: SoftwareManagementLicensesV1.DeleteListOfLicensesToRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SoftwareManagementLicensesV1.DeleteListOfLicensesToRemoveError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.softwareManagementV1("/licenses/{account}/cancel"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SoftwareManagementLicensesV1.DeleteListOfLicensesToRemoveError,
      },
      options,
    );
  }

  /**
   * Get cancellation candidate list
   *
   * @remarks
   * Returns a list of devices from which licenses will be removed if the number of MRC licenses
   * becomes less than the number of assigned licenses.
   *
   * @returns List of cancellation candidate devices.
   *
   * @throws {@link SoftwareManagementLicensesV1.ListLicensesToRemoveError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  listLicensesToRemove(
    request: SoftwareManagementLicensesV1.ListLicensesToRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ListOfLicensesToRemove, SoftwareManagementLicensesV1.ListLicensesToRemoveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV1("/licenses/{account}/cancel/index/{startIndex}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "startIndex", value: request.startIndex, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ListOfLicensesToRemoveSchema },
        errorFactory: SoftwareManagementLicensesV1.ListLicensesToRemoveError,
      },
      options,
    );
  }

  /**
   * Remove licenses from device
   *
   * @remarks
   * Remove unused licenses from device.
   *
   * @returns List of devices with license removal status.
   *
   * @throws {@link SoftwareManagementLicensesV1.RemoveLicensesFromDevicesError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  removeLicensesFromDevices(
    request: SoftwareManagementLicensesV1.RemoveLicensesFromDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    V1LicensesAssignedRemovedResult,
    SoftwareManagementLicensesV1.RemoveLicensesFromDevicesError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.softwareManagementV1("/licenses/{account}/remove"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1LicensesAssignedRemovedRequestSchema },
      },
      {
        success: { kind: "json", schema: v1LicensesAssignedRemovedResultSchema },
        errorFactory: SoftwareManagementLicensesV1.RemoveLicensesFromDevicesError,
      },
      options,
    );
  }
}

export namespace SoftwareManagementLicensesV1 {
  export type AssignLicensesToDevicesRequest = {
    /** Account identifier in "##########-#####". */
    account: string;
    /** IMEIs of the devices to assign licenses to. */
    body: V1LicensesAssignedRemovedRequest;
  };

  export class AssignLicensesToDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV1Result", FotaV1Result>>;

    static readonly errors: ErrorDecoders<AssignLicensesToDevicesError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type CreateListOfLicensesToRemoveRequest = {
    /** Account identifier in "##########-#####". */
    account: string;
    /** Cancellation candidate device list. */
    body: V1ListOfLicensesToRemoveRequest;
  };

  export class CreateListOfLicensesToRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV1Result", FotaV1Result>>;

    static readonly errors: ErrorDecoders<CreateListOfLicensesToRemoveError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type DeleteListOfLicensesToRemoveRequest = {
    /** Account identifier in "##########-#####". */
    account: string;
  };

  export class DeleteListOfLicensesToRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error400", undefined>>;

    static readonly errors: ErrorDecoders<DeleteListOfLicensesToRemoveError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListLicensesToRemoveRequest = {
    /** Account identifier in "##########-#####". */
    account: string;
    /**
     * The zero-based number of the first record to return. Set startIndex=0 for the first request.
     * If there are more than 1,000 devices in the response, set startIndex=1000 for the second
     * request, 2000 for the third request, etc.
     */
    startIndex: string;
  };

  export class ListLicensesToRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV1Result", FotaV1Result>>;

    static readonly errors: ErrorDecoders<ListLicensesToRemoveError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type RemoveLicensesFromDevicesRequest = {
    /** Account identifier in "##########-#####". */
    account: string;
    /** IMEIs of the devices to remove licenses from. */
    body: V1LicensesAssignedRemovedRequest;
  };

  export class RemoveLicensesFromDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV1Result", FotaV1Result>>;

    static readonly errors: ErrorDecoders<RemoveLicensesFromDevicesError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }
}
