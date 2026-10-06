import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Callback information of an existing diagnostics subscription. */
export type DeviceDiagnosticsCallback = {
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
  /** The date and time of when this request was created. */
  createdOn: Date;
  /** Your HTTP headers. */
  httpHeaders?: Record<string, unknown>;
};

export const deviceDiagnosticsCallbackSchema: Schema<DeviceDiagnosticsCallback> =
  s.object<DeviceDiagnosticsCallback>({
    accountName: s.string(),
    serviceName: s.string(),
    endpoint: s.string(),
    createdOn: s.dateTime(),
    httpHeaders: s.optional(s.record(s.string(), s.unknown())),
  });
