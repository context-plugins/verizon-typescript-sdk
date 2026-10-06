import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributeSettingSchema, type AttributeSetting } from "./attribute-setting.js";
import { deviceSchema, type Device } from "./device.js";

/** Diagnostic observation settings and attributes for a device. */
export type DiagnosticObservationSetting = {
  /**
   * The name of the billing account for which callback messages will be sent. Format:
   * "##########-#####".
   */
  accountName?: string;
  /** Identifies a particular IoT device. */
  device?: Device;
  /** Streaming RF parameters for which you want to retrieve diagnostic settings. */
  attributes?: AttributeSetting[];
};

export const diagnosticObservationSettingSchema: Schema<DiagnosticObservationSetting> =
  s.object<DiagnosticObservationSetting>({
    accountName: s.optional(s.string()),
    device: s.optional(s.lazy(() => deviceSchema)),
    attributes: s.optional(s.array(s.lazy(() => attributeSettingSchema))),
  });
