
# Getting Started with Verizon

## Introduction

"The Connection Planner is a service that provides devices windows to connect to their backend APIs. The service validates device access permissions and processes valid devices asynchronously. For each batch, it retrieves device connectivity windows from the RAN KPI Data Application, and sends callbacks back to customers via UWS-Callback for both successful and failed device requests."

Best Practices for Callbacks: [https://thingspace.verizon.com/documentation/apis/connectivity-management/working-with-verizon/about-callback-services/best-practices.html](https://thingspace.verizon.com/documentation/apis/connectivity-management/working-with-verizon/about-callback-services/best-practices.html)

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). It also requires **Typescript version >=4.1**. You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=Verizon&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=Verizon&workspaceName=verizonlib&step=resolveDependency)

## Installation

The following section explains how to use the generated library in a new project.

### 1. Initialize the Node Project

- Open an IDE/text editor for JavaScript like Visual Studio Code. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

- Click on **File** and select **Open Folder**. Select an empty folder of your project, the folder will become visible in the sidebar on the left.

![Open Folder](https://apidocs.io/illustration/typescript?step=openProject)

- To initialize the Node project, click on **Terminal** and select **New Terminal**. Execute the following command in the terminal:

```bash
npm init --y
```

![Initialize the Node Project](https://apidocs.io/illustration/typescript?step=initializeProject)

### 2. Add Dependencies to the Client Library

- The created project manages its dependencies using its `package.json` file. In order to add a dependency on the *VerizonLib* client library, double click on the `package.json` file in the bar on the left and add the dependency to the package in it.

![Add Verizonlib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=Verizon&workspaceName=verizonlib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install Verizonlib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| environment | [`Environment`](README.md#environments) | The API environment. <br> **Default: `Environment.Production`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| thingspaceOauthCredentials | [`ThingspaceOauthCredentials`](doc/auth/oauth-2-client-credentials-grant.md) | The credential object for thingspaceOauth |
| vZM2mTokenCredentials | [`VZM2MTokenCredentials`](doc/auth/custom-header-signature.md) | The credential object for vZM2mToken |
| sessionTokenCredentials | [`SessionTokenCredentials`](doc/auth/custom-header-signature-1.md) | The credential object for sessionToken |
| thingspaceOauth1Credentials | [`ThingspaceOauth1Credentials`](doc/auth/oauth-2-client-credentials-grant-1.md) | The credential object for thingspaceOauth1 |

The API client can be initialized as follows:

### Code-Based Client Initialization

```ts
import { Client, Environment } from 'verizonlib';

const client = new Client({
  thingspaceOauthCredentials: {
    oauthClientId: 'OAuthClientId',
    oauthClientSecret: 'OAuthClientSecret'
  },
  vZM2mTokenCredentials: {
    'VZ-M2M-Token': 'VZ-M2M-Token'
  },
  sessionTokenCredentials: {
    'SessionToken': 'SessionToken'
  },
  thingspaceOauth1Credentials: {
    oauthClientId: 'OAuthClientId',
    oauthClientSecret: 'OAuthClientSecret'
  },
  timeout: 0,
  environment: Environment.Production,
});
```

### Configuration-Based Client Initialization

```ts
import * as path from 'path';
import * as fs from 'fs';
import { Client } from 'verizonlib';

// Provide absolute path for the configuration file
const absolutePath = path.resolve('./config.json');

// Read the configuration file content
const fileContent = fs.readFileSync(absolutePath, 'utf-8');

// Initialize client from JSON configuration content
const client = Client.fromJsonConfig(fileContent);
```

See the [Configuration-Based Client Initialization](doc/configuration-based-client-initialization.md) section for details.

### Environment-Based Client Initialization

```ts
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { Client } from 'verizonlib';

// Optional - Provide absolute path for the .env file
const absolutePath = path.resolve('./.env');

if (fs.existsSync(absolutePath)) {
  // Load environment variables from .env file
  dotenv.config({ path: absolutePath, override: true });
}

// Initialize client using environment variables
const client = Client.fromEnvironment(process.env);
```

See the [Environment-Based Client Initialization](doc/environment-based-client-initialization.md) section for details.

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| Production | **Default** |
| Staging | - |
| Dev | - |
| Qa | - |
| MockServerForLimitedAvailabilitySeeQuickStart | - |

## Authorization

This API uses the following authentication schemes.

* [`thingspace_oauth (OAuth 2 Client Credentials Grant)`](doc/auth/oauth-2-client-credentials-grant.md)
* [`VZ-M2M-Token (Custom Header Signature)`](doc/auth/custom-header-signature.md)
* [`sessionToken (Custom Header Signature)`](doc/auth/custom-header-signature-1.md)
* [`thingspace_oauth1 (OAuth 2 Client Credentials Grant)`](doc/auth/oauth-2-client-credentials-grant-1.md)

## List of APIs

* [Account Service Controller](doc/controllers/account-service-controller.md)
* [Intelligence Service Controller](doc/controllers/intelligence-service-controller.md)
* [Device Management](doc/controllers/device-management.md)
* [Device Groups](doc/controllers/device-groups.md)
* [Session Management](doc/controllers/session-management.md)
* [Connectivity Callbacks](doc/controllers/connectivity-callbacks.md)
* [Account Requests](doc/controllers/account-requests.md)
* [Service Plans](doc/controllers/service-plans.md)
* [Device Diagnostics](doc/controllers/device-diagnostics.md)
* [Device Monitoring](doc/controllers/device-monitoring.md)
* [Device Profile Management](doc/controllers/device-profile-management.md)
* [E UICC Device Profile Management](doc/controllers/e-uicc-device-profile-management.md)
* [Devices Locations](doc/controllers/devices-locations.md)
* [Devices Location Subscriptions](doc/controllers/devices-location-subscriptions.md)
* [Device Location Callbacks](doc/controllers/device-location-callbacks.md)
* [Usage Trigger Management](doc/controllers/usage-trigger-management.md)
* [Software Management Subscriptions V1](doc/controllers/software-management-subscriptions-v1.md)
* [Software Management Licenses V1](doc/controllers/software-management-licenses-v1.md)
* [Firmware V1](doc/controllers/firmware-v1.md)
* [Software Management Callbacks V1](doc/controllers/software-management-callbacks-v1.md)
* [Software Management Reports V1](doc/controllers/software-management-reports-v1.md)
* [Software Management Subscriptions V2](doc/controllers/software-management-subscriptions-v2.md)
* [Software Management Licenses V2](doc/controllers/software-management-licenses-v2.md)
* [Campaigns V2](doc/controllers/campaigns-v2.md)
* [Software Management Callbacks V2](doc/controllers/software-management-callbacks-v2.md)
* [Software Management Reports V2](doc/controllers/software-management-reports-v2.md)
* [Client Logging](doc/controllers/client-logging.md)
* [Server Logging](doc/controllers/server-logging.md)
* [Configuration Files](doc/controllers/configuration-files.md)
* [Software Management Subscriptions V3](doc/controllers/software-management-subscriptions-v3.md)
* [Software Management Licenses V3](doc/controllers/software-management-licenses-v3.md)
* [Campaigns V3](doc/controllers/campaigns-v3.md)
* [Software Management Reports V3](doc/controllers/software-management-reports-v3.md)
* [Firmware V3](doc/controllers/firmware-v3.md)
* [Account Devices](doc/controllers/account-devices.md)
* [Software Management Callbacks V3](doc/controllers/software-management-callbacks-v3.md)
* [SIM Securefor Io T Licenses](doc/controllers/sim-securefor-io-t-licenses.md)
* [Account Subscriptions](doc/controllers/account-subscriptions.md)
* [Diagnostics Subscriptions](doc/controllers/diagnostics-subscriptions.md)
* [Diagnostics Observations](doc/controllers/diagnostics-observations.md)
* [Diagnostics History](doc/controllers/diagnostics-history.md)
* [Diagnostics Settings](doc/controllers/diagnostics-settings.md)
* [Diagnostics Callbacks](doc/controllers/diagnostics-callbacks.md)
* [Diagnostics Factory Reset](doc/controllers/diagnostics-factory-reset.md)
* [Cloud Connector Subscriptions](doc/controllers/cloud-connector-subscriptions.md)
* [Cloud Connector Devices](doc/controllers/cloud-connector-devices.md)
* [HPL Device Management](doc/controllers/hpl-device-management.md)
* [Device Service Management](doc/controllers/device-service-management.md)
* [Device Reports](doc/controllers/device-reports.md)
* [Hyper Precise Location Callbacks](doc/controllers/hyper-precise-location-callbacks.md)
* [Device Credential Management](doc/controllers/device-credential-management.md)
* [Anomaly Settings](doc/controllers/anomaly-settings.md)
* [Anomaly Triggers](doc/controllers/anomaly-triggers.md)
* [Anomaly Triggers V2](doc/controllers/anomaly-triggers-v2.md)
* [Wireless Network Performance](doc/controllers/wireless-network-performance.md)
* [Managinge SIM Profiles](doc/controllers/managinge-sim-profiles.md)
* [Device SMS Messaging](doc/controllers/device-sms-messaging.md)
* [Device Actions](doc/controllers/device-actions.md)
* [Thing Space Qualityof Service API Actions](doc/controllers/thing-space-qualityof-service-api-actions.md)
* [Promotion Period Information](doc/controllers/promotion-period-information.md)
* [Retrievethe Triggers](doc/controllers/retrievethe-triggers.md)
* [Update Triggers](doc/controllers/update-triggers.md)
* [SIM Actions](doc/controllers/sim-actions.md)
* [Global Reporting](doc/controllers/global-reporting.md)
* [Retrieve Rate Plan List](doc/controllers/retrieve-rate-plan-list.md)
* [Create Price Plan Triggers](doc/controllers/create-price-plan-triggers.md)
* [Update Price Plan Triggers](doc/controllers/update-price-plan-triggers.md)
* [5G BI Device Actions](doc/controllers/5g-bi-device-actions.md)
* [Sensor Insights Sensors](doc/controllers/sensor-insights-sensors.md)
* [Sensor Insights Devices](doc/controllers/sensor-insights-devices.md)
* [Sensor Insights Gateways](doc/controllers/sensor-insights-gateways.md)
* [Sensor Insights Smart Alerts](doc/controllers/sensor-insights-smart-alerts.md)
* [Sensor Insights Rules](doc/controllers/sensor-insights-rules.md)
* [Sensor Insights Health Score](doc/controllers/sensor-insights-health-score.md)
* [Sensor Insights Notification Groups](doc/controllers/sensor-insights-notification-groups.md)
* [Sensor Insights Users](doc/controllers/sensor-insights-users.md)
* [Sensor Insights Device Profile](doc/controllers/sensor-insights-device-profile.md)
* [Sensor Insights Smart Alert Metrics](doc/controllers/sensor-insights-smart-alert-metrics.md)
* [Accounts](doc/controllers/accounts.md)
* [SMS](doc/controllers/sms.md)
* [Exclusions](doc/controllers/exclusions.md)
* [Billing](doc/controllers/billing.md)
* [Targets](doc/controllers/targets.md)
* [PWN](doc/controllers/pwn.md)
* [Device-Role-Controller](doc/controllers/device-role-controller.md)
* [ETX App Configuration](doc/controllers/etx-app-configuration.md)
* [ETX Registration](doc/controllers/etx-registration.md)
* [Map-Message-Controller](doc/controllers/map-message-controller.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](doc/http-client-options.md)
* [RetryConfiguration](doc/retry-configuration.md)
* [ProxySettings](doc/proxy-settings.md)
* [Configuration-Based Client Initialization](doc/configuration-based-client-initialization.md)
* [Environment-Based Client Initialization](doc/environment-based-client-initialization.md)

### HTTP

* [HttpRequest](doc/http-request.md)

### Utilities

* [ApiResponse](doc/api-response.md)
* [ApiError](doc/api-error.md)

