import type { UrlTemplate } from "./core/api-request.js";
import { SdkError } from "./core/errors.js";

export const ServerEnvironment = {
  Production: "production",
  Staging: "staging",
  Dev: "dev",
  Qa: "qa",
  MockServerForLimitedAvailabilitySeeQuickStart: "mockServerForLimitedAvailabilitySeeQuickStart",
} as const;
export type ServerEnvironment = (typeof ServerEnvironment)[keyof typeof ServerEnvironment];

export type HyperPreciseCredentialsServerOptions = {
  production?: { baseUrl?: string };
  staging?: { baseUrl?: string };
  dev?: { baseUrl?: string };
  qa?: { baseUrl?: string };
  mockServerForLimitedAvailabilitySeeQuickStart?: { baseUrl?: string };
};

export type ImpServerServerOptions = {
  production?: { baseUrl?: string };
  staging?: { baseUrl?: string };
  dev?: { baseUrl?: string };
  qa?: { baseUrl?: string };
  mockServerForLimitedAvailabilitySeeQuickStart?: { baseUrl?: string };
};

export type ThingspaceServerOptions = {
  production?: { baseUrl?: string };
  staging?: { baseUrl?: string };
  dev?: { baseUrl?: string };
  qa?: { baseUrl?: string };
  mockServerForLimitedAvailabilitySeeQuickStart?: { baseUrl?: string };
};

export type OAuthServerServerOptions = {
  production?: { baseUrl?: string };
  staging?: { baseUrl?: string };
  dev?: { baseUrl?: string };
  qa?: { baseUrl?: string };
  mockServerForLimitedAvailabilitySeeQuickStart?: { baseUrl?: string };
};

export type M2MServerOptions = {
  production?: { baseUrl?: string };
  staging?: { baseUrl?: string };
  dev?: { baseUrl?: string };
  qa?: { baseUrl?: string };
  mockServerForLimitedAvailabilitySeeQuickStart?: { baseUrl?: string };
};

export type DeviceLocationServerOptions = {
  production?: { baseUrl?: string };
  staging?: { baseUrl?: string };
  dev?: { baseUrl?: string };
  qa?: { baseUrl?: string };
  mockServerForLimitedAvailabilitySeeQuickStart?: { baseUrl?: string };
};

export type SubscriptionServerServerOptions = {
  production?: { baseUrl?: string };
  staging?: { baseUrl?: string };
  dev?: { baseUrl?: string };
  qa?: { baseUrl?: string };
  mockServerForLimitedAvailabilitySeeQuickStart?: { baseUrl?: string };
};

export type SoftwareManagementV1ServerOptions = {
  production?: { baseUrl?: string };
  staging?: { baseUrl?: string };
  dev?: { baseUrl?: string };
  qa?: { baseUrl?: string };
  mockServerForLimitedAvailabilitySeeQuickStart?: { baseUrl?: string };
};

export type SoftwareManagementV2ServerOptions = {
  production?: { baseUrl?: string };
  staging?: { baseUrl?: string };
  dev?: { baseUrl?: string };
  qa?: { baseUrl?: string };
  mockServerForLimitedAvailabilitySeeQuickStart?: { baseUrl?: string };
};

export type SoftwareManagementV3ServerOptions = {
  production?: { baseUrl?: string };
  staging?: { baseUrl?: string };
  dev?: { baseUrl?: string };
  qa?: { baseUrl?: string };
  mockServerForLimitedAvailabilitySeeQuickStart?: { baseUrl?: string };
};

export type DeviceDiagnosticsServerOptions = {
  production?: { baseUrl?: string };
  staging?: { baseUrl?: string };
  dev?: { baseUrl?: string };
  qa?: { baseUrl?: string };
  mockServerForLimitedAvailabilitySeeQuickStart?: { baseUrl?: string };
};

export type CloudConnectorServerOptions = {
  production?: { baseUrl?: string };
  staging?: { baseUrl?: string };
  dev?: { baseUrl?: string };
  qa?: { baseUrl?: string };
  mockServerForLimitedAvailabilitySeeQuickStart?: { baseUrl?: string };
};

export type HyperPreciseLocationServerOptions = {
  production?: { baseUrl?: string };
  staging?: { baseUrl?: string };
  dev?: { baseUrl?: string };
  qa?: { baseUrl?: string };
  mockServerForLimitedAvailabilitySeeQuickStart?: { baseUrl?: string };
};

export type ServicesServerOptions = {
  production?: { baseUrl?: string };
  staging?: { baseUrl?: string };
  dev?: { baseUrl?: string };
  qa?: { baseUrl?: string };
  mockServerForLimitedAvailabilitySeeQuickStart?: { baseUrl?: string };
};

export type QualityOfServiceServerOptions = {
  production?: { baseUrl?: string };
  staging?: { baseUrl?: string };
  dev?: { baseUrl?: string };
  qa?: { baseUrl?: string };
  mockServerForLimitedAvailabilitySeeQuickStart?: { baseUrl?: string };
};

export type ServerOptions = {
  hyperPreciseCredentials?: HyperPreciseCredentialsServerOptions;
  impServer?: ImpServerServerOptions;
  thingspace?: ThingspaceServerOptions;
  oAuthServer?: OAuthServerServerOptions;
  m2M?: M2MServerOptions;
  deviceLocation?: DeviceLocationServerOptions;
  subscriptionServer?: SubscriptionServerServerOptions;
  softwareManagementV1?: SoftwareManagementV1ServerOptions;
  softwareManagementV2?: SoftwareManagementV2ServerOptions;
  softwareManagementV3?: SoftwareManagementV3ServerOptions;
  deviceDiagnostics?: DeviceDiagnosticsServerOptions;
  cloudConnector?: CloudConnectorServerOptions;
  hyperPreciseLocation?: HyperPreciseLocationServerOptions;
  services?: ServicesServerOptions;
  qualityOfService?: QualityOfServiceServerOptions;
};

export type Servers = {
  hyperPreciseCredentials: (subPath: string) => UrlTemplate;
  impServer: (subPath: string) => UrlTemplate;
  thingspace: (subPath: string) => UrlTemplate;
  oAuthServer: (subPath: string) => UrlTemplate;
  m2M: (subPath: string) => UrlTemplate;
  deviceLocation: (subPath: string) => UrlTemplate;
  subscriptionServer: (subPath: string) => UrlTemplate;
  softwareManagementV1: (subPath: string) => UrlTemplate;
  softwareManagementV2: (subPath: string) => UrlTemplate;
  softwareManagementV3: (subPath: string) => UrlTemplate;
  deviceDiagnostics: (subPath: string) => UrlTemplate;
  cloudConnector: (subPath: string) => UrlTemplate;
  hyperPreciseLocation: (subPath: string) => UrlTemplate;
  services: (subPath: string) => UrlTemplate;
  qualityOfService: (subPath: string) => UrlTemplate;
};

export const DEFAULT_SERVER_OPTIONS = {
  hyperPreciseCredentials: {
    production: { baseUrl: "https://thingspace.verizon.com/api/auth/v1" },
    staging: { baseUrl: "https://staging.thingspace.verizon.com/api/auth/v1" },
    dev: { baseUrl: "https://staging.thingspace.verizon.com/api/auth/v1" },
    qa: { baseUrl: "https://thingspace.verizon.com/api/auth/v1" },
    mockServerForLimitedAvailabilitySeeQuickStart: {
      baseUrl: "https://staging.thingspace.verizon.com/api/auth/v1",
    },
  },
  impServer: {
    production: { baseUrl: "https://imp.thingspace.verizon.com" },
    staging: { baseUrl: "https://imp-staging.thingspace.verizon.com" },
    dev: { baseUrl: "https://devmanagement-staging.imp.thingspace.verizon.com" },
    qa: { baseUrl: "https://tsd-nginx-qa-us-east-1.imp.thingspace.verizon.com" },
    mockServerForLimitedAvailabilitySeeQuickStart: { baseUrl: "https://mock-staging.thingspace.verizon.com" },
  },
  thingspace: {
    production: { baseUrl: "https://thingspace.verizon.com/api" },
    staging: { baseUrl: "https://staging.thingspace.verizon.com/api" },
    dev: { baseUrl: "https://devmanagement-staging.thingspace.verizon.com/api" },
    qa: { baseUrl: "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api" },
    mockServerForLimitedAvailabilitySeeQuickStart: {
      baseUrl: "https://mock-staging.thingspace.verizon.com/api",
    },
  },
  oAuthServer: {
    production: { baseUrl: "https://thingspace.verizon.com/api/ts/v1" },
    staging: { baseUrl: "https://staging.thingspace.verizon.com/api/ts/v1" },
    dev: { baseUrl: "https://devmanagement-staging.thingspace.verizon.com:80/ts/v1" },
    qa: { baseUrl: "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/ts/v1" },
    mockServerForLimitedAvailabilitySeeQuickStart: {
      baseUrl: "https://mock-staging.thingspace.verizon.com/api/ts/v1",
    },
  },
  m2M: {
    production: { baseUrl: "https://thingspace.verizon.com/api/m2m" },
    staging: { baseUrl: "https://staging.thingspace.verizon.com/api/m2m" },
    dev: { baseUrl: "https://devmanagement-staging.thingspace.verizon.com:80/m2m" },
    qa: { baseUrl: "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/m2m" },
    mockServerForLimitedAvailabilitySeeQuickStart: {
      baseUrl: "https://mock-staging.thingspace.verizon.com/api/m2m",
    },
  },
  deviceLocation: {
    production: { baseUrl: "https://thingspace.verizon.com/api/loc/v1" },
    staging: { baseUrl: "https://staging.thingspace.verizon.com/api/loc/v1" },
    dev: { baseUrl: "https://devmanagement-staging.thingspace.verizon.com:80/loc/v1" },
    qa: { baseUrl: "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/loc/v1" },
    mockServerForLimitedAvailabilitySeeQuickStart: {
      baseUrl: "https://mock-staging.thingspace.verizon.com/api/loc/v1",
    },
  },
  subscriptionServer: {
    production: { baseUrl: "https://thingspace.verizon.com/api/subsc/v1" },
    staging: { baseUrl: "https://staging.thingspace.verizon.com/api/subsc/v1" },
    dev: { baseUrl: "https://devmanagement-staging.thingspace.verizon.com:80/subsc/v1" },
    qa: { baseUrl: "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/subsc/v1" },
    mockServerForLimitedAvailabilitySeeQuickStart: {
      baseUrl: "https://mock-staging.thingspace.verizon.com/api/subsc/v1",
    },
  },
  softwareManagementV1: {
    production: { baseUrl: "https://thingspace.verizon.com/api/fota/v1" },
    staging: { baseUrl: "https://staging.thingspace.verizon.com/api/fota/v1" },
    dev: { baseUrl: "https://devmanagement-staging.thingspace.verizon.com:80/fota/v1" },
    qa: { baseUrl: "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/fota/v1" },
    mockServerForLimitedAvailabilitySeeQuickStart: {
      baseUrl: "https://mock-staging.thingspace.verizon.com/api/fota/v1",
    },
  },
  softwareManagementV2: {
    production: { baseUrl: "https://thingspace.verizon.com/api/fota/v2" },
    staging: { baseUrl: "https://staging.thingspace.verizon.com/api/fota/v2" },
    dev: { baseUrl: "https://devmanagement-staging.thingspace.verizon.com:80/fota/v2" },
    qa: { baseUrl: "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/fota/v2" },
    mockServerForLimitedAvailabilitySeeQuickStart: {
      baseUrl: "https://mock-staging.thingspace.verizon.com/api/fota/v2",
    },
  },
  softwareManagementV3: {
    production: { baseUrl: "https://thingspace.verizon.com/api/fota/v3" },
    staging: { baseUrl: "https://staging.thingspace.verizon.com/api/fota/v3" },
    dev: { baseUrl: "https://devmanagement-staging.thingspace.verizon.com:80/fota/v3" },
    qa: { baseUrl: "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/fota/v3" },
    mockServerForLimitedAvailabilitySeeQuickStart: {
      baseUrl: "https://mock-staging.thingspace.verizon.com/api/fota/v3",
    },
  },
  deviceDiagnostics: {
    production: { baseUrl: "https://thingspace.verizon.com/api/diagnostics/v1" },
    staging: { baseUrl: "https://staging.thingspace.verizon.com/api/diagnostics/v1" },
    dev: { baseUrl: "https://devmanagement-staging.thingspace.verizon.com:80/diagnostics/v1" },
    qa: { baseUrl: "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/diagnostics/v1" },
    mockServerForLimitedAvailabilitySeeQuickStart: {
      baseUrl: "https://mock-staging.thingspace.verizon.com/api/diagnostics/v1",
    },
  },
  cloudConnector: {
    production: { baseUrl: "https://thingspace.verizon.com/api/cc/v1" },
    staging: { baseUrl: "https://staging.thingspace.verizon.com/api/cc/v1" },
    dev: { baseUrl: "https://devmanagement-staging.thingspace.verizon.com:80/cc/v1" },
    qa: { baseUrl: "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/cc/v1" },
    mockServerForLimitedAvailabilitySeeQuickStart: {
      baseUrl: "https://mock-staging.thingspace.verizon.com/api/cc/v1",
    },
  },
  hyperPreciseLocation: {
    production: { baseUrl: "https://thingspace.verizon.com/api/hyper-precise/v1" },
    staging: { baseUrl: "https://staging.thingspace.verizon.com/api/hyper-precise/v1" },
    dev: { baseUrl: "https://devmanagement-staging.thingspace.verizon.com:80/hyper-precise/v1" },
    qa: { baseUrl: "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/hyper-precise/v1" },
    mockServerForLimitedAvailabilitySeeQuickStart: {
      baseUrl: "https://mock-staging.thingspace.verizon.com/api/hyper-precise/v1",
    },
  },
  services: {
    production: { baseUrl: "https://5gedge.verizon.com/api/mec/services" },
    staging: { baseUrl: "https://staging.5gedge.verizon.com/api/mec/services" },
    dev: { baseUrl: "https://devmanagement-staging.5gedge.verizon.com:80/mec/services" },
    qa: { baseUrl: "https://tsd-nginx-qa-us-east-1.5gedge.verizon.com/api/mec/services" },
    mockServerForLimitedAvailabilitySeeQuickStart: {
      baseUrl: "https://mock-staging.thingspace.verizon.com/api/mec/services",
    },
  },
  qualityOfService: {
    production: { baseUrl: "https://thingspace.verizon.com/api/m2m/v1/devices" },
    staging: { baseUrl: "https://staging.thingspace.verizon.com/api/m2m/v1/devices" },
    dev: { baseUrl: "https://devmanagement-staging.thingspace.verizon.com/api/m2m/v1/devices" },
    qa: { baseUrl: "https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/m2m/v1/devices" },
    mockServerForLimitedAvailabilitySeeQuickStart: {
      baseUrl: "https://mock-staging.thingspace.verizon.com/api/m2m/v1/devices",
    },
  },
} as const satisfies ServerOptions;

export function buildServers(environment: ServerEnvironment, options: ServerOptions): Servers {
  return {
    hyperPreciseCredentials: (s) =>
      hyperPreciseCredentialsServer(environment, s, options.hyperPreciseCredentials),
    impServer: (s) => impServerServer(environment, s, options.impServer),
    thingspace: (s) => thingspaceServer(environment, s, options.thingspace),
    oAuthServer: (s) => oAuthServerServer(environment, s, options.oAuthServer),
    m2M: (s) => m2MServer(environment, s, options.m2M),
    deviceLocation: (s) => deviceLocationServer(environment, s, options.deviceLocation),
    subscriptionServer: (s) => subscriptionServerServer(environment, s, options.subscriptionServer),
    softwareManagementV1: (s) => softwareManagementV1Server(environment, s, options.softwareManagementV1),
    softwareManagementV2: (s) => softwareManagementV2Server(environment, s, options.softwareManagementV2),
    softwareManagementV3: (s) => softwareManagementV3Server(environment, s, options.softwareManagementV3),
    deviceDiagnostics: (s) => deviceDiagnosticsServer(environment, s, options.deviceDiagnostics),
    cloudConnector: (s) => cloudConnectorServer(environment, s, options.cloudConnector),
    hyperPreciseLocation: (s) => hyperPreciseLocationServer(environment, s, options.hyperPreciseLocation),
    services: (s) => servicesServer(environment, s, options.services),
    qualityOfService: (s) => qualityOfServiceServer(environment, s, options.qualityOfService),
  };
}

function hyperPreciseCredentialsServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: HyperPreciseCredentialsServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = {
        ...DEFAULT_SERVER_OPTIONS.hyperPreciseCredentials.production,
        ...options?.production,
      };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Staging: {
      const staging = { ...DEFAULT_SERVER_OPTIONS.hyperPreciseCredentials.staging, ...options?.staging };
      return { baseUrl: staging.baseUrl, subPath };
    }
    case ServerEnvironment.Dev: {
      const dev = { ...DEFAULT_SERVER_OPTIONS.hyperPreciseCredentials.dev, ...options?.dev };
      return { baseUrl: dev.baseUrl, subPath };
    }
    case ServerEnvironment.Qa: {
      const qa = { ...DEFAULT_SERVER_OPTIONS.hyperPreciseCredentials.qa, ...options?.qa };
      return { baseUrl: qa.baseUrl, subPath };
    }
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart: {
      const mockServerForLimitedAvailabilitySeeQuickStart = {
        ...DEFAULT_SERVER_OPTIONS.hyperPreciseCredentials.mockServerForLimitedAvailabilitySeeQuickStart,
        ...options?.mockServerForLimitedAvailabilitySeeQuickStart,
      };
      return { baseUrl: mockServerForLimitedAvailabilitySeeQuickStart.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function impServerServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: ImpServerServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.impServer.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Staging: {
      const staging = { ...DEFAULT_SERVER_OPTIONS.impServer.staging, ...options?.staging };
      return { baseUrl: staging.baseUrl, subPath };
    }
    case ServerEnvironment.Dev: {
      const dev = { ...DEFAULT_SERVER_OPTIONS.impServer.dev, ...options?.dev };
      return { baseUrl: dev.baseUrl, subPath };
    }
    case ServerEnvironment.Qa: {
      const qa = { ...DEFAULT_SERVER_OPTIONS.impServer.qa, ...options?.qa };
      return { baseUrl: qa.baseUrl, subPath };
    }
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart: {
      const mockServerForLimitedAvailabilitySeeQuickStart = {
        ...DEFAULT_SERVER_OPTIONS.impServer.mockServerForLimitedAvailabilitySeeQuickStart,
        ...options?.mockServerForLimitedAvailabilitySeeQuickStart,
      };
      return { baseUrl: mockServerForLimitedAvailabilitySeeQuickStart.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function thingspaceServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: ThingspaceServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.thingspace.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Staging: {
      const staging = { ...DEFAULT_SERVER_OPTIONS.thingspace.staging, ...options?.staging };
      return { baseUrl: staging.baseUrl, subPath };
    }
    case ServerEnvironment.Dev: {
      const dev = { ...DEFAULT_SERVER_OPTIONS.thingspace.dev, ...options?.dev };
      return { baseUrl: dev.baseUrl, subPath };
    }
    case ServerEnvironment.Qa: {
      const qa = { ...DEFAULT_SERVER_OPTIONS.thingspace.qa, ...options?.qa };
      return { baseUrl: qa.baseUrl, subPath };
    }
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart: {
      const mockServerForLimitedAvailabilitySeeQuickStart = {
        ...DEFAULT_SERVER_OPTIONS.thingspace.mockServerForLimitedAvailabilitySeeQuickStart,
        ...options?.mockServerForLimitedAvailabilitySeeQuickStart,
      };
      return { baseUrl: mockServerForLimitedAvailabilitySeeQuickStart.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function oAuthServerServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: OAuthServerServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.oAuthServer.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Staging: {
      const staging = { ...DEFAULT_SERVER_OPTIONS.oAuthServer.staging, ...options?.staging };
      return { baseUrl: staging.baseUrl, subPath };
    }
    case ServerEnvironment.Dev: {
      const dev = { ...DEFAULT_SERVER_OPTIONS.oAuthServer.dev, ...options?.dev };
      return { baseUrl: dev.baseUrl, subPath };
    }
    case ServerEnvironment.Qa: {
      const qa = { ...DEFAULT_SERVER_OPTIONS.oAuthServer.qa, ...options?.qa };
      return { baseUrl: qa.baseUrl, subPath };
    }
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart: {
      const mockServerForLimitedAvailabilitySeeQuickStart = {
        ...DEFAULT_SERVER_OPTIONS.oAuthServer.mockServerForLimitedAvailabilitySeeQuickStart,
        ...options?.mockServerForLimitedAvailabilitySeeQuickStart,
      };
      return { baseUrl: mockServerForLimitedAvailabilitySeeQuickStart.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function m2MServer(environment: ServerEnvironment, subPath: string, options?: M2MServerOptions): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.m2M.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Staging: {
      const staging = { ...DEFAULT_SERVER_OPTIONS.m2M.staging, ...options?.staging };
      return { baseUrl: staging.baseUrl, subPath };
    }
    case ServerEnvironment.Dev: {
      const dev = { ...DEFAULT_SERVER_OPTIONS.m2M.dev, ...options?.dev };
      return { baseUrl: dev.baseUrl, subPath };
    }
    case ServerEnvironment.Qa: {
      const qa = { ...DEFAULT_SERVER_OPTIONS.m2M.qa, ...options?.qa };
      return { baseUrl: qa.baseUrl, subPath };
    }
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart: {
      const mockServerForLimitedAvailabilitySeeQuickStart = {
        ...DEFAULT_SERVER_OPTIONS.m2M.mockServerForLimitedAvailabilitySeeQuickStart,
        ...options?.mockServerForLimitedAvailabilitySeeQuickStart,
      };
      return { baseUrl: mockServerForLimitedAvailabilitySeeQuickStart.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function deviceLocationServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: DeviceLocationServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.deviceLocation.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Staging: {
      const staging = { ...DEFAULT_SERVER_OPTIONS.deviceLocation.staging, ...options?.staging };
      return { baseUrl: staging.baseUrl, subPath };
    }
    case ServerEnvironment.Dev: {
      const dev = { ...DEFAULT_SERVER_OPTIONS.deviceLocation.dev, ...options?.dev };
      return { baseUrl: dev.baseUrl, subPath };
    }
    case ServerEnvironment.Qa: {
      const qa = { ...DEFAULT_SERVER_OPTIONS.deviceLocation.qa, ...options?.qa };
      return { baseUrl: qa.baseUrl, subPath };
    }
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart: {
      const mockServerForLimitedAvailabilitySeeQuickStart = {
        ...DEFAULT_SERVER_OPTIONS.deviceLocation.mockServerForLimitedAvailabilitySeeQuickStart,
        ...options?.mockServerForLimitedAvailabilitySeeQuickStart,
      };
      return { baseUrl: mockServerForLimitedAvailabilitySeeQuickStart.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function subscriptionServerServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: SubscriptionServerServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.subscriptionServer.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Staging: {
      const staging = { ...DEFAULT_SERVER_OPTIONS.subscriptionServer.staging, ...options?.staging };
      return { baseUrl: staging.baseUrl, subPath };
    }
    case ServerEnvironment.Dev: {
      const dev = { ...DEFAULT_SERVER_OPTIONS.subscriptionServer.dev, ...options?.dev };
      return { baseUrl: dev.baseUrl, subPath };
    }
    case ServerEnvironment.Qa: {
      const qa = { ...DEFAULT_SERVER_OPTIONS.subscriptionServer.qa, ...options?.qa };
      return { baseUrl: qa.baseUrl, subPath };
    }
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart: {
      const mockServerForLimitedAvailabilitySeeQuickStart = {
        ...DEFAULT_SERVER_OPTIONS.subscriptionServer.mockServerForLimitedAvailabilitySeeQuickStart,
        ...options?.mockServerForLimitedAvailabilitySeeQuickStart,
      };
      return { baseUrl: mockServerForLimitedAvailabilitySeeQuickStart.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function softwareManagementV1Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: SoftwareManagementV1ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = {
        ...DEFAULT_SERVER_OPTIONS.softwareManagementV1.production,
        ...options?.production,
      };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Staging: {
      const staging = { ...DEFAULT_SERVER_OPTIONS.softwareManagementV1.staging, ...options?.staging };
      return { baseUrl: staging.baseUrl, subPath };
    }
    case ServerEnvironment.Dev: {
      const dev = { ...DEFAULT_SERVER_OPTIONS.softwareManagementV1.dev, ...options?.dev };
      return { baseUrl: dev.baseUrl, subPath };
    }
    case ServerEnvironment.Qa: {
      const qa = { ...DEFAULT_SERVER_OPTIONS.softwareManagementV1.qa, ...options?.qa };
      return { baseUrl: qa.baseUrl, subPath };
    }
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart: {
      const mockServerForLimitedAvailabilitySeeQuickStart = {
        ...DEFAULT_SERVER_OPTIONS.softwareManagementV1.mockServerForLimitedAvailabilitySeeQuickStart,
        ...options?.mockServerForLimitedAvailabilitySeeQuickStart,
      };
      return { baseUrl: mockServerForLimitedAvailabilitySeeQuickStart.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function softwareManagementV2Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: SoftwareManagementV2ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = {
        ...DEFAULT_SERVER_OPTIONS.softwareManagementV2.production,
        ...options?.production,
      };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Staging: {
      const staging = { ...DEFAULT_SERVER_OPTIONS.softwareManagementV2.staging, ...options?.staging };
      return { baseUrl: staging.baseUrl, subPath };
    }
    case ServerEnvironment.Dev: {
      const dev = { ...DEFAULT_SERVER_OPTIONS.softwareManagementV2.dev, ...options?.dev };
      return { baseUrl: dev.baseUrl, subPath };
    }
    case ServerEnvironment.Qa: {
      const qa = { ...DEFAULT_SERVER_OPTIONS.softwareManagementV2.qa, ...options?.qa };
      return { baseUrl: qa.baseUrl, subPath };
    }
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart: {
      const mockServerForLimitedAvailabilitySeeQuickStart = {
        ...DEFAULT_SERVER_OPTIONS.softwareManagementV2.mockServerForLimitedAvailabilitySeeQuickStart,
        ...options?.mockServerForLimitedAvailabilitySeeQuickStart,
      };
      return { baseUrl: mockServerForLimitedAvailabilitySeeQuickStart.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function softwareManagementV3Server(
  environment: ServerEnvironment,
  subPath: string,
  options?: SoftwareManagementV3ServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = {
        ...DEFAULT_SERVER_OPTIONS.softwareManagementV3.production,
        ...options?.production,
      };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Staging: {
      const staging = { ...DEFAULT_SERVER_OPTIONS.softwareManagementV3.staging, ...options?.staging };
      return { baseUrl: staging.baseUrl, subPath };
    }
    case ServerEnvironment.Dev: {
      const dev = { ...DEFAULT_SERVER_OPTIONS.softwareManagementV3.dev, ...options?.dev };
      return { baseUrl: dev.baseUrl, subPath };
    }
    case ServerEnvironment.Qa: {
      const qa = { ...DEFAULT_SERVER_OPTIONS.softwareManagementV3.qa, ...options?.qa };
      return { baseUrl: qa.baseUrl, subPath };
    }
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart: {
      const mockServerForLimitedAvailabilitySeeQuickStart = {
        ...DEFAULT_SERVER_OPTIONS.softwareManagementV3.mockServerForLimitedAvailabilitySeeQuickStart,
        ...options?.mockServerForLimitedAvailabilitySeeQuickStart,
      };
      return { baseUrl: mockServerForLimitedAvailabilitySeeQuickStart.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function deviceDiagnosticsServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: DeviceDiagnosticsServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.deviceDiagnostics.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Staging: {
      const staging = { ...DEFAULT_SERVER_OPTIONS.deviceDiagnostics.staging, ...options?.staging };
      return { baseUrl: staging.baseUrl, subPath };
    }
    case ServerEnvironment.Dev: {
      const dev = { ...DEFAULT_SERVER_OPTIONS.deviceDiagnostics.dev, ...options?.dev };
      return { baseUrl: dev.baseUrl, subPath };
    }
    case ServerEnvironment.Qa: {
      const qa = { ...DEFAULT_SERVER_OPTIONS.deviceDiagnostics.qa, ...options?.qa };
      return { baseUrl: qa.baseUrl, subPath };
    }
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart: {
      const mockServerForLimitedAvailabilitySeeQuickStart = {
        ...DEFAULT_SERVER_OPTIONS.deviceDiagnostics.mockServerForLimitedAvailabilitySeeQuickStart,
        ...options?.mockServerForLimitedAvailabilitySeeQuickStart,
      };
      return { baseUrl: mockServerForLimitedAvailabilitySeeQuickStart.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function cloudConnectorServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: CloudConnectorServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.cloudConnector.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Staging: {
      const staging = { ...DEFAULT_SERVER_OPTIONS.cloudConnector.staging, ...options?.staging };
      return { baseUrl: staging.baseUrl, subPath };
    }
    case ServerEnvironment.Dev: {
      const dev = { ...DEFAULT_SERVER_OPTIONS.cloudConnector.dev, ...options?.dev };
      return { baseUrl: dev.baseUrl, subPath };
    }
    case ServerEnvironment.Qa: {
      const qa = { ...DEFAULT_SERVER_OPTIONS.cloudConnector.qa, ...options?.qa };
      return { baseUrl: qa.baseUrl, subPath };
    }
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart: {
      const mockServerForLimitedAvailabilitySeeQuickStart = {
        ...DEFAULT_SERVER_OPTIONS.cloudConnector.mockServerForLimitedAvailabilitySeeQuickStart,
        ...options?.mockServerForLimitedAvailabilitySeeQuickStart,
      };
      return { baseUrl: mockServerForLimitedAvailabilitySeeQuickStart.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function hyperPreciseLocationServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: HyperPreciseLocationServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = {
        ...DEFAULT_SERVER_OPTIONS.hyperPreciseLocation.production,
        ...options?.production,
      };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Staging: {
      const staging = { ...DEFAULT_SERVER_OPTIONS.hyperPreciseLocation.staging, ...options?.staging };
      return { baseUrl: staging.baseUrl, subPath };
    }
    case ServerEnvironment.Dev: {
      const dev = { ...DEFAULT_SERVER_OPTIONS.hyperPreciseLocation.dev, ...options?.dev };
      return { baseUrl: dev.baseUrl, subPath };
    }
    case ServerEnvironment.Qa: {
      const qa = { ...DEFAULT_SERVER_OPTIONS.hyperPreciseLocation.qa, ...options?.qa };
      return { baseUrl: qa.baseUrl, subPath };
    }
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart: {
      const mockServerForLimitedAvailabilitySeeQuickStart = {
        ...DEFAULT_SERVER_OPTIONS.hyperPreciseLocation.mockServerForLimitedAvailabilitySeeQuickStart,
        ...options?.mockServerForLimitedAvailabilitySeeQuickStart,
      };
      return { baseUrl: mockServerForLimitedAvailabilitySeeQuickStart.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function servicesServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: ServicesServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.services.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Staging: {
      const staging = { ...DEFAULT_SERVER_OPTIONS.services.staging, ...options?.staging };
      return { baseUrl: staging.baseUrl, subPath };
    }
    case ServerEnvironment.Dev: {
      const dev = { ...DEFAULT_SERVER_OPTIONS.services.dev, ...options?.dev };
      return { baseUrl: dev.baseUrl, subPath };
    }
    case ServerEnvironment.Qa: {
      const qa = { ...DEFAULT_SERVER_OPTIONS.services.qa, ...options?.qa };
      return { baseUrl: qa.baseUrl, subPath };
    }
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart: {
      const mockServerForLimitedAvailabilitySeeQuickStart = {
        ...DEFAULT_SERVER_OPTIONS.services.mockServerForLimitedAvailabilitySeeQuickStart,
        ...options?.mockServerForLimitedAvailabilitySeeQuickStart,
      };
      return { baseUrl: mockServerForLimitedAvailabilitySeeQuickStart.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function qualityOfServiceServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: QualityOfServiceServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.qualityOfService.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Staging: {
      const staging = { ...DEFAULT_SERVER_OPTIONS.qualityOfService.staging, ...options?.staging };
      return { baseUrl: staging.baseUrl, subPath };
    }
    case ServerEnvironment.Dev: {
      const dev = { ...DEFAULT_SERVER_OPTIONS.qualityOfService.dev, ...options?.dev };
      return { baseUrl: dev.baseUrl, subPath };
    }
    case ServerEnvironment.Qa: {
      const qa = { ...DEFAULT_SERVER_OPTIONS.qualityOfService.qa, ...options?.qa };
      return { baseUrl: qa.baseUrl, subPath };
    }
    case ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart: {
      const mockServerForLimitedAvailabilitySeeQuickStart = {
        ...DEFAULT_SERVER_OPTIONS.qualityOfService.mockServerForLimitedAvailabilitySeeQuickStart,
        ...options?.mockServerForLimitedAvailabilitySeeQuickStart,
      };
      return { baseUrl: mockServerForLimitedAvailabilitySeeQuickStart.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new SdkError({ message: `Unknown server environment: ${String(environment)}` });
}
