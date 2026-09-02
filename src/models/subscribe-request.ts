import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { qoSdeviceInfoSchema, type QoSdeviceInfo } from "./qo-sdevice-info.js";

export type SubscribeRequest = {
  accountName: string;
  deviceInfo: QoSdeviceInfo[];
};

export const subscribeRequestSchema: Schema<SubscribeRequest> = s.object<SubscribeRequest>({
  accountName: s.string(),
  deviceInfo: s.array(s.lazy(() => qoSdeviceInfoSchema)),
});
