import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Endpoints for ingesting, querying, and deleting V2X MAP messages.
 */
export class MapMessageController {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete map message
   *
   * @remarks
   * Removes a map message for the specified region and intersection ID.
   *
   * @returns Deleted successfully (No Content)
   *
   * @throws {@link MapMessageController.DeleteMapMessageError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMapMessage(
    request: MapMessageController.DeleteMapMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MapMessageController.DeleteMapMessageError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.impServer("/api/v2/mapdata/regionid/{regionId}/i10nid/{i10nid}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        pathParams: [
          { name: "regionId", value: request.regionId, schema: s.string() },
          { name: "i10nid", value: request.i10Nid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MapMessageController.DeleteMapMessageError,
      },
      options,
    );
  }

  /**
   * Download SAE J2735 or ETSI MAP messages in ASN.1 UPER base64 encoded format for the given area.
   *
   * @remarks
   * This endpoint is deprecated. (Use /api/v2/mapdata/query for new integrations).
   *
   * This endpoint allows user to download SAE J2735 or ETSI MAP messages in ASN.1 UPER base64
   * encoded format. The area for the MAP messages is needed to be defined in the query.
   *
   *
   * **Required request header:** `Accept` — specifies the response format. Omitting this header
   * will result in a `400 Bad Request`. Supported values:
   * - `text/plain` — ASN.1 UPER base64-encoded MAP messages (one per line)
   * - `application/json` — JSON-encoded MAP messages
   *
   * @returns Line separated ASN.1 UPER J2735/ETSI base64 encoded MapData messages
   *
   * @throws {@link MapMessageController.DownloadMapMessagesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  downloadMapMessages(
    request: MapMessageController.DownloadMapMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<string, MapMessageController.DownloadMapMessagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.impServer("/api/v2/mapdata"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        pathParams: [],
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

  /**
   * Upload SAE J2735 MAP messages in ASN.1 UPER or JER (JSON) base64 encoded format format.
   *
   * @remarks
   * This endpoint allows the user to upload map messages in ASN.1 UPER base64 encoded format or JER
   * (JSON) formats. The MAP data message can have more than one intersections in it. Both SAE and
   * ETSI defined MAP messages are supported. The SAE type MAP messages have to be wrapped in a
   * MessageFrame, as defined in the SAE J2735 standard. The ETSI type MAP messages are expected as
   * MAPEM structures that include the ETSI header, as defined in the ETSI TS 103 301 standard.
   * Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer
   * and Session/M2M tokens in order to call this API.
   *
   *
   * **Required request header:** `Content-Type` — specifies the format of the request body.
   * Omitting or sending an unsupported value will result in a `415 Unsupported Media Type`.
   * Supported values:
   * - `text/plain` — ASN.1 UPER base64-encoded MAP message
   * - `application/json` — JSON representation of the MAP message
   *
   * @returns Map message/s successfully uploaded
   *
   * @throws {@link MapMessageController.IngestMapMessagesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ingestMapMessages(
    request: MapMessageController.IngestMapMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<string, MapMessageController.IngestMapMessagesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.impServer("/api/v2/mapdata"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        pathParams: [],
        query: [],
        headers: [
          { name: "VendorID", value: request.vendorId, schema: s.string() },
          {
            name: "MessageStandard",
            value: request.mapDataMessageStandard,
            schema: s.defaulted(etxMessageStandardEnumSchema, EtxMessageStandardEnum.Sae),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * Retrieve SAE J2735 or ETSI MAP messages as a Json list of ASN.1 UPER base64 encoded message
   * with respective region and intersectionIds for the given area.
   *
   * @remarks
   * This endpoint allows users to download SAE J2735 or ETSI MAP messages as a JSON list. Depending
   * on the expectedType parameter, the response contains either ASN.1 UPER base64-encoded messages
   * with their respective region and intersection IDs, or fully decoded JSON messages. The area for
   * MAP message retrieval must be defined in the request body using one of two methods: An array of
   * region and intersection ID pairs, or a GeoJSON geofence specification.
   *
   * @returns Successfully retrieved MAP messages. Returns a JSON array where each element contains
   * either a base64 string or parsed message object.
   *
   * @throws {@link MapMessageController.QueryMapMessagesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryMapMessages(
    request: MapMessageController.QueryMapMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>[], MapMessageController.QueryMapMessagesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.impServer("/api/v2/mapdata/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        pathParams: [],
        query: [],
        headers: [
          { name: "VendorID", value: request.vendorId, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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
    /** Region ID to filter the map messages. */
    regionId: string;
    /** Intersection ID to filter the map messages. */
    i10Nid: string;
  };

  export class DeleteMapMessageError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"mdmErrorResponse", MdmErrorResponse>
      | Declared<"mdmErrorResponse2", MdmErrorResponse>
      | Declared<"mdmErrorResponse3", MdmErrorResponse>
      | Declared<"mdmErrorResponse4", MdmErrorResponse>
      | Declared<"mdmErrorResponse5", MdmErrorResponse>
      | Declared<"mdmErrorResponse6", MdmErrorResponse>
      | Declared<"mdmErrorResponse7", MdmErrorResponse>
    >;

    static readonly errors: ErrorDecoders<DeleteMapMessageError> = [
      { on: 400, kind: "mdmErrorResponse", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 401, kind: "mdmErrorResponse2", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 403, kind: "mdmErrorResponse3", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 404, kind: "mdmErrorResponse4", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 429, kind: "mdmErrorResponse5", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 503, kind: "mdmErrorResponse6", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: "default", kind: "mdmErrorResponse7", decode: { kind: "json", schema: mdmErrorResponseSchema } },
    ];
  }

  export type DownloadMapMessagesRequest = {
    /** GeoJSON Polygon defining the area to retrieve MAP messages for. */
    geofence: GeofencePolygon;
    /** The VendorID set during the Vendor registration call. */
    vendorId: string;
  };

  export class DownloadMapMessagesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"mdmErrorResponse", MdmErrorResponse>
      | Declared<"mdmErrorResponse2", MdmErrorResponse>
      | Declared<"mdmErrorResponse3", MdmErrorResponse>
      | Declared<"mdmErrorResponse4", MdmErrorResponse>
      | Declared<"mdmErrorResponse5", MdmErrorResponse>
      | Declared<"mdmErrorResponse6", MdmErrorResponse>
      | Declared<"mdmErrorResponse7", MdmErrorResponse>
    >;

    static readonly errors: ErrorDecoders<DownloadMapMessagesError> = [
      { on: 400, kind: "mdmErrorResponse", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 401, kind: "mdmErrorResponse2", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 403, kind: "mdmErrorResponse3", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 404, kind: "mdmErrorResponse4", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 429, kind: "mdmErrorResponse5", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 503, kind: "mdmErrorResponse6", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: "default", kind: "mdmErrorResponse7", decode: { kind: "json", schema: mdmErrorResponseSchema } },
    ];
  }

  export type IngestMapMessagesRequest = {
    /** The VendorID set during the Vendor registration call. */
    vendorId: string;
    /**
     * Select which V2X messaging standard will be used for the message generation. The following
     * options are supported:
     * - "etsi": The message will be generated using the ETSI (European) standard (e.g. MAPEM).
     * - "sae": The message will be generated using the SAE J2735 (North American) standard (e.g.
     *   MAP).
     * - if not sent while POST, defaults to "sae"
     *
     * @default EtxMessageStandardEnum.Sae
     */
    mapDataMessageStandard?: EtxMessageStandardEnum;
    /**
     * UPER/ASN.1 J2735/ETSI base64 encoded MapData message or JSON representation of the MapData
     * message.
     */
    body: EtxMapDataIngestRequest;
  };

  export class IngestMapMessagesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"mdmErrorResponse", MdmErrorResponse>
      | Declared<"mdmErrorResponse2", MdmErrorResponse>
      | Declared<"mdmErrorResponse3", MdmErrorResponse>
      | Declared<"mdmErrorResponse4", MdmErrorResponse>
      | Declared<"mdmErrorResponse5", MdmErrorResponse>
      | Declared<"mdmErrorResponse6", MdmErrorResponse>
      | Declared<"mdmErrorResponse7", MdmErrorResponse>
    >;

    static readonly errors: ErrorDecoders<IngestMapMessagesError> = [
      { on: 400, kind: "mdmErrorResponse", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 401, kind: "mdmErrorResponse2", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 403, kind: "mdmErrorResponse3", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 405, kind: "mdmErrorResponse4", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 429, kind: "mdmErrorResponse5", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 503, kind: "mdmErrorResponse6", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: "default", kind: "mdmErrorResponse7", decode: { kind: "json", schema: mdmErrorResponseSchema } },
    ];
  }

  export type QueryMapMessagesRequest = {
    /** The VendorID set during the Vendor registration call. */
    vendorId: string;
    body: MapDataQueryRequest;
  };

  export class QueryMapMessagesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"mdmErrorResponse", MdmErrorResponse>
      | Declared<"mdmErrorResponse2", MdmErrorResponse>
      | Declared<"mdmErrorResponse3", MdmErrorResponse>
      | Declared<"mdmErrorResponse4", MdmErrorResponse>
      | Declared<"mdmErrorResponse5", MdmErrorResponse>
      | Declared<"mdmErrorResponse6", MdmErrorResponse>
      | Declared<"mdmErrorResponse7", MdmErrorResponse>
    >;

    static readonly errors: ErrorDecoders<QueryMapMessagesError> = [
      { on: 400, kind: "mdmErrorResponse", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 401, kind: "mdmErrorResponse2", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 403, kind: "mdmErrorResponse3", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 405, kind: "mdmErrorResponse4", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 429, kind: "mdmErrorResponse5", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: 503, kind: "mdmErrorResponse6", decode: { kind: "json", schema: mdmErrorResponseSchema } },
      { on: "default", kind: "mdmErrorResponse7", decode: { kind: "json", schema: mdmErrorResponseSchema } },
    ];
  }
}
