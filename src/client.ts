import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import { DEFAULT_CLIENT_OPTIONS, type ClientOptions } from "./client-options.js";
import { RawClient } from "./core/raw-client.js";
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

  constructor(clientOptions: Partial<ClientOptions> = {}) {
    const options = { ...DEFAULT_CLIENT_OPTIONS, ...clientOptions };

    this.#rawClient = new RawClient({
      timeout: options.timeout,
      defaultHeaders: [],
      defaultQuery: [],
      defaultPathParams: [],
      fetch: options.fetch,
    });

    this.#servers = buildServers(options.serverEnvironment, options.serverOptions);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  get accountServiceController(): AccountServiceController {
    return (this.#accountServiceController ??= new AccountServiceController(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get intelligenceServiceController(): IntelligenceServiceController {
    return (this.#intelligenceServiceController ??= new IntelligenceServiceController(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get deviceManagement(): DeviceManagement {
    return (this.#deviceManagement ??= new DeviceManagement(this.#rawClient, this.#servers, this.#auth));
  }

  get accounts(): Accounts {
    return (this.#accounts ??= new Accounts(this.#rawClient, this.#servers, this.#auth));
  }

  get deviceGroups(): DeviceGroups {
    return (this.#deviceGroups ??= new DeviceGroups(this.#rawClient, this.#servers, this.#auth));
  }

  get sms(): Sms {
    return (this.#sms ??= new Sms(this.#rawClient, this.#servers, this.#auth));
  }

  get sessionManagement(): SessionManagement {
    return (this.#sessionManagement ??= new SessionManagement(this.#rawClient, this.#servers, this.#auth));
  }

  get connectivityCallbacks(): ConnectivityCallbacks {
    return (this.#connectivityCallbacks ??= new ConnectivityCallbacks(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get accountRequests(): AccountRequests {
    return (this.#accountRequests ??= new AccountRequests(this.#rawClient, this.#servers, this.#auth));
  }

  get servicePlans(): ServicePlans {
    return (this.#servicePlans ??= new ServicePlans(this.#rawClient, this.#servers, this.#auth));
  }

  get deviceDiagnostics(): DeviceDiagnostics {
    return (this.#deviceDiagnostics ??= new DeviceDiagnostics(this.#rawClient, this.#servers, this.#auth));
  }

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

  get devicesLocations(): DevicesLocations {
    return (this.#devicesLocations ??= new DevicesLocations(this.#rawClient, this.#servers, this.#auth));
  }

  get exclusions(): Exclusions {
    return (this.#exclusions ??= new Exclusions(this.#rawClient, this.#servers, this.#auth));
  }

  get devicesLocationSubscriptions(): DevicesLocationSubscriptions {
    return (this.#devicesLocationSubscriptions ??= new DevicesLocationSubscriptions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

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

  get softwareManagementSubscriptionsV1(): SoftwareManagementSubscriptionsV1 {
    return (this.#softwareManagementSubscriptionsV1 ??= new SoftwareManagementSubscriptionsV1(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get softwareManagementLicensesV1(): SoftwareManagementLicensesV1 {
    return (this.#softwareManagementLicensesV1 ??= new SoftwareManagementLicensesV1(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get firmwareV1(): FirmwareV1 {
    return (this.#firmwareV1 ??= new FirmwareV1(this.#rawClient, this.#servers, this.#auth));
  }

  get softwareManagementCallbacksV1(): SoftwareManagementCallbacksV1 {
    return (this.#softwareManagementCallbacksV1 ??= new SoftwareManagementCallbacksV1(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get softwareManagementReportsV1(): SoftwareManagementReportsV1 {
    return (this.#softwareManagementReportsV1 ??= new SoftwareManagementReportsV1(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get softwareManagementSubscriptionsV2(): SoftwareManagementSubscriptionsV2 {
    return (this.#softwareManagementSubscriptionsV2 ??= new SoftwareManagementSubscriptionsV2(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get softwareManagementLicensesV2(): SoftwareManagementLicensesV2 {
    return (this.#softwareManagementLicensesV2 ??= new SoftwareManagementLicensesV2(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get campaignsV2(): CampaignsV2 {
    return (this.#campaignsV2 ??= new CampaignsV2(this.#rawClient, this.#servers, this.#auth));
  }

  get softwareManagementCallbacksV2(): SoftwareManagementCallbacksV2 {
    return (this.#softwareManagementCallbacksV2 ??= new SoftwareManagementCallbacksV2(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get softwareManagementReportsV2(): SoftwareManagementReportsV2 {
    return (this.#softwareManagementReportsV2 ??= new SoftwareManagementReportsV2(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get clientLogging(): ClientLogging {
    return (this.#clientLogging ??= new ClientLogging(this.#rawClient, this.#servers, this.#auth));
  }

  get serverLogging(): ServerLogging {
    return (this.#serverLogging ??= new ServerLogging(this.#rawClient, this.#servers, this.#auth));
  }

  get configurationFiles(): ConfigurationFiles {
    return (this.#configurationFiles ??= new ConfigurationFiles(this.#rawClient, this.#servers, this.#auth));
  }

  get softwareManagementSubscriptionsV3(): SoftwareManagementSubscriptionsV3 {
    return (this.#softwareManagementSubscriptionsV3 ??= new SoftwareManagementSubscriptionsV3(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get softwareManagementLicensesV3(): SoftwareManagementLicensesV3 {
    return (this.#softwareManagementLicensesV3 ??= new SoftwareManagementLicensesV3(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get campaignsV3(): CampaignsV3 {
    return (this.#campaignsV3 ??= new CampaignsV3(this.#rawClient, this.#servers, this.#auth));
  }

  get softwareManagementReportsV3(): SoftwareManagementReportsV3 {
    return (this.#softwareManagementReportsV3 ??= new SoftwareManagementReportsV3(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get firmwareV3(): FirmwareV3 {
    return (this.#firmwareV3 ??= new FirmwareV3(this.#rawClient, this.#servers, this.#auth));
  }

  get accountDevices(): AccountDevices {
    return (this.#accountDevices ??= new AccountDevices(this.#rawClient, this.#servers, this.#auth));
  }

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

  get hplDeviceManagement(): HplDeviceManagement {
    return (this.#hplDeviceManagement ??= new HplDeviceManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get deviceServiceManagement(): DeviceServiceManagement {
    return (this.#deviceServiceManagement ??= new DeviceServiceManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get deviceReports(): DeviceReports {
    return (this.#deviceReports ??= new DeviceReports(this.#rawClient, this.#servers, this.#auth));
  }

  get hyperPreciseLocationCallbacks(): HyperPreciseLocationCallbacks {
    return (this.#hyperPreciseLocationCallbacks ??= new HyperPreciseLocationCallbacks(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get deviceCredentialManagement(): DeviceCredentialManagement {
    return (this.#deviceCredentialManagement ??= new DeviceCredentialManagement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get anomalySettings(): AnomalySettings {
    return (this.#anomalySettings ??= new AnomalySettings(this.#rawClient, this.#servers, this.#auth));
  }

  get anomalyTriggers(): AnomalyTriggers {
    return (this.#anomalyTriggers ??= new AnomalyTriggers(this.#rawClient, this.#servers, this.#auth));
  }

  get anomalyTriggersV2(): AnomalyTriggersV2 {
    return (this.#anomalyTriggersV2 ??= new AnomalyTriggersV2(this.#rawClient, this.#servers, this.#auth));
  }

  get wirelessNetworkPerformance(): WirelessNetworkPerformance {
    return (this.#wirelessNetworkPerformance ??= new WirelessNetworkPerformance(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get managingESimProfiles(): ManagingESimProfiles {
    return (this.#managingESimProfiles ??= new ManagingESimProfiles(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get deviceSmsMessaging(): DeviceSmsMessaging {
    return (this.#deviceSmsMessaging ??= new DeviceSmsMessaging(this.#rawClient, this.#servers, this.#auth));
  }

  get deviceActions(): DeviceActions {
    return (this.#deviceActions ??= new DeviceActions(this.#rawClient, this.#servers, this.#auth));
  }

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

  get promotionPeriodInformation(): PromotionPeriodInformation {
    return (this.#promotionPeriodInformation ??= new PromotionPeriodInformation(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get retrieveTheTriggers(): RetrieveTheTriggers {
    return (this.#retrieveTheTriggers ??= new RetrieveTheTriggers(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get updateTriggers(): UpdateTriggers {
    return (this.#updateTriggers ??= new UpdateTriggers(this.#rawClient, this.#servers, this.#auth));
  }

  get simActions(): SimActions {
    return (this.#simActions ??= new SimActions(this.#rawClient, this.#servers, this.#auth));
  }

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

  get etxAppConfiguration(): EtxAppConfiguration {
    return (this.#etxAppConfiguration ??= new EtxAppConfiguration(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get etxRegistration(): EtxRegistration {
    return (this.#etxRegistration ??= new EtxRegistration(this.#rawClient, this.#servers, this.#auth));
  }

  get mapMessageController(): MapMessageController {
    return (this.#mapMessageController ??= new MapMessageController(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get retrieveRatePlanList(): RetrieveRatePlanList {
    return (this.#retrieveRatePlanList ??= new RetrieveRatePlanList(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get createPricePlanTriggers(): CreatePricePlanTriggers {
    return (this.#createPricePlanTriggers ??= new CreatePricePlanTriggers(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get updatePricePlanTriggers(): UpdatePricePlanTriggers {
    return (this.#updatePricePlanTriggers ??= new UpdatePricePlanTriggers(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get gbiDeviceActions5(): GbiDeviceActions5 {
    return (this.#gbiDeviceActions5 ??= new GbiDeviceActions5(this.#rawClient, this.#servers, this.#auth));
  }

  get sensorInsightsSensors(): SensorInsightsSensors {
    return (this.#sensorInsightsSensors ??= new SensorInsightsSensors(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get sensorInsightsDevices(): SensorInsightsDevices {
    return (this.#sensorInsightsDevices ??= new SensorInsightsDevices(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get sensorInsightsGateways(): SensorInsightsGateways {
    return (this.#sensorInsightsGateways ??= new SensorInsightsGateways(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get sensorInsightsSmartAlerts(): SensorInsightsSmartAlerts {
    return (this.#sensorInsightsSmartAlerts ??= new SensorInsightsSmartAlerts(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get sensorInsightsRules(): SensorInsightsRules {
    return (this.#sensorInsightsRules ??= new SensorInsightsRules(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get sensorInsightsHealthScore(): SensorInsightsHealthScore {
    return (this.#sensorInsightsHealthScore ??= new SensorInsightsHealthScore(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get sensorInsightsNotificationGroups(): SensorInsightsNotificationGroups {
    return (this.#sensorInsightsNotificationGroups ??= new SensorInsightsNotificationGroups(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get sensorInsightsUsers(): SensorInsightsUsers {
    return (this.#sensorInsightsUsers ??= new SensorInsightsUsers(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get sensorInsightsDeviceProfile(): SensorInsightsDeviceProfile {
    return (this.#sensorInsightsDeviceProfile ??= new SensorInsightsDeviceProfile(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get sensorInsightsSmartAlertMetrics(): SensorInsightsSmartAlertMetrics {
    return (this.#sensorInsightsSmartAlertMetrics ??= new SensorInsightsSmartAlertMetrics(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }
}
