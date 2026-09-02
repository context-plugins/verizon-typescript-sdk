import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SaeAlertPayload = {
  msgCnt?: number;
  typeEvent: number;
  description?: number[];
};

export const saeAlertPayloadSchema: Schema<SaeAlertPayload> = s.object<SaeAlertPayload>({
  msgCnt: s.optional(s.number()),
  typeEvent: s.number(),
  description: s.optional(s.array(s.number())),
});
