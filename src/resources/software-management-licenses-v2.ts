import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class SoftwareManagementLicensesV2 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  assignLicensesToDevices2(
    request: SoftwareManagementLicensesV2.AssignLicensesToDevices2Request,
    options?: RequestOptions,
  ): ApiPromise<V2LicensesAssignedRemovedResult, SoftwareManagementLicensesV2.AssignLicensesToDevices2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.softwareManagementV2("/licenses/{account}/assign"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2LicensesAssignedRemovedResultSchema },
        errorFactory: SoftwareManagementLicensesV2.AssignLicensesToDevices2Error,
      },
      options,
    );
  }

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
        url: this.#servers.softwareManagementV2("/licenses/{account}/cancel"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2ListOfLicensesToRemoveResultSchema },
        errorFactory: SoftwareManagementLicensesV2.CreateListOfLicensesToRemove2Error,
      },
      options,
    );
  }

  deleteListOfLicensesToRemove2(
    request: SoftwareManagementLicensesV2.DeleteListOfLicensesToRemove2Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV2SuccessResult, SoftwareManagementLicensesV2.DeleteListOfLicensesToRemove2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.softwareManagementV2("/licenses/{account}/cancel"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV2SuccessResultSchema },
        errorFactory: SoftwareManagementLicensesV2.DeleteListOfLicensesToRemove2Error,
      },
      options,
    );
  }

  getAccountLicenseStatus2(
    request: SoftwareManagementLicensesV2.GetAccountLicenseStatus2Request,
    options?: RequestOptions,
  ): ApiPromise<V2LicenseSummary, SoftwareManagementLicensesV2.GetAccountLicenseStatus2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV2("/licenses/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [
          { name: "lastSeenDeviceId", value: request.lastSeenDeviceId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2LicenseSummarySchema },
        errorFactory: SoftwareManagementLicensesV2.GetAccountLicenseStatus2Error,
      },
      options,
    );
  }

  listLicensesToRemove2(
    request: SoftwareManagementLicensesV2.ListLicensesToRemove2Request,
    options?: RequestOptions,
  ): ApiPromise<V2ListOfLicensesToRemove, SoftwareManagementLicensesV2.ListLicensesToRemove2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV2("/licenses/{account}/cancel"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [{ name: "startIndex", value: request.startIndex, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2ListOfLicensesToRemoveSchema },
        errorFactory: SoftwareManagementLicensesV2.ListLicensesToRemove2Error,
      },
      options,
    );
  }

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
        url: this.#servers.softwareManagementV2("/licenses/{account}/remove"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
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
    account: string;
  };

  export class AssignLicensesToDevices2Error extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<AssignLicensesToDevices2Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type CreateListOfLicensesToRemove2Request = {
    account: string;
  };

  export class CreateListOfLicensesToRemove2Error extends ResponseError<
    Declared<"fotaV2Result", FotaV2Result>
  > {
    static readonly errors: ErrorDecoders<CreateListOfLicensesToRemove2Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type DeleteListOfLicensesToRemove2Request = {
    account: string;
  };

  export class DeleteListOfLicensesToRemove2Error extends ResponseError<
    Declared<"fotaV2Result", FotaV2Result>
  > {
    static readonly errors: ErrorDecoders<DeleteListOfLicensesToRemove2Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type GetAccountLicenseStatus2Request = {
    account: string;
    lastSeenDeviceId?: string;
  };

  export class GetAccountLicenseStatus2Error extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<GetAccountLicenseStatus2Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type ListLicensesToRemove2Request = {
    account: string;
    startIndex?: string;
  };

  export class ListLicensesToRemove2Error extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<ListLicensesToRemove2Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type RemoveLicensesFromDevices2Request = {
    account: string;
  };

  export class RemoveLicensesFromDevices2Error extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<RemoveLicensesFromDevices2Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }
}
