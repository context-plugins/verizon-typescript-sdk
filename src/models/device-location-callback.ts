import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { callbackServiceNameSchema, type CallbackServiceName } from "./callback-service-name.js";

export type DeviceLocationCallback = {
  name: CallbackServiceName;
  url: string;
};

export const deviceLocationCallbackSchema: Schema<DeviceLocationCallback> = s.object<DeviceLocationCallback>({
  name: callbackServiceNameSchema,
  url: s.string(),
});
