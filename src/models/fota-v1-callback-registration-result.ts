import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Registered callback account name and service name. */
export type FotaV1CallbackRegistrationResult = {
  /** The name of the billing account for which callback messages will be sent. */
  accountName?: string;
  /**
   * The name of the callback service, which identifies the type and format of messages that will be
   * sent to the registered URL. This will be 'Fota' for the Software Management Services callback.
   */
  serviceName?: string;
};

export const fotaV1CallbackRegistrationResultSchema: Schema<FotaV1CallbackRegistrationResult> =
  s.object<FotaV1CallbackRegistrationResult>({
    accountName: s.optional(s.string()),
    serviceName: s.optional(s.string()),
  });
