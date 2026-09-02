import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentFrictionInfoSchema, type ContentFrictionInfo } from "./content-friction-info.js";
import { frameTypeSchema, type FrameType } from "./frame-type.js";
import { geographicalPathSchema, type GeographicalPath } from "./geographical-path.js";
import { contentSchema, type Content } from "./unions/content.js";
import { msgIdSchema, type MsgId } from "./unions/msg-id.js";

export type DataFrame = {
  doNotUse1?: number;
  frameType: FrameType;
  msgId: MsgId;
  startYear?: number;
  startTime: number;
  durationTime: number;
  priority: number;
  doNotUse2?: number;
  regions: GeographicalPath[];
  doNotUse3?: number;
  doNotUse4?: number;
  content: Content;
  contentNew?: ContentFrictionInfo;
};

export const dataFrameSchema: Schema<DataFrame> = s.object<DataFrame>({
  doNotUse1: s.optional(s.number()),
  frameType: frameTypeSchema,
  msgId: msgIdSchema,
  startYear: s.optional(s.number()),
  startTime: s.number(),
  durationTime: s.number(),
  priority: s.number(),
  doNotUse2: s.optional(s.number()),
  regions: s.array(s.lazy(() => geographicalPathSchema)),
  doNotUse3: s.optional(s.number()),
  doNotUse4: s.optional(s.number()),
  content: contentSchema,
  contentNew: s.optional(s.lazy(() => contentFrictionInfoSchema)),
});
