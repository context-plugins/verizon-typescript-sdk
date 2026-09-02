import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flowInfoSchema, type FlowInfo } from "./flow-info.js";
import { qoSdeviceIdSchema, type QoSdeviceId } from "./qo-sdevice-id.js";

export type QoSdeviceInfo = {
  deviceId: QoSdeviceId;
  deviceIPv6Addr?: string;
  flowInfo: FlowInfo[];
};

export const qoSdeviceInfoSchema: Schema<QoSdeviceInfo> = s.object<QoSdeviceInfo>({
  deviceId: qoSdeviceIdSchema,
  deviceIPv6Addr: s.optional(s.string()),
  flowInfo: s.array(s.lazy(() => flowInfoSchema)),
});
