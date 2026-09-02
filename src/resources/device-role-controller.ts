import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { deviceRoleSchema, type DeviceRole } from "../models/device-role.js";
import type { Servers } from "../servers.js";

export class DeviceRoleController {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getAclRulesByVendorId(
    request: DeviceRoleController.GetAclRulesByVendorIdRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceRole[], DeviceRoleController.GetAclRulesByVendorIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.impServer("/api/v1/device-roles/vendor"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        query: [{ name: "VendorID", value: request.vendorId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deviceRoleSchema)) },
        errorFactory: DeviceRoleController.GetAclRulesByVendorIdError,
      },
      options,
    );
  }
}

export namespace DeviceRoleController {
  export type GetAclRulesByVendorIdRequest = {
    vendorId: string;
  };

  export class GetAclRulesByVendorIdError extends ResponseError<
    | Declared<"error401", string>
    | Declared<"error400", string>
    | Declared<"error403", string>
    | Declared<"error406", string>
    | Declared<"error429", string>
    | Declared<"errorDefault", string>
  > {
    static readonly errors: ErrorDecoders<GetAclRulesByVendorIdError> = [
      { on: 401, kind: "error401", decode: { kind: "text", schema: s.string() } },
      { on: 400, kind: "error400", decode: { kind: "text", schema: s.string() } },
      { on: 403, kind: "error403", decode: { kind: "text", schema: s.string() } },
      { on: 406, kind: "error406", decode: { kind: "text", schema: s.string() } },
      { on: 429, kind: "error429", decode: { kind: "text", schema: s.string() } },
      { on: [400, 599], kind: "errorDefault", decode: { kind: "text", schema: s.string() } },
    ];
  }
}
