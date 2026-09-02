import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class SoftwareManagementLicensesV1 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  assignLicensesToDevices(
    request: SoftwareManagementLicensesV1.AssignLicensesToDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1LicensesAssignedRemovedResult, SoftwareManagementLicensesV1.AssignLicensesToDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.softwareManagementV1("/licenses/{account}/assign"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1LicensesAssignedRemovedRequestSchema },
      },
      {
        success: { kind: "json", schema: v1LicensesAssignedRemovedResultSchema },
        errorFactory: SoftwareManagementLicensesV1.AssignLicensesToDevicesError,
      },
      options,
    );
  }

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
        url: this.#servers.softwareManagementV1("/licenses/{account}/cancel"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1ListOfLicensesToRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: v1ListOfLicensesToRemoveResultSchema },
        errorFactory: SoftwareManagementLicensesV1.CreateListOfLicensesToRemoveError,
      },
      options,
    );
  }

  deleteListOfLicensesToRemove(
    request: SoftwareManagementLicensesV1.DeleteListOfLicensesToRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SoftwareManagementLicensesV1.DeleteListOfLicensesToRemoveError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.softwareManagementV1("/licenses/{account}/cancel"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SoftwareManagementLicensesV1.DeleteListOfLicensesToRemoveError,
      },
      options,
    );
  }

  listLicensesToRemove(
    request: SoftwareManagementLicensesV1.ListLicensesToRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ListOfLicensesToRemove, SoftwareManagementLicensesV1.ListLicensesToRemoveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV1("/licenses/{account}/cancel/index/{startIndex}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "startIndex", value: request.startIndex, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ListOfLicensesToRemoveSchema },
        errorFactory: SoftwareManagementLicensesV1.ListLicensesToRemoveError,
      },
      options,
    );
  }

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
        url: this.#servers.softwareManagementV1("/licenses/{account}/remove"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
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
    account: string;
    body: V1LicensesAssignedRemovedRequest;
  };

  export class AssignLicensesToDevicesError extends ResponseError<Declared<"fotaV1Result", FotaV1Result>> {
    static readonly errors: ErrorDecoders<AssignLicensesToDevicesError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type CreateListOfLicensesToRemoveRequest = {
    account: string;
    body: V1ListOfLicensesToRemoveRequest;
  };

  export class CreateListOfLicensesToRemoveError extends ResponseError<
    Declared<"fotaV1Result", FotaV1Result>
  > {
    static readonly errors: ErrorDecoders<CreateListOfLicensesToRemoveError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type DeleteListOfLicensesToRemoveRequest = {
    account: string;
  };

  export class DeleteListOfLicensesToRemoveError extends ResponseError<Declared<"error400", undefined>> {
    static readonly errors: ErrorDecoders<DeleteListOfLicensesToRemoveError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListLicensesToRemoveRequest = {
    account: string;
    startIndex: string;
  };

  export class ListLicensesToRemoveError extends ResponseError<Declared<"fotaV1Result", FotaV1Result>> {
    static readonly errors: ErrorDecoders<ListLicensesToRemoveError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type RemoveLicensesFromDevicesRequest = {
    account: string;
    body: V1LicensesAssignedRemovedRequest;
  };

  export class RemoveLicensesFromDevicesError extends ResponseError<Declared<"fotaV1Result", FotaV1Result>> {
    static readonly errors: ErrorDecoders<RemoveLicensesFromDevicesError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }
}
