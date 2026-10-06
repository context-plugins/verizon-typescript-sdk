import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { callbackServiceNameSchema, type CallbackServiceName } from "./callback-service-name.js";

export type DeviceLocationCallback = {
  /** The name of the callback service. */
  name: CallbackServiceName;
  /** The location of your callback listener. */
  url: string;
};

export const deviceLocationCallbackSchema: Schema<DeviceLocationCallback> = s.object<DeviceLocationCallback>({
  name: callbackServiceNameSchema,
  url: s.string(),
});
