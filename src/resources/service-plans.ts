import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  connectivityManagementResultSchema,
  type ConnectivityManagementResult,
} from "../models/connectivity-management-result.js";
import { servicePlanSchema, type ServicePlan } from "../models/service-plan.js";
import type { Servers } from "../servers.js";

/**
 * Get a list of service plans in an account.
 */
export class ServicePlans {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Returns a list of all data service plans that are associated with a specified account.
   *
   * @remarks
   * Returns a list of all data service plans that are associated with a specified billing account.
   * When you send a request to /devices/actions/activate to activate a line of service you must
   * specify the code for one of the service plans associated with your account.
   *
   * @returns The list of service plans associated with the account.
   *
   * @throws {@link ServicePlans.ListAccountServicePlansError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAccountServicePlans(
    request: ServicePlans.ListAccountServicePlansRequest,
    options?: RequestOptions,
  ): ApiPromise<ServicePlan[], ServicePlans.ListAccountServicePlansError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v1/plans/{aname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => servicePlanSchema)) },
        errorFactory: ServicePlans.ListAccountServicePlansError,
      },
      options,
    );
  }
}

export namespace ServicePlans {
  export type ListAccountServicePlansRequest = {
    /** Account name. */
    aname: string;
  };

  export class ListAccountServicePlansError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<ListAccountServicePlansError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }
}
