import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { gioRequestResponseSchema, type GioRequestResponse } from "../models/gio-request-response.js";
import { gioRestErrorResponseSchema, type GioRestErrorResponse } from "../models/gio-rest-error-response.js";
import { giosmsSendRequestSchema, type GiosmsSendRequest } from "../models/giosms-send-request.js";
import {
  smsEventHistoryRequestSchema,
  type SmsEventHistoryRequest,
} from "../models/sms-event-history-request.js";
import { smsMessagesResponseSchema, type SmsMessagesResponse } from "../models/sms-messages-response.js";
import { successResponseSchema, type SuccessResponse } from "../models/success-response.js";
import type { Servers } from "../servers.js";

export class DeviceSmsMessaging {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getSmsMessages(
    request: DeviceSmsMessaging.GetSmsMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<SmsMessagesResponse, DeviceSmsMessaging.GetSmsMessagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/sms/{accountName}/history"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        query: [{ name: "next", value: request.next, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: smsMessagesResponseSchema },
        errorFactory: DeviceSmsMessaging.GetSmsMessagesError,
      },
      options,
    );
  }

  listSmsMessageHistory(
    request: DeviceSmsMessaging.ListSmsMessageHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, DeviceSmsMessaging.ListSmsMessageHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/sms/history/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: smsEventHistoryRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: DeviceSmsMessaging.ListSmsMessageHistoryError,
      },
      options,
    );
  }

  sendAnSmsMessage(
    request: DeviceSmsMessaging.SendAnSmsMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, DeviceSmsMessaging.SendAnSmsMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/sms"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: giosmsSendRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: DeviceSmsMessaging.SendAnSmsMessageError,
      },
      options,
    );
  }

  startSmsMessageDelivery(
    request: DeviceSmsMessaging.StartSmsMessageDeliveryRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponse, DeviceSmsMessaging.StartSmsMessageDeliveryError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/sms/{accountName}/startCallbacks"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: successResponseSchema },
        errorFactory: DeviceSmsMessaging.StartSmsMessageDeliveryError,
      },
      options,
    );
  }
}

export namespace DeviceSmsMessaging {
  export type GetSmsMessagesRequest = {
    accountName: string;
    next?: string;
  };

  export class GetSmsMessagesError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<GetSmsMessagesError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type ListSmsMessageHistoryRequest = {
    body: SmsEventHistoryRequest;
  };

  export class ListSmsMessageHistoryError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<ListSmsMessageHistoryError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type SendAnSmsMessageRequest = {
    body: GiosmsSendRequest;
  };

  export class SendAnSmsMessageError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<SendAnSmsMessageError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type StartSmsMessageDeliveryRequest = {
    accountName: string;
  };

  export class StartSmsMessageDeliveryError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<StartSmsMessageDeliveryError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }
}
