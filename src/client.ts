import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AccountDevices } from "./resources/account-devices.js";
import { AccountRequests } from "./resources/account-requests.js";
import { AccountServiceController } from "./resources/account-service-controller.js";
import { AccountSubscriptions } from "./resources/account-subscriptions.js";
import { Accounts } from "./resources/accounts.js";
import { AnomalySettings } from "./resources/anomaly-settings.js";
import { AnomalyTriggersV2 } from "./resources/anomaly-triggers-v2.js";
import { AnomalyTriggers } from "./resources/anomaly-triggers.js";
import { Billing } from "./resources/billing.js";
import { CampaignsV2 } from "./resources/campaigns-v2.js";
import { CampaignsV3 } from "./resources/campaigns-v3.js";
import { ClientLogging } from "./resources/client-logging.js";
import { CloudConnectorDevices } from "./resources/cloud-connector-devices.js";
import { CloudConnectorSubscriptions } from "./resources/cloud-connector-subscriptions.js";
import { ConfigurationFiles } from "./resources/configuration-files.js";
import { ConnectivityCallbacks } from "./resources/connectivity-callbacks.js";
import { CreatePricePlanTriggers } from "./resources/create-price-plan-triggers.js";
import { DeviceActions } from "./resources/device-actions.js";
import { DeviceCredentialManagement } from "./resources/device-credential-management.js";
import { DeviceDiagnostics } from "./resources/device-diagnostics.js";
import { DeviceGroups } from "./resources/device-groups.js";
import { DeviceLocationCallbacks } from "./resources/device-location-callbacks.js";
import { DeviceManagement } from "./resources/device-management.js";
import { DeviceMonitoring } from "./resources/device-monitoring.js";
import { DeviceProfileManagement } from "./resources/device-profile-management.js";
import { DeviceReports } from "./resources/device-reports.js";
import { DeviceRoleController } from "./resources/device-role-controller.js";
import { DeviceServiceManagement } from "./resources/device-service-management.js";
import { DeviceSmsMessaging } from "./resources/device-sms-messaging.js";
import { DevicesLocationSubscriptions } from "./resources/devices-location-subscriptions.js";
import { DevicesLocations } from "./resources/devices-locations.js";
import { DiagnosticsCallbacks } from "./resources/diagnostics-callbacks.js";
import { DiagnosticsFactoryReset } from "./resources/diagnostics-factory-reset.js";
import { DiagnosticsHistory } from "./resources/diagnostics-history.js";
import { DiagnosticsObservations } from "./resources/diagnostics-observations.js";
import { DiagnosticsSettings } from "./resources/diagnostics-settings.js";
import { DiagnosticsSubscriptions } from "./resources/diagnostics-subscriptions.js";
import { EtxAppConfiguration } from "./resources/etx-app-configuration.js";
import { EtxRegistration } from "./resources/etx-registration.js";
import { EUiccDeviceProfileManagement } from "./resources/euicc-device-profile-management.js";
import { Exclusions } from "./resources/exclusions.js";
import { FirmwareV1 } from "./resources/firmware-v1.js";
import { FirmwareV3 } from "./resources/firmware-v3.js";
import { GbiDeviceActions5 } from "./resources/gbi-device-actions5.js";
import { GlobalReporting } from "./resources/global-reporting.js";
import { HplDeviceManagement } from "./resources/hpl-device-management.js";
import { HyperPreciseLocationCallbacks } from "./resources/hyper-precise-location-callbacks.js";
import { IntelligenceServiceController } from "./resources/intelligence-service-controller.js";
import { ManagingESimProfiles } from "./resources/managing-esim-profiles.js";
import { MapMessageController } from "./resources/map-message-controller.js";
import { PromotionPeriodInformation } from "./resources/promotion-period-information.js";
import { Pwn } from "./resources/pwn.js";
import { RetrieveRatePlanList } from "./resources/retrieve-rate-plan-list.js";
import { RetrieveTheTriggers } from "./resources/retrieve-the-triggers.js";
import { SensorInsightsDeviceProfile } from "./resources/sensor-insights-device-profile.js";
import { SensorInsightsDevices } from "./resources/sensor-insights-devices.js";
import { SensorInsightsGateways } from "./resources/sensor-insights-gateways.js";
import { SensorInsightsHealthScore } from "./resources/sensor-insights-health-score.js";
import { SensorInsightsNotificationGroups } from "./resources/sensor-insights-notification-groups.js";
import { SensorInsightsRules } from "./resources/sensor-insights-rules.js";
import { SensorInsightsSensors } from "./resources/sensor-insights-sensors.js";
import { SensorInsightsSmartAlertMetrics } from "./resources/sensor-insights-smart-alert-metrics.js";
import { SensorInsightsSmartAlerts } from "./resources/sensor-insights-smart-alerts.js";
import { SensorInsightsUsers } from "./resources/sensor-insights-users.js";
import { ServerLogging } from "./resources/server-logging.js";
import { ServicePlans } from "./resources/service-plans.js";
import { SessionManagement } from "./resources/session-management.js";
import { SimActions } from "./resources/sim-actions.js";
import { SimSecureForIoTLicenses } from "./resources/sim-secure-for-io-tlicenses.js";
import { Sms } from "./resources/sms.js";
import { SoftwareManagementCallbacksV1 } from "./resources/software-management-callbacks-v1.js";
import { SoftwareManagementCallbacksV2 } from "./resources/software-management-callbacks-v2.js";
import { SoftwareManagementCallbacksV3 } from "./resources/software-management-callbacks-v3.js";
import { SoftwareManagementLicensesV1 } from "./resources/software-management-licenses-v1.js";
import { SoftwareManagementLicensesV2 } from "./resources/software-management-licenses-v2.js";
import { SoftwareManagementLicensesV3 } from "./resources/software-management-licenses-v3.js";
import { SoftwareManagementReportsV1 } from "./resources/software-management-reports-v1.js";
import { SoftwareManagementReportsV2 } from "./resources/software-management-reports-v2.js";
import { SoftwareManagementReportsV3 } from "./resources/software-management-reports-v3.js";
import { SoftwareManagementSubscriptionsV1 } from "./resources/software-management-subscriptions-v1.js";
import { SoftwareManagementSubscriptionsV2 } from "./resources/software-management-subscriptions-v2.js";
import { SoftwareManagementSubscriptionsV3 } from "./resources/software-management-subscriptions-v3.js";
import { Targets } from "./resources/targets.js";
import { ThingSpaceQualityOfServiceApiActions } from "./resources/thing-space-quality-of-service-api-actions.js";
import { UpdatePricePlanTriggers } from "./resources/update-price-plan-triggers.js";
import { UpdateTriggers } from "./resources/update-triggers.js";
import { UsageTriggerManagement } from "./resources/usage-trigger-management.js";
import { WirelessNetworkPerformance } from "./resources/wireless-network-performance.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * "The Connection Planner is a service that provides devices windows to connect to their backend
 * APIs. The service validates device access permissions and processes valid devices asynchronously.
 * For each batch, it retrieves device connectivity windows from the RAN KPI Data Application, and
 * sends callbacks back to customers via UWS-Callback for both successful and failed device
 * requests."
 */
export class VerizonClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #accountServiceController?: AccountServiceController;
  #intelligenceServiceController?: IntelligenceServiceController;
  #deviceManagement?: DeviceManagement;
  #accounts?: Accounts;
  #deviceGroups?: DeviceGroups;
  #sms?: Sms;
  #sessionManagement?: SessionManagement;
  #connectivityCallbacks?: ConnectivityCallbacks;
  #accountRequests?: AccountRequests;
  #servicePlans?: ServicePlans;
  #deviceDiagnostics?: DeviceDiagnostics;
  #deviceMonitoring?: DeviceMonitoring;
  #deviceProfileManagement?: DeviceProfileManagement;
  #eUiccDeviceProfileManagement?: EUiccDeviceProfileManagement;
  #devicesLocations?: DevicesLocations;
  #exclusions?: Exclusions;
  #devicesLocationSubscriptions?: DevicesLocationSubscriptions;
  #deviceLocationCallbacks?: DeviceLocationCallbacks;
  #usageTriggerManagement?: UsageTriggerManagement;
  #billing?: Billing;
  #softwareManagementSubscriptionsV1?: SoftwareManagementSubscriptionsV1;
  #softwareManagementLicensesV1?: SoftwareManagementLicensesV1;
  #firmwareV1?: FirmwareV1;
  #softwareManagementCallbacksV1?: SoftwareManagementCallbacksV1;
  #softwareManagementReportsV1?: SoftwareManagementReportsV1;
  #softwareManagementSubscriptionsV2?: SoftwareManagementSubscriptionsV2;
  #softwareManagementLicensesV2?: SoftwareManagementLicensesV2;
  #campaignsV2?: CampaignsV2;
  #softwareManagementCallbacksV2?: SoftwareManagementCallbacksV2;
  #softwareManagementReportsV2?: SoftwareManagementReportsV2;
  #clientLogging?: ClientLogging;
  #serverLogging?: ServerLogging;
  #configurationFiles?: ConfigurationFiles;
  #softwareManagementSubscriptionsV3?: SoftwareManagementSubscriptionsV3;
  #softwareManagementLicensesV3?: SoftwareManagementLicensesV3;
  #campaignsV3?: CampaignsV3;
  #softwareManagementReportsV3?: SoftwareManagementReportsV3;
  #firmwareV3?: FirmwareV3;
  #accountDevices?: AccountDevices;
  #softwareManagementCallbacksV3?: SoftwareManagementCallbacksV3;
  #simSecureForIoTLicenses?: SimSecureForIoTLicenses;
  #accountSubscriptions?: AccountSubscriptions;
  #diagnosticsSubscriptions?: DiagnosticsSubscriptions;
  #diagnosticsObservations?: DiagnosticsObservations;
  #diagnosticsHistory?: DiagnosticsHistory;
  #diagnosticsSettings?: DiagnosticsSettings;
  #diagnosticsCallbacks?: DiagnosticsCallbacks;
  #diagnosticsFactoryReset?: DiagnosticsFactoryReset;
  #targets?: Targets;
  #cloudConnectorSubscriptions?: CloudConnectorSubscriptions;
  #cloudConnectorDevices?: CloudConnectorDevices;
  #hplDeviceManagement?: HplDeviceManagement;
  #deviceServiceManagement?: DeviceServiceManagement;
  #deviceReports?: DeviceReports;
  #hyperPreciseLocationCallbacks?: HyperPreciseLocationCallbacks;
  #deviceCredentialManagement?: DeviceCredentialManagement;
  #anomalySettings?: AnomalySettings;
  #anomalyTriggers?: AnomalyTriggers;
  #anomalyTriggersV2?: AnomalyTriggersV2;
  #wirelessNetworkPerformance?: WirelessNetworkPerformance;
  #managingESimProfiles?: ManagingESimProfiles;
  #deviceSmsMessaging?: DeviceSmsMessaging;
  #deviceActions?: DeviceActions;
  #thingSpaceQualityOfServiceApiActions?: ThingSpaceQualityOfServiceApiActions;
  #pwn?: Pwn;
  #promotionPeriodInformation?: PromotionPeriodInformation;
  #retrieveTheTriggers?: RetrieveTheTriggers;
  #updateTriggers?: UpdateTriggers;
  #simActions?: SimActions;
  #globalReporting?: GlobalReporting;
  #deviceRoleController?: DeviceRoleController;
  #etxAppConfiguration?: EtxAppConfiguration;
  #etxRegistration?: EtxRegistration;
  #mapMessageController?: MapMessageController;
  #retrieveRatePlanList?: RetrieveRatePlanList;
  #createPricePlanTriggers?: CreatePricePlanTriggers;
  #updatePricePlanTriggers?: UpdatePricePlanTriggers;
  #gbiDeviceActions5?: GbiDeviceActions5;
  #sensorInsightsSensors?: SensorInsightsSensors;
  #sensorInsightsDevices?: SensorInsightsDevices;
  #sensorInsightsGateways?: SensorInsightsGateways;
  #sensorInsightsSmartAlerts?: SensorInsightsSmartAlerts;
  #sensorInsightsRules?: SensorInsightsRules;
  #sensorInsightsHealthScore?: SensorInsightsHealthScore;
  #sensorInsightsNotificationGroups?: SensorInsightsNotificationGroups;
  #sensorInsightsUsers?: SensorInsightsUsers;
  #sensorInsightsDeviceProfile?: SensorInsightsDeviceProfile;
  #sensorInsightsSmartAlertMetrics?: SensorInsightsSmartAlertMetrics;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options),
      defaultHeaders: [
        { name: "User-Agent", value: "VerizonClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  /**
   * Account Information for a specified Account Name.
   */
  get accountServiceController(): AccountServiceController {
    return (this.#accountServiceController ??= new AccountServiceController(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * ThingSpace Intelligence is an offering of integrated connectivity and service management.
   */
  get intelligenceServiceController(): IntelligenceServiceController {
    return (this.#intelligenceServiceController ??= new IntelligenceServiceController(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage device connectivity and get device history.
   */
  get deviceManagement(): DeviceManagement {
    return (this.#deviceManagement ??= new DeviceManagement(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Get information about an account or account leads.
   */
  get accounts(): Accounts {
    return (this.#accounts ??= new Accounts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage device groups.
   */
  get deviceGroups(): DeviceGroups {
    return (this.#deviceGroups ??= new DeviceGroups(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Exchange Short Message Service (SMS) messages with devices.
   */
  get sms(): Sms {
    return (this.#sms ??= new Sms(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Start and end Connectivity Management sessions.
   */
  get sessionManagement(): SessionManagement {
    return (this.#sessionManagement ??= new SessionManagement(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage subscriptions to asynchronous webhook messages.
   */
  get connectivityCallbacks(): ConnectivityCallbacks {
    return (this.#connectivityCallbacks ??= new ConnectivityCallbacks(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Get the status of asynchronous reqeusts.
   */
  get accountRequests(): AccountRequests {
    return (this.#accountRequests ??= new AccountRequests(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Get a list of service plans in an account.
   */
  get servicePlans(): ServicePlans {
    return (this.#servicePlans ??= new ServicePlans(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Helps to create & manage diagnostics
   */
  get deviceDiagnostics(): DeviceDiagnostics {
    return (this.#deviceDiagnostics ??= new DeviceDiagnostics(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Monitor device reachability and connection status.
   */
  get deviceMonitoring(): DeviceMonitoring {
    return (this.#deviceMonitoring ??= new DeviceMonitoring(this.#rawClient, this.#servers, this.#auth));
  }

  get deviceProfileManagement(): DeviceProfileManagement {
    return (this.#deviceProfileManagement ??= new DeviceProfileManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get eUiccDeviceProfileManagement(): EUiccDeviceProfileManagement {
    return (this.#eUiccDeviceProfileManagement ??= new EUiccDeviceProfileManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Locate devices.
   */
  get devicesLocations(): DevicesLocations {
    return (this.#devicesLocations ??= new DevicesLocations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Exclude devices from location services.
   */
  get exclusions(): Exclusions {
    return (this.#exclusions ??= new Exclusions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Get an account's location service subscription status and usage.
   */
  get devicesLocationSubscriptions(): DevicesLocationSubscriptions {
    return (this.#devicesLocationSubscriptions ??= new DevicesLocationSubscriptions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Receive notifications from the API.
   */
  get deviceLocationCallbacks(): DeviceLocationCallbacks {
    return (this.#deviceLocationCallbacks ??= new DeviceLocationCallbacks(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get usageTriggerManagement(): UsageTriggerManagement {
    return (this.#usageTriggerManagement ??= new UsageTriggerManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get billing(): Billing {
    return (this.#billing ??= new Billing(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * View Software Management Services subscription status.
   */
  get softwareManagementSubscriptionsV1(): SoftwareManagementSubscriptionsV1 {
    return (this.#softwareManagementSubscriptionsV1 ??= new SoftwareManagementSubscriptionsV1(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Assign Software Management Services license to devices **Note:**These endpoints have been
   * deprecated. Please use the **v3** endpoints.
   */
  get softwareManagementLicensesV1(): SoftwareManagementLicensesV1 {
    return (this.#softwareManagementLicensesV1 ??= new SoftwareManagementLicensesV1(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Schedule and monitor firmware upgrades.
   */
  get firmwareV1(): FirmwareV1 {
    return (this.#firmwareV1 ??= new FirmwareV1(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Register and deregister callback endpoints.
   */
  get softwareManagementCallbacksV1(): SoftwareManagementCallbacksV1 {
    return (this.#softwareManagementCallbacksV1 ??= new SoftwareManagementCallbacksV1(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Status and history information.
   */
  get softwareManagementReportsV1(): SoftwareManagementReportsV1 {
    return (this.#softwareManagementReportsV1 ??= new SoftwareManagementReportsV1(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Information about current FOTA subscriptions.
   */
  get softwareManagementSubscriptionsV2(): SoftwareManagementSubscriptionsV2 {
    return (this.#softwareManagementSubscriptionsV2 ??= new SoftwareManagementSubscriptionsV2(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * License status and assignment.
   */
  get softwareManagementLicensesV2(): SoftwareManagementLicensesV2 {
    return (this.#softwareManagementLicensesV2 ??= new SoftwareManagementLicensesV2(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Schedule, retrieve or cancel scheduled FOTA campaigns.
   */
  get campaignsV2(): CampaignsV2 {
    return (this.#campaignsV2 ??= new CampaignsV2(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Find registered callbacks or create, update and delete a registered callback.
   */
  get softwareManagementCallbacksV2(): SoftwareManagementCallbacksV2 {
    return (this.#softwareManagementCallbacksV2 ??= new SoftwareManagementCallbacksV2(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Status of a campaign per device.
   */
  get softwareManagementReportsV2(): SoftwareManagementReportsV2 {
    return (this.#softwareManagementReportsV2 ??= new SoftwareManagementReportsV2(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Device logs stored on the device itself.
   */
  get clientLogging(): ClientLogging {
    return (this.#clientLogging ??= new ClientLogging(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Device logs on the server.
   */
  get serverLogging(): ServerLogging {
    return (this.#serverLogging ??= new ServerLogging(this.#rawClient, this.#servers, this.#auth));
  }

  get configurationFiles(): ConfigurationFiles {
    return (this.#configurationFiles ??= new ConfigurationFiles(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Information about current FOTA subscriptions.
   */
  get softwareManagementSubscriptionsV3(): SoftwareManagementSubscriptionsV3 {
    return (this.#softwareManagementSubscriptionsV3 ??= new SoftwareManagementSubscriptionsV3(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * License status and assignment.
   */
  get softwareManagementLicensesV3(): SoftwareManagementLicensesV3 {
    return (this.#softwareManagementLicensesV3 ??= new SoftwareManagementLicensesV3(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Schedule, retrieve or cancel scheduled FOTA campaigns.
   */
  get campaignsV3(): CampaignsV3 {
    return (this.#campaignsV3 ??= new CampaignsV3(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Status of a campaign per device.
   */
  get softwareManagementReportsV3(): SoftwareManagementReportsV3 {
    return (this.#softwareManagementReportsV3 ??= new SoftwareManagementReportsV3(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * State of Firmware across devices in the account.
   */
  get firmwareV3(): FirmwareV3 {
    return (this.#firmwareV3 ??= new FirmwareV3(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Device information for an account.
   */
  get accountDevices(): AccountDevices {
    return (this.#accountDevices ??= new AccountDevices(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Find registered callbacks or create, update and delete a registered callback.
   */
  get softwareManagementCallbacksV3(): SoftwareManagementCallbacksV3 {
    return (this.#softwareManagementCallbacksV3 ??= new SoftwareManagementCallbacksV3(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get simSecureForIoTLicenses(): SimSecureForIoTLicenses {
    return (this.#simSecureForIoTLicenses ??= new SimSecureForIoTLicenses(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get accountSubscriptions(): AccountSubscriptions {
    return (this.#accountSubscriptions ??= new AccountSubscriptions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get diagnosticsSubscriptions(): DiagnosticsSubscriptions {
    return (this.#diagnosticsSubscriptions ??= new DiagnosticsSubscriptions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get diagnosticsObservations(): DiagnosticsObservations {
    return (this.#diagnosticsObservations ??= new DiagnosticsObservations(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get diagnosticsHistory(): DiagnosticsHistory {
    return (this.#diagnosticsHistory ??= new DiagnosticsHistory(this.#rawClient, this.#servers, this.#auth));
  }

  get diagnosticsSettings(): DiagnosticsSettings {
    return (this.#diagnosticsSettings ??= new DiagnosticsSettings(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get diagnosticsCallbacks(): DiagnosticsCallbacks {
    return (this.#diagnosticsCallbacks ??= new DiagnosticsCallbacks(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get diagnosticsFactoryReset(): DiagnosticsFactoryReset {
    return (this.#diagnosticsFactoryReset ??= new DiagnosticsFactoryReset(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get targets(): Targets {
    return (this.#targets ??= new Targets(this.#rawClient, this.#servers, this.#auth));
  }

  get cloudConnectorSubscriptions(): CloudConnectorSubscriptions {
    return (this.#cloudConnectorSubscriptions ??= new CloudConnectorSubscriptions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get cloudConnectorDevices(): CloudConnectorDevices {
    return (this.#cloudConnectorDevices ??= new CloudConnectorDevices(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage the devices on the account
   */
  get hplDeviceManagement(): HplDeviceManagement {
    return (this.#hplDeviceManagement ??= new HplDeviceManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Check status and enable or disable service for Hyper Precise
   */
  get deviceServiceManagement(): DeviceServiceManagement {
    return (this.#deviceServiceManagement ??= new DeviceServiceManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Check device usage
   */
  get deviceReports(): DeviceReports {
    return (this.#deviceReports ??= new DeviceReports(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage callback listeners for Hyper Precise
   */
  get hyperPreciseLocationCallbacks(): HyperPreciseLocationCallbacks {
    return (this.#hyperPreciseLocationCallbacks ??= new HyperPreciseLocationCallbacks(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * API endpoints for managing HPL device credentials
   */
  get deviceCredentialManagement(): DeviceCredentialManagement {
    return (this.#deviceCredentialManagement ??= new DeviceCredentialManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Choose what level and interval of alerting for anomalies detected.
   */
  get anomalySettings(): AnomalySettings {
    return (this.#anomalySettings ??= new AnomalySettings(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Set the threshold of notification for anomalies detected.
   */
  get anomalyTriggers(): AnomalyTriggers {
    return (this.#anomalyTriggers ??= new AnomalyTriggers(this.#rawClient, this.#servers, this.#auth));
  }

  get anomalyTriggersV2(): AnomalyTriggersV2 {
    return (this.#anomalyTriggersV2 ??= new AnomalyTriggersV2(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Run reports to query current network conditions, historic network conditions, see what wireless
   * technologies are supported in your area or qualify and address for Fixed Wireless Access (FWA).
   */
  get wirelessNetworkPerformance(): WirelessNetworkPerformance {
    return (this.#wirelessNetworkPerformance ??= new WirelessNetworkPerformance(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage Global IoT Orchestration device profiles for either Verizon (lead) or Global (local).
   */
  get managingESimProfiles(): ManagingESimProfiles {
    return (this.#managingESimProfiles ??= new ManagingESimProfiles(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Send Short Message Service (SMS) messages to devices
   */
  get deviceSmsMessaging(): DeviceSmsMessaging {
    return (this.#deviceSmsMessaging ??= new DeviceSmsMessaging(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Device management for either Verizon (lead) or Global (local) profiles.
   */
  get deviceActions(): DeviceActions {
    return (this.#deviceActions ??= new DeviceActions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Subscribe or Unsubscribe to the ThingSpace Quality of Service API.
   */
  get thingSpaceQualityOfServiceApiActions(): ThingSpaceQualityOfServiceApiActions {
    return (this.#thingSpaceQualityOfServiceApiActions ??= new ThingSpaceQualityOfServiceApiActions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get pwn(): Pwn {
    return (this.#pwn ??= new Pwn(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Retrieve status and information about the promotion period for using a pseudo-MDN (Mobile
   * Device Number))
   */
  get promotionPeriodInformation(): PromotionPeriodInformation {
    return (this.#promotionPeriodInformation ??= new PromotionPeriodInformation(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Retrieve the triggers associated with the feature and the account.
   */
  get retrieveTheTriggers(): RetrieveTheTriggers {
    return (this.#retrieveTheTriggers ??= new RetrieveTheTriggers(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Updates the trigger threshold values for alerts.
   */
  get updateTriggers(): UpdateTriggers {
    return (this.#updateTriggers ??= new UpdateTriggers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Activate and Deactivate the SIM.
   */
  get simActions(): SimActions {
    return (this.#simActions ??= new SimActions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Use these endpoints to determine the status of requests or the history of device provisioning.
   */
  get globalReporting(): GlobalReporting {
    return (this.#globalReporting ??= new GlobalReporting(this.#rawClient, this.#servers, this.#auth));
  }

  get deviceRoleController(): DeviceRoleController {
    return (this.#deviceRoleController ??= new DeviceRoleController(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage geofence-based application configurations.
   */
  get etxAppConfiguration(): EtxAppConfiguration {
    return (this.#etxAppConfiguration ??= new EtxAppConfiguration(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage device registration and connection.
   */
  get etxRegistration(): EtxRegistration {
    return (this.#etxRegistration ??= new EtxRegistration(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for ingesting, querying, and deleting V2X MAP messages.
   */
  get mapMessageController(): MapMessageController {
    return (this.#mapMessageController ??= new MapMessageController(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Retrive a list of the rate plans associated with the account
   */
  get retrieveRatePlanList(): RetrieveRatePlanList {
    return (this.#retrieveRatePlanList ??= new RetrieveRatePlanList(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Create rules to trigger changes for price plans based on usage
   */
  get createPricePlanTriggers(): CreatePricePlanTriggers {
    return (this.#createPricePlanTriggers ??= new CreatePricePlanTriggers(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Update rules to trigger changes for price plans based on usage
   */
  get updatePricePlanTriggers(): UpdatePricePlanTriggers {
    return (this.#updatePricePlanTriggers ??= new UpdatePricePlanTriggers(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Activate devices or retrieve device attributes.
   */
  get gbiDeviceActions5(): GbiDeviceActions5 {
    return (this.#gbiDeviceActions5 ??= new GbiDeviceActions5(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Sensor tasks and information
   */
  get sensorInsightsSensors(): SensorInsightsSensors {
    return (this.#sensorInsightsSensors ??= new SensorInsightsSensors(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Device tasks and information
   */
  get sensorInsightsDevices(): SensorInsightsDevices {
    return (this.#sensorInsightsDevices ??= new SensorInsightsDevices(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Query gateway information
   */
  get sensorInsightsGateways(): SensorInsightsGateways {
    return (this.#sensorInsightsGateways ??= new SensorInsightsGateways(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Rules based alerts
   */
  get sensorInsightsSmartAlerts(): SensorInsightsSmartAlerts {
    return (this.#sensorInsightsSmartAlerts ??= new SensorInsightsSmartAlerts(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Create and manage rules
   */
  get sensorInsightsRules(): SensorInsightsRules {
    return (this.#sensorInsightsRules ??= new SensorInsightsRules(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Monitor the health of devices and the network
   */
  get sensorInsightsHealthScore(): SensorInsightsHealthScore {
    return (this.#sensorInsightsHealthScore ??= new SensorInsightsHealthScore(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Create and manage groups to recieve notifications and alerts
   */
  get sensorInsightsNotificationGroups(): SensorInsightsNotificationGroups {
    return (this.#sensorInsightsNotificationGroups ??= new SensorInsightsNotificationGroups(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Create user accounts and manage user roles and permissions
   */
  get sensorInsightsUsers(): SensorInsightsUsers {
    return (this.#sensorInsightsUsers ??= new SensorInsightsUsers(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Create and manage device profile information
   */
  get sensorInsightsDeviceProfile(): SensorInsightsDeviceProfile {
    return (this.#sensorInsightsDeviceProfile ??= new SensorInsightsDeviceProfile(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Retrieve tallies of alerts from a recent daily period
   */
  get sensorInsightsSmartAlertMetrics(): SensorInsightsSmartAlertMetrics {
    return (this.#sensorInsightsSmartAlertMetrics ??= new SensorInsightsSmartAlertMetrics(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }
}
