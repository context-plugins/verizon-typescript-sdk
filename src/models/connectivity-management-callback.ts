import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Includes callback listeners that were registered through the Connectivity Management API. */
export type ConnectivityManagementCallback = {
  /** The name of the billing account for which callback messages will be sent. */
  accountName?: string;
  /**
   * The password defined when a URL was registered for the callback service, or an empty string if
   * no password was defined.
   */
  password?: string;
  /**
   * The name of the callback service, which identifies the type and format of messages that will be
   * sent to the registered URL.
   */
  serviceName?: string;
  /**
   * The address of the callback listening service where the ThingSpace Platform will send callback
   * messages for the service type.
   */
  url?: string;
  /**
   * The username defined when a URL was registered for the callback service, or an empty string if
   * no username was defined.
   */
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
