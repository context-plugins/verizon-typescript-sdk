import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  changeConfigurationRequestSchema,
  type ChangeConfigurationRequest,
} from "../models/change-configuration-request.js";
import {
  changeConfigurationResponseSchema,
  type ChangeConfigurationResponse,
} from "../models/change-configuration-response.js";
import {
  findDeviceByPropertyResponseListSchema,
  type FindDeviceByPropertyResponseList,
} from "../models/find-device-by-property-response-list.js";
import {
  querySubscriptionRequestSchema,
  type QuerySubscriptionRequest,
} from "../models/query-subscription-request.js";
import { removeDeviceRequestSchema, type RemoveDeviceRequest } from "../models/remove-device-request.js";
import {
  searchDeviceByPropertyResponseListSchema,
  type SearchDeviceByPropertyResponseList,
} from "../models/search-device-by-property-response-list.js";
import {
  searchDeviceEventHistoryRequestSchema,
  type SearchDeviceEventHistoryRequest,
} from "../models/search-device-event-history-request.js";
import {
  searchDeviceEventHistoryResponseListSchema,
  type SearchDeviceEventHistoryResponseList,
} from "../models/search-device-event-history-response-list.js";
import {
  searchSensorHistoryRequestSchema,
  type SearchSensorHistoryRequest,
} from "../models/search-sensor-history-request.js";
import {
  searchSensorHistoryResponseListSchema,
  type SearchSensorHistoryResponseList,
} from "../models/search-sensor-history-response-list.js";
import type { Servers } from "../servers.js";

export class CloudConnectorDevices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteDeviceFromAccount(
    request: CloudConnectorDevices.DeleteDeviceFromAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "POST",
        url: this.#servers.cloudConnector("/devices/actions/delete"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: removeDeviceRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  findDeviceByPropertyValues(
    request: CloudConnectorDevices.FindDeviceByPropertyValuesRequest,
    options?: RequestOptions,
  ): ApiPromise<FindDeviceByPropertyResponseList, ResponseError> {
    return this.#rawClient.execute<FindDeviceByPropertyResponseList, ResponseError>(
      {
        method: "POST",
        url: this.#servers.cloudConnector("/devices/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: querySubscriptionRequestSchema },
      },
      {
        success: { kind: "json", schema: findDeviceByPropertyResponseListSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchDeviceEventHistory(
    request: CloudConnectorDevices.SearchDeviceEventHistoryRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchDeviceEventHistoryResponseList, ResponseError> {
    return this.#rawClient.execute<SearchDeviceEventHistoryResponseList, ResponseError>(
      {
        method: "POST",
        url: this.#servers.cloudConnector("/devices/fields/actions/history/search"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: searchDeviceEventHistoryRequestSchema },
      },
      {
        success: { kind: "json", schema: searchDeviceEventHistoryResponseListSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchDevicesResourcesByPropertyValues(
    request: CloudConnectorDevices.SearchDevicesResourcesByPropertyValuesRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchDeviceByPropertyResponseList, ResponseError> {
    return this.#rawClient.execute<SearchDeviceByPropertyResponseList, ResponseError>(
      {
        method: "POST",
        url: this.#servers.cloudConnector("/devices/actions/search"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: querySubscriptionRequestSchema },
      },
      {
        success: { kind: "json", schema: searchDeviceByPropertyResponseListSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchSensorReadings(
    request: CloudConnectorDevices.SearchSensorReadingsRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchSensorHistoryResponseList, ResponseError> {
    return this.#rawClient.execute<SearchSensorHistoryResponseList, ResponseError>(
      {
        method: "POST",
        url: this.#servers.cloudConnector("/devices/fields/{fieldname}/actions/history"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "fieldname", value: request.fieldname, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchSensorHistoryRequestSchema },
      },
      {
        success: { kind: "json", schema: searchSensorHistoryResponseListSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateDevicesConfigurationValue(
    request: CloudConnectorDevices.UpdateDevicesConfigurationValueRequest,
    options?: RequestOptions,
  ): ApiPromise<ChangeConfigurationResponse, ResponseError> {
    return this.#rawClient.execute<ChangeConfigurationResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.cloudConnector("/devices/configuration/actions/set"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: changeConfigurationRequestSchema },
      },
      {
        success: { kind: "json", schema: changeConfigurationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace CloudConnectorDevices {
  export type DeleteDeviceFromAccountRequest = {
    body: RemoveDeviceRequest;
  };

  export type FindDeviceByPropertyValuesRequest = {
    body: QuerySubscriptionRequest;
  };

  export type SearchDeviceEventHistoryRequestParams = {
    body: SearchDeviceEventHistoryRequest;
  };

  export type SearchDevicesResourcesByPropertyValuesRequest = {
    body: QuerySubscriptionRequest;
  };

  export type SearchSensorReadingsRequest = {
    fieldname: string;
    body: SearchSensorHistoryRequest;
  };

  export type UpdateDevicesConfigurationValueRequest = {
    body: ChangeConfigurationRequest;
  };
}
