import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  accountDeviceListRequestSchema,
  type AccountDeviceListRequest,
} from "../models/account-device-list-request.js";
import {
  accountDeviceListResultSchema,
  type AccountDeviceListResult,
} from "../models/account-device-list-result.js";
import { addDevicesRequestSchema, type AddDevicesRequest } from "../models/add-devices-request.js";
import { addDevicesResultSchema, type AddDevicesResult } from "../models/add-devices-result.js";
import {
  associateLabelRequestSchema,
  type AssociateLabelRequest,
} from "../models/associate-label-request.js";
import {
  billedusageListRequestSchema,
  type BilledusageListRequest,
} from "../models/billedusage-list-request.js";
import {
  carrierActionsRequestSchema,
  type CarrierActionsRequest,
} from "../models/carrier-actions-request.js";
import {
  carrierActivateRequestSchema,
  type CarrierActivateRequest,
} from "../models/carrier-activate-request.js";
import {
  carrierDeactivateRequestSchema,
  type CarrierDeactivateRequest,
} from "../models/carrier-deactivate-request.js";
import {
  changeDeviceIdRequestSchema,
  type ChangeDeviceIdRequest,
} from "../models/change-device-id-request.js";
import {
  checkOrderStatusRequestSchema,
  type CheckOrderStatusRequest,
} from "../models/check-order-status-request.js";
import {
  connectionHistoryResultSchema,
  type ConnectionHistoryResult,
} from "../models/connection-history-result.js";
import {
  connectivityManagementResultSchema,
  type ConnectivityManagementResult,
} from "../models/connectivity-management-result.js";
import {
  contactInfoUpdateRequestSchema,
  type ContactInfoUpdateRequest,
} from "../models/contact-info-update-request.js";
import {
  customFieldsUpdateRequestSchema,
  type CustomFieldsUpdateRequest,
} from "../models/custom-fields-update-request.js";
import { deleteDevicesRequestSchema, type DeleteDevicesRequest } from "../models/delete-devices-request.js";
import { deleteDevicesResultSchema, type DeleteDevicesResult } from "../models/delete-devices-result.js";
import {
  deviceActivationRequestSchema,
  type DeviceActivationRequest,
} from "../models/device-activation-request.js";
import {
  deviceAggregateUsageListRequestSchema,
  type DeviceAggregateUsageListRequest,
} from "../models/device-aggregate-usage-list-request.js";
import {
  deviceConnectionListRequestSchema,
  type DeviceConnectionListRequest,
} from "../models/device-connection-list-request.js";
import {
  deviceCostCenterRequestSchema,
  type DeviceCostCenterRequest,
} from "../models/device-cost-center-request.js";
import {
  deviceExtendedDiagnosticsRequestSchema,
  type DeviceExtendedDiagnosticsRequest,
} from "../models/device-extended-diagnostics-request.js";
import {
  deviceExtendedDiagnosticsResultSchema,
  type DeviceExtendedDiagnosticsResult,
} from "../models/device-extended-diagnostics-result.js";
import {
  deviceManagementResultSchema,
  type DeviceManagementResult,
} from "../models/device-management-result.js";
import {
  deviceMismatchListRequestSchema,
  type DeviceMismatchListRequest,
} from "../models/device-mismatch-list-request.js";
import {
  deviceMismatchListResultSchema,
  type DeviceMismatchListResult,
} from "../models/device-mismatch-list-result.js";
import { devicePrlListRequestSchema, type DevicePrlListRequest } from "../models/device-prl-list-request.js";
import {
  deviceProvisioningHistoryListRequestSchema,
  type DeviceProvisioningHistoryListRequest,
} from "../models/device-provisioning-history-list-request.js";
import {
  deviceProvisioningHistoryListResultSchema,
  type DeviceProvisioningHistoryListResult,
} from "../models/device-provisioning-history-list-result.js";
import {
  deviceSuspensionStatusRequestSchema,
  type DeviceSuspensionStatusRequest,
} from "../models/device-suspension-status-request.js";
import { deviceUploadRequestSchema, type DeviceUploadRequest } from "../models/device-upload-request.js";
import {
  deviceUsageListRequestSchema,
  type DeviceUsageListRequest,
} from "../models/device-usage-list-request.js";
import {
  deviceUsageListResultSchema,
  type DeviceUsageListResult,
} from "../models/device-usage-list-result.js";
import { goToStateRequestSchema, type GoToStateRequest } from "../models/go-to-state-request.js";
import { labelsListSchema, type LabelsList } from "../models/labels-list.js";
import { moveDeviceRequestSchema, type MoveDeviceRequest } from "../models/move-device-request.js";
import { requestResponseSchema, type RequestResponse } from "../models/request-response.js";
import { restErrorResponseSchema, type RestErrorResponse } from "../models/rest-error-response.js";
import {
  servicePlanUpdateRequestSchema,
  type ServicePlanUpdateRequest,
} from "../models/service-plan-update-request.js";
import {
  uploadsActivatesDeviceRequestSchema,
  type UploadsActivatesDeviceRequest,
} from "../models/uploads-activates-device-request.js";
import type { Servers } from "../servers.js";

/**
 * Manage device connectivity and get device history.
 */
export class DeviceManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Activates service for one or more devices.
   *
   * @remarks
   * If the devices do not already exist in the account, this API resource adds them before
   * activation.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceManagement.ActivateServiceForDevicesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activateServiceForDevices(
    request: DeviceManagement.ActivateServiceForDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.ActivateServiceForDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/activate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: carrierActivateRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.ActivateServiceForDevicesError,
      },
      options,
    );
  }

  /**
   * Adds up to 200 new devices, without provisioning lines of service for them.
   *
   * @remarks
   * Use this API if you want to manage some device settings before you are ready to activate
   * service for the devices.
   *
   * @returns For each device in the request, contains device identifiers and a success or failure
   * response.
   *
   * @throws {@link DeviceManagement.AddDevicesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addDevices(
    request: DeviceManagement.AddDevicesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AddDevicesResult[], DeviceManagement.AddDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/add"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: addDevicesRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => addDevicesResultSchema)) },
        errorFactory: DeviceManagement.AddDevicesError,
      },
      options,
    );
  }

  /**
   * Gets billed usage for for either multiple devices or an entire billing account.
   *
   * @remarks
   * Gets billed usage for for either multiple devices or an entire billing account.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceManagement.BilledUsageInfoError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  billedUsageInfo(
    request: DeviceManagement.BilledUsageInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.BilledUsageInfoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/usage/actions/billedusage/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: billedusageListRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.BilledUsageInfoError,
      },
      options,
    );
  }

  /**
   * Sets a new service plan for one or more devices.
   *
   * @remarks
   * Changes the service plan for one or more devices.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceManagement.ChangeDevicesServicePlanError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  changeDevicesServicePlan(
    request: DeviceManagement.ChangeDevicesServicePlanRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.ChangeDevicesServicePlanError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/plan"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: servicePlanUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.ChangeDevicesServicePlanError,
      },
      options,
    );
  }

  /**
   * Checks whether devices are available to be activated.
   *
   * @remarks
   * Checks whether specified devices are registered by the manufacturer with the Verizon network
   * and are available to be activated.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceManagement.CheckDevicesAvailabilityForActivationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkDevicesAvailabilityForActivation(
    request: DeviceManagement.CheckDevicesAvailabilityForActivationRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.CheckDevicesAvailabilityForActivationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/availability/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deviceActivationRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.CheckDevicesAvailabilityForActivationError,
      },
      options,
    );
  }

  /**
   * Deactivates service for one or more devices.
   *
   * @remarks
   * Deactivating service for a device may result in an early termination fee (ETF) being charged to
   * the account, depending on the terms of the contract with Verizon. If your contract allows ETF
   * waivers and if you want to use one for a particular deactivation, set the etfWaiver value to
   * True.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceManagement.DeactivateServiceForDevicesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deactivateServiceForDevices(
    request: DeviceManagement.DeactivateServiceForDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.DeactivateServiceForDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/deactivate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: carrierDeactivateRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.DeactivateServiceForDevicesError,
      },
      options,
    );
  }

  /**
   * Deletes up to 200 deactive devices.
   *
   * @remarks
   * Use this API to remove unneeded devices from an account.
   *
   * @returns For each device in the request, contains device identifiers and a success or failure
   * response.
   *
   * @throws {@link DeviceManagement.DeleteDeactivatedDevicesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDeactivatedDevices(
    request: DeviceManagement.DeleteDeactivatedDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteDevicesResult[], DeviceManagement.DeleteDeactivatedDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/delete"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deleteDevicesRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deleteDevicesResultSchema)) },
        errorFactory: DeviceManagement.DeleteDeactivatedDevicesError,
      },
      options,
    );
  }

  /**
   * API for Uploading Devices to DMD.
   *
   * @remarks
   * Upload a device record
   *
   * @returns Request ID
   *
   * @throws {@link DeviceManagement.DeviceUploadError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deviceUpload(
    request: DeviceManagement.DeviceUploadRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, DeviceManagement.DeviceUploadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/upload"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deviceUploadRequestSchema },
      },
      {
        success: { kind: "json", schema: requestResponseSchema },
        errorFactory: DeviceManagement.DeviceUploadError,
      },
      options,
    );
  }

  /**
   * Check the status of real-time orders.
   *
   * @remarks
   * Checks the status of an activation order and lists where the order is in the provisioning
   * process.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceManagement.DeviceUploadStatusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deviceUploadStatus(
    request: DeviceManagement.DeviceUploadStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.DeviceUploadStatusError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/requests/status"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: checkOrderStatusRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.DeviceUploadStatusError,
      },
      options,
    );
  }

  /**
   * Returns basic diagnostic information about a specified device, including connectivity,
   * provisioning, and billing status.
   *
   * @remarks
   * Returns extended diagnostic information about a specified device, including connectivity,
   * provisioning, billing and location status.
   *
   * @returns Device diagnostic information.
   *
   * @throws {@link DeviceManagement.GetDeviceExtendedDiagnosticInformationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDeviceExtendedDiagnosticInformation(
    request: DeviceManagement.GetDeviceExtendedDiagnosticInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DeviceExtendedDiagnosticsResult,
    DeviceManagement.GetDeviceExtendedDiagnosticInformationError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/extendeddiagnostics/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deviceExtendedDiagnosticsRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceExtendedDiagnosticsResultSchema },
        errorFactory: DeviceManagement.GetDeviceExtendedDiagnosticInformationError,
      },
      options,
    );
  }

  /**
   * Request service suspension information about devices.
   *
   * @remarks
   * Returns DeviceSuspensionStatus callback messages containing the current device state and
   * information on how many days a device has been suspended and can continue to be suspended.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceManagement.GetDeviceServiceSuspensionStatusError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDeviceServiceSuspensionStatus(
    request: DeviceManagement.GetDeviceServiceSuspensionStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.GetDeviceServiceSuspensionStatusError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/suspension/status"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deviceSuspensionStatusRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.GetDeviceServiceSuspensionStatusError,
      },
      options,
    );
  }

  /**
   * Requests the current PRL version for devices, which can help determine which devices need a PRL
   * update.
   *
   * @remarks
   * 4G and GSM devices do not have a PRL.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceManagement.ListCurrentDevicesPrlVersionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCurrentDevicesPrlVersion(
    request: DeviceManagement.ListCurrentDevicesPrlVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.ListCurrentDevicesPrlVersionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/prl/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: devicePrlListRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.ListCurrentDevicesPrlVersionError,
      },
      options,
    );
  }

  /**
   * Returns information about a specified device or a list of devices in an account.
   *
   * @remarks
   * Returns information about a single device or information about all devices that match the given
   * parameters. Returned information includes device provisioning state, service plan, MDN, MIN,
   * and IP address.
   *
   * @returns List of devices that match the request parameters, ordered by device creation date,
   * oldest first.
   *
   * @throws {@link DeviceManagement.ListDevicesInformationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDevicesInformation(
    request: DeviceManagement.ListDevicesInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountDeviceListResult, DeviceManagement.ListDevicesInformationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: accountDeviceListRequestSchema },
      },
      {
        success: { kind: "json", schema: accountDeviceListResultSchema },
        errorFactory: DeviceManagement.ListDevicesInformationError,
      },
      options,
    );
  }

  /**
   * Returns the provisioning history of a device during a specified time period.
   *
   * @remarks
   * Returns the provisioning history of a specified device during a specified time period.
   *
   * @returns List of Device Provision History events, sorted by the timestamp, oldest first.
   *
   * @throws {@link DeviceManagement.ListDevicesProvisioningHistoryError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDevicesProvisioningHistory(
    request: DeviceManagement.ListDevicesProvisioningHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceProvisioningHistoryListResult[], DeviceManagement.ListDevicesProvisioningHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/history/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deviceProvisioningHistoryListRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deviceProvisioningHistoryListResultSchema)) },
        errorFactory: DeviceManagement.ListDevicesProvisioningHistoryError,
      },
      options,
    );
  }

  /**
   * Obtain the usage history of a specific device.
   *
   * @remarks
   * Returns the network data usage history of a device during a specified time period.
   *
   * @returns List of device usage events, sorted by the timestamp, oldest first.
   *
   * @throws {@link DeviceManagement.ListDevicesUsageHistoryError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDevicesUsageHistory(
    request: DeviceManagement.ListDevicesUsageHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceUsageListResult, DeviceManagement.ListDevicesUsageHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/usage/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deviceUsageListRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceUsageListResultSchema },
        errorFactory: DeviceManagement.ListDevicesUsageHistoryError,
      },
      options,
    );
  }

  /**
   * Returns a list of all 4G devices with an ICCID that was not activated with the expected IMEI.
   *
   * @remarks
   * Returns a list of all 4G devices with an ICCID (SIM) that was not activated with the expected
   * IMEI (hardware) during a specified time frame.
   *
   * @returns List of devices that have mismatched IMEIs and ICCIDs.
   *
   * @throws {@link DeviceManagement.ListDevicesWithImeiIccidMismatchError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDevicesWithImeiIccidMismatch(
    request: DeviceManagement.ListDevicesWithImeiIccidMismatchRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceMismatchListResult, DeviceManagement.ListDevicesWithImeiIccidMismatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/list/imeiiccidmismatch"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deviceMismatchListRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceMismatchListResultSchema },
        errorFactory: DeviceManagement.ListDevicesWithImeiIccidMismatchError,
      },
      options,
    );
  }

  /**
   * Move devices between accounts.
   *
   * @remarks
   * Move active devices from one billing account to another within a customer profile.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceManagement.MoveDevicesWithinAccountsOfProfileError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  moveDevicesWithinAccountsOfProfile(
    request: DeviceManagement.MoveDevicesWithinAccountsOfProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.MoveDevicesWithinAccountsOfProfileError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/move"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: moveDeviceRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.MoveDevicesWithinAccountsOfProfileError,
      },
      options,
    );
  }

  /**
   * Restore service to one or more suspended devices.
   *
   * @remarks
   * Restores service to one or more suspended devices.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceManagement.RestoreServiceForSuspendedDevicesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreServiceForSuspendedDevices(
    request: DeviceManagement.RestoreServiceForSuspendedDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.RestoreServiceForSuspendedDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/restore"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: carrierActionsRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.RestoreServiceForSuspendedDevicesError,
      },
      options,
    );
  }

  /**
   * Returns the total amount of data sent and the total number of SMS messages sent or received by
   * a set of devices in a specified timeframe.
   *
   * @remarks
   * The information is returned in a callback response, so you must register a URL for DeviceUsage
   * callback messages using the POST /callbacks API.
   *
   * @returns A unique string that associates the request with the results that are sent via a
   * callback service.
   *
   * @throws {@link DeviceManagement.RetrieveAggregateDeviceUsageHistoryError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveAggregateDeviceUsageHistory(
    request: DeviceManagement.RetrieveAggregateDeviceUsageHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.RetrieveAggregateDeviceUsageHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/usage/actions/list/aggregate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deviceAggregateUsageListRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.RetrieveAggregateDeviceUsageHistoryError,
      },
      options,
    );
  }

  /**
   * Returns a list of network connection events for a device during a specified time period.
   *
   * @remarks
   * Each response includes a maximum of 500 records. To obtain more records, you can call the API
   * multiple times, adjusting the earliest value each time to start where the previous request
   * finished.
   *
   * @returns List of device connection events, sorted by the occurredAt timestamp, oldest first.
   *
   * @throws {@link DeviceManagement.RetrieveDeviceConnectionHistoryError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveDeviceConnectionHistory(
    request: DeviceManagement.RetrieveDeviceConnectionHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectionHistoryResult, DeviceManagement.RetrieveDeviceConnectionHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/connections/actions/listHistory"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deviceConnectionListRequestSchema },
      },
      {
        success: { kind: "json", schema: connectionHistoryResultSchema },
        errorFactory: DeviceManagement.RetrieveDeviceConnectionHistoryError,
      },
      options,
    );
  }

  /**
   * Suspends service for one or more devices.
   *
   * @remarks
   * Suspends service for one or more devices.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceManagement.SuspendServiceForDevicesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  suspendServiceForDevices(
    request: DeviceManagement.SuspendServiceForDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.SuspendServiceForDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/suspend"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: carrierActionsRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.SuspendServiceForDevicesError,
      },
      options,
    );
  }

  /**
   * Changes the identifier of a 3G or 4G device to match hardware changes made for a line of
   * service.
   *
   * @remarks
   * Changes the identifier of a 3G or 4G device to match hardware changes made for a line of
   * service. Use this request to transfer the line of service and the MDN to new hardware, or to
   * change the MDN.
   *
   * @returns A unique string that associates the request with the results that are sent via a
   * callback service.
   *
   * @throws {@link DeviceManagement.UpdateDeviceIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDeviceId(
    request: DeviceManagement.UpdateDeviceIdRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.UpdateDeviceIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/{serviceType}/actions/deviceId"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "serviceType", value: request.serviceType, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: changeDeviceIdRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.UpdateDeviceIdError,
      },
      options,
    );
  }

  /**
   * Changes the name and address associated with a device.
   *
   * @remarks
   * Sends a CarrierService callback message for each device in the request when the contact
   * information has been changed, or if there was a problem and the change could not be completed.
   *
   * @returns Request ID returned in a success response.
   *
   * @throws {@link DeviceManagement.UpdateDevicesContactInformationError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDevicesContactInformation(
    request: DeviceManagement.UpdateDevicesContactInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.UpdateDevicesContactInformationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/contactInfo"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contactInfoUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.UpdateDevicesContactInformationError,
      },
      options,
    );
  }

  /**
   * Changes or removes the costCenterCode value for one or more devices.
   *
   * @remarks
   * Changes or removes the CostCenterCode value or customer name and address (Primary Place of Use)
   * for one or more devices.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceManagement.UpdateDevicesCostCenterCodeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDevicesCostCenterCode(
    request: DeviceManagement.UpdateDevicesCostCenterCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.UpdateDevicesCostCenterCodeError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/costCenter"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deviceCostCenterRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.UpdateDevicesCostCenterCodeError,
      },
      options,
    );
  }

  /**
   * Updates one or more custom field values for devices.
   *
   * @remarks
   * Sends a CarrierService callback message for each device in the request when the custom fields
   * have been changed, or if there was a problem and the change could not be completed.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceManagement.UpdateDevicesCustomFieldsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDevicesCustomFields(
    request: DeviceManagement.UpdateDevicesCustomFieldsRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.UpdateDevicesCustomFieldsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/customFields"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customFieldsUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.UpdateDevicesCustomFieldsError,
      },
      options,
    );
  }

  /**
   * Move devices to a new customer-defined state.
   *
   * @remarks
   * Changes the provisioning state of one or more devices to a specified customer-defined service
   * and state.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceManagement.UpdateDevicesStateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDevicesState(
    request: DeviceManagement.UpdateDevicesStateRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.UpdateDevicesStateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/gotostate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: goToStateRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.UpdateDevicesStateError,
      },
      options,
    );
  }

  /**
   * Uploads and activates device.
   *
   * @remarks
   * Uploads and activates device identifiers and SKUs for new devices from OEMs to Verizon.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceManagement.UploadActivateDeviceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadActivateDevice(
    request: DeviceManagement.UploadActivateDeviceRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.UploadActivateDeviceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/uploadactivate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: uploadsActivatesDeviceRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.UploadActivateDeviceError,
      },
      options,
    );
  }

  /**
   * Allow you to associate a label to a device
   *
   * @remarks
   * Allows you to associate your own usage segmentation label with a device.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceManagement.UsageSegmentationLabelAssociationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usageSegmentationLabelAssociation(
    request: DeviceManagement.UsageSegmentationLabelAssociationRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.UsageSegmentationLabelAssociationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/usagesegmentationlabels"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: associateLabelRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.UsageSegmentationLabelAssociationError,
      },
      options,
    );
  }

  /**
   * Allow you to remove the label associated with a device.
   *
   * @remarks
   * Allow customers to remove the associated label from a device.
   *
   * @returns Request ID received on a successful response.
   *
   * @throws {@link DeviceManagement.UsageSegmentationLabelDeletionError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usageSegmentationLabelDeletion(
    request: DeviceManagement.UsageSegmentationLabelDeletionRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.UsageSegmentationLabelDeletionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/usagesegmentationlabels"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "LabelList", value: request.labelList, schema: labelsListSchema },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.UsageSegmentationLabelDeletionError,
      },
      options,
    );
  }
}

export namespace DeviceManagement {
  export type ActivateServiceForDevicesRequest = {
    /** Request for activating a service on devices. */
    body: CarrierActivateRequest;
  };

  export class ActivateServiceForDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<ActivateServiceForDevicesError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type AddDevicesRequestParams = {
    /** Devices to add. */
    body: AddDevicesRequest;
  };

  export class AddDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<AddDevicesError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type BilledUsageInfoRequest = {
    /** Request to list devices with mismatched IMEIs and ICCIDs. */
    body: BilledusageListRequest;
  };

  export class BilledUsageInfoError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<BilledUsageInfoError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ChangeDevicesServicePlanRequest = {
    /** Request to change device service plan. */
    body: ServicePlanUpdateRequest;
  };

  export class ChangeDevicesServicePlanError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<ChangeDevicesServicePlanError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type CheckDevicesAvailabilityForActivationRequest = {
    /** Request to check if devices can be activated or not. */
    body: DeviceActivationRequest;
  };

  export class CheckDevicesAvailabilityForActivationError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<CheckDevicesAvailabilityForActivationError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type DeactivateServiceForDevicesRequest = {
    /** Request to deactivate service for one or more devices. */
    body: CarrierDeactivateRequest;
  };

  export class DeactivateServiceForDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<DeactivateServiceForDevicesError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type DeleteDeactivatedDevicesRequest = {
    /** Devices to delete. */
    body: DeleteDevicesRequest;
  };

  export class DeleteDeactivatedDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<DeleteDeactivatedDevicesError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type DeviceUploadRequestParams = {
    /** Device Upload Query */
    body: DeviceUploadRequest;
  };

  export class DeviceUploadError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"restErrorResponse", RestErrorResponse>>;

    static readonly errors: ErrorDecoders<DeviceUploadError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }

  export type DeviceUploadStatusRequest = {
    /**
     * The request body identifies the device and reporting period that you want included in the
     * report.
     */
    body: CheckOrderStatusRequest;
  };

  export class DeviceUploadStatusError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<DeviceUploadStatusError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type GetDeviceExtendedDiagnosticInformationRequest = {
    /** Request to query extended diagnostics information for a device. */
    body: DeviceExtendedDiagnosticsRequest;
  };

  export class GetDeviceExtendedDiagnosticInformationError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<GetDeviceExtendedDiagnosticInformationError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type GetDeviceServiceSuspensionStatusRequest = {
    /** Request to obtain service suspenstion status for a device. */
    body: DeviceSuspensionStatusRequest;
  };

  export class GetDeviceServiceSuspensionStatusError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<GetDeviceServiceSuspensionStatusError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ListCurrentDevicesPrlVersionRequest = {
    /** Request to query device PRL. */
    body: DevicePrlListRequest;
  };

  export class ListCurrentDevicesPrlVersionError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<ListCurrentDevicesPrlVersionError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ListDevicesInformationRequest = {
    /** Device information query. */
    body: AccountDeviceListRequest;
  };

  export class ListDevicesInformationError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<ListDevicesInformationError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ListDevicesProvisioningHistoryRequest = {
    /** Query to obtain device provisioning history. */
    body: DeviceProvisioningHistoryListRequest;
  };

  export class ListDevicesProvisioningHistoryError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<ListDevicesProvisioningHistoryError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ListDevicesUsageHistoryRequest = {
    /** Request to obtain usage history for a specific device. */
    body: DeviceUsageListRequest;
  };

  export class ListDevicesUsageHistoryError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<ListDevicesUsageHistoryError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ListDevicesWithImeiIccidMismatchRequest = {
    /** Request to list devices with mismatched IMEIs and ICCIDs. */
    body: DeviceMismatchListRequest;
  };

  export class ListDevicesWithImeiIccidMismatchError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<ListDevicesWithImeiIccidMismatchError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type MoveDevicesWithinAccountsOfProfileRequest = {
    /** Request to move devices between accounts. */
    body: MoveDeviceRequest;
  };

  export class MoveDevicesWithinAccountsOfProfileError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<MoveDevicesWithinAccountsOfProfileError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type RestoreServiceForSuspendedDevicesRequest = {
    /** Request to restore services of one or more suspended devices. */
    body: CarrierActionsRequest;
  };

  export class RestoreServiceForSuspendedDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<RestoreServiceForSuspendedDevicesError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type RetrieveAggregateDeviceUsageHistoryRequest = {
    /** A request to retrieve aggregated device usage history information. */
    body: DeviceAggregateUsageListRequest;
  };

  export class RetrieveAggregateDeviceUsageHistoryError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<RetrieveAggregateDeviceUsageHistoryError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type RetrieveDeviceConnectionHistoryRequest = {
    /** Query to retrieve device connection history. */
    body: DeviceConnectionListRequest;
  };

  export class RetrieveDeviceConnectionHistoryError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<RetrieveDeviceConnectionHistoryError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type SuspendServiceForDevicesRequest = {
    /** Request to suspend service for one or more devices. */
    body: CarrierActionsRequest;
  };

  export class SuspendServiceForDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<SuspendServiceForDevicesError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type UpdateDeviceIdRequest = {
    /** Identifier type. */
    serviceType: string;
    /** Request to update device id. */
    body: ChangeDeviceIdRequest;
  };

  export class UpdateDeviceIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<UpdateDeviceIdError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type UpdateDevicesContactInformationRequest = {
    /** Request to update contact information for devices. */
    body: ContactInfoUpdateRequest;
  };

  export class UpdateDevicesContactInformationError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<UpdateDevicesContactInformationError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type UpdateDevicesCostCenterCodeRequest = {
    /** Request to update cost center code value for one or more devices. */
    body: DeviceCostCenterRequest;
  };

  export class UpdateDevicesCostCenterCodeError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<UpdateDevicesCostCenterCodeError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type UpdateDevicesCustomFieldsRequest = {
    /** Request to update custom field of devices. */
    body: CustomFieldsUpdateRequest;
  };

  export class UpdateDevicesCustomFieldsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<UpdateDevicesCustomFieldsError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type UpdateDevicesStateRequest = {
    /** Request to change device state to one defined by the user. */
    body: GoToStateRequest;
  };

  export class UpdateDevicesStateError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<UpdateDevicesStateError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type UploadActivateDeviceRequest = {
    /** Request to Upload and Activate device. */
    body: UploadsActivatesDeviceRequest;
  };

  export class UploadActivateDeviceError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<UploadActivateDeviceError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type UsageSegmentationLabelAssociationRequest = {
    /** Request to associate a label to a device. */
    body: AssociateLabelRequest;
  };

  export class UsageSegmentationLabelAssociationError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<UsageSegmentationLabelAssociationError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type UsageSegmentationLabelDeletionRequest = {
    /** The numeric name of the account. */
    accountName: string;
    /** A list of the Label IDs to remove from the exclusion list. */
    labelList: LabelsList;
  };

  export class UsageSegmentationLabelDeletionError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<UsageSegmentationLabelDeletionError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }
}
