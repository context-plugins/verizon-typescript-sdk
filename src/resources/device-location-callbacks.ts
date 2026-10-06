import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  callbackRegistrationResultSchema,
  type CallbackRegistrationResult,
} from "../models/callback-registration-result.js";
import { callbackServiceNameSchema, type CallbackServiceName } from "../models/callback-service-name.js";
import {
  deviceLocationCallbackSchema,
  type DeviceLocationCallback,
} from "../models/device-location-callback.js";
import { deviceLocationResultSchema, type DeviceLocationResult } from "../models/device-location-result.js";
import {
  deviceLocationSuccessResultSchema,
  type DeviceLocationSuccessResult,
} from "../models/device-location-success-result.js";
import { transactionIdSchema, type TransactionId } from "../models/transaction-id.js";
import type { Servers } from "../servers.js";

/**
 * Receive notifications from the API.
 */
export class DeviceLocationCallbacks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel an Asyncronous report
   *
   * @remarks
   * Cancel an asynchronous report request.
   *
   * @returns Request canceled.
   *
   * @throws {@link DeviceLocationCallbacks.CancelAsyncReportError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelAsyncReport(
    request: DeviceLocationCallbacks.CancelAsyncReportRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionId, DeviceLocationCallbacks.CancelAsyncReportError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.deviceLocation("/devicelocations/{txid}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "txid", value: request.txid, schema: s.string() }],
        query: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionIdSchema },
        errorFactory: DeviceLocationCallbacks.CancelAsyncReportError,
      },
      options,
    );
  }

  /**
   * Stop receiving a callback type.
   *
   * @remarks
   * Deregister a URL to stop receiving callback messages.
   *
   * @returns Deregistration successful.
   *
   * @throws {@link DeviceLocationCallbacks.DeregisterCallback2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deregisterCallback2(
    request: DeviceLocationCallbacks.DeregisterCallback2Request,
    options?: RequestOptions,
  ): ApiPromise<DeviceLocationSuccessResult, DeviceLocationCallbacks.DeregisterCallback2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.deviceLocation("/callbacks/{accountName}/name/{service}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "service", value: request.service, schema: callbackServiceNameSchema },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceLocationSuccessResultSchema },
        errorFactory: DeviceLocationCallbacks.DeregisterCallback2Error,
      },
      options,
    );
  }

  /**
   * Get registered callback URLs.
   *
   * @remarks
   * Returns a list of all registered callback URLs for the account.
   *
   * @returns List of all registered callback URLs.
   *
   * @throws {@link DeviceLocationCallbacks.ListRegisteredCallbacks2Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRegisteredCallbacks2(
    request: DeviceLocationCallbacks.ListRegisteredCallbacks2Request,
    options?: RequestOptions,
  ): ApiPromise<DeviceLocationCallback[], DeviceLocationCallbacks.ListRegisteredCallbacks2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.deviceLocation("/callbacks/{accountName}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deviceLocationCallbackSchema)) },
        errorFactory: DeviceLocationCallbacks.ListRegisteredCallbacks2Error,
      },
      options,
    );
  }

  /**
   * Register a URL to receive callbacks
   *
   * @remarks
   * Provide a URL to receive messages from a ThingSpace callback service.
   *
   * @returns Callback registration response.
   *
   * @throws {@link DeviceLocationCallbacks.RegisterCallback2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  registerCallback2(
    request: DeviceLocationCallbacks.RegisterCallback2Request,
    options?: RequestOptions,
  ): ApiPromise<CallbackRegistrationResult, DeviceLocationCallbacks.RegisterCallback2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.deviceLocation("/callbacks/{accountName}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: callbackRegistrationResultSchema },
        errorFactory: DeviceLocationCallbacks.RegisterCallback2Error,
      },
      options,
    );
  }
}

export namespace DeviceLocationCallbacks {
  export type CancelAsyncReportRequest = {
    /** The `transactionId` value. */
    txid: string;
    /** Account identifier in "##########-#####". */
    accountName: string;
  };

  export class CancelAsyncReportError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<CancelAsyncReportError> = [
      {
        on: "default",
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }

  export type DeregisterCallback2Request = {
    /** Account number. */
    accountName: string;
    /** Callback service name. */
    service: CallbackServiceName;
  };

  export class DeregisterCallback2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<DeregisterCallback2Error> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export type ListRegisteredCallbacks2Request = {
    /** Account number. */
    accountName: string;
  };

  export class ListRegisteredCallbacks2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<ListRegisteredCallbacks2Error> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export type RegisterCallback2Request = {
    /** Account number. */
    accountName: string;
  };

  export class RegisterCallback2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<RegisterCallback2Error> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }
}
