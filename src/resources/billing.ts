import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { deviceLocationResultSchema, type DeviceLocationResult } from "../models/device-location-result.js";
import {
  managedAccountCancelRequestSchema,
  type ManagedAccountCancelRequest,
} from "../models/managed-account-cancel-request.js";
import {
  managedAccountCancelResponseSchema,
  type ManagedAccountCancelResponse,
} from "../models/managed-account-cancel-response.js";
import {
  managedAccountsAddRequestSchema,
  type ManagedAccountsAddRequest,
} from "../models/managed-accounts-add-request.js";
import {
  managedAccountsAddResponseSchema,
  type ManagedAccountsAddResponse,
} from "../models/managed-accounts-add-response.js";
import {
  managedAccountsGetAllResponseSchema,
  type ManagedAccountsGetAllResponse,
} from "../models/managed-accounts-get-all-response.js";
import {
  managedAccountsProvisionRequestSchema,
  type ManagedAccountsProvisionRequest,
} from "../models/managed-accounts-provision-request.js";
import {
  managedAccountsProvisionResponseSchema,
  type ManagedAccountsProvisionResponse,
} from "../models/managed-accounts-provision-response.js";
import type { Servers } from "../servers.js";

export class Billing {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  addAccount(
    request: Billing.AddAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<ManagedAccountsAddResponse, Billing.AddAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.subscriptionServer("/managedaccounts/actions/add"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: managedAccountsAddRequestSchema },
      },
      {
        success: { kind: "json", schema: managedAccountsAddResponseSchema },
        errorFactory: Billing.AddAccountError,
      },
      options,
    );
  }

  cancelManagedAccountAction(
    request: Billing.CancelManagedAccountActionRequest,
    options?: RequestOptions,
  ): ApiPromise<ManagedAccountCancelResponse, Billing.CancelManagedAccountActionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.subscriptionServer("/managedaccounts/actions/cancel"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: managedAccountCancelRequestSchema },
      },
      {
        success: { kind: "json", schema: managedAccountCancelResponseSchema },
        errorFactory: Billing.CancelManagedAccountActionError,
      },
      options,
    );
  }

  listManagedAccount(
    request: Billing.ListManagedAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<ManagedAccountsGetAllResponse, Billing.ListManagedAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.subscriptionServer("/managedaccounts/{accountName}/service/{serviceName}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "serviceName", value: request.serviceName, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: managedAccountsGetAllResponseSchema },
        errorFactory: Billing.ListManagedAccountError,
      },
      options,
    );
  }

  managedAccountAction(
    request: Billing.ManagedAccountActionRequest,
    options?: RequestOptions,
  ): ApiPromise<ManagedAccountsProvisionResponse, Billing.ManagedAccountActionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.subscriptionServer("/managedaccounts/actions/provision"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: managedAccountsProvisionRequestSchema },
      },
      {
        success: { kind: "json", schema: managedAccountsProvisionResponseSchema },
        errorFactory: Billing.ManagedAccountActionError,
      },
      options,
    );
  }
}

export namespace Billing {
  export type AddAccountRequest = {
    body: ManagedAccountsAddRequest;
  };

  export class AddAccountError extends ResponseError<Declared<"deviceLocationResult", DeviceLocationResult>> {
    static readonly errors: ErrorDecoders<AddAccountError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export type CancelManagedAccountActionRequest = {
    body: ManagedAccountCancelRequest;
  };

  export class CancelManagedAccountActionError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<CancelManagedAccountActionError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export type ListManagedAccountRequest = {
    accountName: string;
    serviceName: string;
  };

  export class ListManagedAccountError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<ListManagedAccountError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export type ManagedAccountActionRequest = {
    body: ManagedAccountsProvisionRequest;
  };

  export class ManagedAccountActionError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<ManagedAccountActionError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }
}
