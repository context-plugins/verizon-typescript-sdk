import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CallbackCreated = {
  /** The numeric name of the account and must include leading zeroes. */
  accountName: string;
  /**
   * The name of the callback service, which identifies the type and format of messages that will be
   * sent to the registered URL.
   */
  name: string;
  /**
   * The address of the callback listening service where the ThingSpace Platform will send callback
   * messages for the service type.
   */
  url?: string;
};

export const callbackCreatedSchema: Schema<CallbackCreated> = s.object<CallbackCreated>({
  accountName: s.string(),
  name: s.string(),
  url: s.optional(s.string()),
});
