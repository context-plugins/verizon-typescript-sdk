import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Specifies the callback service that is being subscribed to and the URL where the listening
 * service is running.
 */
export type CallbackRegistrationRequest = {
  /**
   * The name of the billing account for which callback messages will be sent. Format:
   * "##########-#####".
   */
  accountName: string;
  /**
   * The name of the callback service, which identifies the type and format of messages that will be
   * sent to the registered URL.
   */
  serviceName: string;
  /** The URL for your web server. */
  endpoint: string;
  /** Your HTTP headers. */
  httpHeaders?: Record<string, unknown>;
};

export const callbackRegistrationRequestSchema: Schema<CallbackRegistrationRequest> =
  s.object<CallbackRegistrationRequest>({
    accountName: s.string(),
    serviceName: s.string(),
    endpoint: s.string(),
    httpHeaders: s.optional(s.record(s.string(), s.unknown())),
  });
