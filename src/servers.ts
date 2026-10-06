import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { ConfigurationError } from "./core/errors.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export const ServerEnvironment = {
  Production: "production",
  Staging: "staging",
  Dev: "dev",
  Qa: "qa",
  MockServerForLimitedAvailabilitySeeQuickStart: "mockServerForLimitedAvailabilitySeeQuickStart",
} as const;
export type ServerEnvironment = (typeof ServerEnvironment)[keyof typeof ServerEnvironment];

export type Servers = {
  hyperPreciseCredentials: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  impServer: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  thingspace: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  oAuthServer: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  m2M: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  deviceLocation: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  subscriptionServer: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  softwareManagementV1: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  softwareManagementV2: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  softwareManagementV3: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  deviceDiagnostics: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  cloudConnector: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  hyperPreciseLocation: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  services: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
  qualityOfService: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
};

const productionSchemas = {
  hyperPreciseCredentials: {
    baseUrl: s.of(s.defaulted(s.string(), "https://thingspace.verizon.com/api/auth/v1")),
  },
  impServer: { baseUrl: s.of(s.defaulted(s.string(), "https://imp.thingspace.verizon.com")) },
  thingspace: { baseUrl: s.of(s.defaulted(s.string(), "https://thingspace.verizon.com/api")) },
  oAuthServer: { baseUrl: s.of(s.defaulted(s.string(), "https://thingspace.verizon.com/api/ts/v1")) },
  m2M: { baseUrl: s.of(s.defaulted(s.string(), "https://thingspace.verizon.com/api/m2m")) },
  deviceLocation: { baseUrl: s.of(s.defaulted(s.string(), "https://thingspace.verizon.com/api/loc/v1")) },
  subscriptionServer: {
    baseUrl: s.of(s.defaulted(s.string(), "https://thingspace.verizon.com/api/subsc/v1")),
  },
  softwareManagementV1: {
    baseUrl: s.of(s.defaulted(s.string(), "https://thingspace.verizon.com/api/fota/v1")),
  },
  softwareManagementV2: {
    baseUrl: s.of(s.defaulted(s.string(), "https://thingspace.verizon.com/api/fota/v2")),
  },
  softwareManagementV3: {
    baseUrl: s.of(s.defaulted(s.string(), "https://thingspace.verizon.com/api/fota/v3")),
  },
  deviceDiagnostics: {
    baseUrl: s.of(s.defaulted(s.string(), "https://thingspace.verizon.com/api/diagnostics/v1")),
  },
  cloudConnector: { baseUrl: s.of(s.defaulted(s.string(), "https://thingspace.verizon.com/api/cc/v1")) },
  hyperPreciseLocation: {
    baseUrl: s.of(s.defaulted(s.string(), "https://thingspace.verizon.com/api/hyper-precise/v1")),
  },
  services: { baseUrl: s.of(s.defaulted(s.string(), "https://5gedge.verizon.com/api/mec/services")) },
  qualityOfService: {
    baseUrl: s.of(s.defaulted(s.string(), "https://thingspace.verizon.com/api/m2m/v1/devices")),
  },
};

const stagingSchemas = {
  hyperPreciseCredentials: {
    baseUrl: s.of(s.defaulted(s.string(), "https://staging.thingspace.verizon.com/api/auth/v1")),
  },
  impServer: { baseUrl: s.of(s.defaulted(s.string(), "https://imp-staging.thingspace.verizon.com")) },
  thingspace: { baseUrl: s.of(s.defaulted(s.string(), "https://staging.thingspace.verizon.com/api")) },
  oAuthServer: { baseUrl: s.of(s.defaulted(s.string(), "https://staging.thingspace.verizon.com/api/ts/v1")) },
  m2M: { baseUrl: s.of(s.defaulted(s.string(), "https://staging.thingspace.verizon.com/api/m2m")) },
  deviceLocation: {
    baseUrl: s.of(s.defaulted(s.string(), "https://staging.thingspace.verizon.com/api/loc/v1")),
  },
  subscriptionServer: {
    baseUrl: s.of(s.defaulted(s.string(), "https://staging.thingspace.verizon.com/api/subsc/v1")),
  },
  softwareManagementV1: {
    baseUrl: s.of(s.defaulted(s.string(), "https://staging.thingspace.verizon.com/api/fota/v1")),
  },
  softwareManagementV2: {
    baseUrl: s.of(s.defaulted(s.string(), "https://staging.thingspace.verizon.com/api/fota/v2")),
  },
  softwareManagementV3: {
    baseUrl: s.of(s.defaulted(s.string(), "https://staging.thingspace.verizon.com/api/fota/v3")),
  },
  deviceDiagnostics: {
    baseUrl: s.of(s.defaulted(s.string(), "https://staging.thingspace.verizon.com/api/diagnostics/v1")),
  },
  cloudConnector: {
    baseUrl: s.of(s.defaulted(s.string(), "https://staging.thingspace.verizon.com/api/cc/v1")),
  },
  hyperPreciseLocation: {
    baseUrl: s.of(s.defaulted(s.string(), "https://staging.thingspace.verizon.com/api/hyper-precise/v1")),
  },
  services: { baseUrl: s.of(s.defaulted(s.string(), "https://staging.5gedge.verizon.com/api/mec/services")) },
  qualityOfService: {
    baseUrl: s.of(s.defaulted(s.string(), "https://staging.thingspace.verizon.com/api/m2m/v1/devices")),
  },
};

const devSchemas = {
  hyperPreciseCredentials: {
    baseUrl: s.of(s.defaulted(s.string(), "https://staging.thingspace.verizon.com/api/auth/v1")),
  },
  impServer: {
    baseUrl: s.of(s.defaulted(s.string(), "https://devmanagement-staging.imp.thingspace.verizon.com")),
  },
  thingspace: {
    baseUrl: s.of(s.defaulted(s.string(), "https://devmanagement-staging.thingspace.verizon.com/api")),
  },
  oAuthServer: {
    baseUrl: s.of(s.defaulted(s.string(), "https://devmanagement-staging.thingspace.verizon.com:80/ts/v1")),
  },
  m2M: {
    baseUrl: s.of(s.defaulted(s.string(), "https://devmanagement-staging.thingspace.verizon.com:80/m2m")),
  },
  deviceLocation: {
    baseUrl: s.of(s.defaulted(s.string(), "https://devmanagement-staging.thingspace.verizon.com:80/loc/v1")),
  },
  subscriptionServer: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://devmanagement-staging.thingspace.verizon.com:80/subsc/v1"),
    ),
  },
  softwareManagementV1: {
    baseUrl: s.of(s.defaulted(s.string(), "https://devmanagement-staging.thingspace.verizon.com:80/fota/v1")),
  },
  softwareManagementV2: {
    baseUrl: s.of(s.defaulted(s.string(), "https://devmanagement-staging.thingspace.verizon.com:80/fota/v2")),
  },
  softwareManagementV3: {
    baseUrl: s.of(s.defaulted(s.string(), "https://devmanagement-staging.thingspace.verizon.com:80/fota/v3")),
  },
  deviceDiagnostics: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://devmanagement-staging.thingspace.verizon.com:80/diagnostics/v1"),
    ),
  },
  cloudConnector: {
    baseUrl: s.of(s.defaulted(s.string(), "https://devmanagement-staging.thingspace.verizon.com:80/cc/v1")),
  },
  hyperPreciseLocation: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://devmanagement-staging.thingspace.verizon.com:80/hyper-precise/v1"),
    ),
  },
  services: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://devmanagement-staging.5gedge.verizon.com:80/mec/services"),
    ),
  },
  qualityOfService: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://devmanagement-staging.thingspace.verizon.com/api/m2m/v1/devices"),
    ),
  },
};

const qaSchemas = {
  hyperPreciseCredentials: {
    baseUrl: s.of(s.defaulted(s.string(), "https://thingspace.verizon.com/api/auth/v1")),
  },
  impServer: {
    baseUrl: s.of(s.defaulted(s.string(), "https://tsd-nginx-qa-us-east-1.imp.thingspace.verizon.com")),
  },
  thingspace: {
    baseUrl: s.of(s.defaulted(s.string(), "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api")),
  },
  oAuthServer: {
    baseUrl: s.of(s.defaulted(s.string(), "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/ts/v1")),
  },
  m2M: {
    baseUrl: s.of(s.defaulted(s.string(), "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/m2m")),
  },
  deviceLocation: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/loc/v1"),
    ),
  },
  subscriptionServer: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/subsc/v1"),
    ),
  },
  softwareManagementV1: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/fota/v1"),
    ),
  },
  softwareManagementV2: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/fota/v2"),
    ),
  },
  softwareManagementV3: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/fota/v3"),
    ),
  },
  deviceDiagnostics: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/diagnostics/v1"),
    ),
  },
  cloudConnector: {
    baseUrl: s.of(s.defaulted(s.string(), "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/cc/v1")),
  },
  hyperPreciseLocation: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/hyper-precise/v1"),
    ),
  },
  services: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://tsd-nginx-qa-us-east-1.5gedge.verizon.com/api/mec/services"),
    ),
  },
  qualityOfService: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/m2m/v1/devices"),
    ),
  },
};

const mockServerForLimitedAvailabilitySeeQuickStartSchemas = {
  hyperPreciseCredentials: {
    baseUrl: s.of(s.defaulted(s.string(), "https://staging.thingspace.verizon.com/api/auth/v1")),
  },
  impServer: { baseUrl: s.of(s.defaulted(s.string(), "https://mock-staging.thingspace.verizon.com")) },
  thingspace: { baseUrl: s.of(s.defaulted(s.string(), "https://mock-staging.thingspace.verizon.com/api")) },
  oAuthServer: {
    baseUrl: s.of(s.defaulted(s.string(), "https://mock-staging.thingspace.verizon.com/api/ts/v1")),
  },
  m2M: { baseUrl: s.of(s.defaulted(s.string(), "https://mock-staging.thingspace.verizon.com/api/m2m")) },
  deviceLocation: {
    baseUrl: s.of(s.defaulted(s.string(), "https://mock-staging.thingspace.verizon.com/api/loc/v1")),
  },
  subscriptionServer: {
    baseUrl: s.of(s.defaulted(s.string(), "https://mock-staging.thingspace.verizon.com/api/subsc/v1")),
  },
  softwareManagementV1: {
    baseUrl: s.of(s.defaulted(s.string(), "https://mock-staging.thingspace.verizon.com/api/fota/v1")),
  },
  softwareManagementV2: {
    baseUrl: s.of(s.defaulted(s.string(), "https://mock-staging.thingspace.verizon.com/api/fota/v2")),
  },
  softwareManagementV3: {
    baseUrl: s.of(s.defaulted(s.string(), "https://mock-staging.thingspace.verizon.com/api/fota/v3")),
  },
  deviceDiagnostics: {
    baseUrl: s.of(s.defaulted(s.string(), "https://mock-staging.thingspace.verizon.com/api/diagnostics/v1")),
  },
  cloudConnector: {
    baseUrl: s.of(s.defaulted(s.string(), "https://mock-staging.thingspace.verizon.com/api/cc/v1")),
  },
  hyperPreciseLocation: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://mock-staging.thingspace.verizon.com/api/hyper-precise/v1"),
    ),
  },
  services: {
    baseUrl: s.of(s.defaulted(s.string(), "https://mock-staging.thingspace.verizon.com/api/mec/services")),
  },
  qualityOfService: {
    baseUrl: s.of(s.defaulted(s.string(), "https://mock-staging.thingspace.verizon.com/api/m2m/v1/devices")),
  },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    hyperPreciseCredentials: resolveBaseUrl(hyperPreciseCredentialsServer(options)),
    impServer: resolveBaseUrl(impServerServer(options)),
    thingspace: resolveBaseUrl(thingspaceServer(options)),
    oAuthServer: resolveBaseUrl(oAuthServerServer(options)),
    m2M: resolveBaseUrl(m2MServer(options)),
    deviceLocation: resolveBaseUrl(deviceLocationServer(options)),
    subscriptionServer: resolveBaseUrl(subscriptionServerServer(options)),
    softwareManagementV1: resolveBaseUrl(softwareManagementV1Server(options)),
    softwareManagementV2: resolveBaseUrl(softwareManagementV2Server(options)),
    softwareManagementV3: resolveBaseUrl(softwareManagementV3Server(options)),
    deviceDiagnostics: resolveBaseUrl(deviceDiagnosticsServer(options)),
    cloudConnector: resolveBaseUrl(cloudConnectorServer(options)),
    hyperPreciseLocation: resolveBaseUrl(hyperPreciseLocationServer(options)),
    services: resolveBaseUrl(servicesServer(options)),
    qualityOfService: resolveBaseUrl(qualityOfServiceServer(options)),
  };
  return {
    hyperPreciseCredentials: (subPath) => ({ baseUrl: base.hyperPreciseCredentials, subPath }),
    impServer: (subPath) => ({ baseUrl: base.impServer, subPath }),
    thingspace: (subPath) => ({ baseUrl: base.thingspace, subPath }),
    oAuthServer: (subPath) => ({ baseUrl: base.oAuthServer, subPath }),
    m2M: (subPath) => ({ baseUrl: base.m2M, subPath }),
    deviceLocation: (subPath) => ({ baseUrl: base.deviceLocation, subPath }),
    subscriptionServer: (subPath) => ({ baseUrl: base.subscriptionServer, subPath }),
    softwareManagementV1: (subPath) => ({ baseUrl: base.softwareManagementV1, subPath }),
    softwareManagementV2: (subPath) => ({ baseUrl: base.softwareManagementV2, subPath }),
    softwareManagementV3: (subPath) => ({ baseUrl: base.softwareManagementV3, subPath }),
    deviceDiagnostics: (subPath) => ({ baseUrl: base.deviceDiagnostics, subPath }),
    cloudConnector: (subPath) => ({ baseUrl: base.cloudConnector, subPath }),
    hyperPreciseLocation: (subPath) => ({ baseUrl: base.hyperPreciseLocation, subPath }),
    services: (subPath) => ({ baseUrl: base.services, subPath }),
    qualityOfService: (subPath) => ({ baseUrl: base.qualityOfService, subPath }),
  };
}

function hyperPreciseCredentialsServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.hyperPreciseCredentials.baseUrl.decode(
          options.serverOptions?.hyperPreciseCredentials?.baseUrl,
        ),
      };
    case ServerEnvironment.Staging:
      return {
        baseUrl: stagingSchemas.hyperPreciseCredentials.baseUrl.decode(
          options.serverOptions?.hyperPreciseCredentials?.baseUrl,
        ),
      };
    case ServerEnvironment.Dev:
      return {
        baseUrl: devSchemas.hyperPreciseCredentials.baseUrl.decode(
          options.serverOptions?.hyperPreciseCredentials?.baseUrl,
        ),
      };
    case ServerEnvironment.Qa:
      return {
        baseUrl: qaSchemas.hyperPreciseCredentials.baseUrl.decode(
          options.serverOptions?.hyperPreciseCredentials?.baseUrl,
        ),
      };
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart:
      return {
        baseUrl: mockServerForLimitedAvailabilitySeeQuickStartSchemas.hyperPreciseCredentials.baseUrl.decode(
          options.serverOptions?.hyperPreciseCredentials?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function impServerServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.impServer.baseUrl.decode(options.serverOptions?.impServer?.baseUrl),
      };
    case ServerEnvironment.Staging:
      return { baseUrl: stagingSchemas.impServer.baseUrl.decode(options.serverOptions?.impServer?.baseUrl) };
    case ServerEnvironment.Dev:
      return { baseUrl: devSchemas.impServer.baseUrl.decode(options.serverOptions?.impServer?.baseUrl) };
    case ServerEnvironment.Qa:
      return { baseUrl: qaSchemas.impServer.baseUrl.decode(options.serverOptions?.impServer?.baseUrl) };
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart:
      return {
        baseUrl: mockServerForLimitedAvailabilitySeeQuickStartSchemas.impServer.baseUrl.decode(
          options.serverOptions?.impServer?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function thingspaceServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.thingspace.baseUrl.decode(options.serverOptions?.thingspace?.baseUrl),
      };
    case ServerEnvironment.Staging:
      return {
        baseUrl: stagingSchemas.thingspace.baseUrl.decode(options.serverOptions?.thingspace?.baseUrl),
      };
    case ServerEnvironment.Dev:
      return { baseUrl: devSchemas.thingspace.baseUrl.decode(options.serverOptions?.thingspace?.baseUrl) };
    case ServerEnvironment.Qa:
      return { baseUrl: qaSchemas.thingspace.baseUrl.decode(options.serverOptions?.thingspace?.baseUrl) };
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart:
      return {
        baseUrl: mockServerForLimitedAvailabilitySeeQuickStartSchemas.thingspace.baseUrl.decode(
          options.serverOptions?.thingspace?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function oAuthServerServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.oAuthServer.baseUrl.decode(options.serverOptions?.oAuthServer?.baseUrl),
      };
    case ServerEnvironment.Staging:
      return {
        baseUrl: stagingSchemas.oAuthServer.baseUrl.decode(options.serverOptions?.oAuthServer?.baseUrl),
      };
    case ServerEnvironment.Dev:
      return { baseUrl: devSchemas.oAuthServer.baseUrl.decode(options.serverOptions?.oAuthServer?.baseUrl) };
    case ServerEnvironment.Qa:
      return { baseUrl: qaSchemas.oAuthServer.baseUrl.decode(options.serverOptions?.oAuthServer?.baseUrl) };
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart:
      return {
        baseUrl: mockServerForLimitedAvailabilitySeeQuickStartSchemas.oAuthServer.baseUrl.decode(
          options.serverOptions?.oAuthServer?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function m2MServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return { baseUrl: productionSchemas.m2M.baseUrl.decode(options.serverOptions?.m2M?.baseUrl) };
    case ServerEnvironment.Staging:
      return { baseUrl: stagingSchemas.m2M.baseUrl.decode(options.serverOptions?.m2M?.baseUrl) };
    case ServerEnvironment.Dev:
      return { baseUrl: devSchemas.m2M.baseUrl.decode(options.serverOptions?.m2M?.baseUrl) };
    case ServerEnvironment.Qa:
      return { baseUrl: qaSchemas.m2M.baseUrl.decode(options.serverOptions?.m2M?.baseUrl) };
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart:
      return {
        baseUrl: mockServerForLimitedAvailabilitySeeQuickStartSchemas.m2M.baseUrl.decode(
          options.serverOptions?.m2M?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function deviceLocationServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.deviceLocation.baseUrl.decode(
          options.serverOptions?.deviceLocation?.baseUrl,
        ),
      };
    case ServerEnvironment.Staging:
      return {
        baseUrl: stagingSchemas.deviceLocation.baseUrl.decode(options.serverOptions?.deviceLocation?.baseUrl),
      };
    case ServerEnvironment.Dev:
      return {
        baseUrl: devSchemas.deviceLocation.baseUrl.decode(options.serverOptions?.deviceLocation?.baseUrl),
      };
    case ServerEnvironment.Qa:
      return {
        baseUrl: qaSchemas.deviceLocation.baseUrl.decode(options.serverOptions?.deviceLocation?.baseUrl),
      };
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart:
      return {
        baseUrl: mockServerForLimitedAvailabilitySeeQuickStartSchemas.deviceLocation.baseUrl.decode(
          options.serverOptions?.deviceLocation?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function subscriptionServerServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.subscriptionServer.baseUrl.decode(
          options.serverOptions?.subscriptionServer?.baseUrl,
        ),
      };
    case ServerEnvironment.Staging:
      return {
        baseUrl: stagingSchemas.subscriptionServer.baseUrl.decode(
          options.serverOptions?.subscriptionServer?.baseUrl,
        ),
      };
    case ServerEnvironment.Dev:
      return {
        baseUrl: devSchemas.subscriptionServer.baseUrl.decode(
          options.serverOptions?.subscriptionServer?.baseUrl,
        ),
      };
    case ServerEnvironment.Qa:
      return {
        baseUrl: qaSchemas.subscriptionServer.baseUrl.decode(
          options.serverOptions?.subscriptionServer?.baseUrl,
        ),
      };
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart:
      return {
        baseUrl: mockServerForLimitedAvailabilitySeeQuickStartSchemas.subscriptionServer.baseUrl.decode(
          options.serverOptions?.subscriptionServer?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function softwareManagementV1Server(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.softwareManagementV1.baseUrl.decode(
          options.serverOptions?.softwareManagementV1?.baseUrl,
        ),
      };
    case ServerEnvironment.Staging:
      return {
        baseUrl: stagingSchemas.softwareManagementV1.baseUrl.decode(
          options.serverOptions?.softwareManagementV1?.baseUrl,
        ),
      };
    case ServerEnvironment.Dev:
      return {
        baseUrl: devSchemas.softwareManagementV1.baseUrl.decode(
          options.serverOptions?.softwareManagementV1?.baseUrl,
        ),
      };
    case ServerEnvironment.Qa:
      return {
        baseUrl: qaSchemas.softwareManagementV1.baseUrl.decode(
          options.serverOptions?.softwareManagementV1?.baseUrl,
        ),
      };
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart:
      return {
        baseUrl: mockServerForLimitedAvailabilitySeeQuickStartSchemas.softwareManagementV1.baseUrl.decode(
          options.serverOptions?.softwareManagementV1?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function softwareManagementV2Server(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.softwareManagementV2.baseUrl.decode(
          options.serverOptions?.softwareManagementV2?.baseUrl,
        ),
      };
    case ServerEnvironment.Staging:
      return {
        baseUrl: stagingSchemas.softwareManagementV2.baseUrl.decode(
          options.serverOptions?.softwareManagementV2?.baseUrl,
        ),
      };
    case ServerEnvironment.Dev:
      return {
        baseUrl: devSchemas.softwareManagementV2.baseUrl.decode(
          options.serverOptions?.softwareManagementV2?.baseUrl,
        ),
      };
    case ServerEnvironment.Qa:
      return {
        baseUrl: qaSchemas.softwareManagementV2.baseUrl.decode(
          options.serverOptions?.softwareManagementV2?.baseUrl,
        ),
      };
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart:
      return {
        baseUrl: mockServerForLimitedAvailabilitySeeQuickStartSchemas.softwareManagementV2.baseUrl.decode(
          options.serverOptions?.softwareManagementV2?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function softwareManagementV3Server(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.softwareManagementV3.baseUrl.decode(
          options.serverOptions?.softwareManagementV3?.baseUrl,
        ),
      };
    case ServerEnvironment.Staging:
      return {
        baseUrl: stagingSchemas.softwareManagementV3.baseUrl.decode(
          options.serverOptions?.softwareManagementV3?.baseUrl,
        ),
      };
    case ServerEnvironment.Dev:
      return {
        baseUrl: devSchemas.softwareManagementV3.baseUrl.decode(
          options.serverOptions?.softwareManagementV3?.baseUrl,
        ),
      };
    case ServerEnvironment.Qa:
      return {
        baseUrl: qaSchemas.softwareManagementV3.baseUrl.decode(
          options.serverOptions?.softwareManagementV3?.baseUrl,
        ),
      };
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart:
      return {
        baseUrl: mockServerForLimitedAvailabilitySeeQuickStartSchemas.softwareManagementV3.baseUrl.decode(
          options.serverOptions?.softwareManagementV3?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function deviceDiagnosticsServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.deviceDiagnostics.baseUrl.decode(
          options.serverOptions?.deviceDiagnostics?.baseUrl,
        ),
      };
    case ServerEnvironment.Staging:
      return {
        baseUrl: stagingSchemas.deviceDiagnostics.baseUrl.decode(
          options.serverOptions?.deviceDiagnostics?.baseUrl,
        ),
      };
    case ServerEnvironment.Dev:
      return {
        baseUrl: devSchemas.deviceDiagnostics.baseUrl.decode(
          options.serverOptions?.deviceDiagnostics?.baseUrl,
        ),
      };
    case ServerEnvironment.Qa:
      return {
        baseUrl: qaSchemas.deviceDiagnostics.baseUrl.decode(
          options.serverOptions?.deviceDiagnostics?.baseUrl,
        ),
      };
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart:
      return {
        baseUrl: mockServerForLimitedAvailabilitySeeQuickStartSchemas.deviceDiagnostics.baseUrl.decode(
          options.serverOptions?.deviceDiagnostics?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function cloudConnectorServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.cloudConnector.baseUrl.decode(
          options.serverOptions?.cloudConnector?.baseUrl,
        ),
      };
    case ServerEnvironment.Staging:
      return {
        baseUrl: stagingSchemas.cloudConnector.baseUrl.decode(options.serverOptions?.cloudConnector?.baseUrl),
      };
    case ServerEnvironment.Dev:
      return {
        baseUrl: devSchemas.cloudConnector.baseUrl.decode(options.serverOptions?.cloudConnector?.baseUrl),
      };
    case ServerEnvironment.Qa:
      return {
        baseUrl: qaSchemas.cloudConnector.baseUrl.decode(options.serverOptions?.cloudConnector?.baseUrl),
      };
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart:
      return {
        baseUrl: mockServerForLimitedAvailabilitySeeQuickStartSchemas.cloudConnector.baseUrl.decode(
          options.serverOptions?.cloudConnector?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function hyperPreciseLocationServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.hyperPreciseLocation.baseUrl.decode(
          options.serverOptions?.hyperPreciseLocation?.baseUrl,
        ),
      };
    case ServerEnvironment.Staging:
      return {
        baseUrl: stagingSchemas.hyperPreciseLocation.baseUrl.decode(
          options.serverOptions?.hyperPreciseLocation?.baseUrl,
        ),
      };
    case ServerEnvironment.Dev:
      return {
        baseUrl: devSchemas.hyperPreciseLocation.baseUrl.decode(
          options.serverOptions?.hyperPreciseLocation?.baseUrl,
        ),
      };
    case ServerEnvironment.Qa:
      return {
        baseUrl: qaSchemas.hyperPreciseLocation.baseUrl.decode(
          options.serverOptions?.hyperPreciseLocation?.baseUrl,
        ),
      };
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart:
      return {
        baseUrl: mockServerForLimitedAvailabilitySeeQuickStartSchemas.hyperPreciseLocation.baseUrl.decode(
          options.serverOptions?.hyperPreciseLocation?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function servicesServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return { baseUrl: productionSchemas.services.baseUrl.decode(options.serverOptions?.services?.baseUrl) };
    case ServerEnvironment.Staging:
      return { baseUrl: stagingSchemas.services.baseUrl.decode(options.serverOptions?.services?.baseUrl) };
    case ServerEnvironment.Dev:
      return { baseUrl: devSchemas.services.baseUrl.decode(options.serverOptions?.services?.baseUrl) };
    case ServerEnvironment.Qa:
      return { baseUrl: qaSchemas.services.baseUrl.decode(options.serverOptions?.services?.baseUrl) };
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart:
      return {
        baseUrl: mockServerForLimitedAvailabilitySeeQuickStartSchemas.services.baseUrl.decode(
          options.serverOptions?.services?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function qualityOfServiceServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.qualityOfService.baseUrl.decode(
          options.serverOptions?.qualityOfService?.baseUrl,
        ),
      };
    case ServerEnvironment.Staging:
      return {
        baseUrl: stagingSchemas.qualityOfService.baseUrl.decode(
          options.serverOptions?.qualityOfService?.baseUrl,
        ),
      };
    case ServerEnvironment.Dev:
      return {
        baseUrl: devSchemas.qualityOfService.baseUrl.decode(options.serverOptions?.qualityOfService?.baseUrl),
      };
    case ServerEnvironment.Qa:
      return {
        baseUrl: qaSchemas.qualityOfService.baseUrl.decode(options.serverOptions?.qualityOfService?.baseUrl),
      };
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart:
      return {
        baseUrl: mockServerForLimitedAvailabilitySeeQuickStartSchemas.qualityOfService.baseUrl.decode(
          options.serverOptions?.qualityOfService?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new ConfigurationError(`Unknown server environment: ${String(environment)}`);
}
