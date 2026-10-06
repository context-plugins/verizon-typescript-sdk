import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Callback endpoint information. */
export type FotaV1CallbackRegistrationRequest = {
  /**
   * The name of the callback service that you want to subscribe to, which must be 'Fota' for
   * Software Management Services callbacks.
   */
  name: string;
  /**
   * The address on your server where you have enabled a listening service for Software Management
   * Services callback messages.
   */
  url: string;
  /** The user name that ThingSpace should return in the callback messages. */
  username?: string;
  /** The password that ThingSpace should return in the callback messages. */
  password?: string;
};

export const fotaV1CallbackRegistrationRequestSchema: Schema<FotaV1CallbackRegistrationRequest> =
  s.object<FotaV1CallbackRegistrationRequest>({
    name: s.string(),
    url: s.string(),
    username: s.optional(s.string()),
    password: s.optional(s.string()),
  });
