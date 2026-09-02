import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  changePwnDeviceIPaddress(
    request: Pwn.ChangePwnDeviceIPaddressRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ChangePwnDeviceIpAddressResponse, ResponseError> {
    return this.#rawClient.execute<ChangePwnDeviceIpAddressResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/pwn/actions/ipaddress"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: changePwnDeviceIPaddressRequestSchema },
      },
      {
        success: { kind: "json", schema: changePwnDeviceIpAddressResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  changePwnDeviceProfile(
    request: Pwn.ChangePwnDeviceProfileRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ChangePwnDeviceProfileResponse, ResponseError> {
    return this.#rawClient.execute<ChangePwnDeviceProfileResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/pwn/actions/profile"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: changePwnDeviceProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: changePwnDeviceProfileResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  changePwnDeviceStateActivate(
    request: Pwn.ChangePwnDeviceStateActivateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ChangePwnDeviceStateResponse, ResponseError> {
    return this.#rawClient.execute<ChangePwnDeviceStateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/pwn/actions/state/activate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: changePwnDeviceStateActivateRequestSchema },
      },
      {
        success: { kind: "json", schema: changePwnDeviceStateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  changePwnDeviceStateDeactivate(
    request: Pwn.ChangePwnDeviceStateDeactivateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ChangePwnDeviceStateResponse, ResponseError> {
    return this.#rawClient.execute<ChangePwnDeviceStateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/pwn/actions/state/deactivate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: changePwnDeviceStateDeactivateRequestSchema },
      },
      {
        success: { kind: "json", schema: changePwnDeviceStateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getPwnPerformanceConsent(
    request: Pwn.GetPwnPerformanceConsentRequest,
    options?: RequestOptions,
  ): ApiPromise<GetPwnPerformanceConsentResponse, ResponseError> {
    return this.#rawClient.execute<GetPwnPerformanceConsentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/pwn/performance/consent/{aname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getPwnPerformanceConsentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getProfileList(
    request: Pwn.GetProfileListRequest,
    options?: RequestOptions,
  ): ApiPromise<PwnProfileList, ResponseError> {
    return this.#rawClient.execute<PwnProfileList, ResponseError>(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/pwn/profiles/list/{aname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pwnProfileListSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  kpiList(request: Pwn.KpiListRequest, options?: RequestOptions): ApiPromise<KpiInfoList, ResponseError> {
    return this.#rawClient.execute<KpiInfoList, ResponseError>(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/pwn/kpi/list/{aname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: kpiInfoListSchema },
        errorFactory: ResponseError,
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
    aname: string;
  };

  export type GetProfileListRequest = {
    aname: string;
  };

  export type KpiListRequest = {
    aname: string;
  };
}
