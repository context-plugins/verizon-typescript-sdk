import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { checkInHistoryItemSchema, type CheckInHistoryItem } from "../models/check-in-history-item.js";
import { fotaV2ResultSchema, type FotaV2Result } from "../models/fota-v2-result.js";
import type { Servers } from "../servers.js";

export class ServerLogging {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getDeviceCheckInHistory(
    request: ServerLogging.GetDeviceCheckInHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckInHistoryItem[], ServerLogging.GetDeviceCheckInHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV2("/logging/{account}/devices/{deviceId}/checkInHistory"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "deviceId", value: request.deviceId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => checkInHistoryItemSchema)) },
        errorFactory: ServerLogging.GetDeviceCheckInHistoryError,
      },
      options,
    );
  }
}

export namespace ServerLogging {
  export type GetDeviceCheckInHistoryRequest = {
    account: string;
    deviceId: string;
  };

  export class GetDeviceCheckInHistoryError extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<GetDeviceCheckInHistoryError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }
}
