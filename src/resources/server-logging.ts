import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { checkInHistoryItemSchema, type CheckInHistoryItem } from "../models/check-in-history-item.js";
import { fotaV2ResultSchema, type FotaV2Result } from "../models/fota-v2-result.js";
import type { Servers } from "../servers.js";

/**
 * Device logs on the server.
 */
export class ServerLogging {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get check-in history for the device specified
   *
   * @remarks
   * Check-in history can be retrieved for any device belonging to the account, not necessarily with
   * logging enabled.
   *
   * @returns List of check-in history entries.
   *
   * @throws {@link ServerLogging.GetDeviceCheckInHistoryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDeviceCheckInHistory(
    request: ServerLogging.GetDeviceCheckInHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckInHistoryItem[], ServerLogging.GetDeviceCheckInHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV2(
          "/logging/{account}/devices/{deviceId}/checkInHistory",
        ),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "deviceId", value: request.deviceId, schema: s.string() },
        ],
        query: [],
        headers: [],
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
    /** Account identifier. */
    account: string;
    /** Device IMEI identifier. */
    deviceId: string;
  };

  export class GetDeviceCheckInHistoryError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<GetDeviceCheckInHistoryError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }
}
