import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  clientPersistenceResponseSchema,
  type ClientPersistenceResponse,
} from "../models/client-persistence-response.js";
import {
  clientRegistrationRequestV2Schema,
  type ClientRegistrationRequestV2,
} from "../models/client-registration-request-v2.js";
import {
  clientRegistrationResponseSchema,
  type ClientRegistrationResponse,
} from "../models/client-registration-response.js";
import { connectionRequestSchema, type ConnectionRequest } from "../models/connection-request.js";
import { connectionResponseV3Schema, type ConnectionResponseV3 } from "../models/connection-response-v3.js";
import { connectionResponseSchema, type ConnectionResponse } from "../models/connection-response.js";
import { devicesRequestSchema, type DevicesRequest } from "../models/devices-request.js";
import { devicesResponseSchema, type DevicesResponse } from "../models/devices-response.js";
import { etxClientIdLookupSchema, type EtxClientIdLookup } from "../models/etx-client-id-lookup.js";
import { etxRespondingErrorSchema, type EtxRespondingError } from "../models/etx-responding-error.js";
import type { Servers } from "../servers.js";

/**
 * Manage device registration and connection.
 */
export class EtxRegistration {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve the certificate of a device or a software service in the ETX system.
   *
   * @remarks
   * With this API call the user can check the certificate of the device. At least one of the
   * DeviceID, IMEI, ICCID or IMSI is required to make the call.
   *
   * Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer
   * and Session/M2M tokens in order to call this API.
   *
   * @returns Successful retrieval
   *
   * @throws {@link EtxRegistration.GetEtxClientCertificateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEtxClientCertificate(
    request: EtxRegistration.GetEtxClientCertificateRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientPersistenceResponse, EtxRegistration.GetEtxClientCertificateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.impServer("/api/v2/clients/registration"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        pathParams: [],
        query: [{ name: "ID", value: request.id, schema: etxClientIdLookupSchema }],
        headers: [
          { name: "VendorID", value: request.vendorId, schema: s.string() },
          { name: "X-Transaction-Id", value: request.xTransactionId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clientPersistenceResponseSchema },
        errorFactory: EtxRegistration.GetEtxClientCertificateError,
      },
      options,
    );
  }

  /**
   * Retrieve MQTT URL for device or software service connection to the Message Exchange
   *
   * @remarks
   * With this API call the device or software service requests the MQTT URL for the location that
   * it needs to connect. To determine the proper URL the device or software service needs to
   * provide its ID (the one that was provided in the registration request), location (GPS
   * coordinates), and whether it is on the Verizon cellular network or not.
   *
   * Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer
   * and Session/M2M tokens in order to call this API.
   *
   * @returns Successful retrieval
   *
   * @throws {@link EtxRegistration.GetEtxConnectionUrlError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEtxConnectionUrl(
    request: EtxRegistration.GetEtxConnectionUrlRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectionResponse, EtxRegistration.GetEtxConnectionUrlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.impServer("/api/v2/clients/connection"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        pathParams: [],
        query: [],
        headers: [
          { name: "VendorID", value: request.vendorId, schema: s.string() },
          { name: "X-Transaction-Id", value: request.xTransactionId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: connectionRequestSchema },
      },
      {
        success: { kind: "json", schema: connectionResponseSchema },
        errorFactory: EtxRegistration.GetEtxConnectionUrlError,
      },
      options,
    );
  }

  /**
   * Retrieve MQTT URL for device or software service connection to the Message Exchange with
   * muti-MECs support
   *
   * @remarks
   * With this API call the device or software service requests the MQTT URL for the location that
   * it needs to connect. To determine the proper URL the device or software service needs to
   * provide its ID (the one that was provided in the registration request), location (GPS
   * coordinates), and whether it is on the Verizon cellular network or not.
   *
   * If there are multiple MECs that serve the location of the client all options are provided in
   * the response, and the client is free to choose which MEC they want to connect.
   *
   * Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer
   * and Session/M2M tokens in order to call this API.
   *
   * @returns Successful retrieval
   *
   * @throws {@link EtxRegistration.GetEtxConnectionUrlMultiMecError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEtxConnectionUrlMultiMec(
    request: EtxRegistration.GetEtxConnectionUrlMultiMecRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectionResponseV3, EtxRegistration.GetEtxConnectionUrlMultiMecError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.impServer("/api/v3/clients/connection"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        pathParams: [],
        query: [],
        headers: [
          { name: "VendorID", value: request.vendorId, schema: s.string() },
          { name: "X-Transaction-Id", value: request.xTransactionId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: connectionRequestSchema },
      },
      {
        success: { kind: "json", schema: connectionResponseV3Schema },
        errorFactory: EtxRegistration.GetEtxConnectionUrlMultiMecError,
      },
      options,
    );
  }

  /**
   * Retrieve devices by vendor and optional filters
   *
   * @remarks
   * This API allows retrieving devices by vendor ID and optional filters. The request should
   * include the VendorID and any filters to apply.
   *
   * @returns Successful retrieval of devices
   *
   * @throws {@link EtxRegistration.QueryEtxDevicesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryEtxDevices(
    request: EtxRegistration.QueryEtxDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DevicesResponse[], EtxRegistration.QueryEtxDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.impServer("/api/v1/clients/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Transaction-Id", value: request.xTransactionId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: devicesRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => devicesResponseSchema)) },
        errorFactory: EtxRegistration.QueryEtxDevicesError,
      },
      options,
    );
  }

  /**
   * Register a device or a software service to the ETX system.
   *
   * @remarks
   * With this API call the user (client) registers its device or software service to the ETX
   * system. Therefore, when a connection is initiated from the device or software service to the
   * ETX system along with the credential provided by this registration call, then the connection
   * will be authorized.
   *
   * - The user can register multiple devices or software services, which can all be used at the
   *   same time.
   * - There rules set in the system that limit the type and subtype of the clients that are allowed
   *   to be registered under the VendorID. The rules are created based ont he agreement between the
   *   Vendor and Verizon.
   * - The user will only be able to register a limited number of devices or software services under
   *   the same VendorID. This registration limit is specified by the agreement between the Vendor
   *   and Verizon.
   *
   * Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer
   * and Session/M2M tokens in order to call this API.
   *
   * @returns Successful Registration
   *
   * @throws {@link EtxRegistration.RegisterEtxClientError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  registerEtxClient(
    request: EtxRegistration.RegisterEtxClientRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientRegistrationResponse, EtxRegistration.RegisterEtxClientError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.impServer("/api/v2/clients/registration"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Transaction-Id", value: request.xTransactionId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: clientRegistrationRequestV2Schema },
      },
      {
        success: { kind: "json", schema: clientRegistrationResponseSchema },
        errorFactory: EtxRegistration.RegisterEtxClientError,
      },
      options,
    );
  }

  /**
   * Renew a device certificate or complete the registration for a device with pending certificate
   *
   * @remarks
   * With this API call the user (client) can:
   * - renew the certificate of a device or software service in the ETX system if the original
   *   certificate has expired. If the client's certificate expired or going to expire within 30
   *   days and new certificate will be issued. If the certificate expires more than 30 days, the
   *   current certificate will be returned to the client.
   * - complete its device or software service registration to the ETX system if the original
   *   registration request was not successful because of a pending certificate generation. Whenever
   *   the user receives a "client registration is pending" response (HTTP 202) from POST
   *   /clients/registration call. The client should initiate this PUT API call to finish the
   *   registration process and get the required certificate.
   *
   * Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer
   * and Session/M2M tokens in order to call this API.
   *
   * @returns Successful Registration
   *
   * @throws {@link EtxRegistration.RenewEtxClientCertificateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  renewEtxClientCertificate(
    request: EtxRegistration.RenewEtxClientCertificateRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientRegistrationResponse, EtxRegistration.RenewEtxClientCertificateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.impServer("/api/v2/clients/registration"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        pathParams: [],
        query: [],
        headers: [
          { name: "DeviceID", value: request.deviceId, schema: s.string() },
          { name: "VendorID", value: request.vendorId, schema: s.string() },
          { name: "X-Transaction-Id", value: request.xTransactionId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: clientRegistrationResponseSchema },
        errorFactory: EtxRegistration.RenewEtxClientCertificateError,
      },
      options,
    );
  }

  /**
   * Unregister a list of devices and software services from the ETX system.
   *
   * @remarks
   * With this API call the user (client) can unregister its devices and software services from the
   * ETX system. The unregistered devices and services will no longer be able to use the ETX Message
   * Exchange.
   *
   * Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer
   * and Session/M2M tokens in order to call this API.
   *
   * @returns Successful Deletion
   *
   * @throws {@link EtxRegistration.UnregisterEtxClientsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unregisterEtxClients(
    request: EtxRegistration.UnregisterEtxClientsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EtxRegistration.UnregisterEtxClientsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.impServer("/api/v2/clients/registration"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        pathParams: [],
        query: [{ name: "DeviceIDs", value: request.deviceIDs, schema: s.array(s.string()) }],
        headers: [
          { name: "VendorID", value: request.vendorId, schema: s.string() },
          { name: "X-Transaction-Id", value: request.xTransactionId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EtxRegistration.UnregisterEtxClientsError,
      },
      options,
    );
  }
}

export namespace EtxRegistration {
  export type GetEtxClientCertificateRequest = {
    /**
     * One of the following IDs is required- DeviceID, IMEI, ICCID, IMSI. If more than one ID is
     * provided, the API will return the certificate for the first ID found. The IDs are evaluated
     * in the following order: DeviceID, IMEI, ICCID, IMSI. If the first provided ID is not found,
     * the API will return an error.
     */
    id: EtxClientIdLookup;
    /** The VendorID set during the Vendor registration call. */
    vendorId: string;
    /**
     * Optional transaction identifier for tracing requests. If not provided, the application will
     * generate one.
     */
    xTransactionId?: string;
  };

  export class GetEtxClientCertificateError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"etxRespondingError", EtxRespondingError>
      | Declared<"etxRespondingError2", EtxRespondingError>
      | Declared<"etxRespondingError3", EtxRespondingError>
      | Declared<"etxRespondingError4", EtxRespondingError>
      | Declared<"etxRespondingError5", EtxRespondingError>
      | Declared<"etxRespondingError6", EtxRespondingError>
      | Declared<"etxRespondingError7", EtxRespondingError>
    >;

    static readonly errors: ErrorDecoders<GetEtxClientCertificateError> = [
      { on: 400, kind: "etxRespondingError", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 401, kind: "etxRespondingError2", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 403, kind: "etxRespondingError3", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 404, kind: "etxRespondingError4", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 429, kind: "etxRespondingError5", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 500, kind: "etxRespondingError6", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      {
        on: "default",
        kind: "etxRespondingError7",
        decode: { kind: "json", schema: etxRespondingErrorSchema },
      },
    ];
  }

  export type GetEtxConnectionUrlRequest = {
    /** The VendorID set during the Vendor registration call. */
    vendorId: string;
    /**
     * Optional transaction identifier for tracing requests. If not provided, the application will
     * generate one.
     */
    xTransactionId?: string;
    body: ConnectionRequest;
  };

  export class GetEtxConnectionUrlError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"etxRespondingError", EtxRespondingError>
      | Declared<"etxRespondingError2", EtxRespondingError>
      | Declared<"etxRespondingError3", EtxRespondingError>
      | Declared<"etxRespondingError4", EtxRespondingError>
      | Declared<"etxRespondingError5", EtxRespondingError>
      | Declared<"etxRespondingError6", EtxRespondingError>
    >;

    static readonly errors: ErrorDecoders<GetEtxConnectionUrlError> = [
      { on: 400, kind: "etxRespondingError", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 401, kind: "etxRespondingError2", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 403, kind: "etxRespondingError3", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 429, kind: "etxRespondingError4", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 503, kind: "etxRespondingError5", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      {
        on: "default",
        kind: "etxRespondingError6",
        decode: { kind: "json", schema: etxRespondingErrorSchema },
      },
    ];
  }

  export type GetEtxConnectionUrlMultiMecRequest = {
    /** The VendorID set during the Vendor registration call. */
    vendorId: string;
    /**
     * Optional transaction identifier for tracing requests. If not provided, the application will
     * generate one.
     */
    xTransactionId?: string;
    body: ConnectionRequest;
  };

  export class GetEtxConnectionUrlMultiMecError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"etxRespondingError", EtxRespondingError>
      | Declared<"etxRespondingError2", EtxRespondingError>
      | Declared<"etxRespondingError3", EtxRespondingError>
      | Declared<"etxRespondingError4", EtxRespondingError>
      | Declared<"etxRespondingError5", EtxRespondingError>
      | Declared<"etxRespondingError6", EtxRespondingError>
    >;

    static readonly errors: ErrorDecoders<GetEtxConnectionUrlMultiMecError> = [
      { on: 400, kind: "etxRespondingError", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 401, kind: "etxRespondingError2", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 403, kind: "etxRespondingError3", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 429, kind: "etxRespondingError4", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 503, kind: "etxRespondingError5", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      {
        on: "default",
        kind: "etxRespondingError6",
        decode: { kind: "json", schema: etxRespondingErrorSchema },
      },
    ];
  }

  export type QueryEtxDevicesRequest = {
    /**
     * Optional transaction identifier for tracing requests. If not provided, the application will
     * generate one.
     */
    xTransactionId?: string;
    body: DevicesRequest;
  };

  export class QueryEtxDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"etxRespondingError", EtxRespondingError>
      | Declared<"etxRespondingError2", EtxRespondingError>
      | Declared<"etxRespondingError3", EtxRespondingError>
      | Declared<"etxRespondingError4", EtxRespondingError>
    >;

    static readonly errors: ErrorDecoders<QueryEtxDevicesError> = [
      { on: 400, kind: "etxRespondingError", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 401, kind: "etxRespondingError2", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 500, kind: "etxRespondingError3", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      {
        on: "default",
        kind: "etxRespondingError4",
        decode: { kind: "json", schema: etxRespondingErrorSchema },
      },
    ];
  }

  export type RegisterEtxClientRequest = {
    /**
     * Optional transaction identifier for tracing requests. If not provided, the application will
     * generate one.
     */
    xTransactionId?: string;
    body: ClientRegistrationRequestV2;
  };

  export class RegisterEtxClientError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"etxRespondingError", EtxRespondingError>
      | Declared<"etxRespondingError2", EtxRespondingError>
      | Declared<"etxRespondingError3", EtxRespondingError>
      | Declared<"etxRespondingError4", EtxRespondingError>
      | Declared<"etxRespondingError5", EtxRespondingError>
      | Declared<"etxRespondingError6", EtxRespondingError>
    >;

    static readonly errors: ErrorDecoders<RegisterEtxClientError> = [
      { on: 400, kind: "etxRespondingError", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 401, kind: "etxRespondingError2", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 403, kind: "etxRespondingError3", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 429, kind: "etxRespondingError4", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 503, kind: "etxRespondingError5", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      {
        on: "default",
        kind: "etxRespondingError6",
        decode: { kind: "json", schema: etxRespondingErrorSchema },
      },
    ];
  }

  export type RenewEtxClientCertificateRequest = {
    deviceId: string;
    /** The VendorID set during the Vendor registration call. */
    vendorId: string;
    /**
     * Optional transaction identifier for tracing requests. If not provided, the application will
     * generate one.
     */
    xTransactionId?: string;
    body?: Record<string, unknown>;
  };

  export class RenewEtxClientCertificateError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"etxRespondingError", EtxRespondingError>
      | Declared<"etxRespondingError2", EtxRespondingError>
      | Declared<"etxRespondingError3", EtxRespondingError>
      | Declared<"etxRespondingError4", EtxRespondingError>
      | Declared<"etxRespondingError5", EtxRespondingError>
      | Declared<"etxRespondingError6", EtxRespondingError>
    >;

    static readonly errors: ErrorDecoders<RenewEtxClientCertificateError> = [
      { on: 400, kind: "etxRespondingError", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 401, kind: "etxRespondingError2", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 403, kind: "etxRespondingError3", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 429, kind: "etxRespondingError4", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 503, kind: "etxRespondingError5", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      {
        on: "default",
        kind: "etxRespondingError6",
        decode: { kind: "json", schema: etxRespondingErrorSchema },
      },
    ];
  }

  export type UnregisterEtxClientsRequest = {
    /** The list of device IDs and software service IDs to be unregistered */
    deviceIDs: string[];
    /** The VendorID set during the Vendor registration call. */
    vendorId: string;
    /**
     * Optional transaction identifier for tracing requests. If not provided, the application will
     * generate one.
     */
    xTransactionId?: string;
  };

  export class UnregisterEtxClientsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"etxRespondingError", EtxRespondingError>
      | Declared<"etxRespondingError2", EtxRespondingError>
      | Declared<"etxRespondingError3", EtxRespondingError>
      | Declared<"etxRespondingError4", EtxRespondingError>
      | Declared<"etxRespondingError5", EtxRespondingError>
      | Declared<"etxRespondingError6", EtxRespondingError>
    >;

    static readonly errors: ErrorDecoders<UnregisterEtxClientsError> = [
      { on: 400, kind: "etxRespondingError", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 401, kind: "etxRespondingError2", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 403, kind: "etxRespondingError3", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 429, kind: "etxRespondingError4", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 503, kind: "etxRespondingError5", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      {
        on: "default",
        kind: "etxRespondingError6",
        decode: { kind: "json", schema: etxRespondingErrorSchema },
      },
    ];
  }
}
