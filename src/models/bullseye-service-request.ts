import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceServiceRequestSchema, type DeviceServiceRequest } from "./device-service-request.js";

export type BullseyeServiceRequest = {
  deviceList: DeviceServiceRequest[];
  accountNumber: string;
};

export const bullseyeServiceRequestSchema: Schema<BullseyeServiceRequest> = s.object<BullseyeServiceRequest>({
  deviceList: s.array(s.lazy(() => deviceServiceRequestSchema)),
  accountNumber: s.string(),
});
