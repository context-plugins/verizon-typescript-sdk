import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Send Short Message Service (SMS) messages to devices
 */
export class DeviceSmsMessaging {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get SMS messages.
   *
   * @remarks
   * Retrieves queued SMS messages sent by all M2M MC devices associated with an account.
   *
   * @returns Successful response
   *
   * @throws {@link DeviceSmsMessaging.GetSmsMessagesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSmsMessages(
    request: DeviceSmsMessaging.GetSmsMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<SmsMessagesResponse, DeviceSmsMessaging.GetSmsMessagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v1/sms/{accountName}/history"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        query: [{ name: "next", value: request.next, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: smsMessagesResponseSchema },
        errorFactory: DeviceSmsMessaging.GetSmsMessagesError,
      },
      options,
    );
  }

  /**
   * List SMS message history.
   *
   * @remarks
   * Returns a list of sms history for a given device during a specified time frame.
   *
   * @returns Request ID
   *
   * @throws {@link DeviceSmsMessaging.ListSmsMessageHistoryError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSmsMessageHistory(
    request: DeviceSmsMessaging.ListSmsMessageHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, DeviceSmsMessaging.ListSmsMessageHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/sms/history/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: smsEventHistoryRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: DeviceSmsMessaging.ListSmsMessageHistoryError,
      },
      options,
    );
  }

  /**
   * Send an SMS message.
   *
   * @remarks
   * Sends an SMS message to one device. Messages are queued on the M2M MC Platform and sent as soon
   * as possible, but they may be delayed due to traffic and routing considerations.
   *
   * @returns Request ID
   *
   * @throws {@link DeviceSmsMessaging.SendAnSmsMessageError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sendAnSmsMessage(
    request: DeviceSmsMessaging.SendAnSmsMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, DeviceSmsMessaging.SendAnSmsMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/sms"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: giosmsSendRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: DeviceSmsMessaging.SendAnSmsMessageError,
      },
      options,
    );
  }

  /**
   * Starts SMS message delivery.
   *
   * @remarks
   * Starts delivery of SMS messages for the specified account.
   *
   * @returns Request Success Message
   *
   * @throws {@link DeviceSmsMessaging.StartSmsMessageDeliveryError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startSmsMessageDelivery(
    request: DeviceSmsMessaging.StartSmsMessageDeliveryRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponse, DeviceSmsMessaging.StartSmsMessageDeliveryError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.thingspace("/m2m/v1/sms/{accountName}/startCallbacks"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** Numeric account name */
    accountName: string;
    /** Continue the previous query from the pageUrl in Location Header */
    next?: string;
  };

  export class GetSmsMessagesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<GetSmsMessagesError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type ListSmsMessageHistoryRequest = {
    /** Device Query */
    body: SmsEventHistoryRequest;
  };

  export class ListSmsMessageHistoryError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<ListSmsMessageHistoryError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type SendAnSmsMessageRequest = {
    /** SMS message to an indiividual device. */
    body: GiosmsSendRequest;
  };

  export class SendAnSmsMessageError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<SendAnSmsMessageError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type StartSmsMessageDeliveryRequest = {
    /** Numeric account name */
    accountName: string;
  };

  export class StartSmsMessageDeliveryError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<StartSmsMessageDeliveryError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }
}
