import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceCredentialRequestItem = {
  /** 15-digit alphanumeric identifier */
  imei: string;
};

export const deviceCredentialRequestItemSchema: Schema<DeviceCredentialRequestItem> =
  s.object<DeviceCredentialRequestItem>({
    imei: s.string(),
  });
