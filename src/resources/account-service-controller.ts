import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  authRestErrorResponseforplannerSchema,
  type AuthRestErrorResponseforplanner,
} from "../models/auth-rest-error-responseforplanner.js";
import {
  getAccountInformationResponseforplannerSchema,
  type GetAccountInformationResponseforplanner,
} from "../models/get-account-information-responseforplanner.js";
import {
  restErrorResponseforplannerSchema,
  type RestErrorResponseforplanner,
} from "../models/rest-error-responseforplanner.js";
import type { Servers } from "../servers.js";

/**
 * Account Information for a specified Account Name.
 */
export class AccountServiceController {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve Account Information
   *
   * @remarks
   * Returns aaccount information associated with a specified account.
   *
   * @returns The account information related to an account.
   *
   * @throws {@link AccountServiceController.GetAccountInformationUsingGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountInformationUsingGet(
    request: AccountServiceController.GetAccountInformationUsingGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GetAccountInformationResponseforplanner,
    AccountServiceController.GetAccountInformationUsingGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/v1/accounts/{accountName}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getAccountInformationResponseforplannerSchema },
        errorFactory: AccountServiceController.GetAccountInformationUsingGetError,
      },
      options,
    );
  }
}

export namespace AccountServiceController {
  export type GetAccountInformationUsingGetRequest = {
    /** The account's numeric name, including leading zeroes. */
    accountName: string;
  };

  export class GetAccountInformationUsingGetError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restErrorResponseforplanner", RestErrorResponseforplanner>
      | Declared<"authRestErrorResponseforplanner", AuthRestErrorResponseforplanner>
      | Declared<"restErrorResponseforplanner2", RestErrorResponseforplanner>
      | Declared<"restErrorResponseforplanner3", RestErrorResponseforplanner>
      | Declared<"restErrorResponseforplanner4", RestErrorResponseforplanner>
      | Declared<"restErrorResponseforplanner5", RestErrorResponseforplanner>
      | Declared<"restErrorResponseforplanner6", RestErrorResponseforplanner>
    >;

    static readonly errors: ErrorDecoders<GetAccountInformationUsingGetError> = [
      {
        on: 400,
        kind: "restErrorResponseforplanner",
        decode: { kind: "json", schema: restErrorResponseforplannerSchema },
      },
      {
        on: 401,
        kind: "authRestErrorResponseforplanner",
        decode: { kind: "json", schema: authRestErrorResponseforplannerSchema },
      },
      {
        on: 403,
        kind: "restErrorResponseforplanner2",
        decode: { kind: "json", schema: restErrorResponseforplannerSchema },
      },
      {
        on: 404,
        kind: "restErrorResponseforplanner3",
        decode: { kind: "json", schema: restErrorResponseforplannerSchema },
      },
      {
        on: 406,
        kind: "restErrorResponseforplanner4",
        decode: { kind: "json", schema: restErrorResponseforplannerSchema },
      },
      {
        on: 429,
        kind: "restErrorResponseforplanner5",
        decode: { kind: "json", schema: restErrorResponseforplannerSchema },
      },
      {
        on: "default",
        kind: "restErrorResponseforplanner6",
        decode: { kind: "json", schema: restErrorResponseforplannerSchema },
      },
    ];
  }
}
