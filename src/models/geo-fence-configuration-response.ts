import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { geoFenceSchema, type GeoFence } from "./geo-fence.js";
import { messageStandardSchema, type MessageStandard } from "./message-standard.js";
import { message4Schema, type Message4 } from "./unions/message4.js";

export type GeoFenceConfigurationResponse = {
  id: string;
  vendorId: string;
  name?: string;
  description?: string;
  geoFence: GeoFence;
  messageStandard: MessageStandard;
  messages: Message4[];
  isActive: boolean;
};

export const geoFenceConfigurationResponseSchema: Schema<GeoFenceConfigurationResponse> =
  s.object<GeoFenceConfigurationResponse>({
    id: s.string(),
    vendorId: s.string(),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    geoFence: geoFenceSchema,
    messageStandard: messageStandardSchema,
    messages: s.array(s.lazy(() => message4Schema)),
    isActive: s.boolean(),
  });
