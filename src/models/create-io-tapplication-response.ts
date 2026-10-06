import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A success response includes an array of all matching events. Each event includes the full event
 * resource definition.
 */
export type CreateIoTApplicationResponse = {
  /**
   * An application will be created under the user's Azure subscription with this name and of type
   * IOT central.
   */
  appName?: string;
  /**
   * Part of the user credentials (from Azure) the user needs to use for calling further TS Core
   * APIs for setting up Azure cloud connector.
   */
  sharedSecret?: string;
  /** An IOT central endpoint the user can use to see the data that is being streamed. */
  url?: string;
};

export const createIoTApplicationResponseSchema: Schema<CreateIoTApplicationResponse> =
  s.object<CreateIoTApplicationResponse>({
    appName: s.optional(s.string()),
    sharedSecret: s.optional(s.string()),
    url: s.optional(s.string()),
  });
