import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributeSettingSchema, type AttributeSetting } from "./attribute-setting.js";
import { deviceSchema, type Device } from "./device.js";

export type DiagnosticObservationSetting = {
  accountName?: string;
  device?: Device;
  attributes?: AttributeSetting[];
};

export const diagnosticObservationSettingSchema: Schema<DiagnosticObservationSetting> =
  s.object<DiagnosticObservationSetting>({
    accountName: s.optional(s.string()),
    device: s.optional(s.lazy(() => deviceSchema)),
    attributes: s.optional(s.array(s.lazy(() => attributeSettingSchema))),
  });
