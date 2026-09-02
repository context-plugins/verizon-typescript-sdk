import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { geoFenceSchema, type GeoFence } from "./geo-fence.js";
import { messageStandardSchema, type MessageStandard } from "./message-standard.js";
import { message4Schema, type Message4 } from "./unions/message4.js";

export type GeoFenceConfigurationUpdateRequest = {
  name?: string;
  description?: string;
  geoFence?: GeoFence;
  messageStandard?: MessageStandard;
  messages?: Message4[];
  isActive?: boolean;
};

export const geoFenceConfigurationUpdateRequestSchema: Schema<GeoFenceConfigurationUpdateRequest> =
  s.object<GeoFenceConfigurationUpdateRequest>({
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    geoFence: s.optional(s.lazy(() => geoFenceSchema)),
    messageStandard: s.optional(s.lazy(() => messageStandardSchema)),
    messages: s.optional(s.array(s.lazy(() => message4Schema))),
    isActive: s.optional(s.boolean()),
  });
