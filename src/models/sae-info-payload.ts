import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataFrameSchema, type DataFrame } from "./data-frame.js";

export type SaeInfoPayload = {
  msgCnt?: number;
  timeStamp?: number;
  packetId?: string;
  urlB?: string;
  dataFrames: DataFrame[];
};

export const saeInfoPayloadSchema: Schema<SaeInfoPayload> = s.object<SaeInfoPayload>({
  msgCnt: s.optional(s.number()),
  timeStamp: s.optional(s.number()),
  packetId: s.optional(s.string()),
  urlB: s.optional(s.string()),
  dataFrames: s.array(s.lazy(() => dataFrameSchema)),
  _keysMap: {
    packetId: "packetID",
  },
});
