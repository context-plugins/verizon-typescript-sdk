import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class DeviceManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  activateServiceForDevices(
    request: DeviceManagement.ActivateServiceForDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.ActivateServiceForDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/activate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: carrierActivateRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.ActivateServiceForDevicesError,
      },
      options,
    );
  }

  addDevices(
    request: DeviceManagement.AddDevicesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AddDevicesResult[], DeviceManagement.AddDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/add"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: addDevicesRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => addDevicesResultSchema)) },
        errorFactory: DeviceManagement.AddDevicesError,
      },
      options,
    );
  }

  billedUsageInfo(
    request: DeviceManagement.BilledUsageInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.BilledUsageInfoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/usage/actions/billedusage/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: billedusageListRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.BilledUsageInfoError,
      },
      options,
    );
  }

  changeDevicesServicePlan(
    request: DeviceManagement.ChangeDevicesServicePlanRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.ChangeDevicesServicePlanError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/plan"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: servicePlanUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.ChangeDevicesServicePlanError,
      },
      options,
    );
  }

  checkDevicesAvailabilityForActivation(
    request: DeviceManagement.CheckDevicesAvailabilityForActivationRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.CheckDevicesAvailabilityForActivationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/availability/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: deviceActivationRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.CheckDevicesAvailabilityForActivationError,
      },
      options,
    );
  }

  deactivateServiceForDevices(
    request: DeviceManagement.DeactivateServiceForDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.DeactivateServiceForDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/deactivate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: carrierDeactivateRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.DeactivateServiceForDevicesError,
      },
      options,
    );
  }

  deleteDeactivatedDevices(
    request: DeviceManagement.DeleteDeactivatedDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteDevicesResult[], DeviceManagement.DeleteDeactivatedDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/delete"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: deleteDevicesRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deleteDevicesResultSchema)) },
        errorFactory: DeviceManagement.DeleteDeactivatedDevicesError,
      },
      options,
    );
  }

  deviceUpload(
    request: DeviceManagement.DeviceUploadRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RequestResponse, DeviceManagement.DeviceUploadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/upload"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: deviceUploadRequestSchema },
      },
      {
        success: { kind: "json", schema: requestResponseSchema },
        errorFactory: DeviceManagement.DeviceUploadError,
      },
      options,
    );
  }

  deviceUploadStatus(
    request: DeviceManagement.DeviceUploadStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.DeviceUploadStatusError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/requests/status"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: checkOrderStatusRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.DeviceUploadStatusError,
      },
      options,
    );
  }

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
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/extendeddiagnostics/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: deviceExtendedDiagnosticsRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceExtendedDiagnosticsResultSchema },
        errorFactory: DeviceManagement.GetDeviceExtendedDiagnosticInformationError,
      },
      options,
    );
  }

  getDeviceServiceSuspensionStatus(
    request: DeviceManagement.GetDeviceServiceSuspensionStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.GetDeviceServiceSuspensionStatusError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/suspension/status"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: deviceSuspensionStatusRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.GetDeviceServiceSuspensionStatusError,
      },
      options,
    );
  }

  listCurrentDevicesPrlVersion(
    request: DeviceManagement.ListCurrentDevicesPrlVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.ListCurrentDevicesPrlVersionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/prl/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: devicePrlListRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.ListCurrentDevicesPrlVersionError,
      },
      options,
    );
  }

  listDevicesInformation(
    request: DeviceManagement.ListDevicesInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountDeviceListResult, DeviceManagement.ListDevicesInformationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: accountDeviceListRequestSchema },
      },
      {
        success: { kind: "json", schema: accountDeviceListResultSchema },
        errorFactory: DeviceManagement.ListDevicesInformationError,
      },
      options,
    );
  }

  listDevicesProvisioningHistory(
    request: DeviceManagement.ListDevicesProvisioningHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceProvisioningHistoryListResult[], DeviceManagement.ListDevicesProvisioningHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/history/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: deviceProvisioningHistoryListRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deviceProvisioningHistoryListResultSchema)) },
        errorFactory: DeviceManagement.ListDevicesProvisioningHistoryError,
      },
      options,
    );
  }

  listDevicesUsageHistory(
    request: DeviceManagement.ListDevicesUsageHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceUsageListResult, DeviceManagement.ListDevicesUsageHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/usage/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: deviceUsageListRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceUsageListResultSchema },
        errorFactory: DeviceManagement.ListDevicesUsageHistoryError,
      },
      options,
    );
  }

  listDevicesWithImeiIccidMismatch(
    request: DeviceManagement.ListDevicesWithImeiIccidMismatchRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceMismatchListResult, DeviceManagement.ListDevicesWithImeiIccidMismatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/list/imeiiccidmismatch"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: deviceMismatchListRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceMismatchListResultSchema },
        errorFactory: DeviceManagement.ListDevicesWithImeiIccidMismatchError,
      },
      options,
    );
  }

  moveDevicesWithinAccountsOfProfile(
    request: DeviceManagement.MoveDevicesWithinAccountsOfProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.MoveDevicesWithinAccountsOfProfileError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/move"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: moveDeviceRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.MoveDevicesWithinAccountsOfProfileError,
      },
      options,
    );
  }

  restoreServiceForSuspendedDevices(
    request: DeviceManagement.RestoreServiceForSuspendedDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.RestoreServiceForSuspendedDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/restore"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: carrierActionsRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.RestoreServiceForSuspendedDevicesError,
      },
      options,
    );
  }

  retrieveAggregateDeviceUsageHistory(
    request: DeviceManagement.RetrieveAggregateDeviceUsageHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.RetrieveAggregateDeviceUsageHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/usage/actions/list/aggregate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: deviceAggregateUsageListRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.RetrieveAggregateDeviceUsageHistoryError,
      },
      options,
    );
  }

  retrieveDeviceConnectionHistory(
    request: DeviceManagement.RetrieveDeviceConnectionHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectionHistoryResult, DeviceManagement.RetrieveDeviceConnectionHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/connections/actions/listHistory"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: deviceConnectionListRequestSchema },
      },
      {
        success: { kind: "json", schema: connectionHistoryResultSchema },
        errorFactory: DeviceManagement.RetrieveDeviceConnectionHistoryError,
      },
      options,
    );
  }

  suspendServiceForDevices(
    request: DeviceManagement.SuspendServiceForDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.SuspendServiceForDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/suspend"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: carrierActionsRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.SuspendServiceForDevicesError,
      },
      options,
    );
  }

  updateDeviceId(
    request: DeviceManagement.UpdateDeviceIdRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.UpdateDeviceIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/{serviceType}/actions/deviceId"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "serviceType", value: request.serviceType, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: changeDeviceIdRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.UpdateDeviceIdError,
      },
      options,
    );
  }

  updateDevicesContactInformation(
    request: DeviceManagement.UpdateDevicesContactInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.UpdateDevicesContactInformationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/contactInfo"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: contactInfoUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.UpdateDevicesContactInformationError,
      },
      options,
    );
  }

  updateDevicesCostCenterCode(
    request: DeviceManagement.UpdateDevicesCostCenterCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.UpdateDevicesCostCenterCodeError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/costCenter"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: deviceCostCenterRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.UpdateDevicesCostCenterCodeError,
      },
      options,
    );
  }

  updateDevicesCustomFields(
    request: DeviceManagement.UpdateDevicesCustomFieldsRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.UpdateDevicesCustomFieldsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/customFields"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: customFieldsUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.UpdateDevicesCustomFieldsError,
      },
      options,
    );
  }

  updateDevicesState(
    request: DeviceManagement.UpdateDevicesStateRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.UpdateDevicesStateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/gotostate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: goToStateRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.UpdateDevicesStateError,
      },
      options,
    );
  }

  uploadActivateDevice(
    request: DeviceManagement.UploadActivateDeviceRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.UploadActivateDeviceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/uploadactivate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: uploadsActivatesDeviceRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.UploadActivateDeviceError,
      },
      options,
    );
  }

  usageSegmentationLabelAssociation(
    request: DeviceManagement.UsageSegmentationLabelAssociationRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.UsageSegmentationLabelAssociationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/usagesegmentationlabels"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: associateLabelRequestSchema },
      },
      {
        success: { kind: "json", schema: deviceManagementResultSchema },
        errorFactory: DeviceManagement.UsageSegmentationLabelAssociationError,
      },
      options,
    );
  }

  usageSegmentationLabelDeletion(
    request: DeviceManagement.UsageSegmentationLabelDeletionRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceManagementResult, DeviceManagement.UsageSegmentationLabelDeletionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/usagesegmentationlabels"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        query: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "LabelList", value: request.labelList, schema: labelsListSchema },
        ],
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
    body: CarrierActivateRequest;
  };

  export class ActivateServiceForDevicesError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<ActivateServiceForDevicesError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type AddDevicesRequestParams = {
    body: AddDevicesRequest;
  };

  export class AddDevicesError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<AddDevicesError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type BilledUsageInfoRequest = {
    body: BilledusageListRequest;
  };

  export class BilledUsageInfoError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<BilledUsageInfoError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ChangeDevicesServicePlanRequest = {
    body: ServicePlanUpdateRequest;
  };

  export class ChangeDevicesServicePlanError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<ChangeDevicesServicePlanError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type CheckDevicesAvailabilityForActivationRequest = {
    body: DeviceActivationRequest;
  };

  export class CheckDevicesAvailabilityForActivationError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<CheckDevicesAvailabilityForActivationError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type DeactivateServiceForDevicesRequest = {
    body: CarrierDeactivateRequest;
  };

  export class DeactivateServiceForDevicesError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<DeactivateServiceForDevicesError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type DeleteDeactivatedDevicesRequest = {
    body: DeleteDevicesRequest;
  };

  export class DeleteDeactivatedDevicesError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<DeleteDeactivatedDevicesError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type DeviceUploadRequestParams = {
    body: DeviceUploadRequest;
  };

  export class DeviceUploadError extends ResponseError<Declared<"restErrorResponse", RestErrorResponse>> {
    static readonly errors: ErrorDecoders<DeviceUploadError> = [
      { on: 400, kind: "restErrorResponse", decode: { kind: "json", schema: restErrorResponseSchema } },
    ];
  }

  export type DeviceUploadStatusRequest = {
    body: CheckOrderStatusRequest;
  };

  export class DeviceUploadStatusError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<DeviceUploadStatusError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type GetDeviceExtendedDiagnosticInformationRequest = {
    body: DeviceExtendedDiagnosticsRequest;
  };

  export class GetDeviceExtendedDiagnosticInformationError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<GetDeviceExtendedDiagnosticInformationError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type GetDeviceServiceSuspensionStatusRequest = {
    body: DeviceSuspensionStatusRequest;
  };

  export class GetDeviceServiceSuspensionStatusError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<GetDeviceServiceSuspensionStatusError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ListCurrentDevicesPrlVersionRequest = {
    body: DevicePrlListRequest;
  };

  export class ListCurrentDevicesPrlVersionError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<ListCurrentDevicesPrlVersionError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ListDevicesInformationRequest = {
    body: AccountDeviceListRequest;
  };

  export class ListDevicesInformationError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<ListDevicesInformationError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ListDevicesProvisioningHistoryRequest = {
    body: DeviceProvisioningHistoryListRequest;
  };

  export class ListDevicesProvisioningHistoryError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<ListDevicesProvisioningHistoryError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ListDevicesUsageHistoryRequest = {
    body: DeviceUsageListRequest;
  };

  export class ListDevicesUsageHistoryError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<ListDevicesUsageHistoryError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ListDevicesWithImeiIccidMismatchRequest = {
    body: DeviceMismatchListRequest;
  };

  export class ListDevicesWithImeiIccidMismatchError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<ListDevicesWithImeiIccidMismatchError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type MoveDevicesWithinAccountsOfProfileRequest = {
    body: MoveDeviceRequest;
  };

  export class MoveDevicesWithinAccountsOfProfileError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<MoveDevicesWithinAccountsOfProfileError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type RestoreServiceForSuspendedDevicesRequest = {
    body: CarrierActionsRequest;
  };

  export class RestoreServiceForSuspendedDevicesError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<RestoreServiceForSuspendedDevicesError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type RetrieveAggregateDeviceUsageHistoryRequest = {
    body: DeviceAggregateUsageListRequest;
  };

  export class RetrieveAggregateDeviceUsageHistoryError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<RetrieveAggregateDeviceUsageHistoryError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type RetrieveDeviceConnectionHistoryRequest = {
    body: DeviceConnectionListRequest;
  };

  export class RetrieveDeviceConnectionHistoryError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<RetrieveDeviceConnectionHistoryError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type SuspendServiceForDevicesRequest = {
    body: CarrierActionsRequest;
  };

  export class SuspendServiceForDevicesError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<SuspendServiceForDevicesError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type UpdateDeviceIdRequest = {
    serviceType: string;
    body: ChangeDeviceIdRequest;
  };

  export class UpdateDeviceIdError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<UpdateDeviceIdError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type UpdateDevicesContactInformationRequest = {
    body: ContactInfoUpdateRequest;
  };

  export class UpdateDevicesContactInformationError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<UpdateDevicesContactInformationError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type UpdateDevicesCostCenterCodeRequest = {
    body: DeviceCostCenterRequest;
  };

  export class UpdateDevicesCostCenterCodeError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<UpdateDevicesCostCenterCodeError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type UpdateDevicesCustomFieldsRequest = {
    body: CustomFieldsUpdateRequest;
  };

  export class UpdateDevicesCustomFieldsError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<UpdateDevicesCustomFieldsError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type UpdateDevicesStateRequest = {
    body: GoToStateRequest;
  };

  export class UpdateDevicesStateError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<UpdateDevicesStateError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type UploadActivateDeviceRequest = {
    body: UploadsActivatesDeviceRequest;
  };

  export class UploadActivateDeviceError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<UploadActivateDeviceError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type UsageSegmentationLabelAssociationRequest = {
    body: AssociateLabelRequest;
  };

  export class UsageSegmentationLabelAssociationError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<UsageSegmentationLabelAssociationError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type UsageSegmentationLabelDeletionRequest = {
    accountName: string;
    labelList: LabelsList;
  };

  export class UsageSegmentationLabelDeletionError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<UsageSegmentationLabelDeletionError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }
}
