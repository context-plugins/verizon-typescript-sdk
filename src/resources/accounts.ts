import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { accountLeadsResultSchema, type AccountLeadsResult } from "../models/account-leads-result.js";
import {
  accountStatesAndServicesSchema,
  type AccountStatesAndServices,
} from "../models/account-states-and-services.js";
import { accountSchema, type Account } from "../models/account.js";
import {
  connectivityManagementResultSchema,
  type ConnectivityManagementResult,
} from "../models/connectivity-management-result.js";
import type { Servers } from "../servers.js";

/**
 * Get information about an account or account leads.
 */
export class Accounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Returns information about a specified account
   *
   * @remarks
   * Returns information about a specified account.
   *
   * @returns The account information.
   *
   * @throws {@link Accounts.GetAccountInformationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountInformation(
    request: Accounts.GetAccountInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<Account, Accounts.GetAccountInformationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v1/accounts/{aname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountSchema },
        errorFactory: Accounts.GetAccountInformationError,
      },
      options,
    );
  }

  /**
   * Returns information for all leads associated with the account
   *
   * @remarks
   * When HTTP status is 202, a URL will be returned in the Location header of the form
   * /leads/{aname}?next={token}. This URL can be used to request the next set of leads.
   *
   * @returns The list of leads associated with the account.
   *
   * @throws {@link Accounts.ListAccountLeadsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAccountLeads(
    request: Accounts.ListAccountLeadsRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountLeadsResult, Accounts.ListAccountLeadsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v1/leads/{aname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        query: [{ name: "next", value: request.next, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountLeadsResultSchema },
        errorFactory: Accounts.ListAccountLeadsError,
      },
      options,
    );
  }

  /**
   * Returns an account's custom services and states
   *
   * @remarks
   * Returns a list and details of all custom services and states defined for a specified account.
   *
   * @returns The account's engagements, services, and states.
   *
   * @throws {@link Accounts.ListAccountStatesAndServicesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAccountStatesAndServices(
    request: Accounts.ListAccountStatesAndServicesRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountStatesAndServices, Accounts.ListAccountStatesAndServicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v1/accounts/{aname}/statesandservices"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountStatesAndServicesSchema },
        errorFactory: Accounts.ListAccountStatesAndServicesError,
      },
      options,
    );
  }
}

export namespace Accounts {
  export type GetAccountInformationRequest = {
    /** Account name. */
    aname: string;
  };

  export class GetAccountInformationError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<GetAccountInformationError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ListAccountLeadsRequest = {
    /** Account name. */
    aname: string;
    /** Continue the previous query from the pageUrl in Location Header. */
    next?: number;
  };

  export class ListAccountLeadsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<ListAccountLeadsError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ListAccountStatesAndServicesRequest = {
    /** Account name. */
    aname: string;
  };

  export class ListAccountStatesAndServicesError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<ListAccountStatesAndServicesError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }
}
