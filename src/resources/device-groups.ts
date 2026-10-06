import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  connectivityManagementResultSchema,
  type ConnectivityManagementResult,
} from "../models/connectivity-management-result.js";
import {
  connectivityManagementSuccessResultSchema,
  type ConnectivityManagementSuccessResult,
} from "../models/connectivity-management-success-result.js";
import {
  createDeviceGroupRequestSchema,
  type CreateDeviceGroupRequest,
} from "../models/create-device-group-request.js";
import {
  deviceGroupDevicesDataSchema,
  type DeviceGroupDevicesData,
} from "../models/device-group-devices-data.js";
import {
  deviceGroupUpdateRequestSchema,
  type DeviceGroupUpdateRequest,
} from "../models/device-group-update-request.js";
import { deviceGroupSchema, type DeviceGroup } from "../models/device-group.js";
import type { Servers } from "../servers.js";

/**
 * Manage device groups.
 */
export class DeviceGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Creates a new device group and optionally adds a set of devices to that group.
   *
   * @remarks
   * Create a new device group and optionally add devices to the group. Device groups can make it
   * easier to manage similar devices and to get reports on their usage.
   *
   * @returns Successful response, Creates a new device group.
   *
   * @throws {@link DeviceGroups.CreateDeviceGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDeviceGroup(
    request: DeviceGroups.CreateDeviceGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ConnectivityManagementSuccessResult, DeviceGroups.CreateDeviceGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/groups"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createDeviceGroupRequestSchema },
      },
      {
        success: { kind: "json", schema: connectivityManagementSuccessResultSchema },
        errorFactory: DeviceGroups.CreateDeviceGroupError,
      },
      options,
    );
  }

  /**
   * Deletes a device group. Devices in the group are moved to the default device group and are not
   * deleted from the account.
   *
   * @remarks
   * Deletes a device group from the account. Devices in the group are moved to the default device
   * group and are not deleted from the account.
   *
   * @returns Successful response.
   *
   * @throws {@link DeviceGroups.DeleteDeviceGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDeviceGroup(
    request: DeviceGroups.DeleteDeviceGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectivityManagementSuccessResult, DeviceGroups.DeleteDeviceGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.thingspace("/m2m/v1/groups/{aname}/name/{gname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "aname", value: request.aname, schema: s.string() },
          { name: "gname", value: request.gname, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectivityManagementSuccessResultSchema },
        errorFactory: DeviceGroups.DeleteDeviceGroupError,
      },
      options,
    );
  }

  /**
   * Returns the name, description, and list of devices in a device group.
   *
   * @remarks
   * When HTTP status is 202, a URL will be returned in the Location header of the form
   * /groups/{aname}/name/{gname}/?next={token}. This URL can be used to request the next set of
   * groups.
   *
   * @returns Successful response.
   *
   * @throws {@link DeviceGroups.GetDeviceGroupInformationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDeviceGroupInformation(
    request: DeviceGroups.GetDeviceGroupInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceGroupDevicesData, DeviceGroups.GetDeviceGroupInformationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v1/groups/{aname}/name/{gname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "aname", value: request.aname, schema: s.string() },
          { name: "gname", value: request.gname, schema: s.string() },
        ],
        query: [{ name: "next", value: request.next, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceGroupDevicesDataSchema },
        errorFactory: DeviceGroups.GetDeviceGroupInformationError,
      },
      options,
    );
  }

  /**
   * Returns a list of device groups in an account
   *
   * @remarks
   * Returns a list of all device groups in a specified account.
   *
   * @returns The list of device groups in the account.
   *
   * @throws {@link DeviceGroups.ListDeviceGroupsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDeviceGroups(
    request: DeviceGroups.ListDeviceGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceGroup[], DeviceGroups.ListDeviceGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v1/groups/{aname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deviceGroupSchema)) },
        errorFactory: DeviceGroups.ListDeviceGroupsError,
      },
      options,
    );
  }

  /**
   * Make changes to a device group, including changing the name and description, and adding or
   * removing devices.
   *
   * @remarks
   * Make changes to a device group, including changing the name and description, and adding or
   * removing devices.
   *
   * @returns Successful response.
   *
   * @throws {@link DeviceGroups.UpdateDeviceGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDeviceGroup(
    request: DeviceGroups.UpdateDeviceGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectivityManagementSuccessResult, DeviceGroups.UpdateDeviceGroupError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.thingspace("/m2m/v1/groups/{aname}/name/{gname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "aname", value: request.aname, schema: s.string() },
          { name: "gname", value: request.gname, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deviceGroupUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: connectivityManagementSuccessResultSchema },
        errorFactory: DeviceGroups.UpdateDeviceGroupError,
      },
      options,
    );
  }
}

export namespace DeviceGroups {
  export type CreateDeviceGroupRequestParams = {
    /** A request to create a new device group. */
    body: CreateDeviceGroupRequest;
  };

  export class CreateDeviceGroupError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<CreateDeviceGroupError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type DeleteDeviceGroupRequest = {
    /** Account name. */
    aname: string;
    /** Group name. */
    gname: string;
  };

  export class DeleteDeviceGroupError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<DeleteDeviceGroupError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type GetDeviceGroupInformationRequest = {
    /** Account name. */
    aname: string;
    /** Group name. */
    gname: string;
    /** Continue the previous query from the pageUrl pagetoken. */
    next?: number;
  };

  export class GetDeviceGroupInformationError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<GetDeviceGroupInformationError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ListDeviceGroupsRequest = {
    /** Account name. */
    aname: string;
  };

  export class ListDeviceGroupsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<ListDeviceGroupsError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type UpdateDeviceGroupRequest = {
    /** Account name. */
    aname: string;
    /** Group name. */
    gname: string;
    /** Request to update device group. */
    body: DeviceGroupUpdateRequest;
  };

  export class UpdateDeviceGroupError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<UpdateDeviceGroupError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }
}
