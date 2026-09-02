import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  actionResultwithDeviceConfigSchema,
  type ActionResultwithDeviceConfig,
} from "./action-resultwith-device-config.js";

export type DtoDeviceActionSetResponse = {
  actionresult?: ActionResultwithDeviceConfig[];
};

export const dtoDeviceActionSetResponseSchema: Schema<DtoDeviceActionSetResponse> =
  s.object<DtoDeviceActionSetResponse>({
    actionresult: s.optional(s.array(s.lazy(() => actionResultwithDeviceConfigSchema))),
  });
