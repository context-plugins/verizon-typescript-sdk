import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { geoFenceSchema, type GeoFence } from "./geo-fence.js";
import { messageStandardSchema, type MessageStandard } from "./message-standard.js";
import { message4Schema, type Message4 } from "./unions/message4.js";

export type GeoFenceConfigurationRequest = {
  name?: string;
  description?: string;
  geoFence: GeoFence;
  messageStandard?: MessageStandard;
  messages: Message4[];
  isActive: boolean;
};

export const geoFenceConfigurationRequestSchema: Schema<GeoFenceConfigurationRequest> =
  s.object<GeoFenceConfigurationRequest>({
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    geoFence: geoFenceSchema,
    messageStandard: s.optional(s.lazy(() => messageStandardSchema)),
    messages: s.array(s.lazy(() => message4Schema)),
    isActive: s.boolean(),
  });
