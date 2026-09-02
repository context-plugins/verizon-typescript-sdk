import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class Accounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getAccountInformation(
    request: Accounts.GetAccountInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<Account, Accounts.GetAccountInformationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/accounts/{aname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountSchema },
        errorFactory: Accounts.GetAccountInformationError,
      },
      options,
    );
  }

  listAccountLeads(
    request: Accounts.ListAccountLeadsRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountLeadsResult, Accounts.ListAccountLeadsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/leads/{aname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        query: [{ name: "next", value: request.next, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountLeadsResultSchema },
        errorFactory: Accounts.ListAccountLeadsError,
      },
      options,
    );
  }

  listAccountStatesAndServices(
    request: Accounts.ListAccountStatesAndServicesRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountStatesAndServices, Accounts.ListAccountStatesAndServicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/accounts/{aname}/statesandservices"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
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
    aname: string;
  };

  export class GetAccountInformationError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<GetAccountInformationError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ListAccountLeadsRequest = {
    aname: string;
    next?: number;
  };

  export class ListAccountLeadsError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<ListAccountLeadsError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ListAccountStatesAndServicesRequest = {
    aname: string;
  };

  export class ListAccountStatesAndServicesError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<ListAccountStatesAndServicesError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }
}
