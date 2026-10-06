import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Remove a device from a ThingSpace account.
   *
   * @returns Target deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDeviceFromAccount(
    request: CloudConnectorDevices.DeleteDeviceFromAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.cloudConnector("/devices/actions/delete"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: removeDeviceRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Find devices by property values. Returns an array of all matching device resources.
   *
   * @returns A success response includes an array of all matching devices. Each device includes the
   * full device resource definition.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  findDeviceByPropertyValues(
    request: CloudConnectorDevices.FindDeviceByPropertyValuesRequest,
    options?: RequestOptions,
  ): ApiPromise<FindDeviceByPropertyResponseList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.cloudConnector("/devices/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: querySubscriptionRequestSchema },
      },
      {
        success: { kind: "json", schema: findDeviceByPropertyResponseListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Search device event history to find events that match criteria.Sensor readings, configuration
   * changes, and other device data are all stored as events.
   *
   * @returns A success response includes an array of all matching devices.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchDeviceEventHistory(
    request: CloudConnectorDevices.SearchDeviceEventHistoryRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchDeviceEventHistoryResponseList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.cloudConnector("/devices/fields/actions/history/search"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchDeviceEventHistoryRequestSchema },
      },
      {
        success: { kind: "json", schema: searchDeviceEventHistoryResponseListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Search for devices by property values. Returns an array of all matching device resources.
   *
   * @returns A success response includes an array of all matching devices.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchDevicesResourcesByPropertyValues(
    request: CloudConnectorDevices.SearchDevicesResourcesByPropertyValuesRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchDeviceByPropertyResponseList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.cloudConnector("/devices/actions/search"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: querySubscriptionRequestSchema },
      },
      {
        success: { kind: "json", schema: searchDeviceByPropertyResponseListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Returns the readings of a specified sensor, with the most recent reading first. Sensor readings
   * are stored as events; this request an array of events.
   *
   * @returns A success response includes an array of all matching devices.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchSensorReadings(
    request: CloudConnectorDevices.SearchSensorReadingsRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchSensorHistoryResponseList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.cloudConnector("/devices/fields/{fieldname}/actions/history"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "fieldname", value: request.fieldname, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchSensorHistoryRequestSchema },
      },
      {
        success: { kind: "json", schema: searchSensorHistoryResponseListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Change configuration values on a device, such as setting how often a device records and reports
   * sensor readings.
   *
   * @returns A success response contains the ts.event.configuration event that was created to
   * record the change.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDevicesConfigurationValue(
    request: CloudConnectorDevices.UpdateDevicesConfigurationValueRequest,
    options?: RequestOptions,
  ): ApiPromise<ChangeConfigurationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.cloudConnector("/devices/configuration/actions/set"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: changeConfigurationRequestSchema },
      },
      {
        success: { kind: "json", schema: changeConfigurationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace CloudConnectorDevices {
  export type DeleteDeviceFromAccountRequest = {
    /** The request body identifies the device to delete. */
    body: RemoveDeviceRequest;
  };

  export type FindDeviceByPropertyValuesRequest = {
    /** The request body specifies fields and values to match. */
    body: QuerySubscriptionRequest;
  };

  export type SearchDeviceEventHistoryRequestParams = {
    /** The device identifier and fields to match in the search. */
    body: SearchDeviceEventHistoryRequest;
  };

  export type SearchDevicesResourcesByPropertyValuesRequest = {
    /** The request body specifies fields and values to match. */
    body: QuerySubscriptionRequest;
  };

  export type SearchSensorReadingsRequest = {
    /** The name of the sensor. */
    fieldname: string;
    /** The device identifier and fields to match in the search. */
    body: SearchSensorHistoryRequest;
  };

  export type UpdateDevicesConfigurationValueRequest = {
    /** The request body changes configuration values on a device. */
    body: ChangeConfigurationRequest;
  };
}
