import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  etxMapDataIngestRequestSchema,
  type EtxMapDataIngestRequest,
} from "../models/etx-map-data-ingest-request.js";
import { EtxMessageStandardEnum, etxMessageStandardEnumSchema } from "../models/etx-message-standard-enum.js";
import { geofencePolygonSchema, type GeofencePolygon } from "../models/geofence-polygon.js";
import { mdmErrorResponseSchema, type MdmErrorResponse } from "../models/mdm-error-response.js";
import {
  mapDataQueryRequestSchema,
  type MapDataQueryRequest,
} from "../models/unions/map-data-query-request.js";
import type { Servers } from "../servers.js";

export class MapMessageController {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteMapMessage(
    request: MapMessageController.DeleteMapMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MapMessageController.DeleteMapMessageError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.impServer("/api/v2/mapdata/regionid/{regionId}/i10nid/{i10nid}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        pathParams: [
          { name: "regionId", value: request.regionId, schema: s.string() },
          { name: "i10nid", value: request.i10Nid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MapMessageController.DeleteMapMessageError,
      },
      options,
    );
  }

  downloadMapMessages(
    request: MapMessageController.DownloadMapMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<string, MapMessageController.DownloadMapMessagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.impServer("/api/v2/mapdata"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        query: [{ name: "Geofence", value: request.geofence, schema: geofencePolygonSchema }],
        headers: [{ name: "VendorID", value: request.vendorId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: MapMessageController.DownloadMapMessagesError,
      },
      options,
    );
  }

  ingestMapMessages(
    request: MapMessageController.IngestMapMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<string, MapMessageController.IngestMapMessagesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.impServer("/api/v2/mapdata"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        headers: [
          { name: "VendorID", value: request.vendorId, schema: s.string() },
          {
            name: "MessageStandard",
            value: request.mapDataMessageStandard,
            schema: s.defaulted(etxMessageStandardEnumSchema, EtxMessageStandardEnum.Sae),
          },
        ],
        body: { kind: "json", value: request.body, schema: etxMapDataIngestRequestSchema },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: MapMessageController.IngestMapMessagesError,
      },
      options,
    );
  }

  queryMapMessages(
    request: MapMessageController.QueryMapMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>[], MapMessageController.QueryMapMessagesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.impServer("/api/v2/mapdata/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        headers: [{ name: "VendorID", value: request.vendorId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: mapDataQueryRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.record(s.string(), s.unknown())) },
        errorFactory: MapMessageController.QueryMapMessagesError,
      },
      options,
    );
  }
}

export namespace MapMessageController {
  export type DeleteMapMessageRequest = {
    regionId: string;
    i10Nid: string;
  };

  export class DeleteMapMessageError extends ResponseError<
    | Declared<"mdmErrorResponse", MdmErrorResponse>
    | Declared<"mdmErrorResponse2", MdmErrorResponse>
    | Declared<"mdmErrorResponse3", MdmErrorResponse>
    | Declared<"mdmErrorResponse4", MdmErrorResponse>
    | Declared<"mdmErrorResponse5", MdmErrorResponse>
    | Declared<"mdmErrorResponse6", MdmErrorResponse>
    | Declared<"mdmErrorResponse7", MdmErrorResponse>
  > {
    static readonly errors: ErrorDecoders<DeleteMapMessageError> = [
      { on: 400, kind: "mdmErrorResponse", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 401, kind: "mdmErrorResponse2", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 403, kind: "mdmErrorResponse3", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 404, kind: "mdmErrorResponse4", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 429, kind: "mdmErrorResponse5", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 503, kind: "mdmErrorResponse6", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: [400, 599], kind: "mdmErrorResponse7", decode: { kind: "json", schema: mdmErrorResponseSchema } },
    ];
  }

  export type DownloadMapMessagesRequest = {
    geofence: GeofencePolygon;
    vendorId: string;
  };

  export class DownloadMapMessagesError extends ResponseError<
    | Declared<"mdmErrorResponse", MdmErrorResponse>
    | Declared<"mdmErrorResponse2", MdmErrorResponse>
    | Declared<"mdmErrorResponse3", MdmErrorResponse>
    | Declared<"mdmErrorResponse4", MdmErrorResponse>
    | Declared<"mdmErrorResponse5", MdmErrorResponse>
    | Declared<"mdmErrorResponse6", MdmErrorResponse>
    | Declared<"mdmErrorResponse7", MdmErrorResponse>
  > {
    static readonly errors: ErrorDecoders<DownloadMapMessagesError> = [
      { on: 400, kind: "mdmErrorResponse", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 401, kind: "mdmErrorResponse2", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 403, kind: "mdmErrorResponse3", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 404, kind: "mdmErrorResponse4", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 429, kind: "mdmErrorResponse5", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 503, kind: "mdmErrorResponse6", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: [400, 599], kind: "mdmErrorResponse7", decode: { kind: "json", schema: mdmErrorResponseSchema } },
    ];
  }

  export type IngestMapMessagesRequest = {
    vendorId: string;
    mapDataMessageStandard?: EtxMessageStandardEnum;
    body: EtxMapDataIngestRequest;
  };

  export class IngestMapMessagesError extends ResponseError<
    | Declared<"mdmErrorResponse", MdmErrorResponse>
    | Declared<"mdmErrorResponse2", MdmErrorResponse>
    | Declared<"mdmErrorResponse3", MdmErrorResponse>
    | Declared<"mdmErrorResponse4", MdmErrorResponse>
    | Declared<"mdmErrorResponse5", MdmErrorResponse>
    | Declared<"mdmErrorResponse6", MdmErrorResponse>
    | Declared<"mdmErrorResponse7", MdmErrorResponse>
  > {
    static readonly errors: ErrorDecoders<IngestMapMessagesError> = [
      { on: 400, kind: "mdmErrorResponse", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 401, kind: "mdmErrorResponse2", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 403, kind: "mdmErrorResponse3", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 405, kind: "mdmErrorResponse4", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 429, kind: "mdmErrorResponse5", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 503, kind: "mdmErrorResponse6", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: [400, 599], kind: "mdmErrorResponse7", decode: { kind: "json", schema: mdmErrorResponseSchema } },
    ];
  }

  export type QueryMapMessagesRequest = {
    vendorId: string;
    body: MapDataQueryRequest;
  };

  export class QueryMapMessagesError extends ResponseError<
    | Declared<"mdmErrorResponse", MdmErrorResponse>
    | Declared<"mdmErrorResponse2", MdmErrorResponse>
    | Declared<"mdmErrorResponse3", MdmErrorResponse>
    | Declared<"mdmErrorResponse4", MdmErrorResponse>
    | Declared<"mdmErrorResponse5", MdmErrorResponse>
    | Declared<"mdmErrorResponse6", MdmErrorResponse>
    | Declared<"mdmErrorResponse7", MdmErrorResponse>
  > {
    static readonly errors: ErrorDecoders<QueryMapMessagesError> = [
      { on: 400, kind: "mdmErrorResponse", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 401, kind: "mdmErrorResponse2", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 403, kind: "mdmErrorResponse3", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 405, kind: "mdmErrorResponse4", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 429, kind: "mdmErrorResponse5", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 503, kind: "mdmErrorResponse6", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: [400, 599], kind: "mdmErrorResponse7", decode: { kind: "json", schema: mdmErrorResponseSchema } },
    ];
  }
}
