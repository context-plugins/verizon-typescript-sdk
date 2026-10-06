import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Adds a list of accounts for managed billing to a primary account.
   *
   * @remarks
   * This endpoint allows user to add managed accounts to a primary account.
   *
   * @returns Add managed accounts response
   *
   * @throws {@link Billing.AddAccountError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addAccount(
    request: Billing.AddAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<ManagedAccountsAddResponse, Billing.AddAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.subscriptionServer("/managedaccounts/actions/add"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: managedAccountsAddRequestSchema },
      },
      {
        success: { kind: "json", schema: managedAccountsAddResponseSchema },
        errorFactory: Billing.AddAccountError,
      },
      options,
    );
  }

  /**
   * Cancel a managed service for an account.
   *
   * @remarks
   * Deactivates a managed billing service relationship between a managed account and the primary
   * account.
   *
   * @returns Managed account cancel response
   *
   * @throws {@link Billing.CancelManagedAccountActionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelManagedAccountAction(
    request: Billing.CancelManagedAccountActionRequest,
    options?: RequestOptions,
  ): ApiPromise<ManagedAccountCancelResponse, Billing.CancelManagedAccountActionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.subscriptionServer("/managedaccounts/actions/cancel"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: managedAccountCancelRequestSchema },
      },
      {
        success: { kind: "json", schema: managedAccountCancelResponseSchema },
        errorFactory: Billing.CancelManagedAccountActionError,
      },
      options,
    );
  }

  /**
   * Get the list of all managed accounts
   *
   * @remarks
   * This endpoint allows user to retrieve the list of all accounts managed by a primary account.
   *
   * @returns List of managed accounts
   *
   * @throws {@link Billing.ListManagedAccountError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listManagedAccount(
    request: Billing.ListManagedAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<ManagedAccountsGetAllResponse, Billing.ListManagedAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.subscriptionServer("/managedaccounts/{accountName}/service/{serviceName}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "serviceName", value: request.serviceName, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: managedAccountsGetAllResponseSchema },
        errorFactory: Billing.ListManagedAccountError,
      },
      options,
    );
  }

  /**
   * Activate a specific managed account
   *
   * @remarks
   * Activates a managed billing service relationship between a managed account and the primary
   * account.
   *
   * @returns Managed account provision response
   *
   * @throws {@link Billing.ManagedAccountActionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  managedAccountAction(
    request: Billing.ManagedAccountActionRequest,
    options?: RequestOptions,
  ): ApiPromise<ManagedAccountsProvisionResponse, Billing.ManagedAccountActionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.subscriptionServer("/managedaccounts/actions/provision"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** Service name and list of accounts to add */
    body: ManagedAccountsAddRequest;
  };

  export class AddAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<AddAccountError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export type CancelManagedAccountActionRequest = {
    /** Service name and list of accounts to add */
    body: ManagedAccountCancelRequest;
  };

  export class CancelManagedAccountActionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<CancelManagedAccountActionError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export type ListManagedAccountRequest = {
    /** Primary account identifier */
    accountName: string;
    /** Service name */
    serviceName: string;
  };

  export class ListManagedAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<ListManagedAccountError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export type ManagedAccountActionRequest = {
    /** Service name and list of accounts to add */
    body: ManagedAccountsProvisionRequest;
  };

  export class ManagedAccountActionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<ManagedAccountActionError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }
}
