import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { dtoListRulesRequestSchema, type DtoListRulesRequest } from "../models/dto-list-rules-request.js";
import {
  dtoOverwriteRuleRequestSchema,
  type DtoOverwriteRuleRequest,
} from "../models/dto-overwrite-rule-request.js";
import { managementErrorSchema, type ManagementError } from "../models/management-error.js";
import { managementError400Schema, type ManagementError400 } from "../models/management-error400.js";
import { managementError403Schema, type ManagementError403 } from "../models/management-error403.js";
import { managementError404Schema, type ManagementError404 } from "../models/management-error404.js";
import { managementError500Schema, type ManagementError500 } from "../models/management-error500.js";
import { resourceRuleSchema, type ResourceRule } from "../models/resource-rule.js";
import type { Servers } from "../servers.js";

/**
 * Create and manage rules
 */
export class SensorInsightsRules {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a rule
   *
   * @returns OK
   *
   * @throws {@link SensorInsightsRules.SensorInsightsListRulesRequestError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sensorInsightsListRulesRequest(
    request: SensorInsightsRules.SensorInsightsListRulesRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ResourceRule[], SensorInsightsRules.SensorInsightsListRulesRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/dm/v1/rules/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dtoListRulesRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => resourceRuleSchema)) },
        errorFactory: SensorInsightsRules.SensorInsightsListRulesRequestError,
      },
      options,
    );
  }

  /**
   * Overwrite a rule
   *
   * @returns OK
   *
   * @throws {@link SensorInsightsRules.SensorInsightsOverwriteRuleRequestError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sensorInsightsOverwriteRuleRequest(
    request: SensorInsightsRules.SensorInsightsOverwriteRuleRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ResourceRule, SensorInsightsRules.SensorInsightsOverwriteRuleRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/dm/v1/rules"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dtoOverwriteRuleRequestSchema },
      },
      {
        success: { kind: "json", schema: resourceRuleSchema },
        errorFactory: SensorInsightsRules.SensorInsightsOverwriteRuleRequestError,
      },
      options,
    );
  }
}

export namespace SensorInsightsRules {
  export type SensorInsightsListRulesRequestRequest = {
    /** Retrieve a rule */
    body: DtoListRulesRequest;
  };

  export class SensorInsightsListRulesRequestError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"managementError400", ManagementError400>
      | Declared<"managementError", ManagementError>
      | Declared<"managementError403", ManagementError403>
      | Declared<"managementError404", ManagementError404>
      | Declared<"managementError2", ManagementError>
      | Declared<"managementError3", ManagementError>
      | Declared<"managementError4", ManagementError>
      | Declared<"managementError500", ManagementError500>
      | Declared<"managementError5", ManagementError>
    >;

    static readonly errors: ErrorDecoders<SensorInsightsListRulesRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: "default", kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }

  export type SensorInsightsOverwriteRuleRequestRequest = {
    /** Overwrite a rule */
    body: DtoOverwriteRuleRequest;
  };

  export class SensorInsightsOverwriteRuleRequestError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"managementError400", ManagementError400>
      | Declared<"managementError", ManagementError>
      | Declared<"managementError403", ManagementError403>
      | Declared<"managementError404", ManagementError404>
      | Declared<"managementError2", ManagementError>
      | Declared<"managementError3", ManagementError>
      | Declared<"managementError4", ManagementError>
      | Declared<"managementError500", ManagementError500>
      | Declared<"managementError5", ManagementError>
    >;

    static readonly errors: ErrorDecoders<SensorInsightsOverwriteRuleRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: "default", kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }
}
