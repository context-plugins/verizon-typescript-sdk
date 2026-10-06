import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  changePwnDeviceIpAddressResponseSchema,
  type ChangePwnDeviceIpAddressResponse,
} from "../models/change-pwn-device-ip-address-response.js";
import {
  changePwnDeviceIPaddressRequestSchema,
  type ChangePwnDeviceIPaddressRequest,
} from "../models/change-pwn-device-ipaddress-request.js";
import {
  changePwnDeviceProfileRequestSchema,
  type ChangePwnDeviceProfileRequest,
} from "../models/change-pwn-device-profile-request.js";
import {
  changePwnDeviceProfileResponseSchema,
  type ChangePwnDeviceProfileResponse,
} from "../models/change-pwn-device-profile-response.js";
import {
  changePwnDeviceStateActivateRequestSchema,
  type ChangePwnDeviceStateActivateRequest,
} from "../models/change-pwn-device-state-activate-request.js";
import {
  changePwnDeviceStateDeactivateRequestSchema,
  type ChangePwnDeviceStateDeactivateRequest,
} from "../models/change-pwn-device-state-deactivate-request.js";
import {
  changePwnDeviceStateResponseSchema,
  type ChangePwnDeviceStateResponse,
} from "../models/change-pwn-device-state-response.js";
import {
  getPwnPerformanceConsentResponseSchema,
  type GetPwnPerformanceConsentResponse,
} from "../models/get-pwn-performance-consent-response.js";
import { kpiInfoListSchema, type KpiInfoList } from "../models/kpi-info-list.js";
import { pwnProfileListSchema, type PwnProfileList } from "../models/pwn-profile-list.js";
import type { Servers } from "../servers.js";

export class Pwn {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * ChangePWNDeviceIPaddress
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  changePwnDeviceIPaddress(
    request: Pwn.ChangePwnDeviceIPaddressRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ChangePwnDeviceIpAddressResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/pwn/actions/ipaddress"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: changePwnDeviceIPaddressRequestSchema },
      },
      {
        success: { kind: "json", schema: changePwnDeviceIpAddressResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ChangePWNDeviceProfile
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  changePwnDeviceProfile(
    request: Pwn.ChangePwnDeviceProfileRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ChangePwnDeviceProfileResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/pwn/actions/profile"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: changePwnDeviceProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: changePwnDeviceProfileResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ChangePWNDeviceState - Activate
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  changePwnDeviceStateActivate(
    request: Pwn.ChangePwnDeviceStateActivateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ChangePwnDeviceStateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/pwn/actions/state/activate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: changePwnDeviceStateActivateRequestSchema },
      },
      {
        success: { kind: "json", schema: changePwnDeviceStateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ChangePWNDeviceState - Deactivate
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  changePwnDeviceStateDeactivate(
    request: Pwn.ChangePwnDeviceStateDeactivateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ChangePwnDeviceStateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/pwn/actions/state/deactivate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: changePwnDeviceStateDeactivateRequestSchema },
      },
      {
        success: { kind: "json", schema: changePwnDeviceStateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * GetPWNPerformanceConsent
   *
   * @returns consent received on a successful response.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPwnPerformanceConsent(
    request: Pwn.GetPwnPerformanceConsentRequest,
    options?: RequestOptions,
  ): ApiPromise<GetPwnPerformanceConsentResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/pwn/performance/consent/{aname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getPwnPerformanceConsentResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get Profile List
   *
   * @returns PWN profiles list received on a successful response.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProfileList(
    request: Pwn.GetProfileListRequest,
    options?: RequestOptions,
  ): ApiPromise<PwnProfileList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/pwn/profiles/list/{aname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pwnProfileListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * KPI List
   *
   * @returns Kpi list received on a successful response.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  kpiList(request: Pwn.KpiListRequest, options?: RequestOptions): ApiPromise<KpiInfoList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/pwn/kpi/list/{aname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: kpiInfoListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Pwn {
  export type ChangePwnDeviceIPaddressRequestParams = {
    body: ChangePwnDeviceIPaddressRequest;
  };

  export type ChangePwnDeviceProfileRequestParams = {
    body: ChangePwnDeviceProfileRequest;
  };

  export type ChangePwnDeviceStateActivateRequestParams = {
    body: ChangePwnDeviceStateActivateRequest;
  };

  export type ChangePwnDeviceStateDeactivateRequestParams = {
    body: ChangePwnDeviceStateDeactivateRequest;
  };

  export type GetPwnPerformanceConsentRequest = {
    /** Account name. */
    aname: string;
  };

  export type GetProfileListRequest = {
    /** Account name. */
    aname: string;
  };

  export type KpiListRequest = {
    /** Account name. */
    aname: string;
  };
}
