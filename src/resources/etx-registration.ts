import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class EtxRegistration {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getEtxClientCertificate(
    request: EtxRegistration.GetEtxClientCertificateRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientPersistenceResponse, EtxRegistration.GetEtxClientCertificateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.impServer("/api/v2/clients/registration"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
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

  getEtxConnectionUrl(
    request: EtxRegistration.GetEtxConnectionUrlRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectionResponse, EtxRegistration.GetEtxConnectionUrlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.impServer("/api/v2/clients/connection"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        headers: [
          { name: "VendorID", value: request.vendorId, schema: s.string() },
          { name: "X-Transaction-Id", value: request.xTransactionId, schema: s.optional(s.string()) },
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

  getEtxConnectionUrlMultiMec(
    request: EtxRegistration.GetEtxConnectionUrlMultiMecRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectionResponseV3, EtxRegistration.GetEtxConnectionUrlMultiMecError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.impServer("/api/v3/clients/connection"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        headers: [
          { name: "VendorID", value: request.vendorId, schema: s.string() },
          { name: "X-Transaction-Id", value: request.xTransactionId, schema: s.optional(s.string()) },
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

  queryEtxDevices(
    request: EtxRegistration.QueryEtxDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DevicesResponse[], EtxRegistration.QueryEtxDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.impServer("/api/v1/clients/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        headers: [
          { name: "X-Transaction-Id", value: request.xTransactionId, schema: s.optional(s.string()) },
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

  registerEtxClient(
    request: EtxRegistration.RegisterEtxClientRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientRegistrationResponse, EtxRegistration.RegisterEtxClientError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.impServer("/api/v2/clients/registration"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        headers: [
          { name: "X-Transaction-Id", value: request.xTransactionId, schema: s.optional(s.string()) },
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

  renewEtxClientCertificate(
    request: EtxRegistration.RenewEtxClientCertificateRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientRegistrationResponse, EtxRegistration.RenewEtxClientCertificateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.impServer("/api/v2/clients/registration"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        headers: [
          { name: "DeviceID", value: request.deviceId, schema: s.string() },
          { name: "VendorID", value: request.vendorId, schema: s.string() },
          { name: "X-Transaction-Id", value: request.xTransactionId, schema: s.optional(s.string()) },
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

  unregisterEtxClients(
    request: EtxRegistration.UnregisterEtxClientsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EtxRegistration.UnregisterEtxClientsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.impServer("/api/v2/clients/registration"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        query: [{ name: "DeviceIDs", value: request.deviceIDs, schema: s.array(s.string()) }],
        headers: [
          { name: "VendorID", value: request.vendorId, schema: s.string() },
          { name: "X-Transaction-Id", value: request.xTransactionId, schema: s.optional(s.string()) },
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
    id: EtxClientIdLookup;
    vendorId: string;
    xTransactionId?: string;
  };

  export class GetEtxClientCertificateError extends ResponseError<
    | Declared<"etxRespondingError", EtxRespondingError>
    | Declared<"etxRespondingError2", EtxRespondingError>
    | Declared<"etxRespondingError3", EtxRespondingError>
    | Declared<"etxRespondingError4", EtxRespondingError>
    | Declared<"etxRespondingError5", EtxRespondingError>
    | Declared<"etxRespondingError6", EtxRespondingError>
    | Declared<"etxRespondingError7", EtxRespondingError>
  > {
    static readonly errors: ErrorDecoders<GetEtxClientCertificateError> = [
      { on: 400, kind: "etxRespondingError", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 401, kind: "etxRespondingError2", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 403, kind: "etxRespondingError3", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 404, kind: "etxRespondingError4", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 429, kind: "etxRespondingError5", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 500, kind: "etxRespondingError6", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      {
        on: [400, 599],
        kind: "etxRespondingError7",
        decode: { kind: "json", schema: etxRespondingErrorSchema },
      },
    ];
  }

  export type GetEtxConnectionUrlRequest = {
    vendorId: string;
    xTransactionId?: string;
    body: ConnectionRequest;
  };

  export class GetEtxConnectionUrlError extends ResponseError<
    | Declared<"etxRespondingError", EtxRespondingError>
    | Declared<"etxRespondingError2", EtxRespondingError>
    | Declared<"etxRespondingError3", EtxRespondingError>
    | Declared<"etxRespondingError4", EtxRespondingError>
    | Declared<"etxRespondingError5", EtxRespondingError>
    | Declared<"etxRespondingError6", EtxRespondingError>
  > {
    static readonly errors: ErrorDecoders<GetEtxConnectionUrlError> = [
      { on: 400, kind: "etxRespondingError", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 401, kind: "etxRespondingError2", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 403, kind: "etxRespondingError3", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 429, kind: "etxRespondingError4", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 503, kind: "etxRespondingError5", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      {
        on: [400, 599],
        kind: "etxRespondingError6",
        decode: { kind: "json", schema: etxRespondingErrorSchema },
      },
    ];
  }

  export type GetEtxConnectionUrlMultiMecRequest = {
    vendorId: string;
    xTransactionId?: string;
    body: ConnectionRequest;
  };

  export class GetEtxConnectionUrlMultiMecError extends ResponseError<
    | Declared<"etxRespondingError", EtxRespondingError>
    | Declared<"etxRespondingError2", EtxRespondingError>
    | Declared<"etxRespondingError3", EtxRespondingError>
    | Declared<"etxRespondingError4", EtxRespondingError>
    | Declared<"etxRespondingError5", EtxRespondingError>
    | Declared<"etxRespondingError6", EtxRespondingError>
  > {
    static readonly errors: ErrorDecoders<GetEtxConnectionUrlMultiMecError> = [
      { on: 400, kind: "etxRespondingError", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 401, kind: "etxRespondingError2", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 403, kind: "etxRespondingError3", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 429, kind: "etxRespondingError4", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 503, kind: "etxRespondingError5", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      {
        on: [400, 599],
        kind: "etxRespondingError6",
        decode: { kind: "json", schema: etxRespondingErrorSchema },
      },
    ];
  }

  export type QueryEtxDevicesRequest = {
    xTransactionId?: string;
    body: DevicesRequest;
  };

  export class QueryEtxDevicesError extends ResponseError<
    | Declared<"etxRespondingError", EtxRespondingError>
    | Declared<"etxRespondingError2", EtxRespondingError>
    | Declared<"etxRespondingError3", EtxRespondingError>
    | Declared<"etxRespondingError4", EtxRespondingError>
  > {
    static readonly errors: ErrorDecoders<QueryEtxDevicesError> = [
      { on: 400, kind: "etxRespondingError", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 401, kind: "etxRespondingError2", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 500, kind: "etxRespondingError3", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      {
        on: [400, 599],
        kind: "etxRespondingError4",
        decode: { kind: "json", schema: etxRespondingErrorSchema },
      },
    ];
  }

  export type RegisterEtxClientRequest = {
    xTransactionId?: string;
    body: ClientRegistrationRequestV2;
  };

  export class RegisterEtxClientError extends ResponseError<
    | Declared<"etxRespondingError", EtxRespondingError>
    | Declared<"etxRespondingError2", EtxRespondingError>
    | Declared<"etxRespondingError3", EtxRespondingError>
    | Declared<"etxRespondingError4", EtxRespondingError>
    | Declared<"etxRespondingError5", EtxRespondingError>
    | Declared<"etxRespondingError6", EtxRespondingError>
  > {
    static readonly errors: ErrorDecoders<RegisterEtxClientError> = [
      { on: 400, kind: "etxRespondingError", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 401, kind: "etxRespondingError2", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 403, kind: "etxRespondingError3", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 429, kind: "etxRespondingError4", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 503, kind: "etxRespondingError5", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      {
        on: [400, 599],
        kind: "etxRespondingError6",
        decode: { kind: "json", schema: etxRespondingErrorSchema },
      },
    ];
  }

  export type RenewEtxClientCertificateRequest = {
    deviceId: string;
    vendorId: string;
    xTransactionId?: string;
    body?: Record<string, unknown>;
  };

  export class RenewEtxClientCertificateError extends ResponseError<
    | Declared<"etxRespondingError", EtxRespondingError>
    | Declared<"etxRespondingError2", EtxRespondingError>
    | Declared<"etxRespondingError3", EtxRespondingError>
    | Declared<"etxRespondingError4", EtxRespondingError>
    | Declared<"etxRespondingError5", EtxRespondingError>
    | Declared<"etxRespondingError6", EtxRespondingError>
  > {
    static readonly errors: ErrorDecoders<RenewEtxClientCertificateError> = [
      { on: 400, kind: "etxRespondingError", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 401, kind: "etxRespondingError2", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 403, kind: "etxRespondingError3", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 429, kind: "etxRespondingError4", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 503, kind: "etxRespondingError5", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      {
        on: [400, 599],
        kind: "etxRespondingError6",
        decode: { kind: "json", schema: etxRespondingErrorSchema },
      },
    ];
  }

  export type UnregisterEtxClientsRequest = {
    deviceIDs: string[];
    vendorId: string;
    xTransactionId?: string;
  };

  export class UnregisterEtxClientsError extends ResponseError<
    | Declared<"etxRespondingError", EtxRespondingError>
    | Declared<"etxRespondingError2", EtxRespondingError>
    | Declared<"etxRespondingError3", EtxRespondingError>
    | Declared<"etxRespondingError4", EtxRespondingError>
    | Declared<"etxRespondingError5", EtxRespondingError>
    | Declared<"etxRespondingError6", EtxRespondingError>
  > {
    static readonly errors: ErrorDecoders<UnregisterEtxClientsError> = [
      { on: 400, kind: "etxRespondingError", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 401, kind: "etxRespondingError2", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 403, kind: "etxRespondingError3", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 429, kind: "etxRespondingError4", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      { on: 503, kind: "etxRespondingError5", decode: { kind: "json", schema: etxRespondingErrorSchema } },
      {
        on: [400, 599],
        kind: "etxRespondingError6",
        decode: { kind: "json", schema: etxRespondingErrorSchema },
      },
    ];
  }
}
