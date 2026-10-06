import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Callback listener is Registered. */
export type CallbackRegistered = {
  /** The numeric name of the account and must include leading zeroes. */
  accountName: string;
  /**
   * The name of the callback service, which identifies the type and format of messages that will be
   * sent to the registered URL.
   */
  name: string;
};

export const callbackRegisteredSchema: Schema<CallbackRegistered> = s.object<CallbackRegistered>({
  accountName: s.string(),
  name: s.string(),
});
