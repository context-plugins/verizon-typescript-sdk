import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gbideviceId15Schema, type GbideviceId15 } from "./gbidevice-id15.js";

export type GbideviceIdarray25 = {
  deviceId?: GbideviceId15[];
};

export const gbideviceIdarray25Schema: Schema<GbideviceIdarray25> = s.object<GbideviceIdarray25>({
  deviceId: s.optional(s.array(s.lazy(() => gbideviceId15Schema))),
});
