import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class DeviceGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createDeviceGroup(
    request: DeviceGroups.CreateDeviceGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ConnectivityManagementSuccessResult, DeviceGroups.CreateDeviceGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/groups"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: createDeviceGroupRequestSchema },
      },
      {
        success: { kind: "json", schema: connectivityManagementSuccessResultSchema },
        errorFactory: DeviceGroups.CreateDeviceGroupError,
      },
      options,
    );
  }

  deleteDeviceGroup(
    request: DeviceGroups.DeleteDeviceGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectivityManagementSuccessResult, DeviceGroups.DeleteDeviceGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/groups/{aname}/name/{gname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "aname", value: request.aname, schema: s.string() },
          { name: "gname", value: request.gname, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectivityManagementSuccessResultSchema },
        errorFactory: DeviceGroups.DeleteDeviceGroupError,
      },
      options,
    );
  }

  getDeviceGroupInformation(
    request: DeviceGroups.GetDeviceGroupInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceGroupDevicesData, DeviceGroups.GetDeviceGroupInformationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/groups/{aname}/name/{gname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "aname", value: request.aname, schema: s.string() },
          { name: "gname", value: request.gname, schema: s.string() },
        ],
        query: [{ name: "next", value: request.next, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceGroupDevicesDataSchema },
        errorFactory: DeviceGroups.GetDeviceGroupInformationError,
      },
      options,
    );
  }

  listDeviceGroups(
    request: DeviceGroups.ListDeviceGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceGroup[], DeviceGroups.ListDeviceGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/groups/{aname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deviceGroupSchema)) },
        errorFactory: DeviceGroups.ListDeviceGroupsError,
      },
      options,
    );
  }

  updateDeviceGroup(
    request: DeviceGroups.UpdateDeviceGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectivityManagementSuccessResult, DeviceGroups.UpdateDeviceGroupError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/groups/{aname}/name/{gname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "aname", value: request.aname, schema: s.string() },
          { name: "gname", value: request.gname, schema: s.string() },
        ],
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
    body: CreateDeviceGroupRequest;
  };

  export class CreateDeviceGroupError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<CreateDeviceGroupError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type DeleteDeviceGroupRequest = {
    aname: string;
    gname: string;
  };

  export class DeleteDeviceGroupError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<DeleteDeviceGroupError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type GetDeviceGroupInformationRequest = {
    aname: string;
    gname: string;
    next?: number;
  };

  export class GetDeviceGroupInformationError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<GetDeviceGroupInformationError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ListDeviceGroupsRequest = {
    aname: string;
  };

  export class ListDeviceGroupsError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<ListDeviceGroupsError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type UpdateDeviceGroupRequest = {
    aname: string;
    gname: string;
    body: DeviceGroupUpdateRequest;
  };

  export class UpdateDeviceGroupError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<UpdateDeviceGroupError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }
}
