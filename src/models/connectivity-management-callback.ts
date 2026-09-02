import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectivityManagementCallback = {
  accountName?: string;
  password?: string;
  serviceName?: string;
  url?: string;
  username?: string;
};

export const connectivityManagementCallbackSchema: Schema<ConnectivityManagementCallback> =
  s.object<ConnectivityManagementCallback>({
    accountName: s.optional(s.string()),
    password: s.optional(s.string()),
    serviceName: s.optional(s.string()),
    url: s.optional(s.string()),
    username: s.optional(s.string()),
  });
