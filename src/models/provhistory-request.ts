import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gioDeviceIdSchema, type GioDeviceId } from "./gio-device-id.js";

export type ProvhistoryRequest = {
  accountName?: string;
  deviceFilter?: GioDeviceId[];
  earliest?: Date;
  latest?: Date;
};

export const provhistoryRequestSchema: Schema<ProvhistoryRequest> = s.object<ProvhistoryRequest>({
  accountName: s.optional(s.string()),
  deviceFilter: s.optional(s.array(s.lazy(() => gioDeviceIdSchema))),
  earliest: s.optional(s.dateTime()),
  latest: s.optional(s.dateTime()),
});
