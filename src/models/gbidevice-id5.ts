import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gbideviceId15Schema, type GbideviceId15 } from "./gbidevice-id15.js";

export type GbideviceId5 = {
  deviceId?: GbideviceId15;
};

export const gbideviceId5Schema: Schema<GbideviceId5> = s.object<GbideviceId5>({
  deviceId: s.optional(s.lazy(() => gbideviceId15Schema)),
});
