import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { furtherInfoMsgIdSchema, type FurtherInfoMsgId } from "../further-info-msg-id.js";
import { roadSignMsgIdSchema, type RoadSignMsgId } from "../road-sign-msg-id.js";

export type MsgId = FurtherInfoMsgId | RoadSignMsgId;

export const msgIdSchema: Schema<MsgId> = s.of<MsgId>(
  s.union([s.lazy(() => furtherInfoMsgIdSchema), s.lazy(() => roadSignMsgIdSchema)]),
);
