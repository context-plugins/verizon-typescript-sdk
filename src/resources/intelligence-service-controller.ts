import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  asynchronousRequestResultforplannerSchema,
  type AsynchronousRequestResultforplanner,
} from "../models/asynchronous-request-resultforplanner.js";
import {
  authRestErrorResponseforplannerSchema,
  type AuthRestErrorResponseforplanner,
} from "../models/auth-rest-error-responseforplanner.js";
import {
  getDeviceStatusesRequestforplannerSchema,
  type GetDeviceStatusesRequestforplanner,
} from "../models/get-device-statuses-requestforplanner.js";
import {
  getDeviceStatusesResponseforplannerSchema,
  type GetDeviceStatusesResponseforplanner,
} from "../models/get-device-statuses-responseforplanner.js";
import {
  getDevicesWindowsRequestforplannerSchema,
  type GetDevicesWindowsRequestforplanner,
} from "../models/get-devices-windows-requestforplanner.js";
import {
  restErrorResponseforplannerSchema,
  type RestErrorResponseforplanner,
} from "../models/rest-error-responseforplanner.js";
import type { Servers } from "../servers.js";

/**
 * ThingSpace Intelligence is an offering of integrated connectivity and service management.
 */
export class IntelligenceServiceController {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve Windows
   *
   * @remarks
   * Retrieves available device windows for Connection Planner.
   *
   * @returns The asynchronous request status.
   *
   * @throws {@link IntelligenceServiceController.SetConnectionPlannerError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setConnectionPlanner(
    request: IntelligenceServiceController.SetConnectionPlannerRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AsynchronousRequestResultforplanner,
    IntelligenceServiceController.SetConnectionPlannerError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/v1/intelligence/device/connection-planner"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => getDevicesWindowsRequestforplannerSchema)),
        },
      },
      {
        success: { kind: "json", schema: asynchronousRequestResultforplannerSchema },
        errorFactory: IntelligenceServiceController.SetConnectionPlannerError,
      },
      options,
    );
  }

  /**
   * Device Status for Connection Planner
   *
   * @remarks
   * Retrieves the device status for the Connection Planner service.
   *
   * @returns Success
   *
   * @throws {@link IntelligenceServiceController.StatusConnectionPlannerError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  statusConnectionPlanner(
    request: IntelligenceServiceController.StatusConnectionPlannerRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GetDeviceStatusesResponseforplanner,
    IntelligenceServiceController.StatusConnectionPlannerError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/v1/intelligence/device/connection-planner/status"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => getDeviceStatusesRequestforplannerSchema)),
        },
      },
      {
        success: { kind: "json", schema: getDeviceStatusesResponseforplannerSchema },
        errorFactory: IntelligenceServiceController.StatusConnectionPlannerError,
      },
      options,
    );
  }
}

export namespace IntelligenceServiceController {
  export type SetConnectionPlannerRequest = {
    body?: GetDevicesWindowsRequestforplanner;
  };

  export class SetConnectionPlannerError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restErrorResponseforplanner", RestErrorResponseforplanner>
      | Declared<"authRestErrorResponseforplanner", AuthRestErrorResponseforplanner>
      | Declared<"restErrorResponseforplanner2", RestErrorResponseforplanner>
      | Declared<"restErrorResponseforplanner3", RestErrorResponseforplanner>
      | Declared<"restErrorResponseforplanner4", RestErrorResponseforplanner>
      | Declared<"restErrorResponseforplanner5", RestErrorResponseforplanner>
      | Declared<"restErrorResponseforplanner6", RestErrorResponseforplanner>
    >;

    static readonly errors: ErrorDecoders<SetConnectionPlannerError> = [
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

  export type StatusConnectionPlannerRequest = {
    body?: GetDeviceStatusesRequestforplanner;
  };

  export class StatusConnectionPlannerError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restErrorResponseforplanner", RestErrorResponseforplanner>
      | Declared<"authRestErrorResponseforplanner", AuthRestErrorResponseforplanner>
      | Declared<"restErrorResponseforplanner2", RestErrorResponseforplanner>
      | Declared<"restErrorResponseforplanner3", RestErrorResponseforplanner>
      | Declared<"restErrorResponseforplanner4", RestErrorResponseforplanner>
      | Declared<"restErrorResponseforplanner5", RestErrorResponseforplanner>
      | Declared<"restErrorResponseforplanner6", RestErrorResponseforplanner>
    >;

    static readonly errors: ErrorDecoders<StatusConnectionPlannerError> = [
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
