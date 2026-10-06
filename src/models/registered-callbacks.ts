import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** List of registered callback endpoints. */
export type RegisteredCallbacks = {
  /** The name of the billing account for which callback messages will be sent. */
  aname?: string;
  /**
   * The name of the callback service, which identifies the type and format of messages that will be
   * sent to the registered URL. This will be 'Fota' for the Software Management Services callback.
   */
  name?: string;
  /** The address to which callback messages will be sent. */
  url?: string;
  /** The user name that ThingSpace will return in the callback messages. */
  username?: string;
  /** The password that ThingSpace will return in the callback messages. */
  password?: string;
};

export const registeredCallbacksSchema: Schema<RegisteredCallbacks> = s.object<RegisteredCallbacks>({
  aname: s.optional(s.string()),
  name: s.optional(s.string()),
  url: s.optional(s.string()),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
});
