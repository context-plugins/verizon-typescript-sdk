import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class DeviceLocationCallbacks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  cancelAsyncReport(
    request: DeviceLocationCallbacks.CancelAsyncReportRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionId, DeviceLocationCallbacks.CancelAsyncReportError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.deviceLocation("/devicelocations/{txid}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "txid", value: request.txid, schema: s.string() }],
        query: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionIdSchema },
        errorFactory: DeviceLocationCallbacks.CancelAsyncReportError,
      },
      options,
    );
  }

  deregisterCallback2(
    request: DeviceLocationCallbacks.DeregisterCallback2Request,
    options?: RequestOptions,
  ): ApiPromise<DeviceLocationSuccessResult, DeviceLocationCallbacks.DeregisterCallback2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.deviceLocation("/callbacks/{accountName}/name/{service}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "service", value: request.service, schema: callbackServiceNameSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceLocationSuccessResultSchema },
        errorFactory: DeviceLocationCallbacks.DeregisterCallback2Error,
      },
      options,
    );
  }

  listRegisteredCallbacks2(
    request: DeviceLocationCallbacks.ListRegisteredCallbacks2Request,
    options?: RequestOptions,
  ): ApiPromise<DeviceLocationCallback[], DeviceLocationCallbacks.ListRegisteredCallbacks2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.deviceLocation("/callbacks/{accountName}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deviceLocationCallbackSchema)) },
        errorFactory: DeviceLocationCallbacks.ListRegisteredCallbacks2Error,
      },
      options,
    );
  }

  registerCallback2(
    request: DeviceLocationCallbacks.RegisterCallback2Request,
    options?: RequestOptions,
  ): ApiPromise<CallbackRegistrationResult, DeviceLocationCallbacks.RegisterCallback2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.deviceLocation("/callbacks/{accountName}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
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
    txid: string;
    accountName: string;
  };

  export class CancelAsyncReportError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<CancelAsyncReportError> = [
      {
        on: [400, 599],
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }

  export type DeregisterCallback2Request = {
    accountName: string;
    service: CallbackServiceName;
  };

  export class DeregisterCallback2Error extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<DeregisterCallback2Error> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export type ListRegisteredCallbacks2Request = {
    accountName: string;
  };

  export class ListRegisteredCallbacks2Error extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<ListRegisteredCallbacks2Error> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export type RegisterCallback2Request = {
    accountName: string;
  };

  export class RegisterCallback2Error extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<RegisterCallback2Error> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }
}
