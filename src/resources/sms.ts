import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  connectivityManagementResultSchema,
  type ConnectivityManagementResult,
} from "../models/connectivity-management-result.js";
import {
  connectivityManagementSuccessResultSchema,
  type ConnectivityManagementSuccessResult,
} from "../models/connectivity-management-success-result.js";
import {
  deviceManagementResultSchema,
  type DeviceManagementResult,
} from "../models/device-management-result.js";
import {
  smsMessagesQueryResultSchema,
  type SmsMessagesQueryResult,
} from "../models/sms-messages-query-result.js";
import { smsSendRequestSchema, type SmsSendRequest } from "../models/sms-send-request.js";
import type { Servers } from "../servers.js";

export class Sms {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listDevicesSmsMessages(
    request: Sms.ListDevicesSmsMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<SmsMessagesQueryResult, Sms.ListDevicesSmsMessagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/sms/{aname}/history"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        query: [{ name: "next", value: request.next, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: smsMessagesQueryResultSchema },
        errorFactory: Sms.ListDevicesSmsMessagesError,
      },
      options,
    );
  }

  sendSmsToDevice(
    request: Sms.SendSmsToDeviceRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, Sms.SendSmsToDeviceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/sms"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: smsSendRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: Sms.SendSmsToDeviceError,
      },
      options,
    );
  }

  startQueuedSmsDelivery(
    request: Sms.StartQueuedSmsDeliveryRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectivityManagementSuccessResult, Sms.StartQueuedSmsDeliveryError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/sms/{aname}/startCallbacks"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectivityManagementSuccessResultSchema },
        errorFactory: Sms.StartQueuedSmsDeliveryError,
      },
      options,
    );
  }
}

export namespace Sms {
  export type ListDevicesSmsMessagesRequest = {
    aname: string;
    next?: number;
  };

  export class ListDevicesSmsMessagesError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<ListDevicesSmsMessagesError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type SendSmsToDeviceRequest = {
    body: SmsSendRequest;
  };

  export class SendSmsToDeviceError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<SendSmsToDeviceError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type StartQueuedSmsDeliveryRequest = {
    aname: string;
  };

  export class StartQueuedSmsDeliveryError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<StartQueuedSmsDeliveryError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }
}
