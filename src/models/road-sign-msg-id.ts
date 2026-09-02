import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roadSignIdSchema, type RoadSignId } from "./road-sign-id.js";

export type RoadSignMsgId = {
  roadSignId: RoadSignId;
};

export const roadSignMsgIdSchema: Schema<RoadSignMsgId> = s.object<RoadSignMsgId>({
  roadSignId: roadSignIdSchema,
  _keysMap: {
    roadSignId: "roadSignID",
  },
});
