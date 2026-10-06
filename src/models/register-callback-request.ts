import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request to register a callback. */
export type RegisterCallbackRequest = {
  /** The name of the callback service that you want to subscribe to. */
  name: string;
  /**
   * The address on your server where you have enabled a listening service for callback messages.
   */
  url: string;
  /** The user name that the M2M Platform should return in the callback messages. */
  username?: string;
  /** The password that the M2M Platform should return in the callback messages. */
  password?: string;
};

export const registerCallbackRequestSchema: Schema<RegisterCallbackRequest> =
  s.object<RegisterCallbackRequest>({
    name: s.string(),
    url: s.string(),
    username: s.optional(s.string()),
    password: s.optional(s.string()),
  });
