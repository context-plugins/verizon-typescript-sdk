import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Exchange Short Message Service (SMS) messages with devices.
 */
export class Sms {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieves queued SMS messages sent by all M2M MC devices associated with an account.
   *
   * @remarks
   * When HTTP status is 202, a URL will be returned in the Location header of the form
   * /sms/{aname}/history?next={token}. This URL can be used to request the next set of messages.
   *
   * @returns Successful response.
   *
   * @throws {@link Sms.ListDevicesSmsMessagesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDevicesSmsMessages(
    request: Sms.ListDevicesSmsMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<SmsMessagesQueryResult, Sms.ListDevicesSmsMessagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v1/sms/{aname}/history"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        query: [{ name: "next", value: request.next, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: smsMessagesQueryResultSchema },
        errorFactory: Sms.ListDevicesSmsMessagesError,
      },
      options,
    );
  }

  /**
   * Sends an SMS message to one or more devices.
   *
   * @remarks
   * The messages are queued on the ThingSpace Platform and sent as soon as possible, but they may
   * be delayed due to traffic and routing considerations.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link Sms.SendSmsToDeviceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sendSmsToDevice(
    request: Sms.SendSmsToDeviceRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, Sms.SendSmsToDeviceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/sms"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: smsSendRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: Sms.SendSmsToDeviceError,
      },
      options,
    );
  }

  /**
   * Starts delivery of queued SMS messages for the specific account.
   *
   * @remarks
   * Tells the ThingSpace Platform to start sending mobile-originated SMS messages through the
   * EnhancedConnectivityService callback service. SMS messages from devices are queued until they
   * are retrieved by your application, either by callback or synchronously with GET
   * /sms/{accountName}/history.
   *
   * @returns Successful response.
   *
   * @throws {@link Sms.StartQueuedSmsDeliveryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startQueuedSmsDelivery(
    request: Sms.StartQueuedSmsDeliveryRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectivityManagementSuccessResult, Sms.StartQueuedSmsDeliveryError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.thingspace("/m2m/v1/sms/{aname}/startCallbacks"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** Account name. */
    aname: string;
    /** Continue the previous query from the URL in Location Header. */
    next?: number;
  };

  export class ListDevicesSmsMessagesError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<ListDevicesSmsMessagesError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type SendSmsToDeviceRequest = {
    /** Request to send SMS. */
    body: SmsSendRequest;
  };

  export class SendSmsToDeviceError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<SendSmsToDeviceError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type StartQueuedSmsDeliveryRequest = {
    /** Account name. */
    aname: string;
  };

  export class StartQueuedSmsDeliveryError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<StartQueuedSmsDeliveryError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }
}
