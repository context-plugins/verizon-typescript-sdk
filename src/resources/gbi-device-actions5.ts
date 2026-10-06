import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { gbiRequestResponse5Schema, type GbiRequestResponse5 } from "../models/gbi-request-response5.js";
import {
  gbiRestErrorResponse5Schema,
  type GbiRestErrorResponse5,
} from "../models/gbi-rest-error-response5.js";
import { gbiactivateRequest5Schema, type GbiactivateRequest5 } from "../models/gbiactivate-request5.js";
import { gbichangeRequest5Schema, type GbichangeRequest5 } from "../models/gbichange-request5.js";
import {
  gbideviceDetailsresponse5Schema,
  type GbideviceDetailsresponse5,
} from "../models/gbidevice-detailsresponse5.js";
import { gbideviceId5Schema, type GbideviceId5 } from "../models/gbidevice-id5.js";
import type { Servers } from "../servers.js";

/**
 * Activate devices or retrieve device attributes.
 */
export class GbiDeviceActions5 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Change a Device's service plan.
   *
   * @remarks
   * Change a device's service plan to use 5G BI.
   *
   * @returns A request ID is returned as a successful response. Use a callback to see the details
   * associated with the request ID.
   *
   * @throws {@link GbiDeviceActions5.BusinessInternetServiceplanchangeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  businessInternetServiceplanchange(
    request: GbiDeviceActions5.BusinessInternetServiceplanchangeRequest,
    options?: RequestOptions,
  ): ApiPromise<GbiRequestResponse5, GbiDeviceActions5.BusinessInternetServiceplanchangeError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.thingspace("/actions/plan"),
        auth: anyAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: gbichangeRequest5Schema },
      },
      {
        success: { kind: "json", schema: gbiRequestResponse5Schema },
        errorFactory: GbiDeviceActions5.BusinessInternetServiceplanchangeError,
      },
      options,
    );
  }

  /**
   * Activate a device.
   *
   * @remarks
   * Uses the device's ICCID and IMEI to activate service.
   *
   * @returns A request ID is returned as a successful response. Use a callback to see the details
   * associated with the request ID.
   *
   * @throws {@link GbiDeviceActions5.BusinessInternetactivateUsingPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  businessInternetactivateUsingPost(
    request: GbiDeviceActions5.BusinessInternetactivateUsingPostRequest,
    options?: RequestOptions,
  ): ApiPromise<GbiRequestResponse5, GbiDeviceActions5.BusinessInternetactivateUsingPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/actions/activate"),
        auth: anyAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: gbiactivateRequest5Schema },
      },
      {
        success: { kind: "json", schema: gbiRequestResponse5Schema },
        errorFactory: GbiDeviceActions5.BusinessInternetactivateUsingPostError,
      },
      options,
    );
  }

  /**
   * List the 5G BI information for a device by ICCID.
   *
   * @remarks
   * Uses the decive's Integrated Circuit Card Identification Number (ICCID) to retrive and display
   * the device's properties.
   *
   * @returns The device's details will be returned from a successful request.
   *
   * @throws {@link GbiDeviceActions5.BusinessInternetlistDeviceInformationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  businessInternetlistDeviceInformation(
    request: GbiDeviceActions5.BusinessInternetlistDeviceInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<GbideviceDetailsresponse5, GbiDeviceActions5.BusinessInternetlistDeviceInformationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/actions/list"),
        auth: anyAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: gbideviceId5Schema },
      },
      {
        success: { kind: "json", schema: gbideviceDetailsresponse5Schema },
        errorFactory: GbiDeviceActions5.BusinessInternetlistDeviceInformationError,
      },
      options,
    );
  }
}

export namespace GbiDeviceActions5 {
  export type BusinessInternetServiceplanchangeRequest = {
    /**
     * This endpoint is for use when changing a device's service plan to a 5G BI service plan. The
     * service plan can change for an active device up to four times per month but will require
     * address validation for each change. The service plan cannot be changed for a device while its
     * service is suspended.
     */
    body: GbichangeRequest5;
  };

  export class BusinessInternetServiceplanchangeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gbiRestErrorResponse5", GbiRestErrorResponse5>>;

    static readonly errors: ErrorDecoders<BusinessInternetServiceplanchangeError> = [
      {
        on: "default",
        kind: "gbiRestErrorResponse5",
        decode: { kind: "json", schema: gbiRestErrorResponse5Schema },
      },
    ];
  }

  export type BusinessInternetactivateUsingPostRequest = {
    /**
     * Activate 5G BI service. Defining <code>publicIpRestriction</code> as "Unrestricted" or
     * "Restricted" is required for activating as Public Static. Leave
     * <code>publicIpRestriction</code> undefined to activate as Public Dynamic. Removing
     * <code>publicIpRestriction</code> from the request will activate as Mobile Private Network
     * (MPN).
     */
    body: GbiactivateRequest5;
  };

  export class BusinessInternetactivateUsingPostError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gbiRestErrorResponse5", GbiRestErrorResponse5>>;

    static readonly errors: ErrorDecoders<BusinessInternetactivateUsingPostError> = [
      {
        on: "default",
        kind: "gbiRestErrorResponse5",
        decode: { kind: "json", schema: gbiRestErrorResponse5Schema },
      },
    ];
  }

  export type BusinessInternetlistDeviceInformationRequest = {
    /** Device Profile Query */
    body: GbideviceId5;
  };

  export class BusinessInternetlistDeviceInformationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gbiRestErrorResponse5", GbiRestErrorResponse5>>;

    static readonly errors: ErrorDecoders<BusinessInternetlistDeviceInformationError> = [
      {
        on: "default",
        kind: "gbiRestErrorResponse5",
        decode: { kind: "json", schema: gbiRestErrorResponse5Schema },
      },
    ];
  }
}
