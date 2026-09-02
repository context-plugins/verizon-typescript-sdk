import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceDiagnosticsCallback = {
  accountName: string;
  serviceName: string;
  endpoint: string;
  createdOn: Date;
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
