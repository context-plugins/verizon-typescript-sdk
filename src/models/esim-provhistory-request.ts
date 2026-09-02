import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceId2Schema, type DeviceId2 } from "./device-id2.js";

export type ESimProvhistoryRequest = {
  accountName?: string;
  deviceFilter?: DeviceId2[];
  earliest?: Date;
  latest?: Date;
};

export const eSimProvhistoryRequestSchema: Schema<ESimProvhistoryRequest> = s.object<ESimProvhistoryRequest>({
  accountName: s.optional(s.string()),
  deviceFilter: s.optional(s.array(s.lazy(() => deviceId2Schema))),
  earliest: s.optional(s.dateTime()),
  latest: s.optional(s.dateTime()),
});
